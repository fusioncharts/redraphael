/**!
 * RedRaphael Triangle shape definition
 */
/* global window */
window.Raphael && (window.Raphael.define && function (R) {
    var win = R._g.win,

        M = 'M',
        L = 'L',
        Z = 'Z',
        Q = 'Q',

        sqrt = win.Math.sqrt,
        pow = win.Math.pow,
        acos = win.Math.acos,
        tan = win.Math.tan,

        p2pdistance = R._cacher(function (x1, y1, x2, y2) {
            // Returns distance between two points
            return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
        }),

        pointAtLength = R._cacher(function (x1, y1, x2, y2, d) {
            /* Returns the coordinates of the point at distance 'd' from point (x1, y1)
             * on the line between point (x1, y1) and point (x2, y2).
             */

            // Calculate vectors along path
            var vx = x2 - x1,
                vy = y2 - y1,
                l, px, py;

            // Calculate total length of the path
            l = p2pdistance(x1, y1, x2, y2);

            // Normalize the vectors
            vx /= l;
            vy /= l;

            // Calculate required point coordinates
            px = x1 + vx * d;
            py = y1 + vy * d;

            return {
                x: px,
                y: py
            };
        });

    R.define({
        // Name of the component goes here.
        name: 'trianglepath',

        // Constructor of the component goes here. Must be same name as the name of the component.
        trianglepath: function () { // args: [x1, y1, x2, y2, x3, y3, r]
            var paper = this,
                args = arguments,
                group = R._lastArgIfGroup(args),
                face = paper.path(group);

            return face.attr("trianglepath", [
                args[0], args[1],
                args[2], args[3],
                args[4], args[5], args[6]
            ]);
        },

        fn: {
            sides: function () {
                // Use p2pdistance library function to compute sides of a triangle.
                var points = this._trianglePathAttr;
                return [
                    p2pdistance(points[0], points[1], points[2], points[3]), // p1, p2
                    p2pdistance(points[2], points[3], points[4], points[5]), // p2, p3
                    p2pdistance(points[4], points[5], points[0], points[1])  // p3, p1
                ];
            },

            enclosedAngles: function () {
                // Returns the three angles of a triangle formed by the given sides
                var edges = this._sides;
                return [
                    acos((pow(edges[0], 2) + pow(edges[2], 2) - pow(edges[1], 2)) / (2 * edges[0] * edges[2])),
                    acos((pow(edges[0], 2) + pow(edges[1], 2) - pow(edges[2], 2)) / (2 * edges[0] * edges[1])),
                    acos((pow(edges[2], 2) + pow(edges[1], 2) - pow(edges[0], 2)) / (2 * edges[2] * edges[1]))
                ];
            }
        },

        ca: {
            trianglepath: function (x1, y1, x2, y2, x3, y3, r) {
                /* Create the triangle path with the provided vertices.
                 * Make rounded triangle corners if radius is provided. */
                if (r) {
                    // Store arguments in trianglepath element
                    this._trianglePathAttr = arguments;

                    // Calculate length of all sides of the triangle
                    this._sides = this.sides();

                    // Get all the angles of the triangle
                    var angles = this.enclosedAngles(),
                        curveDistance,
                        curvePoints;

                    // Get distance of points of curves from corresponding vertices
                    curveDistance = [
                        r / tan(angles[0] / 2),
                        r / tan(angles[1] / 2),
                        r / tan(angles[2] / 2)
                    ];

                    // Get coordinates of the points of curve on the triangle
                    curvePoints = [
                        pointAtLength(x1, y1, x3, y3, curveDistance[0]),
                        pointAtLength(x1, y1, x2, y2, curveDistance[0]),

                        pointAtLength(x2, y2, x1, y1, curveDistance[1]),
                        pointAtLength(x2, y2, x3, y3, curveDistance[1]),

                        pointAtLength(x3, y3, x2, y2, curveDistance[2]),
                        pointAtLength(x3, y3, x1, y1, curveDistance[2])
                    ];

                    // Draw the triangle path with rounded corners
                    this.attr({
                        path: [
                            M, curvePoints[0].x, curvePoints[0].y, Q, x1, y1, curvePoints[1].x, curvePoints[1].y,
                            L, curvePoints[2].x, curvePoints[2].y, Q, x2, y2, curvePoints[3].x, curvePoints[3].y,
                            L, curvePoints[4].x, curvePoints[4].y, Q, x3, y3, curvePoints[5].x, curvePoints[5].y,
                            L, curvePoints[0].x, curvePoints[0].y
                        ]
                    });
                } else {
                    this.attr({
                        path: [M, x1, y1, L, x2, y2, x3, y3, Z]
                    });
                }
            }
        }
    });
})(window.Raphael);
