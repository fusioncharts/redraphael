/**!
 * RedRaphael Triangle shape definition
 */
/* global window */
window.Raphael && (window.Raphael.define && function (R) {
    var win = R._g.win,

        M = 'M',
        L = 'L',
        Z = 'Z',
        isNaN = win.isNaN;

    R.define({
        // Name of the component goes here.
        name: 'trianglepath',

        // Constructor of the component goes here. Must be same name as the name of the component.
        trianglepath: function () { // args: [x1, y1, x2, y2, x3, y3]
            var paper = this,
                args = arguments,
                group = R._lastArgIfGroup(args);

            return paper.path([M, args[0], args[1],
                L, args[2], args[3], args[4], args[5], Z
            ], group);
        },

        ca: {
            trianglepath: function (x1, y1, x2, y2, x3, y3) {
                return {
                    path: [M, x1, y1, L, x2, y2, x3, y3, Z]
                };
            }
        }
    });
})(window.Raphael);