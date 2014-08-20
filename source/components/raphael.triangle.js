/**!
 * RedRaphael Triangle shape definition
 */
/* global window */
window.Raphael && (window.Raphael.define && function (R) {
    var win = R._g.win;

    R.define({
        // Name of the component goes here.
        name: 'triangle',

        // Constructor of the component goes here. Must be same name as the name of the component.
        triangle: function () { // args: [x, y, w, h, zw, zh]
            var paper = this,
                args = arguments,
                group = R._lastArgIfGroup(args);

            return paper.path(['M', '0', '0', 'L', args[0] || 0, args[1] || 0], group);

        },

        ca: {
            
        }
    });
})(window.Raphael);
