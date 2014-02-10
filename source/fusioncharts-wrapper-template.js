/**
 * FusionCharts module for RedRaphael integration
 * @private
 * @module fusioncharts.vendor.redraphael
 * @requires fusioncharts.renderer.javascript.lib
 */
window.FusionCharts && window.FusionCharts.register('module', ['private', 'vendor.redraphael', function () {
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
    lib.Raphael.desc = '';
    if (someRaphael && someRaphael !== RedRaphael) {
        window.Raphael = someRaphael;
    }
    else if (window.Raphael === RedRaphael) {
        window.Raphael = undefined;
    }

}]);