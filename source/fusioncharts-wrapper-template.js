/**
 * @fileOverview This file serves as a template for building FusionCharts module loader compatible RedRaphel script.
 * The Grunt build system with distribution named "fusioncharts" uses this template to wrap RedRaphael within.
 *
 * @suppress {nonStandardJsDocs|es5Strict}
 */
/**
 * FusionCharts module for RedRaphael integration
 * @private
 * @module fusioncharts.redraphael
 * @requires fusioncharts.renderer.javascript.lib
 */
window.FusionCharts && window.FusionCharts.register('module', ['private', 'modules.renderer.js-raphael', function () {
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