/**!
 * RedRaphael 1.0.0 - JavaScript Vector Library
 * Copyright (c) 2012-2013 FusionCharts, Inc. <http://www.fusioncharts.com>
 *
 * Raphael 2.1.0
 * Copyright (c) 2008-2012 Dmitry Baranovskiy <http://raphaeljs.com>
 * Copyright © 2008-2012 Sencha Labs <http://sencha.com>
 *
 * Licensed under the MIT license.
 */

import eve from './eve/eve';
import extend, {merge, getArrayCopy, cacher} from './raphael.lib';

var _win = (typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : null);

    /*\
     * Raphael
     [ method ]
     **
     * Creates a canvas object on which to draw.
     * You must do this first, as all future calls to drawing methods
     * from this instance will be bound to this canvas.
     > Parameters
     **
     - container (HTMLElement|string) DOM element or its ID which is going to be a parent for drawing surface
     - width (number)
     - height (number)
     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
     * or
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
     * or
     - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.
     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
     * or
     - onReadyCallback (function) function that is going to be called on DOM ready event. You can also subscribe to this event via Eve’s “DOMLoad” event. In this case method returns `undefined`.
     = (object) @Paper
     > Usage
     | // Each of the following examples create a canvas
     | // that is 320px wide by 200px high.
     | // Canvas is created at the viewport’s 10,50 coordinate.
     | var paper = Raphael(10, 50, 320, 200);
     | // Canvas is created at the top left corner of the #notepad element
     | // (or its top right corner in dir="rtl" elements)
     | var paper = Raphael(document.getElementById("notepad"), 320, 200);
     | // Same as above
     | var paper = Raphael("notepad", 320, 200);
     | // Image dump
     | var set = Raphael(["notepad", 320, 200, {
     |     type: "rect",
     |     x: 10,
     |     y: 10,
     |     width: 25,
     |     height: 25,
     |     stroke: "#f00"
     | }, {
     |     type: "text",
     |     x: 30,
     |     y: 40,
     |     text: "Dump"
     | }]);
    \*/
    function R(first) {
        var args,
            arg,
            f;

        // Code commented as resources will now be referenced using relative URLs.
        // @todo Remove once we have ascertained that there are no issues in any environment.
        // if (R._url) { // Reinitialize URLs to be safe from pop state event
        //     R._url = (R._g && R._g.win || _window).location.href.replace(/#.*?$/, E);
        // }
        // If the URL is undefined only then initialize the URL with blank in order to support
        // both relative as well as absolute URLs
        // @todo Need to track the URL change and modify the URL for the gradient and other elements dynamically.
        if (R._url === undefined) {
            R._url = E;
        }

        if (R.is(first, FUNCTION)) {
            return loaded ? first() : eve.on("raphael.DOMload", first);
        }
        else if (R.is(first, ARRAY)) {
            return R._engine.create[APPLY](R, first.splice(0, 3 + R.is(first[0], NU))).add(first);
        }
        else {
            arg = getArrayCopy(arguments);
            args = Array.prototype.slice.call(arg, 0);
            if (R.is(args[args.length - 1], FUNCTION)) {
                f = args.pop();
                return loaded ? f.call(R._engine.create[APPLY](R, args)) : eve.on("raphael.DOMload", function() {
                    f.call(R._engine.create[APPLY](R, args));
                });
            } else {
                return R._engine.create[APPLY](R, arguments);
            }
        }
    }

    R.upgrade = "1.0.0";
    R.version = "2.1.0";
    R.eve = eve;
    // RedRaphael = R;

var loaded,
    UNDEF,
    undef,
    E = '',
    S = ' ',
    HAS = 'hasOwnProperty',
    APPLY = 'apply',
    CONCAT = 'concat',
    NU = 'number',
    STRING = 'string',
    ARRAY = 'array',
    OBJECT = 'object',
    FINITE = 'finite',
    SPLIT = 'split',
    NONE = 'none',
    BLACK = '#000',
    NULL = 'null',
    FUNCTION = 'function',
    AUTO = 'auto',
    NORMAL = 'normal',
    COMMA = ',',
    TOKEN1 = '$1',
    rCheckRegex = /R/i,
    isIE = /trident/i.test(_win.navigator.userAgent),
    paramCounts = {
        a: 7,
        c: 6,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        z: 0
    },
    arraySplice = Array.prototype.splice,
    hasPrototypeBug = (function () {
        var a = function () { /* no body */ };
        return a.hasOwnProperty('prototype');
    }()),
    g = {
        doc: _win.document,
        win: _win
    },
    doc = g.doc,
    win = g.win,
    safePointerEventMapping = R.safePointerEventMapping = {
        mouseover: "pointerover",
        mousedown: "pointerdown",
        mousemove: "pointermove",
        mouseup: "pointerup",
        mouseout: "pointerout"
    },
    navigator = win.navigator,
    supportsTouch = R.supportsTouch = 'ontouchstart' in doc ||
        navigator.maxTouchPoints || navigator.msMaxTouchPoints,
    supportsPointer = R.supportsPointer = "onpointerover" in doc,
    isEdge = R.isEdge = /Edge/.test(navigator.userAgent),
    isIE11 = R.isIE11 = /trident/i.test(navigator.userAgent) &&
        /rv:11/i.test(navigator.userAgent) && !win.opera,
    isIE10 = R.isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1,
    isFirefox = R.isFirefox = /Firefox/.test(navigator.userAgent),
    isWindows = R.isWindows = /Windows/.test(navigator.userAgent),
    mStr = 'm',
    lStr = 'l',
    strM = 'M',
    strL = 'L',
    __data,
    __params = [],
    charRegex = /[a-z]/i,
    pathStringBreakFn = function pathStringBreakFn(a, b, c) {
        var name = b.toLowerCase(),
        subArr = [],
        i = 0;
        __params.length = 0;
        c.replace(pathValues, function (a, b) {
            b && __params.push(+b);
        });
        if (name === 'r') {
            __data.push([b][CONCAT](__params));
        } else if(name === 'z'){
            __data.push([b]);
        } else if (__params.length >= paramCounts[name]) {
                while (i < __params.length) {
                    if (i % paramCounts[name]) {
                        // push the rest of the co-ordinates into the path sub array.
                        subArr.push(__params[i]);
                    } else {
                        // if any path is previously parsed then push it
                        subArr.length && __data.push(subArr) && (subArr = []);
                        // new path array for the last known path command
                        subArr.push(b,__params[i]);
                    }
                    i++;
                }
                // push the last parsed path sub array
                __data.push(subArr);
        }
    },

        CustomAttributes = function () {
            /*\
             * Raphael.ca
             [ property (object) ]
             **
             * Shortcut for @Raphael.customAttributes
            \*/
            /*\
             * Raphael.customAttributes
             [ property (object) ]
             **
             * If you have a set of attributes that you would like to represent
             * as a function of some number across all papers you can do it
             * easily with custom attributes:
             > Usage
             | Raphael.customAttributes.hue = function (num) {
             |     num = num % 1;
             |     return {fill: "hsb(" + num + ", 0.75, 1)"};
             | };
             | // Custom attribute “hue” will change fill
             | // to be given hue with fixed saturation and brightness.
             | // Now you can use it like this:
             | var c = paper.circle(10, 10, 10).attr({hue: .45});
             | // or even like this:
             | c.animate({hue: 1}, 1e3);
             |
             | // You could also create custom attribute
             | // with multiple parameters:
             | Raphael.customAttributes.hsb = function (h, s, b) {
             |     return {fill: "hsb(" + [h, s, b].join(COMMA) + ")"};
             | };
             | c.attr({hsb: "0.5 .8 1"});
             | c.animate({hsb: [1, 0, 0.5]}, 1e3);
            \*/
        },
        caproto = R.ca = R.customAttributes = CustomAttributes.prototype,

        Paper = function () {
            /*\
             * Paper.ca
             [ property (object) ]
             **
             * Shortcut for @Paper.customAttributes
            \*/
            /*\
             * Paper.customAttributes
             [ property (object) ]
             **
             * If you have a set of attributes that you would like to represent
             * as a function of some number you can do it easily with custom attributes:
             > Usage
             | paper.customAttributes.hue = function (num) {
             |     num = num % 1;
             |     return {fill: "hsb(" + num + ", 0.75, 1)"};
             | };
             | // Custom attribute “hue” will change fill
             | // to be given hue with fixed saturation and brightness.
             | // Now you can use it like this:
             | var c = paper.circle(10, 10, 10).attr({hue: .45});
             | // or even like this:
             | c.animate({hue: 1}, 1e3);
             |
             | // You could also create custom attribute
             | // with multiple parameters:
             | paper.customAttributes.hsb = function (h, s, b) {
             |     return {fill: "hsb(" + [h, s, b].join(COMMA) + ")"};
             | };
             | c.attr({hsb: "0.5 .8 1"});
             | c.animate({hsb: [1, 0, 0.5]}, 1e3);
            \*/
            this.ca = this.customAttributes = new CustomAttributes();
            this._CustomAttributes = function () {};
            this._CustomAttributes.prototype = this.ca;
            this._elementsById = {};
            this.id = R._oid++;
            eve('raphael.new', this);
        },

        /*\
         * Raphael.fn
         [ property (object) ]
         **
         * You can add your own method to the canvas. For example if you want to draw a pie chart,
         * you can create your own pie chart function and ship it as a Raphaël plugin. To do this
         * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a
         * Raphaël instance is created, otherwise it will take no effect. Please note that the
         * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to
         * ensure any namespacing ensures proper context.
         > Usage
         | Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
         |     return this.path( ... );
         | };
         | // or create namespace
         | Raphael.fn.mystuff = {
         |     arrow: function () {…},
         |     star: function () {…},
         |     // etc…
         | };
         | var paper = Raphael(10, 10, 630, 480);
         | // then use it
         | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
         | paper.mystuff.arrow();
         | paper.mystuff.star();
        \*/
        paperproto = R.fn = Paper.prototype = R.prototype,

        // Add new dragstart, dragmove and dragend events in order to support touch drag in both touch and hybrid devices
        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel dragstart dragmove dragend"[SPLIT](S),
        touchMap = {
            dragstart: "touchstart",
            dragmove: "touchmove",
            dragend: "touchend"
        },

        Str = String,
        toFloat = win.parseFloat,
        toInt = win.parseInt,
        math = Math,
        mmax = math.max,
        mmin = math.min,
        abs = math.abs,
        pow = math.pow,
        mathCos = math.cos,
        mathSin = math.sin,
        mathSqrt = math.sqrt,
        round = math.round,
        PI = math.PI,
        deg2rad = PI / 180,
        rad2deg = 180 / PI,

        lowerCase = Str.prototype.toLowerCase,
        upperCase = Str.prototype.toUpperCase,
        objectToString = Object.prototype.toString,

        separator = /[, ]+/,
        formatrg = /\{(\d+)\}/g,
        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        p2s = /,?([achlmqrstvxz]),?/gi,
        pathCommaRegex = /,?[a-z],?/i,
        pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,

        isnan = {
            "NaN": 1,
            "Infinity": 1,
            "-Infinity": 1
        },
        hsrg = {
            hs: 1,
            rg: 1
        },
        availableAttrs = R._availableAttrs = {
            "arrow-end": NONE,
            "arrow-start": NONE,
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            "clip-path": E,
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": NORMAL,
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "about:blank",
            "letter-spacing": 0,
            "line-height": 12,
            "vertical-align": "middle",
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: E,
            stroke: "#000",
            "stroke-dasharray": E,
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            "visibility": E,
            title: E,
            transform: E,
            rotation: 0,
            width: 0,
            x: 0,
            y: 0,
            "shape-rendering": AUTO,
            alpha: NU,
            //Adding all the possible attributes for svg
            "font-stretch": NORMAL,
            "alignment-baseline": AUTO,
            "baseline-shift": AUTO,
            "clip-rule": "nonzero",
            // @todo - need to validate whether direction is required here or not.
            // "direction": "ltr",
            "dominant-baseline": AUTO,
            "fill-rule": "nonzero",
            "filter": NONE,
            "flood-color": BLACK,
            "flood-opacity": 1,
            "font-size-adjust": NONE,
            "font-stretch": NORMAL,
            "font-variant": NORMAL,
            "kerning": AUTO,
            "lighting-color": "white",
            "marker-end": NONE,
            "marker-mid": NONE,
            "marker-start": NONE,
            "mask": NONE,
            "pointer-events": "visiblePainted",
            "stop-color": BLACK,
            "stop-opacity": 1,
            "stroke-dashoffset": 0,
            "text-decoration": NONE,
            "vector-effect": E,
            "visibility": "visible",
            "word-spacing": NORMAL,
            "writing-mode": "lr-tb"
        },
        availableAnimAttrs = R._availableAnimAttrs = {
            blur: NU,
            "clip-rect": "csv",
            "clip-path": "path",
            cx: NU,
            cy: NU,
            fill: "colour",
            "fill-opacity": NU,
            "font-size": NU,
            height: NU,
            opacity: NU,
            path: "path",
            r: NU,
            rx: NU,
            ry: NU,
            stroke: "colour",
            "stroke-opacity": NU,
            "stroke-width": NU,
            transform: "transform",
            width: NU,
            x: NU,
            y: NU,
            // Required for pie 3d
            "color": "colour",
            "borderColor": "colour",
            "borderWidth": NU,
            alpha: NU,
            "text-bound": "text-bound"
        },
        eldata = {},

        sortByNumber = function(a, b) {
            return toFloat(a) - toFloat(b);
        },
        fun = function() {
        },
        pipe = function(x) {
            return x;
        },

        rectPath = R._rectPath = function(x, y, w, h, r) {
            if (r) {
                return [[strM, x + r, y], [lStr, w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], [lStr, 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], [lStr, r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], [lStr, 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
            }
            return [[strM, x, y], [lStr, w, 0], [lStr, 0, h], [lStr, -w, 0], ["z"]];
        },

        ellipsePath = function(x, y, rx, ry) {
            if (ry == null) {
                ry = rx;
            }
            return [[strM, x, y], [mStr, 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
        },

        getPath = R._getPath = {
            group: function() {
                return false;
            },
            path: function(el) {
                return el.attr("path");
            },
            circle: function(el) {
                var a = el.attrs;
                return ellipsePath(a.cx, a.cy, a.r);
            },
            ellipse: function(el) {
                var a = el.attrs;
                return ellipsePath(a.cx, a.cy, a.rx, a.ry);
            },
            rect: function(el) {
                var a = el.attrs;
                return rectPath(a.x, a.y, a.width, a.height, a.r);
            },
            image: function(el) {
                var a = el.attrs;
                return rectPath(a.x, a.y, a.width, a.height);
            },
            text: function(el) {
                var bbox = el._getBBox();
                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
            }
        },

        /*\
         * Raphael.mapPath
         [ method ]
         **
         * Transform the path string with given matrix.
         > Parameters
         - path (string) path string
         - matrix (object) see @Matrix
         = (string) transformed path string
        \*/
        mapPath = R.mapPath = function(path, matrix) {
            if (!matrix) {
                return path;
            }
            var x,
                y,
                i,
                j,
                ii,
                jj,
                pathi;

            path = path2curve(path).slice(0);
            for (i = 0, ii = path.length; i < ii; i++) {
                pathi = path[i] = path[i].slice(0);
                for (j = 1, jj = pathi.length; j < jj; j += 2) {
                    x = matrix.x(pathi[j], pathi[j + 1]);
                    y = matrix.y(pathi[j], pathi[j + 1]);
                    pathi[j] = x;
                    pathi[j + 1] = y;
                }
            }
            return path;
        },

        lastArgIfGroup = R._lastArgIfGroup = function (args, clear) {
            var last = args.length - 1,
                arg = args[last];

            if (arg && (arg.constructor === R.el.constructor) && arg.type === 'group') {
                if (clear) {
                    args[last] = undefined;
                    delete args[last];
                    arraySplice.call(args, last, 1);
                }
                return arg;
            }
        },

        serializeArgs = R._serializeArgs = function (args) {
            var arg0 = args[0],
                pathString,
                attrs,
                i,
                ii;

            if (R.is(arg0, OBJECT) && !R.is(arg0, ARRAY) && arg0.type !== 'group') {

                attrs = arg0;

                if (arg0.path) {
                    pathString = arg0.path;
                    pathString && !R.is(pathString, STRING) &&
                        !R.is(pathString[0], ARRAY) && (pathString += E);
                }

                for (i = 1, ii = arguments.length; i < ii; i += 2) {
                    if (!attrs[arguments[i]]) {
                        attrs[arguments[i]] = arguments[i + 1];
                    }
                }
            }
            else {
                attrs = {};
                for (i = 1, ii = arguments.length; i < ii; i += 2) {
                    attrs[arguments[i]] = args[(i-1) / 2] || arguments[i+1];
                }
            }
            return attrs;
        },

        /*\
         * Raphael.is
         [ method ]
         **
         * Handfull replacement for `typeof` operator.
         > Parameters
         - o (…) any object or primitive
         - type (string) name of the type, i.e. “string”, “function”, “number”, etc.
         = (boolean) is given value is of given type
        \*/
        is = R.is = function(o, type) {
            if (type === FINITE) {
                return !isnan[HAS](+o);
            }
            if (type === ARRAY) {
                return o instanceof Array;
            }
            if (type === OBJECT && (o === undef || o === null)) {
                return false;
            }
            return  (type === NULL && o === null) ||
                (type === typeof o && o !== null) ||
                (type === OBJECT && o === Object(o)) ||
                (type === ARRAY && Array.isArray && Array.isArray(o)) ||
                objectToString.call(o).slice(8, -1).toLowerCase() === type;
        },

        /*\
          * Raphael.clone
          [ method ]
          **
          * Returns a recursively cloned version of an object.
         \*/
        clone = R.clone = hasPrototypeBug ? function (obj) {
                if (Object(obj) !== obj) {
                    return obj;
                }
                // when obj is a function then new obj.constructor is equal to calling new Function()
                // which uses dynamic evaluation, that violates CSP for 'unsafe-eval'
                if (obj instanceof Function) {
                    return obj;
                }
                var res = new obj.constructor;
                for (var key in obj)
                    if (key !== "prototype" && obj[HAS](key)) {
                        res[key] = clone(obj[key]);
                    }
                return res;
            } : function (obj) {
                if (Object(obj) !== obj) {
                    return obj;
                }
                // when obj is a function then new obj.constructor is equal to calling new Function()
                // which uses dynamic evaluation, that violates CSP for 'unsafe-eval'
                if (obj instanceof Function) {
                    return obj;
                }
                var res = new obj.constructor;
                for (var key in obj)
                    if (obj[HAS](key)) {
                        res[key] = clone(obj[key]);
                    }
                return res;
            },
        /**
         * Function to manage the click
         */
        Node = _win.Node;
        //Adding pollyfill for IE11
        if (Node && !Node.prototype.contains) {
            Node.prototype.contains = function(el){
                while (el = el.parentNode) {
                    if (el === this) return true;
                }
                return false;
            }
        }

    R._g = g;
    R.merge = merge;
    R.extend = extend;
    /*
      * Raphael.createUUID
      [ method ]
      **
      * Returns RFC4122, version 4 ID
     */
    R.createUUID = (function(uuidRegEx, uuidReplacer) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
        };
    })(/[xy]/g, function(c) {
        var r = math.random() * 16 | 0,
            v = c === "x" ? r : (r & 3 | 8);
        return v.toString(16);
    });

    R._radial_gradient = /^x?r(?:\(([^\)]*?)\))?/;
    R._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i;

    /*
      * Raphael.getElementID
      [ method ]
      **
      * Add 'rr-' prefix before created IDs
     */
    R.getElementID = function (id) {
        return "rr-" + id;
    };

    // PriorityQueue Function Declaration
    function PriorityQueue(comparator) {
      this._comparator = comparator;
      this._elements = [];
    }

    PriorityQueue.prototype.isEmpty = function() {
      return this.size() === 0;
    };

    PriorityQueue.prototype.peek = function() {
      if (this.isEmpty()) return null;

      return this._elements[0];
    };

    PriorityQueue.prototype.deq = function() {
      var first = this.peek();
      var last = this._elements.pop();
      var size = this.size();

      if (size === 0) return first;

      this._elements[0] = last;
      var current = 0;

      while (current < size) {
        var largest = current;
        var left = (2 * current) + 1;
        var right = (2 * current) + 2;

        if (left < size && this._compare(left, largest) >= 0) {
          largest = left;
        }

        if (right < size && this._compare(right, largest) >= 0) {
          largest = right;
        }

        if (largest === current) break;

        this._swap(largest, current);
        current = largest;
      }

      return first;
    };

    PriorityQueue.prototype.enq = function(element) {
      var size = this._elements.push(element);
      var current = size - 1;

      while (current > 0) {
        var parent = Math.floor((current - 1) / 2);

        if (this._compare(current, parent) <= 0) break;

        this._swap(parent, current);
        current = parent;
      }

      return size;
    };

    PriorityQueue.prototype.size = function() {
      return this._elements.length;
    };

    PriorityQueue.prototype._compare = function(a, b) {
      return this._comparator(this._elements[a], this._elements[b]);
    };

    PriorityQueue.prototype._swap = function(a, b) {
      var aux = this._elements[a];
      this._elements[a] = this._elements[b];
      this._elements[b] = aux;
    };

    /*\
     * Raphael.type
     [ property (string) ]
     **
     * Can be “SVG”, “VML” or empty, depending on browser support.
    \*/
    R.type = (win.ENABLE_RED_CANVAS && (win.CanvasRenderingContext2D || doc.createElement('canvas').getContext)) ? "CANVAS" :
            (win.SVGAngle || doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");

    /*\
     * Raphael.svg
     [ property (boolean) ]
     **
     * `true` if browser supports SVG.
    \*/
    /*\
     * Raphael.vml
     [ property (boolean) ]
     **
     * `true` if browser supports VML.
    \*/
    R.svg = !((R.vml = R.type === "VML") || (R.canvas = R.type === "CANVAS"));

    R._Paper = Paper;
    R._id = 0;
    R._oid = 0;

    /*\
     * Raphael.rad
     [ method ]
     **
     * Transform angle to radians
     > Parameters
     - deg (number) angle in degrees
     = (number) angle in radians.
    \*/
    R.rad = function (deg) {
        return deg % 360 * deg2rad;
    };

    /*\
     * Raphael.deg
     [ method ]
     **
     * Transform angle to degrees
     > Parameters
     - deg (number) angle in radians
     = (number) angle in degrees.
    \*/
    R.deg = function (rad) {
        return rad * rad2deg % 360;
    };

    var toHex = function (color) {
            if (R.vml) {
                // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
                var trim = /^\s+|\s+$/g;
                var bod;
                try {
                    var docum = new ActiveXObject("htmlfile");
                    docum.write("<body>");
                    docum.close();
                    bod = docum.body;
                } catch (e) {
                    bod = createPopup().document.body;
                }
                var range = bod.createTextRange();
                toHex = cacher(function(color) {
                    try {
                        bod.style.color = Str(color).replace(trim, E);
                        var value = range.queryCommandValue("ForeColor");
                        value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);
                        return "#" + ("000000" + value.toString(16)).slice(-6);
                    } catch (e) {
                        return NONE;
                    }
                });
            } else {
                var i = g.doc.createElement("i");
                i.title = "Rapha\xebl Colour Picker";
                i.style.display = NONE;
                g.doc.body.appendChild(i);
                toHex = cacher(function(color) {
                    i.style.color = color;
                    return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
                });
            }
            return toHex(color);
        },
        hsbtoString = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")";
        },
        hsltoString = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")";
        },
        rgbtoString = function() {
            return this.hex;
        },
        prepareRGB = function(r, g, b) {
            if (g == null && is(r, OBJECT) && "r" in r && "g" in r && "b" in r) {
                b = r.b;
                g = r.g;
                r = r.r;
            }
            if (g == null && is(r, STRING)) {
                var clr = R.getRGB(r);
                r = clr.r;
                g = clr.g;
                b = clr.b;
            }
            if (r > 1 || g > 1 || b > 1) {
                r /= 255;
                g /= 255;
                b /= 255;
            }

            return [r, g, b];
        },
        packageRGB = function(r, g, b, o) {
            var rgb = {
                r: (r *= 255),
                g: (g *= 255),
                b: (b *= 255),
                hex: R.rgb(r, g, b),
                toString: rgbtoString
            };
            is(o, FINITE) && (rgb.opacity = o);
            return rgb;
        };

    /*\
     * Raphael.color
     [ method ]
     **
     * Parses the color string and returns object with all values for the given color.
     > Parameters
     - clr (string) color string in one of the supported formats (see @Raphael.getRGB)
     = (object) Combined RGB & HSB object in format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••,
     o     error (boolean) `true` if string can’t be parsed,
     o     h (number) hue,
     o     s (number) saturation,
     o     v (number) value (brightness),
     o     l (number) lightness
     o }
    \*/
    R.color = function(clr) {
        var rgb;
        if (R.is(clr, OBJECT) && "h" in clr && "s" in clr && "b" in clr) {
            rgb = R.hsb2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.hex = rgb.hex;
        } else if (R.is(clr, OBJECT) && "h" in clr && "s" in clr && lStr in clr) {
            rgb = R.hsl2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.hex = rgb.hex;
        } else {
            if (R.is(clr, STRING)) {
                clr = R.getRGB(clr);
            }
            if (R.is(clr, OBJECT) && "r" in clr && "g" in clr && "b" in clr) {
                rgb = R.rgb2hsl(clr);
                clr.h = rgb.h;
                clr.s = rgb.s;
                clr.l = rgb.l;
                rgb = R.rgb2hsb(clr);
                clr.v = rgb.b;
            } else {
                clr = {
                    hex: NONE
                };
                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            }
        }
        clr.toString = rgbtoString;
        return clr;
    };

    /*\
     * Raphael.hsb2rgb
     [ method ]
     **
     * Converts HSB values to RGB object.
     > Parameters
     - h (number) hue
     - s (number) saturation
     - v (number) value or brightness
     = (object) RGB object in format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••
     o }
    \*/
    R.hsb2rgb = function(h, s, v, o) {
        if (this.is(h, OBJECT) && "h" in h && "s" in h && "b" in h) {
            v = h.b;
            s = h.s;
            h = h.h;
            o = h.o;
        }
        h *= 360;
        var R, G, B, X, C;
        h = (h % 360) / 60;
        C = v * s;
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = v - C;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };

    /*\
     * Raphael.hsl2rgb
     [ method ]
     **
     * Converts HSL values to RGB object.
     > Parameters
     - h (number) hue
     - s (number) saturation
     - l (number) luminosity
     = (object) RGB object in format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••
     o }
    \*/
    R.hsl2rgb = function(h, s, l, o) {
        if (this.is(h, OBJECT) && "h" in h && "s" in h && lStr in h) {
            l = h.l;
            s = h.s;
            h = h.h;
        }
        if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
        }
        h *= 360;
        var R, G, B, X, C;
        h = (h % 360) / 60;
        C = 2 * s * (l < .5 ? l : 1 - l);
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = l - C / 2;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };

    /*\
     * Raphael.rgb2hsb
     [ method ]
     **
     * Converts RGB values to HSB object.
     > Parameters
     - r (number) red
     - g (number) green
     - b (number) blue
     = (object) HSB object in format:
     o {
     o     h (number) hue
     o     s (number) saturation
     o     b (number) brightness
     o }
    \*/
    R.rgb2hsb = function(r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];

        var H, S, V, C;
        V = mmax(r, g, b);
        C = V - mmin(r, g, b);
        H = (C === 0 ? null :
            V === r ? (g - b) / C :
            V === g ? (b - r) / C + 2 :
            (r - g) / C + 4
            );
        H = ((H + 360) % 6) * 60 / 360;
        S = C === 0 ? 0 : C / V;
        return {
            h: H,
            s: S,
            b: V,
            toString: hsbtoString
        };
    };

    /*\
     * Raphael.rgb2hsl
     [ method ]
     **
     * Converts RGB values to HSL object.
     > Parameters
     - r (number) red
     - g (number) green
     - b (number) blue
     = (object) HSL object in format:
     o {
     o     h (number) hue
     o     s (number) saturation
     o     l (number) luminosity
     o }
    \*/
    R.rgb2hsl = function(r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];

        var H, S, L, M, m, C;
        M = mmax(r, g, b);
        m = mmin(r, g, b);
        C = M - m;
        H = (C === 0 ? null :
            M === r ? (g - b) / C :
            M === g ? (b - r) / C + 2 :
            (r - g) / C + 4);
        H = ((H + 360) % 6) * 60 / 360;
        L = (M + m) / 2;
        S = (C === 0 ? 0 :
            L < .5 ? C / (2 * L) :
            C / (2 - 2 * L));
        return {
            h: H,
            s: S,
            l: L,
            toString: hsltoString
        };
    };

    R._path2string = function() {
        return this.join(COMMA).replace(p2s, TOKEN1);
    };

    R._cacher = cacher;

    function clrToString() {
        return this.hex;
    }

    /*\
     * Raphael.getRGB
     [ method ]
     **
     * Parses colour string as RGB object
     > Parameters
     - colour (string) colour string in one of formats:
     # <ul>
     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
     #     <li>hsl(•••, •••, •••) — same as hsb</li>
     #     <li>hsl(•••%, •••%, •••%) — same as hsb</li>
     # </ul>
     = (object) RGB object in format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue
     o     hex (string) color in HTML/CSS format: #••••••,
     o     error (boolean) true if string can’t be parsed
     o }
    \*/
    R.getRGB = cacher(function(colour) {
        var opacity,
            res,
            red,
            green,
            blue,
            t,
            values,
            rgb;

        colour && is(colour, OBJECT) && "opacity" in colour &&
            (opacity = colour.opacity);
        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: NONE,
                error: 1,
                toString: clrToString
            };
        }
        if (colour === NONE) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: NONE,
                toString: clrToString
            };
        }
        !(hsrg[HAS](colour.toLowerCase().substring(0, 2)) ||
            colour.charAt() === "#") && (colour = toHex(colour));


        if ((rgb = colour.match(colourRegExp))) {
            if (rgb[2]) {
                blue = toInt(rgb[2].substring(5), 16);
                green = toInt(rgb[2].substring(3, 5), 16);
                red = toInt(rgb[2].substring(1, 3), 16);
            }
            if (rgb[3]) {
                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                green = toInt((t = rgb[3].charAt(2)) + t, 16);
                red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }
            if (rgb[4]) {
                values = rgb[4][SPLIT](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) === "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) === "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) === "%" && (blue *= 2.55);
                rgb[1].toLowerCase().slice(0, 4) === "rgba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) === "%" && (opacity /= 100);
            }
            if (rgb[5]) {
                values = rgb[5][SPLIT](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) === "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) === "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) === "%" && (blue *= 2.55);
                (values[0].slice(-3) === "deg" || values[0].slice(-1) === "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) === "hsba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) === "%" && (opacity /= 100);
                return R.hsb2rgb(red, green, blue, opacity);
            }
            if (rgb[6]) {
                values = rgb[6][SPLIT](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) === "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) === "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) === "%" && (blue *= 2.55);
                (values[0].slice(-3) === "deg" || values[0].slice(-1) === "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) === "hsla" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) === "%" && (opacity /= 100);
                return R.hsl2rgb(red, green, blue, opacity);
            }
            rgb = {
                r: red,
                g: green,
                b: blue,
                toString: clrToString
            };
            rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
            R.is(opacity, FINITE) && (rgb.opacity = opacity);
            return rgb;
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: NONE,
            error: 1,
            toString: clrToString
        };
    }, R);

    R.tintshade = cacher(function(colour, percent) {
        var rgb = R.getRGB(colour),
            tint,
            offset = 255;

        (percent < 0) && (percent *= -1, offset = 0);
        (percent > 1) && (percent = 1);

        tint = percent === 0 ? rgb : {
            r: offset - (offset - rgb.r) * percent,
            g: offset - (offset - rgb.g) * percent,
            b: offset - (offset - rgb.b) * percent,
            toString: clrToString
        };
        tint.hex = R.rgb(tint.r, tint.g, tint.b);
        rgb.error && (tint.error = rgb.error);

        if ("opacity" in rgb) {
            tint.rgba = 'rgba(' + [tint.r, tint.g, tint.b, rgb.opacity].join(',') + ')';
            tint.opacity = rgb.opacity;
        }
        else {
            tint.rgba = 'rgb(' + [tint.r, tint.g, tint.b].join(',') + ')';
        }
        return tint;
    }, R);

    /*\
     * Raphael.rgb
     [ method ]
     **
     * Converts RGB values to hex representation of the colour.
     > Parameters
     - r (number) red
     - g (number) green
     - b (number) blue
     = (string) hex representation of the colour.
    \*/
    R.rgb = cacher(function(r, g, b) {
        return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
    });

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
            {
                x: +crp[i - 2],
                y: +crp[i - 1]
            },
            {
                x: +crp[i],
                y: +crp[i + 1]
            },
            {
                x: +crp[i + 2],
                y: +crp[i + 3]
            },
            {
                x: +crp[i + 4],
                y: +crp[i + 5]
            }
            ];
            if (z) {
                if (!i) {
                    p[0] = {
                        x: +crp[iLen - 2],
                        y: +crp[iLen - 1]
                    };
                } else if (iLen - 4 === i) {
                    p[3] = {
                        x: +crp[0],
                        y: +crp[1]
                    };
                } else if (iLen - 2 === i) {
                    p[2] = {
                        x: +crp[0],
                        y: +crp[1]
                    };
                    p[3] = {
                        x: +crp[2],
                        y: +crp[3]
                    };
                }
            } else {
                if (iLen - 4 === i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {
                        x: +crp[i],
                        y: +crp[i + 1]
                    };
                }
            }
            d.push(["C",
                (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                (p[1].x + 6 * p[2].x - p[3].x) / 6,
                (p[1].y + 6 * p[2].y - p[3].y) / 6,
                p[2].x,
                p[2].y
                ]);
        }

        return d;
    }

    R.sanitizePath = function (pathArg) {
        var pathStr;
        pathStr = pathArg.join ? pathArg.join(COMMA) : pathArg;
        if (rCheckRegex.test(pathStr)) {
            pathStr = R._pathToAbsolute(pathStr);
        } else {
            pathStr = pathStr.replace(p2s, TOKEN1);
        }
        return pathStr;
    };

    /*\
     * Raphael.parsePathString
     [ method ]
     **
     * Utility method
     **
     * Parses given path string into an array of arrays of path segments.
     > Parameters
     - pathString (string|array) path string or array of segments (in the last case it will be returned straight away)
     = (array) array of segments.
    \*/
    R.parsePathString = function(pathString) {
        if (!pathString  || !pathString.length) {
            return null;
        }
        var pth = paths(pathString);
        if (pth.arr) {
            return pathClone(pth.arr);
        }
        __data = undef;
        if (R.is(pathString, ARRAY)) {
            pathString = Str(pathString)
                          .replace(/,?([A-Z]),?/g, ',$1,')
                          .replace(/(^,?)|(,?$)/g, '')
                          .replace(/,,?/g,',')
                          .split(',');
            if(R.is(pathString[0], ARRAY)) { // rough assumption
             __data = pathClone(pathString);
            } else {
                var i, subPathArr = [], l = pathString.length, pathI, noOfDataPoints;
                __data = [];
                for (i = 0; i < l; i += 1) {
                    // if any path command is encountered
                    if (charRegex.test(pathString[i])) {
                        // if any previous path command was parsed with its allowed set of points then push
                        // that parsed path sub-array to final path array.
                        subPathArr.length && __data.push(subPathArr);
                        // update the path command and path sub-array.
                        pathI = pathString[i];
                        subPathArr = [pathI];
                        // no of points that will be parsed for the path copmmand.
                        noOfDataPoints = paramCounts[pathI.toLowerCase()];
                    } else if(noOfDataPoints){ // push all the allowed data points to the subarray
                        subPathArr.push(+pathString[i]);
                        noOfDataPoints--;
                    } else if(pathString[i].length){
                        // push the last parsed path sub-array to final path array.
                        __data.push(subPathArr);
                        // create a new sub array with the last known path command
                        subPathArr = [pathI].concat(+pathString[i]);
                        noOfDataPoints = paramCounts[pathI.toLowerCase()] - 1;
                    }
                }
                __data.push(subPathArr);
            }
        }
        if (!__data || !__data.length) {
            __data = [];
            Str(pathString).replace(pathCommand, pathStringBreakFn);
        }
        __data.toString = R._path2string;
        pth.arr = __data;
        return pth.arr;
    }

    /*\
     * Raphael.parseTransformString
     [ method ]
     **
     * Utility method
     **
     * Parses given path string into an array of transformations.
     > Parameters
     - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)
     = (array) array of transformations.
    \*/
    R.parseTransformString = cacher(function(TString) {
        if (!TString) {
            return null;
        }
        var paramCounts = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
        },
        data = [];
        if (R.is(TString, ARRAY) && R.is(TString[0], ARRAY)) { // rough assumption
            data = pathClone(TString);
        }
        if (!data.length) {
            Str(TString).replace(tCommand, function(a, b, c) {
                var params = [],
                name = lowerCase.call(b);
                c.replace(pathValues, function(a, b) {
                    b && params.push(+b);
                });
                data.push([b][CONCAT](params));
            });
        }
        data.toString = R._path2string;
        return data;
    });
    // PATHS
    var _pathCache = {},
    paths = cacher(function() {
        // var p = paths.ps = paths.ps || {};
        // if (p[ps]) {
        //     p[ps].sleep = 100;
        // } else {
        //     p[ps] = {
        //         sleep: 100
        //     };
        // }
        // setTimeout(function() {
        //     for (var key in p)
        //         if (p[HAS](key) && key != ps) {
        //             p[key].sleep--;
        //             !p[key].sleep && delete p[key];
        //         }
        // });
        return {};
    }, undef, undef, undef, 500, _pathCache, true);

    /*\
     * Raphael.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Find dot coordinates on the given cubic bezier curve at the given t.
     > Parameters
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point
     o     y: (number) y coordinate of the point
     o     m: {
     o         x: (number) x coordinate of the left anchor
     o         y: (number) y coordinate of the left anchor
     o     }
     o     n: {
     o         x: (number) x coordinate of the right anchor
     o         y: (number) y coordinate of the right anchor
     o     }
     o     start: {
     o         x: (number) x coordinate of the start of the curve
     o         y: (number) y coordinate of the start of the curve
     o     }
     o     end: {
     o         x: (number) x coordinate of the end of the curve
     o         y: (number) y coordinate of the end of the curve
     o     }
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    R.findDotsAtSegment = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
        t13 = pow(t1, 3),
        t12 = pow(t1, 2),
        t2 = t * t,
        t3 = t2 * t,
        x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
        y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
        mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
        my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
        nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
        ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
        ax = t1 * p1x + t * c1x,
        ay = t1 * p1y + t * c1y,
        cx = t1 * c2x + t * p2x,
        cy = t1 * c2y + t * p2y,
        alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
        (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {
                x: mx,
                y: my
            },
            n: {
                x: nx,
                y: ny
            },
            start: {
                x: ax,
                y: ay
            },
            end: {
                x: cx,
                y: cy
            },
            alpha: alpha
        };
    };

    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
        t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }

    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
        n = 12,
        Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
        Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
        sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
            xbase = base3(ct, x1, x2, x3, x4),
            ybase = base3(ct, y1, y2, y3, y4),
            comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * mathSqrt(comb);
        }
        return z2 * sum;
    }

    function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
        step = t / 2,
        t2 = t - step,
        l,
        e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }

    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
            ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
        ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
        denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
        py = ny / denominator,
        px2 = +px.toFixed(2),
        py2 = + py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
            ) {
            return;
        }
        return {
            x: px,
            y: py
        };
    }

    R._removedFactory = function(methodname) {
        return function() {
            eve("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + methodname + "\u201d of removed object", methodname);
        };
    };

    /*\
     * Raphael.pathBBox
     [ method ]
     **
     * Utility method
     **
     * Return bounding box of a given path
     > Parameters
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box
     o     y: (number) y coordinate of the left top point of the box
     o     x2: (number) x coordinate of the right bottom point of the box
     o     y2: (number) y coordinate of the right bottom point of the box
     o     width: (number) width of the box
     o     height: (number) height of the box
     o     cx: (number) x coordinate of the center of the box
     o     cy: (number) y coordinate of the center of the box
     o }
    \*/
    var pathDimensions = R.pathBBox = function(path) {
        var pth = paths(path);
        if (!path) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
        }
        path = path2curve(path);
        var x = 0,
        y = 0,
        X = [],
        Y = [],
        p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] === strM) {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X[CONCAT](dim.min.x, dim.max.x);
                Y = Y[CONCAT](dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin[APPLY](0, X),
        ymin = mmin[APPLY](0, Y),
        xmax = mmax[APPLY](0, X),
        ymax = mmax[APPLY](0, Y),
        bb = {
            x: xmin,
            y: ymin,
            x2: xmax,
            y2: ymax,
            width: xmax - xmin,
            height: ymax - ymin
        };
        pth.bbox = clone(bb);
        return bb;
    },
    pathClone = function(pathArray) {
        var res = clone(pathArray);
        res.toString = R._path2string;
        return res;
    },
    pathToAbsolute = R._pathToAbsolute = function(pathArray) {
        var pth = paths(pathArray), res;
        if (!pth.abs) {
            if (!R.is(pathArray, ARRAY) || !R.is(pathArray && pathArray[0], ARRAY)) { // rough assumption
                pathArray = R.parsePathString(pathArray);
            }
            if (!pathArray || !pathArray.length) {
                res = [[strM, 0, 0]];
                res.toString = R._path2string;
                return res;
            }
            var x = 0,
                y = 0,
                mx = 0,
                my = 0,
                start = 0;
            res = [];
            if (pathArray[0][0] === strM) {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[0] = [strM, x, y];
            }
            var crz = pathArray.length === 3 && pathArray[0][0] === strM && pathArray[1][0].toUpperCase() === "R" && pathArray[2][0].toUpperCase() === "Z";
            for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                res.push(r = []);
                pa = pathArray[i];
                if (pa[0] != upperCase.call(pa[0])) {
                    r[0] = upperCase.call(pa[0]);
                    switch (r[0]) {
                        case "A":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +(pa[6] + x);
                            r[7] = +(pa[7] + y);
                            break;
                        case "V":
                            r[1] = +pa[1] + y;
                            break;
                        case "H":
                            r[1] = +pa[1] + x;
                            break;
                        case "R":
                            var dots = [x, y][CONCAT](pa.slice(1));
                            for (var j = 2, jj = dots.length; j < jj; j++) {
                                dots[j] = +dots[j] + x;
                                dots[++j] = +dots[j] + y;
                            }
                            res.pop();
                            res = res[CONCAT](catmullRom2bezier(dots, crz));
                            break;
                        case "M":
                            mx = +pa[1] + x;
                            my = +pa[2] + y;
                        default:
                            for (j = 1, jj = pa.length; j < jj; j++) {
                                r[j] = +pa[j] + ((j % 2) ? x : y);
                                (j % 2) ? (x = r[j]) : (y = r[j]);
                            }
                    }
                } else if (pa[0] === "R") {
                    dots = [x, y][CONCAT](pa.slice(1));
                    res.pop();
                    res = res[CONCAT](catmullRom2bezier(dots, crz));
                    r = ["R"][CONCAT](pa.slice(-2));
                } else {
                    for (var k = 0, kk = pa.length; k < kk; k++) {
                        r[k] = pa[k];
                    }
                }
                switch (r[0]) {
                    case "Z":
                        x = mx;
                        y = my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
            res.toString = R._path2string;
            pth.abs = res;
        }
        return pathClone(pth.abs);
    },
    l2c = function(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    },
    q2c = function(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
        _23 = 2 / 3;
        return [
        _13 * x1 + _23 * ax,
        _13 * y1 + _23 * ay,
        _13 * x2 + _23 * ax,
        _13 * y2 + _23 * ay,
        x2,
        y2
        ];
    },
    a2c = function(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        sweep_flag = sweep_flag && +sweep_flag;
        large_arc_flag = large_arc_flag && +large_arc_flag;
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        // If rx = 0 or ry = 0 then this arc is treated as a straight line segment (a "lineto") joining the endpoints
        if (rx === 0 || ry === 0){
            return l2c(x1, y1, x2, y2);
        }
        var _120 = PI * 120 / 180,
        rad = deg2rad * (+angle || 0),
        res = [],
        xy,
        rotate = cacher(function(x, y, rad) {
            var X = x * mathCos(rad) - y * mathSin(rad),
            Y = x * mathSin(rad) + y * mathCos(rad);
            return {
                x: X,
                y: Y
            };
        });
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = mathCos(deg2rad * angle),
            sin = mathSin(deg2rad * angle),
            x = (x1 - x2) / 2,
            y = (y1 - y2) / 2;
            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
            if (h > 1) {
                h = mathSqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
            ry2 = ry * ry,
            k = (large_arc_flag === sweep_flag ? -1 : 1) *
            mathSqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
            cx = k * rx * y / ry + (x1 + x2) / 2,
            cy = k * -ry * x / rx + (y1 + y2) / 2,
            f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
            f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
            x2old = x2,
            y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * mathCos(f2);
            y2 = cy + ry * mathSin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = mathCos(f1),
        s1 = mathSin(f1),
        c2 = mathCos(f2),
        s2 = mathSin(f2),
        t = math.tan(df / 4),
        hx = 4 / 3 * rx * t,
        hy = 4 / 3 * ry * t,
        m1 = [x1, y1],
        m2 = [x1 + hx * s1, y1 - hy * c1],
        m3 = [x2 + hx * s2, y2 - hy * c2],
        m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4][CONCAT](res);
        } else {
            res = [m2, m3, m4][CONCAT](res).join()[SPLIT](COMMA);
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    },
    findDotAtSegment = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    },
    curveDim = cacher(function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
        b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
        c = p1x - c1x,
        t1 = (-b + mathSqrt(b * b - 4 * a * c)) / 2 / a,
        t2 = (-b - mathSqrt(b * b - 4 * a * c)) / 2 / a,
        y = [p1y, p2y],
        x = [p1x, p2x],
        dot;
        abs(t1) > "1e12" && (t1 = .5);
        abs(t2) > "1e12" && (t2 = .5);
        if (t1 > 0 && t1 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
            x.push(dot.x);
            y.push(dot.y);
        }
        if (t2 > 0 && t2 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
            x.push(dot.x);
            y.push(dot.y);
        }
        a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
        b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
        c = p1y - c1y;
        t1 = (-b + mathSqrt(b * b - 4 * a * c)) / 2 / a;
        t2 = (-b - mathSqrt(b * b - 4 * a * c)) / 2 / a;
        abs(t1) > "1e12" && (t1 = .5);
        abs(t2) > "1e12" && (t2 = .5);
        if (t1 > 0 && t1 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
            x.push(dot.x);
            y.push(dot.y);
        }
        if (t2 > 0 && t2 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
            x.push(dot.x);
            y.push(dot.y);
        }
        return {
            min: {
                x: mmin[APPLY](0, x),
                y: mmin[APPLY](0, y)
            },
            max: {
                x: mmax[APPLY](0, x),
                y: mmax[APPLY](0, y)
            }
        };
    }),
    path2curve = R._path2curve = cacher(function(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
        p2 = path2 && pathToAbsolute(path2),
        attrs = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        },
        attrs2 = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        },
        processPath = function(path, d) {
            var nx, ny;
            if (!path) {
                return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
            }
            !(path[0] in {
                T: 1,
                Q: 1
            }) && (d.qx = d.qy = null);
            switch (path[0]) {
                case "M":
                    d.X = path[1];
                    d.Y = path[2];
                    break;
                case "A":
                    path = ["C"][CONCAT](a2c[APPLY](0, [d.x, d.y][CONCAT](path.slice(1))));
                    break;
                case "S":
                    nx = d.x + (d.x - (d.bx || d.x));
                    ny = d.y + (d.y - (d.by || d.y));
                    path = ["C", nx, ny][CONCAT](path.slice(1));
                    break;
                case "T":
                    d.qx = d.x + (d.x - (d.qx || d.x));
                    d.qy = d.y + (d.y - (d.qy || d.y));
                    path = ["C"][CONCAT](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                    break;
                case "Q":
                    d.qx = path[1];
                    d.qy = path[2];
                    path = ["C"][CONCAT](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                    break;
                case "L":
                    path = ["C"][CONCAT](l2c(d.x, d.y, path[1], path[2]));
                    break;
                case "H":
                    path = ["C"][CONCAT](l2c(d.x, d.y, path[1], d.y));
                    break;
                case "V":
                    path = ["C"][CONCAT](l2c(d.x, d.y, d.x, path[1]));
                    break;
                case "Z":
                    path = ["C"][CONCAT](l2c(d.x, d.y, d.X, d.Y));
                    break;
            }
            return path;
        },
        fixArc = function(pp, i) {
            if (pp[i].length > 7) {
                pp[i].shift();
                var pi = pp[i];
                while (pi.length) {
                    pp.splice(i++, 0, ["C"][CONCAT](pi.splice(0, 6)));
                }
                pp.splice(i, 1);
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        },
        fixM = function(path1, path2, a1, a2, i) {
            if (path1 && path2 && path1[i][0] === strM && path2[i][0] != strM && !i) {
                path2.splice(i, 0, [strM, a2.x, a2.y]);
                a1.bx = 0;
                a1.by = 0;
                a1.x = path1[i][1];
                a1.y = path1[i][2];
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        };
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] = processPath(p[i], attrs);
            fixArc(p, i);
            p2 && (p2[i] = processPath(p2[i], attrs2));
            p2 && fixArc(p2, i);
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
            seg2 = p2 && p2[i],
            seglen = seg.length,
            seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }, null, pathClone),
    parseDots = R._parseDots = cacher(function(gradient) {
        var dots = [];
        for (var i = 0, ii = gradient.length; i < ii; i++) {
            var dot = {},
            par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
            dot.color = R.getRGB(par[1]);
            if (dot.color.error) {
                return null;
            }
            //store opacity information
            dot.opacity = dot.color.opacity;
            dot.color = dot.color.hex;
            par[2] && (dot.offset = par[2] + "%");
            dots.push(dot);
        }
        for (i = 1, ii = dots.length - 1; i < ii; i++) {
            if (!dots[i].offset) {
                var start = toFloat(dots[i - 1].offset || 0),
                end = 0;
                for (var j = i + 1; j < ii; j++) {
                    if (dots[j].offset) {
                        end = dots[j].offset;
                        break;
                    }
                }
                if (!end) {
                    end = 100;
                    j = ii;
                }
                end = toFloat(end);
                var d = (end - start) / (j - i + 1);
                for (; i < j; i++) {
                    start += d;
                    dots[i].offset = start + "%";
                }
            }
        }
        return dots;
    }),
    tear = R._tear = function(el, paper) {
        el === paper.top && (paper.top = el.prev);
        el === paper.bottom && (paper.bottom = el.next);
        el.next && (el.next.prev = el.prev);
        el.prev && (el.prev.next = el.next);
    },
    tofront = R._tofront = function(el, paper) {
        if (paper.top === el) {
            return false;
        }
        tear(el, paper);
        el.next = null;
        el.prev = paper.top;
        paper.top.next = el;
        paper.top = el;
        return true;
    },
    toback = R._toback = function(el, paper) {
        if (paper.bottom === el) {
            return false;
        }
        tear(el, paper);
        el.next = paper.bottom;
        el.prev = null;
        paper.bottom.prev = el;
        paper.bottom = el;
        return true;
    },
    insertafter = R._insertafter = function(el, el2, paper, paper2) {
        tear(el, paper);
        el.parent = paper2;
        el2 === paper2.top && (paper2.top = el);
        el2.next && (el2.next.prev = el);
        el.next = el2.next;
        el.prev = el2;
        el2.next = el;
    },
    insertbefore = R._insertbefore = function(el, el2, paper, paper2) {
        tear(el, paper);
        el.parent = paper2;
        el2 === paper2.bottom && (paper2.bottom = el);
        el2.prev && (el2.prev.next = el);
        el.prev = el2.prev;
        el2.prev = el;
        el.next = el2;
    },

    extractTransform = R._extractTransform = function(el, tstr) {
        if (tstr == null) {
            return el._.transform;
        }
        tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
        var tdata = R.parseTransformString(tstr),
        deg = 0,
        dx = 0,
        dy = 0,
        sx = 1,
        sy = 1,
        _ = el._,
        m = new Matrix;
        _.transform = tdata || [];
        if (tdata) {
            for (var i = 0, ii = tdata.length; i < ii; i++) {
                var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
                if (command === "t" && tlen === 3) {
                    if (absolute) {
                        x1 = inver.x(0, 0);
                        y1 = inver.y(0, 0);
                        x2 = inver.x(t[1], t[2]);
                        y2 = inver.y(t[1], t[2]);
                        m.translate(x2 - x1, y2 - y1);
                    } else {
                        m.translate(t[1], t[2]);
                    }
                } else if (command === "r") {
                    if (tlen === 2) {
                        bb = _.bb || (_.bb = el.getBBox(1));
                        m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                        deg += t[1];
                    } else if (tlen === 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.rotate(t[1], x2, y2);
                        } else {
                            m.rotate(t[1], t[2], t[3]);
                        }
                        deg += t[1];
                    }
                } else if (command === "s") {
                    if (tlen === 2 || tlen === 3) {
                        bb = _.bb || (_.bb = el.getBBox(1));
                        m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                        sx *= t[1];
                        sy *= t[tlen - 1];
                    } else if (tlen === 5) {
                        if (absolute) {
                            x2 = inver.x(t[3], t[4]);
                            y2 = inver.y(t[3], t[4]);
                            m.scale(t[1], t[2], x2, y2);
                        } else {
                            m.scale(t[1], t[2], t[3], t[4]);
                        }
                        sx *= t[1];
                        sy *= t[2];
                    }
                } else if (command === mStr && tlen === 7) {
                    m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                }
                _.dirtyT = 1;
                el.matrix = m;
            }
        }

        /*\
         * Element.matrix
         [ property (object) ]
         **
         * Keeps @Matrix object, which represents element transformation
        \*/
        el.matrix = m;

        _.sx = sx;
        _.sy = sy;
        _.deg = deg;
        _.dx = dx = m.e;
        _.dy = dy = m.f;

        if (sx === 1 && sy === 1 && !deg && _.bbox) {
            _.bbox.x += +dx;
            _.bbox.y += +dy;
        } else {
            _.dirtyT = 1;
        }
    },
    getEmpty = function(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t":
                return [l, 0, 0];
            case "m":
                return [l, 1, 0, 0, 1, 0, 0];
            case "r":
                if (item.length === 4) {
                    return [l, 0, item[2], item[3]];
                } else {
                    return [l, 0];
                }
            case "s":
                if (item.length === 5) {
                    return [l, 1, 1, item[3], item[4]];
                } else if (item.length === 3) {
                    return [l, 1, 1];
                } else {
                    return [l, 1];
                }
        }
    },
    equaliseTransform = R._equaliseTransform = function(t1, t2) {
        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
        t1 = R.parseTransformString(t1) || [];
        t2 = R.parseTransformString(t2) || [];
        var maxlength = mmax(t1.length, t2.length),
        from = [],
        to = [],
        i = 0, j, jj,
        tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if ((tt1[0] != tt2[0]) ||
                (tt1[0].toLowerCase() === "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
                (tt1[0].toLowerCase() === "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
                ) {
                return;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: from,
            to: to
        };
    };
    R._getContainer = function(x, y, w, h) {
        var container;
        container = h == null && !R.is(x, OBJECT) ? g.doc.getElementById(x) : x;
        if (container == null) {
            return;
        }
        if (container.tagName) {
            if (y == null) {
                return {
                    container: container,
                    width: container.style.pixelWidth || container.offsetWidth,
                    height: container.style.pixelHeight || container.offsetHeight
                };
            } else {
                return {
                    container: container,
                    width: y,
                    height: w
                };
            }
        }
        return {
            container: 1,
            x: x,
            y: y,
            width: w,
            height: h
        };
    };

    R._engine = {};

    /*\
     * Raphael.path2curve
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic bezier curves.
     > Parameters
     - pathString (string|array) path string or array of segments
     = (array) array of segments.
    \*/
    R.path2curve = path2curve;

    /*\
     * Raphael.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns matrix based on given parameters.
     > Parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     = (object) @Matrix
    \*/
    R.matrix = function(a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };

    function Matrix(a, b, c, d, e, f) {
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function(matrixproto) {

        /*\
         * Matrix.add
         [ method ]
         **
         * Adds given matrix to existing one.
         > Parameters
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function(a, b, c, d, e, f) {
            var out = [[], [], []],
            m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
            x, y, z, res;

            if (a && a instanceof Matrix) {
                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
            }

            for (x = 0; x < 3; x++) {
                for (y = 0; y < 3; y++) {
                    res = 0;
                    for (z = 0; z < 3; z++) {
                        res += m[x][z] * matrix[z][y];
                    }
                    out[x][y] = res;
                }
            }
            this.a = out[0][0];
            this.b = out[1][0];
            this.c = out[0][1];
            this.d = out[1][1];
            this.e = out[0][2];
            this.f = out[1][2];
        };

        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function() {
            var me = this,
            x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };

        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function() {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };

        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         > Parameters
         - x (number)
         - y (number)
        \*/
        matrixproto.translate = function(x, y) {
            this.add(1, 0, 0, 1, x, y);
        };

        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         > Parameters
         - x (number)
         - y (number) #optional
         - cx (number) #optional
         - cy (number) #optional
        \*/
        matrixproto.scale = function(x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
            this.add(x, 0, 0, y, 0, 0);
            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
        };

        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         > Parameters
         - a (number)
         - x (number)
         - y (number)
        \*/
        matrixproto.rotate = function(a, x, y) {
            a = R.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +mathCos(a).toFixed(9),
            sin = + mathSin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            this.add(1, 0, 0, 1, -x, -y);
        };

        /*\
         * Matrix.x
         [ method ]
         **
         * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         > Parameters
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function(x, y) {
            return x * this.a + y * this.c + this.e;
        };

        /*\
         * Matrix.y
         [ method ]
         **
         * Return y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         > Parameters
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function(x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function(i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function() {
            return R.svg ?
            "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" :
            [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
        };
        matrixproto.toMatrixString = function() {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) +
            ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) +
            ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
        };
        matrixproto.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = mathSqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }

        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function() {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.c], [this.b, this.d]];
            out.scalex = mathSqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = mathSqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            // rotation
            var sin = -row[0][1],
            cos = row[1][1];
            if (cos < 0) {
                out.rotate = R.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = R.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) === out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) === out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };

        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Return transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function(shorter) {
            var s = shorter || this[SPLIT]();
            if (s.isSimple) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return  (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) +
                (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
                (s.rotate ? "r" + [s.rotate, 0, 0] : E);
            } else {
                return mStr + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);

    // WebKit rendering bug workaround method
    var navigator = win.navigator,
        version = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);

    if ((navigator.vendor === "Apple Computer, Inc.") && (version && version[1] < 4 || navigator.platform.slice(0, 2) === "iP") ||
        (navigator.vendor === "Google Inc." && version && version[1] < 8)) {

        /*\
         * Paper.safari
         [ method ]
         **
         * There is an inconvenient rendering bug in Safari (WebKit):
         * sometimes the rendering should be forced.
         * This method should help with dealing with this bug.
        \*/
        paperproto.safari = function() {
            var rect = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
                stroke: NONE
            });
            setTimeout(function() {
                rect.remove();
            });
            return true;
        };
    } else {
        paperproto.safari = fun;
    }

    var preventDefault = function() {
        this.returnValue = false;
    },
    preventTouch = function() {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function() {
        this.cancelBubble = true;
    },
    stopTouch = function() {
        return this.originalEvent.stopPropagation();
    },
    eventCopyList = {
        stopPropagation: 'fn',
        stopImmediatePropagation: 'fn',
        preventDefault: 'fn',
        type: true,
        clientX: true,
        clientY: true,
        pageX: true,
        pageY: true,
        bubbles: true,
        cancelable: true,
        touches: true,
        target: true,
        originalTarget: true,
        srcElement: true,
        relatedTarget: true,
        fromElement: true,
        changedTouches: true,
        layerX: true,
        layerY: true,
        deltaX: true,
        deltaY: true
    },
    makeSelectiveCopy = R.makeSelectiveCopy = function (target, source) {
        for (let eve in eventCopyList) {
            if (eventCopyList[eve] === 'fn') {
                target[eve] = (function () {
                    return function () {
                        source[eve]();
                    }
                })(source);
            } else {
                target[eve] = source[eve];
            }
        }
        target.originalEvent = source;
        // For IOS device
        target.type || (target.type = source.originalEvent && source.originalEvent.type);
    },
    // This function is used to add drag related events and element.mouseover/element.mouseout event.
    // It is advised to use element.on instead
    addEvent = R.addEvent = (function() {
        if (g.doc.addEventListener) {
            return function(obj, type, fn, element) {
                // If pointer is supported then use pointer events else use default events
                var realName = supportsPointer ? safePointerEventMapping[type] :
                    supportsTouch ? touchMap[type] : type,
                    f,
                    args;
                // capture mode false is included in the eventListener function only when it is a non-IE device.
                // For all IE device rendering svg we have have a specific bug in the browser. If we use {}, {capture: false}
                // or {capture: true}, irrespective of the boolean value it always sets {capture: true} for events attached
                // on body and div which results in bug when stopPropagation is called.
                if (!isIE) {
                    args = {
                        capture: false
                    };
                }

                /**
                 * Special case for pointerup
                 * When dragged over an element then pointer up is not fired, so we have to associate
                 * respective events for various browsers
                 */
                if (element.dragFn) {
                    if (realName === 'pointerup') {
                        realName = 'mouseup';
                    } else if (realName === UNDEF) { // for hybrid devices
                        realName = 'touchend'
                    }
                }

                f = function(e) {
                    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                        scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                        target;
                    if (supportsTouch && touchMap[type]) {
                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                            target = e.targetTouches[i].target;
                            if (target === obj || (target.nodeName === 'tspan' && target.parentNode === obj)) {
                                var olde = e;
                                e = e.targetTouches[i];
                                e.originalEvent = olde;
                                e.preventDefault = preventTouch;
                                e.stopPropagation = stopTouch;
                                break;
                            }
                        }
                    }
                    return fn.call(element, e, e.clientX + scrollX, e.clientY + scrollY);
                };
                obj.addEventListener(realName, f, args);
                return function() {
                    obj.removeEventListener(realName, f, args);
                    return true;
                };
            };
        } else if (g.doc.attachEvent) {
            return function(obj, type, fn, element) {
                var f = function(e) {
                    e = e || g.win.event;
                    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                    scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                    x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                    e.preventDefault = e.preventDefault || preventDefault;
                    e.stopPropagation = e.stopPropagation || stopPropagation;
                    return fn.call(element, e, x, y);
                };
                obj.attachEvent("on" + type, f);
                var detacher = function() {
                    obj.detachEvent("on" + type, f);
                    return true;
                };
                return detacher;
            };
        }
    })(),

    dragMove = function(e) {
        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
            x = (e.clientX !== UNDEF ? e.clientX : (e.changedTouches && e.changedTouches[0].clientX)) + scrollX,
            y = (e.clientY !== UNDEF ? e.clientY : (e.changedTouches && e.changedTouches[0].clientY)) + scrollY,
            data,
            dummyEve = {},
            el = this,
            j = el.dragInfo.onmove.length;

        // Setting the minimum threshold of 2 pixels to trigger dragmove
        // el.blockDrag is true during pinch zoom in touch devices
        if ((el.dragStartFn && !(Math.abs(x - el._drag.x) >= 2.5 || Math.abs(y - el._drag.y) >= 2.5)) ||
            el._blockDrag || (supportsPointer && supportsTouch && !e.isPrimary)) {
            return;
        }

        while (j--) {
            if (supportsTouch && e.type === 'touchmove') {
                var i = e.touches.length,
                touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier === el._drag.id) {
                        x = touch.clientX + scrollX;
                        y = touch.clientY + scrollY;
                        break;
                    }
                }
            }

            if (el.removed) {
                continue;
            }

            if (el.dragStartFn) {
                el.dragStartFn(j);
                el.dragStartFn = undefined;
                el.dragInfo._dragmove = true;
            }

            if (g.win.opera) {
                var node = R._engine.getNode(el),
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;

                parent.removeChild(node);

                node.style.display = NONE;
                node.style.display = display;
                next ? parent.insertBefore(node, next) : parent.appendChild(node);
            }
            //Function to copy some properties of the actual event into the dummy event
            makeSelectiveCopy(dummyEve, e);

            data = dummyEve.data = [x - el._drag.x, y - el._drag.y, x, y];
            eve("raphael.drag.move." + el.id, el.dragInfo.move_scope[j] || el, dummyEve, data);
        }
    },
    dragUp = function(e) {
        var el = this,
            dragInfo = el.dragInfo,
            i = dragInfo.onend.length;

        // Dragend handler is called only when dragmove is fired
        if (el.dragInfo._dragmove) {
            while (i--) {
                el._drag = {};
                eve("raphael.drag.end." + el.id, dragInfo.end_scope[i] || dragInfo.start_scope[i] ||
                    dragInfo.move_scope[i] || el, e);
            }
        }
        el.dragInfo._dragmove = undefined;
        supportsTouch && !(isIE11 || isEdge) && !(isWindows && isFirefox) &&
            (el.paper.canvas.style['touch-action'] = 'auto');
        // After execution of the callbacks the eventListeners are removed
        R.undragmove.call(el, dragMove);
        R.undragend.call(el, dragUp);
        R.unmousemove.call(el, dragMove).unmouseup.call(el, dragUp);
    },

    /*\
     * Raphael.el
     [ property (object) ]
     **
     * You can add your own method to elements. This is usefull when you want to hack default functionality or
     * want to wrap some common transformation or attributes in one method. In difference to canvas methods,
     * you can redefine element method at any time. Expending element methods wouldn’t affect set.
     > Usage
     | Raphael.el.red = function () {
     |     this.attr({fill: "#f00"});
     | };
     | // then use it
     | paper.circle(100, 100, 20).red();
    \*/
    elproto = R.el = {};

    /*\
     * Element.click
     [ method ]
     **
     * Adds event handler for click for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes event handler for click for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds event handler for double click for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes event handler for double click for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds event handler for mousedown for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes event handler for mousedown for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds event handler for mousemove for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes event handler for mousemove for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds event handler for mouseout for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes event handler for mouseout for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds event handler for mouseover for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes event handler for mouseover for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds event handler for mouseup for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes event handler for mouseup for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds event handler for touchstart for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes event handler for touchstart for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds event handler for touchmove for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes event handler for touchmove for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchend
     [ method ]
     **
     * Adds event handler for touchend for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes event handler for touchend for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds event handler for touchcancel for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes event handler for touchcancel for the element.
     > Parameters
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--; ) {
        (function(eventName) {
            // tragetElem is introducded if we want to add the evt listener on a different dom based on some
            // specific events, eg - dragMovde and dragEnd
            R[eventName] = elproto[eventName] = function(fn, scope, tragetElem) {
                if (R.is(fn, FUNCTION)) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(tragetElem || this.shape || this.node || g.doc, eventName, fn, scope || this)
                    });
                }
                return this;
            };
            R["un" + eventName] = elproto["un" + eventName] = function(fn) {
                var events = this.events || [],
                l = events.length;
                while (l--)
                    if (events[l].name === eventName && events[l].f === fn) {
                        events[l].unbind();
                        events.splice(l, 1);
                        !events.length && delete this.events;
                        return this;
                    }
                return this;
            };
        })(events[i]);
    }

    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value asociated with given key.
     **
     * See also @Element.removeData
     > Parameters
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .fcclick(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function(key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length === 1) {
            if (R.is(key, OBJECT)) {
                for (var i in key)
                    if (key[HAS](i)) {
                        this.data(i, key[i]);
                    }
                return this;
            }
            R.stopPartialEventPropagation || eve("raphael.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        R.stopPartialEventPropagation || eve("raphael.data.set." + this.id, this, value, key);
        return this;
    };

    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     > Parameters
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            delete eldata[this.id];
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };

    elproto.dbclick = function (handler, context) {
        let elem = this,
            eventType,
            isSingleFinger = function (event) {
                return !event.touches || (event.touches && event.touches.length === 1);
            },
            fn = function (e) {
                // Check for multi-touch devices. When 2 finger touch is done then pointerup
                // is fired twice resulting into double click zoom
                if ( supportsPointer && !e.isPrimary) {
                    return;
                }
                e && e.preventDefault();
                if (!isSingleFinger(e)) {
                    return;
                }
                if (elem._tappedOnce) {
                    handler.call(context || elem, e);
                    elem._tappedOnce = false;
                } else {
                    elem._tappedOnce = true;
                    // 500ms time for double tap expiration
                    setTimeout(function () {
                        elem._tappedOnce = false;
                    }, 500);
                }
            };

        eventType = supportsPointer ? 'pointerup' : R.supportsTouch ? 'touchstart' : 'mouseup';

        elem.node.addEventListener(eventType, fn);
        R.storeHandlers(elem, handler, fn);

    };

    elproto.undbclick = function (handler) {
        var elem = this,
            derivedHandler = removeHandlers(elem, handler);

        derivedHandler && elem.node.removeEventListener(supportsPointer ? 'pointerup' :
            R.supportsTouch ? 'touchstart' : 'mouseup', derivedHandler);
    };

     /*\
     * Element.getData
     [ method ]
     **
     * Retrieves the element data
     = (object) data
    \*/
    elproto.getData = function () {
        return clone(eldata[this.id] || {});
    };

    var downables = [],
        mouseDown = function () {
            this.untrack = addEvent(g.doc, 'mouseup', mouseUp, this);
        },
        mouseUp = function () {
            this.untrack();
            this.untrack = null;
            return this.fn && this.fn.apply(this.scope || this.el, arguments);

        };
    elproto.mouseup = function (fn, scope, track, tragetElem) {
        if (!track) {
            return R.mouseup.apply(this, [fn, scope, tragetElem]);
        }
        downables.push(track = {
            el: this,
            fn: fn,
            scope: scope
        });
        track.unbind = addEvent(this.shape || this.node || g.doc,
            'mousedown', mouseDown, track);

        return this;
    };

    elproto.unmouseup = function (fn) {
        var i = downables.length,
            undowned;
        while (i--) {
            if (downables[i].el === this && downables[i].fn === fn) {
                undowned = downables[i];
                undowned.unbind();
                undowned.untrack && undowned.untrack();
                downables.splice(i, 1);
            }
        }
        return undowned ? this : R.unmouseup.apply(this, arguments);
    };

    /*\
     * Element.hover
     [ method ]
     **
     * Adds event handlers for hover for the element.
     > Parameters
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function(f_in, f_out, scope_in, scope_out) {
        return this.on('fc-mouseover', f_in, scope_in).on('fc-mouseout', f_out, scope_out);
    };

    /*\
     * Element.unhover
     [ method ]
     **
     * Removes event handlers for hover for the element.
     > Parameters
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function(f_in, f_out) {
        return this.off('fc-mouseover', f_in).off('fc-mouseout', f_out);
    };

    elproto.fcclick = function (handler, context) {
        var elem = this,
            node = elem.node,
            eventType,
            fn,
            x1,
            y1,
            downFn = function (e) {
                elem._lastEventTriggered = 'mousedown';
                // Storing the mouse down coordinates
                x1 = e.clientX !== UNDEF ? e.clientX : (e.changedTouches &&
                    e.changedTouches[0].clientX);
                y1 = (e.clientY !== UNDEF ? e.clientY : (e.changedTouches &&
                    e.changedTouches[0].clientY));
            },
            moveFn = function (e) {
                let x2 = e.clientX !== UNDEF ? e.clientX : (e.changedTouches &&
                    e.changedTouches[0].clientX),
                y2 = (e.clientY !== UNDEF ? e.clientY : (e.changedTouches &&
                    e.changedTouches[0].clientY));
                // maintaning a minimum pixel gap of 2.5 to trigger mousemove
                if (Math.abs(x1 - x2) >= 2.5 || Math.abs(y1 - y2) >= 2.5) {
                    elem._lastEventTriggered = undefined;
                }
            },
            content;
        elem._clickStoreActual || (elem._clickStoreActual = []);
        elem._clickStoreDerived || (elem._clickStoreDerived = []);

        // Helper functions of click attached only once
        if (!elem._clickHandlerHelper) {
            // For devices that does not support pointer
            if (!supportsPointer && R.supportsTouch) {
                content = {
                    touchstart: function () {
                        elem._lastEventTriggered = 'touchstart';
                        elem._lastEventTriggeredAt = new Date().getTime();
                    },
                    touchmove: moveFn
                };
            } else if (supportsPointer && R.supportsTouch) { // For touch device supporting pointers
                content = {
                    pointerdown: downFn,
                    pointermove: moveFn
                };
            } else {
                content = {
                    mousedown: downFn,
                    mousemove: moveFn
                };
            }

            for (eventType in content) {
                if (node.addEventListener) {
                    node.addEventListener(eventType, content[eventType]);
                } else {
                    node.attachEvent('on'+ eventType, content[eventType]);
                }
            }
            elem._clickHandlerHelper = content;
        }

        // Creating the actual handler
        if (!supportsPointer && R.supportsTouch) {
            eventType = 'touchend',
            fn = function (e) {
                // Restricting click to be called after touchmove followed by touchstart
                // Restricting click to be triggered after long tap
                if (elem._lastEventTriggered === 'touchstart' &&
                    new Date().getTime() - elem._lastEventTriggeredAt <= 500) {
                        setTimeout(function () {
                            handler.call(context || elem, e);
                        }, 0);
                    }
            };
        } else {
            eventType = 'click',
            fn = function (e) {
                // Restricting click to be called after mousemove followed by mousedown
                elem._lastEventTriggered === 'mousedown' &&
                    handler.call(context || elem, e);
            };
        }

        if (node.addEventListener) {
            node.addEventListener(eventType, fn);
        } else {
            node.attachEvent('on'+ eventType, fn);
        }

        // Stroring the events for future removal
        elem._clickStoreDerived.push(fn);
        elem._clickStoreActual.push(handler);
        return elem;
    };

    elproto.fcunclick = function (handler) {
        var elem = this,
            node = elem.node,
            i,
            eventType,
            clickHandlerHelper = elem._clickHandlerHelper,
            clickStoreActual = elem._clickStoreActual,
            clickStoreDerived = elem._clickStoreDerived;

        if (clickStoreActual) {
            for (i = clickStoreActual.length - 1; i >= 0; i--) {
                if (clickStoreActual[i] === handler) {
                    if (node.removeEventListener) {
                        node.removeEventListener(!supportsPointer && R.supportsTouch ?
                            'touchend' : 'click', clickStoreDerived[i]);
                    } else {
                        node.detachEvent('onclick', clickStoreDerived[i]);
                    }
                    clickStoreActual.splice(i, 1);
                    clickStoreDerived.splice(i, 1);
                }
            }

            // When all click listeners are removed
            if (!clickStoreActual.length) {
                for (eventType in clickHandlerHelper) {
                    if (node.removeEventListener) {
                        node.removeEventListener(eventType, clickHandlerHelper[eventType]);
                    } else {
                        node.detachEvent('on'+ eventType, clickHandlerHelper[eventType]);
                    }
                }
                elem._clickHandlerHelper = undefined;
            }
        }
        return elem;
    };
    var draggable = [];

    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for drag of the element.
     > Parameters
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events will be triggered: `drag.start.<id>` on start,
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element
     * `drag.over.<id>` will be fired as well.
     *
     * Start event and start handler will be called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler will be called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler will be called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function(onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var element = this,
            dragInfo = element.dragInfo || (element.dragInfo = {
            // Store all the callbacks for various eventListeners on the same element
            onmove: [],
            onstart: [],
            onend: [],
            move_scope: [],
            start_scope: [],
            end_scope: []
        });
        // Storing the callback functions and scopes in any
        onmove && dragInfo.onmove.push(onmove) && dragInfo.move_scope.push(move_scope);
        onstart && dragInfo.onstart.push(onstart) && dragInfo.start_scope.push(start_scope);
        onend && dragInfo.onend.push(onend) && dragInfo.end_scope.push(end_scope);

        element.dragFn = element.dragFn || function (e) {
            var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                dummyEve = {},
                data,
                i,
                j,
                k,
                ii,
                jj,
                kk,
                dummydragMoveFn,
                _dragX,
                _dragY,
                dragInfo = element.dragInfo,
                args = [dragMove, undef, g.doc];
            // Diabling drag incase of multi touch
            if (supportsPointer && !e.isPrimary) {
                return;
            }
            // Blocking page scroll when drag is triggered
            if (supportsTouch) {
                if (!supportsPointer) {
                    e.preventDefault();
                } else if (!(isIE11 || isEdge) && !(isWindows && isFirefox)){
                    element.paper.canvas.style['touch-action'] = 'none';
                }
            }
            // In hybrid devices, sometimes the e.clientX and e.clientY is not defined
            element._drag.x = _dragX = (e.clientX !== UNDEF ? e.clientX : (e.changedTouches &&
                e.changedTouches[0].clientX)) + scrollX;
            element._drag.y = _dragY = (e.clientY !== UNDEF ? e.clientY : (e.changedTouches &&
                e.changedTouches[0].clientY)) + scrollY;
            element._drag.id = e.identifier;

            // For IOS touch devices
            if (supportsTouch && !supportsPointer) {
                R.dragmove.apply(element, args);
            } else  {
                R.mousemove.apply(element, args).mouseup.call(element, dragUp, undef, undef, g.doc)

            }

            if (supportsTouch) {
                // dragEnd is added for hybrid devices and other touch devices
                R.dragend.call(element, dragUp, undef, g.doc);
            }

            //Function to copy some properties of the actual event into the dummy event
            makeSelectiveCopy(dummyEve, e);

            data = dummyEve.data = [_dragX, _dragY];

            // Attaching handlers for various events
            for (i = 0, ii = dragInfo.onstart.length; i < ii; i ++) {
                eve.on("raphael.drag.start." + element.id, dragInfo.onstart[i]);
            }

            for (j = 0, jj = dragInfo.onmove.length; j < jj; j ++) {
                eve.on("raphael.drag.move." + element.id, dragInfo.onmove[j]);
            }

            for (k = 0, kk = dragInfo.onend.length; k < kk; k ++) {
                eve.on("raphael.drag.end." + element.id, dragInfo.onend[k]);
            }

            // Where there is no dragMove but there is dragStart handler
            // The logic is implemented as dragstart is fired only when there is mousedown followed by mousemove
            if (ii && !jj) {
                dummydragMoveFn = function() {
                    element.undragmove();
                    dragInfo.onmove = [];
                };
                dragInfo.onmove.push(dummydragMoveFn);
                eve.on("raphael.drag.end." + element.id, dummydragMoveFn);
            }

            // Queuing up the dragStartFn. It is fired if dragmove is fired after dragStart
            element.dragStartFn = function (i) {
                eve("raphael.drag.start." + element.id, element.dragInfo.start_scope[i] || element.dragInfo.move_scope[i] ||
                    element, dummyEve, data);
            }
        }
        element._drag = {};
        draggable.push({
            el: element,
            start: element.dragFn,
            onstart: onstart,
            onmove: onmove,
            onend: onend
        });

        if (onstart && !element.startHandlerAttached) {
            // For IOS touch devices
            if (supportsTouch && !supportsPointer) {
                element.dragstart(element.dragFn);
            } else {
                element.mousedown(element.dragFn);
            }
            element.startHandlerAttached = true;
        }

        return element;
    };

    /*\
     * Element.onDragOver
     [ method ]
     **
     * Shortcut for assigning event handler for `drag.over.<id>` event, where id is id of the element (see @Element.id).
     > Parameters
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    elproto.onDragOver = function(f) {
        f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);
    };

    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from given element.
    \*/
    elproto.undrag = function() {
        var elem = this,
            i = draggable.length;
        while (i--) {
            if (draggable[i].el === elem) {
                elem.unmousedown(elem.dragFn);
                draggable.splice(i, 1);
                eve.unbind("raphael.drag.*." + elem.id);
                elem.dragInfo = undefined;
                elem.dragFn = undefined;
                elem.startHandlerAttached = undefined;
            }
        }

        R.unmousemove.call(elem, dragMove).unmouseup.call(elem, dragUp);
        R.undragmove.call(elem, dragMove);
        R.undragend.call(elem, dragUp);
        delete elem._drag;
    };

    /**
     * Function to remove the individual dragStart handler from the element. If no handler is provided, all the dragMove
     * handlers are removed.
     */
    elproto.undragstart = function (handler) {
        var elem = this,
            dragInfo = elem.dragInfo,
            onstart = dragInfo && dragInfo.onstart,
            i,
            ii,
            start_scope = dragInfo && dragInfo.start_scope;

        if (handler) {
            for (i = 0, ii = onstart && onstart.length; i < ii; i++) {
                if (onstart[i] === handler) {
                    onstart.splice(i, 1);
                    start_scope.splice(i, 1);
                    eve.unbind("raphael.drag.start." + this.id, handler);
                    break;
                }
            }
        }

        if (!(onstart && onstart.length) || !handler) {
            R.undragstart.call(elem, elem.dragFn);
            R.unmousedown.call(elem, elem.dragFn);
            eve.unbind("raphael.drag.start." + this.id);
            // Setting the flag for drag start as false
            elem.startHandlerAttached = false;
            dragInfo && (dragInfo.onstart = [], dragInfo.start_scope = []);
        }
    }

    /**
     * Function to remove the individual dragMove handler from the element. If no handler is provided, all the dragMove
     * handlers are removed.
     */
    elproto.undragmove = function (handler) {
        var elem = this,
            dragInfo = elem.dragInfo,
            onmove = dragInfo && dragInfo.onmove,
            i,
            ii,
            move_scope = dragInfo && dragInfo.move_scope;

        if (handler) {
            for (i = 0, ii = onmove && onmove.length; i < ii; i++) {
                if (onmove[i] === handler) {
                    onmove.splice(i, 1);
                    move_scope.splice(i, 1);
                    eve.unbind("raphael.drag.move." + this.id, handler);
                    break;
                }
            }
        }

        if (!(onmove && onmove.length) || !handler) {
            R.undragmove.call(elem, dragMove);
            R.unmousemove.call(elem, dragMove);
            dragInfo && (dragInfo.onmove = [], dragInfo.move_scope = []);
            eve.unbind("raphael.drag.move." + this.id);
        }
    }

    /**
     * Function to remove the individual dragStart handler from the element. If no handler is provided, all the dragEnd
     * handlers are removed.
     */
    elproto.undragend = function (handler) {
        var elem = this,
            dragInfo = elem.dragInfo,
            onend = dragInfo && dragInfo.onend,
            i,
            ii,
            end_scope = dragInfo && dragInfo.end_scope;

        if (handler) {
            for (i = 0, ii = onend && onend.length; i < ii; i++) {
                if (onend[i] === handler) {
                    onend.splice(i, 1);
                    end_scope.splice(i, 1);
                    eve.unbind("raphael.drag.end." + this.id, handler);
                    break;
                }
            }
        }

        if (!(onend && onend.length) || !handler) {
            R.undragend.call(elem, dragUp);
            R.unmouseup.call(elem, dragUp);
            dragInfo && (dragInfo.onend = [], dragInfo.end_scope = []);
            eve.unbind("raphael.drag.end." + this.id);
        }
    }

    elproto.follow = function(el, callback, stalk) {
        if (el.removed || el.constructor !== R.el.constructor) {
            return this;
        }
        el.followers.push({
            el: this,
            stalk: (stalk = {before: 'insertBefore', after: 'insertAfter'}[stalk]),
            cb: callback
        });

        stalk && this[stalk](el);
        return this;
    };

    elproto.unfollow = function(el) {
        if (el.removed || el.constructor !== R.el.constructor) {
            return this;
        }
        for (var i = 0, ii = el.followers.length; i < ii; i++) {
            if (el.followers[i].el === this) {
                el.followers.splice(i, 1);
                break;
            }
        }
        return this;
    };

    /*\
     * Paper.hide
     [ method ]
     **
     * Hides a paper
     **
     > Usage
     | paper.hide();
    \*/
    paperproto.hide = function () {
        var paper = this;
        paper.canvas.style.visibility = "hidden";
        return paper;
    };

    /*\
     * Paper.show
     [ method ]
     **
     * Shows a hidden paper
     **
     > Usage
     | paper.show();
    \*/
    paperproto.show = function () {
        var paper = this;
        paper.canvas.style.visibility = E;
        return paper;
    };

    /*\
     * Paper.group
     [ method ]
     **
     * Creates a group
     **
     > Parameters
     **
     - id (number) id of the group
     = (object) Raphaël element object with type “group”
     **
     > Usage
     | var g = paper.group();
    \*/
    paperproto.group = function () { // id
        var paper = this,
            args = getArrayCopy(arguments),
            group = lastArgIfGroup(args, true),
            out = R._engine.group(paper, args[0], group, !!args[1]);
        return (paper.__set__ && paper.__set__.push(out), (paper._elementsById[out.id] = out));
    };

    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle.
     **
     > Parameters
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) Raphaël element object with type “circle”
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    paperproto.circle = function () { // x, y, r
        var paper = this,
            args = getArrayCopy(arguments),
            group = lastArgIfGroup(args, true),
            attrs = paper._addDefAttribs() ? serializeArgs(args,
                "cx", 0,
                "cy", 0,
                "r", 0,
                "fill", NONE,
                "stroke", BLACK) : serializeArgs(args),
            out = R._engine.circle(paper, attrs, group);

        return (paper.__set__ && paper.__set__.push(out), (paper._elementsById[out.id] = out));
    };


    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle.
     **
     > Parameters
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - r (number) #optional radius for rounded corners, default is 0
     = (object) Raphaël element object with type “rect”
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    paperproto.rect = function () {
        var paper = this,
            args = getArrayCopy(arguments),
            group = lastArgIfGroup(args, true),
            attrs = paper._addDefAttribs() ? serializeArgs(args,
                "x", 0,
                "y", 0,
                "width", 0,
                "height", 0,
                "r", 0,
                "fill", NONE,
                "stroke", BLACK) : serializeArgs(args),
            out = R._engine.rect(paper, attrs, group);

        return (paper.__set__ && paper.__set__.push(out), (paper._elementsById[out.id] = out));
    };

    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse.
     **
     > Parameters
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) Raphaël element object with type “ellipse”
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    paperproto.ellipse = function () {
        var paper = this,
            args = getArrayCopy(arguments),
            group = lastArgIfGroup(args, true),
            attrs = paper._addDefAttribs() ? serializeArgs(args,
                "x", 0,
                "y", 0,
                "rx", 0,
                "ry", 0,
                "fill", NONE,
                "stroke", BLACK) : serializeArgs(args),
            out = R._engine.ellipse(this, attrs, group);

        return (paper.__set__ && paper.__set__.push(out), (paper._elementsById[out.id] = out));
    };

    /*\
     * Paper.path
     [ method ]
     **
     * Creates a path element by given path data string.
     > Parameters
     - pathString (string) #optional path string in SVG format.
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numercal form. Example:
     | "M10,20L30,40"
     * Here we can see two commands: “M”, with arguments `(10, 20)` and “L” with arguments `(30, 40)`. Upper case letter mean command is absolute, lower case—relative.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * “Catmull-Rom curveto” is a not standard SVG command and added in 2.0 to make life easier.
     * Note: there is a special case when path consist of just three commands: “M10,10R…z”. In this case path will smoothly connects to its beginning.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
     * For example of path strings, check out these icons: http://raphaeljs.com/icons/
    \*/
    paperproto.path = function () {
        var paper = this,
            args = getArrayCopy(arguments),
            group = lastArgIfGroup(args, true),
            paperConfig = paper.config,
            capStyle = (paperConfig && paperConfig["stroke-linecap"]) || "butt",
            attrs = paper._addDefAttribs() ? serializeArgs(args,
                "path", E,
                "fill", NONE,
                "stroke", BLACK,
                "stroke-linecap", capStyle) : serializeArgs(args),
            out = R._engine.path(paper, attrs, group);
        return (paper.__set__ && paper.__set__.push(out), (paper._elementsById[out.id] = out));
    };

    /*\
     * Paper.image
     [ method ]
     **
     * Embeds an image into the surface.
     **
     > Parameters
     **
     - src (string) URI of the source image
     - x (number) x coordinate position
     - y (number) y coordinate position
     - width (number) width of the image
     - height (number) height of the image
     = (object) Raphaël element object with type “image”
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    paperproto.image = function () {
        var paper = this,
            args = getArrayCopy(arguments),
            group = lastArgIfGroup(args, true),
            attrs = paper._addDefAttribs() ? serializeArgs(args,
                // "src", E,
                "x", 0,
                "y", 0,
                "width", 0,
                "height", 0) : serializeArgs(args),
            out = R._engine.image(paper, attrs, group);
        return (paper.__set__ && paper.__set__.push(out), (paper._elementsById[out.id] = out));
    };

    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string. If you need line breaks, put “\n” in the string.
     **
     > Parameters
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string) The text string to draw
     = (object) Raphaël element object with type “text”
     **
     > Usage
     | var t = paper.text(50, 50, "Raphaël\nkicks\nbutt!");
    \*/
    paperproto.text = function() {
        var paper = this,
            args = getArrayCopy(arguments),
            group = lastArgIfGroup(args, true),
            attrs = paper._addDefAttribs() ? serializeArgs(args,
                "x", 0,
                "y", 0,
                "text", E,
                "stroke", NONE,
                "fill", BLACK,
                "text-anchor", "middle",
                "vertical-align", "middle"): serializeArgs(args),

            out = R._engine.text(paper, attrs, group, args[1]);
        return (paper.__set__ && paper.__set__.push(out), (paper._elementsById[out.id] = out));
    };

    /*\
     * Paper._addDefAttribs
     [ method ]
     **
     * Whether we need to set default attributes or not
    \*/
    paperproto._addDefAttribs = function () {
        // For SVG browsers and if paper has flag set for not to use default attributes
        return !(R.svg && this.config && this.config.noDefaultAttribs)
    };

    /*\
     * Paper.setConfig
     [ method ]
     **
     * If you need to store any configuration in paper, call this method
     **
     > Parameters
     **
     - key (String) key name of the key-value pair
     - value (String or number) value of the key-value pair
    \*/
    paperproto.setConfig = function (key, value) {
        var paper = this;

        if ((key !== undefined) && (value !== undefined)) {
            paper.config = paper.config || {};
            paper.config[key] = value;
        }
        return paper.config;
    };

    /*\
     * Paper._createDOMNodes
     [ method ]
     **
     * Create DOM nodes with nested children
     **
     > Parameters
     **
     - parentElem (object) parent element node
     - elemObj (object) nested input object to create elements
     - returnObj (object) object reference which will be returned
     **
     > Usage
     | paper._createDOMNodes(parentElementNode, {
     |       tagName: 'filter',
     |       id: 'filter-0',
     |       width: '200%',
     |       height: '200%',
     |       children: [{
     |           tagName: 'feOffset',
     |           result: 'offOut',
     |           in: 'SourceGraphic',
     |           dx: '1',
     |           dy: '1'
     |       }, {
     |           tagName: 'feColorMatrix',
     |           result: 'matrixOut',
     |           in: 'offOut',
     |           type: 'matrix',
     |           values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
     |       }, {
     |           tagName: 'feGaussianBlur',
     |           result: 'blurOut',
     |           in: 'matrixOut',
     |           stdDeviation: '1'
     |       }, {
     |           tagName: 'feComposite',
     |           in: 'SourceGraphic',
     |           in2: 'blurOut',
     |           operator: 'over'
     |       }]
     |   });
    \*/
    paperproto._createDOMNodes = function(parentElem, elementObj, returnObj) {
        var paper = this,
            ele,
            i,
            len,
            attr = {},
            attrKey,
            createNode = R._createNode,
            tagName = elementObj.tagName,
            children = elementObj.children || [];
        !returnObj && (returnObj = {});
        for (attrKey in elementObj) {
            if (attrKey !== 'tagName' && attrKey !== 'children') {
                attr[attrKey] = elementObj[attrKey];
            }
        }

        !attr.id && (attr.id = R.getElementID(R.createUUID()));

        if (!paper.canvas.getElementById(attr.id) && tagName) {
            ele = parentElem.appendChild(createNode(tagName, attr));
            returnObj.element = ele;
            returnObj.id = attr.id;
            len = children.length;
            (len > 0) && (returnObj.children = []);
            for (i = 0; i < len; i++) {
                returnObj.children[i] = {};
                paper._createDOMNodes(ele, children[i], returnObj.children[i]);
            }
        }
        return returnObj;
    };

    /*\
     * Paper.addDefs
     [ method ]
     **
     * Add definitions in paper
     **
     > Parameters
     **
     - elemObj (object) nested input object to create elements
     **
     > Usage
     | var ob = paper.addDefs({
     |   filter0: { // key
     |       tagName: 'filter',
     |       id: 'filter-0',
     |       width: '200%',
     |       height: '200%',
     |       children: [{
     |           tagName: 'feOffset',
     |           result: 'offOut',
     |           in: 'SourceGraphic',
     |           dx: '1',
     |           dy: '1'
     |       }, {
     |           tagName: 'feColorMatrix',
     |           result: 'matrixOut',
     |           in: 'offOut',
     |           type: 'matrix',
     |           values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
     |       }, {
     |           tagName: 'feGaussianBlur',
     |           result: 'blurOut',
     |           in: 'matrixOut',
     |           stdDeviation: '1'
     |       }, {
     |           tagName: 'feComposite',
     |           in: 'SourceGraphic',
     |           in2: 'blurOut',
     |           operator: 'over'
     |       }]
     |   }
     | });
     | // Creates a 'filter' definition element of id, 'filter-0', with width, height as it's attributes
     | // Creates feOffset, feColorMatrix, feGaussianBlur, feComposite as children elements
     | // under the 'filter' definition element
    \*/
    paperproto.addDefs = function (elemObj) {
        if (!R.svg) {
            return;
        }
        var paper = this,
            key,
            returnObj = {},
            defs = paper.defs;

        for (key in elemObj) {
            returnObj[key] = {};
            paper._createDOMNodes(defs, elemObj[key], returnObj[key]);
        }
        return returnObj;
    };

    /*\
     * Paper.setSize
     [ method ]
     **
     * If you need to change dimensions of the canvas call this method
     **
     > Parameters
     **
     - width (number) new width of the canvas
     - height (number) new height of the canvas
    \*/
    paperproto.setSize = function(width, height) {
        return R._engine.setSize.call(this, width, height);
    };

    /*\
     * paper.setDimension
     [ method ]
     **
     * If you need to change dimensions of the canvas call this method
     **
     > Parameters
     **
     - paramsObj (Object or number)
        - paramsObj (Object)
        **
        > Properties of paramsObj
        - width (number) new width of the canvas
        - height (number) new height of the canvas
        **
        - paramsObj (number) new width of the canvas
        **
     - height (number) new height of the canvas
    \*/
    paperproto.setDimension = function(paramsObj, height) {
        var paper = this,
            width;
        // Check if the first argument is an object or not
        if (typeof(paramsObj) === OBJECT) {
            width = paramsObj.width;
            height = paramsObj.height;
            paper.setSize(paramsObj.width, paramsObj.height);
        }
        else {
            width = paramsObj;
            paper.setSize(width, height);
        }
    };

    paperproto.attr = function (name) {
        var element = this;
        if (name == null) {
            return {
                width : element.width,
                height : element.height
            };
        }
        if (R.is(name, STRING)) {
            return element[name];
        }

        element.setDimension(name);
        return element;
    };

    paperproto.status = function(anim, value) {
        return elproto.status.call(this, anim, value);
    };

    // Works exactly as paper.animateWith()
    paperproto.animateWith = function(el, anim, params, ms, easing, callback, configObject) {
        return elproto.animateWith.call(this, el, anim, params, ms, easing, callback, configObject);
    };

    /*\
     * Paper.animate
     [ method ]
     **
     * If you need to animate dimensions of the canvas call this method
     **
     > Parameters
     **
     - paramsObj (Object)
        > Properties of paramsObj
        **
        - width (number) new width of the canvas
        - height (number) new height of the canvas
     - duration (number) time stretch in milliseconds to complete animation
     - effect (String) animation style
     - callback (function reference) method which will execute at end of animation
    \*/
    paperproto.animate = function(params, ms, easing, callback) {
        return elproto.animate.call(this, params, ms, easing, callback);
    };

    /*\
     * Paper.setViewBox
     [ method ]
     **
     * Sets the view box of the paper. Practically it gives you ability to zoom and pan whole paper surface by
     * specifying new boundaries.
     **
     > Parameters
     **
     - x (number) new x position, default is `0`
     - y (number) new y position, default is `0`
     - w (number) new width of the canvas
     - h (number) new height of the canvas
     - fit (boolean) `true` if you want graphics to fit into new boundary box
    \*/
    paperproto.setViewBox = function(x, y, w, h, fit) {
        return R._engine.setViewBox.call(this, x, y, w, h, fit);
    };

    paperproto.getById = function (id) {
        return this._elementsById[id] || null;
    };

    /*\
     * Paper.top
     [ property ]
     **
     * Points to the topmost element on the paper
    \*/
    /*\
     * Paper.bottom
     [ property ]
     **
     * Points to the bottom element on the paper
    \*/
    paperproto.top = paperproto.bottom = null;

    /*\
     * Paper.raphael
     [ property ]
     **
     * Points to the @Raphael object/function
    \*/
    paperproto.raphael = R;

    function x_y() {
        return this.x + S + this.y;
    };
    function x_y_w_h() {
        return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
    };

    /*\
     * Element.getBBox
     [ method ]
     **
     * Return bounding box for a given element
     **
     > Parameters
     **
     - isWithoutTransform (boolean) flag, `true` if you want to have bounding box before transformations. Default is `false`.
     = (object) Bounding box object:
     o {
     o     x: (number) top left corner x
     o     y: (number) top left corner y
     o     x2: (number) bottom right corner x
     o     y2: (number) bottom right corner y
     o     width: (number) width
     o     height: (number) height
     o }
    \*/
    elproto.getBBox = function(isWithoutTransform) {
        if (this.removed) {
            return {};
        }
        var _ = this._;
        if (isWithoutTransform) {
            if (_.dirty || !_.bboxwt) {
                this.realPath = getPath[this.type](this);
                _.bboxwt = pathDimensions(this.realPath);
                _.bboxwt.toString = x_y_w_h;
                _.dirty = 0;
            }
            return _.bboxwt;
        }
        if (_.dirty || _.dirtyT || !_.bbox) {
            if (_.dirty || !this.realPath) {
                _.bboxwt = 0;
                this.realPath = getPath[this.type](this);
            }
            _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
            _.bbox.toString = x_y_w_h;
            _.dirty = _.dirtyT = 0;
        }
        return _.bbox;
    };

    /*\
     * Element.clone
     [ method ]
     **
     = (object) clone of a given element
     **
    \*/
    // elproto.clone = function() {
    //     if (this.removed) {
    //         return null;
    //     }
    //     var o = this,
    //         out = o.paper[o.type]().attr(o.attr());
    //     o.__set__ && o.__set__.push(out);
    //     return out;
    // };

    /*\
     * Element.clone
     [ method ]
     **
      > Parameters
     **
     - attrObj (object) set of attributes
     - group (object) parent node
     = (object) clone of a given element
     **
    \*/
    elproto.clone = function(attrObj, group) {
        if (this.removed) {
            return null;
        }
        var o = this,
            attr = o.attr(),
            key,
            out;

        if (!attrObj) {
            out = o.paper[o.type]().attr(attr);
        } else {
            for (key in attrObj) {
                attr[key] = attrObj[key];
            }
            out = o.paper[o.type](attr, group);
        }
        o.__set__ && o.__set__.push(out);
        return out;
    };

    var curveslengths = {},
    getPointAtSegmentLength = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    },
    getLengthFactory = function(istotal, subpath) {
        return function(path, length, onlystart) {
            path = path2curve(path);
            var x, y, p, l, sp = E, subpaths = {}, point,
            len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] === strM) {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
                            if (onlystart) {
                                return sp;
                            }
                            subpaths.start = sp;
                            sp = [strM + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return {
                                x: point.x,
                                y: point.y,
                                alpha: point.alpha
                            };
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            point.alpha && (point = {
                x: point.x,
                y: point.y,
                alpha: point.alpha
            });
            return point;
        };
    },
    getTotalLength = getLengthFactory(1),
    getPointAtLength = getLengthFactory(),
    getSubpathsAtLength = getLengthFactory(0, 1);

    R.getTotalLength = getTotalLength;

    R.getPointAtLength = getPointAtLength;

    /*\
     * Raphael.getTotalLength
     [ method ]
     **
     * Returns length of the given path in pixels.
     **
     > Parameters
     **
     - path (string) SVG path string.
     **
     = (number) length.
    \*/
    elproto.getTotalLength = function() {
        if (this.type != "path") {
            return;
        }
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
        return getTotalLength(this.attrs.path);
    };

    /*\
     * Raphael.getPointAtLength
     [ method ]
     **
     * Return coordinates of the point located at the given length on the given path.
     **
     > Parameters
     **
     - path (string) SVG path string
     - length (number)
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate
     o     y: (number) y coordinate
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function(length) {
        if (this.type != "path") {
            return;
        }
        return getPointAtLength(this.attrs.path, length);
    };

    /*\
     * Raphael.easing_formulas
     [ property ]
     **
     * Object that contains easing formulas for animation. You could extend it with your own. By default it has following list of easing:
     # <ul>
     #     <li>“linear”</li>
     #     <li>“&lt;” or “easeIn” or “ease-in”</li>
     #     <li>“>” or “easeOut” or “ease-out”</li>
     #     <li>“&lt;>” or “easeInOut” or “ease-in-out”</li>
     #     <li>“backIn” or “back-in”</li>
     #     <li>“backOut” or “back-out”</li>
     #     <li>“elastic”</li>
     #     <li>“bounce”</li>
     # </ul>
     # <p>See also <a href="http://raphaeljs.com/easing.html">Easing demo</a>.</p>
    \*/
    var ef = R.easing_formulas = {
        linear: function(n) {
            return n;
        },
        "<": function(n) {
            return pow(n, 1.7);
        },
        ">": function(n) {
            return pow(n, .48);
        },
        "<>": function(n) {
            var q = .48 - n / 1.04,
            Q = mathSqrt(.1734 + q * q),
            x = Q - q,
            X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
            return (1 - t) * 3 * t * t + t * t * t;
        },
        backIn: function(n) {
            var s = 1.70158;
            return n * n * ((s + 1) * n - s);
        },
        backOut: function(n) {
            n = n - 1;
            var s = 1.70158;
            return n * n * ((s + 1) * n + s) + 1;
        },
        elastic: function(n) {
            if (n === !!n) {
                return n;
            }
            return pow(2, -10 * n) * mathSin((n - .075) * (2 * PI) / .3) + 1;
        },
        bounce: function(n) {
            var s = 7.5625,
            p = 2.75,
            l;
            if (n < (1 / p)) {
                l = s * n * n;
            } else {
                if (n < (2 / p)) {
                    n -= (1.5 / p);
                    l = s * n * n + .75;
                } else {
                    if (n < (2.5 / p)) {
                        n -= (2.25 / p);
                        l = s * n * n + .9375;
                    } else {
                        n -= (2.625 / p);
                        l = s * n * n + .984375;
                    }
                }
            }
            return l;
        },
        // used in line chart anchor animation
        oneBounceOut: function (n) {
            var top = 120;
            if (n <= 0.9) {
                return ef.easeIn(n) * 1.33;
            }
            return 1.2 - n / 5;
        },
        // Used in translating bubble plots
        elasticOnce: function(n) {
            var p = 0.9;
            if (n === !!n) {
                return n;
            }
            return Math.pow(2, -10 * n) * Math.sin((n - p / 4) * (2 * Math.PI) / p) + 1;
        },
        // accelerating from zero velocity
        easeInQuad: function (t) { return t*t },
        // decelerating to zero velocity
        easeOutQuad: function (t) { return t*(2-t) },
        // acceleration until halfway, then deceleration
        easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
        // accelerating from zero velocity
        easeInCubic: function (t) { return t*t*t },
        // decelerating to zero velocity
        easeOutCubic: function (t) { return (--t)*t*t+1 },
        // acceleration until halfway, then deceleration
        easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
        // accelerating from zero velocity
        easeInQuart: function (t) { return t*t*t*t },
        // decelerating to zero velocity
        easeOutQuart: function (t) { return 1-(--t)*t*t*t },
        // acceleration until halfway, then deceleration
        easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
        // accelerating from zero velocity
        easeInQuint: function (t) { return t*t*t*t*t },
        // decelerating to zero velocity
        easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
        // acceleration until halfway, then deceleration
        easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
    };
    ef.easeIn = ef["ease-in"] = ef["<"];
    ef.easeOut = ef["ease-out"] = ef[">"];
    ef.easeInOut = ef["ease-in-out"] = ef["<>"];
    ef["back-in"] = ef.backIn;
    ef["back-out"] = ef.backOut;

    var animationElements = [],
    requestAnimFrame,
    // This a temporary fix so that animation can be handled from the scheduler module.
    animation = function() {
        var Now = +new Date,
            l = 0,
            deqArr = [],
            i = 0,
            ll = 0,
            tmpOpacity,
            radial,
            animFrameFn;

        for (; l < animationElements.length; l++) {
            var e = animationElements[l];
            if (e.el.removed || e.paused || e.parentEl && e.parentEl.e && e.parentEl.e.paused) {
                continue;
            }
            var time = Now - e.start,
            ms = e.ms,
            easing = e.easing,
            from = e.from,
            diff = e.diff,
            to = e.to,
            t = e.t,
            that = e.el,
            set = {},
            now,
            origms,
            init = {},
            executeEvent = !R.stopPartialEventPropagation,
            key,
            i = 0,
            peekVal = e.el && e.el.animElements &&
                e.el.animElements.peek();
            // Checking hooks
            while (peekVal && peekVal.pos <= time / ms) {
                deqArr.push(e.el.animElements.deq());
                peekVal = e.el.animElements.peek();
            }
            if (e.initstatus) {
                time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
                e.status = e.initstatus;
                delete e.initstatus;
                if (e.stop) {
                    delete e.el;
                    animationElements.splice(l--, 1);
                }
            } else {
                e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
            }
            origms = ms;
            // If has parentEl
            if (e.parentEl && e.parentEl.animElements) {
                ms = e.delayend - e.delaystart;
                time = e.parentEl.cPos - e.delaystart;
            } else if (e.el.animElements) {
                e.el.cPos = time / ms;
            }
            if (time < 0) {
                continue;
            }
            if (time < ms) {
                var pos = easing(time / ms);
                ms = origms;
                for (var attr in from)
                    if (from[HAS](attr)) {
                        switch (availableAnimAttrs[attr]) {
                            case 'number':
                                now = +from[attr] + pos * ms * diff[attr];
                                break;
                            case "colour":
                                    if (!diff[attr].length) {
                                        tmpOpacity = (from[attr].opacity + pos * ms * diff[attr].opacity);
                                        if(isNaN(tmpOpacity)){
                                            tmpOpacity = 1;
                                        }
                                        now = "rgba(" + [
                                            upto255(round(from[attr].r + pos * ms * diff[attr].r)),
                                            upto255(round(from[attr].g + pos * ms * diff[attr].g)),
                                            upto255(round(from[attr].b + pos * ms * diff[attr].b)),
                                            tmpOpacity
                                        ].join(COMMA) + ")";
                                    } else {
                                        now = [];
                                        for (i = 0, ii = from[attr].length; i < ii; ++i) {
                                            if (i === 0) {
                                                if(from[attr].isRadial || diff[attr].isRadial){
                                                    radial = "xr(";
                                                    radial += from[attr][0].f1 * (1 - pos) + diff[attr][0].f1 * pos || E;
                                                    radial += ',';
                                                    radial += from[attr][0].f2 * (1 - pos) + diff[attr][0].f2 * pos || E;
                                                    radial += ',';
                                                    radial += (from[attr][0].f3 * (1 - pos) + diff[attr][0].f3 * pos) * 100 || E;
                                                    radial += '%,';
                                                    radial += from[attr][0].f4 * (1 - pos) + diff[attr][0].f4 * pos || E;
                                                    radial += ',';
                                                    radial += from[attr][0].f5 * (1 - pos) + diff[attr][0].f5 * pos;
                                                    radial += ',';
                                                    radial += from[attr][0].f6;
                                                    radial += ')';
                                                    now.push(radial)
                                                } else {
                                                    now.push((from[attr][i] * (1 - pos)) + (pos * diff[attr][i]));
                                                    if (now[0] <= 0) {
                                                        now[0] += 360;
                                                    }
                                                }
                                            } else {
                                                now.push("rgba(" + [
                                                    upto255(round(from[attr][i].r + pos * ms * diff[attr][i].r)),
                                                    upto255(round(from[attr][i].g + pos * ms * diff[attr][i].g)),
                                                    upto255(round(from[attr][i].b + pos * ms * diff[attr][i].b)),
                                                    (from[attr][i].opacity + pos * ms * diff[attr][i].opacity)
                                                ].join(COMMA) + "):" + from[attr][i].position);
                                            }
                                        }
                                        now = now.join("-");
                                        // If radial focus doesnt have a separator
                                        if(from[attr].isRadial || diff[attr].isRadial){
                                            now = now.replace('-', E);
                                        }
                                    }
                                    break;
                                case "path":
                                    now = [];
                                    for (var i = 0, ii = from[attr].length; i < ii; i++) {
                                        now[i] = [from[attr][i][0]];
                                        var jj;
                                        jj = from[attr][i] ? from[attr][i].length : 0;
                                        for (var j = 1  ; j < jj; j++) {
                                            now[i][j] = (+from[attr][i][j] + pos * ms * diff[attr][i][j]).toFixed(4);
                                        }
                                        now[i] = now[i].join(S);
                                    }
                                    now = now.join(S);
                                    break;
                                case "transform":
                                if (diff[attr].real) {
                                    now = [];
                                    for (i = 0, ii = from[attr].length; i < ii; i++) {
                                        now[i] = [from[attr][i][0]];
                                        for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                            now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
                                        }
                                    }
                                } else {
                                    var get = function(i) {
                                        return +from[attr][i] + pos * ms * diff[attr][i];
                                    };
                                    // now = [["r", get(2), 0, 0], ["t", get(3), get(4)], ["s", get(0), get(1), 0, 0]];
                                    now = [[mStr, get(0), get(1), get(2), get(3), get(4), get(5)]];
                                }
                                break;
                            case "csv":
                                if (attr === "clip-rect") {
                                    now = [];
                                    i = 4;
                                    while (i--) {
                                        now[i] = +from[attr][i] + pos * ms * diff[attr][i];
                                    }
                                }
                                break;
                            case "text-bound":
                                now = [][CONCAT](from[attr]);
                                break;
                            default:
                                var from2 = [][CONCAT](from[attr]);
                                now = [];
                                i = that.ca[attr].length;
                                while (i--) {
                                    now[i] = +from2[i] + pos * ms * diff[attr][i];
                                }
                                break;
                        }
                        set[attr] = now;
                    }
                that.attr(set);
                if (executeEvent) {
                    (function(id, that, anim) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + id, that, anim);
                        });
                    })(that.id, that, e.anim);
                }
            } else {
                (function(f, el, a) {
                    setTimeout(function() {
                        executeEvent && eve("raphael.anim.frame." + el.id, el, a);
                        executeEvent && eve("raphael.anim.finish." + el.id, el, a);
                        R.is(f, FUNCTION) && f.call(el);
                    });
                })(e.callback, that, e.anim);

                that.attr(to);
                delete e.el;
                animationElements.splice(l--, 1);
                if (e.repeat > 1 && !e.next) {
                    for (key in to)
                        if (to[HAS](key)) {
                            init[key] = e.totalOrigin[key];
                        }
                    e.el.attr(init);
                    runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
                }
                if (e.next && !e.stop) {
                    runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
                }
            }
        }
        R.svg && that && that.paper && that.paper.safari();

         // Starting animation on timer 0
        for (l = 0, ll = deqArr.length; l < ll; ++l) {
            // lib.schedular.addJob((function (l) {
            //     return function ()  {
            //         runAnimation.apply(null, deqArr[l].params);
            //     };
            // })(l), lib.priorityList.instant);
            animFrameFn = R.getInstantAnimFrameFn();
            animFrameFn((function (l) {
                return function ()  {
                    runAnimation.apply(null, deqArr[l].params);
                };
            })(l));
        }

        animationElements.length && (requestAnimFrame || R.getAnimFrameFn())(animation);
    },
    upto255 = function(color) {
        return color > 255 ? 255 : color < 0 ? 0 : color;
    },
    checkPercentage = function (num) {
        num > 1 && (num = 1);
        num < 0 && (num = 0);
        return num;
    };

    R.getAnimFrameFn = function () {
        return requestAnimFrame = R.requestAnimFrame ||
        _win.webkitRequestAnimationFrame ||
        _win.mozRequestAnimationFrame ||
        _win.oRequestAnimationFrame ||
        _win.msRequestAnimationFrame ||
        function(callback) {
            setTimeout(callback, 16);
        };
    };

    R.getInstantAnimFrameFn = function () {
        return R.instantRequestAnimFrame ||
        _win.webkitRequestAnimationFrame ||
        _win.mozRequestAnimationFrame ||
        _win.oRequestAnimationFrame ||
        _win.msRequestAnimationFrame ||
        function(callback) {
            setTimeout(callback, 16);
        };
    };

    /*\
     * Element.animateWith
     [ method ]
     **
     * Acts similar to @Element.animate, but ensure that given animation runs in sync with another given element.
     **
     > Parameters
     **
     - el (object) element to sync with
     - anim (object) animation to sync with
     - params (object) #optional final attributes for the element, see also @Element.attr
     - ms (number) #optional number of milliseconds for animation to run
     - easing (string) #optional easing type. Accept on of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
     - callback (function) #optional callback function. Will be called at the end of animation.
     - configObject (object) #optional takes an object with optional properties like
        start(what percentage to start aniation), end(what percentage to end animation), hookFn(function
        to be called before applying animation), smartMorph(whether to use smartMorphing in path animation)
     * or
     - element (object) element to sync with
     - anim (object) animation to sync with
     - animation (object) #optional animation object, see @Raphael.animation
     **
     = (object) original element
    \*/
    elproto.animateWith = function(el, anim, params, ms, easing, callback, configObject) {
        var element = this,
            refOb = {},
            key;
        // Copying the reference object
        configObject = configObject || {};
        for (key in configObject) {
            if (configObject.hasOwnProperty(key)) {
                refOb[key] = configObject[key];
            }
        }
        configObject = refOb;
        if (element.removed) {
            callback && callback.call(element);
            return element;
        }
        if (ms === 0) {
            if (R.is(callback, FUNCTION)) {
                setTimeout(function () {
                    callback.call(element);
                }, 0);
            }
            return element.attr (params);
        }
        var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
        x, y;
        configObject.start = checkPercentage(configObject.start || 0);
        configObject.end = checkPercentage(configObject.end || 1);
        if (configObject.start >= configObject.end){
            configObject.start = configObject.end;
        }

        if (!configObject.from && configObject.start > 0.01) {
            // Initializing new Priority Queue if not present already
            el.animElements = el.animElements || new PriorityQueue(function comparator (a, b) {
                return b.pos - a.pos;
            });
            el.animElements.enq({
                pos: configObject.start,
                attr: configObject.start === configObject.end,
                params: [a, element, a.percents[0], null, element.attr(),undefined, el, {
                    start: configObject.start,
                    end: configObject.end,
                    smartMorph: configObject.smartMorph,
                    hookFn: configObject.hookFn
                }, params],
                executeOb: {
                    el: this,
                    attrs: params,
                    callback: callback,
                    hookFn: configObject.hookFn
                }
            });
        } else {
            runAnimation(a, element, a.percents[0], null, element.attr(),undefined, el, configObject);
        }
        for (var i = 0, ii = animationElements.length; i < ii; i++) {
            if (animationElements[i].anim === anim && animationElements[i].el === el) {
                animationElements[ii - 1].start = animationElements[i].start;
                break;
            }
        }
        return element;
    // var a = params ? R.animation(params, ms, easing, callback) : anim,
    //     status = element.status(anim);
    // return this.animate(a).status(a, status * anim.ms / a.ms);
    };
    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
        var cx = 3 * p1x,
        bx = 3 * (p2x - p1x) - cx,
        ax = 1 - cx - bx,
        cy = 3 * p1y,
        by = 3 * (p2y - p1y) - cy,
        ay = 1 - cy - by;
        function sampleCurveX(t) {
            return ((ax * t + bx) * t + cx) * t;
        }
        function solve(x, epsilon) {
            var t = solveCurveX(x, epsilon);
            return ((ay * t + by) * t + cy) * t;
        }
        function solveCurveX(x, epsilon) {
            var t0, t1, t2, x2, d2, i;
            for (t2 = x, i = 0; i < 8; i++) {
                x2 = sampleCurveX(t2) - x;
                if (abs(x2) < epsilon) {
                    return t2;
                }
                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
                if (abs(d2) < 1e-6) {
                    break;
                }
                t2 = t2 - x2 / d2;
            }
            t0 = 0;
            t1 = 1;
            t2 = x;
            if (t2 < t0) {
                return t0;
            }
            if (t2 > t1) {
                return t1;
            }
            while (t0 < t1) {
                x2 = sampleCurveX(t2);
                if (abs(x2 - x) < epsilon) {
                    return t2;
                }
                if (x > x2) {
                    t0 = t2;
                } else {
                    t1 = t2;
                }
                t2 = (t1 - t0) / 2 + t0;
            }
            return t2;
        }
        return solve(t, 1 / (200 * duration));
    }
    elproto.onAnimation = function(f) {
        f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);
        return this;
    };
    function Animation(anim, ms) {
        var percents = [],
        newAnim = {};
        this.ms = ms;
        this.times = 1;
        if (anim) {
            for (var attr in anim)
                if (anim[HAS](attr)) {
                    newAnim[toFloat(attr)] = anim[attr];
                    percents.push(toFloat(attr));
                }
            percents.sort(sortByNumber);
        }
        this.anim = newAnim;
        this.top = percents[percents.length - 1];
        this.percents = percents;
    }

    /*\
     * Animation.delay
     [ method ]
     **
     * Creates a copy of existing animation object with given delay.
     **
     > Parameters
     **
     - delay (number) number of ms to pass between animation start and actual animation
     **
     = (object) new altered Animation object
     | var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
     | circle1.animate(anim); // run the given animation immediately
     | circle2.animate(anim.delay(500)); // run the given animation after 500 ms
    \*/
    Animation.prototype.delay = function(delay) {
        var a = new Animation(this.anim, this.ms);
        a.times = this.times;
        a.del = +delay || 0;
        return a;
    };

    /*\
     * Animation.repeat
     [ method ]
     **
     * Creates a copy of existing animation object with given repetition.
     **
     > Parameters
     **
     - repeat (number) number iterations of animation. For infinite animation pass `Infinity`
     **
     = (object) new altered Animation object
    \*/
    Animation.prototype.repeat = function(times) {
        var a = new Animation(this.anim, this.ms);
        a.del = this.del;
        a.times = math.floor(mmax(times, 0)) || 1;
        return a;
    };

    // Taking converToRadialIfOneRadial function out of colorNormalizer inorder to fix RED-8338
    var converToRadialIfOneRadial = function (a, b, end) {
        var angle = 0;
        if(a.isRadial && !b.isRadial){
            angle += +b[0];
            b[0] = {
                f1: 0,
                f2: 0,
                f3: 0,
                f4: 0,
                f5: 0,
                f6: E
            }
            b.isRadial = true;
        }

        if(!end) {
            converToRadialIfOneRadial(b, a, true);
        }
    };
    /*
    ** Function to convert two color string in array format such that
    ** it is animatabale
    ** @param {string} c1 color 1
    ** @param {string} c2 color 2
    ** @param {function} function to getRGB
    */
    function colorNormalizer(c1, c2, getRGB) {
        "use strict";
        var colorAr1,
            colorAr2,
            i = 0,
            ii = 0,
            j = 0,
            newColArr = [],
            newColArr2 = [],
            temp = {},
            pos = 0,
            uniqArr = [];

        c1 = c1.constructor === Array ? c1[0]: c1;
        c2 = c2.constructor === Array ? c2[0]: c2;

        colorAr1 = c1.split('-');
        colorAr2 = c2.split('-');

        if (colorAr1.length === 1 && colorAr2.length === 1) {
            return [c1, c2];
        }
        // Convert colors to linear format, and mark if any of them is radial
        // linear to radial animation is not correct
        colorAr1 = allToLinear(colorAr1);
        colorAr2 = allToLinear(colorAr2);

        // Handling if default color was added to one
        // and not other
        if (!colorAr1.defaultAngleSet && colorAr2.defaultAngleSet) {
            colorAr2[0] = colorAr1[0];
        }

        if (!colorAr2.defaultAngleSet && colorAr1.defaultAngleSet) {
            colorAr1[0] = colorAr2[0];
        }

        // If one is radial convert both to radial
        converToRadialIfOneRadial(colorAr1, colorAr2);
        /* Making a unique array to store all unique
            color positions of both color so that new color
            can be generated that have same amount of positions
            added */
        for(i = 1, ii = colorAr1.length; i < ii; ++i){
            pos = colorAr1[i].position;
            // if(uniqArr.indexOf(pos) === -1){
                uniqArr.push(pos);
            // }
        }
        for(i = 1, ii = colorAr2.length; i < ii; ++i){
            pos = colorAr2[i].position;
            if(uniqArr.indexOf(pos) === -1){
                uniqArr.push(pos);
            }
        }
        uniqArr.push(0);
        // sort the positions
        uniqArr.sort(function(a,b){return a - b});
        // generating new colors from the existing colors
        newColArr = [colorAr1[0]];
        for (i = 1, ii = uniqArr.length; i < ii; ++i) {
            pos = uniqArr[i];
            temp = colorAr1.getColorAtPosition(pos);
            newColArr.push(temp);
        }
        newColArr2 = [colorAr2[0]];
        for (i = 1, ii = uniqArr.length; i < ii; ++i) {
            pos = uniqArr[i];
            temp = colorAr2.getColorAtPosition(pos);
            newColArr2.push(temp);
        }

        // copying isRadial property
        newColArr.isRadial = colorAr1.isRadial;
        newColArr2.isRadial = colorAr2.isRadial;
        return [newColArr, newColArr2];
        // Getting all unique points

        // Function to convert color to array in linear format
        // and mark if any one of them is radial
        function allToLinear(arr) {
            var i = 0,
                ii = 0,
                j = 0,
                item = {},
                temp = [],
                temp2 = {},
                key,
                prevVal = 0,
                lastVal = 0,
                counter = 0,
                rPos = 0,
                openBrPos = 0,
                closedBrPos = 0,
                radial = {
                    f1 : 0.5,
                    f2 : 0.5
                };

            // Solid color operation
            if (arr.length === 1) {
                if(arr[0] === NONE){
                    arr[0] = "rgba(0,0,0,0)";
                }
                // Push angle zero to start
                arr.unshift(0);
                // Mentioning that a default angle was added
                arr.defaultAngleSet = true;
            }

            // Convert angle to number
            if (isNaN(arr[0])) {
                // Check if is radial
                if(~"rx".indexOf(arr[0].charAt(0))){
                    arr.isRadial = true;

                    rPos = 1;
                    // check if focus if provided
                    // otherwise use default focus
                    if(arr[0].indexOf(')') !== -1){
                        rPos = arr[0].indexOf(')');
                        openBrPos = arr[0].indexOf('(') + 1;
                        closedBrPos = rPos;
                        temp = arr[0].substr(openBrPos, closedBrPos - openBrPos).split(',');
                        radial.f1 = parseFloat(temp[0]) || 0;
                        radial.f2 = parseFloat(temp[1]) || 0;
                        if (~temp[2].indexOf('%')) {
                            temp[2] = parseFloat(temp[2]) / 100;
                        }
                        radial.f3 = parseFloat(temp[2]) || 0;
                        radial.f4 = parseFloat(temp[3]) || 0;
                        radial.f5 = parseFloat(temp[4]) || 0;
                        radial.f6 = temp[5];
                    }
                    arr[0] = arr[0].substr(closedBrPos + 1);
                    arr.unshift(radial);

                } else {
                    arr[0] = 0;
                }
            } else {
                arr[0] = +arr[0];
            }

            for (i = 1, ii = arr.length; i < ii; ++i) {
                temp = arr[i].split(":");
                // conver first element to rgb object and store
                temp2 = getRGB(temp[0]);
                arr[i] = {};
                arr[i].r = temp2.r;
                arr[i].g = temp2.g;
                arr[i].b = temp2.b;
                arr[i].opacity = temp2.opacity;
                // if opacity not present set  to 1
                arr[i].opacity = +arr[i].opacity;
                if (isNaN(arr[i].opacity)) {
                    arr[i].opacity = 1;
                }
                // set the position
                arr[i].position = +temp[1];
            }

            // Sorting array according to position
            // angle and radial focus should be elemnt 0
            arr.sort(function(a, b) {
                if (typeof a === "number" || a.f1) {
                    return -1;
                }
                if (typeof b === "number" || a.f2) {
                    return 1;
                }
                if (isNaN(a.position) && isNaN(b.position)) {
                    return 0;
                }
                if (isNaN(a.position)) {
                    return -1;
                }
                if (isNaN(b.position)) {
                    return 1;
                }
                return a.position - b.position;
            });

            // If first position is not zero
            // add new color with position zero
            if (+arr[1].position !== 0) {
                if (isNaN(arr[1].position)) {
                    arr[1].position = 0;
                } else {
                    temp2 = {};
                    for (key in arr[1]) {
                        temp2[key] = arr[1][key];
                    }
                    temp2.position = 0;
                    // Shifting array to add current object
                    // in position 1
                    arr.push({});
                    for (i = arr.length - 1; i !== 1; --i) {
                        arr[i] = arr[i - 1];
                    }
                    arr[1] = temp2;
                }
            }
            // index to last position
            ii = arr.length - 1;
            // If last position is not 100
            // add new color with position 100
            if (arr[ii].position !== 100) {
                if (isNaN(arr[ii].position)) {
                    arr[ii].position = 100;
                } else {
                    temp2 = {};
                    for (key in arr[ii]) {
                        temp2[key] = arr[ii][key];
                    }
                    temp2.position = 100;
                    // Shifting array to add current object
                    // in position 1
                    arr.push(temp2);
                }
            }

            // Filling correct position value whereever NaN found
            for (i = 2, ii = arr.length; i < ii; ++i) {
                if (!(arr[i].position)) {
                    prevVal = arr[i - 1].position;
                    counter = 1;
                    for (j = i + 1; j < ii; ++j) {
                        ++counter;
                        if (!isNaN(arr[j].position)) {
                            lastVal = +arr[j].position;
                            break;
                        }
                    }
                    arr[i].position = prevVal + ((lastVal - prevVal) / counter);
                }
            }

            arr.getColorAtPosition = function(pos) {
                var prevPos = -1,
                    nextPos = this.length,
                    i = 1,
                    ii = this.length,
                    item = {},
                    colPrev,
                    colNext,
                    ratio = 0,
                    key = E,
                    col = { r: 0, g: 0, b: 0 };

                // Critical section; check again
                for (; i < ii - 1; ++i) {
                    if (this[i].position <= pos) {
                        prevPos = i;
                        nextPos = i + 1;
                    }
                    if (!(this[i].position < pos) && this[i].position >= pos) {
                        nextPos = i;
                        break;
                    }
                }
                ratio = (pos - this[prevPos].position) / (this[nextPos].position - this[prevPos].position);
                if (isNaN(ratio)) {
                    ratio = 0;
                }
                for (key in col) {
                    col[key] = upto255((1 - ratio) * this[prevPos][key] + ratio * this[nextPos][key]);
                }
                col.position = pos;
                col.opacity = (1 - ratio) * this[prevPos]["opacity"] + ratio * this[nextPos]["opacity"];
                return col;
            }
            return arr;
        }
    }
    /**
     * Function to make to uncommon path array to a equal length
     * of path array and same type (L - lineto) to make it animatable
     * @param {array} path array 1
     * @param {array} path array 2
     * @return {object} object containing final 'from' and 'to' path
     */
    function pathNormalizer(p1, p2) {
        'use strict';
        // Function to convert array to svg path (?) only for curves
        var finalp1 = [],
            finalp2 = [],
            pathArr1 = toSvgPath(p1),
            pathArr2 = toSvgPath(p2),
            i = 0,
            ii = 0,
            temp,
            createElementNS = document.createElementNS && document.createElementNS.bind(document),
            dPath = createElementNS && createElementNS("http://www.w3.org/2000/svg", "path");

        // If path invalid or svg not supported return
        if (!pathArr1 || !pathArr2 || !dPath) {
            return [p1, p2];
        }
        if (canFallback(p1, p2)) {
            return [p1, p2];
        }
        // If any of the parameters is
        // absent return to normal flow
        if (!p1 || !p2) {
            return [p1, p2];
        }
        // If svg not available return to normal flow
        if (!document.createElementNS) {
            return [p1, p2];
        }
        // Setting path again
        pathArr1 = toSvgPath(p1);
        pathArr2 = toSvgPath(p2);
        // If invalid path return the original path
        if(pathArr1.join().indexOf('undefined') !== -1) {
            return [p1, p2];
        }
        if(pathArr2.join().indexOf('undefined') !== -1) {
            return [p1, p2];
        }
        // If svg functions not available return to normal flow
        if (!dPath.getTotalLength || !dPath.getPointAtLength) {
            return [p1, p2];
        }
        /* Function to check if the current environment
        ** can animate the path, as pathNormalizer pauses
        ** getTotalLength and getPointAtLength function of svg
        ** which are not supported by all browsers
        */
        function canFallback (path1, path2) {
            var str1 = E,
                str2 = E,
                testLen,
                testPoint;
            // Checking path totoalLength is accurate or not
            // testing with a known path
            // this check is for Firefox
            dPath.setAttribute('d', 'M300 10 L300 300 C50 310,50 640,350 650' +
                'C600 640,600 310,400 300 L400 10 L295 10');
            testLen = dPath.getTotalLength();
            testPoint = dPath.getPointAtLength(10);
            if (testLen < 1829.1 || testLen > 1829.2) {
                return true;
            }
            if (Math.round(testPoint.x) !== 300 || Math.round(testPoint.y) !== 20) {
                return true;
            }
            // path1 and path2 are in array
            function trimPathArray (arr) {
                var i = arr.length;
                while (i-- - 1) {
                    if (arr[i].join(E) === arr[i - 1].join(E)) {
                        arr.pop();
                    } else {
                        break;
                    }
                }
            }
            function getPathFromArray(arr) {
                var str = E,
                    i = 0,
                    ii = arr.length;
                for (; i < ii; ++i) {
                    str += arr[i].join(S);
                }
                return str;
            }
            trimPathArray(path1);
            trimPathArray(path2);
            str1 = getPathFromArray(path1);
            str2 = getPathFromArray(path2);
            if (str1.split(/[Mm]/).length > 2 || str2.split(/[Mm]/).length > 2) {
                return false;
            }
            if (path1.length === path2.length) {
                return true;
            }
            return false;
        }
        /* Convert svg path array to string,
            Also removes repeated commands */
        function toSvgPath(arr) {
            var str = [],
                i = 0,
                ii = arr.length,
                item = [];
            if (typeof arr === STRING) {
                return arr;
            }
            // Converting the array to string; path type
            for (i = 0; i < ii; ++i) {
                if (!arr[i].join){
                    return;
                } else {
                    // Removing continuous Move commands
                    // Picking up the last one
                    if ( !i || !arr[i + 1] || arr[i + 1][0] !== 'M' || arr[i][0] !== 'M'){
                        str.push(arr[i].join(S));
                    }
                }
            }
            str = str.join(E);
            str = str.split(/[Mm]/).slice(1);
            for (i = 0, ii = str.length; i < ii; ++i) {
                str[i] = 'M' + str[i];
            }
            return str;
        }

        ii = Math.max(pathArr1.length, pathArr2.length);
        for (i = 0; i < ii; ++i) {
            temp = _pathNormalizer(pathArr1[i], pathArr2[i]);
            pathArr1[i] = temp[0];
            pathArr2[i] = temp[1];
        }
        // Convert line path 2 dimensional array to string
        function linetopath (arr) {
            var i = 0,
                ii = 0,
                str = [];
            arr = arr || [];
            ii = arr.length;
            for (i = 0; i < ii; ++i) {
                if (arr[i].length - 1) {
                    str.push(arr[i].join(S));
                }
            }
            return str.join(E);
        }
        /* path2curve appends repeated last path command,
            this function removes it or any other repeated path command */
        function removeBlanks (arr, pos) {
            var i = arr.length,
                j = 0,
                path;
            while (i-- - 1) {
                // Pop if length is zero
                if (arr[i].slice(1).toString() === arr[i - 1].slice(1).toString()) {
                    arr.pop();
                } else {
                    break;
                }
            }
            if (arr.length === 1 && pos){
                arr.length = 0;
            }
        }
        /* Divide a path array to number to a given number of times
            as provided in parameters, All path array should start with M command */
        function _divide(arr, times) {
            var resArr = [],
                locArr = [],
                arrLen = arr.length,
                i = 0,
                ii = 0,
                x = 0,
                prevPos = 0,
                y = 0,
                // If array size is smaller than
                // divisions needed
                diffTimes = times - arrLen;
            while (diffTimes >= 0) {
                i = arr.length - 1;
                arr.push(arr.slice(i)[0]);
                --diffTimes;
            }
            arrLen = arr.length;
            for (i = 0; i <= times; ++i) {
                locArr.push(Math.round((i / times) * arrLen));
            }
            for (i = 0, ii = locArr.length - 1; i < ii; ++i) {
                resArr.push(arr.slice(locArr[i], locArr[i + 1]));
                if (resArr[i][0][0] !== 'M' && resArr[i][0][0] !== mStr) {
                    prevPos = resArr[i - 1].length - 1;
                    x = resArr[i - 1][prevPos][1];
                    y = resArr[i - 1][prevPos][2];
                    resArr[i].unshift(['M', x, y]);
                }
            }
            return resArr;
        }
        /* If two path array have different number of MoveTo commands,
            divide the smaller number of MoveTo command holder to match the other one */
        function divideArray (diff) {
            var arrToDivide = [],
                countArr = [],
                transArr = [],
                i = 0,
                ii = 0,
                isArr1 = true;
            if (diff === 0) {
                return;
            } else if (diff > 0) {
                arrToDivide = pathArr2;
                isArr1 = false;
            } else {
                diff = -diff;
                arrToDivide = pathArr1;
            }
            // Maintaining a count array to judge number of times a1
            // path needs to be divided, 1 means dont divide
            for (i = 0, ii = arrToDivide.length; i < ii; ++i) {
                countArr.push(1);
            }
            while (diff--) {
                --i;
                if (i < 0) {
                    i = ii - 1;
                }
                countArr[i]++;
            }

            for (i = 0; i < ii; ++i){
                if (countArr[i] === 1) {
                    transArr.push(arrToDivide[i]);
                } else {
                    transArr.push.apply(transArr, _divide(arrToDivide[i], countArr[i]));
                }
            }
            if (isArr1) {
                pathArr1 = transArr;
            } else {
                pathArr2 = transArr;
            }
        }
        for (i = pathArr1.length; i--;) {
            removeBlanks(pathArr1[i], i);
            // If last element is blank pop it
            pathArr1[i].length || pathArr1.pop();
        }
        for (i = pathArr2.length; i--;) {
            removeBlanks(pathArr2[i], i);
            pathArr2[i].length || pathArr2.pop();
        }
        // Making number off moveto commands equal in both path
        divideArray(pathArr1.length - pathArr2.length);

        ii = Math.max(pathArr1.length, pathArr2.length);
        for (i = 0; i < ii; ++i) {
            temp = _pathNormalizer(linetopath(pathArr1[i]), linetopath(pathArr2[i]));
            pathArr1[i] = temp[0];
            pathArr2[i] = temp[1];
        }

        for (i = 0, ii = pathArr1.length; i < ii; ++i) {
            finalp1 = finalp1.concat(pathArr1[i]);
        }
        for (i = 0, ii = pathArr2.length; i < ii; ++i) {
            finalp2 = finalp2.concat(pathArr2[i]);
        }
        return [finalp1, finalp2];
    }

    // A function to calculate common path
    // in two given paths
    function commonPathCalculator (p1, p2) {
        'use strict';
        var i = 0,
            j = 0,
            ii = 0,
            jj = 0,
            k = 0,
            kk = 0,
            uncommon1 = 0,
            uncommon2 = 0,
            lim1 = 0,
            lim2 = 0,
            nearestPoint1,
            nearestPoint2,
            map1 = {},
            map2 = {},
            groupedPath1 = [],
            groupedPath2 = [],
            gpIndex1 = -1,
            gpIndex2 = -1,
            isSame = true;
        // Splitting the string commands to get
        // particular points later
        // Will be required while breaking paths
        // into common and uncommon parts
        function splitter (path) {
            var i = 0,
                ii = 0;
            path = path.split(/[MCLmcl]/).slice(1);
            for (i = 0, ii = path.length; i < ii; ++i) {
                path[i] = path[i].split(S).slice(1);
                i || path[i].unshift('M');
                if (i) {
                    path[i].length === 2 && path[i].unshift(strL) || path[i].unshift('C');
                }
            }
            return path;
        }
        // populate the arr to object in reverse manner
        // i.e value to key mapping
        function mapper (arr, ob) {
            var i = 0,
                ii = arr.length,
                val,
                item;
            for (i = 0, ii = arr.length; i < ii; ++i) {
                val = arr[i].join(S);
                item = arr[i];
                if (item[0] === 'C' && item[3] === item[5] && item[4] === item[6]) {
                    arr[i].stringValue = [strL, item[3], item[4]].join(S);
                } else
                item.stringValue = val;
                // Creating an array if undefined
                // pushing otherwise
                ob[item.stringValue] && ob[item.stringValue].push(i);
                ob[item.stringValue] || (ob[item.stringValue] = [i]);
            }
        }
        // Function to get nearest point that exist
        // in the other array
        function getNearestExistingPoint (arr, map, start, ii, lim) {
            var i = start,
                k = 0,
                kk = 0,
                item;
            for (; i < ii; ++i) {
                item = map[arr[i].stringValue];
                if (item) {
                    for (k = 0, kk = item.length; k < kk; ++k) {
                        if (item[k] >= lim) {
                            return {
                                index : i,
                                mapValue : item[k],
                                diff : i - start
                            };
                        }
                    }
                }
            }
            return -1;
        }
        // function to get last coordinate for CurveTo command
        function getCoordinateAsMove (arr) {
            var last = arr.length - 1;
            return ['M', arr[last - 1], arr[last]].join(S);
        }
        // function to conver path array to string
        function pathToString (arr) {
            return arr.join(E);
        }
        // commonPathCalculator flow here
        p1 = splitter(p1);
        p2 = splitter(p2);
        mapper(p1, map1);
        mapper(p2, map2);
        // Setting length
        ii = p1.length;
        jj = p2.length;
        i = 0;
        j = 0;
        // Making partitions for common
        // and uncommon parts
        // Checking if first is common or uncommon
        while (i < ii && j < jj) {
            ++gpIndex1;
            ++gpIndex2;
            // initializing blank arrays
            groupedPath1[gpIndex1] = [];
            groupedPath2[gpIndex2] = [];
            isSame = (p1[i].stringValue === p2[j].stringValue);
            if (i) {
                // Logic to push prev coordinate as move command
                groupedPath1[gpIndex1].push(getCoordinateAsMove(p1[i - 1]));
                groupedPath2[gpIndex2].push(getCoordinateAsMove(p2[j - 1]));
            }
            if (isSame) {
                while (i < ii && j < jj && p1[i].stringValue === p2[j].stringValue) {
                    groupedPath1[gpIndex1].push(p1[i].stringValue);
                    groupedPath2[gpIndex2].push(p2[j].stringValue);
                    ++i;
                    ++j;
                }
            } else {
                nearestPoint1 = getNearestExistingPoint(p1, map2, i, ii, j);
                nearestPoint2 = getNearestExistingPoint(p2, map1, j, jj, i);
                // Assuming nearestPoint1 is nearer than nearestPoint2
                lim1 = nearestPoint1.index;
                lim2 = nearestPoint1.mapValue;
                // If nearestPoint2 is nearer
                if (!~nearestPoint1 || nearestPoint1.diff > nearestPoint2.diff) {
                    lim1 = nearestPoint2.mapValue;
                    lim2 = nearestPoint2.index;
                }
                if (!~nearestPoint1 && !~nearestPoint2) {
                   // If both not found include all as uncommon
                    lim1 = ii - 1;
                    lim2 = jj - 1;
                }
                // Pushing uncommon paths
                while (i <= lim1) {
                    groupedPath1[gpIndex1].push(p1[i].stringValue);
                    ++i;
                }
                while (j <= lim2) {
                    groupedPath2[gpIndex2].push(p2[j].stringValue);
                    ++j;
                }
            }
            groupedPath1[gpIndex1] = pathToString(groupedPath1[gpIndex1]);
            groupedPath2[gpIndex2] = pathToString(groupedPath2[gpIndex2]);
        }
        // If Any one is left add them all
        if (i < ii) {
            ++gpIndex1;
            groupedPath1[gpIndex1] = [];
            groupedPath1[gpIndex1].push(getCoordinateAsMove(p1[i - 1]));
            ++gpIndex2;
            groupedPath2[gpIndex2] = [];
            groupedPath2[gpIndex2].push(getCoordinateAsMove(p2[j - 1]));
            while(i < ii) {
                groupedPath1[gpIndex1].push(p1[i].stringValue);
                ++i;
            }
            groupedPath1[gpIndex1] = pathToString(groupedPath1[gpIndex1]);
        }
        if (j < jj) {
            ++gpIndex1;
            groupedPath1[gpIndex1] = [];
            groupedPath1[gpIndex1].push(getCoordinateAsMove(p1[i - 1]));
            ++gpIndex2;
            groupedPath2[gpIndex2] = [];
            groupedPath2[gpIndex2].push(getCoordinateAsMove(p2[j - 1]));
            while(j < jj) {
                groupedPath2[gpIndex2].push(p2[j].stringValue);
                ++j;
            }
            groupedPath2[gpIndex2] = pathToString(groupedPath2[gpIndex2]);
        }
        return [groupedPath1, groupedPath2];
    }

    // function to get equal points for two different path
    // We set path to an dynamically created svg path node
    // and get equal number of path commands from two different
    // paths. Uses getPointAtLength and getTotalLength of svg that
    // arent supported on every browser
    function _pathNormalizer(p1, p2) {
        'use strict';
        var i = 0,
            j = 0,
            ii = 0,
            jj = 0,
            item = {},
            fPath1 = [],
            fPath2 = [],
            divisions = 0,
            commonPath,
            tmp;
        // Uncommon path normalizer
        function normalizeUncommonPaths (p1, p2) {
            var dPath1,
                dPath2,
                i = 0,
                j = 0,
                item = {},
                pathLen1 = 0,
                pathLen2 = 0,
                fPath1 = [],
                fPath2 = [],
                divisions = 0,
                round = Math.round;
            // Creating path elements to use functions 'getTotalLength'
            // and 'getPointAtLength'
            dPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            dPath1.setAttribute("d", p1);

            dPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            dPath2.setAttribute("d", p2);

            // Getting length of the paths
            pathLen1 = dPath1.getTotalLength();
            pathLen2 = dPath2.getTotalLength();

            // Number of divisions will depend on larger path
            divisions = 0.15 * Math.max(pathLen1, pathLen2);
            divisions = Math.ceil(divisions);

            if (!divisions || !isFinite(divisions) || divisions < 10) {
                divisions = 10;
            }

            for (i = 0; i <= divisions; ++i) {
                item = dPath1.getPointAtLength((i / divisions) * pathLen1);
                fPath1.push([i ? strL : strM,
                    round(item.x),
                    round(item.y)
                ]);
                item = dPath2.getPointAtLength((i / divisions) * pathLen2);
                fPath2.push([i ? strL : strM,
                    round(item.x),
                    round(item.y)
                ]);
            }
            return [fPath1, fPath2];
        }
        if (!p1 || p1 === 'M  ') {
            p1 = p2.split(S).slice(0, 3).join(S).replace(/[LC]/, E);
        }
        if (!p2 || p2 === 'M  ') {
            p2 = p1.split(S).slice(0, 3).join(S).replace(/[LC]/, E);
        }
        commonPath = commonPathCalculator(p1, p2);

        for (i = 0, ii = commonPath[0].length; i < ii; ++i) {
            tmp = normalizeUncommonPaths(commonPath[0][i], commonPath[1][i]);
            if (i) {
                fPath1 = fPath1.concat(tmp[0].slice(1));
                fPath2 = fPath2.concat(tmp[1].slice(1));
            } else {
                fPath1 = fPath1.concat(tmp[0]);
                fPath2 = fPath2.concat(tmp[1]);
            }
        }
        return [fPath1, fPath2];
    }



    function runAnimation(anim, element, percent, status, totalOrigin, times, parentEl, configObject) {
        percent = toFloat(percent);
        var params,
        isInAnim,
        isInAnimSet,
        percents = [],
        next,
        prev,
        temp,
        timestamp,
        tempDiff,
        change,
        ms = anim.ms,
        from = {},
        to = {},
        diff = {};

        if (element.type === null) {
            return;
        }

        configObject = configObject || {};
        configObject.hookFn && configObject.hookFn.call(element);
        configObject.from = configObject.from || {};
        if (status) {
            for (i = 0, ii = animationElements.length; i < ii; i++) {
                var e = animationElements[i];
                if (e.el.id === element.id && e.anim === anim) {
                    if (e.percent != percent) {
                        delete e.el.e;
                        delete e.el;
                        animationElements.splice(i, 1);
                        isInAnimSet = 1;
                    } else {
                        isInAnim = e;
                    }
                    element.attr(e.totalOrigin);
                    break;
                }
            }
        } else {
            status = +to; // NaN
        }
        for (var i = 0, ii = anim.percents.length; i < ii; i++) {
            if (anim.percents[i] === percent || anim.percents[i] > status * anim.top) {
                percent = anim.percents[i];
                prev = anim.percents[i - 1] || 0;
                ms = ms / anim.top * (percent - prev);
                next = anim.percents[i + 1];
                params = anim.anim[percent];
                break;
            } else if (status) {
                element.attr(anim.anim[anim.percents[i]]);
            }
        }
        if (!params) {
            return;
        }
        if (!isInAnim) {
            for (var attr in params)
                if (params[HAS](attr)) {
                    if (availableAnimAttrs[HAS](attr) || element.ca[attr]) {
                        from[attr] = configObject.from[attr] || element.attr(attr);
                        (from[attr] == null) && (from[attr] = availableAttrs[attr]);
                        to[attr] = params[attr];
                        change = false;
                        switch (availableAnimAttrs[attr]) {
                            case 'number':
                                tempDiff = to[attr] - from[attr];
                                (tempDiff || isNaN(tempDiff)) && (change = true);
                                diff[attr] = tempDiff / ms;
                                break;
                            case "colour":
                                if(from[attr] === to[attr]){
                                    break;
                                } else {
                                    change = true;
                                }
                                var colorsNormalized = colorNormalizer(from[attr], to[attr], R.getRGB);
                                from[attr] = colorsNormalized[0];
                                var toColour = colorsNormalized[1];
                                if (typeof toColour === STRING) {
                                    if(from[attr].toLowerCase() !== NONE){
                                        from[attr] = R.getRGB(from[attr]);
                                        if(!from[attr].opacity){
                                            from[attr].opacity = 1;
                                        }
                                    } else {
                                        from[attr] = {
                                            r : 0,
                                            g : 0,
                                            b : 0,
                                            opacity : 0
                                        }
                                    }
                                    if(to[attr].toLowerCase() !== NONE){
                                        toColour = R.getRGB(to[attr]);
                                        if(!toColour.opacity){
                                            toColour.opacity = 1;
                                        }
                                    } else {
                                        toColour = {
                                            r : 0,
                                            g : 0,
                                            b : 0,
                                            opacity : 0
                                        }
                                    }
                                    diff[attr] = {
                                        r: (toColour.r - from[attr].r) / ms,
                                        g: (toColour.g - from[attr].g) / ms,
                                        b: (toColour.b - from[attr].b) / ms,
                                        opacity: ((toColour.opacity - from[attr].opacity) / ms)
                                    };
                                } else {
                                    diff[attr] = [];
                                    for (i = 0, ii = from[attr].length; i < ii; ++i) {
                                        if (i === 0) {
                                            diff[attr].push(toColour[0]);
                                        } else {
                                            diff[attr].push({
                                                r: (toColour[i].r - from[attr][i].r) / ms,
                                                g: (toColour[i].g - from[attr][i].g) / ms,
                                                b: (toColour[i].b - from[attr][i].b) / ms,
                                                opacity: (toColour[i].opacity - from[attr][i].opacity) / ms
                                            });
                                        }
                                    }
                                }
                                break;
                            case "path":
                                var toPath,
                                    pathes = path2curve(from[attr], to[attr]);
                                if (configObject.smartMorph) {
                                    pathes = pathNormalizer(pathes[0], pathes[1], configObject);
                                }
                                toPath = pathes[1];
                                from[attr] = pathes[0];
                                diff[attr] = [];
                                for (i = 0, ii = from[attr].length; i < ii; i++) {
                                    diff[attr][i] = [0];
                                    var jj;
                                    jj = from[attr][i] ? from[attr][i].length : 0;
                                    for (var j = 1; j < jj; j++) {
                                        diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
                                        (!change) && diff[attr][i][j] && (change = true);
                                    }
                                }
                                break;
                            case "transform":
                                var _ = element._,
                                eq = equaliseTransform(_[attr], to[attr]);
                                change = true;
                                if (eq) {
                                    from[attr] = eq.from;
                                    to[attr] = eq.to;
                                    diff[attr] = [];
                                    diff[attr].real = true;
                                    for (i = 0, ii = from[attr].length; i < ii; i++) {
                                        diff[attr][i] = [from[attr][i][0]];
                                        for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                            diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
                                        }
                                    }
                                } else {
                                    var m = (element.matrix || new Matrix),
                                    to2 = {
                                        _: {
                                            transform: _.transform
                                        },
                                        getBBox: function() {
                                            return element.getBBox(1);
                                        }
                                    };
                                    from[attr] = [
                                    m.a,
                                    m.b,
                                    m.c,
                                    m.d,
                                    m.e,
                                    m.f
                                    ];
                                    extractTransform(to2, to[attr]);
                                    to[attr] = to2._.transform;
                                    diff[attr] = [
                                    (to2.matrix.a - m.a) / ms,
                                    (to2.matrix.b - m.b) / ms,
                                    (to2.matrix.c - m.c) / ms,
                                    (to2.matrix.d - m.d) / ms,
                                    (to2.matrix.e - m.e) / ms,
                                    (to2.matrix.f - m.f) / ms
                                    ];
                                // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];
                                // var to2 = {_:{}, getBBox: function () { return element.getBBox(); }};
                                // extractTransform(to2, to[attr]);
                                // diff[attr] = [
                                //     (to2._.sx - _.sx) / ms,
                                //     (to2._.sy - _.sy) / ms,
                                //     (to2._.deg - _.deg) / ms,
                                //     (to2._.dx - _.dx) / ms,
                                //     (to2._.dy - _.dy) / ms
                                // ];
                                }
                                break;
                            case "csv":
                                var values = Str(params[attr])[SPLIT](separator),
                                from2 = Str(from[attr])[SPLIT](separator);
                                if (attr === "clip-rect") {
                                    from[attr] = from2;
                                    diff[attr] = [];
                                    i = from2.length;
                                    while (i--) {
                                        tempDiff = values[i] - from[attr][i];
                                        (tempDiff || isNaN(tempDiff)) && (change = true);
                                        diff[attr][i] = tempDiff / ms;
                                    }
                                }
                                to[attr] = values;
                                break;
                            default:
                                values = [][CONCAT](params[attr]);
                                from2 = [][CONCAT](from[attr]);
                                diff[attr] = [];
                                i = element.ca[attr].length;
                                while (i--) {
                                    tempDiff = (values[i] || 0) - (from2[i] || 0);
                                    (tempDiff || isNaN(tempDiff)) && (change = true);
                                    diff[attr][i] = tempDiff / ms;
                                }
                                break;
                        }
                        if (!change) {
                            delete from[attr];
                            delete to[attr];
                            delete params[attr];
                            delete diff[attr];
                        }
                    }
                    else if (R._availableAttrs[HAS](attr) || attr === 'text' || element.ca[attr]) {
                        element.attr(attr, params[attr]);
                        delete params[attr];
                    }
                }
            var easing = params.easing,
            easyeasy = R.easing_formulas[easing];
            if (!easyeasy) {
                easyeasy = Str(easing).match(bezierrg);
                if (easyeasy && easyeasy.length === 5) {
                    var curve = easyeasy;
                    easyeasy = function(t) {
                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
                    };
                } else {
                    easyeasy = pipe;
                }
            }
            timestamp = params.start || anim.start || +new Date;
            element.e =  e = {
                anim: anim,
                percent: percent,
                timestamp: timestamp,
                start: timestamp + (anim.del || 0),
                status: 0,
                initstatus: status || 0,
                stop: false,
                ms: ms,
                easing: easyeasy,
                from: from,
                diff: diff,
                to: to,
                el: element,
                callback: params.callback,
                prev: prev,
                next: next,
                repeat: times || anim.times,
                origin: element.attr(),
                totalOrigin: totalOrigin,
                parentEl : parentEl,
                delayend: configObject && configObject.end,
                delaystart: configObject && configObject.start
            };
            animationElements.push(e);

            if (status && !isInAnim && !isInAnimSet) {
                e.stop = true;
                e.start = new Date - ms * status;
                if (animationElements.length === 1) {
                    return animation();
                }
            }
            if (isInAnimSet) {
                e.start = new Date - e.ms * status;
            }
            animationElements.length === 1 && (requestAnimFrame || R.getAnimFrameFn())(animation);
        } else {
            isInAnim.initstatus = status;
            isInAnim.start = new Date - isInAnim.ms * status;
        }
        eve("raphael.anim.start." + element.id, element, anim);
    }

    /*\
     * Raphael.animation
     [ method ]
     **
     * Creates an animation object that can be passed to the @Element.animate or @Element.animateWith methods.
     * See also @Animation.delay and @Animation.repeat methods.
     **
     > Parameters
     **
     - params (object) final attributes for the element, see also @Element.attr
     - ms (number) number of milliseconds for animation to run
     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
     - callback (function) #optional callback function. Will be called at the end of animation.
     **
     = (object) @Animation
    \*/
    R.animation = function(params, ms, easing, callback, stopPartialEventPropagation) {
        if (params instanceof Animation) {
            return params;
        }
        if (R.is(easing, FUNCTION) || !easing) {
            callback = callback || easing || null;
            easing = null;
        }
        !R.stopPartialEventPropagation && (R.stopPartialEventPropagation = stopPartialEventPropagation);
        params = Object(params);
        ms = +ms || 0;
        var p = {},
        json,
        attr;
        for (attr in params)
            if (params[HAS](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
                json = true;
                p[attr] = params[attr];
            }
        // Enabling the callback to be called even if attr is not provided
        callback && (json = true);
        if (!json) {
            return new Animation(params, ms);
        } else {
            easing && (p.easing = easing);
            callback && (p.callback = callback);
            return new Animation({
                100: p
            }, ms);
        }
    };

    /*\
     * Element.animate
     [ method ]
     **
     * Creates and starts animation for given element.
     **
     > Parameters
     **
     - params (object) final attributes for the element, see also @Element.attr
     - ms (number) number of milliseconds for animation to run
     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
     - callback (function) #optional callback function. Will be called at the end of animation.
     * or
     - animation (object) animation object, see @Raphael.animation
     **
     = (object) original element
    \*/
    elproto.animate = function(params, ms, easing, callback) {
        var element = this;
        if (element.removed) {
            callback && callback.call(element);
            return element;
        }
        var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
        runAnimation(anim, element, anim.percents[0], null, element.attr());
        return element;
    };

    /*\
     * Element.status
     [ method ]
     **
     * Gets or sets the status of animation of the element.
     **
     > Parameters
     **
     - anim (object) #optional animation object
     - value (number) #optional 0 – 1. If specified, method works like a setter and sets the status of a given animation to the value. This will cause animation to jump to the given position.
     **
     = (number) status
     * or
     = (array) status if `anim` is not specified. Array of objects in format:
     o {
     o     anim: (object) animation object
     o     status: (number) status
     o }
     * or
     = (object) original element if `value` is specified
    \*/
    elproto.status = function(anim, value) {
        var out = [],
        i = 0,
        len,
        e;
        if (value != null) {
            runAnimation(anim, this, -1, mmin(value, 1));
            return this;
        } else {
            len = animationElements.length;
            for (; i < len; i++) {
                e = animationElements[i];
                if (e.el.id === this.id && (!anim || e.anim === anim)) {
                    if (anim) {
                        return e.status;
                    }
                    out.push({
                        anim: e.anim,
                        status: e.status
                    });
                }
            }
            if (anim) {
                return 0;
            }
            return out;
        }
    };

    /*\
     * Element.pause
     [ method ]
     **
     * Stops animation of the element with ability to resume it later on.
     **
     > Parameters
     **
     - anim (object) #optional animation object
     - resumeChildAnimation (boolean) #pauses the animation of the elements which are in sync with the current element
     **
     = (object) original element
    \*/
    elproto.pause = function(anim, pauseChildAnimation) {
        var now = +new Date,
            e,
            i;
        for (i = 0; i < animationElements.length; i++) {
            e = animationElements[i];
            // @todo - need a scope to implement the logic for nested animations.
            if ((e.el.id === this.id || (pauseChildAnimation && e.parentEl && e.parentEl.e.el &&
                e.parentEl.e.el.id === this.id)) && (!anim || e.anim === anim)) {
                if (eve("raphael.anim.pause." + this.id, this, e.anim) !== false) {
                    e.paused = true;
                    e.pauseStart = now;
                }
            }
        }
        return this;
    };

    /*\
     * Element.resume
     [ method ]
     **
     * Resumes animation if it was paused with @Element.pause method.
     **
     > Parameters
     **
     - anim (object) #optional animation object
     - resumeChildAnimation (boolean) #resumes the animation of the elements which are in sync with the current element
     **
     = (object) original element
    \*/
    elproto.resume = function(anim, resumeChildAnimation) {
        var now = +new Date,
            e,
            i;
        for (i = 0; i < animationElements.length; i++) {
            e = animationElements[i];
            // @todo - need a scope to implement the logic for nested animations.
            if ((e.el.id === this.id || (resumeChildAnimation && e.parentEl && e.parentEl.e.el &&
                e.parentEl.e.el.id === this.id)) && (!anim || e.anim === anim)) {
                if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {
                    delete e.paused;
                    e.el.status(e.anim, e.status);
                    e.pauseEnd = now;
                    e.start += (((e.parentEl && e.parentEl.e.pauseEnd || e.pauseEnd) -
                        (e.parentEl && e.parentEl.e.pauseStart || e.pauseStart)) || 0);
                }
            }
        }
        return this;
    };


    /*\
     * Element.stop
     [ method ]
     **
     * Stops animation of the element.
     **
     > Parameters
     **
     - anim (object) #optional animation object
     - stopChildAnimation (boolean) #optional stops the animation of all the element which are in sync with the current element
     - jumpToEnd (boolean) #optional takes the current animation to its end value
     **
     = (object) original element
    \*/
    elproto.stop = function(anim, stopChildAnimation, jumpToEnd) {
        var e, i, ele;
        if (stopChildAnimation) {
            for (i = animationElements.length - 1; i >= 0; i--) {
                e = animationElements[i];
                // @todo - need a scope to implement the logic for nested animations.
                if ((e.el.id === this.id || (e.parentEl && e.parentEl.id === this.id)) &&
                    (!anim || animationElements[i].anim === anim)) {
                    ele = e.el;
                    jumpToEnd && ele.attr(e.to);
                    e.callback && e.callback.call(ele);
                    delete ele.e;
                    delete e.el;
                    animationElements.splice(i, 1);
                }
            }
        }
        else {
            for (var i = 0; i < animationElements.length; i++){
                e = animationElements[i];
                if (e.el.id === this.id && (!anim || e.anim === anim)) {
                    if (eve("raphael.anim.stop." + this.id, this, e.anim) !== false) {
                        animationElements.splice(i--, 1);
                    }
                }
            }
        }
        // In case root object has hooked animation elements
        // in priority queue execute them all
        if (this.animElements) {
            executeAnimQueue(this.animElements);
        }
        return this;
    };

    function executeAnimQueue (queue) {
        var ob;
        // Looping until all executed
        while (ob = queue.deq()) {
            ob = ob.executeOb;
            ob.hookFn && ob.hookFn.call(ob.el);
            ob.el.attr(ob.attrs);
            ob.callback && ob.callback.call(ob.el);
        }
    }

    /**
     * Function for stopping animation when paper is cleared or removed
     * @param {Object} currPaper the current paper that is being removed/cleared
     */
    function stopAnimation(currPaper = this) {
        let linkedPaper;
        for (var i = 0; i < animationElements.length; i++) {
            linkedPaper = animationElements[i].el.paper;
            // All the elements associated with the current paper is removed if linkedPaper is already
            // disposed of currentPaper matches the linked Paper
            if (!linkedPaper || linkedPaper === currPaper) {
                animationElements.splice(i--, 1);
            }
        }
    }
    eve.on("raphael.remove", stopAnimation);
    eve.on("raphael.clear", stopAnimation);
    elproto.toString = function() {
        return "Rapha\xebl\u2019s object";
    };

    elproto.toFront = function() {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = R._engine.getNode(o),
            parent = o.parent,
            followers = o.followers,
            follower,
            i,
            ii;

        if (R._tofront(o, parent)) {
            parent.canvas.appendChild(thisNode);
        }

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk && follower.el[follower.stalk](o);
        }
        return o;
    };

    elproto.toBack = function() {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = R._engine.getNode(o),
            parent = o.parent,
            followers = o.followers,
            follower,
            i,
            ii;

        if (R._toback(o, parent)) {
            parent.canvas.insertBefore(thisNode, parent.canvas.firstChild);
        }

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk && follower.el[follower.stalk](o);
        }
        return o;
    };

    elproto.insertAfter = function(element) {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = R._engine.getNode(o),
            thatNode = R._engine.getLastNode(element),
            parentNode = element.parent.canvas,
            followers = o.followers,
            follower,
            i,
            ii;

        if (thatNode.nextSibling) {
            parentNode.insertBefore(thisNode, thatNode.nextSibling);
        }
        else {
            parentNode.appendChild(thisNode);
        }
        R._insertafter(o, element, o.parent, element.parent);

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk &&
                follower.el[follower.stalk](element);
        }
        return o;
    };

    elproto.insertBefore = function(element) {
        if (this.removed) {
            return this;
        }

        var o = this,
            thisNode = R._engine.getNode(o),
            thatNode = R._engine.getNode(element),
            followers = o.followers,
            follower,
            i,
            ii;

        element.parent.canvas.insertBefore(thisNode, thatNode);
        R._insertbefore(o, element, o.parent, element.parent);
        o.parent = element.parent;

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk &&
                follower.el[follower.stalk](element);
        }
        return this;
    };

    elproto.appendChild = function (element) {
        if (this.removed || this.type !== 'group') {
            return this;
        }

        var group = this,
            followers = group.followers,
            follower,
            thatNode,
            i,
            ii;

        // If appending in same group, simply perform toFront().
        if (element.parent === group) {
            element.toFront();
            return group;
        }

        thatNode = R._engine.getNode(element);

        // first remove from own group
        R._tear(element, element.parent);

        group.canvas.appendChild(thatNode);
        element.parent = group;

        !group.bottom && (group.bottom = element);
        element.prev = group.top;
        element.next = null;
        group.top && (group.top.next = element);
        group.top = element;

        for (i = 0, ii = followers.length; i < ii; i++) {
            (follower = followers[i]).stalk &&
                follower.el[follower.stalk](element);
        }

        return group;
    };

    // Reverse application of appendChild
    elproto.appendTo = function (group) {
        return group.appendChild(this);
    }

    elproto.removeChild = function (element) {
        if (this.removed || this.type !== 'group' || element.parent !== this) {
            return this;
        }

        var o = this,
            thatNode = R._engine.getNode(element),
            paper = o.paper;

        R._tear(element, o);
        paper.canvas.appendChild(thatNode);

        o.parent = paper;
        !paper.bottom && (paper.bottom = o);

        o.prev = paper.top;
        paper.top && (paper.top.next = o);
        paper.top = o;
        o.next = null;

        return o;
    };

    /*\
     * Raphael.format
     [ method ]
     **
     * Simple format function. Replaces construction of type “`{<number>}`” to the corresponding argument.
     **
     > Parameters
     **
     - token (string) string to format
     - … (string) rest of arguments will be treated as parameters for replacement
     = (string) formated string
     > Usage
     | var x = 10,
     |     y = 20,
     |     width = 40,
     |     height = 50;
     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
     | paper.path(Raphael.format("M{0},{1}h{2}v{3}h{4}z", x, y, width, height, -width));
    \*/
    R.format = function(token, params) {
        var arg = getArrayCopy(arguments),
            args = R.is(params, ARRAY) ? [0][CONCAT](params) : arg;
        token && R.is(token, STRING) && args.length - 1 && (token = token.replace(formatrg, function(str, i) {
            return args[++i] == null ? E : args[i];
        }));
        return token || E;
    };

    var crispFixer = (R.vml && 0.5 || 0);

    R.crispBound = cacher(function (x, y, w, h, s) {
        var at = {},
            normalizer;

        x = x || 0;
        y = y || 0;
        w = w || 0;
        h = h || 0;
        s = s || 0;
        normalizer = s % 2 / 2 + crispFixer;

        // normalize for crisp edges
        at.x = round(x + normalizer) - normalizer;
        at.y = round(y + normalizer) - normalizer;
        at.width = round(x + w + normalizer) - normalizer - at.x;
        at.height = round(y + h + normalizer) - normalizer - at.y;
        at['stroke-width'] = s;

        // adjust to single pixel if resultant dimension is zero.
        (at.width === 0 && w !== 0) && (at.width = 1);
        (at.height === 0 && h !== 0) && (at.height = 1);

        return at;
    }, R);

    elproto.crisp = function () {
        var o = this,
            attrs = o.attrs,
            key,
            attr = {},
            values = o.attr();

        values = R.crispBound(values.x, values.y, values.width, values.height,
            values['stroke-width']);

        for (key in values) {
            if (attrs[key] === values[key]) { // only set attribute if changed
                delete values[key];
            }
        }

        return o.attr(values);
    };

    /*\
     * Raphael.define
     [ method ]
     **
     * Allows a unified definition of composite shapes and other behaviours using
     * simple directives.
     **
     > Parameters
     **
     - definition (object) the shape definition
    \*/
    R.define = function (name, init, ca, fn, e, data) {
        var i,
            ii;

        // multi definition
        if (R.is(name, ARRAY)) {
            for (i = 0, ii = name.length; i < ii; i++) {
                R.define(name[i]);
            }
            return;
        }
        // object definition
        else if (R.is(name, OBJECT)) {
            R.define(name.name, name[name.name], name.ca, name.fn, name.e, name.data);
            return;
        }
        // invalid or duplicate definition
        else if (!name || R.fn[name]) {
            return;
        }

        R.fn[name] = function () {
            var args = getArrayCopy(arguments),
                element = init.apply(this, args),
                key;

            if (fn && R.is(fn, OBJECT)) {
                for (key in fn) {
                    element[key] = fn[key];
                }
            }

            if (e && R.is(e, OBJECT)) {
                for (key in e) {
                    element[key] && element[key](e[key]);
                }
            }

            if (ca) {
                if (R.is(ca, FUNCTION)) {
                    element.ca[name] = ca;
                }
                else {
                    for (key in ca) {
                        element.ca[key] = ca[key];
                    }
                }

                // Check if namesake ca exists and apply it
                if (element.ca[name]) {
                    R._lastArgIfGroup(args, true); // purge group
                    if (args.length) {
                        // If name attribute is present then the received argument is an object with the customAttribute and other
                        // common attributes. Else it is just the customAttributes that is to be applied.
                        args[0][name] ? element.attr.apply(element, args): element.attr(name, args[0]);
                    }
                }
            }

            return element;
        };

        if (ca) { R.fn[name].ca = ca; }
        if (fn) { R.fn[name].fn = fn; }
        if (e) { R.fn[name].e = e; }
        if (data) { R.fn[name].data = data; }

        return R.fn[name];
    };
    // Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
    (function(doc, loaded, f) {
        if (doc.readyState == null && doc.addEventListener) {
            doc.addEventListener(loaded, f = function() {
                doc.removeEventListener(loaded, f, false);
                doc.readyState = "complete";
            }, false);
            doc.readyState = "loading";
        }
        function isLoaded() {
            (/in/).test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
        }
        isLoaded();
    })(doc, "DOMContentLoaded");

    eve.on("raphael.DOMload", function() {
        loaded = true;
    });
     R._preload = function(src, f) {
        var doc = g.doc,
            img = doc.createElement("img");
        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
        img.onload = function() {
            f.call(this);
            this.onload = null;
            doc.body.removeChild(this);
        };
        img.onerror = function() {
            doc.body.removeChild(this);
        };
        doc.body.appendChild(img);
        img.src = src;
    };



    // EXPOSE
    // SVG and VML are appended just before the EXPOSE line
    // Even with AMD, Raphael should be defined globally
    // oldRaphael.was ? (g.win.Raphael = R) : (Raphael = R);

export default R;
