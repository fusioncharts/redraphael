/**!
 * RedRaphael PolyPath shape definition
 */
/* global window */
window.Raphael && (window.Raphael.define && function (R) {
    var win = R._g.win,
        math = win.Math,
        mathAtan2 = math.atan2,

        CUBEPATH = "cubepath",
        PATH = "path",
        NONE = "none",
        FILL = "fill",
        HYP = "-",
        M = "M",
        l = "l",
        Z = "Z",

        shapeDefaultAttrs = {
            "stroke-linejoin": "round",
            "shape-rendering": "precision",
            "stroke": NONE
        };

    R.define({
        name: CUBEPATH,

        cubepath: function () { // args: [x, y, w, h, zw, zh]
            var paper = this,
                args = arguments,
                group = R._lastArgIfGroup(args),
                face;

            face = paper.path(group).attr(shapeDefaultAttrs);
            face._.cubetop = paper.path(group).attr(shapeDefaultAttrs).follow(face, undefined, "before");
            face._.cubeside = paper.path(group).attr(shapeDefaultAttrs).follow(face, undefined, "before");

            return face.attr(CUBEPATH, [args[0] || 0,
                args[1] || 0,
                args[2] || 0,
                args[3] || 0,
                args[4] || 0,
                args[5] || 0]);
        },

        ca: {
            cubepath: function (x, y, width, height, zw, zh) {
                var o = this,
                    t = o._.cubetop,
                    s = o._.cubeside,
                    negWidth = -width,
                    negHeight = -height;

                // The issue of pixel wide gap found between adjacent faces when input params are not all intezers, is
                // solved by adding extra portion in top and side faces. The side face is extended to the left with a
                // pixel wide rectange, whole top end is cut diagonally to avoid overlapping stoke effect. Like wise,
                // the top face is extended below with a pixel height rectangle whose left end is cut diagonally for the
                // same rason as above. Motive was to keep the bounding box intact as intended.
                o.attr(PATH, [M, x + width, y, l, 0, height, negWidth, 0, 0, negHeight, Z]);
                t.attr(PATH, [M, x, y, l, 1, 1, width - 1, 0, 0, -1, zw, -zh, negWidth, 0, Z]);
                s.attr(PATH, [M, x + width - 1, y + 1, l, 0, height - 1, 1, 0, zw, -zh, 0, negHeight, -zw, zh]);

                return false;
            },

            x: function (value) {
                var attr = this.attr(CUBEPATH);
                this.attr(CUBEPATH, (attr[0] = value, attr));
                return false;
            },

            y: function (value) {
                var attr = this.attr(CUBEPATH);
                this.attr(CUBEPATH, (attr[1] = value, attr));
                return false;
            },

            width: function (value) {
                var attr = this.attr(CUBEPATH);
                this.attr(CUBEPATH, (attr[2] = value, attr));
                return false;
            },

            height: function (value) {
                var attr = this.attr(CUBEPATH);
                this.attr(CUBEPATH, (attr[3] = value, attr));
                return false;
            },

            zw: function (value) {
                var attr = this.attr(CUBEPATH);
                this.attr(CUBEPATH, (attr[4] = value, attr));
                return false;
            },

            zh: function (value) {
                var attr = this.attr(CUBEPATH);
                this.attr(CUBEPATH, (attr[5] = value, attr));
                return false;
            },

            "stroke-linejoin": function () {
                // We force the linejoin to always be round. Otherwise, the cube edges will look horrible.
                return {
                    "stroke-linejoin": "round"
                };
            },

            "drop-shadow": function (dx, dy, spread, color) {
                var o = this,
                    top  = o._.cubetop,
                    side = o._.cubeside;

                // Only allow filter based shadow.
                if (o.dropshadow) {
                    top.dropshadow(dx, -dy, spread, color);
                    side.dropshadow(dx, -dy, spread, color);
                }

                return false;
            },

            "fill": function (color, nogradient) {
                var o = this,
                    top  = o._.cubetop,
                    side = o._.cubeside,
                    attr = o.attr(CUBEPATH),
                    width = attr[2],
                    zw = attr[4],
                    zh = attr[5],
                    rgba;

                color = R.color(color);

                if (nogradient) {
                    o.attr(FILL, color);
                    top.attr(FILL, R.tintshade(color, -0.78).rgba);
                    side.attr(FILL, R.tintshade(color, -0.65).rgba);
                }
                else {
                    // Since the color has been already calculated in object form, we manually recalculate the rgba here
                    // since re-sending object to Raphael"s tintshade can cause it to return stale result from its cache.
                    rgba = ("opacity" in color) ?
                        ("rgba(" + [color.r, color.g, color.b, color.opacity] + ")") :
                        ("rgb(" +[color.r, color.g, color.b] + ")");

                    o.attr(FILL, [270, R.tintshade(rgba, 0.55).rgba, R.tintshade(rgba, -0.65).rgba].join(HYP));
                    side.attr(FILL, [270, R.tintshade(rgba, -0.75).rgba, R.tintshade(rgba, -0.35).rgba].join(HYP));
                    top.attr(FILL, [45 + R.deg(mathAtan2(zh, zw + width)), R.tintshade(rgba, -0.78).rgba,
                        R.tintshade(rgba, 0.22).rgba].join(HYP));
                    /* @note
                    // This is the gradient calculation mapping that accounts for
                    // the skew of the top face.
                    o.attr(FILL, [285, R.tintshade(rgba, 0.55).rgba,
                        R.tintshade(rgba, -0.65).rgba].join("-"));
                    side.attr(FILL, [50 + R.deg(mathAtan2(height + zh, zw)),
                        R.tintshade(rgba, -0.45).rgba,
                        R.tintshade(rgba, -0.75).rgba].join("-"));
                    top.attr(FILL, [R.deg(mathAtan2(zh, zw + width)),
                        R.tintshade(rgba, -0.85).rgba,
                        R.tintshade(rgba, 0.35).rgba].join("-"));
                    */
                }

                // We return false so that the attribute is not applied to the composite shape's leading element (the
                // front face.)
                return false;
            }
        }
    });
})(window.Raphael);
