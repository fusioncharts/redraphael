/*jslint forin: true, regexp: true, todo: true, white: false, browser: true,
 sloppy: true, white: true, eqeq: false, newcap: true, nomen: true */
/*global window: true, FusionCharts */

/**
 * Raphael 2.1.0 - JavaScript Vector Library
 * Modified and rechristened as "Red Raphael" by FusionCharts Technologies.
 *
 * Copyright (c) 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)
 * Copyright (c) 2008-2012 Sencha Labs (http://sencha.com)
 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
 *
 * Eve 0.3.4 - JavaScript Events Library
 * Copyright (c) 2008-2011 Dmitry Baranovskiy (http://dmitry.baranovskiy.com/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

FusionCharts(['private', 'modules.renderer.js-raphael', function () {
    var global = this,
    lib = global.hcLib,
    eve,
    someRaphael = window.Raphael,
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