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
        isNaN = win.isNaN;

    R.define({
        // Name of the component goes here.
        name: 'trianglepath',

        // Constructor of the component goes here. Must be same name as the name of the component.
        trianglepath: function () { // args: [x1, y1, x2, y2, x3, y3, r]
            var paper = this,
                args = arguments,
                group = R._lastArgIfGroup(args);

            var face = paper.path(group);

            return face.attr("trianglepath", [
                args[0], args[1],
                args[2], args[3],
                args[4], args[5], args[6]
            ]);
        },

        fn: {
            sides: function (points) {
                // Method to return length of sides
                var triangle = this;
                return [
                    // x1, y1 and x2, y2
                    triangle.getDistance(points[0], points[1], points[2], points[3]),

                    // x2, y2 and x3, y3
                    triangle.getDistance(points[2], points[3], points[4], points[5]),

                    // x3, y3 and x1, y1
                    triangle.getDistance(points[4], points[5], points[0], points[1])
                ];
            },

            angles : function (sides) {
                var triangle = this;
                return [
                    this.getAngle(sides[0], sides[2], sides[1]),
                    this.getAngle(sides[0], sides[1], sides[2]),
                    this.getAngle(sides[2], sides[1], sides[0])
                ];
            },

            getDistance: function (x1, y1, x2, y2) {
                // Return distance betweem two points
                return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            },

            getAngle: function (a, b, c) {
                // Return angle enclosed by sides a and b
                return Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b));
            }
        },

        ca: {
            trianglepath: function (x1, y1, x2, y2, x3, y3, r) {
                /* Create the triangle path with the provided vertices.
                 * Make rounded triangle corners if radius is provided. */
                //console.log(this.angles(this.sides(arguments)));
                //console.log(this.attrs);
                if (r) {
                    var paper = this.paper;
                    var sideLengths = this.sides(arguments);
                    var angles = this.angles(sideLengths);
                    var curveDistance = [
                        r / Math.tan(angles[0]/2),
                        r / Math.tan(angles[1]/2),
                        r / Math.tan(angles[2]/2)
                    ];

                    // From here on, the code is, for lack of a better word, crappy.
                    // It needs modification.
                    var sideAC = paper.path([M, x1, y1, L, x3, y3]).hide();
                    var sideAB = paper.path([M, x1, y1, L, x2, y2]).hide();

                    var sideBA = paper.path([M, x2, y2, L, x1, y1]).hide();
                    var sideBC = paper.path([M, x2, y2, L, x3, y3]).hide();

                    var sideCB = paper.path([M, x3, y3, L, x2, y2]).hide();
                    var sideCA = paper.path([M, x3, y3, L, x1, y1]).hide();

                    var curvePoints = [
                        sideAC.getPointAtLength(curveDistance[0]),
                        sideAB.getPointAtLength(curveDistance[0]),

                        sideBA.getPointAtLength(curveDistance[1]),
                        sideBC.getPointAtLength(curveDistance[1]),

                        sideCB.getPointAtLength(curveDistance[2]),
                        sideCA.getPointAtLength(curveDistance[2])
                    ];

                    sideAC.remove();
                    sideAB.remove();

                    sideBA.remove();
                    sideBC.remove();

                    sideCB.remove();
                    sideCA.remove();

                    // Crappy code ends

                    // Draw the triangle path and curves
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
            },

            "rotate": function (deg, x, y) {
                /* Rotate the trianglepath about a given point. */
            },

            "drop-shadow": function (dx, dy, spread, color) {
                // Show a shadow effect for the trianglepath
            }
        }
    });
}) (window.Raphael);
