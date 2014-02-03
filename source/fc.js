/*jslint forin: true, regexp: true, todo: true, white: false, browser: true,
 sloppy: true, white: true, eqeq: false, newcap: true, nomen: true */
/*global window: true, FusionCharts */

/**
 * FusionCharts module for RedRaphael integration
 * @private
 * @module fusioncharts.redraphael
 * @requires fusioncharts.renderer.javascript.lib
 */
window.FusionCharts && window.FusionCharts.register(['private', 'modules.renderer.js-raphael', function () {
    var global = this,
    lib = global.hcLib,
    someRaphael = window.Raphael,
    eve,
    RedRaphael;


    (function () {


@REDRAPHAEL_CODE


    })();


    // Restore old Raphael or remove it from global scope
    lib.Raphael = RedRaphael;
    lib.Raphael.desc = "";
    if (someRaphael && someRaphael !== RedRaphael) {
        window.Raphael = someRaphael;
    }
    else if (window.Raphael === RedRaphael) {
        window.Raphael = undefined;
    }

}]);