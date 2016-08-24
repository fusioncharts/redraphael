/**
 * FusionCharts module for RedRaphael integration
 * @private
 * @module fusioncharts.vendor.redraphael
 * @requires fusioncharts.renderer.javascript.lib
 */
FusionCharts && FusionCharts.register('module', ['private', 'vendor.redraphael', function () {
    var global = this,
        lib = global.hcLib,
        win = global.window,
        someRaphael = win.Raphael,
        checkCyclicRef = lib.checkCyclicRef,
        graphics = lib.graphics,
        dehashify = lib.dehashify,
        hashify = lib.hashify,
        rgbToHex = graphics.RGBtoHex,
        eve,
        RedRaphael,
        optOutModulePattern = true;

    (function (_window) {

    // (function () {


@REDRAPHAEL_CODE


    // })();


    // Restore old Raphael or remove it from global scope
    lib.Raphael = RedRaphael;
    lib.Raphael.desc = '';
    if (someRaphael && someRaphael !== RedRaphael) {
        _window.Raphael = someRaphael;
    }
    else if (_window.Raphael === RedRaphael) {
        _window.Raphael = undefined;
    }


    })(win || window);
}]);
