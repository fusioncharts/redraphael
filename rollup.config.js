

import babel from 'rollup-plugin-babel';
// import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';
// import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from "rollup-plugin-commonjs";
// import nodeResolve from "rollup-plugin-node-resolve";


var babelOptions = {
	runtimeHelpers: false,
	externalHelpers: false,
	exclude: 'node_modules/**', // only transpile our source code
  "plugins": [
    ["transform-es3-member-expression-literals"],
    ["transform-es3-property-literals"],
    ["transform-proto-to-assign"],
    ["transform-runtime", {
      "helpers": false,
      "polyfill": true,
      "regenerator": false
    }]
  ],
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["> 0.2%"]
      },
      "modules": false,
      "loose": true
    }]
  ]
}


export default {
  	moduleName: 'RedRaphael',
    // entry:      ['develop/src/fusioncharts.js', 'develop/src/fusioncharts.charts.js', 'develop/src/fusioncharts.widgets.js'],
  	entry:      'source/index.js' ,
    dest:       'package/raphael.js',
  	// sourceMap:  true,
  	format:     'cjs',
  	plugins:    [
		  json(),
    	resolve(),
    	babel(babelOptions),
    	commonjs(),
      // multiEntry(),
    	// nodeResolve()
  	],
  	// external: ['window', 'document', 'body', 'console']
};

/*












import json from 'rollup-plugin-json';
// import multiEntry from 'rollup-plugin-multi-entry';
import commonjs from "rollup-plugin-commonjs";
import babel from 'rollup-plugin-babel';

var babelOptions = {
	runtimeHelpers: false,
	externalHelpers: false,
	exclude: 'node_modules/**', // only transpile our source code
  "plugins": [
    ["transform-es3-member-expression-literals"],
    ["transform-es3-property-literals"],
    ["transform-proto-to-assign"],
    ["transform-runtime", {
      "helpers": false,
      "polyfill": true,
      "regenerator": false
    }]
  ],
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["> 0.2%"]
      },
      "modules": false,
      "loose": true
    }]
  ]
}

module.exports = {
  moduleName: 'RedRaphael',
  // entry:      ['develop/src/fusioncharts.js', 'develop/src/fusioncharts.charts.js', 'develop/src/fusioncharts.widgets.js'],
  entry:      'source/index.js',
  dest:       'package/raphael.js',
  sourceMap:  true,
  format:     'cjs',
  plugins:    [
    json(),
    commonjs(),
    babel(babelOptions),
    // commonjs({
    //     include: 'redraphael/**',
    //     namedExports: {
    //         'develop/src/fusioncharts.charts.js': [ 'Charts' ],
    //         'develop/vendors/redraphael/lib/index.js': [ 'Provider' ],
    //     }
    // }),
    // multiEntry()
  ],
  external: ['window', 'document', 'body', 'console']
};
*/