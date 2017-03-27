/*jslint forin: true, regexp: true, todo: true, white: false, browser: true,
 sloppy: true, white: true, eqeq: false, newcap: true, nomen: true */

/**!
 * RedRaphael PolyPath shape definition
 */
_window.Raphael && _window.Raphael.define && function (R) {
    var win = R._g.win,
        math = win.Math,
        mathPI = math.PI,
        mathCos = math.cos,
        mathSin = math.sin,
        toInt = win.parseInt,
        toFloat = win.parseFloat,
        M = "M",
        L = "L",
        A = "A",
        Z = "Z",
        POLYPATH = "polypath",
        polypathRadius;

    R.define({
        name: POLYPATH,

        // args: sides, cx, cy, r, angle, dip, group
        polypath: function () {
            return this.path(undefined, R._lastArgIfGroup(arguments));
        },

        ca: {
            polypath: function (sides, cx, cy, r, angle, dip) {
                var path, inangle, i, h;

                path = [];
                sides = toInt(sides, 10) || 0;
                cx = toFloat(cx) || 0;
                cy = toFloat(cy) || 0;
                r = toFloat(r) || 0;
                angle = angle === null || isNaN(angle) ? mathPI * 0.5 : R.rad(angle);
                dip = dip === null || isNaN(dip) ? 0 : toFloat(dip);

                if (sides > 2) {
                    inangle = 2 * mathPI / sides;

                    switch (dip) {
                        // polygon
                        case 0:
                            for (i = 0; i < sides; i++) {
                                path.push(L, cx + r * mathCos(-angle), cy + r * mathSin(-angle));
                                angle += inangle;
                            }
                            // we need to replace the first command to move. it was not
                            // done earlier and is done now to ease out the algorithm.
                            path[0] = M;
                            // close path at end
                            path.push(Z);
                            break;

                        // spoke
                        case 1:
                            for (i = 0; i < sides; i++) {
                                path.push(M, cx, cy, L, cx + r * mathCos(-angle), cy + r * mathSin(-angle));
                                angle += inangle;
                            }
                            break;

                        // star
                        default:
                            inangle *= 0.5;
                            // R cos(alpha) here is the radial distance of midpoint of two
                            // consecutive vertices.
                            h = r * mathCos(inangle) * (1 - dip);

                            for (i = 0; i < sides; i++) {
                                path.push(L, cx + r * mathCos(-angle), cy + r * mathSin(-angle));
                                angle += inangle;
                                path.push(L, cx + h * mathCos(-angle), cy + h * mathSin(-angle));
                                angle += inangle;
                            }
                            // we need to replace the first command to move. it was not
                            // done earlier and is done now to ease out the algorithm.
                            path[0] = M;
                            // close path at end
                            path.push(Z);
                            break;
                    }
                }
                // If 'sides' is less than three then draw a circle.
                else {
                        // In case r is zero, we need to avoid creating arcs so that VML
                        // does not get broken due to zero-radius arcs.
                        if (r === 0) {
                            path.push(M, cx, cy, L, cx, cy, Z);
                        } else {
                            path.push(M, cx - r, cy, A, r, r, 0, 0, 0, cx + r, cy, A, r, r, 0, 0, 0, cx - r, cy, Z);
                        }
                    }

                return {
                    path: path
                };
            },

            "polypath-sides": function (value) {
                var o = this,
                    attr = o.attrs.polypath;
                o.attr(POLYPATH, (attr[0] = value, attr));
                return false;
            },

            "polypath-cx": function (value) {
                var o = this,
                    attr = o.attrs.polypath;
                o.attr(POLYPATH, (attr[1] = value, attr));
                return false;
            },

            "polypath-cy": function (value) {
                var o = this,
                    attr = o.attrs.polypath;
                o.attr(POLYPATH, (attr[2] = value, attr));
                return false;
            },

            "polypath-radius": polypathRadius = function (value) {
                var o = this,
                    attr = o.attrs.polypath;
                o.attr(POLYPATH, (attr[3] = value, attr));
                return false;
            },
            r: polypathRadius,

            "polypath-angle": function (value) {
                var o = this,
                    attr = o.attrs.polypath;
                o.attr(POLYPATH, (attr[4] = value, attr));
                return false;
            },

            "polypath-dip": function (value) {
                var o = this,
                    attr = o.attrs.polypath;
                o.attr(POLYPATH, (attr[5] = value, attr));
                return false;
            }
        }
    });
}(_window.Raphael);