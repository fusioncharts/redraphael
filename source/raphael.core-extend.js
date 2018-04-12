/**
 * All non fusincharts related functionalities of redRaphael is listed here
 */
export default function (R) {
    var _win = (typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null),
        g = {
            doc: _win.document,
            win: _win
        },
        elproto = R.el,
        has = 'hasOwnProperty',
        apply = 'apply',
        object = 'object',
        array = 'array',
        string = 'string',
        split = 'split',
        finite = 'finite',
        separator = /[, ]+/,
        oldRaphael = {
            was: Object.prototype[has].call(g.win, 'Raphael'),
            is: g.win.Raphael
        },
        E = '',
        mmax = Math.max,
        mmin = Math.min,
        paperproto = R.fn,
        getPath = R._getPath,
        Str = String,
        // Set
        Set = function (items) {
            this.items = [];
            this.length = 0;
            this.type = 'set';
            if (items) {
                for (var i = 0, ii = items.length; i < ii; i++) {
                    if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
                        this[this.items.length] = this.items[this.items.length] = items[i];
                        this.length++;
                    }
                }
            }
        },
        setproto = Set.prototype,
        getOffset = function (elem) {
            var box = elem.getBoundingClientRect(),
                doc = elem.ownerDocument,
                body = doc.body,
                docElem = doc.documentElement,
                clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
                top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
                left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
            return {
                y: top,
                x: left
            };
        };

    /*
     * Raphael.st
     [ property (object) ]
     **
     * You can add your own method to elements and sets. It is wise to add a set method for each element method
     * you added, so you will be able to call the same method on sets too.
     **
     * See also @Raphael.el.
     > Usage
     | Raphael.el.red = function () {
     |     this.attr({fill: '#f00'});
     | };
     | Raphael.st.red = function () {
     |     this.forEach(function (el) {
     |         el.red();
     |     });
     | };
     | // then use it
     | paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
    */
    R.st = setproto;

    /*
     * Raphael.snapTo
     [ method ]
     **
     * Snaps given value to given grid.
     > Parameters
     - values (array|number) given array of values or step of the grid
     - value (number) value to adjust
     - tolerance (number) #optional tolerance for snapping. Default is `10`.
     = (number) adjusted value.
    */
    R.snapTo = function (values, value, tolerance) {
        var rem,
            i;

        if (!R.is(tolerance, finite)) {
            tolerance = 10;
        }

        if (R.is(values, array)) {
            i = values.length;
            while (i--) {
                if (Math.abs(values[i] - value) <= tolerance) {
                    return values[i];
                }
            }
        } else {
            values = +values;
            rem = value % values;

            if (rem < tolerance) {
                return value - rem;
            }
            if (rem > values - tolerance) {
                return value - rem + values;
            }
        }
        return value;
    };

    /*
     * Raphael.registerFont
     [ method ]
     **
     * Adds given font to the registered set of fonts for Raphaël. Should be used as an internal call from within Cufón’s font file.
     * Returns original parameter, so it could be used with chaining.
     # <a href='http://wiki.github.com/sorccu/cufon/about'>More about Cufón and how to convert your font form TTF, OTF, etc to JavaScript file.</a>
     **
     > Parameters
     **
     - font (object) the font to register
     = (object) the font you passed in
     > Usage
     | Cufon.registerFont(Raphael.registerFont({…}));
    */
    R.registerFont = function (font) {
        if (!font.face) {
            return font;
        }
        this.fonts = this.fonts || {};
        var fontcopy = {
                w: font.w,
                face: {},
                glyphs: {}
            },
            family = font.face['font-family'];
        for (var prop in font.face)
            if (font.face[has](prop)) {
                fontcopy.face[prop] = font.face[prop];
            }
        if (this.fonts[family]) {
            this.fonts[family].push(fontcopy);
        } else {
            this.fonts[family] = [fontcopy];
        }
        if (!font.svg) {
            fontcopy.face['units-per-em'] = g.win.parseInt(font.face['units-per-em'], 10);
            for (var glyph in font.glyphs)
                if (font.glyphs[has](glyph)) {
                    var path = font.glyphs[glyph];
                    fontcopy.glyphs[glyph] = {
                        w: path.w,
                        k: {},
                        d: path.d && 'M' + path.d.replace(/[mlcxtrv]/g, function(command) {
                            return {
                                l: 'L',
                                c: 'C',
                                x: 'z',
                                t: 'm',
                                r: 'l',
                                v: 'c'
                            }
                            [command] || 'M';
                        }) + 'z'
                    };
                    if (path.k) {
                        for (var k in path.k)
                            if (path[has](k)) {
                                fontcopy.glyphs[glyph].k[k] = path.k[k];
                            }
                    }
                }
        }
        return font;
    };

    /*
     * Raphael.fullfill
     [ method ]
     **
     * A little bit more advanced format function than @Raphael.format. Replaces construction of type “`{<name>}`” to the corresponding argument.
     **
     > Parameters
     **
     - token (string) string to format
     - json (object) object which properties will be used as a replacement
     = (string) formated string
     > Usage
     | // this will draw a rectangular shape equivalent to 'M10,20h40v50h-40z'
     | paper.path(Raphael.fullfill('M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z', {
     |     x: 10,
     |     y: 20,
     |     dim: {
     |         width: 40,
     |         height: 50,
     |         'negative width': -40
     |     }
     | }));
    */
    R.fullfill = (function () {
        var tokenRegex = /\{([^\}]+)\}/g,
            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|')(.+?)\2\])(\(\))?/g, // matches .xxxxx or ['xxxxx'] to run over object properties
            replacer = function(all, key, obj) {
                var res = obj;
                key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                    name = name || quotedName;
                    if (res) {
                        if (name in res) {
                            res = res[name];
                        }
                        typeof res == 'function' && isFunc && (res = res());
                    }
                });
                res = (res == null || res == obj ? all : res) + '';
                return res;
            };
        return function(str, obj) {
            return String(str).replace(tokenRegex, function(all, key) {
                return replacer(all, key, obj);
            });
        };
    })();

    /*
     * Raphael.ninja
     [ method ]
     **
     * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but anyway.) You can use `ninja` method.
     * Beware, that in this case plugins could stop working, because they are depending on global variable existance.
     **
     = (object) Raphael object
     > Usage
     | (function (local_raphael) {
     |     var paper = local_raphael(10, 10, 320, 200);
     |     …
     | })(Raphael.ninja());
    */
    R.ninja = function () {
        oldRaphael.was ? (g.win.Raphael = oldRaphael.is) : delete g.win.Raphael;
        return R;
    };

    /*
     * Paper.getFont
     [ method ]
     **
     * Finds font object in the registered fonts by given parameters. You could specify only one word from the font name, like “Myriad” for “Myriad Pro”.
     **
     > Parameters
     **
     - family (string) font family name or any word from it
     - weight (string) #optional font weight
     - style (string) #optional font style
     - stretch (string) #optional font stretch
     = (object) the font object
     > Usage
     | paper.print(100, 100, 'Test string', paper.getFont('Times', 800), 30);
    */
    paperproto.getFont = function (family, weight, style, stretch) {
        stretch = stretch || 'normal';
        style = style || 'normal';
        weight = +weight || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }
        [weight] || 400;
        if (!R.fonts) {
            return;
        }
        var font = R.fonts[family];
        if (!font) {
            var name = new RegExp('(^|\\s)' + family.replace(/[^\w\d\s+!~.:_-]/g, E) + '(\\s|$)', 'i');
            for (var fontName in R.fonts) {
                if (R.fonts[has](fontName)) {
                    if (name.test(fontName)) {
                        font = R.fonts[fontName];
                        break;
                    }
                }
            }
        }
        var thefont;
        if (font) {
            for (var i = 0, ii = font.length; i < ii; i++) {
                thefont = font[i];
                if (thefont.face['font-weight'] == weight && (thefont.face['font-style'] == style || !thefont.face['font-style']) && thefont.face['font-stretch'] == stretch) {
                    break;
                }
            }
        }
        return thefont;
    };

    /*
     * Paper.print
     [ method ]
     **
     * Creates path that represent given text written using given font at given position with given size.
     * Result of the method is path element that contains whole text as a separate path.
     **
     > Parameters
     **
     - x (number) x position of the text
     - y (number) y position of the text
     - string (string) text to print
     - font (object) font object, see @Paper.getFont
     - size (number) #optional size of the font, default is `16`
     - origin (string) #optional could be `'baseline'` or `'middle'`, default is `'middle'`
     - letter_spacing (number) #optional number in range `-1..1`, default is `0`
     = (object) resulting path element, which consist of all letters
     > Usage
     | var txt = r.print(10, 50, 'print', r.getFont('Museo'), 30).attr({fill: '#fff'});
    */
    paperproto.print = function (x, y, string, font, size, origin, letterSpacing) {
        origin = origin || 'middle'; // baseline|middle
        letterSpacing = mmax(mmin(letterSpacing || 0, 1), -1);
        var letters = Str(string)[split](E),
            shift = 0,
            notfirst = 0,
            path = E,
            scale;
        R.is(font, string) && (font = this.getFont(font));
        if (font) {
            scale = (size || 16) / font.face['units-per-em'];
            var bb = font.face.bbox[split](separator),
                top = +bb[0],
                lineHeight = bb[3] - bb[1],
                shifty = 0,
                height = + bb[1] + (origin == 'baseline' ? lineHeight + ( + font.face.descent) : lineHeight / 2);
            for (var i = 0, ii = letters.length; i < ii; i++) {
                if (letters[i] == '\n') {
                    shift = 0;
                    curr = 0;
                    notfirst = 0;
                    shifty += lineHeight;
                } else {
                    var prev = notfirst && font.glyphs[letters[i - 1]] || {},
                    curr = font.glyphs[letters[i]];
                    shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + (font.w * letterSpacing) : 0;
                    notfirst = 1;
                }
                if (curr && curr.d) {
                    path += R.transformPath(curr.d, ['t', shift * scale, shifty * scale, 's', scale, scale, top, height, 't', (x - top) / scale, (y - height) / scale]);
                }
            }
        }
        return this.path(path).attr({
            fill: '#000',
            stroke: 'none'
        });
    };

    /*
     * Paper.add
     [ method ]
     **
     * Imports elements in JSON array in format `{type: type, <attributes>}`
     **
     > Parameters
     **
     - json (array)
     = (object) resulting set of imported elements
     > Usage
     | paper.add([
     |     {
     |         type: 'circle',
     |         cx: 10,
     |         cy: 10,
     |         r: 5
     |     },
     |     {
     |         type: 'rect',
     |         x: 10,
     |         y: 10,
     |         width: 10,
     |         height: 10,
     |         fill: '#fc0'
     |     }
     | ]);
    */
    paperproto.add = function (json) {
        if (R.is(json, 'array')) {
            var res = this.set(),
                i = 0,
                ii = json.length,
                j;
            for (; i < ii; i++) {
                j = json[i] || {};
                elements[has](j.type) && res.push(this[j.type]().attr(j));
            }
        }
        return res;
    };
    /*
     * Paper.getElementByPoint
     [ method ]
     **
     * Returns you topmost element under given point.
     **
     = (object) Raphaël element object
     > Parameters
     **
     - x (number) x coordinate from the top left corner of the window
     - y (number) y coordinate from the top left corner of the window
     > Usage
     | paper.getElementByPoint(mouseX, mouseY).attr({stroke: '#f00'});
    */
    paperproto.getElementByPoint = function (x, y) {
        var paper = this,
            svg = paper.canvas,
            target = g.doc.elementFromPoint(x, y);
        if (g.win.opera && target.tagName == 'svg') {
            var so = getOffset(svg),
                sr = svg.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = svg.getIntersectionList(sr, null);
            if (hits.length) {
                target = hits[hits.length - 1];
            }
        }
        if (!target) {
            return null;
        }
        while (target.parentNode && target != svg.parentNode && !target.raphael) {
            target = target.parentNode;
        }
        target == paper.canvas.parentNode && (target = svg);
        target = target && target.raphael ? paper.getById(target.raphaelid) : null;
        return target;
    };

    /*
     * Paper.getElementsByBBox
     [ method ]
     **
     * Returns set of elements that have an intersecting bounding box
     **
     > Parameters
     **
     - bbox (object) bbox to check with
     = (object) @Set
     */
    paperproto.getElementsByBBox = function (bbox) {
        var set = this.set();
        this.forEach(function (el) {
            if (R.isBBoxIntersect(el.getBBox(), bbox)) {
                set.push(el);
            }
        });
        return set;
    };

    /*
     * Paper.forEach
     [ method ]
     **
     * Executes given function for each element on the paper
     *
     * If callback function returns `false` it will stop loop running.
     **
     > Parameters
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Paper object
     > Usage
     | paper.forEach(function (el) {
     |     el.attr({ stroke: 'blue' });
     | });
    */
    paperproto.forEach = function (callback, thisArg) {
        var bot = this.bottom;
        while (bot) {
            if (callback.call(thisArg, bot) === false) {
                return this;
            }
            bot = bot.next;
        }
        return this;
    };

    /*
     * Paper.getElementsByPoint
     [ method ]
     **
     * Returns set of elements that have common point inside
     **
     > Parameters
     **
     - x (number) x coordinate of the point
     - y (number) y coordinate of the point
     = (object) @Set
    */
    paperproto.getElementsByPoint = function (x, y) {
        var set = this.set();
        this.forEach(function (el) {
            if (el.isPointInside(x, y)) {
                set.push(el);
            }
        });
        return set;
    };

    /*
     * Paper.set
     [ method ]
     **
     * Creates array-like object to keep and operate several elements at once.
     * Warning: it doesn’t create any elements for itself in the page, it just groups existing elements.
     * Sets act as pseudo elements — all methods available to an element can be used on a set.
     = (object) array-like object that represents set of elements
     **
     > Usage
     | var st = paper.set();
     | st.push(
     |     paper.circle(10, 10, 5),
     |     paper.circle(30, 10, 5)
     | );
     | st.attr({fill: 'red'}); // changes the fill of both circles
    */
    paperproto.set = function (itemsArray) {
        for (var i = 0, len = arguments.length, args = new Array(len); i < len; i++) {
            args[i] = arguments[i];
        }
        !R.is(itemsArray, 'array') && (itemsArray = Array.prototype.splice.call(args, 0, args.length));
        var out = new Set(itemsArray);
        this.__set__ && this.__set__.push(out);
        return out;
    };

    /*
     * Paper.setStart
     [ method ]
     **
     * Creates @Paper.set. All elements that will be created after calling this method and before calling
     * @Paper.setFinish will be added to the set.
     **
     > Usage
     | paper.setStart();
     | paper.circle(10, 10, 5),
     | paper.circle(30, 10, 5)
     | var st = paper.setFinish();
     | st.attr({fill: 'red'}); // changes the fill of both circles
    */
    paperproto.setStart = function (set) {
        this.__set__ = set || this.set();
    };

    /*
     * Paper.setFinish
     [ method ]
     **
     * See @Paper.setStart. This method finishes catching and returns resulting set.
     **
     = (object) set
    */
    paperproto.setFinish = function (set) {
        var out = this.__set__;
        delete this.__set__;
        return out;
    };

    /*
     * Element.isPointInside
     [ method ]
     **
     * Determine if given point is inside this element’s shape
     **
     > Parameters
     **
     - x (number) x coordinate of the point
     - y (number) y coordinate of the point
     = (boolean) `true` if point inside the shape
    */
    elproto.isPointInside = function (x, y) {
        var rp = this.realPath = this.realPath || getPath[this.type](this),
            tr;
        return R.isPointInsidePath(((tr = this.attr('transform')) &&
            tr.length && R.transformPath(rp, tr)) || rp, x, y);
    };

    /*
     * Element.glow
     [ method ]
     **
     * Return set of elements that create glow-like effect around given element. See @Paper.set.
     *
     * Note: Glow is not connected to the element. If you change element attributes it won’t adjust itself.
     **
     > Parameters
     **
     - glow (object) #optional parameters object with all properties optional:
     o {
     o     width (number) size of the glow, default is `10`
     o     fill (boolean) will it be filled, default is `false`
     o     opacity (number) opacity, default is `0.5`
     o     offsetx (number) horizontal offset, default is `0`
     o     offsety (number) vertical offset, default is `0`
     o     color (string) glow colour, default is `black`
     o }
     = (object) @Paper.set of elements that represents glow
    */
    elproto.glow = function (glow) {
        if (this.type == 'text') {
            return null;
        }
        glow = glow || {};
        var s = {
                width: (glow.width || 10) + (+this.attr('stroke-width') || 1),
                fill: glow.fill || false,
                opacity: glow.opacity || 0.5,
                offsetx: glow.offsetx || 0,
                offsety: glow.offsety || 0,
                color: glow.color || '#000'
            },
            c = s.width / 2,
            r = this.paper,
            out = r.set(),
            path = this.realPath || getPath[this.type](this);
        path = this.matrix ? R.mapPath(path, this.matrix) : path;
        for (var i = 1; i < c + 1; i++) {
            out.push(r.path(path).attr({
                stroke: s.color,
                fill: s.fill ? s.color : 'none',
                'stroke-linejoin': 'round',
                'stroke-linecap': 'round',
                'stroke-width': +(s.width / c * i).toFixed(3),
                opacity: +(s.opacity / c).toFixed(3)
            }));
        }
        return out.insertBefore(this).translate(s.offsetx, s.offsety);
    };

    /*
     * Element.setTime
     [ method ]
     **
     * Sets the status of animation of the element in milliseconds. Similar to @Element.status method.
     **
     > Parameters
     **
     - anim (object) animation object
     - value (number) number of milliseconds from the beginning of the animation
     **
     = (object) original element if `value` is specified
     * Note, that during animation following events are triggered:
     *
     * On each animation frame event `anim.frame.<id>`, on start `anim.start.<id>` and on end `anim.finish.<id>`.
    */
    elproto.setTime = function (anim, value) {
        if (anim && value != null) {
            this.status(anim, mmin(value, anim.ms) / anim.ms);
        }
        return this;
    };

    /*
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set.
     = (object) original element
    */
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };

    /*
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it.
     = (object) element
    */
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };

    /*
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set.
     *
     * If function returns `false` it will stop loop running.
     **
     > Parameters
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    */
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    for (var method in elproto) {
        if (elproto[has](method)) {
            setproto[method] = (function (methodname) {
                return function () {
                    for (var i = 0, len = arguments.length, args = new Array(len); i < len; i++) {
                        args[i] = arguments[i];
                    }        
                    return this.forEach(function (el) {
                        el[methodname][apply](el, args);
                    });
                };
            })(method);
        }
    }
    setproto.attr = function (name, value) {
        if (name && R.is(name, array) && R.is(name[0], object)) {
            for (var j = 0, jj = name.length; j < jj; j++) {
                this.items[j].attr(name[j]);
            }
        } else {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
                this.items[i].attr(name, value);
            }
        }
        return this;
    };

    /*
     * Set.clear
     [ method ]
     **
     * Removeds all elements from the set
    */
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };

    /*
     * Set.splice
     [ method ]
     **
     * Removes given element from the set
     **
     > Parameters
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    */
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, isNaN(count) && this.length || count));
        var tail = [],
            todel = [],
            args = [],
            arglen,
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };

    /*
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     > Parameters
     **
     - element (object) element to remove
     = (boolean) `true` if object was found & removed from the set
    */
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (this[i] == el) {
                this.splice(i, 1);
                return true;
            }
        }
    };
    setproto.animate = function (params, ms, easing, callback) {
        (R.is(easing, 'function') || !easing) && (callback = easing || null);
        var len = this.items.length,
            i = len,
            item,
            anim,
            set = this,
            collector;
        if (!len) {
            return this;
        }
        callback && (collector = function() {
            !--len && callback.call(set);
        });
        easing = R.is(easing, string) ? easing : collector;
        anim = R.animation(params, ms, easing, collector);
        item = this.items[--i].animate(anim);
        while (i--) {
            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
        }
        return this;
    };
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) {
            if (!this.items[i].removed) {
                var box = this.items[i].getBBox();
                x.push(box.x);
                y.push(box.y);
                x2.push(box.x + box.width);
                y2.push(box.y + box.height);
            }
        }
        x = mmin[apply](0, x);
        y = mmin[apply](0, y);
        x2 = mmax[apply](0, x2);
        y2 = mmax[apply](0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y
        };
    };
    setproto.clone = function (s) {
        s = new Set();
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return 'Rapha\xebl\u2018s set';
    };

    setproto.glow = function (glowConfig) {
        var ret = this.paper.set();
        this.forEach(function(shape, index) {
            var g = shape.glow(glowConfig);
            if (g != null) {
                g.forEach(function (shape2, index2) {
                    ret.push(shape2);
                });
            }
        });
        return ret;
    };
}
