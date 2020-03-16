import {
    getArrayCopy,
    loadRefImage,
    showRecursively,
    dashedAttr2CSSMap
} from './raphael.lib';

/** !
* RedRaphael 1.0.0 - JavaScript Vector Library SVG Module
* Copyright (c) 2012-2013 FusionCharts, Inc. <http://www.fusioncharts.com>
*
* Raphael 2.1.0 - JavaScript Vector Library SVG Module
* Copyright (c) 2008-2012 Dmitry Baranovskiy <http://raphaeljs.com>
* Copyright © 2008-2012 Sencha Labs <http://sencha.com>
*
* Licensed under the MIT license.
*/
// Define _window as window object in case of indivual file inclusion.
export default function (R) {
    if (R.svg) {
        var has = 'hasOwnProperty',
            tSpanStr = 'tspan',
            vAlignStr = 'vertical-align',
            lineHeightStr = 'line-height',
            fontSizeStr = 'font-size',
            // fontFamilyStr = 'font-family',
            imageStr = 'image',
            noneStr = 'none',
            notToTuneStr = '_do-not-tune',
            textStr = 'text',
            textPathStr = 'textpath',
            rtlStr = 'rtl',
            arrayStr = 'array',
            middleStr = 'middle',
            bottomStr = 'bottom',
            topStr = 'top',
            pxStr = 'px',
            initialStr = 'initial',
            fnStr = 'function',
            brStr = '<br>',
            hiddenStr = 'hidden',
            visibleStr = 'visible',
            objectStr = 'object',
            fillStr = 'fill',
            transformStr = 'transform',
            visibilityStr = 'visibility',
            IESplTspanAttr = {
                visibility: hiddenStr,
                'font-size': '0px'
            },
            Str = String,
            VERTICAL = 'vertical',
            HORIZONTAL = 'horizontal',
            PRESERVESTRING = 'pre',
            BLANKSTRING = '',
            toFloat = parseFloat,
            toInt = parseInt,
            vAlignMultiplier = {
                top: 0,
                bottom: -1,
                middle: -0.5
            },
            win = R._g.win,
            navigator = win.navigator,
            isIE = /* @cc_on!@ */false || !!document.documentMode,
            math = Math,
            UNDEF,
            mmax = math.max,
            abs = math.abs,
            pow = math.pow,
            sqrt = math.sqrt,
            xlinkRegx = /^xlink:/,
            separator = /[, ]+/,
            textBreakRegx = /\n|<br\s*?\/?>/i,
            ltgtbrRegex = /&lt|&gt|&quot|&#039|&#034|<br/i,
            nbspRegex = /&nbsp;|&#160;|&#xA0;/g,
            arrayShift = Array.prototype.shift,
            zeroStrokeFix = !!(/AppleWebKit/.test(navigator.userAgent) &&
                    (!/Chrome/.test(navigator.userAgent) ||
                    navigator.appVersion.match(/Chrome\/(\d+)\./)[1] < 29)),
            eve = R.eve,
            E = '',
            S = ' ',
            xlink = 'http://www.w3.org/1999/xlink',
            svgNSStr = 'http://www.w3.org/2000/svg',
            isIpad = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
            typeStringSTR = 'string',
            markers = {
                block: 'M5,0 0,2.5 5,5z',
                classic: 'M5,0 0,2.5 5,5 3.5,3 3.5,2z',
                diamond: 'M2.5,0 5,2.5 2.5,5 0,2.5z',
                open: 'M6,1 1,3.5 6,6',
                oval: 'M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z'
            },
            shapeRenderingAttrs = {
                speed: 'optimizeSpeed',
                crisp: 'crispEdges',
                precision: 'geometricPrecision'
            },
            nav = navigator.userAgent.toLowerCase(),
            isIE9 = (function () {
              var verIE = (nav.indexOf('msie') != -1) ? parseInt(nav.split('msie')[1]) : false;
              if (verIE && (verIE === 9)) {
                return true;
              } else {
                return false;
              }
            })(),
            supportsPointer = R.supportsPointer,
            supportsTouch = R.supportsTouch,
            markerCounter = {},
            preLoad = function (elem, ig, isURL, paper) {
                R._preload(isURL[1], function () {
                    var w = this.offsetWidth,
                        h = this.offsetHeight;
                    $(elem, {
                        width: w,
                        height: h
                    });
                    $(ig, {
                        width: w,
                        height: h
                    });
                    paper.safari();
                });
            },
            quickExtend = function (obj1, obj2) {
                if (obj2) {
                    for (var key in obj2) {
                        obj1[key] = obj2[key];
                    }
                }
            },
            lastHoveredInfo = {
                elementInfo: []
            },
            doc = R._g.doc,
            win = R._g.win,
            safeMouseEventMapping = {
                mouseover: "touchstart",
                mousedown: "touchstart",
                mouseup: "touchend",
                mousemove: "touchmove",
                mouseout: "touchend" // to handle mouseout event
            },
            allPossibleAttrs = {
                "accent-height": true,
                "accumulate": true,
                "additive": true,
                "alignment-baseline": true,
                "alphabetic": true,
                "amplitude": true,
                "arabic-form": true,
                "ascent": true,
                "azimuth": true,
                "baseline-shift": true,
                "bbox": true,
                "begin": true,
                "bias": true,
                "by": true,
                "cap-height": true,
                "class": true,
                "clip": true,
                "clip-path": true,
                "clip-rule": true,
                "color": true,
                "color-interpolation": true,
                "color-interpolation-filters": true,
                "color-profile": true,
                "color-rendering": true,
                "cursor": true,
                "cx": true,
                "cy": true,
                "d": true,
                "decelerate": true,
                "descent": true,
                "direction": true,
                "display": true,
                "divisor": true,
                "dominant-baseline": true,
                "dur": true,
                "dx": true,
                "dy": true,
                "elevation": true,
                "enable-background": true,
                "end": true,
                "exponent": true,
                "fill": true,
                "fill-opacity": true,
                "fill-rule": true,
                "filter": true,
                "flood-color": true,
                "flood-opacity": true,
                "font-family": true,
                "font-size": true,
                "font-size-adjust": true,
                "font-stretch": true,
                "font-style": true,
                "font-variant": true,
                "font-weight": true,
                "format": true,
                "fr": true,
                "from": true,
                "fx": true,
                "fy": true,
                "g1": true,
                "g2": true,
                "glyph-name": true,
                "glyph-orientation-horizontal": true,
                "glyph-orientation-vertical": true,
                "hanging": true,
                "height": true,
                "horiz-adv-x": true,
                "horiz-origin-x": true,
                "href": true,
                "hreflang": true,
                "id": true,
                "ideographic": true,
                "image-rendering": true,
                "in2": true,
                "in": true,
                "intercept": true,
                "k1": true,
                "k2": true,
                "k3": true,
                "k4": true,
                "k": true,
                "kerning": true,
                "lang": true,
                "letter-spacing": true,
                "lighting-color": true,
                "local": true,
                "marker-end": true,
                "marker-mid": true,
                "marker-start": true,
                "mask": true,
                "mathematical": true,
                "max": true,
                "media": true,
                "method": true,
                "min": true,
                "mode": true,
                "name": true,
                "offset": true,
                "opacity": true,
                "operator": true,
                "order": true,
                "orient": true,
                "orientation": true,
                "origin": true,
                "overflow": true,
                "overline-position": true,
                "overline-thickness": true,
                "paint-order": true,
                "panose-1": true,
                "path": true,
                "ping": true,
                "pointer-events": true,
                "points": true,
                "r": true,
                "radius": true,
                "rel": true,
                "rendering-intent": true,
                "restart": true,
                "result": true,
                "rotate": true,
                "rx": true,
                "ry": true,
                "scale": true,
                "seed": true,
                "shape-rendering": true,
                "slope": true,
                "spacing": true,
                "speed": true,
                "stemh": true,
                "stemv": true,
                "stop-color": true,
                "stop-opacity": true,
                "strikethrough-position": true,
                "strikethrough-thickness": true,
                "string": true,
                "stroke": true,
                "stroke-dasharray": true,
                "stroke-dashoffset": true,
                "stroke-linecap": true,
                "stroke-linejoin": true,
                "stroke-miterlimit": true,
                "stroke-opacity": true,
                "stroke-width": true,
                "style": true,
                "tabindex": true,
                "target": true,
                "text-anchor": true,
                "text-decoration": true,
                "text-rendering": true,
                "to": true,
                "transform": true,
                "type": true,
                "u1": true,
                "u2": true,
                "underline-position": true,
                "underline-thickness": true,
                "unicode": true,
                "unicode-bidi": true,
                "unicode-range": true,
                "units-per-em": true,
                "v-alphabetic": true,
                "v-hanging": true,
                "v-ideographic": true,
                "v-mathematical": true,
                "values": true,
                "vector-effect": true,
                "version": true,
                "vert-adv-y": true,
                "vert-origin-x": true,
                "vert-origin-y": true,
                "visibility": true,
                "width": true,
                "widths": true,
                "word-spacing": true,
                "writing-mode": true,
                "x1": true,
                "x2": true,
                "x": true,
                "x-height": true,
                "xlink:actuate": true,
                "xlink:arcrole": true,
                "xlink:href": true,
                "xlink:role": true,
                "xlink:show": true,
                "xlink:title": true,
                "xlink:type": true,
                "xml:base": true,
                "xml:lang": true,
                "xml:space": true,
                "y1": true,
                "y2": true,
                "y": true,
                "z": true
            };

        /** External function to fire mouseOut for various elements for touch supported devices
         * TouchStart/Pointer Over event is attached in the capturing phase on the document so that
         * when ever any dom is tapped, this callback gets executed 1st and mouseout of the last event is
         * fired.
        */
        if (supportsTouch) {
            doc.addEventListener(supportsPointer ? 'pointerover' : 'touchstart', function (e) {
                if (lastHoveredInfo.srcElement && lastHoveredInfo.srcElement !== (e.srcElement
                    || e.target)) {
                    var elementInfo = lastHoveredInfo.elementInfo,
                        ii = elementInfo.length,
                        elementInfo,
                        elems,
                        i;
                    for (i = 0; i < ii; i++) {
                        elems = elementInfo[i];
                        elems.callback.call(elems.el, e);
                    }
                }
                lastHoveredInfo = {
                    elementInfo: []
                };
            }, true);
        }

        R.toString = function () {
            return 'Your browser supports SVG.\nYou are running Rapha\xebl ' + this.version;
        };

        // Code commented as resources will now be referenced using relative urls.
        // @todo Remove once we have acertained that there are no issues in any environment.
        // Automatic gradient and other reference update on state change
        // R._url = (/msie/i.test(navigator.userAgent) && !window.opera) ?
        //     E : updateReferenceUrl();
        // if (R._url && R._g.win.history.pushState) {
        //     R._g.win.history.pushState = (function () {
        //         var fn = R._g.win.history.pushState;
        //         return function () {
        //             var ret = fn.apply(R._g.win.history, arguments);
        //             return updateReferenceUrl(), ret;
        //         };
        //     }());
        //     R._g.win.addEventListener("popstate", updateReferenceUrl, false);
        // }
        R._url = E;

        var updateGradientReference = function (element, newGradient, attr = 'fill') {
            var gradient = attr === 'fill' ? element.gradient : element['stroke-gradient'];

            if (gradient) {
                if (gradient === newGradient) {
                    return; // no change
                }
                // else gradient is specified and it is not same as newGradient, implying a dereference
                gradient.refCount--;
                if (!gradient.refCount) {
                    gradient.parentNode.removeChild(gradient);
                }
                attr === 'fill' ? delete element.gradient : delete element['stroke-gradient'];
            }

            if (newGradient) { // add new gradient
                attr === 'fill' ? element.gradient = newGradient : element['stroke-gradient'] = newGradient;
                newGradient.refCount++;
            }
        };

        var $ = R._createNode = function (el, attr) {
                // Create the element
                if (typeof el === typeStringSTR) { // eslint-disable-line valid-typeof
                    el = R._g.doc.createElementNS(svgNSStr, el);
                }
                if (attr) {
                    var key,
                        value;
                    for (key in attr) {
                        // IE9 cannot convert the value to string while applying 'transform' attribute
                        value = isIE9 ? Str(attr[key]) : attr[key];
                        if (xlinkRegx.test(key)) {
                            el.setAttributeNS(xlink, key.replace(xlinkRegx, E), value);
                        } else {
                            el.setAttribute(key, value);
                        }
                    }
                }
                return el;
            },
            gradientUnitNames = {
                userSpaceOnUse: 'userSpaceOnUse',
                objectBoundingBox: 'objectBoundingBox'
            },
            gradientSpreadNames = {
                pad: 'pad',
                redlect: 'reflect',
                repeat: 'repeat'
            },
            addGradient = function (element, gradient, attr = 'fill') {
                if (!element.paper || !element.paper.defs) {
                    return 0;
                }

                var type = 'linear',
                    SVG = element.paper,
                    id = R.getElementID((SVG.id + '-' + gradient).replace(/[()\s%:,\xb0#]/g, '_')),
                    fx = 0.5, fy = 0.5, r, cx, cy, units, spread,
                    o = element.node,
                    s = o.style,
                    el = R._g.doc.getElementById(id),
                    vector;

                if (!el) {
                    gradient = Str(gradient).replace(R._radial_gradient, function (all, opts) {
                        type = 'radial';
                        opts = opts ? opts.split(',') : [];
                        units = opts[5];
                        spread = opts[6];

                        var _fx = opts[0],
                            _fy = opts[1],
                            _r = opts[2],
                            _cx = opts[3],
                            _cy = opts[4],
                            shifted = (_fx && _fy),
                            dir,
                            sqx;

                        if (_r) {
                            r = /%/.test(_r) ? _r : toFloat(_r);
                        }

                        if (units === gradientUnitNames.userSpaceOnUse) {
                            if (shifted) {
                                fx = _fx;
                                fy = _fy;
                            }
                            if (_cx && _cy) {
                                cx = _cx;
                                cy = _cy;
                                if (!shifted) {
                                    fx = cx;
                                    fy = cy;
                                }
                            }
                            return E;
                        }

                        if (shifted) {
                            fx = toFloat(_fx);
                            fy = toFloat(_fy);
                            dir = ((fy > 0.5) * 2 - 1);
                            (sqx = pow(fx - 0.5, 2)) + pow(fy - 0.5, 2) > 0.25 &&
                        (sqx < 0.25) && (fy = sqrt(0.25 - sqx) * dir + 0.5) &&
                        fy !== 0.5 &&
                        (fy = fy.toFixed(5) - 1e-5 * dir);
                        }
                        if (_cx && _cy) {
                            cx = toFloat(_cx);
                            cy = toFloat(_cy);
                            dir = ((cy > 0.5) * 2 - 1);

                            (sqx = pow(cx - 0.5, 2)) + pow(cy - 0.5, 2) > 0.25 &&
                        (sqx < 0.25) && (cy = sqrt(0.25 - sqx) * dir + 0.5) &&
                        cy !== 0.5 &&
                        (cy = cy.toFixed(5) - 1e-5 * dir);

                            if (!shifted) {
                                fx = cx;
                                fy = cy;
                            }
                        }

                        return E;
                    });
                    gradient = gradient.split(/\s*-\s*/);
                    if (type === 'linear') {
                        var angle = gradient.shift(),
                            specs = angle.match(/\((.*)\)/),
                            max;

                        specs = specs && specs[1] && specs[1].split(/\s*,\s*/);
                        angle = -toFloat(angle);
                        if (isNaN(angle)) {
                            return null;
                        }
                        if (specs && specs.length) {
                            if (specs[0] in gradientUnitNames) {
                                units = specs.shift();
                                (specs[0] in gradientSpreadNames) &&
                                (spread = specs.shift());
                            } else {
                                specs[4] && (units = specs[4]);
                                specs[5] && (spread = specs[5]);
                            }

                            /** @todo apply angle rotation and validation */
                            vector = [
                                specs[0] || '0%', specs[1] || '0%',
                                specs[2] || '100%', specs[3] || '0%'
                            ];
                        } else {
                            vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))];
                            max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
                            vector[2] *= max;
                            vector[3] *= max;
                            if (vector[2] < 0) {
                                vector[0] = -vector[2];
                                vector[2] = 0;
                            }
                            if (vector[3] < 0) {
                                vector[1] = -vector[3];
                                vector[3] = 0;
                            }
                        }
                    }
                    var dots = R._parseDots(gradient);
                    if (!dots) {
                        return null;
                    }

                    el = $(type + 'Gradient', {
                        id: id
                    });
                    el.refCount = 0;
                    (units in gradientUnitNames) &&
                        el.setAttribute('gradientUnits', Str(units));
                    (spread in gradientSpreadNames) &&
                        el.setAttribute('spreadMethod', Str(spread));
                    if (type === 'radial') {
                        (r !== undefined) && el.setAttribute('r', Str(r));

                        if (cx !== undefined && cy !== undefined) {
                            el.setAttribute('cx', Str(cx));
                            el.setAttribute('cy', Str(cy));
                        }
                        el.setAttribute('fx', Str(fx));
                        el.setAttribute('fy', Str(fy));
                    } else {
                        $(el, {
                            x1: vector[0],
                            y1: vector[1],
                            x2: vector[2],
                            y2: vector[3]
                        });
                    }

                    for (var i = 0, ii = dots.length; i < ii; i++) {
                        el.appendChild($('stop', {
                            offset: dots[i].offset ? dots[i].offset : i ? '100%' : '0%',
                            'stop-color': dots[i].color || '#fff',
                            // add stop opacity information
                            'stop-opacity': dots[i].opacity === undefined ? 1 : dots[i].opacity
                        }));
                    }
                    SVG.defs.appendChild(el);
                }
                updateGradientReference(element, el, attr);
                $(o, {
                    [attr]: "url('" + R._url + '#' + id + "')",
                    [attr + '-opacity']: 1
                });
                s.fill = E;
                return 1;
            },
            updatePosition = function (o) {
                var bbox = o.getBBox(1);
                $(o.pattern, {
                    patternTransform: o.matrix.invert() + ' translate(' + bbox.x + ',' + bbox.y + ')'
                });
            },
            addArrow = function(o, value, isEnd) {
                if (o.type == "path") {
                    var values = Str(value).toLowerCase().split("-"),
                    p = o.paper,
                    se = isEnd ? "end" : "start",
                    node = o.node,
                    attrs = o.attrs,
                    stroke = attrs["stroke-width"],
                    i = values.length,
                    type = "classic",
                    from,
                    to,
                    dx,
                    refX,
                    attr,
                    w = 3,
                    h = 3,
                    t = 5;
                    while (i--) {
                        switch (values[i]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                type = values[i];
                                break;
                            case "wide":
                                h = 5;
                                break;
                            case "narrow":
                                h = 2;
                                break;
                            case "long":
                                w = 5;
                                break;
                            case "short":
                                w = 2;
                                break;
                        }
                    }
                    if (type == "open") {
                        w += 2;
                        h += 2;
                        t += 2;
                        dx = 1;
                        refX = isEnd ? 4 : 1;
                        attr = {
                            fill: "none",
                            stroke: attrs.stroke
                        };
                    } else {
                        refX = dx = w / 2;
                        attr = {
                            fill: attrs.stroke,
                            stroke: "none"
                        };
                    }
                    if (o._.arrows) {
                        if (isEnd) {
                            o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
                            o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
                        } else {
                            o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
                            o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
                        }
                    } else {
                        o._.arrows = {};
                    }
                    if (type != "none") {
                        var pathId = "raphael-marker-" + type,
                        markerId = "raphael-marker-" + se + type + w + h + "-obj" + o.id;
                        if (!R._g.doc.getElementById(pathId)) {
                            p.defs.appendChild($($("path"), {
                                "stroke-linecap": "round",
                                d: markers[type],
                                id: pathId
                            }));
                            markerCounter[pathId] = 1;
                        } else {
                            markerCounter[pathId]++;
                        }
                        var marker = R._g.doc.getElementById(markerId),
                        use;
                        if (!marker) {
                            marker = $($("marker"), {
                                id: markerId,
                                markerHeight: h,
                                markerWidth: w,
                                orient: "auto",
                                refX: refX,
                                refY: h / 2
                            });
                            use = $($("use"), {
                                "xlink:href": "#" + pathId,
                                transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
                                "stroke-width": (1 / ((w / t + h / t) / 2)).toFixed(4)
                            });
                            marker.appendChild(use);
                            p.defs.appendChild(marker);
                            markerCounter[markerId] = 1;
                        } else {
                            markerCounter[markerId]++;
                            use = marker.getElementsByTagName("use")[0];
                        }
                        $(use, attr);
                        var delta = dx * (type != "diamond" && type != "oval");
                        if (isEnd) {
                            from = o._.arrows.startdx * stroke || 0;
                            to = R.getTotalLength(attrs.path) - delta * stroke;
                        } else {
                            from = delta * stroke;
                            to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                        }
                        attr = {};
                        attr["marker-" + se] = "url('" + R._url + "#" + markerId + "')";
                        if (to || from) {
                            attr.d = R.getSubpath(attrs.path, from, to);
                        }
                        $(node, attr);
                        o._.arrows[se + "Path"] = pathId;
                        o._.arrows[se + "Marker"] = markerId;
                        o._.arrows[se + "dx"] = delta;
                        o._.arrows[se + "Type"] = type;
                        o._.arrows[se + "String"] = value;
                    } else {
                        if (isEnd) {
                            from = o._.arrows.startdx * stroke || 0;
                            to = R.getTotalLength(attrs.path) - from;
                        } else {
                            from = 0;
                            to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                        }
                        o._.arrows[se + "Path"] && $(node, {
                            d: R.getSubpath(attrs.path, from, to)
                        });
                        delete o._.arrows[se + "Path"];
                        delete o._.arrows[se + "Marker"];
                        delete o._.arrows[se + "dx"];
                        delete o._.arrows[se + "Type"];
                        delete o._.arrows[se + "String"];
                    }
                    for (attr in markerCounter)
                        if (markerCounter[has](attr) && !markerCounter[attr]) {
                            var item = R._g.doc.getElementById(attr);
                            item && item.parentNode.removeChild(item);
                        }
                }
            },
            dasharray = {
            // In Firefox 37.0.1 the value of "stroke-dasharray" attribute `0` make the stroke/border invisible.
            // The actual issue is setting `none` as the value of `stroke-dasharray` attribute
            // redraphael internally changes the "none" value to "0", thus the stroke/border becomes invisible
            // To fix this issue now instead of setting the value as `0` for `stroke-dasharray` attribute
            // now using `none` string as none is a w3c standard value for stroke-dasharray
                '': [noneStr],
                'none': [noneStr],
                '-': [3, 1],
                '.': [1, 1],
                '-.': [3, 1, 1, 1],
                '-..': [3, 1, 1, 1, 1, 1],
                '. ': [1, 3],
                '- ': [4, 3],
                '--': [8, 3],
                '- .': [4, 3, 1, 3],
                '--.': [8, 3, 1, 3],
                '--..': [8, 3, 1, 3, 1, 3]
            },
            addDashes = function (o, value, params) {
                if (value !== undefined) {
                    var predefValue = dasharray[value.toLowerCase && value.toLowerCase()],
                        calculatedValues,
                        width,
                        butt,
                        i,
                        widthFactor;

                    value = predefValue || ([].concat(value));
                    if (R.is(value, arrayStr)) {
                        width = params['stroke-width'] || o.attrs['stroke-width'] || 1;
                        butt = {
                            round: width,
                            square: width,
                            butt: 0
                        }[params['stroke-linecap'] || o.attrs['stroke-linecap']] || 0;
                        i = value.length;
                        widthFactor = predefValue ? width : 1;

                        if (value[0] === noneStr) {
                            calculatedValues = value;
                        } else {
                            calculatedValues = [];
                            while (i--) {
                                calculatedValues[i] = (value[i] * widthFactor + ((i % 2) ? 1 : -1) * butt);
                                calculatedValues[i] <= 0 && (calculatedValues[i] = 0.01 + (width <= 1 ? butt : 0));
                                if (isNaN(calculatedValues[i])) {
                                    calculatedValues[i] = 0;
                                }
                            }
                        }
                        return {
                            'stroke-dasharray': calculatedValues.join(',')
                        };
                    }
                }
            },

            setFillAndStroke = R._setFillAndStroke = function (o, params) {
                if (!o.paper.canvas) {
                    return;
                }
                var node = o.node,
                    attrs = o.attrs,
                    paper = o.paper,
                    // s = node.style,
                    // vis = s.visibility,
                    el,
                    att,
                    finalAttr = {},
                    finalS = {},
                    ignoreAttrs = {'clip-rect': true},
                    value,
                    pathClip,
                    urlArr,
                    rect;

                // s.visibility = hiddenStr;
                if (o.type === imageStr) {
                    loadRefImage(o, params);
                }
                for (att in params) {
                    if (att in R._availableAttrs) {
                        value = params[att];
                        if (value === E && att in attrs) {
                            delete attrs[att];
                            node.removeAttribute(att === 'src' ? 'href' : att);
                        } else if (value === null && !ignoreAttrs[att]) {
                            // when an attribute is provided as null, it will be removed from the element
                            if (att in attrs) {
                                delete attrs[att];
                                node.removeAttribute(att === 'src' ? 'href' : att);
                            }
                        } else {
                            attrs[att] = value;
                            switch (att) {
                            case 'blur':
                                o.blur(value);
                                break;
                            case 'href':
                            case 'title':
                            case 'target':
                                var pn = node.parentNode;
                                if (pn.tagName.toLowerCase() !== 'a') {
                                    if (value === E) { break; }
                                    var hl = $('a');
                                    hl.raphael = true;
                                    hl.raphaelid = node.raphaelid;
                                    pn.insertBefore(hl, node);
                                    hl.appendChild(node);
                                    pn = hl;
                                }
                                if (att === 'target') {
                                    pn.setAttributeNS(xlink, 'show', value === 'blank' ? 'new' : value);
                                } else {
                                    pn.setAttributeNS(xlink, att, value);
                                }
                                node.titleNode = pn;
                                break;
                            case 'cursor':
                                finalS.cursor = value;
                                break;
                            case 'transform':
                                o.transform(value);
                                break;
                            case 'rotation':
                                if (R.is(value, arrayStr)) {
                                    o.rotate.apply(o, value);
                                } else {
                                    o.rotate(value);
                                }
                                break;
                            case 'arrow-start':
                                addArrow(o, value);
                                break;
                            case 'arrow-end':
                                addArrow(o, value, 1);
                                break;
                            case 'clip-path':
                                pathClip = true;
                                // falls through
                            case 'clip-rect':
                                rect = !pathClip && Str(value).split(separator);
                                o._.clipispath = !!pathClip;
                                if (pathClip || rect.length === 4) {
                                    o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
                                    var rc = $(pathClip ? 'path' : 'rect');
                                    el = $('clipPath');
                                    el.id = R.getElementID(R.createUUID());
                                    $(rc, pathClip ? {
                                        d: value ? attrs['clip-path'] = R._pathToAbsolute(value) : R._availableAttrs.path,
                                        fill: noneStr
                                    } : {
                                        x: rect[0],
                                        y: rect[1],
                                        width: rect[2],
                                        height: rect[3],
                                        transform: o.matrix.invert()
                                    });
                                    el.appendChild(rc);
                                    paper.defs.appendChild(el);
                                    finalAttr['clip-path'] = "url('" + R._url + '#' + el.id + "')";
                                    o.clip = rc;
                                }
                                if (!value) {
                                    var path = node.getAttribute('clip-path');
                                    if (path) {
                                        var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));
                                        clip && clip.parentNode.removeChild(clip);
                                        finalAttr['clip-path'] = E;
                                        document.documentMode === 11 && node.removeAttribute('clip-path');
                                        delete o.clip;
                                    }
                                }
                                break;
                            case 'path':
                                if (o.type === 'path') {
                                    finalAttr.d = value ? attrs.path = (R._stopabsolutePath ? R.sanitizePath(value) : R._pathToAbsolute(value)) : R._availableAttrs.path;
                                    o._.dirty = 1;
                                    if (o._.arrows) {
                                        'startString' in o._.arrows && addArrow(o, o._.arrows.startString);
                                        'endString' in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                    }
                                }
                                break;
                            case 'width':
                                finalAttr[att] = value;
                                o._.dirty = 1;
                                if (attrs.fx) {
                                    att = 'x';
                                    value = attrs.x;
                                } else {
                                    break;
                                }
                                // falls through
                            case 'x':
                                if (attrs.fx) {
                                    value = -attrs.x - (attrs.width || 0);
                                }
                                // falls through
                            case 'rx':
                                if (att === 'rx' && o.type === 'rect') {
                                    break;
                                }
                                // falls through
                            case 'cx':
                                finalAttr[att] = value;
                                o.pattern && updatePosition(o);
                                o._.dirty = 1;
                                break;
                            case 'height':
                                finalAttr[att] = value;
                                o._.dirty = 1;
                                if (attrs.fy) {
                                    att = 'y';
                                    value = attrs.y;
                                } else {
                                    break;
                                }
                                // falls through
                            case 'y':
                                // For text don't apply y attribute as it will be applied during tuneText
                                if (o.type === textStr) {
                                    break;
                                }
                                if (attrs.fy) {
                                    value = -attrs.y - (attrs.height || 0);
                                }
                                // falls through
                            case 'ry':
                                if (att === 'ry' && o.type === 'rect') {
                                    break;
                                }
                                // falls through
                            case 'cy':
                                finalAttr[att] = value;
                                o.pattern && updatePosition(o);
                                o._.dirty = 1;
                                break;
                            case 'r':
                                if (o.type === 'rect') {
                                    finalAttr.rx = finalAttr.ry = value;
                                } else {
                                    finalAttr[att] = value;
                                }
                                o._.dirty = 1;
                                break;
                            case 'src':
                                if (o.type === imageStr) {
                                    node.setAttributeNS(xlink, 'href', value);
                                }
                                break;
                            case 'stroke-width':
                                if (o._.sx !== 1 || o._.sy !== 1) {
                                    value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
                                }
                                if (paper._vbSize) {
                                    value *= paper._vbSize;
                                }
                                if (zeroStrokeFix && value === 0) {
                                    value = 0.000001;
                                }
                                finalAttr[att] = value;
                                // if this time we have no stroke-dasharray param but last time we have then update it according to new stroke-width
                                // Do not apply stroke-dasharray if the current stroke-dasharray is ''
                                if (!params['stroke-dasharray'] && attrs['stroke-dasharray'] && params['stroke-dasharray'] !== '') {
                                    quickExtend(finalAttr, addDashes(o, attrs['stroke-dasharray'], params));
                                }
                                if (o._.arrows) {
                                    'startString' in o._.arrows && R.addArrow && R.addArrow(o, o._.arrows.startString);
                                    'endString' in o._.arrows && R.addArrow && R.addArrow(o, o._.arrows.endString, 1);
                                }
                                break;
                            case 'stroke-dasharray':
                                quickExtend(finalAttr, addDashes(o, value, params));
                                break;
                            case 'fill':
                                var isURL = R._ISURL.test(value);
                                if (isURL) {
                                    urlArr = value.split(R._ISURL);
                                    el = $('pattern');
                                    var ig = $(imageStr);
                                    el.id = R.getElementID(R.createUUID());
                                    $(el, {
                                        x: 0,
                                        y: 0,
                                        patternUnits: 'userSpaceOnUse',
                                        height: 1,
                                        width: 1
                                    });
                                    $(ig, {
                                        x: 0,
                                        y: 0,
                                        'xlink:href': urlArr[1]
                                    });
                                    el.appendChild(ig);
                                    preLoad(el, ig, urlArr, paper);
                                    paper.defs.appendChild(el);
                                    finalAttr.fill = "url('" + R._url + urlArr[1] + "')";

                                    o.pattern = el;
                                    o.pattern && updatePosition(o);
                                    break;
                                }
                                var clr = R.getRGB(value);
                                if (!clr.error) {
                                    delete params.gradient;
                                    delete attrs.gradient;
                                    // !R.is(attrs.opacity, "undefined") &&
                                    //     R.is(params.opacity, "undefined") &&
                                    //     finalAttr[opacity] = attrs.opacity;
                                    !R.is(attrs['fill-opacity'], 'undefined') && R.is(params['fill-opacity'], 'undefined') && (finalAttr['fill-opacity'] = attrs['fill-opacity']);
                                    o.gradient && updateGradientReference(o);
                                } else if ((o.type === 'circle' || o.type === 'ellipse' || Str(value).charAt() !== 'r') && addGradient(o, value)) {
                                    // The reason for this block of code is not known, hence it is commented out as it is causeing issues in
                                    // IE8 browser for gradient color
                                    /* if ("opacity" in attrs || "fill-opacity" in attrs) {
                                        var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                                        if (gradient) {
                                            var stops = gradient.getElementsByTagName("stop");
                                            $(stops[stops.length - 1], {
                                                "stop-opacity": ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs["fill-opacity"] : 1)
                                            });
                                        }
                                    } */
                                    attrs.gradient = value;
                                    // attrs.fill = "none";
                                    break;
                                }
                                if (clr[has]('opacity')) {
                                    finalAttr['fill-opacity'] = clr.opacity > 1 ? clr.opacity / 100 : clr.opacity;
                                    o._.fillOpacityDirty = true;
                                } else if (o._.fillOpacityDirty && R.is(attrs['fill-opacity'], 'undefined') &&
                                        R.is(params['fill-opacity'], 'undefined')) {
                                    node.removeAttribute('fill-opacity');
                                    delete o._.fillOpacityDirty;
                                }
                                // falls through
                            case 'stroke':
                                clr = R.getRGB(value);
                                if (clr.error) {
                                  if (
                                    o.type === 'circle' ||
                                    o.type === 'ellipse' ||
                                    Str(value).charAt() !== 'r'
                                  ) {
                                    addGradient(o, value, 'stroke');
                                  }
                                } else {
                                  finalAttr[att] = clr.hex;
                                  updateGradientReference(o, UNDEF, att)
                                }
                                if (att === 'stroke') { // remove stroke opacity when stroke is set to none
                                    if (clr[has]('opacity')) {
                                        finalAttr['stroke-opacity'] = clr.opacity > 1 ? clr.opacity / 100 : clr.opacity;
                                        o._.strokeOpacityDirty = true;
                                    } else if (o._.strokeOpacityDirty && R.is(attrs['stroke-opacity'], 'undefined') &&
                                            R.is(params['stroke-opacity'], 'undefined')) {
                                        node.removeAttribute('stroke-opacity');
                                        delete o._.strokeOpacityDirty;
                                    }
                                    if (o._.arrows) {
                                        'startString' in o._.arrows && addArrow(o, o._.arrows.startString);
                                        'endString' in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                    }
                                }
                                break;
                            case 'gradient':
                                (o.type === 'circle' || o.type === 'ellipse' || Str(value).charAt() !== 'r') && addGradient(o, value);
                                break;
                            case 'visibility':
                                value === hiddenStr ? o.hide() : o.show();
                                break;
                            case 'opacity':
                                // if (attrs.gradient && !attrs[has]("stroke-opacity")) {
                                //     finalAttr["stroke-opacity"] = value > 1 ? value / 100 : value;
                                // }
                                value = value > 1 ? value / 100 : value;
                                finalAttr.opacity = value;
                                break;
                            // fall
                            case 'fill-opacity':
                                // if (attrs.gradient) {
                                //     gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\([\'\"]#|[\'\"]\)$/g, E));
                                //     if (gradient) {
                                //         stops = gradient.getElementsByTagName("stop");
                                //         l = stops.length;
                                //         for (i = 0; i < l; i += 1) {
                                //           $(stops[i], {
                                //               "stop-opacity": value
                                //           });
                                //         }
                                //     }
                                //     break;
                                // }
                                value = value > 1 ? value / 100 : value;
                                finalAttr['fill-opacity'] = value;
                                break;
                            case 'shape-rendering':
                                o.attrs[att] = value = shapeRenderingAttrs[value] || value || 'auto';
                                finalAttr[att] = value;
                                node.style.shapeRendering = value;
                                break;

                            case 'line-height': // do not apply
                            case 'vertical-align': // do not apply
                                break;
                            default:
                                att === fontSizeStr && (value = toInt(value, 10) + 'px');
                                o._.dirty = 1;
                                finalAttr[att] = value;
                                if (dashedAttr2CSSMap[att]) {
                                    finalS[dashedAttr2CSSMap[att]] = value;
                                }
                                break;
                            }
                        }
                    } else if (att in allPossibleAttrs){
                        // ensuring any kind of attributes can be applied to a dom
                        if (value === E && att in attrs) {
                            delete attrs[att];
                            node.removeAttribute(att);
                        } else  {
                            attrs[att] = value;
                            finalS[att] = value;
                        }
                    }
                }
                // Finally apply the styles
                for (att in finalS) {
                    node.style[att] = finalS[att];
                }
                // Finally apply the attributes
                for (att in finalAttr) {
                    node.setAttribute(att, finalAttr[att]);
                }
                (o.type === textStr && !params[notToTuneStr]) && tuneText(o, params);
                // s.visibility = vis;
            },
            /*
            * Keeps the follower element in sync with the leaders.
            * First and second arguments represents the context(element) and the
            name of the callBack function respectively.
            * The callBack is invoked for indivual follower Element with the rest of
            arguments.
            */
            updateFollowers = R._updateFollowers = function () {
                var i,
                    ii,
                    followerElem,
                    args = getArrayCopy(arguments),
                    o = arrayShift.call(args),
                    fnName = arrayShift.call(args);
                for (i = 0, ii = o.followers.length; i < ii; i++) {
                    followerElem = o.followers[i].el;
                    followerElem[fnName].apply(followerElem, args);
                }
            },
            leading = 1.2,
            tuneText = function (el, params) {
                // If there is no effective change in new attributes then ignore
                if (
                  el.type !== textStr ||
                  !(
                    params[has](textStr) ||
                    params[has]('font') ||
                    params[has](fontSizeStr) ||
                    params[has]('x') ||
                    params[has]('y') ||
                    params[has](lineHeightStr) ||
                    params[has](vAlignStr) ||
                    params[has](textPathStr)
                  )
                ) {
                  return;
                }
                var a = el.attrs,
                    defs = el.paper.defs,
                    group = el.parent,
                    node = el.node,
                    fontSize,
                    oldAttr = el._oldAttr = el._oldAttr || { baseLineDiff: 8, valign: -0.5 }, // Store all the attributes that are getting applied. This will help us to apply deferential information only.
                    lineHeight = toFloat(params[lineHeightStr] || a[lineHeightStr]),
                    direction = params.direction || a.direction || (group && group.attrs && group.attrs.direction) || oldAttr.direction || initialStr,
                    valign,
                    updateNode = false,
                    tspanAttr,
                    updateTspan = false,
                    i,
                    l,
                    ii,
                    // For rtl text in IE there is a blank tspan to fix RTL rendering issues in IE.
                    // So there will twice the amount of tSpan
                    j = !isIE && direction === rtlStr ? 2 : 1,
                    texts,
                    tempIESpan,
                    tspan,
                    updateAlignment = false,
                    tspans,
                    text,
                    textChanged = false,
                    // @todo: Comment the below lines of code in order to fix RED-8282
                    // removeAllChild = !!(!isIE && oldAttr.direction && direction !== oldAttr.direction);
                    removeAllChild,
                    // Check whether a string has &nbsp; or similar non-breaking space
                    hasnbsp = function (text) {
                        return (text && nbspRegex.test(text));
                    },
                    /**
                     * replaces multiple spaces and different codes of nbsp
                     * with single white space so that it simulates the behaviour of dom
                     * rendering for text
                     * @param {string} text
                     * @returns {string} processed text
                     */
                    spacify = function (text) {
                        return text.replace(/\s+/g, ' ').trim()
                            .replace(nbspRegex, ' ');
                    };

                if (params[has](textPathStr)) {
                    var rUUID = R.getElementID(R.createUUID()),
                        textPathParams = params[textPathStr];

                    var textPath,
                        tSpan,
                        txtNode,
                        dy = 0,
                        textPathProps = {};

                    for (var key in textPathParams) {
                        if (textPathParams.hasOwnProperty(key)) {
                            if (key === 'path' && !('href' in textPathParams)) {
                                if (
                                  oldAttr.textPathStr !== textPathParams[key]
                                ) {
                                  if (el.textPathDef) {
                                    el.textPathDef.setAttribute('d', textPathParams[key] || E);

                                    textPathProps.href = '#' + el.textPathDef.getAttribute('id');
                                    textPathProps['xlink:href'] = '#' + el.textPathDef.getAttribute('id');
                                  } else {
                                    el.textPathDef = defs.appendChild(
                                      $('path', {
                                        id: rUUID,
                                        d: textPathParams[key] || E
                                      })
                                    );

                                    textPathProps.href = '#' + rUUID;
                                    textPathProps['xlink:href'] = '#' + rUUID;
                                  }

                                  oldAttr.textPathStr = textPathParams[key];
                                } else {
                                    textPathProps.href = '#' + el.textPathDef.getAttribute('id');
                                    textPathProps['xlink:href'] = '#' + el.textPathDef.getAttribute('id');
                                }
                            } else {
                                textPathProps[key] = textPathParams[key];
                            }
                        }
                    }

                    if (params[has](textStr)) {
                        txtNode = R._g.doc.createTextNode(params[textStr] || E);
                        oldAttr.pathText = a.text = params[textStr] || E;
                    } else {
                        txtNode = R._g.doc.createTextNode(
                            oldAttr.pathText || oldAttr.text || E
                        );
                        oldAttr.pathText = oldAttr.pathText || oldAttr.text || E;
                        delete oldAttr.text;
                    }

                    if (params[has](vAlignStr)) {
                        if (params[vAlignStr] === middleStr) {
                            dy = 0.3;
                            oldAttr.valign = -0.5;
                        } else if (params[vAlignStr] === bottomStr) {
                            dy = 0.7;
                            oldAttr.valign = -1;
                        } else if (params[vAlignStr] === topStr) {
                            oldAttr.valign = 0;
                        }
                        tSpan = $('tspan', { dy: dy + 'em' });
                        tSpan.appendChild(txtNode);

                        oldAttr.tSpan = tSpan;
                    } else {
                        if (oldAttr.tSpan && (oldAttr.tSpan.textContent === params[textStr] || typeof params[textStr] !== typeStringSTR)) {
                            tSpan = oldAttr.tSpan;
                        } else {
                            if (oldAttr.valign === -0.5) {
                                dy = 0.3;
                            } else if (oldAttr.valign === -1) {
                                dy = 0.7;
                            } else {
                                dy = 0;
                            }

                            tSpan = $('tspan', { dy: dy + 'em' });
                            tSpan.appendChild(txtNode);

                            oldAttr.tSpan = tSpan;
                        }
                    }

                    // IE 11 does not support x and y with textPath
                    // hence removing x and y
                    delete oldAttr.x;
                    delete oldAttr.y;
                    node.removeAttribute('x');
                    node.removeAttribute('y');


                    textPath = $('textPath', textPathProps);
                    textPath.appendChild(tSpan || txtNode);

                    while (node.firstChild) {
                        node.removeChild(node.firstChild);
                    }
                    node.appendChild(textPath);
                } else {
                    oldAttr.direction = direction;

                    // cleanup old attr remnants from rendering a text path
                    if (el.textPathDef && defs) {
                        el.textPathDef.parentNode.removeChild(
                            el.textPathDef
                        );
                        delete el.textPathDef;
                    }

                    delete oldAttr.txtNode;
                    delete oldAttr.tSpan;
                    delete oldAttr.textPathStr;

                    // If line height is not valid (0, NaN, undefuned), then derive it from fontSize
                    if (!lineHeight) {
                        fontSize = params.fontSize || params[fontSizeStr] || a[fontSizeStr] || (group && group.attrs && group.attrs.fontSize);
                        fontSize = fontSize ? fontSize.toString().replace(pxStr, E) : 10;
                        lineHeight = fontSize * leading;
                    }
                    // If the containing text got changed
                    if (params[has](textStr) || oldAttr.pathText) {
                        // If the text is an arra then join with <br>
                        if (R.is(params.text, arrayStr)) {
                            text = params.text.join(brStr);
                        } else if (params.text == null) {
                            text = oldAttr.pathText;
                        } else {
                            text = params.text
                        }

                        delete oldAttr.pathText;

                        // If it is a new text applied
                        if (text !== oldAttr.text) {
                            textChanged = true;
                            // Convert all the &lt; and &gt; to < and > and if there is any <br/> tag in between &lt; and &gt;
                            // then converting them into <<br/> and ><br/> respectively.
                            if (text && ltgtbrRegex.test(text)) {
                                text = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
                                    .replace(/&quot;|&#034;/g, '"')
                                    .replace(/&#039;/g, '\'')
                                    .replace(/&<br\/>lt;|&l<br\/>t;|&lt<br\/>;/g, '<<br/>')
                                    .replace(/&<br\/>gt;|&g<br\/>t;|&gt<br\/>;/g, '><br/>');
                            }
                            oldAttr.text = a.text = text;
                            if (textBreakRegx.test(text)) { // if multiline text
                                if (oldAttr.noTSpan) { // previously it was single line
                                    oldAttr.noTSpan = !(removeAllChild = true);
                                }
                                texts = Str(text).split(textBreakRegx);
                                l = texts.length;
                            } else { // single line
                                // If it is a single line text then always remove the children
                                removeAllChild = true;
                                oldAttr.noTSpan = true; // Always remove old text node
                                l = 1;
                            }
                            // if no if lines are changed
                            if (oldAttr.lineCount !== l) {
                                oldAttr.lineCount = l;
                                updateAlignment = true;
                            }
                        }
                    }

                    if (lineHeight !== oldAttr.lineHeight) { // lineHeight change
                        oldAttr.lineHeight = lineHeight;
                        oldAttr.baseLineDiff = lineHeight * 0.75; // Approximate calculation
                        updateAlignment = true;
                    }

                    // If the text was RTL earlier and now changed or vice versa
                    if (removeAllChild) {
                        // remove all children
                        while (node.firstChild) {
                            node.removeChild(node.firstChild);
                        }
                    }

                    // ** If multiline text mode
                    if (oldAttr.lineCount > 1) {
                        // Remove white-space preserve property from parent text node
                        if (node.style.whiteSpace === PRESERVESTRING) {
                            node.style.whiteSpace = BLANKSTRING;
                        }
                        tspanAttr = {};
                        if (!oldAttr.tspanAttr) {
                            oldAttr.tspanAttr = {};
                            oldAttr.tspan0Attr = {};
                        }
                        // If the dy needs to be changed
                        if (oldAttr.tspanAttr.dy !== oldAttr.lineHeight) {
                            oldAttr.tspanAttr.dy = tspanAttr.dy = oldAttr.lineHeight;
                            updateTspan = true;
                        }

                        // if x is getting changed
                        if (params[has]('x') && oldAttr.tspanAttr.x !== params.x) { // X change
                            // If the x is getting changed, then the tspan need to be updated
                            // Note: we don't need to update the node as it is already updated during setFillAndStroke
                            oldAttr.tspan0Attr.x = oldAttr.tspanAttr.x = tspanAttr.x = a.x;
                            updateTspan = true;
                        }

                        // Note for the first tspan (i === 0), we will add only the x attribute. No dy
                        // If the containing text got changed
                        if (textChanged) {
                            tspans = node.getElementsByTagName(tSpanStr);
                            for (i = 0; i < l; i++) {
                                tspan = tspans[i * j];
                                if (tspan) { // If already there is a tspan then remove the text
                                    tspan.innerHTML = E;
                                    if (isIE) {
                                        // For IE, setting the innerHTML of tspan to blank string doesnot remove
                                        // the child nodes. Child nodes should be removed explicitly.
                                        while (tspan.firstChild) {
                                            tspan.removeChild(tspan.firstChild);
                                        }
                                    }
                                    if (updateTspan) { // If update required, update here
                                        $(tspan, i ? tspanAttr : oldAttr.tspan0Attr);
                                    }
                                } else { // Else create a new span
                                    tspan = $(tSpanStr, i ? oldAttr.tspanAttr : oldAttr.tspan0Attr);
                                    node.appendChild(tspan);
                                    // Special fix for RTL texts in IE-SVG browsers
                                    if (!isIE && direction === rtlStr) {
                                        tempIESpan = $(tSpanStr, IESplTspanAttr);
                                        tempIESpan.appendChild(R._g.doc.createTextNode('i'));
                                        node.appendChild(tempIESpan);
                                    }
                                }
                                // If it is a blank line, preserve it
                                if (!texts[i]) {
                                    tspan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
                                    texts[i] = S;
                                }

                                // If text has &nbsp; then change the white-space style of the node to 'preserve' for disabling space collapse
                                if (hasnbsp(texts[i])) {
                                    texts[i] = spacify(texts[i]);
                                    tspan.style.whiteSpace = PRESERVESTRING;
                                } else if (tspan.style.whiteSpace === PRESERVESTRING) {
                                    tspan.style.whiteSpace = BLANKSTRING;
                                }
                                // create and append the text node
                                tspan.appendChild(R._g.doc.createTextNode(texts[i]));
                            }

                            ii = l * j;
                            // If there are already more tspan than required, then remove the extra tspans
                            if (tspans.length > ii) {
                                for (i = tspans.length - 1; i >= ii; i -= 1) {
                                    node.removeChild(tspans[i]);
                                }
                            }
                        } else if (updateTspan) { // else if the tspans needs to be updated
                            tspans = node.getElementsByTagName(tSpanStr); // @note: don't count on tspan, rather store the previous count
                            ii = tspans.length;
                            for (i = 0; i < ii; i += j) {
                                $(tspans[i], i ? tspanAttr : oldAttr.tspan0Attr);
                            }
                        }
                    } else if (textChanged) { // ** single line mode
                        // If text has &nbsp; then change the white-space style of the node to 'preserve' for disabling space collapse
                        if (hasnbsp(text)) {
                            text = spacify(text);
                            node.style.whiteSpace = PRESERVESTRING;
                        } else if (node.style.whiteSpace === PRESERVESTRING) {
                            node.style.whiteSpace = BLANKSTRING;
                        }
                        // create and append the text node
                        node.appendChild(R._g.doc.createTextNode(text));
                    }

                    if (params[vAlignStr]) { // vAlign change
                        valign = vAlignMultiplier[a[vAlignStr]] || 0; // default v-alignment is middle but for wrong alignment value it will be top.
                        if (valign !== oldAttr.valign) {
                            oldAttr.valign = valign;
                            updateAlignment = true;
                        }
                    }

                    // Update the dy of the first tspan according to the v-alignment
                    if (updateAlignment) {
                        oldAttr.shift = oldAttr.baseLineDiff + (oldAttr.lineCount * oldAttr.lineHeight * oldAttr.valign);
                        updateNode = true;
                    }
                    // if y is getting changed
                    if ((params.y || params.y === 0) && oldAttr.y !== params.y) { // Y change
                        oldAttr.y = a.y;
                        updateNode = true;
                    }

                    // Update the node's attribute
                    if (updateNode && (oldAttr.y || oldAttr.y === 0) && (oldAttr.shift || oldAttr.shift === 0)) {
                        $(node, { y: Math.round(oldAttr.y + oldAttr.shift) });
                    }
                }
            },
            Element = function (node, svg, group/*, dontAppend */) {
                var o = this,
                    parent = group || svg;

                /*! dontAppend && */parent.canvas && parent.canvas.appendChild(node);

                o.node = o[0] = node;
                node.raphael = true;
                node.raphaelid = o.id = R._oid++;

                o.matrix = R.matrix();
                o.realPath = null;

                o.attrs = o.attrs || {};
                o.followers = o.followers || [];

                o.paper = svg;
                o.ca = o.customAttributes = o.customAttributes ||
                new svg._CustomAttributes();

                o._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    deg: 0,
                    dx: 0,
                    dy: 0,
                    dirty: 1
                };

                o.parent = parent;
                !parent.bottom && (parent.bottom = o);

                o.prev = parent.top;
                parent.top && (parent.top.next = o);
                parent.top = o;
                o.next = null;
            },
            /*
             * Function to get the distance between two touches
            */
            getTouchDistance = function (touch1, touch2, isY) {
                var select = isY ? 'pageY' : 'pageX';
                return Math.abs(touch2[select] - touch1[select]);
            },
            /**
             * Function to store the various event handlers
             */
            storeHandlers = R.storeHandlers = function (elem, handler, fn) {
                // Storing the handlers
                elem._actualListners || (elem._actualListners = []);
                elem._derivedListeners || (elem._derivedListeners = []);
                elem._actualListners.push(handler);
                elem._derivedListeners.push(fn);
            },
            /**
             * Function to remove various handlers
             */
            removeHandlers = function (elem, handler) {
                // Storing the handlers
                var index = elem._actualListners.indexOf(handler),
                    derivedHandler;

                if (index !== -1) {
                    derivedHandler = elem._derivedListeners[index];
                    elem._actualListners.splice(index, 1);
                    elem._derivedListeners.splice(index, 1);
                }
                return derivedHandler
            },
            elproto = R.el;

        Element.prototype = elproto;
        elproto.constructor = Element;

        R._engine.getNode = function (el) {
            var node = el.node || el[0].node;
            return node.titleNode || node;
        };
        R._engine.getLastNode = function (el) {
            var node = el.node || el[el.length - 1].node;
            return node.titleNode || node;
        };

        elproto.rotate = function (deg, cx, cy) {
            var o = this,
                bbox;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'rotate', deg, cx, cy);
            deg = Str(deg).split(separator);
            if (deg.length - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            (cy == null) && (cx = cy);
            if (cx == null || cy == null) {
                bbox = o.getBBox(1);
                cx = bbox.x + bbox.width / 2;
                cy = bbox.y + bbox.height / 2;
            }
            o.transform(o._.transform.concat([['r', deg, cx, cy]]));
            return o;
        };

        elproto.scale = function (sx, sy, cx, cy) {
            var o = this,
                bbox;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'scale', sx, sy, cx, cy);
            sx = Str(sx).split(separator);
            if (sx.length - 1) {
                sy = toFloat(sx[1]);
                cx = toFloat(sx[2]);
                cy = toFloat(sx[3]);
            }
            sx = toFloat(sx[0]);
            (sy == null) && (sy = sx);
            (cy == null) && (cx = cy);
            if (cx == null || cy == null) {
                bbox = o.getBBox(1);
            }
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
            o.transform(o._.transform.concat([['s', sx, sy, cx, cy]]));
            return o;
        };

        elproto.translate = function (dx, dy) {
            var o = this;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'translate', dx, dy);
            dx = Str(dx).split(separator);
            if (dx.length - 1) {
                dy = toFloat(dx[1]);
            }
            dx = toFloat(dx[0]) || 0;
            dy = +dy || 0;
            o.transform(o._.transform.concat([['t', dx, dy]]));
            return o;
        };

        elproto.transform = function (tstr) {
            var o = this,
                _ = o._,
                sw;

            if (tstr == null) {
                return _.transform;
            }
            R._extractTransform(o, tstr);

            o.clip && !_.clipispath && $(o.clip, {
                transform: o.matrix.invert()
            });
            o.pattern && updatePosition(o);
            o.node && $(o.node, {
                transform: o.matrix
            });

            if (_.sx !== 1 || _.sy !== 1) {
                sw = o.attrs['stroke-width'];
                sw && o.attr({
                    'stroke-width': sw
                });
            }

            return o;
        };

        elproto.hide = function () {
            var o = this;
            updateFollowers(o, 'hide');
            !o.removed && o.paper.safari(o.node.style.display = noneStr);
            return o;
        };

        elproto.show = function () {
            var o = this;
            updateFollowers(o, 'show');
            !o.removed && o.paper.safari(o.node.style.display = E);
            return o;
        };

        elproto.remove = function () {
            if (this.removed || !this.parent.canvas) {
                return;
            }

            var o = this,
                node = R._engine.getNode(o),
                paper = o.paper,
                defs = paper.defs,
                i;

            paper.__set__ && paper.__set__.exclude(o);
            eve.unbind('raphael.*.*.' + o.id);

            if (o.gradient && defs) {
                updateGradientReference(o);
            }
            if (o['stroke-gradient'] && defs) {
                updateGradientReference(o, UNDEF, 'stroke');
            }
            if (o.textPathDef && defs) {
                o.textPathDef.parentNode.removeChild(o.textPathDef);
                delete o.textPathDef;
            }

            while ((i = o.followers.pop())) {
                i.el.remove();
            }
            while ((i = o.bottom)) {
                i.remove();
            }

            if (o._drag) {
                o.undrag();
            }

            if (o.events) {
                while ((i = o.events.pop())) {
                    i.unbind();
                }
            }

            o.parent.canvas.contains(node) && o.parent.canvas.removeChild(node);
            o.removeData();
            delete paper._elementsById[o.id]; // remove from lookup hash
            R._tear(o, o.parent);

            for (i in o) {
                o[i] = typeof o[i] === fnStr ? R._removedFactory(i) : null;
            }

            o.removed = true;
        };

        elproto._getBBox = function () {
            var fn,
                o = this,
                node = o.node,
                bbox = {},
                a = o.attrs,
                align,
                hide,
                isText = (o.type === textStr);
            if (isIE && isText) {
                fn = showRecursively(o);
            } else {
                if (node.style.display === noneStr) {
                    o.show();
                    hide = true;
                }
            }

            try {
                bbox = node.getBBox();
                if (isText) {
                    // If bbox does not have x / y, which is possible in certain
                    // environments, we mathematically calculate these values by
                    // using x, y (adjusted using the values of text-anchor, and
                    // vertical-align attributes), of the element along with the
                    // width and height provided by the getBBox().
                    if (bbox.x === undefined) {
                        bbox.isCalculated = true;
                        align = a['text-anchor'];
                        bbox.x = (a.x || 0) - (bbox.width * ((align === 'start')
                            ? 0 : (align === middleStr) ? 0.5 : 1));
                    }

                    if (bbox.y === undefined) {
                        bbox.isCalculated = true;
                        align = a[vAlignStr];
                        bbox.y = (a.y || 0) - (bbox.height * ((align === bottomStr)
                            ? 1 : (align === middleStr) ? 0.5 : 0));
                    }
                }
            } catch (e) {
            // Firefox 3.0.x plays badly here
            } finally {
                bbox = bbox || {};
            }
            isIE && isText ? fn && fn() : hide && o.hide();
            return bbox;
        };

        elproto.attr = function (name, value) {
            if (this.removed) {
                return this;
            }
            var elem = this,
                attrs = this.attrs,
                key,
                finalParam = {},
                i,
                ii,
                params,
                subkey,
                par,
                follower,
                invokedCa = elem._invokedCa || (elem._invokedCa = {}),
                ca,
                caObj = this.ca;
            // get all, return all applied attributes
            if (name == null) {
                var res = {};
                for (key in attrs) {
                    if (attrs[has](key)) {
                        res[key] = attrs[key];
                    }
                }
                res.gradient && res.fill === noneStr && (res.fill = res.gradient) && delete res.gradient;
                res.transform = this._.transform;
                res.visibility = this.node.style.display === noneStr ? hiddenStr : visibleStr;
                return res;
            } else {
                if (value == null) {
                    if (R.is(name, objectStr)) { // Provided as an object
                        params = name;
                    } else if (R.is(name, typeStringSTR)) { // get one, return the value of the given attribute
                        if (name === fillStr && attrs.fill === noneStr && attrs.gradient) {
                            return attrs.gradient;
                        }
                        if (name === transformStr) {
                            return this._.transform;
                        }
                        if (name === visibilityStr) {
                            return this.node.style.display === noneStr ? hiddenStr : visibleStr;
                        }

                        if (name in attrs) {
                            return attrs[name];
                        } else if (R.is(caObj[name], fnStr)) {
                            return caObj[name].def;
                        }
                        return R._availableAttrs[name];
                    }
                } else { // key value provided seperately
                    params = {};
                    params[name] = value;
                }

                if (!R.stopPartialEventPropagation) {
                    for (key in params) {
                        eve('raphael.attr.' + key + '.' + this.id, this, params[key], key);
                    }
                }

                // For each param
                for (key in params) {
                    // check if that is a Custom attribute or not
                    ca = caObj[key];
                    if (ca && !invokedCa[key] && R.is(ca, fnStr)) {
                        invokedCa[key] = true; // prevent recursion
                        par = ca.apply(this, [].concat(params[key]));
                        invokedCa[key] = false;

                        // If the custom attribute create another set of attribute to be updated
                        // Then add them in the attribute list
                        for (subkey in par) {
                            finalParam[subkey] = par[subkey];
                        }
                        // Add the attribute in attrs
                        attrs[key] = params[key];
                    } else {
                        finalParam[key] = params[key];
                    }
                }

                setFillAndStroke(this, finalParam);

                for (i = 0, ii = this.followers.length; i < ii; i++) {
                    follower = this.followers[i];
                    (follower.cb && !follower.cb.call(follower.el, finalParam, this)) ||
                        follower.el.attr(finalParam);
                }

                return this;
            }
        };

        elproto.pinchstart = function (handler, context) {
            var elem = this,
                dummyEve = {},
                fn = function (e) {
                    // Pinchstart is triggered only if 2 fingers are used.
                    if (e.touches && e.touches.length === 2) {
                        var touch1 = e.touches[0],
                            touch2 = e.touches[1];
                        // Flag to block drag events
                        elem._blockDrag = true;
                        e && e.preventDefault();
                        R.makeSelectiveCopy(dummyEve, e);
                        dummyEve.data = {
                            finger0: touch1,
                            finger1: touch2,
                            distanceX: getTouchDistance(touch1, touch2),
                            distanceY: getTouchDistance(touch1, touch2, true)
                        };
                        handler.call(context || elem, dummyEve);
                    } else {
                        elem._blockDrag = false;
                    }
                };
            // Storing the handlers
            storeHandlers(elem, handler, fn);

            elem.node.addEventListener('touchstart', fn);
        };

        elproto.unpinchstart = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);
            elem.__blockDrag = false;
            elem._pinchDragStarted = false;
            derivedHandler && elem.node.removeEventListener('touchstart', derivedHandler);
        };

        elproto.pinchmove = function (handler, context) {
            var elem = this,
                dummyEve = {},
                fn = function (e) {
                    // Pinchin is triggered only if 2 fingers are used.
                    if (e.touches && e.touches.length === 2) {
                        var touch1 = e.touches[0],
                            touch2 = e.touches[1];
                        e && e.preventDefault();
                        elem._pinchDragStarted = true;
                        R.makeSelectiveCopy(dummyEve, e);
                        dummyEve.data = {
                            finger0: touch1,
                            finger1: touch2,
                            distanceX: getTouchDistance(touch1, touch2),
                            distanceY: getTouchDistance(touch1, touch2, true)
                        };
                        handler.call(context || elem, dummyEve);
                    }
                };

            // Storing the handlers
            storeHandlers(elem, handler, fn);

            elem.node.addEventListener('touchmove', fn);
        };

        elproto.unpinchmove = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);

            derivedHandler && elem.node.removeEventListener('touchmove', derivedHandler);
        };

        elproto.pinchend = function (handler, context) {
            var elem = this,
                fn = function (e) {
                    if (elem._pinchDragStarted) {
                        elem._pinchDragStarted = false;
                        handler.call(context || elem, e);
                    }
                };

            // Storing the handlers
            storeHandlers(elem, handler, fn);

            elem.node.addEventListener('touchend', fn);
        };

        elproto.unpinchend = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);
            elem._pinchDragStarted = false;
            derivedHandler && elem.node.removeEventListener('touchend', derivedHandler);
        };

        elproto.pinch = function (pinchstarthandler, pinchinhandler, pinchendhandler) {
            elproto.pinchstart.call(this, pinchstarthandler);
            elproto.pinchin.call(this, pinchinhandler);
            elproto.pinchend.call(this, pinchendhandler);
        };

        elproto.unpinch = function (pinchstarthandler, pinchinhandler, pinchendhandler) {
            elproto.unpinchstart.call(this, pinchstarthandler);
            elproto.unpinchin.call(this, pinchinhandler);
            elproto.unpinchend.call(this, pinchendhandler);
        };
        elproto.fcwheel = function (handler, context) {
            var elem = this,
                dummyEve = {},
                fn = function (e) {
                    e && e.preventDefault();
                    R.makeSelectiveCopy(dummyEve, e);
                    handler.call(context || elem, dummyEve);
                };
            // Storing the handlers
            storeHandlers(elem, handler, fn);
            elem.node.addEventListener('wheel', fn);
        };
        elproto.fcunwheel = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);
            derivedHandler && elem.node.removeEventListener('wheel', derivedHandler);
        };

        /* \
        * Element.on
        [ method ]
        **
        * Bind handler function for a particular event to Element
        * @param eventType - Type of event
        * @param handler - Function to be called on the firing of the event
        \ */
        elproto.on = function (eventType, handler, context) {
            if (!handler || !eventType) {
                return;
            }
            var elem = this,
                node,
                actualEventType,
                // an event is termed as safe if it is preceeded by fc
                isSafe = eventType.match(/fc-/),
                fn = handler;
            if (this.removed) {
                return this;
            }

            elem._actualListners || (elem._actualListners = []);
            elem._derivedListeners || (elem._derivedListeners = []);

            switch (eventType) {
                case 'fc-dragstart':
                    elem.drag(null, handler);
                    return elem;
                case 'fc-dragmove':
                    elem.drag(handler);
                    return elem;
                case 'fc-dragend':
                    elem.drag(null, null, handler);
                    return elem;
                case 'fc-dbclick':
                    elem.dbclick(handler, context);
                    return elem;
                case 'fc-pinchstart':
                    elem.pinchstart(handler, context);
                    return elem;
                case 'fc-pinchmove':
                    elem.pinchmove(handler, context);
                    return elem;
                case 'fc-pinchend':
                    elem.pinchend(handler, context);
                    return elem;
                case 'fc-click':
                    elem.fcclick(handler, context);
                    return elem;
                case 'fc-wheel':
                    elem.fcwheel(handler, context);
                    return elem;
            }

            // Setting the original event on which operations has to be done
            isSafe && (eventType = eventType.replace(/fc-/, ''));

            /**
             * Here we are implementing safe mouse events. All browsers for which pointer events are supported, we are using
             * pointer events for touch. For rest (non-hybrid ios device) we are using touch events.
             */
            if (isSafe) {
                if (supportsTouch) {
                    actualEventType = eventType;
                    eventType = (supportsPointer ? R.safePointerEventMapping[eventType] : safeMouseEventMapping[eventType])
                        || eventType;

                    // Mouse out event's handler is fired when the next element on the page is hovered.
                    if (actualEventType === 'mouseout') {
                        fn = function (e) {
                            // No action done if multi touch triggered in touch device supporting pointer
                            if (!(supportsPointer && supportsTouch && !e.isPrimary)) {
                                lastHoveredInfo.elementInfo.push({
                                    el: context || elem,
                                    callback: handler
                                });
                                lastHoveredInfo.srcElement = e.srcElement || e.target;
                            }
                        }
                        eventType = supportsPointer ? 'pointerover' : 'touchstart';
                    }
                }
            }

            // IE-11 cannot emit load and error event,
            // that's why we are attaching the load and error events on the Reference Image
            if (this._ && this._.RefImg && (eventType === 'load' || eventType === 'error')) {
                node = this._.RefImg;
                fn = function (e) {
                    // No action done if multi touch triggered in touch device supporting pointer
                    // !(supportsPointer && supportsTouch && !e.isPrimary) && !elem.removed && handler.call(elem, e);
                    !elem.removed && handler.call(elem, e);
                };
            } else {
                node = this.node;
            }
            if (fn === handler) {
                fn = function (e) {
                    // No action done if multi touch triggered in touch device supporting pointer
                    !(supportsPointer && supportsTouch && !e.isPrimary) && handler.call(context || elem, e);
                }
            }
            elem._actualListners.push(handler);
            elem._derivedListeners.push(fn);

            if (node.addEventListener) {
                node.addEventListener(eventType, fn);
            } else {
                node['on' + eventType] = fn;
            }
            return this;
        };

        /* \
        * Element.off
        [ method ]
        **
        * Remove handler function bind to an event of element
        * @param eventType - Type of event
        * @param handler - Function to be removed from event
        \ */
        elproto.off = function (eventType, handler) {
            var elem = this,
                fn = handler,
                actualEventType,
                index,
                // an event is termed as safe if it is preceeded by fc
                isSafe = eventType.match(/fc-/),
                node;
            if (this.removed || !elem._actualListners || !eventType || !handler) {
                return this;
            }

            // Unbinding the drag events
            switch (eventType) {
                case 'fc-dragstart':
                    elem.undragstart(handler);
                    return elem;
                case 'fc-dragmove':
                    elem.undragmove(handler);
                    return elem;
                case 'fc-dragend':
                    elem.undragend(handler);
                    return elem;
                case 'fc-dbclick':
                    elem.undbclick(handler);
                    return elem;
                case 'fc-pinchstart':
                    elem.unpinchstart(handler);
                    return elem;
                case 'fc-pinchmove':
                    elem.unpinchmove(handler);
                    return elem;
                case 'fc-pinchend':
                    elem.unpinchend(handler);
                    return elem;
                case 'fc-click':
                    elem.fcunclick(handler);
                    return elem;
                case 'fc-wheel':
                    elem.fcunwheel(handler);
                    return elem;
            }

            // Setting the original event on which operations has to be done
            isSafe && (eventType = eventType.replace(/fc-/, ''));

            fn = handler;

            if (isSafe) {
                if (supportsTouch) {
                    actualEventType = eventType;
                    eventType = (supportsPointer ? R.safePointerEventMapping[eventType] : safeMouseEventMapping[eventType])
                        || eventType;
                    if (actualEventType === 'mouseout') {
                        eventType = supportsPointer ? 'pointerover' : 'touchstart';
                    }
                }
            }

            if (this._ && this._.RefImg) {
                node = this._.RefImg;
            } else {
                node = this.node;
            }
            index = elem._actualListners.indexOf(fn);

            if (index !== -1) {
                fn = elem._derivedListeners[index];
                elem._actualListners.splice(index, 1);
                elem._derivedListeners.splice(index, 1);
            }

            if (node.removeEventListener) {
                node.removeEventListener(eventType, fn);
            } else {
                node['on' + eventType] = null;
            }
            return this;
        };

        R._engine.path = function (svg, attrs, group) {
            var el = $('path'),
                res = new Element(el, svg, group);

            res.type = 'path';
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };

        R._engine.group = function (svg, id, group, overrideId) {
            var el = $('g'),
                res = new Element(el, svg, group);

            res.type = 'group';
            res.canvas = res.node;
            res.top = res.bottom = null;
            res._id = id || E;

            if (id) {
                if (overrideId) {
                    el.setAttribute('class', 'raphael-group-' + id);
                } else {
                    el.setAttribute('class', 'raphael-group-' + res.id + '-' + id);
                }
            }

            return res;
        };

        R._engine.circle = function (svg, attrs, group) {
            var el = $('circle'),
                res = new Element(el, svg, group);

            res.type = 'circle';
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.rect = function (svg, attrs, group) {
            var el = $('rect'),
                res = new Element(el, svg, group);

            res.type = 'rect';
            attrs.rx = attrs.ry = attrs.r;
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.ellipse = function (svg, attrs, group) {
            var el = $('ellipse'),
                res = new Element(el, svg, group);

            res.type = 'ellipse';
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.image = function (svg, attrs, group) {
            var el = $(imageStr),
                res = new Element(el, svg, group, true);

            res._.group = group || svg;
            res.type = imageStr;
            el.setAttribute('preserveAspectRatio', noneStr);
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.text = function (svg, attrs, group, css) {
            var el = $(textStr),
                res = new Element(el, svg, group);
            res.type = textStr;
            // Ideally this code should not be here as .css() is not a function of rapheal.
            css && res.css && res.css(css, undefined, true);
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };

        R._engine.setSize = function (width, height) {
            this.width = width || this.width;
            this.height = height || this.height;
            this.canvas.setAttribute('width', this.width);
            this.canvas.setAttribute('height', this.height);
            if (this._viewBox) {
                this.setViewBox.apply(this, this._viewBox);
            }
            return this;
        };
        R._engine.create = function () {
            var con = R._getContainer.apply(0, arguments),
                container = con && con.container,
                x = con.x,
                y = con.y,
                width = con.width,
                height = con.height,
                paper;
            if (!container) {
                throw new Error('SVG container not found.');
            }
            var cnvs = $('svg'),
                css = 'overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);' +
                '-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;' +
                '-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;' +
                'vertical-align:middle;',
                isFloating;
            // '-ms-touch-action : none' permits no default touch behaviors in IE (10 and 11) browser
            // '-touch-action : none' permits no default touch behaviors in mozilla of windows
            if (supportsTouch) {
                if (R.isIE10) {
                    css += '-ms-touch-action:none;';
                } else {
                    css += 'touch-action:none;';
                }
            }
            x = x || 0;
            y = y || 0;
            width = width || 512;
            height = height || 342;
            $(cnvs, {
                height: height,
                version: 1.1,
                width: width,
                xmlns: svgNSStr
            });

            if (container === 1) {
                cnvs.style.cssText = css + 'position:absolute;left:' + x + 'px;top:' + y + pxStr;

                // Store body as the container
                container = R._g.doc.body;
                container.appendChild(cnvs);
                isFloating = 1;
            } else {
                cnvs.style.cssText = css + 'position:relative';
                if (container.firstChild) {
                    container.insertBefore(cnvs, container.firstChild);
                } else {
                    container.appendChild(cnvs);
                }
            }
            paper = new R._Paper();
            paper.width = width;
            paper.height = height;
            paper.canvas = cnvs;
            // Store the container for further detachment and attachment
            paper.container = container;

            $(cnvs, {
                id: 'raphael-paper-' + paper.id
            });
            paper.clear();
            paper._left = paper._top = 0;
            isFloating && (paper.renderfix = function () {
                // No render fix required when isFloating is true
            });
            paper.renderfix();
            return paper;
        };
        R._engine.setViewBox = function (x, y, w, h, fit) {
            eve('raphael.setViewBox', this, this._viewBox, [x, y, w, h, fit]);
            var size = mmax(w / this.width, h / this.height),
                top = this.top,
                aspectRatio = fit ? 'meet' : 'xMinYMin',
                vb,
                sw;
            if (x == null) {
                if (this._vbSize) {
                    size = 1;
                }
                delete this._vbSize;
                vb = '0 0 ' + this.width + S + this.height;
            } else {
                this._vbSize = size;
                vb = x + S + y + S + w + S + h;
            }
            $(this.canvas, {
                viewBox: vb,
                preserveAspectRatio: aspectRatio
            });
            if (size) {
                while (top) {
                    sw = 'stroke-width' in top.attrs ? top.attrs['stroke-width'] : 1;
                    top.attr({
                        'stroke-width': sw
                    });
                    top._.dirty = 1;
                    top._.dirtyT = 1;
                    top = top.prev;
                }
            }
            this._viewBox = [x, y, w, h, !!fit];
            return this;
        };

        /**
         * Function to remove the paper form the DOM tree
         */
        R.prototype.detachPaper = function () {
            if (this._detached !== false) {
                this.container.removeChild(this.canvas);
                this._detached = true;
            }
        };
        /**
         * Function to append the paper in the DOM tree
         * @note: This might change the order of the child elements.
         */
        R.prototype.attachPaper = function () {
            if (this._detached) {
                this.container.appendChild(this.canvas);
                this._detached = false;
            }
        };

        R.prototype.renderfix = function () {
            var cnvs = this.canvas,
                s = cnvs.style,
                pos;
            try {
                pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
            } catch (e) {
                pos = cnvs.createSVGMatrix();
            }
            var left = -pos.e % 1,
                top = -pos.f % 1;
            if (left || top) {
                if (left) {
                    this._left = (this._left + left) % 1;
                    s.left = this._left + pxStr;
                }
                if (top) {
                    this._top = (this._top + top) % 1;
                    s.top = this._top + pxStr;
                }
            }
        };

        R.prototype._desc = function (txt) {
            var desc = this.desc;

            if (!desc) {
                this.desc = desc = $('desc');
                this.canvas.appendChild(desc);
            } else {
                while (desc.firstChild) {
                    desc.removeChild(desc.firstChild);
                }
            }
            desc.appendChild(R._g.doc.createTextNode(R.is(txt, typeStringSTR) ? txt : ('Created with Red Rapha\xebl ' +
                R.version)));
        };

        R.prototype.clear = function () {
            var c;
            eve('raphael.clear', this);

            while ((c = this.bottom)) {
                c.remove();
            }

            c = this.canvas;
            while (c.firstChild) {
                c.removeChild(c.firstChild);
            }
            this.bottom = this.top = null;
            c.appendChild(this.desc = $('desc'));
            c.appendChild(this.defs = $('defs'));
        };

        R.prototype.remove = function () {
            var i;
            eve('raphael.remove', this);

            while ((i = this.bottom)) {
                i.remove();
            }

            this.defs && this.defs.parentNode.removeChild(this.defs);
            this.desc && this.desc.parentNode.removeChild(this.desc);
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (i in this) {
                this[i] = typeof this[i] === fnStr ? R._removedFactory(i) : null;
            }
            this.removed = true;
        };
        R.prototype.setHTMLClassName = function () {
            // blank functiom
        };
        // var setproto = R.st;
        // for (var method in elproto)
        //     if (elproto[has](method) && !setproto[has](method)) {
        //         setproto[method] = (function(methodname) {
        //             return function() {
        //                 var arg = arguments;
        //                 return this.forEach(function(el) {
        //                     el[methodname].apply(el, arg);
        //                 });
        //             };
        //         })(method);
        //     }
    }
}
