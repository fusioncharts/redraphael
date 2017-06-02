/*jslint forin: true, regexp: true, todo: true, white: false, browser: true,
 sloppy: true, white: true, eqeq: false, newcap: true, nomen: true */

/*global FusionCharts */

/**
 * Raphael Canvas Extension
 */

var R = require('./raphael.core');

if (R.canvas) {
    var win = R._g.win,
        doc = R._g.doc,
        g = R._g,
        STRING = 'string',
        PX = 'px',
        separator = /[, ]+/,
        Str = win.String,
        toInt = win.parseInt,
        toFloat = win.parseFloat,
        math = win.Math,
        mmax = math.max,
        mmin = math.min,
        pi = math.PI,
        mathFloor = math.floor,
        eve = R.eve,
        paperproto = R.fn,
        elproto = R.el,
        setproto = R.st,
        clone = R.clone,
        deg2rad = pi / 180,
        rad2deg = 180 / pi,
        DEFAULT_FILL = "#fff",
        DEFAULT_STROKE = "#000",
        has = "hasOwnProperty",
        S = " ",

    /** @todo: detect touch */
    supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints > 0,
        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel".split(S),
        noHandle = false,
        $,
        FauxNode,
        Element,
        draggable = [],
        drag = [],
        dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }

            //var node = dragi.el.node;
            //o,
            //next = node.nextSibling,
            //parent = node.parentNode,
            //display = node.style.display;

            /** @todo: implement raphael.drag.over */

            //g.win.opera && parent.removeChild(node);
            //node.style.display = "none";
            //o = dragi.el.paper.getElementByPoint(x, y);
            //node.style.display = display;
            //g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            //o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
        dragUp = function (e) {
        R.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            dragi.onendHandler && eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
        }
        drag = [];
    };

    $ = R._createNode = function (el, attr) {
        if (attr) {
            if (typeof el === STRING) {
                el = $(el);
            }
            for (var key in attr) if (attr.hasOwnProperty(key)) {
                el.setAttribute(key, Str(attr[key]));
            }
        } else {
            el = doc.createElement(el);
        }
        return el;
    };

    R._getConnectedNodes = function (node) {
        return {
            above: [],
            below: []
        };
    };

    R._getTargetNode = function (coords) {
        var x = coords[0],
            y = coords[1];
    };

    R._containerEventHandler = function (event) {
        event = event || win.event;

        if (noHandle) {
            return;
        }

        /** @todo: do not use offsetX and offsetY */
        var x = event.offsetX,
            //mathFloor(event.pageX || (event.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft) || 0),
        y = event.offsetY,
            //mathFloor(event.pageY || (event.clientY + doc.body.scrollTop + doc.documentElement.scrollTop) || 0),
        type = event.type,
            node = R._getTargetNode([x, y]);

        //console.log(type + ":: x: " + x + " y: " + y);

        /*
        if (typeof node.listeners[type] === 'function') {
            node.listeners[type].call(node, e);
        }*/
    };

    FauxNode = function (parent) {
        this.type = "basic";

        this.owner = parent;

        // Element reference needed to get attrs so that there is no need to
        // maintain a redundant copy.
        this._rElement = null;

        // False if this element does not need mouse interactivity.
        this.mouseInteractions = false;
        this.matrix = null;

        // An outline path that will be the outline of the shape or in case of
        // text the rect that bounds the text.
        this.outlinePath = null;

        this.conf = {};
    };

    FauxNode.prototype = {

        constructor: FauxNode,

        /**
         * This method does the complete rendering of the element, including
         * (re)setting the bbox and image map.
         *
         * @returns {_L10.FauxNode.prototype}
         */
        render: function () {

            var o = this;

            o.draw();
            o.setBBox();

            return o;
        },

        /**
         * Applies the transforms and clipping to the context and draws the
         * element.
         *
         * @returns {undefined}
         */
        draw: function () {
            var o = this,
                ctx = o.context,
                el = o._rElement,
                m = el.matrix,
                isClipped = o.isClipped,
                attrs = o.validateAttrs(),
                cr,
                end;

            // After the validation the attributes need to be set to the element
            // as validateAttrs works on a copy of the attrs object.
            el.attrs = attrs;

            ctx.save();

            ctx.fillStyle = attrs.fill;
            ctx.strokeStyle = attrs.stroke;
            ctx.lineWidth = attrs['stroke-width'];

            // Applying the clip before the context is transformed as is the case
            // in case of SVG.
            if (cr = attrs['clip-rect']) {
                cr = cr.split(" ");
                ctx.rect(cr[0], cr[1], cr[2], cr[3]);
                ctx.clip();
                isClipped = o.isClipped = true;
            }

            o.applyTransform(m);

            o.paint();

            ctx.restore();
        },

        /**
         * Parse the attributes provided to paint the element shape using the
         * canvas context.
         *
         * Overridden by individual derived FauxNodes
         */
        paint: function () {},

        /**
         * The redraw of the FauxNodes is to be handled by the CanvasObjectModel
         * instance as it involves redrawing all the elements corresponsing to
         * that canvas in the proper order.
         */
        redraw: function () {
            this.COMInstance.redraw(this);
        },

        /**
         * Clears the rectangle corresponding to the bounding box of the node.
         */
        clear: function () {
            var o = this,
                ctx = o.context,
                bbox = o._bbox;

            /** @todo: while clearing the stroke-width also needs to be accounted for. */
            if (bbox) {
                ctx.clearRect(bbox.x, bbox.y, bbox.width, bbox.height);
            }
        },

        /**
         * Creates the area node in the image map so that mouse interactivity
         * can be emulated using it.
         */
        addMouseInteractivity: function () {
            var o = this,
                attrs = o._rElement.attrs,
                bbox = o._bbox,
                map = o.owner.wrapper._map,
                shape = o.type === 'circle' ? 'circle' : 'rect',
                coords = shape === 'circle' ? [attrs.cx, attrs.cy, attrs.r].join(",") : [bbox.x, bbox.y, bbox.x2, bbox.y2].join(","),
                area,
                end;

            area = $('area', { shape: shape, coords: coords });
            if (map.firstChild) {
                map.insertBefore(area, map.firstChild);
            } else {
                map.appendChild(area);
            }

            /** @todo: should be put this check here */
            o._mouseArea = area;

            // Needed for paths.
            o.eventListeners = {};
        },

        /**
         * Update the coords of the area node (image map) corresponding to the FauxNode
         * after it has been modified by changing attributes.
         */
        updateMapAreaCoords: function () {
            var o = this,
                oArea = o._mouseArea,
                bbox = o._bbox;

            if (oArea) {
                //o.context.strokeRect(bbox.x, bbox.y, bbox.width, bbox.height);
                if (o instanceof CircleFauxNode) {
                    var r = bbox.width / 2;
                    oArea.setAttribute('coords', [bbox.x + r, bbox.y + r, r].join(","));
                } else {
                    oArea.setAttribute('coords', [bbox.x, bbox.y, bbox.x2, bbox.y2].join(","));
                }
            }
        },

        /**
         * Applies the transform given the transformation matrix to the context.
         *
         * @param {type} matrix
         * @param {type} bbox
         * @param {type} dontsetbbox
         *
         * @returns {_L10.FauxNode.prototype.transformBBox.tbox}
         */
        applyTransform: function (m) {
            var o = this,
                ctx = o.context,
                split;

            if (m) {
                split = m.split();
                ctx.translate(split.dx, split.dy);
                !split.noRotation && ctx.rotate(deg2rad * split.rotate);
                ctx.scale(split.scalex, split.scaley);
            }
        },

        /**
         *
         */
        setBBox: function () {
            var o = this,
                el = o._rElement,
                m = el.matrix,
                parent = o.owner,
                pm = parent.getTransformMatrix && parent.getTransformMatrix();

            if (pm) {
                pm = pm.clone();
                pm.add(m);
                m = pm;
            }

            if (o.outlinePath) {
                o._bbox = R.pathBBox(R.transformPath(o.outlinePath, m.toTransformString()).toString());
            } else {
                o.setShapeBBox(m);
            }

            o._mouseArea && o.updateMapAreaCoords();
        },

        getBBox: function () {
            return this._bbox;
        },

        drawPath: function (path) {
            var o = this,
                ctx = o.context,
                len = path && path.length || 0,
                pp = PathParser,
                i = 0,
                command,
                x,
                y,
                end;

            // The PathParser object has been borrowed from canvg. All 3rd party attributions implied.
            pp.reset();
            pp.setTokens(path);

            //var bb = new BoundingBox();
            if (ctx != null) {
                ctx.beginPath();
            }

            while (!pp.isEnd()) {
                pp.nextCommand();
                switch (pp.command) {
                    case 'M':
                    case 'm':
                        var p = pp.getAsCurrentPoint();
                        pp.addMarker(p);
                        //bb.addPoint(p.x, p.y);
                        if (ctx != null) {
                            ctx.moveTo(p.x, p.y);
                        }
                        pp.start = pp.current;
                        while (!pp.isCommandOrEnd()) {
                            var p = pp.getAsCurrentPoint();
                            pp.addMarker(p, pp.start);
                            //bb.addPoint(p.x, p.y);
                            if (ctx != null) {
                                ctx.lineTo(p.x, p.y);
                            }
                        }
                        break;
                    case 'L':
                    case 'l':
                        while (!pp.isCommandOrEnd()) {
                            var c = pp.current;
                            var p = pp.getAsCurrentPoint();
                            pp.addMarker(p, c);
                            //bb.addPoint(p.x, p.y);
                            if (ctx != null) {
                                ctx.lineTo(p.x, p.y);
                            }
                        }
                        break;
                    case 'H':
                    case 'h':
                        while (!pp.isCommandOrEnd()) {
                            var newP = new Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
                            pp.addMarker(newP, pp.current);
                            pp.current = newP;
                            //bb.addPoint(pp.current.x, pp.current.y);
                            if (ctx != null) {
                                ctx.lineTo(pp.current.x, pp.current.y);
                            }
                        }
                        break;
                    case 'V':
                    case 'v':
                        while (!pp.isCommandOrEnd()) {
                            var newP = new Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
                            pp.addMarker(newP, pp.current);
                            pp.current = newP;
                            //bb.addPoint(pp.current.x, pp.current.y);
                            if (ctx != null) {
                                ctx.lineTo(pp.current.x, pp.current.y);
                            }
                        }
                        break;
                    case 'C':
                    case 'c':
                        while (!pp.isCommandOrEnd()) {
                            var curr = pp.current;
                            var p1 = pp.getPoint();
                            var cntrl = pp.getAsControlPoint();
                            var cp = pp.getAsCurrentPoint();
                            pp.addMarker(cp, cntrl, p1);
                            //bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            if (ctx != null) {
                                ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                        }
                        break;
                    case 'S':
                    case 's':
                        while (!pp.isCommandOrEnd()) {
                            var curr = pp.current;
                            var p1 = pp.getReflectedControlPoint();
                            var cntrl = pp.getAsControlPoint();
                            var cp = pp.getAsCurrentPoint();
                            pp.addMarker(cp, cntrl, p1);
                            //bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            if (ctx != null) {
                                ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                        }
                        break;
                    case 'Q':
                    case 'q':
                        while (!pp.isCommandOrEnd()) {
                            var curr = pp.current;
                            var cntrl = pp.getAsControlPoint();
                            var cp = pp.getAsCurrentPoint();
                            pp.addMarker(cp, cntrl, cntrl);
                            //bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                        }
                        break;
                    case 'T':
                    case 't':
                        while (!pp.isCommandOrEnd()) {
                            var curr = pp.current;
                            var cntrl = pp.getReflectedControlPoint();
                            pp.control = cntrl;
                            var cp = pp.getAsCurrentPoint();
                            pp.addMarker(cp, cntrl, cntrl);
                            //bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                        }
                        break;
                    case 'A':
                    case 'a':
                        while (!pp.isCommandOrEnd()) {
                            var curr = pp.current;
                            var rx = pp.getScalar();
                            var ry = pp.getScalar();
                            var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
                            var largeArcFlag = pp.getScalar();
                            var sweepFlag = pp.getScalar();
                            var cp = pp.getAsCurrentPoint();

                            // Conversion from endpoint to center parameterization
                            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                            // x1', y1'
                            var currp = new Point(Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0, -Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0);
                            // adjust radii
                            var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);
                            if (l > 1) {
                                rx *= Math.sqrt(l);
                                ry *= Math.sqrt(l);
                            }
                            // cx', cy'
                            var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));
                            if (isNaN(s)) s = 0;
                            var cpp = new Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
                            // cx, cy
                            var centp = new Point((curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
                            // vector magnitude
                            var m = function (v) {
                                return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
                            };
                            // ratio between two vectors
                            var r = function (u, v) {
                                return (u[0] * v[0] + u[1] * v[1]) / (m(u) * m(v));
                            };
                            // angle between two vectors
                            var a = function (u, v) {
                                return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(r(u, v));
                            };
                            // initial angle
                            var a1 = a([1, 0], [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry]);
                            // angle delta
                            var u = [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry];
                            var v = [(-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry];
                            var ad = a(u, v);
                            if (r(u, v) <= -1) ad = Math.PI;
                            if (r(u, v) >= 1) ad = 0;

                            // for markers
                            var dir = 1 - sweepFlag ? 1.0 : -1.0;
                            var ah = a1 + dir * (ad / 2.0);
                            var halfWay = new Point(centp.x + rx * Math.cos(ah), centp.y + ry * Math.sin(ah));
                            pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                            pp.addMarkerAngle(cp, ah - dir * Math.PI);

                            //bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
                            if (ctx != null) {
                                var r = rx > ry ? rx : ry;
                                var sx = rx > ry ? 1 : rx / ry;
                                var sy = rx > ry ? ry / rx : 1;

                                ctx.translate(centp.x, centp.y);
                                ctx.rotate(xAxisRotation);
                                ctx.scale(sx, sy);
                                ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
                                ctx.scale(1 / sx, 1 / sy);
                                ctx.rotate(-xAxisRotation);
                                ctx.translate(-centp.x, -centp.y);
                            }
                        }
                        break;
                    case 'Z':
                    case 'z':
                        if (ctx != null) ctx.closePath();
                        pp.current = pp.start;
                }
            }

            o.outlinePath = path;

            return o;
        },

        /**
         * Methods to add and remove event listeners emulating the DOM of
         * standard browsers (and also the non-standard one).
         */
        addEventListener: function () {
            var o = this,
                args = arguments,
                eventName = args && args[0],
                handler = args && args[1],
                area,
                checkPathHandler,
                end;

            if (!o._mouseArea) {
                o.addMouseInteractivity();
            }

            area = o._mouseArea;

            if (typeof eventName === 'string' && typeof handler === 'function') {
                /*
                 * If the shape has an associated path then we need to check if
                 * the mouse is within the co-ordinates of the path.
                 */
                if (o._path) {

                    /*
                     * If the event being listened to is mouseover, mouseout or
                     * mousemove then the mouse position has to be constantly
                     * monitored and the event handler called explicitly when
                     * appropriate.
                     */
                    if (eventName === 'mouseover' || eventName === 'mouseout' || eventName === 'mousemove') {

                        if (!o._mousemoveAdded) {
                            var startListening = function (node) {

                                var isInside = false,
                                    isOutside = true,
                                    transition = false;

                                return function (event) {
                                    /** @todo: replace layerX and layerY with
                                     * standard ways of determining mouse position.
                                     */
                                    var x = event.layerX,
                                        y = event.layerY;

                                    transition = false;
                                    /*
                                     * Check if the current position of the mouse
                                     * pointer lies within the path or not.
                                     */
                                    if (R.isPointInsidePath(node._transformPath, x, y)) {
                                        /*
                                         * @todo: fix isPointInsidePath to return the
                                         * proper result when the mouse pointer is on
                                         * the same horizontal/vertical lines as one
                                         * of the vertices of the path.
                                         */
                                        isInside = true;
                                        if (isOutside) {
                                            isOutside = false;
                                            transition = true;
                                        }
                                    } else {
                                        isOutside = true;
                                        if (isInside) {
                                            isInside = false;
                                            transition = true;
                                        }
                                    }

                                    // Based on the state of the flags, fire the
                                    // appropriate event handlers.
                                    if (isOutside && transition && node.eventListeners['mouseout']) {
                                        node.eventListeners['mouseout'].apply(this, arguments);
                                    }
                                    if (isInside) {
                                        if (transition && node.eventListeners['mouseover']) {
                                            node.eventListeners['mouseover'].apply(this, arguments);
                                        }
                                        if (node.eventListeners['mousemove']) {
                                            node.eventListeners['mousemove'].apply(this, arguments);
                                        }
                                    }
                                };
                            }(o);

                            area.addEventListener('mousemove', startListening, false);
                            o._mousemoveAdded = true;
                        }

                        o.eventListeners[eventName] = handler;
                    } else {
                        var checkPathHandler = function (node, handler) {
                            return function (event) {
                                if (R.isPointInsidePath(node._path, event.layerX, event.layerY)) {
                                    handler.apply(this, arguments);
                                }
                            };
                        }(o, handler);

                        area.addEventListener(eventName, checkPathHandler, false);
                    }
                } else {
                    area.addEventListener(eventName, handler, false);
                }
            }
        },

        removeEventListener: function () {
            var o = this,
                args = arguments,
                eventName = args && args[0],
                handler = args && args[1],
                area,
                end;

            if (!o._mouseArea) {
                return;
            }
            area = o._mouseArea;

            if (typeof eventName === 'string' && typeof handler === 'function') {
                area.removeEventListener(eventName, handler);
            }
        },

        attachEvent: function () {},

        detachEvent: function () {},

        validateAttrs: function (attrs) {

            var o = this,
                elAttrs = clone(o._rElement.attrs),
                attr,
                val;

            if (attrs === null) {
                if (o._isValid) {
                    return elAttrs;
                } else {
                    o._isValid = true;
                }
            }

            attrs = attrs || elAttrs;

            for (attr in attrs) {
                val = attrs[attr];

                switch (attr) {

                    default:
                        continue;
                }
            }

            return attrs;
        },

        attrs: function () {}
    };

    var NodeListItem = function (node) {
        this.node = node;
        this.next = null;
        this.prev = null;
    },
        NodeList = function () {
        this.top = null;
        this.bottom = null;
    };

    NodeList.prototype = {

        constructor: NodeList,

        add: function (node) {

            node = new NodeListItem(node);

            if (!this.bottom) {
                this.bottom = node;
            }
            if (this.top) {
                this.top.next = node;
            }
            node.next = null;
            node.prev = this.top;

            this.top = node;
        },

        addList: function (list) {
            if (!this.bottom) {
                this.bottom = list.bottom;
            }

            if (this.top) {
                this.top.next = list.bottom;
                list.bottom.prev = this.top;
            }

            this.top = list.top;
        },

        toFront: function (node) {
            if (this.top === node) {
                return false;
            }

            if (this.bottom === node) {
                this.bottom = node.next;
            }

            //var map = node.node.canvas._map,
            //    area = node.node._mouseArea;

            node.prev && (node.prev.next = node.next);
            node.next && (node.next.prev = node.prev);

            this.top.next = node;
            node.prev = this.top;
            node.next = null;

            this.top = node;

            /*if (map.firstChild) {
                map.insertBefore(area, map.firstChild);
            }
            else {
                map.appendChild(area);
            }
             node.redraw();*/
        },

        toBack: function (node) {
            if (this.bottom === node) {
                return false;
            }

            if (this.top === node) {
                this.top = node.prev;
            }

            //var map = node.canvas._map,
            //    area = node._mouseArea;

            node.prev && (node.prev.next = node.next);
            node.next && (node.next.prev = node.prev);

            this.bottom.prev = node;
            node.prev = null;
            node.next = this.bottom;

            this.bottom = node;

            /*map.appendChild(area);
             node.redraw();*/
        },

        insertBefore: function () {},

        insertAfter: function () {},

        each: function (fn, args) {
            var item = this.bottom;

            while (item) {
                fn.apply(item.node, args);
                item = item.next;
            }
        },

        iterate: function (fn, args) {
            var item = this.bottom,
                retVal = true;

            while (item) {
                retVal = fn.apply(item.node, args);

                if (retVal === false) {
                    break;
                }

                item = item.next;
            }
        },

        dispose: function () {

            this.each(function () {
                this.node.dispose && this.node.dispose();
            });

            this.top = null;
            this.bottom = null;
        }
    };

    /**
     *
        ncowner, a NodeCollection that corresponds to the collection of which
        the layer neing created  is a part
         above, a NodeCollection iterator, that indicated the collection the layer has to be rendered. If
        not provided then this is the first layer of ncowner.
     */
    var CanvasLayer = function (ncowner, canvas) {
        this.items = new NodeList();

        this.owner = ncowner;
        //this.above = above;
        this.element = null;

        if (canvas) {
            this.element = canvas;
        } else {
            this.init();
        }
    };

    CanvasLayer.prototype = {
        constructor: CanvasLayer,

        appendChild: function () {
            var o = this,
                ownerWrapper = o.owner.wrapper,
                ele = this.element;

            if (ownerWrapper._image) {
                ownerWrapper.insertBefore(ele, ownerWrapper._image);
            } else {
                ownerWrapper.appendChild(ele);
            }
        },

        insertBefore: function () {},

        insertAfter: function () {},

        init: function () {
            this.element = $("canvas");
            // CHECKPOINT: width and height in %?
            $(this.element, {
                width: this.owner.wrapper.offsetWidth,
                height: this.owner.wrapper.offsetHeight
            });

            this.element.style.cssText = "position:absolute;left:0;top:0;";

            this.appendChild();
        },

        getCanvas: function () {
            return this.element;
        },

        getContext: function () {
            return this.element.getContext('2d');
        },

        addToLayer: function (node) {
            this.items.add(node);
        },

        mergeWithLayerOnTop: function (layerObj) {
            this.items.addList(layerObj.items);
            layerObj.dispose(true);
        },

        mergeWithLayerOnBottom: function (layerObj) {
            layerObj.items.addList(this.items);
            this.items = layerObj.items;
            layerObj.dispose(true);
        },

        dispose: function (softDispose) {

            if (!softDispose) {
                this.items.each(function () {
                    this.dispose();
                });
            }

            this.items = null;
            this.owner = null;

            this.element.parentNode.removeChild(this.element);
            this.element = null;
        }
    };

    var NodeCollection = function (parent, wrapper, canvas) {

        this.nodeItems = new NodeList();
        this.collectionItems = new NodeList();
        this.layerItems = new NodeList();

        this.owner = this.parent = parent;
        this.layerOnTop = null;

        this.currentLayer = null;
        this.baseLayer = null;

        if (wrapper) {
            this.wrapper = wrapper;
            this.currentLayer = this.baseLayer = new CanvasLayer(this, canvas);
        } else {
            this.init();
        }
    };

    NodeCollection.prototype = {
        constructor: NodeCollection,

        init: function () {

            var o = this,
                parent = o.parent,
                imageMap = parent.wrapper._image,
                wrapper = $("div");

            // Hacky but need a refernce to the image map to addEventListeners.
            wrapper.style.cssText = "width:100%;height:100%;position:absolute;left:0;top:0;";

            wrapper._map = parent.wrapper._map;

            if (imageMap) {
                parent.wrapper.insertBefore(wrapper, imageMap);
            } else {
                parent.wrapper.appendChild(wrapper);
            }

            o.wrapper = wrapper;
            o.currentLayer = o.baseLayer = new CanvasLayer(o);
        },

        getCurrentContext: function () {
            return this.currentLayer.getContext();
        },

        setLayerOnTop: function (layerObj) {
            this.layerOnTop = layerObj;
        },

        getCurrentCanvas: function () {
            return this.currentLayer.getCanvas();
        },

        addNode: function (node) {
            this.nodeItems.add(node);

            if (node.type === "group") {
                this.addCollection(node);
            } else {
                this.currentLayer.addToLayer(node);
            }
        },

        addCollection: function (collectionNode) {

            collectionNode = collectionNode || new NodeCollection(this);

            this.collectionItems.add(collectionNode);
            this.currentLayer = new CanvasLayer(this);
            this.layerItems.add(this.currentLayer);
            collectionNode.setLayerOnTop(this.currentLayer);
        },

        dispose: function () {
            this.nodeItems.dispose();
            this.collectionItems.dispose();
            this.layerItems.dispose();
            this.owner = this.parent = null;

            this.ownerLayer = null;
            this.currentLayer = null;
            this.baseLayer = null;
        }
    };

    /**
     * The CanvasObjectModel will be a layer of abstraction above the individual
     * FauxNodes created to emulate the DOM in case of canvas rendering.
     * The engine will be the point of contact for Raphael._engine that will be
     * the direct consumer of the FauxNodes.
     */
    var CanvasObjectModel = function (cnvs, wrpr, width, height) {

        var com = this,
            root = new NodeCollection(null, wrpr, cnvs);

        //root.set

        com.width = width;
        com.height = height;

        com.createNode = function (type, parent) {

            parent = parent || root;

            var node,
                nodeItems = parent.nodeItems,
                layer = parent.currentLayer,
                canvasEle = layer.getCanvas();

            switch (type) {
                case 'rect':
                    node = new RectFauxNode(parent);
                    break;

                case 'circle':
                    node = new CircleFauxNode(parent);
                    break;

                case 'path':
                    node = new PathFauxNode(parent);
                    break;

                case 'text':
                    node = new TextFauxNode(parent);
                    break;

                case 'group':
                    node = new GroupFauxNode(parent);
                    parent.addCollection(node);
                    break;

                default:
                    node = new FauxNode(canvasEle);
            }

            node.COMInstance = this;
            nodeItems.add(node);
            layer.addToLayer(node);

            return node;
        };

        /**
         * This method is needed to redraw a node. Redraw is to be handled at the
         * COM level as redrawing one node needs all the (connected) nodes to be
         * redrawn in the right order.
         *
         * @param {type} node The node that needs to be redrawn.
         *
         * @returns {undefined}
         */
        com.redraw = function (node) {

            // Check if node is a group or a shape.
            var nodeList, childNode, layer;

            if (node.type === "group") {
                nodeList = node.nodeItems;
                node.render();
            } else {

                layer = node.layer;
                nodeList = layer.items;
                childNode = nodeList.bottom;

                // Clear the canvas.
                layer.element.width = layer.element.width;

                while (childNode) {
                    fNode = childNode.node;
                    fNode.type !== "group" && fNode.render();
                    childNode = childNode.next;
                }
            }
        };

        com.insertBefore = function (node) {};

        com.insertAfter = function (node) {};

        com.removeNode = function (node) {};

        com.refreshNode = function (node) {};

        com.refreshAll = function () {};
    };

    Point = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Point.prototype.angleTo = function (p) {
        return Math.atan2(p.y - this.y, p.x - this.x);
    };

    Point.prototype.applyTransform = function (v) {
        var xp = this.x * v[0] + this.y * v[2] + v[4];
        var yp = this.x * v[1] + this.y * v[3] + v[5];
        this.x = xp;
        this.y = yp;
    };

    PathParser = new function () {

        this.tokens = null;

        this.setTokens = function (d) {
            if (typeof d === 'string') {
                this.tokens = d.split(' ');
            } else {
                this.tokens = d;
            }
        };

        this.reset = function () {
            this.i = -1;
            this.command = '';
            this.previousCommand = '';
            this.start = new Point(0, 0);
            this.control = new Point(0, 0);
            this.current = new Point(0, 0);
            this.points = [];
            this.angles = [];
        };

        this.isEnd = function () {
            return this.i >= this.tokens.length - 1;
        };

        this.isCommandOrEnd = function () {
            if (this.isEnd()) {
                return true;
            }

            return this.tokens[this.i + 1].toString().match(/^[A-Za-z]$/) != null;
        };

        this.isRelativeCommand = function () {
            switch (this.command) {
                case 'm':
                case 'l':
                case 'h':
                case 'v':
                case 'c':
                case 's':
                case 'q':
                case 't':
                case 'a':
                case 'z':
                    return true;
                    break;
            }
            return false;
        };

        this.getToken = function () {
            this.i++;
            return this.tokens[this.i];
        };

        this.getScalar = function () {
            return parseFloat(this.getToken());
        };

        this.nextCommand = function () {
            this.previousCommand = this.command;
            this.command = this.getToken();
        };

        this.getPoint = function () {
            var p = new Point(this.getScalar(), this.getScalar());
            return this.makeAbsolute(p);
        };

        this.getAsControlPoint = function () {
            var p = this.getPoint();
            this.control = p;
            return p;
        };

        this.getAsCurrentPoint = function () {
            var p = this.getPoint();
            this.current = p;
            return p;
        };

        this.getReflectedControlPoint = function () {
            if (this.previousCommand.toLowerCase() != 'c' && this.previousCommand.toLowerCase() != 's' && this.previousCommand.toLowerCase() != 'q' && this.previousCommand.toLowerCase() != 't') {
                return this.current;
            }

            // reflect point
            var p = new Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
            return p;
        };

        this.makeAbsolute = function (p) {
            if (this.isRelativeCommand()) {
                p.x += this.current.x;
                p.y += this.current.y;
            }
            return p;
        };

        this.addMarker = function (p, from, priorTo) {
            // if the last angle isn't filled in because we didn't have this point yet ...
            if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length - 1] == null) {
                this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(priorTo);
            }
            this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
        };

        this.addMarkerAngle = function (p, a) {
            this.points.push(p);
            this.angles.push(a);
        };

        this.getMarkerPoints = function () {
            return this.points;
        };

        this.getMarkerAngles = function () {
            for (var i = 0; i < this.angles.length; i++) {
                if (this.angles[i] == null) {
                    for (var j = i + 1; j < this.angles.length; j++) {
                        if (this.angles[j] != null) {
                            this.angles[i] = this.angles[j];
                            break;
                        }
                    }
                }
            }
            return this.angles;
        };
    }();

    /**
     * The FauxNode is the adapter written to give DOM node like handling to the
     * shapes that are create using canvas object model.
     */

    RectFauxNode = function (parentObj) {
        this.type = "rect";
        this._isValid = false;

        this.parent = this.owner = parentObj;
        this.context = parentObj.getCurrentContext();
        this.layer = parentObj.currentLayer;
    };

    RectFauxNode.prototype = R.extend(new FauxNode(), {

        constructor: RectFauxNode,

        paint: function () {

            var o = this,
                ctx = o.context,

            // CHECKPOINT 3. Rename validateAttrs to getValidAttrs?
            attrs = o.validateAttrs(),
                x = attrs.x,
                y = attrs.y,
                w = attrs.width,
                h = attrs.height,
                r = attrs.r,

            /** @todo: provide support for rx, ry */
            rx = r || attrs.rx,
                ry = r || attrs.ry;

            if (attrs.r) {
                path = ["M", x + rx, y, "L", x + w - rx, y].concat(["A", rx, ry, 0, 0, 1, x + w, y + ry]).concat(["L", x + w, y + h - ry]).concat(["A", rx, ry, 0, 0, 1, x + w - rx, y + h]).concat(["L", x + rx, y + h]).concat(["A", rx, ry, 0, 0, 1, x, y + h - ry]).concat(["L", x, y + ry]).concat(["A", rx, ry, 0, 0, 1, x + rx, y, "Z"]);
            } else {
                path = ["M", x, y, "H", x + w, "V", y + h, "H", x, "V", y, "Z"];
            }

            o.drawPath(path);

            if (attrs['stroke-width']) {
                var strokeAlpha = attrs['stroke-opacity'] === undefined ? attrs['opacity'] : attrs['stroke-opacity'];
                if (strokeAlpha !== undefined) {
                    ctx.globalAlpha = strokeAlpha;
                }
                ctx.stroke();
            }
            var fillAlpha = attrs['fill-opacity'] === undefined ? attrs['opacity'] : attrs['fill-opacity'];
            if (fillAlpha !== undefined) {
                ctx.globalAlpha = fillAlpha;
            }
            ctx.fill();

            return;
        },

        validateAttrs: function (attrs) {
            var o = this,
                elAttrs = clone(o._rElement.attrs),
                attr,
                val;

            if (attrs === null) {
                if (o._isValid) {
                    return elAttrs;
                } else {
                    o._isValid = true;
                }
            }

            attrs = attrs || elAttrs;

            for (attr in attrs) {
                val = attrs[attr];

                switch (attr) {
                    case "r":
                        var w = elAttrs.width,
                            h = elAttrs.height,
                            maxR = mmin(w, h) / 2;

                        if (val > maxR) {
                            attrs.r = maxR;
                        }

                        if (val < 0) {
                            attrs.r = 0;
                        }
                        break;

                    case "width":
                    case "height":
                        if (val < 0) {
                            attrs[attr] = 0;
                        };
                        break;

                    default:
                        continue;
                }
            }

            return attrs;
        },

        setShapeBBox: function (m) {
            var o = this,
                el = o._rElement,
                attrs = el.attrs,
                sX = m.get(0),
                sY = m.get(3),
                tX = m.get(4),
                tY = m.get(5),
                strokeW = attrs['stroke-width'];

            o._bbox = {
                x: attrs.x * sX + tX - strokeW,
                y: attrs.y * sY + tY - strokeW,
                width: attrs.width * sX + 2 * strokeW,
                height: attrs.height * sY + 2 * strokeW
            };

            o._bbox.x2 = o._bbox.x + o._bbox.width;
            o._bbox.y2 = o._bbox.y + o._bbox.height;

            o.X = o._bbox.x;
            o.Y = o._bbox.y;
            o.W = o._bbox.width;
            o.H = o._bbox.height;
        }
    });

    var CircleFauxNode = function (parentObj) {
        this.type = "circle";
        this._isValid = false;

        this.parent = this.owner = parentObj;
        this.context = parentObj.getCurrentContext();
        this.layer = parentObj.currentLayer;
    },
        PathFauxNode = function (parentObj) {
        this.type = "path";
        this._isValid = false;

        this.parent = this.owner = parentObj;
        this.context = parentObj.getCurrentContext();
        this.layer = parentObj.currentLayer;
    },
        TextFauxNode = function (parentObj) {
        this.type = "text";
        this._isValid = false;

        this.parent = this.owner = parentObj;
        this.context = parentObj.getCurrentContext();
        this.layer = parentObj.currentLayer;
    },
        GroupFauxNode = function (parent, width, height) {

        this.type = "group";

        this.nodeItems = new NodeList();
        this.collectionItems = new NodeList();
        this.layerItems = new NodeList();

        this.owner = this.parent = parent;
        this.layerOnTop = parent.currentLayer;

        this.currentLayer = null;
        this.baseLayer = null;

        this.init();
    };

    CircleFauxNode.prototype = R.extend(new FauxNode(), {

        constructor: CircleFauxNode,

        paint: function () {
            var o = this,
                ctx = o.context,
                attrs = o.validateAttrs(),
                x = attrs.cx,
                y = attrs.cy,
                r = attrs.r,

            /** @todo: provide support for rx, ry */
            rx = r || attrs.rx,
                ry = r || attrs.ry;

            if (attrs.r) {

                o.drawPath(["M", x + r, y, "A", rx, ry, 0, 1, 0, x - r, y, "A", rx, ry, 0, 1, 0, x + r, y, "Z"]);

                if (attrs['stroke-width']) {
                    var strokeAlpha = attrs['stroke-opacity'] === undefined ? attrs['opacity'] : attrs['stroke-opacity'];
                    if (strokeAlpha !== undefined) {
                        ctx.globalAlpha = strokeAlpha;
                    }
                    ctx.stroke();
                }
                var fillAlpha = attrs['fill-opacity'] === undefined ? attrs['opacity'] : attrs['fill-opacity'];
                if (fillAlpha !== undefined) {
                    ctx.globalAlpha = fillAlpha;
                }
                ctx.fill();
            }

            return;
        },

        setShapeBBox: function (m) {
            var o = this,
                el = o._rElement,
                attrs = el.attrs,
                sX = m.get(0),
                sY = m.get(3),
                tX = m.get(4),
                tY = m.get(5),
                strokeW = attrs['stroke-width'];

            o._bbox = {
                x: tX + (attrs.cx - attrs.r) * sX - strokeW,
                y: tY + (attrs.cy - attrs.r) * sY - strokeW,
                width: 2 * (strokeW + attrs.r * sX),
                height: 2 * (attrs.r * sY + strokeW)
            };

            o._bbox.x2 = o._bbox.x + o._bbox.width;
            o._bbox.y2 = o._bbox.y + o._bbox.height;

            o.X = o._bbox.x;
            o.Y = o._bbox.y;
            o.W = o._bbox.width;
            o.H = o._bbox.height;
        }
    });

    PathFauxNode.prototype = R.extend(new FauxNode(), {

        constructor: PathFauxNode,

        paint: function () {
            var o = this,
                el = o._rElement,
                attrs = el.attrs,
                path = el.attr('path'),
                m = el.matrix,
                ctx = o.context;

            // 1. Get the path from the path attribute
            // 2. Accept paths in different array formats.
            // 3. Optimize as this can potentially be a huge pain-point.
            // 4. Draw path mapping M,L,H,V etc to canvas APIs
            o.drawPath(path);
            o._transformPath = R.transformPath(path, m.toTransformString());

            var strokeAlpha = attrs['stroke-opacity'] === undefined ? attrs['opacity'] : attrs['stroke-opacity'];
            if (strokeAlpha !== undefined) {
                ctx.globalAlpha = strokeAlpha;
            }
            ctx.stroke();
            var fillAlpha = attrs['fill-opacity'] === undefined ? attrs['opacity'] : attrs['fill-opacity'];
            if (fillAlpha !== undefined) {
                ctx.globalAlpha = fillAlpha;
            }
            ctx.fill();

            return;
        }
    });

    TextFauxNode.prototype = R.extend(new FauxNode(), {

        constructor: TextFauxNode,

        paint: function () {
            var o = this,
                el = o._rElement,
                attrs = el.attr(),
                text = attrs['text'],
                stroke = attrs['stroke'],
                valign = attrs['vertical-align'],
                halign = attrs['text-anchor'],
                x = attrs['x'],
                y = attrs['y'],
                m = el.matrix,
                ctx = o.context,
                path;

            // apply the font styles, if any

            // find the dimensions of the text using the given styles.
            // All the dimensions should be present in the attrs user provided OR default.
            var fontSize = attrs['font-size'] || 10,
                lineHeight = attrs['line-height'] || toInt(fontSize, 10) * 1.2,
                fontArr = ["normal", fontSize, attrs['font']];

            // draw the text.
            ctx.fillStyle = stroke;
            ctx.font = fontArr.join(" ");

            if (text) {
                var texts = Str(text).split(/\n|<br\s*?\/?>/ig),
                    totalHeight = texts.length * lineHeight,
                    totalWidth = -Infinity,
                    startX = Infinity,
                    startY,
                    width,
                    textX,
                    textY;

                if (valign === "top") {
                    startY = y + lineHeight;
                } else if (valign === "middle") {
                    startY = y - totalHeight / 2 + lineHeight / 2;
                } else {
                    // valign is bottom.
                    startY = y - totalHeight + lineHeight;
                }

                for (var i = 0, ii = texts.length; i < ii; i += 1) {

                    text = texts[i];
                    textY = startY + lineHeight * i;
                    width = ctx.measureText(text).width;

                    if (halign === "start") {
                        textX = x;
                    } else if (halign === "middle") {
                        textX = x - width / 2;
                    } else {
                        textX = x - width;
                    }

                    totalWidth = mmax(totalWidth, width);
                    startX = mmin(startX, textX);

                    ctx.fillText(text, textX, textY);
                }

                el._textdirty = false;
            }

            o.outlinePath = ["M", startX, startY - lineHeight / 1.4, "H", startX + totalWidth, "V", startY - lineHeight + totalHeight, "H", startX, "V", startY - lineHeight / 1.4];

            return;
        }
    });

    GroupFauxNode.prototype = R.extend(R.extend(new FauxNode(), NodeCollection.prototype), {

        constructor: GroupFauxNode,

        draw: function () {

            // Clear the group canvas first.
            this.layerItems.each(function () {
                this.element.width = this.element.width;
            });

            FauxNode.prototype.draw.apply(this, arguments);
        },

        /**
         * This method does the complete rendering of the element, including
         * (re)setting the bbox and image map.
         *
         * @returns {_L10.FauxNode.prototype}
         */
        render: function () {

            var o = this;

            o.draw();
            o.setBBox();

            return o;
        },

        paint: function () {
            var o = this,
                list = o.nodeList,
                el = o._rElement,
                canvas = o.canvas,
                attrs = el.attrs,
                childNode = list.bottom;

            /** @todo: Clean this up */
            if (attrs.opacity !== undefined) {
                this.layerItems.each(function () {
                    this.getContext().globalAlpha = attrs.opacity;
                });
            }

            while (childNode) {
                childNode.render();
                childNode = childNode.next;
            }
        },

        setBBox: function () {},

        addMouseInteractivity: function () {},

        applyTransform: function (m) {
            var o = this,
                parent = o.parent,
                parentMatrix = parent.getTransformMatrix && parent.getTransformMatrix();

            // Parent is a group element with a transformation applied to it.
            if (parentMatrix) {
                o.matrixApplied = parentMatrix.clone();
                o.matrixApplied.add(m.a, m.b, m.c, m.d, m.e, m.f);
            } else {
                o.matrixApplied = m;
            }

            this.layerItems.each(function () {
                FauxNode.prototype.applyTransform.apply(this, [o.matrixApplied]);
            });
        },

        getTransformMatrix: function () {
            return this.matrixApplied;
        }
    });

    Element = function (node, paper, group) {
        var o = this,
            parent = group || paper;

        o.node = o[0] = node;
        node.raphael = true;
        node.raphaelid = o.id = R._oid++;
        node._rElement = o;

        o.X = 0;
        o.Y = 0;

        o.attrs = o.attrs || {};
        o.styles = o.styles || {};
        o.followers = o.followers || [];

        o.paper = paper;
        o.com = parent.com;

        o.ca = o.customAttributes = o.customAttributes || new paper._CustomAttributes();

        o.matrix = R.matrix();
        o._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0
        };

        o.parent = parent;
        !parent.bottom && (parent.bottom = o);

        o.prev = parent.top || null;
        parent.top && (parent.top.next = o);
        parent.top = o;
        o.next = null;
    };

    Element.prototype = elproto;
    elproto.constructor = Element;

    var repaint = function (el, finalAttrs, positionChanged, dimensionChanged) {

        var node = getNode(el),
            preC = R._getConnectedNodes(node),
            attrs = el.attrs,
            elAbove = preC.above,
            elBelow = preC.below,
            len,
            attr,
            i;

        for (attr in finalAttrs) {
            attrs[attr] = finalAttrs[attr];
        }

        node.redraw();
    },
        setFillAndStroke = function (el, params) {

        var attrs = el.attrs,
            node = el.node,
            finalAttrs = {},
            att,
            val,
            needsRepaint = false,
            positionChanged = false,
            dimensionChanged = false,
            i;

        for (att in params) {
            if (params[has](att)) {
                if (!R._availableAttrs[has](att)) {
                    continue;
                }
                val = params[att];

                switch (att) {

                    case 'fill-opacity':
                    case 'opacity':
                    case 'stroke-opcaity':
                    case 'stroke':
                    case 'fill':
                        finalAttrs[att] = val;
                        needsRepaint = true;
                        break;

                    case 'stroke-width':
                    case "cx":
                    case "cy":
                    case "x":
                    case "y":
                        finalAttrs[att] = val;
                        positionChanged = true;
                        break;

                    case "width":
                    case "height":
                        finalAttrs[att] = val;
                        dimensionChanged = true;
                        break;

                    case "clip-rect":
                        finalAttrs[att] = val;
                        needsRepaint = true;
                        break;

                    case "font-size":
                    case "font":
                    case "vertical-align":
                    case "text-anchor":
                        finalAttrs[att] = val;
                        needsRepaint = true;

                    default:
                        continue;
                }
            }
        }

        tuneText(el, params, finalAttrs);

        finalAttrs = node.validateAttrs(finalAttrs);

        if (needsRepaint || positionChanged || dimensionChanged) {
            repaint(el, finalAttrs, positionChanged, dimensionChanged);
        }
    },
        leading = 1.2,
        tuneText = function (el, params, finalAttrs) {
        if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y") || params[has]("line-height") || params[has]("vertical-align"))) {
            return;
        }

        var a = el.attr(),
            fontSize = params['font-size'] || a['font-size'] || 10,
            lineHeight = toFloat(params['line-height'] || a['line-height']) || toInt(fontSize, 10) * leading,
            valign = params["vertical-align"] || a["vertical-align"] || "middle";

        if (isNaN(lineHeight)) {
            lineHeight = fontSize * leading;
        }

        finalAttrs['font-size'] = toInt(fontSize, 10) + "px";
        finalAttrs['font'] = params['font'] || a['font'] || 'Verdana';
        finalAttrs['vertical-align'] = valign;
        finalAttrs['x'] = params['x'] || a['x'] || 0;
        finalAttrs['y'] = params['y'] || a['y'] || 0;
        finalAttrs['line-height'] = toInt(lineHeight, 10);
        finalAttrs['text-anchor'] = params['text-anchor'] || a['text-anchor'] || 'middle';
    };

    R._engine.initWin = function (win) {
        win = win;
        doc = win.document;
    };

    R._engine.setSize = function (w, h) {
        var paper = this,
            cs = paper.canvas.style;

        cs.width = (paper.width = +w || paper.width) + PX;
        cs.height = (paper.height = +h || paper.height) + PX;
        /** @todo call setViewBox from setSize() */
        return paper;
    };
    /** @todo implement setViewBox() */
    R._engine.create = function () {
        var con = R._getContainer.apply(0, arguments) || {},
            container = con.container,
            x = con.x,
            y = con.y,
            width = con.width,
            height = con.height,

        //handler = R._containerEventHandler,
        wrapper,
            cssText,
            image,
            mmap,
            i,
            paper,
            canvas;

        if (!container) {
            throw new Error("Canvas container not found.");
        }

        paper = new R._Paper();
        paper.canvas = wrapper = $("div");

        x = x || 0;
        y = y || 0;
        paper.width = width = width || 512;
        paper.height = height = height || 342;
        paper.left = paper.top = 0;

        if (container == 1) {
            wrapper.style.cssText = cssText + R.format(";width:100%;height:100%;position:absolute;left:{0}px;top:{1}px;", [x, y]);
            doc.body.appendChild(wrapper);
        } else {
            wrapper.style.cssText = cssText + ";width:100%;height:100%;position:absolute";
            if (container.firstChild) {
                container.insertBefore(wrapper, container.firstChild);
            } else {
                container.appendChild(wrapper);
            }
        }

        cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);" + "-webkit-user-select:none;-moz-user-select:-moz-none;" + "-khtml-user-select:none;-ms-user-select:none;user-select:none;" + "-o-user-select:none;cursor:default;" + R.format("width:{0}px;height:{1}px;", [width, height]);

        // Create the canvas element and set it to occupy full space. Retain a
        // reference to its context.
        canvas = $("canvas");
        canvas.style.cssText = "position:absolute;left:0;top:0";
        canvas.setAttribute('width', paper.width);
        canvas.setAttribute('height', paper.height);

        paper.com = new CanvasObjectModel(canvas, wrapper, paper.width, paper.height);

        wrapper.appendChild(canvas);

        image = $("img");

        // Easter egg idea! :)
        image.src = "image1.png";

        image.style.cssText = "opacity: 0;z-index: 100;background: transparent;position: absolute;left: 0;top: 0;width: " + width + "px;height: " + height + "px";
        wrapper.appendChild(image);

        mmap = $("map");

        mmap.setAttribute("name", "mousemap");
        mmap.setAttribute("id", "mousemap"); // Needed for FF.

        wrapper.appendChild(mmap);

        image.setAttribute("usemap", "#mousemap");
        wrapper._image = image;
        wrapper._map = mmap;

        return paper;
    };

    var getNode = R._engine.getNode = function (el) {
        return el.node || el[0].node;
    };

    R._engine.getLastNode = function (el) {
        return el.node || el[el.length - 1].node;
    };

    R._engine.rect = function (paper, x, y, w, h, r, group) {

        var node = paper.com.createNode('rect', group && group.node),
            el = new Element(node, paper, group),
            attrs = el.attrs;

        attrs.x = x;
        attrs.y = y;
        attrs.width = w;
        attrs.height = h;
        attrs.fill = "#fff";
        attrs.stroke = "#000";
        attrs['stroke-width'] = 1;
        attrs.r = r || 0;
        attrs.rx = r || 0;
        attrs.ry = r || 0;

        el.type = "rect";

        node.render();
        return el;
    };

    R._engine.circle = function (paper, x, y, r, group) {
        var node = paper.com.createNode('circle', group && group.node),
            el = new Element(node, paper, group),
            attrs = el.attrs;

        attrs.cx = x;
        attrs.cy = y;
        attrs.r = r;
        attrs.fill = 'none';
        attrs.stroke = '#000';
        attrs['stroke-width'] = 1;

        el.type = "circle";

        node.render();
        return el;
    };

    R._engine.ellipse = function (paper, x, y, rx, ry, group) {
        var node = new FauxNode(),
            el = new Element(node, paper, group);

        el.type = "ellipse";
        return el;
    };

    R._engine.image = function (paper, src, x, y, w, h, group) {
        var node = new FauxNode(),
            el = new Element(node, paper, group);

        el.type = "image";
        return el;
    };

    R._engine.text = function (paper, x, y, text, group) {
        var node = paper.com.createNode('text', group && group.node),
            el = new Element(node, paper, group),
            attrs = el.attrs;

        attrs.x = x;
        attrs.y = y;
        attrs.text = text;
        attrs.fill = 'none';
        attrs.stroke = '#000';
        attrs.font = 'Verdana';
        attrs['font-size'] = '12px';
        attrs['vertical-align'] = 'middle';
        attrs['text-anchor'] = 'middle';

        el.type = "text";
        node.render();
        return el;
    };

    R._engine.path = function (pathString, paper, group) {
        var node = paper.com.createNode('path', group && group.node),
            el = new Element(node, paper, group),
            attrs = el.attrs;

        attrs.path = pathString;
        attrs.fill = "#fff";
        attrs.stroke = "#000";
        attrs['stroke-width'] = 1;

        el.type = "path";

        node.render();

        return el;
    };

    R._engine.group = function (paper, id, group) {

        var node = paper.com.createNode('group', group && group.node),
            el = new Element(node, paper, group),
            wrapper = node.wrapper;

        id && wrapper.setAttribute('class', ['red', id].join('-'));

        el.canvas = wrapper;

        //(group && group.canvas.appendChild(wrapper)) || paper.canvas.appendChild(wrapper);

        el.type = "group";
        return el;
    };

    elproto._getBBox = function () {
        if (this.removed) {
            return {};
        }

        return {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y + (this.bby || 0) - this.H / 2,
            width: this.W,
            height: this.H
        };
    };

    /***** ELEMENT REORDERING / RESTRUCTING *****/

    elproto.toFront = function () {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = o.node,
            parent = o.parent,
            parentNode = thisNode.owner,
            followers = o.followers,
            follower,
            i,
            ii;

        if (R._tofront(o, parent)) {
            if (elproto.type === "group") {
                parent.canvas.appendChild(thisNode);
            } else {
                parentNode.nodeList.tofront(thisNode);
            }
        }

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk && follower.el[follower.stalk](o);
        }

        return o;
    };

    elproto.toBack = function () {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = o.node,
            parent = o.parent,
            parentNode = thisNode.owner,
            followers = o.followers,
            follower,
            i,
            ii;

        if (R._toback(o, parent)) {
            if (elproto.type === "group") {
                parent.canvas.appendChild(thisNode);
            } else {
                parentNode.nodeList.toback(thisNode);
            }
        }

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk && follower.el[follower.stalk](o);
        }

        return o;
    };

    elproto.insertAfter = function (element) {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = o.node,
            thatNode = element.node,
            parentNode = thatNode.owner,
            followers = o.followers,
            follower,
            i,
            ii;

        if (thatNode.next) {
            parentNode.nodeList.insertBefore(thisNode, thatNode.next);
        } else {
            parentNode.appendChild(thisNode);
        }

        R._insertafter(o, element, o.parent, element.parent);

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk && follower.el[follower.stalk](element);
        }

        return o;
    };

    elproto.insertBefore = function (element) {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = o.node,
            thatNode = element.node,
            parentNode = thatNode.owner,
            followers = o.followers,
            follower,
            i,
            ii;

        if (thatNode) {
            parentNode.nodeList.insertBefore(thisNode, thatNode);
        } else {
            parentNode.appendChild(thisNode);
        }

        R._insertafter(o, element, o.parent, element.parent);

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk && follower.el[follower.stalk](element);
        }

        return o;
    };

    elproto.appendChild = function (element) {
        return this;
    };

    elproto.removeChild = function (element) {
        return this;
    };

    /***** ELEMENT REORDERING / RESTRUCTING *****/

    elproto.attr = function (name, value) {
        if (this.removed) {
            return this;
        }

        var o = this,
            attrs = o.attrs,
            ca = o.ca,
            names,
            params,
            par,
            res,
            key,
            out,
            subkey,
            delkeys,
            follower,
            ii,
            i;

        // fetch a copy of all attributes
        if (name == null) {
            res = {};
            for (key in attrs) if (attrs.hasOwnProperty(key)) {
                res[key] = attrs[key];
            }
            res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
            res.transform = o._.transform;
            /** @todo res.visibility = o.node.style.display === "none" ? "hidden" : "visible"; */
            return res;
        }

        // fetch a single value
        if (value == null && R.is(name, "string")) {
            if (name == "fill" && attrs.fill == "none" && attrs.gradient) {
                return attrs.gradient;
            }
            if (name == "transform") {
                return o._.transform;
            }
            /** @todo if (name == "visibility") {
                return this.node.style.display === "none" ? "hidden" : "visible";
            }*/

            names = name.split(separator), out = {};

            for (i = 0, ii = names.length; i < ii; i++) {
                name = names[i];
                if (name in attrs) {
                    out[name] = attrs[name];
                } else if (R.is(ca[name], "function")) {
                    out[name] = ca[name].def;
                } else {
                    out[name] = R._availableAttrs[name];
                }
            }
            return ii - 1 ? out : out[names[0]];
        }

        // fetch specific attributes
        if (value == null && R.is(name, "array")) {
            out = {};
            for (i = 0, ii = name.length; i < ii; i++) {
                out[name[i]] = o.attr(name[i]);
            }
            return out;
        }

        // prepare setter params
        if (value != null) {
            params = {};
            params[name] = value;
        } else if (name != null && R.is(name, "object")) {
            params = name;
        }

        if (R.stopEvent !== false) {
            for (key in params) {
                eve("raphael.attr." + key + "." + o.id, o, params[key], key);
            }
        }

        delkeys = {};
        for (key in ca) {

            if (ca[key] && params.hasOwnProperty(key) && R.is(ca[key], "function") && !ca['_invoked' + key]) {

                ca['_invoked' + key] = true; // prevent recursion
                par = ca[key].apply(o, [].concat(params[key]));
                delete ca['_invoked' + key];

                for (subkey in par) {
                    if (par.hasOwnProperty(subkey)) {
                        params[subkey] = par[subkey];
                    }
                }
                attrs[key] = params[key];
                if (par === false) {
                    delkeys[key] = params[key];
                    delete params[key];
                }
            }
        }

        setFillAndStroke(this, params);

        for (i = 0, ii = o.followers.length; i < ii; i++) {
            follower = o.followers[i];
            follower.cb && !follower.cb.call(follower.el, params, o) || follower.el.attr(params);
        }

        for (subkey in delkeys) {
            params[subkey] = delkeys[subkey];
        }
        return this;
    };

    /**************** Drag *********************/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {

        function start(e) {
            (e.originalEvent || e).preventDefault();
            var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
            this._drag.x = e.clientX + scrollX;
            this._drag.y = e.clientY + scrollY;
            this._drag.id = e.identifier;
            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
            drag.push({
                el: this,
                move_scope: move_scope,
                start_scope: start_scope,
                end_scope: end_scope,
                onmoveHandler: onmove,
                onstartHandler: onstart,
                onendHandler: onend
            });
            onstart && eve.on("raphael.drag.start." + this.id, onstart);
            onmove && eve.on("raphael.drag.move." + this.id, onmove);
            onend && eve.on("raphael.drag.end." + this.id, onend);
            onstart && eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
        }
        this._drag = {};
        draggable.push({
            el: this,
            start: start
        });
        this.mousedown(start);
        return this;
    };

    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].start);
            draggable.splice(i, 1);
            eve.unbind("raphael.drag.*." + this.id);
        }
        !draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
    };

    /***************** Drag *****************/
    /************ TRANSFORMATIONS *************/

    elproto.rotate = function (deg, cx, cy) {

        var o = this,
            bbox;
        if (o.removed) {
            return o;
        }
        deg = Str(deg).split(separator);
        if (deg.length - 1) {
            cx = toFloat(deg[1]);
            cy = toFloat(deg[2]);
        }
        deg = toFloat(deg[0]);
        cy == null && (cx = cy);
        if (cx == null || cy == null) {
            bbox = o.getBBox(1);
            cx = bbox.x + bbox.width / 2;
            cy = bbox.y + bbox.height / 2;
        }
        o.transform(o._.transform.concat([["r", deg, cx, cy]]));
        return o;
    };

    elproto.scale = function (sx, sy, cx, cy) {
        var o = this,
            bbox;
        if (o.removed) {
            return o;
        }
        sx = Str(sx).split(separator);
        if (sx.length - 1) {
            sy = toFloat(sx[1]);
            cx = toFloat(sx[2]);
            cy = toFloat(sx[3]);
        }
        sx = toFloat(sx[0]);
        sy == null && (sy = sx);
        cy == null && (cx = cy);
        if (cx == null || cy == null) {
            bbox = o.getBBox(1);
        }
        cx = cx == null ? bbox.x + bbox.width / 2 : cx;
        cy = cy == null ? bbox.y + bbox.height / 2 : cy;
        o.transform(o._.transform.concat([["s", sx, sy, cx, cy]]));

        return o;
    };

    elproto.translate = function (dx, dy) {
        var o = this;
        if (o.removed) {
            return o;
        }
        dx = Str(dx).split(separator);
        if (dx.length - 1) {
            dy = toFloat(dx[1]);
        }
        dx = toFloat(dx[0]) || 0;
        dy = +dy || 0;
        o.transform(o._.transform.concat([["t", dx, dy]]));

        return o;
    };

    elproto.transform = function (tstr) {

        var o = this,
            _ = o._,
            sw;

        if (tstr === null) {
            return _.transform;
        }

        R._extractTransform(o, tstr);

        /** @todo: what changes to be made here in the context of canvas */
        /*o.clip && !_.clipispath && $(o.clip, {
            transform: o.matrix.invert()
        });
        o.pattern && updatePosition(o); */
        if (_.sx != 1 || _.sy != 1) {
            sw = o.attrs[has]("stroke-width") ? o.attrs["stroke-width"] : 1;
            o.attr({
                "stroke-width": sw
            });
        }

        o.node && o.node.redraw();

        return o;
    };

    /************ TRANSFORMATIONS *************/

    elproto.hide = function () {
        return this;
    };

    elproto.show = function () {
        return this;
    };

    elproto.blur = function (size) {
        return this;
    };

    elproto.on = function (eventType, handler) {
        var el = this,
            listeners = el.listeners;

        if (!listeners) {
            listeners = el.listeners = {};
        }

        if (!listeners[eventType]) {
            listeners[eventType] = [];
        }

        listeners[eventType].push(handler);
    };

    elproto.remove = function () {
        return this;
    };

    paperproto.clear = function () {
        eve("raphael.clear", this);
        return this;
    };

    paperproto.remove = function () {
        if (this.removed) {
            return;
        }

        var paper = this,
            canvas = paper.canvas,
            pn = canvas.parentNode,
            i;

        eve("raphael.remove", paper);
        pn.removeChild(canvas);

        for (i in paper) {
            paper[i] = typeof paper[i] == "function" ? R._removedFactory(i) : null;
        }

        this.removed = true;
    };

    R.toString = function () {
        return "Your browser supports canvas.\nYou are running RedRaphael " + R.version;
    };

    for (var method in elproto) {
        if (elproto.hasOwnProperty(method) && !setproto.hasOwnProperty(method)) {
            setproto[method] = function (methodname) {
                return function () {
                    var arg = arguments;
                    return this.forEach(function (el) {
                        el[methodname].apply(el, arg);
                    });
                };
            }(method);
        }
    };
}

module.exports = R;