(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RedRaphael", [], factory);
	else if(typeof exports === 'object')
		exports["RedRaphael"] = factory();
	else
		root["RedRaphael"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(32);
var toPrimitive = __webpack_require__(20);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(51);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cacher = exports.showRecursively = exports.loadRefImage = exports.dashedAttr2CSSMap = exports.getArrayCopy = exports.merge = undefined;

var _iterator = __webpack_require__(7);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; };

exports['default'] = function (obj1, obj2, skipUndef, shallow) {
    var item;
    // if none of the arguments are object then return back
    if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== objectStr && (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== objectStr) {
        return null;
    }

    if ((typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== objectStr || obj2 === null) {
        return obj1;
    }

    if (typeof obj1 === 'undefined') {
        obj1 = obj2 instanceof Array ? [] : {};
    }
    if (shallow) {
        // Copy all methods and properties of the object passed in parameter
        // to the object to which this function is attached.
        for (item in obj2) {
            obj1[item] = obj2[item];
        }
    } else {
        merge(obj1, obj2, skipUndef);
    }
    return obj1;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error', valid-typeof: 'off' */
var UNDEF = void 0,
    BLANK = '__blank',
    nullStr = '\u2400',
    E = '',
    arrayToStr = '[object Array]',
    objectToStr = '[object Object]',
    objectStr = 'object',

// Map of SVG attribute to CSS styles for all attributes that are in R._availableAttrs
// but fall through to the default case in R._setFillAndStroke.
dashedAttr2CSSMap = {
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'text-anchor': 'textAnchor',
    'font-weight': 'fontWeight',
    // 'stroke-linejoin': 'strokeLinejoin',
    // 'stroke-linecap': 'strokeLinecap',
    'letter-spacing': 'letterSpacing',
    // 'stroke-miterlimit': 'strokeMiterlimit',
    // 'stroke-opacity': 'strokeOpacity',
    'font-style': 'fontStyle'
},
    loadRefImage = function loadRefImage(element, attrs) {
    var src = attrs.src,
        RefImg = element._.RefImg;

    if (!RefImg) {
        RefImg = element._.RefImg = new Image();
    }

    if (attrs.src === undefined) {
        return;
    }
    RefImg.src = src;
    element._.RefImg = RefImg;
},

/**
 * Recursively shows the element and stores the visibilties of its parents
 * in a tree structure for future restoration.
 * @param {Element} el - Element which is to shown recursively
 * @return {Function} Function to restore the old visibility state.
 */
showRecursively = function showRecursively(el) {
    var origAttrTree = {},
        currentEl = el,
        currentNode = origAttrTree,
        fn = function fn() {
        var localEl = el,
            localNode = origAttrTree;
        while (localEl) {
            if (localNode._doHide) {
                localEl.hide();
            }
            localEl = localEl.parent;
            localNode = localNode.parent;
        }
    };
    while (currentEl) {
        if (currentEl.node && currentEl.node.style && currentEl.node.style.display === 'none') {
            currentEl.show();
            currentNode._doHide = true;
        }
        currentEl = currentEl.parent;
        currentNode.parent = {};
        currentNode = currentNode.parent;
    }
    return fn;
},
    checkCyclicRef = function checkCyclicRef(obj, parentArr) {
    var i = parentArr.length,
        bIndex = -1;

    while (i--) {
        if (obj === parentArr[i]) {
            bIndex = i;
            return bIndex;
        }
    }

    return bIndex;
},

// Returns a copy of a array
getArrayCopy = function getArrayCopy(array) {
    var i, len, arg;
    for (i = 0, len = array.length, arg = new Array(len); i < len; i++) {
        arg[i] = array[i];
    }
    return arg;
},
    merge = function merge(obj1, obj2, skipUndef, tgtArr, srcArr) {
    var item, srcVal, tgtVal, str, cRef;
    // check whether obj2 is an array
    // if array then iterate through it's index
    //* *** MOOTOOLS precution
    if (!srcArr) {
        tgtArr = [obj1];
        srcArr = [obj2];
    } else {
        tgtArr.push(obj1);
        srcArr.push(obj2);
    }

    if (obj2 instanceof Array) {
        for (item = 0; item < obj2.length; item += 1) {
            try {
                srcVal = obj1[item];
                tgtVal = obj2[item];
            } catch (e) {
                continue;
            }

            if ((typeof tgtVal === 'undefined' ? 'undefined' : _typeof(tgtVal)) !== objectStr) {
                if (!(skipUndef && tgtVal === UNDEF)) {
                    obj1[item] = tgtVal;
                }
            } else {
                if (srcVal === null || (typeof srcVal === 'undefined' ? 'undefined' : _typeof(srcVal)) !== objectStr) {
                    srcVal = obj1[item] = tgtVal instanceof Array ? [] : {};
                }
                cRef = checkCyclicRef(tgtVal, srcArr);
                if (cRef !== -1) {
                    srcVal = obj1[item] = tgtArr[cRef];
                } else {
                    merge(srcVal, tgtVal, skipUndef, tgtArr, srcArr);
                }
            }
        }
    } else {
        for (item in obj2) {
            try {
                srcVal = obj1[item];
                tgtVal = obj2[item];
            } catch (e) {
                continue;
            }

            if (tgtVal !== null && (typeof tgtVal === 'undefined' ? 'undefined' : _typeof(tgtVal)) === objectStr) {
                // Fix for issue BUG: FWXT-602
                // IE < 9 Object.prototype.toString.call(null) gives
                // '[object Object]' instead of '[object Null]'
                // that's why null value becomes Object in IE < 9
                str = Object.prototype.toString.call(tgtVal);
                if (str === objectToStr) {
                    if (srcVal === null || (typeof srcVal === 'undefined' ? 'undefined' : _typeof(srcVal)) !== objectStr) {
                        srcVal = obj1[item] = {};
                    }
                    cRef = checkCyclicRef(tgtVal, srcArr);
                    if (cRef !== -1) {
                        srcVal = obj1[item] = tgtArr[cRef];
                    } else {
                        merge(srcVal, tgtVal, skipUndef, tgtArr, srcArr);
                    }
                } else if (str === arrayToStr) {
                    if (srcVal === null || !(srcVal instanceof Array)) {
                        srcVal = obj1[item] = [];
                    }
                    cRef = checkCyclicRef(tgtVal, srcArr);
                    if (cRef !== -1) {
                        srcVal = obj1[item] = tgtArr[cRef];
                    } else {
                        merge(srcVal, tgtVal, skipUndef, tgtArr, srcArr);
                    }
                } else {
                    obj1[item] = tgtVal;
                }
            } else {
                obj1[item] = tgtVal;
            }
        }
    }
    return obj1;
};
/**
 * Function extend one object's properties with another one
 * @param    {Object} obj1 The object that will be extend
 * @param    {Objcet} obj2 The object, properties of which will be extended into the first one.
 * @param    {boolean} skipUndef Whether to skip the properties with undefined value
 * @param    {boolean} shallow whether it will be a shallow copy or deep copy
 * @return {Object} return the extend object
 */


/**
 * Function to cache a function's execution
 * @param {Function} f the original function
 * @param {Object} scope the scope on which the function will be called
 * @param {Function} postprocessor the method that will process the returned value
 * @param {string} key key by which the value will be stored
 * @param {number} maxCache The masimum length of cache
 * @param {Object} sharedCache methods might share a common cache if the key is veryLong to reduce the memory
 * @param {boolean} firstArgKey The first argument is the key and there is no other argument
 * @return {any} returns the return of the original method processed by the post processor if any
 */
var cacher = function cacher(f, scope, postprocessor, key, maxCache, sharedCache, firstArgKey) {
    // If it is not a shared cache then 
    var cache = sharedCache || {},
        count = 0;
    if (cache.__start === undefined) {
        cache.__start = null;
    }
    if (cache.__end === undefined) {
        cache.__end = null;
    }
    maxCache = maxCache || 1e3;
    key = key || 'item';
    /**
     * Function that replace the original method with the ability to cache
     * @param {string} arg1 the first and only argument
     * @return {any} Return the exact result executed by the original method
     */
    function cachedfunction(arg1) {
        var hashKey = firstArgKey ? arg1 : getArrayCopy(arguments).join(nullStr),

        // newEndStr,
        // newEnd,
        cur,

        // __next,
        // __prev,
        // nextStr,
        oldEnd,
            oldStart;

        hashKey = hashKey === E ? BLANK : hashKey;
        // /** **** Cache hit ******/
        // // If the following condition is true it is a cache hit.
        // if (hashKey in cache) {
        //     // cur is the element due to cache hit
        //     cur = cache[hashKey];
        //     nextStr = cur.__prev; // nextStr is the id of __prev element of cur.
        //     __next = cur.__next; // __next is the next node of the current hit node
        //     __prev = ((nextStr !== null) && cache[nextStr]) || null; // __prev is the previous node of the current hit node

        //     // Scope of error: Always check if the start and cur are not same node.
        //     // start and cur can be same when same node has back to back cache hits.
        //     if (cache.__start === cur) {
        //         // do nothing.
        //     } else if (cache[cache.__end] === cur) { // when the cur element is the last element of cache
        //         cache.__start.__prev = cache.__end;

        //         newEndStr = cache[cache.__end].__prev; // Take Id of the previous element of the cur element
        //         cache[newEndStr].__next = null; // Make it's next pointer null so that it doesn't point to cur

        //         cur.__prev = null; // taking cur to the front. make it's previous point to null, since there is no element ahead of it
        //         cur.__next = cache.__start; // make it's __next pointer to the present element at the front.

        //         cache.__start = cache[cache.__end]; // start pointer now point to the first element
        //         cache.__end = newEndStr; // end holds the ID of the last element
        //     } else { // when cur element is any element except start and end
        //         cache.__start.__prev = hashKey; // present start node's previous pointer should point to the cur node

        //         cur.__next = cache.__start; // cur node's __next pointer now points to the present start, making the present start to 2nd position
        //         cur.__prev = null; // since cur is in front, no one should be ahead of it. hence __prev = null

        //         __next.__prev = nextStr; // cur's __next node should point to cur's __prev node
        //         __prev.__next = __next; // cur's __prev node should point to cur's __next node

        //         cache.__start = cur; // start point to the cur node
        //     }
        // } else {
        //     /** ***** Cache miss *******/
        //     // Else, it is a cache miss.

        //     /* ----- deletion process begins here -----
        //         *  deletion takes place if cache is full 
        //         * */
        //     if (count > maxCache) {
        //         // Take the second last element
        //         newEndStr = cache[cache.__end].__prev;

        //         newEnd = cache[newEndStr];
        //         // __next pointer of the second last element should be deleted.(Beware! Not doing this step will lead to memory leak)
        //         newEnd.__next = null;

        //         // clear the pointers of the node to be deleted
        //         cache[cache.__end].__prev = null;

        //         // delete the node
        //         delete cache[cache.__end];
        //         // update the end pointer
        //         cache.__end = newEndStr;
        //         count--; // decrement the counter
        //     }

        //     /* ----- insertion process begins here ----- */
        //     // create a new node
        //     cache[hashKey] = {
        //         __prev: null,
        //         __next: cache.__start // newNode's __next pointer should point to the present start
        //     };
        //     // If there is a function then call the function to get the results
        //     f && (cache[hashKey][key] = postprocessor ? postprocessor(f.apply(scope, arguments)) : f.apply(scope, arguments));

        //     // If start is present(start can be null if it is first node), point start.__prev to the new object
        //     if (cache.__start !== null) {
        //         cache.__start.__prev = hashKey; // The present start node will fall second.
        //     }
        //     // finally assign start to the new node as start always points to the node at front
        //     cache.__start = cache[hashKey];
        //     // In case newNode is the first node of the cache end will also be null, but it should point to the start.
        //     (cache.__end === null) && (cache.__end = hashKey);
        //     count++;
        // }
        // cur is the element due to cache hit
        cur = cache[hashKey];
        if (!cur) {
            /** ***** Cache miss *******/
            /* ----- insertion process begins here ----- */
            // create a new node and finally assign the new node as start as it should always points to the node at front
            cur = cache[hashKey] = {};
            // If there is a function then call the function to get the results
            f && (cache[hashKey][key] = postprocessor ? postprocessor(f.apply(scope, arguments)) : f.apply(scope, arguments));
            // In case newNode is the first node of the cache end will also be null, but it should point to the start.
            cache.__end === null && (cache.__end = hashKey);
            // increase the counter
            count++;
            /* ----- deletion process begins here -----
            *  deletion takes place if cache is full 
            */
            if (count > maxCache && cache.__end) {
                oldEnd = cache[cache.__end];
                // __next pointer of the second last element should be deleted.
                cache[oldEnd.__prev].__next = null;
                // delete the node
                delete cache[cache.__end];
                // update the end pointer
                cache.__end = oldEnd.__prev;
                count--; // decrement the counter
            }
        } else {
            // hit then conect the prev and next of hit to each other
            if (cur.__prev) {
                cache[cur.__prev].__next = cur.__next;
                // Not the last element
                if (cur.__next) {
                    cur.__next.__prev = cur.__prev;
                } else {
                    // is the last element then update the end element
                    cache.__end = cur.__prev;
                }
            }
        }
        // this is not the start element then set it as the start element
        oldStart = cache.__start;
        if (oldStart !== cur) {
            cur.__prev = null;
            cur.__next = oldStart;
            oldStart && (oldStart.__prev = hashKey);
            cache.__start = cur;
        }
        return cache[hashKey][key];
    }
    return cachedfunction;
};

exports.merge = merge;
exports.getArrayCopy = getArrayCopy;
exports.dashedAttr2CSSMap = dashedAttr2CSSMap;
exports.loadRefImage = loadRefImage;
exports.showRecursively = showRecursively;
exports.cacher = cacher;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(12);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(11) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(1);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(12);
var LIBRARY = __webpack_require__(11);
var wksExt = __webpack_require__(27);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(11);
var $export = __webpack_require__(31);
var redefine = __webpack_require__(34);
var hide = __webpack_require__(2);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(49);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(56);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(12);
var ctx = __webpack_require__(47);
var hide = __webpack_require__(2);
var has = __webpack_require__(1);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(33)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(33)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(55).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(1);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(36);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _raphael = __webpack_require__(43);

var _raphael2 = _interopRequireDefault(_raphael);

var _raphael3 = __webpack_require__(72);

var _raphael4 = _interopRequireDefault(_raphael3);

var _raphael5 = __webpack_require__(73);

var _raphael6 = _interopRequireDefault(_raphael5);

var _raphael7 = __webpack_require__(74);

var _raphael8 = _interopRequireDefault(_raphael7);

var _raphael9 = __webpack_require__(75);

var _raphael10 = _interopRequireDefault(_raphael9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

(0, _raphael4['default'])(_raphael2['default']); // import Raphael from './index';

// export default Raphael

(0, _raphael6['default'])(_raphael2['default']);
(0, _raphael8['default'])(_raphael2['default']);
(0, _raphael10['default'])(_raphael2['default']);

exports['default'] = _raphael2['default'];
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _iterator = __webpack_require__(7);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; };

var _R$_availableAttrs; /**!
                         * RedRaphael 1.0.0 - JavaScript Vector Library
                         * Copyright (c) 2012-2013 FusionCharts, Inc. <http://www.fusioncharts.com>
                         *
                         * Raphael 2.1.0
                         * Copyright (c) 2008-2012 Dmitry Baranovskiy <http://raphaeljs.com>
                         * Copyright © 2008-2012 Sencha Labs <http://sencha.com>
                         *
                         * Licensed under the MIT license.
                         */

var _eve2 = __webpack_require__(71);

var _eve3 = _interopRequireDefault(_eve2);

var _raphael = __webpack_require__(10);

var _raphael2 = _interopRequireDefault(_raphael);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _win = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : null;

/*\
 * Raphael
 [ method ]
 **
 * Creates a canvas object on which to draw.
 * You must do this first, as all future calls to drawing methods
 * from this instance will be bound to this canvas.
 > Parameters
 **
 - container (HTMLElement|string) DOM element or its ID which is going to be a parent for drawing surface
 - width (number)
 - height (number)
 - callback (function) #optional callback function which is going to be executed in the context of newly created paper
 * or
 - x (number)
 - y (number)
 - width (number)
 - height (number)
 - callback (function) #optional callback function which is going to be executed in the context of newly created paper
 * or
 - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.
 - callback (function) #optional callback function which is going to be executed in the context of newly created paper
 * or
 - onReadyCallback (function) function that is going to be called on DOM ready event. You can also subscribe to this event via Eve’s “DOMLoad” event. In this case method returns `undefined`.
 = (object) @Paper
 > Usage
 | // Each of the following examples create a canvas
 | // that is 320px wide by 200px high.
 | // Canvas is created at the viewport’s 10,50 coordinate.
 | var paper = Raphael(10, 50, 320, 200);
 | // Canvas is created at the top left corner of the #notepad element
 | // (or its top right corner in dir="rtl" elements)
 | var paper = Raphael(document.getElementById("notepad"), 320, 200);
 | // Same as above
 | var paper = Raphael("notepad", 320, 200);
 | // Image dump
 | var set = Raphael(["notepad", 320, 200, {
 |     type: "rect",
 |     x: 10,
 |     y: 10,
 |     width: 25,
 |     height: 25,
 |     stroke: "#f00"
 | }, {
 |     type: "text",
 |     x: 30,
 |     y: 40,
 |     text: "Dump"
 | }]);
\*/
function R(first) {
    var args, arg, f;

    // Code commented as resources will now be referenced using relative URLs.
    // @todo Remove once we have ascertained that there are no issues in any environment.
    // if (R._url) { // Reinitialize URLs to be safe from pop state event
    //     R._url = (R._g && R._g.win || _window).location.href.replace(/#.*?$/, E);
    // }
    // If the URL is undefined only then initialize the URL with blank in order to support
    // both relative as well as absolute URLs
    // @todo Need to track the URL change and modify the URL for the gradient and other elements dynamically.
    if (R._url === undefined) {
        R._url = E;
    }

    if (R.is(first, FUNCTION)) {
        return loaded ? first() : _eve3['default'].on("raphael.DOMload", first);
    } else if (R.is(first, ARRAY)) {
        return R._engine.create[APPLY](R, first.splice(0, 3 + R.is(first[0], NU))).add(first);
    } else {
        arg = (0, _raphael.getArrayCopy)(arguments);
        args = Array.prototype.slice.call(arg, 0);
        if (R.is(args[args.length - 1], FUNCTION)) {
            f = args.pop();
            return loaded ? f.call(R._engine.create[APPLY](R, args)) : _eve3['default'].on("raphael.DOMload", function () {
                f.call(R._engine.create[APPLY](R, args));
            });
        } else {
            return R._engine.create[APPLY](R, arguments);
        }
    }
}

R.upgrade = "1.0.0";
R.version = "2.1.0";
R.eve = _eve3['default'];
// RedRaphael = R;

var loaded,
    UNDEF,
    undef,
    E = '',
    S = ' ',
    HAS = 'hasOwnProperty',
    APPLY = 'apply',
    CONCAT = 'concat',
    NU = 'number',
    STRING = 'string',
    ARRAY = 'array',
    OBJECT = 'object',
    FINITE = 'finite',
    SPLIT = 'split',
    NONE = 'none',
    BLACK = '#000',
    NULL = 'null',
    FUNCTION = 'function',
    AUTO = 'auto',
    NORMAL = 'normal',
    COMMA = ',',
    TOKEN1 = '$1',
    rCheckRegex = /R/i,
    isIE = /trident/i.test(_win.navigator.userAgent),
    paramCounts = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    r: 4,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
},
    arraySplice = Array.prototype.splice,
    hasPrototypeBug = function () {
    var a = function a() {/* no body */};
    return a.hasOwnProperty('prototype');
}(),
    g = {
    doc: _win.document,
    win: _win
},
    doc = g.doc,
    win = g.win,
    safePointerEventMapping = R.safePointerEventMapping = {
    mouseover: "pointerover",
    mousedown: "pointerdown",
    mousemove: "pointermove",
    mouseup: "pointerup",
    mouseout: "pointerout"
},
    navigator = win.navigator,
    supportsTouch = R.supportsTouch = 'ontouchstart' in doc || navigator.maxTouchPoints || navigator.msMaxTouchPoints,
    supportsPointer = R.supportsPointer = "onpointerover" in doc,
    isEdge = R.isEdge = /Edge/.test(navigator.userAgent),
    isIE11 = R.isIE11 = /trident/i.test(navigator.userAgent) && /rv:11/i.test(navigator.userAgent) && !win.opera,
    isIE10 = R.isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1,
    isFirefox = R.isFirefox = /Firefox/.test(navigator.userAgent),
    isWindows = R.isWindows = /Windows/.test(navigator.userAgent),
    mStr = 'm',
    lStr = 'l',
    strM = 'M',
    strL = 'L',
    __data,
    __params = [],
    charRegex = /[a-z]/i,
    pathStringBreakFn = function pathStringBreakFn(a, b, c) {
    var name = b.toLowerCase(),
        subArr = [],
        i = 0;
    __params.length = 0;
    c.replace(pathValues, function (a, b) {
        b && __params.push(+b);
    });
    if (name === 'r') {
        __data.push([b][CONCAT](__params));
    } else if (name === 'z') {
        __data.push([b]);
    } else if (__params.length >= paramCounts[name]) {
        while (i < __params.length) {
            if (i % paramCounts[name]) {
                // push the rest of the co-ordinates into the path sub array.
                subArr.push(__params[i]);
            } else {
                // if any path is previously parsed then push it
                subArr.length && __data.push(subArr) && (subArr = []);
                // new path array for the last known path command
                subArr.push(b, __params[i]);
            }
            i++;
        }
        // push the last parsed path sub array
        __data.push(subArr);
    }
},
    CustomAttributes = function CustomAttributes() {
    /*\
     * Raphael.ca
     [ property (object) ]
     **
     * Shortcut for @Raphael.customAttributes
    \*/
    /*\
     * Raphael.customAttributes
     [ property (object) ]
     **
     * If you have a set of attributes that you would like to represent
     * as a function of some number across all papers you can do it
     * easily with custom attributes:
     > Usage
     | Raphael.customAttributes.hue = function (num) {
     |     num = num % 1;
     |     return {fill: "hsb(" + num + ", 0.75, 1)"};
     | };
     | // Custom attribute “hue” will change fill
     | // to be given hue with fixed saturation and brightness.
     | // Now you can use it like this:
     | var c = paper.circle(10, 10, 10).attr({hue: .45});
     | // or even like this:
     | c.animate({hue: 1}, 1e3);
     |
     | // You could also create custom attribute
     | // with multiple parameters:
     | Raphael.customAttributes.hsb = function (h, s, b) {
     |     return {fill: "hsb(" + [h, s, b].join(COMMA) + ")"};
     | };
     | c.attr({hsb: "0.5 .8 1"});
     | c.animate({hsb: [1, 0, 0.5]}, 1e3);
    \*/
},
    caproto = R.ca = R.customAttributes = CustomAttributes.prototype,
    Paper = function Paper() {
    /*\
     * Paper.ca
     [ property (object) ]
     **
     * Shortcut for @Paper.customAttributes
    \*/
    /*\
     * Paper.customAttributes
     [ property (object) ]
     **
     * If you have a set of attributes that you would like to represent
     * as a function of some number you can do it easily with custom attributes:
     > Usage
     | paper.customAttributes.hue = function (num) {
     |     num = num % 1;
     |     return {fill: "hsb(" + num + ", 0.75, 1)"};
     | };
     | // Custom attribute “hue” will change fill
     | // to be given hue with fixed saturation and brightness.
     | // Now you can use it like this:
     | var c = paper.circle(10, 10, 10).attr({hue: .45});
     | // or even like this:
     | c.animate({hue: 1}, 1e3);
     |
     | // You could also create custom attribute
     | // with multiple parameters:
     | paper.customAttributes.hsb = function (h, s, b) {
     |     return {fill: "hsb(" + [h, s, b].join(COMMA) + ")"};
     | };
     | c.attr({hsb: "0.5 .8 1"});
     | c.animate({hsb: [1, 0, 0.5]}, 1e3);
    \*/
    this.ca = this.customAttributes = new CustomAttributes();
    this._CustomAttributes = function () {};
    this._CustomAttributes.prototype = this.ca;
    this._elementsById = {};
    this.id = R._oid++;
    (0, _eve3['default'])('raphael.new', this);
},


/*\
 * Raphael.fn
 [ property (object) ]
 **
 * You can add your own method to the canvas. For example if you want to draw a pie chart,
 * you can create your own pie chart function and ship it as a Raphaël plugin. To do this
 * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a
 * Raphaël instance is created, otherwise it will take no effect. Please note that the
 * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to
 * ensure any namespacing ensures proper context.
 > Usage
 | Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
 |     return this.path( ... );
 | };
 | // or create namespace
 | Raphael.fn.mystuff = {
 |     arrow: function () {…},
 |     star: function () {…},
 |     // etc…
 | };
 | var paper = Raphael(10, 10, 630, 480);
 | // then use it
 | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
 | paper.mystuff.arrow();
 | paper.mystuff.star();
\*/
paperproto = R.fn = Paper.prototype = R.prototype,


// Add new dragstart, dragmove and dragend events in order to support touch drag in both touch and hybrid devices
events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel dragstart dragmove dragend"[SPLIT](S),
    touchMap = {
    dragstart: "touchstart",
    dragmove: "touchmove",
    dragend: "touchend"
},
    Str = String,
    toFloat = win.parseFloat,
    toInt = win.parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    mathCos = math.cos,
    mathSin = math.sin,
    mathSqrt = math.sqrt,
    round = math.round,
    PI = math.PI,
    deg2rad = PI / 180,
    rad2deg = 180 / PI,
    lowerCase = Str.prototype.toLowerCase,
    upperCase = Str.prototype.toUpperCase,
    objectToString = Object.prototype.toString,
    separator = /[, ]+/,
    formatrg = /\{(\d+)\}/g,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
    p2s = /,?([achlmqrstvxz]),?/gi,
    pathCommaRegex = /,?[a-z],?/i,
    pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
    tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
    isnan = {
    "NaN": 1,
    "Infinity": 1,
    "-Infinity": 1
},
    hsrg = {
    hs: 1,
    rg: 1
},
    availableAttrs = R._availableAttrs = (_R$_availableAttrs = {
    "arrow-end": NONE,
    "arrow-start": NONE,
    blur: 0,
    "clip-rect": "0 0 1e9 1e9",
    "clip-path": E,
    cursor: "default",
    cx: 0,
    cy: 0,
    fill: "#fff",
    "fill-opacity": 1,
    font: '10px "Arial"',
    "font-family": '"Arial"',
    "font-size": "10",
    "font-style": NORMAL,
    "font-weight": 400,
    gradient: 0,
    height: 0,
    href: "about:blank",
    "letter-spacing": 0,
    "line-height": 12,
    "vertical-align": "middle",
    opacity: 1,
    path: "M0,0",
    r: 0,
    rx: 0,
    ry: 0,
    src: E,
    stroke: "#000",
    "stroke-dasharray": E,
    "stroke-linecap": "butt",
    "stroke-linejoin": "butt",
    "stroke-miterlimit": 0,
    "stroke-opacity": 1,
    "stroke-width": 1,
    target: "_blank",
    "text-anchor": "middle",
    "visibility": E,
    title: E,
    transform: E,
    rotation: 0,
    width: 0,
    x: 0,
    y: 0,
    "shape-rendering": AUTO,
    alpha: NU,
    //Adding all the possible attributes for svg
    "font-stretch": NORMAL,
    "alignment-baseline": AUTO,
    "baseline-shift": AUTO,
    "clip-rule": "nonzero",
    // @todo - need to validate whether direction is required here or not.
    // "direction": "ltr",
    "dominant-baseline": AUTO,
    "fill-rule": "nonzero",
    "filter": NONE,
    "flood-color": BLACK,
    "flood-opacity": 1,
    "font-size-adjust": NONE
}, _R$_availableAttrs['font-stretch'] = NORMAL, _R$_availableAttrs["font-variant"] = NORMAL, _R$_availableAttrs["kerning"] = AUTO, _R$_availableAttrs["lighting-color"] = "white", _R$_availableAttrs["marker-end"] = NONE, _R$_availableAttrs["marker-mid"] = NONE, _R$_availableAttrs["marker-start"] = NONE, _R$_availableAttrs["mask"] = NONE, _R$_availableAttrs["pointer-events"] = "visiblePainted", _R$_availableAttrs["stop-color"] = BLACK, _R$_availableAttrs["stop-opacity"] = 1, _R$_availableAttrs["stroke-dashoffset"] = 0, _R$_availableAttrs["text-decoration"] = NONE, _R$_availableAttrs["vector-effect"] = E, _R$_availableAttrs['visibility'] = "visible", _R$_availableAttrs["word-spacing"] = NORMAL, _R$_availableAttrs["writing-mode"] = "lr-tb", _R$_availableAttrs),
    availableAnimAttrs = R._availableAnimAttrs = {
    blur: NU,
    "clip-rect": "csv",
    "clip-path": "path",
    cx: NU,
    cy: NU,
    fill: "colour",
    "fill-opacity": NU,
    "font-size": NU,
    height: NU,
    opacity: NU,
    path: "path",
    r: NU,
    rx: NU,
    ry: NU,
    stroke: "colour",
    "stroke-opacity": NU,
    "stroke-width": NU,
    transform: "transform",
    width: NU,
    x: NU,
    y: NU,
    // Required for pie 3d
    "color": "colour",
    "borderColor": "colour",
    "borderWidth": NU,
    alpha: NU,
    "text-bound": "text-bound"
},
    eldata = {},
    sortByNumber = function sortByNumber(a, b) {
    return toFloat(a) - toFloat(b);
},
    fun = function fun() {},
    pipe = function pipe(x) {
    return x;
},
    rectPath = R._rectPath = function (x, y, w, h, r) {
    if (r) {
        return [[strM, x + r, y], [lStr, w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], [lStr, 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], [lStr, r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], [lStr, 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
    }
    return [[strM, x, y], [lStr, w, 0], [lStr, 0, h], [lStr, -w, 0], ["z"]];
},
    ellipsePath = function ellipsePath(x, y, rx, ry) {
    if (ry == null) {
        ry = rx;
    }
    return [[strM, x, y], [mStr, 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
},
    getPath = R._getPath = {
    group: function group() {
        return false;
    },
    path: function path(el) {
        return el.attr("path");
    },
    circle: function circle(el) {
        var a = el.attrs;
        return ellipsePath(a.cx, a.cy, a.r);
    },
    ellipse: function ellipse(el) {
        var a = el.attrs;
        return ellipsePath(a.cx, a.cy, a.rx, a.ry);
    },
    rect: function rect(el) {
        var a = el.attrs;
        return rectPath(a.x, a.y, a.width, a.height, a.r);
    },
    image: function image(el) {
        var a = el.attrs;
        return rectPath(a.x, a.y, a.width, a.height);
    },
    text: function text(el) {
        var bbox = el._getBBox();
        return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
    }
},


/*\
 * Raphael.mapPath
 [ method ]
 **
 * Transform the path string with given matrix.
 > Parameters
 - path (string) path string
 - matrix (object) see @Matrix
 = (string) transformed path string
\*/
mapPath = R.mapPath = function (path, matrix) {
    if (!matrix) {
        return path;
    }
    var x, y, i, j, ii, jj, pathi;

    path = path2curve(path).slice(0);
    for (i = 0, ii = path.length; i < ii; i++) {
        pathi = path[i] = path[i].slice(0);
        for (j = 1, jj = pathi.length; j < jj; j += 2) {
            x = matrix.x(pathi[j], pathi[j + 1]);
            y = matrix.y(pathi[j], pathi[j + 1]);
            pathi[j] = x;
            pathi[j + 1] = y;
        }
    }
    return path;
},
    lastArgIfGroup = R._lastArgIfGroup = function (args, clear) {
    var last = args.length - 1,
        arg = args[last];

    if (arg && arg.constructor === R.el.constructor && arg.type === 'group') {
        if (clear) {
            args[last] = undefined;
            delete args[last];
            arraySplice.call(args, last, 1);
        }
        return arg;
    }
},
    serializeArgs = R._serializeArgs = function (args) {
    var arg0 = args[0],
        pathString,
        attrs,
        i,
        ii;

    if (R.is(arg0, OBJECT) && !R.is(arg0, ARRAY) && arg0.type !== 'group') {

        attrs = arg0;

        if (arg0.path) {
            pathString = arg0.path;
            pathString && !R.is(pathString, STRING) && !R.is(pathString[0], ARRAY) && (pathString += E);
        }

        for (i = 1, ii = arguments.length; i < ii; i += 2) {
            if (!attrs[arguments[i]]) {
                attrs[arguments[i]] = arguments[i + 1];
            }
        }
    } else {
        attrs = {};
        for (i = 1, ii = arguments.length; i < ii; i += 2) {
            attrs[arguments[i]] = args[(i - 1) / 2] || arguments[i + 1];
        }
    }
    return attrs;
},


/*\
 * Raphael.is
 [ method ]
 **
 * Handfull replacement for `typeof` operator.
 > Parameters
 - o (…) any object or primitive
 - type (string) name of the type, i.e. “string”, “function”, “number”, etc.
 = (boolean) is given value is of given type
\*/
is = R.is = function (o, type) {
    if (type === FINITE) {
        return !isnan[HAS](+o);
    }
    if (type === ARRAY) {
        return o instanceof Array;
    }
    if (type === OBJECT && (o === undef || o === null)) {
        return false;
    }
    return type === NULL && o === null || type === (typeof o === 'undefined' ? 'undefined' : _typeof(o)) && o !== null || type === OBJECT && o === Object(o) || type === ARRAY && Array.isArray && Array.isArray(o) || objectToString.call(o).slice(8, -1).toLowerCase() === type;
},


/*\
  * Raphael.clone
  [ method ]
  **
  * Returns a recursively cloned version of an object.
 \*/
clone = R.clone = hasPrototypeBug ? function (obj) {
    if (Object(obj) !== obj) {
        return obj;
    }
    // when obj is a function then new obj.constructor is equal to calling new Function()
    // which uses dynamic evaluation, that violates CSP for 'unsafe-eval'
    if (obj instanceof Function) {
        return obj;
    }
    var res = new obj.constructor();
    for (var key in obj) {
        if (key !== "prototype" && obj[HAS](key)) {
            res[key] = clone(obj[key]);
        }
    }return res;
} : function (obj) {
    if (Object(obj) !== obj) {
        return obj;
    }
    // when obj is a function then new obj.constructor is equal to calling new Function()
    // which uses dynamic evaluation, that violates CSP for 'unsafe-eval'
    if (obj instanceof Function) {
        return obj;
    }
    var res = new obj.constructor();
    for (var key in obj) {
        if (obj[HAS](key)) {
            res[key] = clone(obj[key]);
        }
    }return res;
},

/**
 * Function to manage the click
 */
Node = _win.Node;
//Adding pollyfill for IE11
if (Node && !Node.prototype.contains) {
    Node.prototype.contains = function (el) {
        while (el = el.parentNode) {
            if (el === this) return true;
        }
        return false;
    };
}

R._g = g;
R.merge = _raphael.merge;
R.extend = _raphael2['default'];
/*
  * Raphael.createUUID
  [ method ]
  **
  * Returns RFC4122, version 4 ID
 */
R.createUUID = function (uuidRegEx, uuidReplacer) {
    return function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
    };
}(/[xy]/g, function (c) {
    var r = math.random() * 16 | 0,
        v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
});

R._radial_gradient = /^x?r(?:\(([^\)]*?)\))?/;
R._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i;

/*
  * Raphael.getElementID
  [ method ]
  **
  * Add 'rr-' prefix before created IDs
 */
R.getElementID = function (id) {
    return "rr-" + id;
};

// PriorityQueue Function Declaration
function PriorityQueue(comparator) {
    this._comparator = comparator;
    this._elements = [];
}

PriorityQueue.prototype.isEmpty = function () {
    return this.size() === 0;
};

PriorityQueue.prototype.peek = function () {
    if (this.isEmpty()) return null;

    return this._elements[0];
};

PriorityQueue.prototype.deq = function () {
    var first = this.peek();
    var last = this._elements.pop();
    var size = this.size();

    if (size === 0) return first;

    this._elements[0] = last;
    var current = 0;

    while (current < size) {
        var largest = current;
        var left = 2 * current + 1;
        var right = 2 * current + 2;

        if (left < size && this._compare(left, largest) >= 0) {
            largest = left;
        }

        if (right < size && this._compare(right, largest) >= 0) {
            largest = right;
        }

        if (largest === current) break;

        this._swap(largest, current);
        current = largest;
    }

    return first;
};

PriorityQueue.prototype.enq = function (element) {
    var size = this._elements.push(element);
    var current = size - 1;

    while (current > 0) {
        var parent = Math.floor((current - 1) / 2);

        if (this._compare(current, parent) <= 0) break;

        this._swap(parent, current);
        current = parent;
    }

    return size;
};

PriorityQueue.prototype.size = function () {
    return this._elements.length;
};

PriorityQueue.prototype._compare = function (a, b) {
    return this._comparator(this._elements[a], this._elements[b]);
};

PriorityQueue.prototype._swap = function (a, b) {
    var aux = this._elements[a];
    this._elements[a] = this._elements[b];
    this._elements[b] = aux;
};

/*\
 * Raphael.type
 [ property (string) ]
 **
 * Can be “SVG”, “VML” or empty, depending on browser support.
\*/
R.type = win.ENABLE_RED_CANVAS && (win.CanvasRenderingContext2D || doc.createElement('canvas').getContext) ? "CANVAS" : win.SVGAngle || doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";

/*\
 * Raphael.svg
 [ property (boolean) ]
 **
 * `true` if browser supports SVG.
\*/
/*\
 * Raphael.vml
 [ property (boolean) ]
 **
 * `true` if browser supports VML.
\*/
R.svg = !((R.vml = R.type === "VML") || (R.canvas = R.type === "CANVAS"));

R._Paper = Paper;
R._id = 0;
R._oid = 0;

/*\
 * Raphael.rad
 [ method ]
 **
 * Transform angle to radians
 > Parameters
 - deg (number) angle in degrees
 = (number) angle in radians.
\*/
R.rad = function (deg) {
    return deg % 360 * deg2rad;
};

/*\
 * Raphael.deg
 [ method ]
 **
 * Transform angle to degrees
 > Parameters
 - deg (number) angle in radians
 = (number) angle in degrees.
\*/
R.deg = function (rad) {
    return rad * rad2deg % 360;
};

var _toHex = function toHex(color) {
    if (R.vml) {
        // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
        var trim = /^\s+|\s+$/g;
        var bod;
        try {
            var docum = new ActiveXObject("htmlfile");
            docum.write("<body>");
            docum.close();
            bod = docum.body;
        } catch (e) {
            bod = createPopup().document.body;
        }
        var range = bod.createTextRange();
        _toHex = (0, _raphael.cacher)(function (color) {
            try {
                bod.style.color = Str(color).replace(trim, E);
                var value = range.queryCommandValue("ForeColor");
                value = (value & 255) << 16 | value & 65280 | (value & 16711680) >>> 16;
                return "#" + ("000000" + value.toString(16)).slice(-6);
            } catch (e) {
                return NONE;
            }
        });
    } else {
        var i = g.doc.createElement("i");
        i.title = "Rapha\xebl Colour Picker";
        i.style.display = NONE;
        g.doc.body.appendChild(i);
        _toHex = (0, _raphael.cacher)(function (color) {
            i.style.color = color;
            return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        });
    }
    return _toHex(color);
},
    hsbtoString = function hsbtoString() {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
    hsltoString = function hsltoString() {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
    rgbtoString = function rgbtoString() {
    return this.hex;
},
    prepareRGB = function prepareRGB(r, g, b) {
    if (g == null && is(r, OBJECT) && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, STRING)) {
        var clr = R.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    return [r, g, b];
},
    packageRGB = function packageRGB(r, g, b, o) {
    var rgb = {
        r: r *= 255,
        g: g *= 255,
        b: b *= 255,
        hex: R.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, FINITE) && (rgb.opacity = o);
    return rgb;
};

/*\
 * Raphael.color
 [ method ]
 **
 * Parses the color string and returns object with all values for the given color.
 > Parameters
 - clr (string) color string in one of the supported formats (see @Raphael.getRGB)
 = (object) Combined RGB & HSB object in format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can’t be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
R.color = function (clr) {
    var rgb;
    if (R.is(clr, OBJECT) && "h" in clr && "s" in clr && "b" in clr) {
        rgb = R.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.hex = rgb.hex;
    } else if (R.is(clr, OBJECT) && "h" in clr && "s" in clr && lStr in clr) {
        rgb = R.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.hex = rgb.hex;
    } else {
        if (R.is(clr, STRING)) {
            clr = R.getRGB(clr);
        }
        if (R.is(clr, OBJECT) && "r" in clr && "g" in clr && "b" in clr) {
            rgb = R.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = R.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {
                hex: NONE
            };
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};

/*\
 * Raphael.hsb2rgb
 [ method ]
 **
 * Converts HSB values to RGB object.
 > Parameters
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
R.hsb2rgb = function (h, s, v, o) {
    if (this.is(h, OBJECT) && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        h = h.h;
        o = h.o;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};

/*\
 * Raphael.hsl2rgb
 [ method ]
 **
 * Converts HSL values to RGB object.
 > Parameters
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
R.hsl2rgb = function (h, s, l, o) {
    if (this.is(h, OBJECT) && "h" in h && "s" in h && lStr in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};

/*\
 * Raphael.rgb2hsb
 [ method ]
 **
 * Converts RGB values to HSB object.
 > Parameters
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in format:
 o {
 o     h (number) hue
 o     s (number) saturation
 o     b (number) brightness
 o }
\*/
R.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = C === 0 ? null : V === r ? (g - b) / C : V === g ? (b - r) / C + 2 : (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    S = C === 0 ? 0 : C / V;
    return {
        h: H,
        s: S,
        b: V,
        toString: hsbtoString
    };
};

/*\
 * Raphael.rgb2hsl
 [ method ]
 **
 * Converts RGB values to HSL object.
 > Parameters
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in format:
 o {
 o     h (number) hue
 o     s (number) saturation
 o     l (number) luminosity
 o }
\*/
R.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = C === 0 ? null : M === r ? (g - b) / C : M === g ? (b - r) / C + 2 : (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    L = (M + m) / 2;
    S = C === 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
    return {
        h: H,
        s: S,
        l: L,
        toString: hsltoString
    };
};

R._path2string = function () {
    return this.join(COMMA).replace(p2s, TOKEN1);
};

R._cacher = _raphael.cacher;

function clrToString() {
    return this.hex;
}

/*\
 * Raphael.getRGB
 [ method ]
 **
 * Parses colour string as RGB object
 > Parameters
 - colour (string) colour string in one of formats:
 # <ul>
 #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
 #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
 #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsl(•••, •••, •••) — same as hsb</li>
 #     <li>hsl(•••%, •••%, •••%) — same as hsb</li>
 # </ul>
 = (object) RGB object in format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can’t be parsed
 o }
\*/
R.getRGB = (0, _raphael.cacher)(function (colour) {
    var opacity, res, red, green, blue, t, values, rgb;

    colour && is(colour, OBJECT) && "opacity" in colour && (opacity = colour.opacity);
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: NONE,
            error: 1,
            toString: clrToString
        };
    }
    if (colour === NONE) {
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: NONE,
            toString: clrToString
        };
    }
    !(hsrg[HAS](colour.toLowerCase().substring(0, 2)) || colour.charAt() === "#") && (colour = _toHex(colour));

    if (rgb = colour.match(colourRegExp)) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4][SPLIT](commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) === "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) === "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) === "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) === "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) === "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5][SPLIT](commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) === "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) === "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) === "%" && (blue *= 2.55);
            (values[0].slice(-3) === "deg" || values[0].slice(-1) === "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) === "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) === "%" && (opacity /= 100);
            return R.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6][SPLIT](commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) === "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) === "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) === "%" && (blue *= 2.55);
            (values[0].slice(-3) === "deg" || values[0].slice(-1) === "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) === "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) === "%" && (opacity /= 100);
            return R.hsl2rgb(red, green, blue, opacity);
        }
        rgb = {
            r: red,
            g: green,
            b: blue,
            toString: clrToString
        };
        rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
        R.is(opacity, FINITE) && (rgb.opacity = opacity);
        return rgb;
    }
    return {
        r: -1,
        g: -1,
        b: -1,
        hex: NONE,
        error: 1,
        toString: clrToString
    };
}, R);

R.tintshade = (0, _raphael.cacher)(function (colour, percent) {
    var rgb = R.getRGB(colour),
        tint,
        offset = 255;

    percent < 0 && (percent *= -1, offset = 0);
    percent > 1 && (percent = 1);

    tint = percent === 0 ? rgb : {
        r: offset - (offset - rgb.r) * percent,
        g: offset - (offset - rgb.g) * percent,
        b: offset - (offset - rgb.b) * percent,
        toString: clrToString
    };
    tint.hex = R.rgb(tint.r, tint.g, tint.b);
    rgb.error && (tint.error = rgb.error);

    if ("opacity" in rgb) {
        tint.rgba = 'rgba(' + [tint.r, tint.g, tint.b, rgb.opacity].join(',') + ')';
        tint.opacity = rgb.opacity;
    } else {
        tint.rgba = 'rgb(' + [tint.r, tint.g, tint.b].join(',') + ')';
    }
    return tint;
}, R);

/*\
 * Raphael.rgb
 [ method ]
 **
 * Converts RGB values to hex representation of the colour.
 > Parameters
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the colour.
\*/
R.rgb = (0, _raphael.cacher)(function (r, g, b) {
    return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
});

// http://schepers.cc/getting-to-the-point
function catmullRom2bezier(crp, z) {
    var d = [];
    for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
        var p = [{
            x: +crp[i - 2],
            y: +crp[i - 1]
        }, {
            x: +crp[i],
            y: +crp[i + 1]
        }, {
            x: +crp[i + 2],
            y: +crp[i + 3]
        }, {
            x: +crp[i + 4],
            y: +crp[i + 5]
        }];
        if (z) {
            if (!i) {
                p[0] = {
                    x: +crp[iLen - 2],
                    y: +crp[iLen - 1]
                };
            } else if (iLen - 4 === i) {
                p[3] = {
                    x: +crp[0],
                    y: +crp[1]
                };
            } else if (iLen - 2 === i) {
                p[2] = {
                    x: +crp[0],
                    y: +crp[1]
                };
                p[3] = {
                    x: +crp[2],
                    y: +crp[3]
                };
            }
        } else {
            if (iLen - 4 === i) {
                p[3] = p[2];
            } else if (!i) {
                p[0] = {
                    x: +crp[i],
                    y: +crp[i + 1]
                };
            }
        }
        d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
    }

    return d;
}

R.sanitizePath = function (pathArg) {
    var pathStr;
    pathStr = pathArg.join ? pathArg.join(COMMA) : pathArg;
    if (rCheckRegex.test(pathStr)) {
        pathStr = R._pathToAbsolute(pathStr);
    } else {
        pathStr = pathStr.replace(p2s, TOKEN1);
    }
    return pathStr;
};

/*\
 * Raphael.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments.
 > Parameters
 - pathString (string|array) path string or array of segments (in the last case it will be returned straight away)
 = (array) array of segments.
\*/
R.parsePathString = function (pathString) {
    if (!pathString || !pathString.length) {
        return null;
    }
    var pth = paths(pathString);
    if (pth.arr) {
        return pathClone(pth.arr);
    }
    __data = undef;
    if (R.is(pathString, ARRAY)) {
        pathString = Str(pathString).replace(/,?([A-Z]),?/g, ',$1,').replace(/(^,?)|(,?$)/g, '').replace(/,,?/g, ',').split(',');
        if (R.is(pathString[0], ARRAY)) {
            // rough assumption
            __data = pathClone(pathString);
        } else {
            var i,
                subPathArr = [],
                l = pathString.length,
                pathI,
                noOfDataPoints;
            __data = [];
            for (i = 0; i < l; i += 1) {
                // if any path command is encountered
                if (charRegex.test(pathString[i])) {
                    // if any previous path command was parsed with its allowed set of points then push
                    // that parsed path sub-array to final path array.
                    subPathArr.length && __data.push(subPathArr);
                    // update the path command and path sub-array.
                    pathI = pathString[i];
                    subPathArr = [pathI];
                    // no of points that will be parsed for the path copmmand.
                    noOfDataPoints = paramCounts[pathI.toLowerCase()];
                } else if (noOfDataPoints) {
                    // push all the allowed data points to the subarray
                    subPathArr.push(+pathString[i]);
                    noOfDataPoints--;
                } else if (pathString[i].length) {
                    // push the last parsed path sub-array to final path array.
                    __data.push(subPathArr);
                    // create a new sub array with the last known path command
                    subPathArr = [pathI].concat(+pathString[i]);
                    noOfDataPoints = paramCounts[pathI.toLowerCase()] - 1;
                }
            }
            __data.push(subPathArr);
        }
    }
    if (!__data || !__data.length) {
        __data = [];
        Str(pathString).replace(pathCommand, pathStringBreakFn);
    }
    __data.toString = R._path2string;
    pth.arr = __data;
    return pth.arr;
};

/*\
 * Raphael.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of transformations.
 > Parameters
 - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)
 = (array) array of transformations.
\*/
R.parseTransformString = (0, _raphael.cacher)(function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {
        r: 3,
        s: 4,
        t: 2,
        m: 6
    },
        data = [];
    if (R.is(TString, ARRAY) && R.is(TString[0], ARRAY)) {
        // rough assumption
        data = pathClone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = lowerCase.call(b);
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b][CONCAT](params));
        });
    }
    data.toString = R._path2string;
    return data;
});
// PATHS
var _pathCache = {},
    paths = (0, _raphael.cacher)(function () {
    // var p = paths.ps = paths.ps || {};
    // if (p[ps]) {
    //     p[ps].sleep = 100;
    // } else {
    //     p[ps] = {
    //         sleep: 100
    //     };
    // }
    // setTimeout(function() {
    //     for (var key in p)
    //         if (p[HAS](key) && key != ps) {
    //             p[key].sleep--;
    //             !p[key].sleep && delete p[key];
    //         }
    // });
    return {};
}, undef, undef, undef, 500, _pathCache, true);

/*\
 * Raphael.findDotsAtSegment
 [ method ]
 **
 * Utility method
 **
 * Find dot coordinates on the given cubic bezier curve at the given t.
 > Parameters
 - p1x (number) x of the first point of the curve
 - p1y (number) y of the first point of the curve
 - c1x (number) x of the first anchor of the curve
 - c1y (number) y of the first anchor of the curve
 - c2x (number) x of the second anchor of the curve
 - c2y (number) y of the second anchor of the curve
 - p2x (number) x of the second point of the curve
 - p2y (number) y of the second point of the curve
 - t (number) position on the curve (0..1)
 = (object) point information in format:
 o {
 o     x: (number) x coordinate of the point
 o     y: (number) y coordinate of the point
 o     m: {
 o         x: (number) x coordinate of the left anchor
 o         y: (number) y coordinate of the left anchor
 o     }
 o     n: {
 o         x: (number) x coordinate of the right anchor
 o         y: (number) y coordinate of the right anchor
 o     }
 o     start: {
 o         x: (number) x coordinate of the start of the curve
 o         y: (number) y coordinate of the start of the curve
 o     }
 o     end: {
 o         x: (number) x coordinate of the end of the curve
 o         y: (number) y coordinate of the end of the curve
 o     }
 o     alpha: (number) angle of the curve derivative at the point
 o }
\*/
R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t,
        t13 = pow(t1, 3),
        t12 = pow(t1, 2),
        t2 = t * t,
        t3 = t2 * t,
        x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
        y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
        mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
        my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
        nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
        ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
        ax = t1 * p1x + t * c1x,
        ay = t1 * p1y + t * c1y,
        cx = t1 * c2x + t * p2x,
        cy = t1 * c2y + t * p2y,
        alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
    (mx > nx || my < ny) && (alpha += 180);
    return {
        x: x,
        y: y,
        m: {
            x: mx,
            y: my
        },
        n: {
            x: nx,
            y: ny
        },
        start: {
            x: ax,
            y: ay
        },
        end: {
            x: cx,
            y: cy
        },
        alpha: alpha
    };
};

function base3(t, p1, p2, p3, p4) {
    var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
        t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
    return t * t2 - 3 * p1 + 3 * p2;
}

function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
    if (z == null) {
        z = 1;
    }
    z = z > 1 ? 1 : z < 0 ? 0 : z;
    var z2 = z / 2,
        n = 12,
        Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
        Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
        sum = 0;
    for (var i = 0; i < n; i++) {
        var ct = z2 * Tvalues[i] + z2,
            xbase = base3(ct, x1, x2, x3, x4),
            ybase = base3(ct, y1, y2, y3, y4),
            comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * mathSqrt(comb);
    }
    return z2 * sum;
}

function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
    if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
        return;
    }
    var t = 1,
        step = t / 2,
        t2 = t - step,
        l,
        e = .01;
    l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
    while (abs(l - ll) > e) {
        step /= 2;
        t2 += (l < ll ? 1 : -1) * step;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
    }
    return t2;
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
        return;
    }
    var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
        ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
        denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (!denominator) {
        return;
    }
    var px = nx / denominator,
        py = ny / denominator,
        px2 = +px.toFixed(2),
        py2 = +py.toFixed(2);
    if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
        return;
    }
    return {
        x: px,
        y: py
    };
}

R._removedFactory = function (methodname) {
    return function () {
        (0, _eve3['default'])("raphael.log", null, 'Rapha\xEBl: you are calling to method \u201C' + methodname + '\u201D of removed object', methodname);
    };
};

/*\
 * Raphael.pathBBox
 [ method ]
 **
 * Utility method
 **
 * Return bounding box of a given path
 > Parameters
 - path (string) path string
 = (object) bounding box
 o {
 o     x: (number) x coordinate of the left top point of the box
 o     y: (number) y coordinate of the left top point of the box
 o     x2: (number) x coordinate of the right bottom point of the box
 o     y2: (number) y coordinate of the right bottom point of the box
 o     width: (number) width of the box
 o     height: (number) height of the box
 o     cx: (number) x coordinate of the center of the box
 o     cy: (number) y coordinate of the center of the box
 o }
\*/
var pathDimensions = R.pathBBox = function (path) {
    var pth = paths(path);
    if (!path) {
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0
        };
    }
    path = path2curve(path);
    var x = 0,
        y = 0,
        X = [],
        Y = [],
        p;
    for (var i = 0, ii = path.length; i < ii; i++) {
        p = path[i];
        if (p[0] === strM) {
            x = p[1];
            y = p[2];
            X.push(x);
            Y.push(y);
        } else {
            var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
            X = X[CONCAT](dim.min.x, dim.max.x);
            Y = Y[CONCAT](dim.min.y, dim.max.y);
            x = p[5];
            y = p[6];
        }
    }
    var xmin = mmin[APPLY](0, X),
        ymin = mmin[APPLY](0, Y),
        xmax = mmax[APPLY](0, X),
        ymax = mmax[APPLY](0, Y),
        bb = {
        x: xmin,
        y: ymin,
        x2: xmax,
        y2: ymax,
        width: xmax - xmin,
        height: ymax - ymin
    };
    pth.bbox = clone(bb);
    return bb;
},
    pathClone = function pathClone(pathArray) {
    var res = clone(pathArray);
    res.toString = R._path2string;
    return res;
},
    pathToAbsolute = R._pathToAbsolute = function (pathArray) {
    var pth = paths(pathArray),
        res;
    if (!pth.abs) {
        if (!R.is(pathArray, ARRAY) || !R.is(pathArray && pathArray[0], ARRAY)) {
            // rough assumption
            pathArray = R.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            res = [[strM, 0, 0]];
            res.toString = R._path2string;
            return res;
        }
        var x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        res = [];
        if (pathArray[0][0] === strM) {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = [strM, x, y];
        }
        var crz = pathArray.length === 3 && pathArray[0][0] === strM && pathArray[1][0].toUpperCase() === "R" && pathArray[2][0].toUpperCase() === "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            if (pa[0] != upperCase.call(pa[0])) {
                r[0] = upperCase.call(pa[0]);
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] + x);
                        r[7] = +(pa[7] + y);
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y][CONCAT](pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res[CONCAT](catmullRom2bezier(dots, crz));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                            j % 2 ? x = r[j] : y = r[j];
                        }
                }
            } else if (pa[0] === "R") {
                dots = [x, y][CONCAT](pa.slice(1));
                res.pop();
                res = res[CONCAT](catmullRom2bezier(dots, crz));
                r = ["R"][CONCAT](pa.slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            switch (r[0]) {
                case "Z":
                    x = mx;
                    y = my;
                    break;
                case "H":
                    x = r[1];
                    break;
                case "V":
                    y = r[1];
                    break;
                case "M":
                    mx = r[r.length - 2];
                    my = r[r.length - 1];
                default:
                    x = r[r.length - 2];
                    y = r[r.length - 1];
            }
        }
        res.toString = R._path2string;
        pth.abs = res;
    }
    return pathClone(pth.abs);
},
    l2c = function l2c(x1, y1, x2, y2) {
    return [x1, y1, x2, y2, x2, y2];
},
    q2c = function q2c(x1, y1, ax, ay, x2, y2) {
    var _13 = 1 / 3,
        _23 = 2 / 3;
    return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
},
    a2c = function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
    sweep_flag = sweep_flag && +sweep_flag;
    large_arc_flag = large_arc_flag && +large_arc_flag;
    // for more information of where this math came from visit:
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    // If rx = 0 or ry = 0 then this arc is treated as a straight line segment (a "lineto") joining the endpoints
    if (rx === 0 || ry === 0) {
        return l2c(x1, y1, x2, y2);
    }
    var _120 = PI * 120 / 180,
        rad = deg2rad * (+angle || 0),
        res = [],
        xy,
        rotate = (0, _raphael.cacher)(function (x, y, rad) {
        var X = x * mathCos(rad) - y * mathSin(rad),
            Y = x * mathSin(rad) + y * mathCos(rad);
        return {
            x: X,
            y: Y
        };
    });
    if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        var cos = mathCos(deg2rad * angle),
            sin = mathSin(deg2rad * angle),
            x = (x1 - x2) / 2,
            y = (y1 - y2) / 2;
        var h = x * x / (rx * rx) + y * y / (ry * ry);
        if (h > 1) {
            h = mathSqrt(h);
            rx = h * rx;
            ry = h * ry;
        }
        var rx2 = rx * rx,
            ry2 = ry * ry,
            k = (large_arc_flag === sweep_flag ? -1 : 1) * mathSqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
            cx = k * rx * y / ry + (x1 + x2) / 2,
            cy = k * -ry * x / rx + (y1 + y2) / 2,
            f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
            f2 = math.asin(((y2 - cy) / ry).toFixed(9));

        f1 = x1 < cx ? PI - f1 : f1;
        f2 = x2 < cx ? PI - f2 : f2;
        f1 < 0 && (f1 = PI * 2 + f1);
        f2 < 0 && (f2 = PI * 2 + f2);
        if (sweep_flag && f1 > f2) {
            f1 = f1 - PI * 2;
        }
        if (!sweep_flag && f2 > f1) {
            f2 = f2 - PI * 2;
        }
    } else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
    }
    var df = f2 - f1;
    if (abs(df) > _120) {
        var f2old = f2,
            x2old = x2,
            y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * mathCos(f2);
        y2 = cy + ry * mathSin(f2);
        res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
    }
    df = f2 - f1;
    var c1 = mathCos(f1),
        s1 = mathSin(f1),
        c2 = mathCos(f2),
        s2 = mathSin(f2),
        t = math.tan(df / 4),
        hx = 4 / 3 * rx * t,
        hy = 4 / 3 * ry * t,
        m1 = [x1, y1],
        m2 = [x1 + hx * s1, y1 - hy * c1],
        m3 = [x2 + hx * s2, y2 - hy * c2],
        m4 = [x2, y2];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];
    if (recursive) {
        return [m2, m3, m4][CONCAT](res);
    } else {
        res = [m2, m3, m4][CONCAT](res).join()[SPLIT](COMMA);
        var newres = [];
        for (var i = 0, ii = res.length; i < ii; i++) {
            newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
        }
        return newres;
    }
},
    findDotAtSegment = function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t;
    return {
        x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
        y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
    };
},
    curveDim = (0, _raphael.cacher)(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
    var a = c2x - 2 * c1x + p1x - (p2x - 2 * c2x + c1x),
        b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
        c = p1x - c1x,
        t1 = (-b + mathSqrt(b * b - 4 * a * c)) / 2 / a,
        t2 = (-b - mathSqrt(b * b - 4 * a * c)) / 2 / a,
        y = [p1y, p2y],
        x = [p1x, p2x],
        dot;
    abs(t1) > "1e12" && (t1 = .5);
    abs(t2) > "1e12" && (t2 = .5);
    if (t1 > 0 && t1 < 1) {
        dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
        x.push(dot.x);
        y.push(dot.y);
    }
    if (t2 > 0 && t2 < 1) {
        dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
        x.push(dot.x);
        y.push(dot.y);
    }
    a = c2y - 2 * c1y + p1y - (p2y - 2 * c2y + c1y);
    b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
    c = p1y - c1y;
    t1 = (-b + mathSqrt(b * b - 4 * a * c)) / 2 / a;
    t2 = (-b - mathSqrt(b * b - 4 * a * c)) / 2 / a;
    abs(t1) > "1e12" && (t1 = .5);
    abs(t2) > "1e12" && (t2 = .5);
    if (t1 > 0 && t1 < 1) {
        dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
        x.push(dot.x);
        y.push(dot.y);
    }
    if (t2 > 0 && t2 < 1) {
        dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
        x.push(dot.x);
        y.push(dot.y);
    }
    return {
        min: {
            x: mmin[APPLY](0, x),
            y: mmin[APPLY](0, y)
        },
        max: {
            x: mmax[APPLY](0, x),
            y: mmax[APPLY](0, y)
        }
    };
}),
    path2curve = R._path2curve = (0, _raphael.cacher)(function (path, path2) {
    var pth = !path2 && paths(path);
    if (!path2 && pth.curve) {
        return pathClone(pth.curve);
    }
    var p = pathToAbsolute(path),
        p2 = path2 && pathToAbsolute(path2),
        attrs = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null
    },
        attrs2 = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null
    },
        processPath = function processPath(path, d) {
        var nx, ny;
        if (!path) {
            return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
        }
        !(path[0] in {
            T: 1,
            Q: 1
        }) && (d.qx = d.qy = null);
        switch (path[0]) {
            case "M":
                d.X = path[1];
                d.Y = path[2];
                break;
            case "A":
                path = ["C"][CONCAT](a2c[APPLY](0, [d.x, d.y][CONCAT](path.slice(1))));
                break;
            case "S":
                nx = d.x + (d.x - (d.bx || d.x));
                ny = d.y + (d.y - (d.by || d.y));
                path = ["C", nx, ny][CONCAT](path.slice(1));
                break;
            case "T":
                d.qx = d.x + (d.x - (d.qx || d.x));
                d.qy = d.y + (d.y - (d.qy || d.y));
                path = ["C"][CONCAT](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                break;
            case "Q":
                d.qx = path[1];
                d.qy = path[2];
                path = ["C"][CONCAT](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                break;
            case "L":
                path = ["C"][CONCAT](l2c(d.x, d.y, path[1], path[2]));
                break;
            case "H":
                path = ["C"][CONCAT](l2c(d.x, d.y, path[1], d.y));
                break;
            case "V":
                path = ["C"][CONCAT](l2c(d.x, d.y, d.x, path[1]));
                break;
            case "Z":
                path = ["C"][CONCAT](l2c(d.x, d.y, d.X, d.Y));
                break;
        }
        return path;
    },
        fixArc = function fixArc(pp, i) {
        if (pp[i].length > 7) {
            pp[i].shift();
            var pi = pp[i];
            while (pi.length) {
                pp.splice(i++, 0, ["C"][CONCAT](pi.splice(0, 6)));
            }
            pp.splice(i, 1);
            ii = mmax(p.length, p2 && p2.length || 0);
        }
    },
        fixM = function fixM(path1, path2, a1, a2, i) {
        if (path1 && path2 && path1[i][0] === strM && path2[i][0] != strM && !i) {
            path2.splice(i, 0, [strM, a2.x, a2.y]);
            a1.bx = 0;
            a1.by = 0;
            a1.x = path1[i][1];
            a1.y = path1[i][2];
            ii = mmax(p.length, p2 && p2.length || 0);
        }
    };
    for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
        p[i] = processPath(p[i], attrs);
        fixArc(p, i);
        p2 && (p2[i] = processPath(p2[i], attrs2));
        p2 && fixArc(p2, i);
        fixM(p, p2, attrs, attrs2, i);
        fixM(p2, p, attrs2, attrs, i);
        var seg = p[i],
            seg2 = p2 && p2[i],
            seglen = seg.length,
            seg2len = p2 && seg2.length;
        attrs.x = seg[seglen - 2];
        attrs.y = seg[seglen - 1];
        attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
        attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
        attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
        attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
        attrs2.x = p2 && seg2[seg2len - 2];
        attrs2.y = p2 && seg2[seg2len - 1];
    }
    if (!p2) {
        pth.curve = pathClone(p);
    }
    return p2 ? [p, p2] : p;
}, null, pathClone),
    parseDots = R._parseDots = (0, _raphael.cacher)(function (gradient) {
    var dots = [];
    for (var i = 0, ii = gradient.length; i < ii; i++) {
        var dot = {},
            par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
        dot.color = R.getRGB(par[1]);
        if (dot.color.error) {
            return null;
        }
        //store opacity information
        dot.opacity = dot.color.opacity;
        dot.color = dot.color.hex;
        par[2] && (dot.offset = par[2] + "%");
        dots.push(dot);
    }
    for (i = 1, ii = dots.length - 1; i < ii; i++) {
        if (!dots[i].offset) {
            var start = toFloat(dots[i - 1].offset || 0),
                end = 0;
            for (var j = i + 1; j < ii; j++) {
                if (dots[j].offset) {
                    end = dots[j].offset;
                    break;
                }
            }
            if (!end) {
                end = 100;
                j = ii;
            }
            end = toFloat(end);
            var d = (end - start) / (j - i + 1);
            for (; i < j; i++) {
                start += d;
                dots[i].offset = start + "%";
            }
        }
    }
    return dots;
}),
    tear = R._tear = function (el, paper) {
    el === paper.top && (paper.top = el.prev);
    el === paper.bottom && (paper.bottom = el.next);
    el.next && (el.next.prev = el.prev);
    el.prev && (el.prev.next = el.next);
},
    tofront = R._tofront = function (el, paper) {
    if (paper.top === el) {
        return false;
    }
    tear(el, paper);
    el.next = null;
    el.prev = paper.top;
    paper.top.next = el;
    paper.top = el;
    return true;
},
    toback = R._toback = function (el, paper) {
    if (paper.bottom === el) {
        return false;
    }
    tear(el, paper);
    el.next = paper.bottom;
    el.prev = null;
    paper.bottom.prev = el;
    paper.bottom = el;
    return true;
},
    insertafter = R._insertafter = function (el, el2, paper, paper2) {
    tear(el, paper);
    el.parent = paper2;
    el2 === paper2.top && (paper2.top = el);
    el2.next && (el2.next.prev = el);
    el.next = el2.next;
    el.prev = el2;
    el2.next = el;
},
    insertbefore = R._insertbefore = function (el, el2, paper, paper2) {
    tear(el, paper);
    el.parent = paper2;
    el2 === paper2.bottom && (paper2.bottom = el);
    el2.prev && (el2.prev.next = el);
    el.prev = el2.prev;
    el2.prev = el;
    el.next = el2;
},
    extractTransform = R._extractTransform = function (el, tstr) {
    if (tstr == null) {
        return el._.transform;
    }
    tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
    var tdata = R.parseTransformString(tstr),
        deg = 0,
        dx = 0,
        dy = 0,
        sx = 1,
        sy = 1,
        _ = el._,
        m = new Matrix();
    _.transform = tdata || [];
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command === "t" && tlen === 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command === "r") {
                if (tlen === 2) {
                    bb = _.bb || (_.bb = el.getBBox(1));
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    deg += t[1];
                } else if (tlen === 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                    deg += t[1];
                }
            } else if (command === "s") {
                if (tlen === 2 || tlen === 3) {
                    bb = _.bb || (_.bb = el.getBBox(1));
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    sx *= t[1];
                    sy *= t[tlen - 1];
                } else if (tlen === 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                    sx *= t[1];
                    sy *= t[2];
                }
            } else if (command === mStr && tlen === 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            _.dirtyT = 1;
            el.matrix = m;
        }
    }

    /*\
     * Element.matrix
     [ property (object) ]
     **
     * Keeps @Matrix object, which represents element transformation
    \*/
    el.matrix = m;

    _.sx = sx;
    _.sy = sy;
    _.deg = deg;
    _.dx = dx = m.e;
    _.dy = dy = m.f;

    if (sx === 1 && sy === 1 && !deg && _.bbox) {
        _.bbox.x += +dx;
        _.bbox.y += +dy;
    } else {
        _.dirtyT = 1;
    }
},
    getEmpty = function getEmpty(item) {
    var l = item[0];
    switch (l.toLowerCase()) {
        case "t":
            return [l, 0, 0];
        case "m":
            return [l, 1, 0, 0, 1, 0, 0];
        case "r":
            if (item.length === 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
        case "s":
            if (item.length === 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length === 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
    }
},
    equaliseTransform = R._equaliseTransform = function (t1, t2) {
    t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
    t1 = R.parseTransformString(t1) || [];
    t2 = R.parseTransformString(t2) || [];
    var maxlength = mmax(t1.length, t2.length),
        from = [],
        to = [],
        i = 0,
        j,
        jj,
        tt1,
        tt2;
    for (; i < maxlength; i++) {
        tt1 = t1[i] || getEmpty(t2[i]);
        tt2 = t2[i] || getEmpty(tt1);
        if (tt1[0] != tt2[0] || tt1[0].toLowerCase() === "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() === "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
            return;
        }
        from[i] = [];
        to[i] = [];
        for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
            j in tt1 && (from[i][j] = tt1[j]);
            j in tt2 && (to[i][j] = tt2[j]);
        }
    }
    return {
        from: from,
        to: to
    };
};
R._getContainer = function (x, y, w, h) {
    var container;
    container = h == null && !R.is(x, OBJECT) ? g.doc.getElementById(x) : x;
    if (container == null) {
        return;
    }
    if (container.tagName) {
        if (y == null) {
            return {
                container: container,
                width: container.style.pixelWidth || container.offsetWidth,
                height: container.style.pixelHeight || container.offsetHeight
            };
        } else {
            return {
                container: container,
                width: y,
                height: w
            };
        }
    }
    return {
        container: 1,
        x: x,
        y: y,
        width: w,
        height: h
    };
};

R._engine = {};

/*\
 * Raphael.path2curve
 [ method ]
 **
 * Utility method
 **
 * Converts path to a new path where all segments are cubic bezier curves.
 > Parameters
 - pathString (string|array) path string or array of segments
 = (array) array of segments.
\*/
R.path2curve = path2curve;

/*\
 * Raphael.matrix
 [ method ]
 **
 * Utility method
 **
 * Returns matrix based on given parameters.
 > Parameters
 - a (number)
 - b (number)
 - c (number)
 - d (number)
 - e (number)
 - f (number)
 = (object) @Matrix
\*/
R.matrix = function (a, b, c, d, e, f) {
    return new Matrix(a, b, c, d, e, f);
};

function Matrix(a, b, c, d, e, f) {
    if (a != null) {
        this.a = +a;
        this.b = +b;
        this.c = +c;
        this.d = +d;
        this.e = +e;
        this.f = +f;
    } else {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
    }
}
(function (matrixproto) {

    /*\
     * Matrix.add
     [ method ]
     **
     * Adds given matrix to existing one.
     > Parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     or
     - matrix (object) @Matrix
    \*/
    matrixproto.add = function (a, b, c, d, e, f) {
        var out = [[], [], []],
            m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
            x,
            y,
            z,
            res;

        if (a && a instanceof Matrix) {
            matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
        }

        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                res = 0;
                for (z = 0; z < 3; z++) {
                    res += m[x][z] * matrix[z][y];
                }
                out[x][y] = res;
            }
        }
        this.a = out[0][0];
        this.b = out[1][0];
        this.c = out[0][1];
        this.d = out[1][1];
        this.e = out[0][2];
        this.f = out[1][2];
    };

    /*\
     * Matrix.invert
     [ method ]
     **
     * Returns inverted version of the matrix
     = (object) @Matrix
    \*/
    matrixproto.invert = function () {
        var me = this,
            x = me.a * me.d - me.b * me.c;
        return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
    };

    /*\
     * Matrix.clone
     [ method ]
     **
     * Returns copy of the matrix
     = (object) @Matrix
    \*/
    matrixproto.clone = function () {
        return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
    };

    /*\
     * Matrix.translate
     [ method ]
     **
     * Translate the matrix
     > Parameters
     - x (number)
     - y (number)
    \*/
    matrixproto.translate = function (x, y) {
        this.add(1, 0, 0, 1, x, y);
    };

    /*\
     * Matrix.scale
     [ method ]
     **
     * Scales the matrix
     > Parameters
     - x (number)
     - y (number) #optional
     - cx (number) #optional
     - cy (number) #optional
    \*/
    matrixproto.scale = function (x, y, cx, cy) {
        y == null && (y = x);
        (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
        this.add(x, 0, 0, y, 0, 0);
        (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
    };

    /*\
     * Matrix.rotate
     [ method ]
     **
     * Rotates the matrix
     > Parameters
     - a (number)
     - x (number)
     - y (number)
    \*/
    matrixproto.rotate = function (a, x, y) {
        a = R.rad(a);
        x = x || 0;
        y = y || 0;
        var cos = +mathCos(a).toFixed(9),
            sin = +mathSin(a).toFixed(9);
        this.add(cos, sin, -sin, cos, x, y);
        this.add(1, 0, 0, 1, -x, -y);
    };

    /*\
     * Matrix.x
     [ method ]
     **
     * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y
     > Parameters
     - x (number)
     - y (number)
     = (number) x
    \*/
    matrixproto.x = function (x, y) {
        return x * this.a + y * this.c + this.e;
    };

    /*\
     * Matrix.y
     [ method ]
     **
     * Return y coordinate for given point after transformation described by the matrix. See also @Matrix.x
     > Parameters
     - x (number)
     - y (number)
     = (number) y
    \*/
    matrixproto.y = function (x, y) {
        return x * this.b + y * this.d + this.f;
    };
    matrixproto.get = function (i) {
        return +this[Str.fromCharCode(97 + i)].toFixed(4);
    };
    matrixproto.toString = function () {
        return R.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
    };
    matrixproto.toMatrixString = function () {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
    };
    matrixproto.toFilter = function () {
        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
    };
    matrixproto.offset = function () {
        return [this.e.toFixed(4), this.f.toFixed(4)];
    };
    function norm(a) {
        return a[0] * a[0] + a[1] * a[1];
    }
    function normalize(a) {
        var mag = mathSqrt(norm(a));
        a[0] && (a[0] /= mag);
        a[1] && (a[1] /= mag);
    }

    /*\
     * Matrix.split
     [ method ]
     **
     * Splits matrix into primitive transformations
     = (object) in format:
     o dx (number) translation by x
     o dy (number) translation by y
     o scalex (number) scale by x
     o scaley (number) scale by y
     o shear (number) shear
     o rotate (number) rotation in deg
     o isSimple (boolean) could it be represented via simple transformations
    \*/
    matrixproto.split = function () {
        var out = {};
        // translation
        out.dx = this.e;
        out.dy = this.f;

        // scale and shear
        var row = [[this.a, this.c], [this.b, this.d]];
        out.scalex = mathSqrt(norm(row[0]));
        normalize(row[0]);

        out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
        row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

        out.scaley = mathSqrt(norm(row[1]));
        normalize(row[1]);
        out.shear /= out.scaley;

        // rotation
        var sin = -row[0][1],
            cos = row[1][1];
        if (cos < 0) {
            out.rotate = R.deg(math.acos(cos));
            if (sin < 0) {
                out.rotate = 360 - out.rotate;
            }
        } else {
            out.rotate = R.deg(math.asin(sin));
        }

        out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) === out.scaley.toFixed(9) || !out.rotate);
        out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) === out.scaley.toFixed(9) && !out.rotate;
        out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
        return out;
    };

    /*\
     * Matrix.toTransformString
     [ method ]
     **
     * Return transform string that represents given matrix
     = (string) transform string
    \*/
    matrixproto.toTransformString = function (shorter) {
        var s = shorter || this[SPLIT]();
        if (s.isSimple) {
            s.scalex = +s.scalex.toFixed(4);
            s.scaley = +s.scaley.toFixed(4);
            s.rotate = +s.rotate.toFixed(4);
            return (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) + (s.rotate ? "r" + [s.rotate, 0, 0] : E);
        } else {
            return mStr + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
        }
    };
})(Matrix.prototype);

// WebKit rendering bug workaround method
var navigator = win.navigator,
    version = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);

if (navigator.vendor === "Apple Computer, Inc." && (version && version[1] < 4 || navigator.platform.slice(0, 2) === "iP") || navigator.vendor === "Google Inc." && version && version[1] < 8) {

    /*\
     * Paper.safari
     [ method ]
     **
     * There is an inconvenient rendering bug in Safari (WebKit):
     * sometimes the rendering should be forced.
     * This method should help with dealing with this bug.
    \*/
    paperproto.safari = function () {
        var rect = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: NONE
        });
        setTimeout(function () {
            rect.remove();
        });
        return true;
    };
} else {
    paperproto.safari = fun;
}

var preventDefault = function preventDefault() {
    this.returnValue = false;
},
    preventTouch = function preventTouch() {
    return this.originalEvent.preventDefault();
},
    stopPropagation = function stopPropagation() {
    this.cancelBubble = true;
},
    stopTouch = function stopTouch() {
    return this.originalEvent.stopPropagation();
},
    eventCopyList = {
    stopPropagation: 'fn',
    stopImmediatePropagation: 'fn',
    preventDefault: 'fn',
    type: true,
    clientX: true,
    clientY: true,
    pageX: true,
    pageY: true,
    bubbles: true,
    cancelable: true,
    touches: true,
    target: true,
    originalTarget: true,
    srcElement: true,
    relatedTarget: true,
    fromElement: true,
    changedTouches: true,
    layerX: true,
    layerY: true,
    deltaX: true,
    deltaY: true
},
    makeSelectiveCopy = R.makeSelectiveCopy = function (target, source) {
    var _loop = function _loop(_eve) {
        if (eventCopyList[_eve] === 'fn') {
            target[_eve] = function () {
                return function () {
                    source[_eve]();
                };
            }(source);
        } else {
            target[_eve] = source[_eve];
        }
    };

    for (var _eve in eventCopyList) {
        _loop(_eve);
    }
    target.originalEvent = source;
    // For IOS device
    target.type || (target.type = source.originalEvent && source.originalEvent.type);
},

// This function is used to add drag related events and element.mouseover/element.mouseout event.
// It is advised to use element.on instead
addEvent = R.addEvent = function () {
    if (g.doc.addEventListener) {
        return function (obj, type, fn, element) {
            // If pointer is supported then use pointer events else use default events
            var realName = supportsPointer ? safePointerEventMapping[type] : supportsTouch ? touchMap[type] : type,
                f,
                args;
            // capture mode false is included in the eventListener function only when it is a non-IE device.
            // For all IE device rendering svg we have have a specific bug in the browser. If we use {}, {capture: false}
            // or {capture: true}, irrespective of the boolean value it always sets {capture: true} for events attached
            // on body and div which results in bug when stopPropagation is called.
            if (!isIE) {
                args = {
                    capture: false
                };
            }

            /**
             * Special case for pointerup
             * When dragged over an element then pointer up is not fired, so we have to associate
             * respective events for various browsers
             */
            if (element.dragFn) {
                if (realName === 'pointerup') {
                    realName = 'mouseup';
                } else if (realName === UNDEF) {
                    // for hybrid devices
                    realName = 'touchend';
                }
            }

            f = function f(e) {
                var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                    scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                    target;
                if (supportsTouch && touchMap[type]) {
                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        target = e.targetTouches[i].target;
                        if (target === obj || target.nodeName === 'tspan' && target.parentNode === obj) {
                            var olde = e;
                            e = e.targetTouches[i];
                            e.originalEvent = olde;
                            e.preventDefault = preventTouch;
                            e.stopPropagation = stopTouch;
                            break;
                        }
                    }
                }
                return fn.call(element, e, e.clientX + scrollX, e.clientY + scrollY);
            };
            obj.addEventListener(realName, f, args);
            return function () {
                obj.removeEventListener(realName, f, args);
                return true;
            };
        };
    } else if (g.doc.attachEvent) {
        return function (obj, type, fn, element) {
            var f = function f(e) {
                e = e || g.win.event;
                var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                    scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                    x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                e.preventDefault = e.preventDefault || preventDefault;
                e.stopPropagation = e.stopPropagation || stopPropagation;
                return fn.call(element, e, x, y);
            };
            obj.attachEvent("on" + type, f);
            var detacher = function detacher() {
                obj.detachEvent("on" + type, f);
                return true;
            };
            return detacher;
        };
    }
}(),
    dragMove = function dragMove(e) {
    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
        scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
        x = (e.clientX !== UNDEF ? e.clientX : e.changedTouches && e.changedTouches[0].clientX) + scrollX,
        y = (e.clientY !== UNDEF ? e.clientY : e.changedTouches && e.changedTouches[0].clientY) + scrollY,
        data,
        dummyEve = {},
        el = this,
        j = el.dragInfo.onmove.length;

    // Setting the minimum threshold of 2 pixels to trigger dragmove
    // el.blockDrag is true during pinch zoom in touch devices
    if (el.dragStartFn && !(Math.abs(x - el._drag.x) >= 2.5 || Math.abs(y - el._drag.y) >= 2.5) || el._blockDrag || supportsPointer && supportsTouch && !e.isPrimary) {
        return;
    }

    while (j--) {
        if (supportsTouch && e.type === 'touchmove') {
            var i = e.touches.length,
                touch;
            while (i--) {
                touch = e.touches[i];
                if (touch.identifier === el._drag.id) {
                    x = touch.clientX + scrollX;
                    y = touch.clientY + scrollY;
                    break;
                }
            }
        }

        if (el.removed) {
            continue;
        }

        if (el.dragStartFn) {
            el.dragStartFn(j);
            el.dragStartFn = undefined;
            el.dragInfo._dragmove = true;
        }

        if (g.win.opera) {
            var node = R._engine.getNode(el),
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;

            parent.removeChild(node);

            node.style.display = NONE;
            node.style.display = display;
            next ? parent.insertBefore(node, next) : parent.appendChild(node);
        }
        //Function to copy some properties of the actual event into the dummy event
        makeSelectiveCopy(dummyEve, e);

        data = dummyEve.data = [x - el._drag.x, y - el._drag.y, x, y];
        (0, _eve3['default'])("raphael.drag.move." + el.id, el.dragInfo.move_scope[j] || el, dummyEve, data);
    }
},
    dragUp = function dragUp(e) {
    var el = this,
        dragInfo = el.dragInfo,
        i = dragInfo.onend.length;

    // Dragend handler is called only when dragmove is fired
    if (el.dragInfo._dragmove) {
        while (i--) {
            el._drag = {};
            (0, _eve3['default'])("raphael.drag.end." + el.id, dragInfo.end_scope[i] || dragInfo.start_scope[i] || dragInfo.move_scope[i] || el, e);
        }
    }
    el.dragInfo._dragmove = undefined;
    supportsTouch && !(isIE11 || isEdge) && !(isWindows && isFirefox) && (el.paper.canvas.style['touch-action'] = 'auto');
    // After execution of the callbacks the eventListeners are removed
    R.undragmove.call(el, dragMove);
    R.undragend.call(el, dragUp);
    R.unmousemove.call(el, dragMove).unmouseup.call(el, dragUp);
},


/*\
 * Raphael.el
 [ property (object) ]
 **
 * You can add your own method to elements. This is usefull when you want to hack default functionality or
 * want to wrap some common transformation or attributes in one method. In difference to canvas methods,
 * you can redefine element method at any time. Expending element methods wouldn’t affect set.
 > Usage
 | Raphael.el.red = function () {
 |     this.attr({fill: "#f00"});
 | };
 | // then use it
 | paper.circle(100, 100, 20).red();
\*/
elproto = R.el = {};

/*\
 * Element.click
 [ method ]
 **
 * Adds event handler for click for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.unclick
 [ method ]
 **
 * Removes event handler for click for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.dblclick
 [ method ]
 **
 * Adds event handler for double click for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.undblclick
 [ method ]
 **
 * Removes event handler for double click for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.mousedown
 [ method ]
 **
 * Adds event handler for mousedown for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.unmousedown
 [ method ]
 **
 * Removes event handler for mousedown for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.mousemove
 [ method ]
 **
 * Adds event handler for mousemove for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.unmousemove
 [ method ]
 **
 * Removes event handler for mousemove for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.mouseout
 [ method ]
 **
 * Adds event handler for mouseout for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.unmouseout
 [ method ]
 **
 * Removes event handler for mouseout for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.mouseover
 [ method ]
 **
 * Adds event handler for mouseover for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.unmouseover
 [ method ]
 **
 * Removes event handler for mouseover for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.mouseup
 [ method ]
 **
 * Adds event handler for mouseup for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.unmouseup
 [ method ]
 **
 * Removes event handler for mouseup for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.touchstart
 [ method ]
 **
 * Adds event handler for touchstart for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.untouchstart
 [ method ]
 **
 * Removes event handler for touchstart for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.touchmove
 [ method ]
 **
 * Adds event handler for touchmove for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.untouchmove
 [ method ]
 **
 * Removes event handler for touchmove for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.touchend
 [ method ]
 **
 * Adds event handler for touchend for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.untouchend
 [ method ]
 **
 * Removes event handler for touchend for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/

/*\
 * Element.touchcancel
 [ method ]
 **
 * Adds event handler for touchcancel for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
/*\
 * Element.untouchcancel
 [ method ]
 **
 * Removes event handler for touchcancel for the element.
 > Parameters
 - handler (function) handler for the event
 = (object) @Element
\*/
for (var i = events.length; i--;) {
    (function (eventName) {
        // tragetElem is introducded if we want to add the evt listener on a different dom based on some
        // specific events, eg - dragMovde and dragEnd
        R[eventName] = elproto[eventName] = function (fn, scope, tragetElem) {
            if (R.is(fn, FUNCTION)) {
                this.events = this.events || [];
                this.events.push({
                    name: eventName,
                    f: fn,
                    unbind: addEvent(tragetElem || this.shape || this.node || g.doc, eventName, fn, scope || this)
                });
            }
            return this;
        };
        R["un" + eventName] = elproto["un" + eventName] = function (fn) {
            var events = this.events || [],
                l = events.length;
            while (l--) {
                if (events[l].name === eventName && events[l].f === fn) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
            }return this;
        };
    })(events[i]);
}

/*\
 * Element.data
 [ method ]
 **
 * Adds or retrieves given value asociated with given key.
 **
 * See also @Element.removeData
 > Parameters
 - key (string) key to store data
 - value (any) #optional value to store
 = (object) @Element
 * or, if value is not specified:
 = (any) value
 > Usage
 | for (var i = 0, i < 5, i++) {
 |     paper.circle(10 + 15 * i, 10, 10)
 |          .attr({fill: "#000"})
 |          .data("i", i)
 |          .fcclick(function () {
 |             alert(this.data("i"));
 |          });
 | }
\*/
elproto.data = function (key, value) {
    var data = eldata[this.id] = eldata[this.id] || {};
    if (arguments.length === 1) {
        if (R.is(key, OBJECT)) {
            for (var i in key) {
                if (key[HAS](i)) {
                    this.data(i, key[i]);
                }
            }return this;
        }
        R.stopPartialEventPropagation || (0, _eve3['default'])("raphael.data.get." + this.id, this, data[key], key);
        return data[key];
    }
    data[key] = value;
    R.stopPartialEventPropagation || (0, _eve3['default'])("raphael.data.set." + this.id, this, value, key);
    return this;
};

/*\
 * Element.removeData
 [ method ]
 **
 * Removes value associated with an element by given key.
 * If key is not provided, removes all the data of the element.
 > Parameters
 - key (string) #optional key
 = (object) @Element
\*/
elproto.removeData = function (key) {
    if (key == null) {
        delete eldata[this.id];
    } else {
        eldata[this.id] && delete eldata[this.id][key];
    }
    return this;
};

elproto.dbclick = function (handler, context) {
    var elem = this,
        eventType = void 0,
        isSingleFinger = function isSingleFinger(event) {
        return !event.touches || event.touches && event.touches.length === 1;
    },
        fn = function fn(e) {
        // Check for multi-touch devices. When 2 finger touch is done then pointerup
        // is fired twice resulting into double click zoom
        if (supportsPointer && !e.isPrimary) {
            return;
        }
        e && e.preventDefault();
        if (!isSingleFinger(e)) {
            return;
        }
        if (elem._tappedOnce) {
            handler.call(context || elem, e);
            elem._tappedOnce = false;
        } else {
            elem._tappedOnce = true;
            // 500ms time for double tap expiration
            setTimeout(function () {
                elem._tappedOnce = false;
            }, 500);
        }
    };

    eventType = supportsPointer ? 'pointerup' : R.supportsTouch ? 'touchstart' : 'mouseup';

    elem.node.addEventListener(eventType, fn);
    R.storeHandlers(elem, handler, fn);
};

elproto.undbclick = function (handler) {
    var elem = this,
        derivedHandler = removeHandlers(elem, handler);

    derivedHandler && elem.node.removeEventListener(supportsPointer ? 'pointerup' : R.supportsTouch ? 'touchstart' : 'mouseup', derivedHandler);
};

/*\
* Element.getData
[ method ]
**
* Retrieves the element data
= (object) data
\*/
elproto.getData = function () {
    return clone(eldata[this.id] || {});
};

var downables = [],
    mouseDown = function mouseDown() {
    this.untrack = addEvent(g.doc, 'mouseup', mouseUp, this);
},
    mouseUp = function mouseUp() {
    this.untrack();
    this.untrack = null;
    return this.fn && this.fn.apply(this.scope || this.el, arguments);
};
elproto.mouseup = function (fn, scope, track, tragetElem) {
    if (!track) {
        return R.mouseup.apply(this, [fn, scope, tragetElem]);
    }
    downables.push(track = {
        el: this,
        fn: fn,
        scope: scope
    });
    track.unbind = addEvent(this.shape || this.node || g.doc, 'mousedown', mouseDown, track);

    return this;
};

elproto.unmouseup = function (fn) {
    var i = downables.length,
        undowned;
    while (i--) {
        if (downables[i].el === this && downables[i].fn === fn) {
            undowned = downables[i];
            undowned.unbind();
            undowned.untrack && undowned.untrack();
            downables.splice(i, 1);
        }
    }
    return undowned ? this : R.unmouseup.apply(this, arguments);
};

/*\
 * Element.hover
 [ method ]
 **
 * Adds event handlers for hover for the element.
 > Parameters
 - f_in (function) handler for hover in
 - f_out (function) handler for hover out
 - icontext (object) #optional context for hover in handler
 - ocontext (object) #optional context for hover out handler
 = (object) @Element
\*/
elproto.hover = function (f_in, f_out, scope_in, scope_out) {
    return this.on('fc-mouseover', f_in, scope_in).on('fc-mouseout', f_out, scope_out);
};

/*\
 * Element.unhover
 [ method ]
 **
 * Removes event handlers for hover for the element.
 > Parameters
 - f_in (function) handler for hover in
 - f_out (function) handler for hover out
 = (object) @Element
\*/
elproto.unhover = function (f_in, f_out) {
    return this.off('fc-mouseover', f_in).off('fc-mouseout', f_out);
};

elproto.fcclick = function (handler, context) {
    var elem = this,
        node = elem.node,
        eventType,
        fn,
        x1,
        y1,
        downFn = function downFn(e) {
        elem._lastEventTriggered = 'mousedown';
        // Storing the mouse down coordinates
        x1 = e.clientX !== UNDEF ? e.clientX : e.changedTouches && e.changedTouches[0].clientX;
        y1 = e.clientY !== UNDEF ? e.clientY : e.changedTouches && e.changedTouches[0].clientY;
    },
        moveFn = function moveFn(e) {
        var x2 = e.clientX !== UNDEF ? e.clientX : e.changedTouches && e.changedTouches[0].clientX,
            y2 = e.clientY !== UNDEF ? e.clientY : e.changedTouches && e.changedTouches[0].clientY;
        // maintaning a minimum pixel gap of 2.5 to trigger mousemove
        if (Math.abs(x1 - x2) >= 2.5 || Math.abs(y1 - y2) >= 2.5) {
            elem._lastEventTriggered = undefined;
        }
    },
        content;
    elem._clickStoreActual || (elem._clickStoreActual = []);
    elem._clickStoreDerived || (elem._clickStoreDerived = []);

    // Helper functions of click attached only once
    if (!elem._clickHandlerHelper) {
        // For devices that does not support pointer
        if (!supportsPointer && R.supportsTouch) {
            content = {
                touchstart: function touchstart() {
                    elem._lastEventTriggered = 'touchstart';
                    elem._lastEventTriggeredAt = new Date().getTime();
                },
                touchmove: moveFn
            };
        } else if (supportsPointer && R.supportsTouch) {
            // For touch device supporting pointers
            content = {
                pointerdown: downFn,
                pointermove: moveFn
            };
        } else {
            content = {
                mousedown: downFn,
                mousemove: moveFn
            };
        }

        for (eventType in content) {
            if (node.addEventListener) {
                node.addEventListener(eventType, content[eventType]);
            } else {
                node.attachEvent('on' + eventType, content[eventType]);
            }
        }
        elem._clickHandlerHelper = content;
    }

    // Creating the actual handler
    if (!supportsPointer && R.supportsTouch) {
        eventType = 'touchend', fn = function fn(e) {
            // Restricting click to be called after touchmove followed by touchstart
            // Restricting click to be triggered after long tap
            if (elem._lastEventTriggered === 'touchstart' && new Date().getTime() - elem._lastEventTriggeredAt <= 500) {
                setTimeout(function () {
                    handler.call(context || elem, e);
                }, 0);
            }
        };
    } else {
        eventType = 'click', fn = function fn(e) {
            // Restricting click to be called after mousemove followed by mousedown
            elem._lastEventTriggered === 'mousedown' && handler.call(context || elem, e);
        };
    }

    if (node.addEventListener) {
        node.addEventListener(eventType, fn);
    } else {
        node.attachEvent('on' + eventType, fn);
    }

    // Stroring the events for future removal
    elem._clickStoreDerived.push(fn);
    elem._clickStoreActual.push(handler);
    return elem;
};

elproto.fcunclick = function (handler) {
    var elem = this,
        node = elem.node,
        i,
        eventType,
        clickHandlerHelper = elem._clickHandlerHelper,
        clickStoreActual = elem._clickStoreActual,
        clickStoreDerived = elem._clickStoreDerived;

    if (clickStoreActual) {
        for (i = clickStoreActual.length - 1; i >= 0; i--) {
            if (clickStoreActual[i] === handler) {
                if (node.removeEventListener) {
                    node.removeEventListener(!supportsPointer && R.supportsTouch ? 'touchend' : 'click', clickStoreDerived[i]);
                } else {
                    node.detachEvent('onclick', clickStoreDerived[i]);
                }
                clickStoreActual.splice(i, 1);
                clickStoreDerived.splice(i, 1);
            }
        }

        // When all click listeners are removed
        if (!clickStoreActual.length) {
            for (eventType in clickHandlerHelper) {
                if (node.removeEventListener) {
                    node.removeEventListener(eventType, clickHandlerHelper[eventType]);
                } else {
                    node.detachEvent('on' + eventType, clickHandlerHelper[eventType]);
                }
            }
            elem._clickHandlerHelper = undefined;
        }
    }
    return elem;
};
var draggable = [];

/*\
 * Element.drag
 [ method ]
 **
 * Adds event handlers for drag of the element.
 > Parameters
 - onmove (function) handler for moving
 - onstart (function) handler for drag start
 - onend (function) handler for drag end
 - mcontext (object) #optional context for moving handler
 - scontext (object) #optional context for drag start handler
 - econtext (object) #optional context for drag end handler
 * Additionaly following `drag` events will be triggered: `drag.start.<id>` on start,
 * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element
 * `drag.over.<id>` will be fired as well.
 *
 * Start event and start handler will be called in specified context or in context of the element with following parameters:
 o x (number) x position of the mouse
 o y (number) y position of the mouse
 o event (object) DOM event object
 * Move event and move handler will be called in specified context or in context of the element with following parameters:
 o dx (number) shift by x from the start point
 o dy (number) shift by y from the start point
 o x (number) x position of the mouse
 o y (number) y position of the mouse
 o event (object) DOM event object
 * End event and end handler will be called in specified context or in context of the element with following parameters:
 o event (object) DOM event object
 = (object) @Element
\*/
elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
    var element = this,
        dragInfo = element.dragInfo || (element.dragInfo = {
        // Store all the callbacks for various eventListeners on the same element
        onmove: [],
        onstart: [],
        onend: [],
        move_scope: [],
        start_scope: [],
        end_scope: []
    });
    // Storing the callback functions and scopes in any
    onmove && dragInfo.onmove.push(onmove) && dragInfo.move_scope.push(move_scope);
    onstart && dragInfo.onstart.push(onstart) && dragInfo.start_scope.push(start_scope);
    onend && dragInfo.onend.push(onend) && dragInfo.end_scope.push(end_scope);

    element.dragFn = element.dragFn || function (e) {
        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
            dummyEve = {},
            data,
            i,
            j,
            k,
            ii,
            jj,
            kk,
            dummydragMoveFn,
            _dragX,
            _dragY,
            dragInfo = element.dragInfo,
            args = [dragMove, undef, g.doc];
        // Diabling drag incase of multi touch
        if (supportsPointer && !e.isPrimary) {
            return;
        }
        // Blocking page scroll when drag is triggered
        if (supportsTouch) {
            if (!supportsPointer) {
                e.preventDefault();
            } else if (!(isIE11 || isEdge) && !(isWindows && isFirefox)) {
                element.paper.canvas.style['touch-action'] = 'none';
            }
        }
        // In hybrid devices, sometimes the e.clientX and e.clientY is not defined
        element._drag.x = _dragX = (e.clientX !== UNDEF ? e.clientX : e.changedTouches && e.changedTouches[0].clientX) + scrollX;
        element._drag.y = _dragY = (e.clientY !== UNDEF ? e.clientY : e.changedTouches && e.changedTouches[0].clientY) + scrollY;
        element._drag.id = e.identifier;

        // For IOS touch devices
        if (supportsTouch && !supportsPointer) {
            R.dragmove.apply(element, args);
        } else {
            R.mousemove.apply(element, args).mouseup.call(element, dragUp, undef, undef, g.doc);
        }

        if (supportsTouch) {
            // dragEnd is added for hybrid devices and other touch devices
            R.dragend.call(element, dragUp, undef, g.doc);
        }

        //Function to copy some properties of the actual event into the dummy event
        makeSelectiveCopy(dummyEve, e);

        data = dummyEve.data = [_dragX, _dragY];

        // Attaching handlers for various events
        for (i = 0, ii = dragInfo.onstart.length; i < ii; i++) {
            _eve3['default'].on("raphael.drag.start." + element.id, dragInfo.onstart[i]);
        }

        for (j = 0, jj = dragInfo.onmove.length; j < jj; j++) {
            _eve3['default'].on("raphael.drag.move." + element.id, dragInfo.onmove[j]);
        }

        for (k = 0, kk = dragInfo.onend.length; k < kk; k++) {
            _eve3['default'].on("raphael.drag.end." + element.id, dragInfo.onend[k]);
        }

        // Where there is no dragMove but there is dragStart handler
        // The logic is implemented as dragstart is fired only when there is mousedown followed by mousemove
        if (ii && !jj) {
            dummydragMoveFn = function dummydragMoveFn() {
                element.undragmove();
                dragInfo.onmove = [];
            };
            dragInfo.onmove.push(dummydragMoveFn);
            _eve3['default'].on("raphael.drag.end." + element.id, dummydragMoveFn);
        }

        // Queuing up the dragStartFn. It is fired if dragmove is fired after dragStart
        element.dragStartFn = function (i) {
            (0, _eve3['default'])("raphael.drag.start." + element.id, element.dragInfo.start_scope[i] || element.dragInfo.move_scope[i] || element, dummyEve, data);
        };
    };
    element._drag = {};
    draggable.push({
        el: element,
        start: element.dragFn,
        onstart: onstart,
        onmove: onmove,
        onend: onend
    });

    if (onstart && !element.startHandlerAttached) {
        // For IOS touch devices
        if (supportsTouch && !supportsPointer) {
            element.dragstart(element.dragFn);
        } else {
            element.mousedown(element.dragFn);
        }
        element.startHandlerAttached = true;
    }

    return element;
};

/*\
 * Element.onDragOver
 [ method ]
 **
 * Shortcut for assigning event handler for `drag.over.<id>` event, where id is id of the element (see @Element.id).
 > Parameters
 - f (function) handler for event, first argument would be the element you are dragging over
\*/
elproto.onDragOver = function (f) {
    f ? _eve3['default'].on("raphael.drag.over." + this.id, f) : _eve3['default'].unbind("raphael.drag.over." + this.id);
};

/*\
 * Element.undrag
 [ method ]
 **
 * Removes all drag event handlers from given element.
\*/
elproto.undrag = function () {
    var elem = this,
        i = draggable.length;
    while (i--) {
        if (draggable[i].el === elem) {
            elem.unmousedown(elem.dragFn);
            draggable.splice(i, 1);
            _eve3['default'].unbind("raphael.drag.*." + elem.id);
            elem.dragInfo = undefined;
            elem.dragFn = undefined;
            elem.startHandlerAttached = undefined;
        }
    }

    R.unmousemove.call(elem, dragMove).unmouseup.call(elem, dragUp);
    R.undragmove.call(elem, dragMove);
    R.undragend.call(elem, dragUp);
    delete elem._drag;
};

/**
 * Function to remove the individual dragStart handler from the element. If no handler is provided, all the dragMove
 * handlers are removed.
 */
elproto.undragstart = function (handler) {
    var elem = this,
        dragInfo = elem.dragInfo,
        onstart = dragInfo && dragInfo.onstart,
        i,
        ii,
        start_scope = dragInfo && dragInfo.start_scope;

    if (handler) {
        for (i = 0, ii = onstart && onstart.length; i < ii; i++) {
            if (onstart[i] === handler) {
                onstart.splice(i, 1);
                start_scope.splice(i, 1);
                _eve3['default'].unbind("raphael.drag.start." + this.id, handler);
                break;
            }
        }
    }

    if (!(onstart && onstart.length) || !handler) {
        R.undragstart.call(elem, elem.dragFn);
        R.unmousedown.call(elem, elem.dragFn);
        _eve3['default'].unbind("raphael.drag.start." + this.id);
        // Setting the flag for drag start as false
        elem.startHandlerAttached = false;
        dragInfo && (dragInfo.onstart = [], dragInfo.start_scope = []);
    }
};

/**
 * Function to remove the individual dragMove handler from the element. If no handler is provided, all the dragMove
 * handlers are removed.
 */
elproto.undragmove = function (handler) {
    var elem = this,
        dragInfo = elem.dragInfo,
        onmove = dragInfo && dragInfo.onmove,
        i,
        ii,
        move_scope = dragInfo && dragInfo.move_scope;

    if (handler) {
        for (i = 0, ii = onmove && onmove.length; i < ii; i++) {
            if (onmove[i] === handler) {
                onmove.splice(i, 1);
                move_scope.splice(i, 1);
                _eve3['default'].unbind("raphael.drag.move." + this.id, handler);
                break;
            }
        }
    }

    if (!(onmove && onmove.length) || !handler) {
        R.undragmove.call(elem, dragMove);
        R.unmousemove.call(elem, dragMove);
        dragInfo && (dragInfo.onmove = [], dragInfo.move_scope = []);
        _eve3['default'].unbind("raphael.drag.move." + this.id);
    }
};

/**
 * Function to remove the individual dragStart handler from the element. If no handler is provided, all the dragEnd
 * handlers are removed.
 */
elproto.undragend = function (handler) {
    var elem = this,
        dragInfo = elem.dragInfo,
        onend = dragInfo && dragInfo.onend,
        i,
        ii,
        end_scope = dragInfo && dragInfo.end_scope;

    if (handler) {
        for (i = 0, ii = onend && onend.length; i < ii; i++) {
            if (onend[i] === handler) {
                onend.splice(i, 1);
                end_scope.splice(i, 1);
                _eve3['default'].unbind("raphael.drag.end." + this.id, handler);
                break;
            }
        }
    }

    if (!(onend && onend.length) || !handler) {
        R.undragend.call(elem, dragUp);
        R.unmouseup.call(elem, dragUp);
        dragInfo && (dragInfo.onend = [], dragInfo.end_scope = []);
        _eve3['default'].unbind("raphael.drag.end." + this.id);
    }
};

elproto.follow = function (el, callback, stalk) {
    if (el.removed || el.constructor !== R.el.constructor) {
        return this;
    }
    el.followers.push({
        el: this,
        stalk: stalk = { before: 'insertBefore', after: 'insertAfter' }[stalk],
        cb: callback
    });

    stalk && this[stalk](el);
    return this;
};

elproto.unfollow = function (el) {
    if (el.removed || el.constructor !== R.el.constructor) {
        return this;
    }
    for (var i = 0, ii = el.followers.length; i < ii; i++) {
        if (el.followers[i].el === this) {
            el.followers.splice(i, 1);
            break;
        }
    }
    return this;
};

/*\
 * Paper.hide
 [ method ]
 **
 * Hides a paper
 **
 > Usage
 | paper.hide();
\*/
paperproto.hide = function () {
    var paper = this;
    paper.canvas.style.visibility = "hidden";
    return paper;
};

/*\
 * Paper.show
 [ method ]
 **
 * Shows a hidden paper
 **
 > Usage
 | paper.show();
\*/
paperproto.show = function () {
    var paper = this;
    paper.canvas.style.visibility = E;
    return paper;
};

/*\
 * Paper.group
 [ method ]
 **
 * Creates a group
 **
 > Parameters
 **
 - id (number) id of the group
 = (object) Raphaël element object with type “group”
 **
 > Usage
 | var g = paper.group();
\*/
paperproto.group = function () {
    // id
    var paper = this,
        args = (0, _raphael.getArrayCopy)(arguments),
        group = lastArgIfGroup(args, true),
        out = R._engine.group(paper, args[0], group, !!args[1]);
    return paper.__set__ && paper.__set__.push(out), paper._elementsById[out.id] = out;
};

/*\
 * Paper.circle
 [ method ]
 **
 * Draws a circle.
 **
 > Parameters
 **
 - x (number) x coordinate of the centre
 - y (number) y coordinate of the centre
 - r (number) radius
 = (object) Raphaël element object with type “circle”
 **
 > Usage
 | var c = paper.circle(50, 50, 40);
\*/
paperproto.circle = function () {
    // x, y, r
    var paper = this,
        args = (0, _raphael.getArrayCopy)(arguments),
        group = lastArgIfGroup(args, true),
        attrs = paper._addDefAttribs() ? serializeArgs(args, "cx", 0, "cy", 0, "r", 0, "fill", NONE, "stroke", BLACK) : serializeArgs(args),
        out = R._engine.circle(paper, attrs, group);

    return paper.__set__ && paper.__set__.push(out), paper._elementsById[out.id] = out;
};

/*\
 * Paper.rect
 [ method ]
 *
 * Draws a rectangle.
 **
 > Parameters
 **
 - x (number) x coordinate of the top left corner
 - y (number) y coordinate of the top left corner
 - width (number) width
 - height (number) height
 - r (number) #optional radius for rounded corners, default is 0
 = (object) Raphaël element object with type “rect”
 **
 > Usage
 | // regular rectangle
 | var c = paper.rect(10, 10, 50, 50);
 | // rectangle with rounded corners
 | var c = paper.rect(40, 40, 50, 50, 10);
\*/
paperproto.rect = function () {
    var paper = this,
        args = (0, _raphael.getArrayCopy)(arguments),
        group = lastArgIfGroup(args, true),
        attrs = paper._addDefAttribs() ? serializeArgs(args, "x", 0, "y", 0, "width", 0, "height", 0, "r", 0, "fill", NONE, "stroke", BLACK) : serializeArgs(args),
        out = R._engine.rect(paper, attrs, group);

    return paper.__set__ && paper.__set__.push(out), paper._elementsById[out.id] = out;
};

/*\
 * Paper.ellipse
 [ method ]
 **
 * Draws an ellipse.
 **
 > Parameters
 **
 - x (number) x coordinate of the centre
 - y (number) y coordinate of the centre
 - rx (number) horizontal radius
 - ry (number) vertical radius
 = (object) Raphaël element object with type “ellipse”
 **
 > Usage
 | var c = paper.ellipse(50, 50, 40, 20);
\*/
paperproto.ellipse = function () {
    var paper = this,
        args = (0, _raphael.getArrayCopy)(arguments),
        group = lastArgIfGroup(args, true),
        attrs = paper._addDefAttribs() ? serializeArgs(args, "x", 0, "y", 0, "rx", 0, "ry", 0, "fill", NONE, "stroke", BLACK) : serializeArgs(args),
        out = R._engine.ellipse(this, attrs, group);

    return paper.__set__ && paper.__set__.push(out), paper._elementsById[out.id] = out;
};

/*\
 * Paper.path
 [ method ]
 **
 * Creates a path element by given path data string.
 > Parameters
 - pathString (string) #optional path string in SVG format.
 * Path string consists of one-letter commands, followed by comma seprarated arguments in numercal form. Example:
 | "M10,20L30,40"
 * Here we can see two commands: “M”, with arguments `(10, 20)` and “L” with arguments `(30, 40)`. Upper case letter mean command is absolute, lower case—relative.
 *
 # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a>.</p>
 # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
 # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
 # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
 # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
 # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
 # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
 # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
 # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
 # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
 # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
 # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
 # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
 * * “Catmull-Rom curveto” is a not standard SVG command and added in 2.0 to make life easier.
 * Note: there is a special case when path consist of just three commands: “M10,10R…z”. In this case path will smoothly connects to its beginning.
 > Usage
 | var c = paper.path("M10 10L90 90");
 | // draw a diagonal line:
 | // move to 10,10, line to 90,90
 * For example of path strings, check out these icons: http://raphaeljs.com/icons/
\*/
paperproto.path = function () {
    var paper = this,
        args = (0, _raphael.getArrayCopy)(arguments),
        group = lastArgIfGroup(args, true),
        paperConfig = paper.config,
        capStyle = paperConfig && paperConfig["stroke-linecap"] || "butt",
        attrs = paper._addDefAttribs() ? serializeArgs(args, "path", E, "fill", NONE, "stroke", BLACK, "stroke-linecap", capStyle) : serializeArgs(args),
        out = R._engine.path(paper, attrs, group);
    return paper.__set__ && paper.__set__.push(out), paper._elementsById[out.id] = out;
};

/*\
 * Paper.image
 [ method ]
 **
 * Embeds an image into the surface.
 **
 > Parameters
 **
 - src (string) URI of the source image
 - x (number) x coordinate position
 - y (number) y coordinate position
 - width (number) width of the image
 - height (number) height of the image
 = (object) Raphaël element object with type “image”
 **
 > Usage
 | var c = paper.image("apple.png", 10, 10, 80, 80);
\*/
paperproto.image = function () {
    var paper = this,
        args = (0, _raphael.getArrayCopy)(arguments),
        group = lastArgIfGroup(args, true),
        attrs = paper._addDefAttribs() ? serializeArgs(args,
    // "src", E,
    "x", 0, "y", 0, "width", 0, "height", 0) : serializeArgs(args),
        out = R._engine.image(paper, attrs, group);
    return paper.__set__ && paper.__set__.push(out), paper._elementsById[out.id] = out;
};

/*\
 * Paper.text
 [ method ]
 **
 * Draws a text string. If you need line breaks, put “\n” in the string.
 **
 > Parameters
 **
 - x (number) x coordinate position
 - y (number) y coordinate position
 - text (string) The text string to draw
 = (object) Raphaël element object with type “text”
 **
 > Usage
 | var t = paper.text(50, 50, "Raphaël\nkicks\nbutt!");
\*/
paperproto.text = function () {
    var paper = this,
        args = (0, _raphael.getArrayCopy)(arguments),
        group = lastArgIfGroup(args, true),
        attrs = paper._addDefAttribs() ? serializeArgs(args, "x", 0, "y", 0, "text", E, "stroke", NONE, "fill", BLACK, "text-anchor", "middle", "vertical-align", "middle") : serializeArgs(args),
        out = R._engine.text(paper, attrs, group, args[1]);
    return paper.__set__ && paper.__set__.push(out), paper._elementsById[out.id] = out;
};

/*\
 * Paper._addDefAttribs
 [ method ]
 **
 * Whether we need to set default attributes or not
\*/
paperproto._addDefAttribs = function () {
    // For SVG browsers and if paper has flag set for not to use default attributes
    return !(R.svg && this.config && this.config.noDefaultAttribs);
};

/*\
 * Paper.setConfig
 [ method ]
 **
 * If you need to store any configuration in paper, call this method
 **
 > Parameters
 **
 - key (String) key name of the key-value pair
 - value (String or number) value of the key-value pair
\*/
paperproto.setConfig = function (key, value) {
    var paper = this;

    if (key !== undefined && value !== undefined) {
        paper.config = paper.config || {};
        paper.config[key] = value;
    }
    return paper.config;
};

/*\
 * Paper._createDOMNodes
 [ method ]
 **
 * Create DOM nodes with nested children
 **
 > Parameters
 **
 - parentElem (object) parent element node
 - elemObj (object) nested input object to create elements
 - returnObj (object) object reference which will be returned
 **
 > Usage
 | paper._createDOMNodes(parentElementNode, {
 |       tagName: 'filter',
 |       id: 'filter-0',
 |       width: '200%',
 |       height: '200%',
 |       children: [{
 |           tagName: 'feOffset',
 |           result: 'offOut',
 |           in: 'SourceGraphic',
 |           dx: '1',
 |           dy: '1'
 |       }, {
 |           tagName: 'feColorMatrix',
 |           result: 'matrixOut',
 |           in: 'offOut',
 |           type: 'matrix',
 |           values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
 |       }, {
 |           tagName: 'feGaussianBlur',
 |           result: 'blurOut',
 |           in: 'matrixOut',
 |           stdDeviation: '1'
 |       }, {
 |           tagName: 'feComposite',
 |           in: 'SourceGraphic',
 |           in2: 'blurOut',
 |           operator: 'over'
 |       }]
 |   });
\*/
paperproto._createDOMNodes = function (parentElem, elementObj, returnObj) {
    var paper = this,
        ele,
        i,
        len,
        attr = {},
        attrKey,
        createNode = R._createNode,
        tagName = elementObj.tagName,
        children = elementObj.children || [];
    !returnObj && (returnObj = {});
    for (attrKey in elementObj) {
        if (attrKey !== 'tagName' && attrKey !== 'children') {
            attr[attrKey] = elementObj[attrKey];
        }
    }

    !attr.id && (attr.id = R.getElementID(R.createUUID()));

    if (!paper.canvas.getElementById(attr.id) && tagName) {
        ele = parentElem.appendChild(createNode(tagName, attr));
        returnObj.element = ele;
        returnObj.id = attr.id;
        len = children.length;
        len > 0 && (returnObj.children = []);
        for (i = 0; i < len; i++) {
            returnObj.children[i] = {};
            paper._createDOMNodes(ele, children[i], returnObj.children[i]);
        }
    }
    return returnObj;
};

/*\
 * Paper.addDefs
 [ method ]
 **
 * Add definitions in paper
 **
 > Parameters
 **
 - elemObj (object) nested input object to create elements
 **
 > Usage
 | var ob = paper.addDefs({
 |   filter0: { // key
 |       tagName: 'filter',
 |       id: 'filter-0',
 |       width: '200%',
 |       height: '200%',
 |       children: [{
 |           tagName: 'feOffset',
 |           result: 'offOut',
 |           in: 'SourceGraphic',
 |           dx: '1',
 |           dy: '1'
 |       }, {
 |           tagName: 'feColorMatrix',
 |           result: 'matrixOut',
 |           in: 'offOut',
 |           type: 'matrix',
 |           values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
 |       }, {
 |           tagName: 'feGaussianBlur',
 |           result: 'blurOut',
 |           in: 'matrixOut',
 |           stdDeviation: '1'
 |       }, {
 |           tagName: 'feComposite',
 |           in: 'SourceGraphic',
 |           in2: 'blurOut',
 |           operator: 'over'
 |       }]
 |   }
 | });
 | // Creates a 'filter' definition element of id, 'filter-0', with width, height as it's attributes
 | // Creates feOffset, feColorMatrix, feGaussianBlur, feComposite as children elements
 | // under the 'filter' definition element
\*/
paperproto.addDefs = function (elemObj) {
    if (!R.svg) {
        return;
    }
    var paper = this,
        key,
        returnObj = {},
        defs = paper.defs;

    for (key in elemObj) {
        returnObj[key] = {};
        paper._createDOMNodes(defs, elemObj[key], returnObj[key]);
    }
    return returnObj;
};

/*\
 * Paper.setSize
 [ method ]
 **
 * If you need to change dimensions of the canvas call this method
 **
 > Parameters
 **
 - width (number) new width of the canvas
 - height (number) new height of the canvas
\*/
paperproto.setSize = function (width, height) {
    return R._engine.setSize.call(this, width, height);
};

/*\
 * paper.setDimension
 [ method ]
 **
 * If you need to change dimensions of the canvas call this method
 **
 > Parameters
 **
 - paramsObj (Object or number)
    - paramsObj (Object)
    **
    > Properties of paramsObj
    - width (number) new width of the canvas
    - height (number) new height of the canvas
    **
    - paramsObj (number) new width of the canvas
    **
 - height (number) new height of the canvas
\*/
paperproto.setDimension = function (paramsObj, height) {
    var paper = this,
        width;
    // Check if the first argument is an object or not
    if ((typeof paramsObj === 'undefined' ? 'undefined' : _typeof(paramsObj)) === OBJECT) {
        width = paramsObj.width;
        height = paramsObj.height;
        paper.setSize(paramsObj.width, paramsObj.height);
    } else {
        width = paramsObj;
        paper.setSize(width, height);
    }
};

paperproto.attr = function (name) {
    var element = this;
    if (name == null) {
        return {
            width: element.width,
            height: element.height
        };
    }
    if (R.is(name, STRING)) {
        return element[name];
    }

    element.setDimension(name);
    return element;
};

paperproto.status = function (anim, value) {
    return elproto.status.call(this, anim, value);
};

// Works exactly as paper.animateWith()
paperproto.animateWith = function (el, anim, params, ms, easing, callback, configObject) {
    return elproto.animateWith.call(this, el, anim, params, ms, easing, callback, configObject);
};

/*\
 * Paper.animate
 [ method ]
 **
 * If you need to animate dimensions of the canvas call this method
 **
 > Parameters
 **
 - paramsObj (Object)
    > Properties of paramsObj
    **
    - width (number) new width of the canvas
    - height (number) new height of the canvas
 - duration (number) time stretch in milliseconds to complete animation
 - effect (String) animation style
 - callback (function reference) method which will execute at end of animation
\*/
paperproto.animate = function (params, ms, easing, callback) {
    return elproto.animate.call(this, params, ms, easing, callback);
};

/*\
 * Paper.setViewBox
 [ method ]
 **
 * Sets the view box of the paper. Practically it gives you ability to zoom and pan whole paper surface by
 * specifying new boundaries.
 **
 > Parameters
 **
 - x (number) new x position, default is `0`
 - y (number) new y position, default is `0`
 - w (number) new width of the canvas
 - h (number) new height of the canvas
 - fit (boolean) `true` if you want graphics to fit into new boundary box
\*/
paperproto.setViewBox = function (x, y, w, h, fit) {
    return R._engine.setViewBox.call(this, x, y, w, h, fit);
};

paperproto.getById = function (id) {
    return this._elementsById[id] || null;
};

/*\
 * Paper.top
 [ property ]
 **
 * Points to the topmost element on the paper
\*/
/*\
 * Paper.bottom
 [ property ]
 **
 * Points to the bottom element on the paper
\*/
paperproto.top = paperproto.bottom = null;

/*\
 * Paper.raphael
 [ property ]
 **
 * Points to the @Raphael object/function
\*/
paperproto.raphael = R;

function x_y() {
    return this.x + S + this.y;
};
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
};

/*\
 * Element.getBBox
 [ method ]
 **
 * Return bounding box for a given element
 **
 > Parameters
 **
 - isWithoutTransform (boolean) flag, `true` if you want to have bounding box before transformations. Default is `false`.
 = (object) Bounding box object:
 o {
 o     x: (number) top left corner x
 o     y: (number) top left corner y
 o     x2: (number) bottom right corner x
 o     y2: (number) bottom right corner y
 o     width: (number) width
 o     height: (number) height
 o }
\*/
elproto.getBBox = function (isWithoutTransform) {
    if (this.removed) {
        return {};
    }
    var _ = this._;
    if (isWithoutTransform) {
        if (_.dirty || !_.bboxwt) {
            this.realPath = getPath[this.type](this);
            _.bboxwt = pathDimensions(this.realPath);
            _.bboxwt.toString = x_y_w_h;
            _.dirty = 0;
        }
        return _.bboxwt;
    }
    if (_.dirty || _.dirtyT || !_.bbox) {
        if (_.dirty || !this.realPath) {
            _.bboxwt = 0;
            this.realPath = getPath[this.type](this);
        }
        _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
        _.bbox.toString = x_y_w_h;
        _.dirty = _.dirtyT = 0;
    }
    return _.bbox;
};

/*\
 * Element.clone
 [ method ]
 **
 = (object) clone of a given element
 **
\*/
// elproto.clone = function() {
//     if (this.removed) {
//         return null;
//     }
//     var o = this,
//         out = o.paper[o.type]().attr(o.attr());
//     o.__set__ && o.__set__.push(out);
//     return out;
// };

/*\
 * Element.clone
 [ method ]
 **
  > Parameters
 **
 - attrObj (object) set of attributes
 - group (object) parent node
 = (object) clone of a given element
 **
\*/
elproto.clone = function (attrObj, group) {
    if (this.removed) {
        return null;
    }
    var o = this,
        attr = o.attr(),
        key,
        out;

    if (!attrObj) {
        out = o.paper[o.type]().attr(attr);
    } else {
        for (key in attrObj) {
            attr[key] = attrObj[key];
        }
        out = o.paper[o.type](attr, group);
    }
    o.__set__ && o.__set__.push(out);
    return out;
};

var curveslengths = {},
    getPointAtSegmentLength = function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
    if (length == null) {
        return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
    } else {
        return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
    }
},
    getLengthFactory = function getLengthFactory(istotal, subpath) {
    return function (path, length, onlystart) {
        path = path2curve(path);
        var x,
            y,
            p,
            l,
            sp = E,
            subpaths = {},
            point,
            len = 0;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] === strM) {
                x = +p[1];
                y = +p[2];
            } else {
                l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                if (len + l > length) {
                    if (subpath && !subpaths.start) {
                        point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                        sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
                        if (onlystart) {
                            return sp;
                        }
                        subpaths.start = sp;
                        sp = [strM + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
                        len += l;
                        x = +p[5];
                        y = +p[6];
                        continue;
                    }
                    if (!istotal && !subpath) {
                        point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                        return {
                            x: point.x,
                            y: point.y,
                            alpha: point.alpha
                        };
                    }
                }
                len += l;
                x = +p[5];
                y = +p[6];
            }
            sp += p.shift() + p;
        }
        subpaths.end = sp;
        point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
        point.alpha && (point = {
            x: point.x,
            y: point.y,
            alpha: point.alpha
        });
        return point;
    };
},
    getTotalLength = getLengthFactory(1),
    getPointAtLength = getLengthFactory(),
    getSubpathsAtLength = getLengthFactory(0, 1);

R.getTotalLength = getTotalLength;

R.getPointAtLength = getPointAtLength;

/*\
 * Raphael.getTotalLength
 [ method ]
 **
 * Returns length of the given path in pixels.
 **
 > Parameters
 **
 - path (string) SVG path string.
 **
 = (number) length.
\*/
elproto.getTotalLength = function () {
    if (this.type != "path") {
        return;
    }
    if (this.node.getTotalLength) {
        return this.node.getTotalLength();
    }
    return getTotalLength(this.attrs.path);
};

/*\
 * Raphael.getPointAtLength
 [ method ]
 **
 * Return coordinates of the point located at the given length on the given path.
 **
 > Parameters
 **
 - path (string) SVG path string
 - length (number)
 **
 = (object) representation of the point:
 o {
 o     x: (number) x coordinate
 o     y: (number) y coordinate
 o     alpha: (number) angle of derivative
 o }
\*/
elproto.getPointAtLength = function (length) {
    if (this.type != "path") {
        return;
    }
    return getPointAtLength(this.attrs.path, length);
};

/*\
 * Raphael.easing_formulas
 [ property ]
 **
 * Object that contains easing formulas for animation. You could extend it with your own. By default it has following list of easing:
 # <ul>
 #     <li>“linear”</li>
 #     <li>“&lt;” or “easeIn” or “ease-in”</li>
 #     <li>“>” or “easeOut” or “ease-out”</li>
 #     <li>“&lt;>” or “easeInOut” or “ease-in-out”</li>
 #     <li>“backIn” or “back-in”</li>
 #     <li>“backOut” or “back-out”</li>
 #     <li>“elastic”</li>
 #     <li>“bounce”</li>
 # </ul>
 # <p>See also <a href="http://raphaeljs.com/easing.html">Easing demo</a>.</p>
\*/
var ef = R.easing_formulas = {
    linear: function linear(n) {
        return n;
    },
    "<": function _(n) {
        return pow(n, 1.7);
    },
    ">": function _(n) {
        return pow(n, .48);
    },
    "<>": function _(n) {
        var q = .48 - n / 1.04,
            Q = mathSqrt(.1734 + q * q),
            x = Q - q,
            X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    },
    backIn: function backIn(n) {
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    },
    backOut: function backOut(n) {
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    },
    elastic: function elastic(n) {
        if (n === !!n) {
            return n;
        }
        return pow(2, -10 * n) * mathSin((n - .075) * (2 * PI) / .3) + 1;
    },
    bounce: function bounce(n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    },
    // used in line chart anchor animation
    oneBounceOut: function oneBounceOut(n) {
        var top = 120;
        if (n <= 0.9) {
            return ef.easeIn(n) * 1.33;
        }
        return 1.2 - n / 5;
    },
    // Used in translating bubble plots
    elasticOnce: function elasticOnce(n) {
        var p = 0.9;
        if (n === !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - p / 4) * (2 * Math.PI) / p) + 1;
    },
    // accelerating from zero velocity
    easeInQuad: function easeInQuad(t) {
        return t * t;
    },
    // decelerating to zero velocity
    easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function easeInOutQuad(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    // accelerating from zero velocity
    easeInCubic: function easeInCubic(t) {
        return t * t * t;
    },
    // decelerating to zero velocity
    easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
    },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function easeInOutCubic(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    // accelerating from zero velocity
    easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function easeInOutQuart(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    // accelerating from zero velocity
    easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function easeInOutQuint(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
};
ef.easeIn = ef["ease-in"] = ef["<"];
ef.easeOut = ef["ease-out"] = ef[">"];
ef.easeInOut = ef["ease-in-out"] = ef["<>"];
ef["back-in"] = ef.backIn;
ef["back-out"] = ef.backOut;

var animationElements = [],
    requestAnimFrame,

// This a temporary fix so that animation can be handled from the scheduler module.
animation = function animation() {
    var Now = +new Date(),
        l = 0,
        deqArr = [],
        i = 0,
        ll = 0,
        tmpOpacity,
        radial,
        animFrameFn;

    for (; l < animationElements.length; l++) {
        var e = animationElements[l];
        if (e.el.removed || e.paused || e.parentEl && e.parentEl.e && e.parentEl.e.paused) {
            continue;
        }
        var time = Now - e.start,
            ms = e.ms,
            easing = e.easing,
            from = e.from,
            diff = e.diff,
            to = e.to,
            t = e.t,
            that = e.el,
            set = {},
            now,
            origms,
            init = {},
            executeEvent = !R.stopPartialEventPropagation,
            key,
            i = 0,
            peekVal = e.el && e.el.animElements && e.el.animElements.peek();
        // Checking hooks
        while (peekVal && peekVal.pos <= time / ms) {
            deqArr.push(e.el.animElements.deq());
            peekVal = e.el.animElements.peek();
        }
        if (e.initstatus) {
            time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
            e.status = e.initstatus;
            delete e.initstatus;
            if (e.stop) {
                delete e.el;
                animationElements.splice(l--, 1);
            }
        } else {
            e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
        }
        origms = ms;
        // If has parentEl
        if (e.parentEl && e.parentEl.animElements) {
            ms = e.delayend - e.delaystart;
            time = e.parentEl.cPos - e.delaystart;
        } else if (e.el.animElements) {
            e.el.cPos = time / ms;
        }
        if (time < 0) {
            continue;
        }
        if (time < ms) {
            var pos = easing(time / ms);
            ms = origms;
            for (var attr in from) {
                if (from[HAS](attr)) {
                    switch (availableAnimAttrs[attr]) {
                        case 'number':
                            now = +from[attr] + pos * ms * diff[attr];
                            break;
                        case "colour":
                            if (!diff[attr].length) {
                                tmpOpacity = from[attr].opacity + pos * ms * diff[attr].opacity;
                                if (isNaN(tmpOpacity)) {
                                    tmpOpacity = 1;
                                }
                                now = "rgba(" + [upto255(round(from[attr].r + pos * ms * diff[attr].r)), upto255(round(from[attr].g + pos * ms * diff[attr].g)), upto255(round(from[attr].b + pos * ms * diff[attr].b)), tmpOpacity].join(COMMA) + ")";
                            } else {
                                now = [];
                                for (i = 0, ii = from[attr].length; i < ii; ++i) {
                                    if (i === 0) {
                                        if (from[attr].isRadial || diff[attr].isRadial) {
                                            radial = "xr(";
                                            radial += from[attr][0].f1 * (1 - pos) + diff[attr][0].f1 * pos || E;
                                            radial += ',';
                                            radial += from[attr][0].f2 * (1 - pos) + diff[attr][0].f2 * pos || E;
                                            radial += ',';
                                            radial += (from[attr][0].f3 * (1 - pos) + diff[attr][0].f3 * pos) * 100 || E;
                                            radial += '%,';
                                            radial += from[attr][0].f4 * (1 - pos) + diff[attr][0].f4 * pos || E;
                                            radial += ',';
                                            radial += from[attr][0].f5 * (1 - pos) + diff[attr][0].f5 * pos;
                                            radial += ',';
                                            radial += from[attr][0].f6;
                                            radial += ')';
                                            now.push(radial);
                                        } else {
                                            now.push(from[attr][i] * (1 - pos) + pos * diff[attr][i]);
                                            if (now[0] <= 0) {
                                                now[0] += 360;
                                            }
                                        }
                                    } else {
                                        now.push("rgba(" + [upto255(round(from[attr][i].r + pos * ms * diff[attr][i].r)), upto255(round(from[attr][i].g + pos * ms * diff[attr][i].g)), upto255(round(from[attr][i].b + pos * ms * diff[attr][i].b)), from[attr][i].opacity + pos * ms * diff[attr][i].opacity].join(COMMA) + "):" + from[attr][i].position);
                                    }
                                }
                                now = now.join("-");
                                // If radial focus doesnt have a separator
                                if (from[attr].isRadial || diff[attr].isRadial) {
                                    now = now.replace('-', E);
                                }
                            }
                            break;
                        case "path":
                            now = [];
                            for (var i = 0, ii = from[attr].length; i < ii; i++) {
                                now[i] = [from[attr][i][0]];
                                var jj;
                                jj = from[attr][i] ? from[attr][i].length : 0;
                                for (var j = 1; j < jj; j++) {
                                    now[i][j] = (+from[attr][i][j] + pos * ms * diff[attr][i][j]).toFixed(4);
                                }
                                now[i] = now[i].join(S);
                            }
                            now = now.join(S);
                            break;
                        case "transform":
                            if (diff[attr].real) {
                                now = [];
                                for (i = 0, ii = from[attr].length; i < ii; i++) {
                                    now[i] = [from[attr][i][0]];
                                    for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                        now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
                                    }
                                }
                            } else {
                                var get = function get(i) {
                                    return +from[attr][i] + pos * ms * diff[attr][i];
                                };
                                // now = [["r", get(2), 0, 0], ["t", get(3), get(4)], ["s", get(0), get(1), 0, 0]];
                                now = [[mStr, get(0), get(1), get(2), get(3), get(4), get(5)]];
                            }
                            break;
                        case "csv":
                            if (attr === "clip-rect") {
                                now = [];
                                i = 4;
                                while (i--) {
                                    now[i] = +from[attr][i] + pos * ms * diff[attr][i];
                                }
                            }
                            break;
                        case "text-bound":
                            now = [][CONCAT](from[attr]);
                            break;
                        default:
                            var from2 = [][CONCAT](from[attr]);
                            now = [];
                            i = that.ca[attr].length;
                            while (i--) {
                                now[i] = +from2[i] + pos * ms * diff[attr][i];
                            }
                            break;
                    }
                    set[attr] = now;
                }
            }that.attr(set);
            if (executeEvent) {
                (function (id, that, anim) {
                    setTimeout(function () {
                        (0, _eve3['default'])("raphael.anim.frame." + id, that, anim);
                    });
                })(that.id, that, e.anim);
            }
        } else {
            (function (f, el, a) {
                setTimeout(function () {
                    executeEvent && (0, _eve3['default'])("raphael.anim.frame." + el.id, el, a);
                    executeEvent && (0, _eve3['default'])("raphael.anim.finish." + el.id, el, a);
                    R.is(f, FUNCTION) && f.call(el);
                });
            })(e.callback, that, e.anim);

            that.attr(to);
            delete e.el;
            animationElements.splice(l--, 1);
            if (e.repeat > 1 && !e.next) {
                for (key in to) {
                    if (to[HAS](key)) {
                        init[key] = e.totalOrigin[key];
                    }
                }e.el.attr(init);
                runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
            }
            if (e.next && !e.stop) {
                runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
            }
        }
    }
    R.svg && that && that.paper && that.paper.safari();

    // Starting animation on timer 0
    for (l = 0, ll = deqArr.length; l < ll; ++l) {
        // lib.schedular.addJob((function (l) {
        //     return function ()  {
        //         runAnimation.apply(null, deqArr[l].params);
        //     };
        // })(l), lib.priorityList.instant);
        animFrameFn = R.getInstantAnimFrameFn();
        animFrameFn(function (l) {
            return function () {
                runAnimation.apply(null, deqArr[l].params);
            };
        }(l));
    }

    animationElements.length && (requestAnimFrame || R.getAnimFrameFn())(animation);
},
    upto255 = function upto255(color) {
    return color > 255 ? 255 : color < 0 ? 0 : color;
},
    checkPercentage = function checkPercentage(num) {
    num > 1 && (num = 1);
    num < 0 && (num = 0);
    return num;
};

R.getAnimFrameFn = function () {
    return requestAnimFrame = R.requestAnimFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || _win.oRequestAnimationFrame || _win.msRequestAnimationFrame || function (callback) {
        setTimeout(callback, 16);
    };
};

R.getInstantAnimFrameFn = function () {
    return R.instantRequestAnimFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || _win.oRequestAnimationFrame || _win.msRequestAnimationFrame || function (callback) {
        setTimeout(callback, 16);
    };
};

/*\
 * Element.animateWith
 [ method ]
 **
 * Acts similar to @Element.animate, but ensure that given animation runs in sync with another given element.
 **
 > Parameters
 **
 - el (object) element to sync with
 - anim (object) animation to sync with
 - params (object) #optional final attributes for the element, see also @Element.attr
 - ms (number) #optional number of milliseconds for animation to run
 - easing (string) #optional easing type. Accept on of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
 - callback (function) #optional callback function. Will be called at the end of animation.
 - configObject (object) #optional takes an object with optional properties like
    start(what percentage to start aniation), end(what percentage to end animation), hookFn(function
    to be called before applying animation), smartMorph(whether to use smartMorphing in path animation)
 * or
 - element (object) element to sync with
 - anim (object) animation to sync with
 - animation (object) #optional animation object, see @Raphael.animation
 **
 = (object) original element
\*/
elproto.animateWith = function (el, anim, params, ms, easing, callback, configObject) {
    var element = this,
        refOb = {},
        key;
    // Copying the reference object
    configObject = configObject || {};
    for (key in configObject) {
        if (configObject.hasOwnProperty(key)) {
            refOb[key] = configObject[key];
        }
    }
    configObject = refOb;
    if (element.removed) {
        callback && callback.call(element);
        return element;
    }
    if (ms === 0) {
        if (R.is(callback, FUNCTION)) {
            setTimeout(function () {
                callback.call(element);
            }, 0);
        }
        return element.attr(params);
    }
    var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
        x,
        y;
    configObject.start = checkPercentage(configObject.start || 0);
    configObject.end = checkPercentage(configObject.end || 1);
    if (configObject.start >= configObject.end) {
        configObject.start = configObject.end;
    }

    if (!configObject.from && configObject.start > 0.01) {
        // Initializing new Priority Queue if not present already
        el.animElements = el.animElements || new PriorityQueue(function comparator(a, b) {
            return b.pos - a.pos;
        });
        el.animElements.enq({
            pos: configObject.start,
            attr: configObject.start === configObject.end,
            params: [a, element, a.percents[0], null, element.attr(), undefined, el, {
                start: configObject.start,
                end: configObject.end,
                smartMorph: configObject.smartMorph,
                hookFn: configObject.hookFn
            }, params],
            executeOb: {
                el: this,
                attrs: params,
                callback: callback,
                hookFn: configObject.hookFn
            }
        });
    } else {
        runAnimation(a, element, a.percents[0], null, element.attr(), undefined, el, configObject);
    }
    for (var i = 0, ii = animationElements.length; i < ii; i++) {
        if (animationElements[i].anim === anim && animationElements[i].el === el) {
            animationElements[ii - 1].start = animationElements[i].start;
            break;
        }
    }
    return element;
    // var a = params ? R.animation(params, ms, easing, callback) : anim,
    //     status = element.status(anim);
    // return this.animate(a).status(a, status * anim.ms / a.ms);
};
function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
    var cx = 3 * p1x,
        bx = 3 * (p2x - p1x) - cx,
        ax = 1 - cx - bx,
        cy = 3 * p1y,
        by = 3 * (p2y - p1y) - cy,
        ay = 1 - cy - by;
    function sampleCurveX(t) {
        return ((ax * t + bx) * t + cx) * t;
    }
    function solve(x, epsilon) {
        var t = solveCurveX(x, epsilon);
        return ((ay * t + by) * t + cy) * t;
    }
    function solveCurveX(x, epsilon) {
        var t0, t1, t2, x2, d2, i;
        for (t2 = x, i = 0; i < 8; i++) {
            x2 = sampleCurveX(t2) - x;
            if (abs(x2) < epsilon) {
                return t2;
            }
            d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
            if (abs(d2) < 1e-6) {
                break;
            }
            t2 = t2 - x2 / d2;
        }
        t0 = 0;
        t1 = 1;
        t2 = x;
        if (t2 < t0) {
            return t0;
        }
        if (t2 > t1) {
            return t1;
        }
        while (t0 < t1) {
            x2 = sampleCurveX(t2);
            if (abs(x2 - x) < epsilon) {
                return t2;
            }
            if (x > x2) {
                t0 = t2;
            } else {
                t1 = t2;
            }
            t2 = (t1 - t0) / 2 + t0;
        }
        return t2;
    }
    return solve(t, 1 / (200 * duration));
}
elproto.onAnimation = function (f) {
    f ? _eve3['default'].on("raphael.anim.frame." + this.id, f) : _eve3['default'].unbind("raphael.anim.frame." + this.id);
    return this;
};
function Animation(anim, ms) {
    var percents = [],
        newAnim = {};
    this.ms = ms;
    this.times = 1;
    if (anim) {
        for (var attr in anim) {
            if (anim[HAS](attr)) {
                newAnim[toFloat(attr)] = anim[attr];
                percents.push(toFloat(attr));
            }
        }percents.sort(sortByNumber);
    }
    this.anim = newAnim;
    this.top = percents[percents.length - 1];
    this.percents = percents;
}

/*\
 * Animation.delay
 [ method ]
 **
 * Creates a copy of existing animation object with given delay.
 **
 > Parameters
 **
 - delay (number) number of ms to pass between animation start and actual animation
 **
 = (object) new altered Animation object
 | var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
 | circle1.animate(anim); // run the given animation immediately
 | circle2.animate(anim.delay(500)); // run the given animation after 500 ms
\*/
Animation.prototype.delay = function (delay) {
    var a = new Animation(this.anim, this.ms);
    a.times = this.times;
    a.del = +delay || 0;
    return a;
};

/*\
 * Animation.repeat
 [ method ]
 **
 * Creates a copy of existing animation object with given repetition.
 **
 > Parameters
 **
 - repeat (number) number iterations of animation. For infinite animation pass `Infinity`
 **
 = (object) new altered Animation object
\*/
Animation.prototype.repeat = function (times) {
    var a = new Animation(this.anim, this.ms);
    a.del = this.del;
    a.times = math.floor(mmax(times, 0)) || 1;
    return a;
};

// Taking converToRadialIfOneRadial function out of colorNormalizer inorder to fix RED-8338
var converToRadialIfOneRadial = function converToRadialIfOneRadial(a, b, end) {
    var angle = 0;
    if (a.isRadial && !b.isRadial) {
        angle += +b[0];
        b[0] = {
            f1: 0,
            f2: 0,
            f3: 0,
            f4: 0,
            f5: 0,
            f6: E
        };
        b.isRadial = true;
    }

    if (!end) {
        converToRadialIfOneRadial(b, a, true);
    }
};
/*
** Function to convert two color string in array format such that
** it is animatabale
** @param {string} c1 color 1
** @param {string} c2 color 2
** @param {function} function to getRGB
*/
function colorNormalizer(c1, c2, getRGB) {
    "use strict";

    var colorAr1,
        colorAr2,
        i = 0,
        ii = 0,
        j = 0,
        newColArr = [],
        newColArr2 = [],
        temp = {},
        pos = 0,
        uniqArr = [];

    c1 = c1.constructor === Array ? c1[0] : c1;
    c2 = c2.constructor === Array ? c2[0] : c2;

    colorAr1 = c1.split('-');
    colorAr2 = c2.split('-');

    if (colorAr1.length === 1 && colorAr2.length === 1) {
        return [c1, c2];
    }
    // Convert colors to linear format, and mark if any of them is radial
    // linear to radial animation is not correct
    colorAr1 = allToLinear(colorAr1);
    colorAr2 = allToLinear(colorAr2);

    // Handling if default color was added to one
    // and not other
    if (!colorAr1.defaultAngleSet && colorAr2.defaultAngleSet) {
        colorAr2[0] = colorAr1[0];
    }

    if (!colorAr2.defaultAngleSet && colorAr1.defaultAngleSet) {
        colorAr1[0] = colorAr2[0];
    }

    // If one is radial convert both to radial
    converToRadialIfOneRadial(colorAr1, colorAr2);
    /* Making a unique array to store all unique
        color positions of both color so that new color
        can be generated that have same amount of positions
        added */
    for (i = 1, ii = colorAr1.length; i < ii; ++i) {
        pos = colorAr1[i].position;
        // if(uniqArr.indexOf(pos) === -1){
        uniqArr.push(pos);
        // }
    }
    for (i = 1, ii = colorAr2.length; i < ii; ++i) {
        pos = colorAr2[i].position;
        if (uniqArr.indexOf(pos) === -1) {
            uniqArr.push(pos);
        }
    }
    uniqArr.push(0);
    // sort the positions
    uniqArr.sort(function (a, b) {
        return a - b;
    });
    // generating new colors from the existing colors
    newColArr = [colorAr1[0]];
    for (i = 1, ii = uniqArr.length; i < ii; ++i) {
        pos = uniqArr[i];
        temp = colorAr1.getColorAtPosition(pos);
        newColArr.push(temp);
    }
    newColArr2 = [colorAr2[0]];
    for (i = 1, ii = uniqArr.length; i < ii; ++i) {
        pos = uniqArr[i];
        temp = colorAr2.getColorAtPosition(pos);
        newColArr2.push(temp);
    }

    // copying isRadial property
    newColArr.isRadial = colorAr1.isRadial;
    newColArr2.isRadial = colorAr2.isRadial;
    return [newColArr, newColArr2];
    // Getting all unique points

    // Function to convert color to array in linear format
    // and mark if any one of them is radial
    function allToLinear(arr) {
        var i = 0,
            ii = 0,
            j = 0,
            item = {},
            temp = [],
            temp2 = {},
            key,
            prevVal = 0,
            lastVal = 0,
            counter = 0,
            rPos = 0,
            openBrPos = 0,
            closedBrPos = 0,
            radial = {
            f1: 0.5,
            f2: 0.5
        };

        // Solid color operation
        if (arr.length === 1) {
            if (arr[0] === NONE) {
                arr[0] = "rgba(0,0,0,0)";
            }
            // Push angle zero to start
            arr.unshift(0);
            // Mentioning that a default angle was added
            arr.defaultAngleSet = true;
        }

        // Convert angle to number
        if (isNaN(arr[0])) {
            // Check if is radial
            if (~"rx".indexOf(arr[0].charAt(0))) {
                arr.isRadial = true;

                rPos = 1;
                // check if focus if provided
                // otherwise use default focus
                if (arr[0].indexOf(')') !== -1) {
                    rPos = arr[0].indexOf(')');
                    openBrPos = arr[0].indexOf('(') + 1;
                    closedBrPos = rPos;
                    temp = arr[0].substr(openBrPos, closedBrPos - openBrPos).split(',');
                    radial.f1 = parseFloat(temp[0]) || 0;
                    radial.f2 = parseFloat(temp[1]) || 0;
                    if (~temp[2].indexOf('%')) {
                        temp[2] = parseFloat(temp[2]) / 100;
                    }
                    radial.f3 = parseFloat(temp[2]) || 0;
                    radial.f4 = parseFloat(temp[3]) || 0;
                    radial.f5 = parseFloat(temp[4]) || 0;
                    radial.f6 = temp[5];
                }
                arr[0] = arr[0].substr(closedBrPos + 1);
                arr.unshift(radial);
            } else {
                arr[0] = 0;
            }
        } else {
            arr[0] = +arr[0];
        }

        for (i = 1, ii = arr.length; i < ii; ++i) {
            temp = arr[i].split(":");
            // conver first element to rgb object and store
            temp2 = getRGB(temp[0]);
            arr[i] = {};
            arr[i].r = temp2.r;
            arr[i].g = temp2.g;
            arr[i].b = temp2.b;
            arr[i].opacity = temp2.opacity;
            // if opacity not present set  to 1
            arr[i].opacity = +arr[i].opacity;
            if (isNaN(arr[i].opacity)) {
                arr[i].opacity = 1;
            }
            // set the position
            arr[i].position = +temp[1];
        }

        // Sorting array according to position
        // angle and radial focus should be elemnt 0
        arr.sort(function (a, b) {
            if (typeof a === "number" || a.f1) {
                return -1;
            }
            if (typeof b === "number" || a.f2) {
                return 1;
            }
            if (isNaN(a.position) && isNaN(b.position)) {
                return 0;
            }
            if (isNaN(a.position)) {
                return -1;
            }
            if (isNaN(b.position)) {
                return 1;
            }
            return a.position - b.position;
        });

        // If first position is not zero
        // add new color with position zero
        if (+arr[1].position !== 0) {
            if (isNaN(arr[1].position)) {
                arr[1].position = 0;
            } else {
                temp2 = {};
                for (key in arr[1]) {
                    temp2[key] = arr[1][key];
                }
                temp2.position = 0;
                // Shifting array to add current object
                // in position 1
                arr.push({});
                for (i = arr.length - 1; i !== 1; --i) {
                    arr[i] = arr[i - 1];
                }
                arr[1] = temp2;
            }
        }
        // index to last position
        ii = arr.length - 1;
        // If last position is not 100
        // add new color with position 100
        if (arr[ii].position !== 100) {
            if (isNaN(arr[ii].position)) {
                arr[ii].position = 100;
            } else {
                temp2 = {};
                for (key in arr[ii]) {
                    temp2[key] = arr[ii][key];
                }
                temp2.position = 100;
                // Shifting array to add current object
                // in position 1
                arr.push(temp2);
            }
        }

        // Filling correct position value whereever NaN found
        for (i = 2, ii = arr.length; i < ii; ++i) {
            if (!arr[i].position) {
                prevVal = arr[i - 1].position;
                counter = 1;
                for (j = i + 1; j < ii; ++j) {
                    ++counter;
                    if (!isNaN(arr[j].position)) {
                        lastVal = +arr[j].position;
                        break;
                    }
                }
                arr[i].position = prevVal + (lastVal - prevVal) / counter;
            }
        }

        arr.getColorAtPosition = function (pos) {
            var prevPos = -1,
                nextPos = this.length,
                i = 1,
                ii = this.length,
                item = {},
                colPrev,
                colNext,
                ratio = 0,
                key = E,
                col = { r: 0, g: 0, b: 0 };

            // Critical section; check again
            for (; i < ii - 1; ++i) {
                if (this[i].position <= pos) {
                    prevPos = i;
                    nextPos = i + 1;
                }
                if (!(this[i].position < pos) && this[i].position >= pos) {
                    nextPos = i;
                    break;
                }
            }
            ratio = (pos - this[prevPos].position) / (this[nextPos].position - this[prevPos].position);
            if (isNaN(ratio)) {
                ratio = 0;
            }
            for (key in col) {
                col[key] = upto255((1 - ratio) * this[prevPos][key] + ratio * this[nextPos][key]);
            }
            col.position = pos;
            col.opacity = (1 - ratio) * this[prevPos]["opacity"] + ratio * this[nextPos]["opacity"];
            return col;
        };
        return arr;
    }
}
/**
 * Function to make to uncommon path array to a equal length
 * of path array and same type (L - lineto) to make it animatable
 * @param {array} path array 1
 * @param {array} path array 2
 * @return {object} object containing final 'from' and 'to' path
 */
function pathNormalizer(p1, p2) {
    'use strict';
    // Function to convert array to svg path (?) only for curves

    var finalp1 = [],
        finalp2 = [],
        pathArr1 = toSvgPath(p1),
        pathArr2 = toSvgPath(p2),
        i = 0,
        ii = 0,
        temp,
        createElementNS = document.createElementNS && document.createElementNS.bind(document),
        dPath = createElementNS && createElementNS("http://www.w3.org/2000/svg", "path");

    // If path invalid or svg not supported return
    if (!pathArr1 || !pathArr2 || !dPath) {
        return [p1, p2];
    }
    if (canFallback(p1, p2)) {
        return [p1, p2];
    }
    // If any of the parameters is
    // absent return to normal flow
    if (!p1 || !p2) {
        return [p1, p2];
    }
    // If svg not available return to normal flow
    if (!document.createElementNS) {
        return [p1, p2];
    }
    // Setting path again
    pathArr1 = toSvgPath(p1);
    pathArr2 = toSvgPath(p2);
    // If invalid path return the original path
    if (pathArr1.join().indexOf('undefined') !== -1) {
        return [p1, p2];
    }
    if (pathArr2.join().indexOf('undefined') !== -1) {
        return [p1, p2];
    }
    // If svg functions not available return to normal flow
    if (!dPath.getTotalLength || !dPath.getPointAtLength) {
        return [p1, p2];
    }
    /* Function to check if the current environment
    ** can animate the path, as pathNormalizer pauses
    ** getTotalLength and getPointAtLength function of svg
    ** which are not supported by all browsers
    */
    function canFallback(path1, path2) {
        var str1 = E,
            str2 = E,
            testLen,
            testPoint;
        // Checking path totoalLength is accurate or not
        // testing with a known path
        // this check is for Firefox
        dPath.setAttribute('d', 'M300 10 L300 300 C50 310,50 640,350 650' + 'C600 640,600 310,400 300 L400 10 L295 10');
        testLen = dPath.getTotalLength();
        testPoint = dPath.getPointAtLength(10);
        if (testLen < 1829.1 || testLen > 1829.2) {
            return true;
        }
        if (Math.round(testPoint.x) !== 300 || Math.round(testPoint.y) !== 20) {
            return true;
        }
        // path1 and path2 are in array
        function trimPathArray(arr) {
            var i = arr.length;
            while (i-- - 1) {
                if (arr[i].join(E) === arr[i - 1].join(E)) {
                    arr.pop();
                } else {
                    break;
                }
            }
        }
        function getPathFromArray(arr) {
            var str = E,
                i = 0,
                ii = arr.length;
            for (; i < ii; ++i) {
                str += arr[i].join(S);
            }
            return str;
        }
        trimPathArray(path1);
        trimPathArray(path2);
        str1 = getPathFromArray(path1);
        str2 = getPathFromArray(path2);
        if (str1.split(/[Mm]/).length > 2 || str2.split(/[Mm]/).length > 2) {
            return false;
        }
        if (path1.length === path2.length) {
            return true;
        }
        return false;
    }
    /* Convert svg path array to string,
        Also removes repeated commands */
    function toSvgPath(arr) {
        var str = [],
            i = 0,
            ii = arr.length,
            item = [];
        if ((typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) === STRING) {
            return arr;
        }
        // Converting the array to string; path type
        for (i = 0; i < ii; ++i) {
            if (!arr[i].join) {
                return;
            } else {
                // Removing continuous Move commands
                // Picking up the last one
                if (!i || !arr[i + 1] || arr[i + 1][0] !== 'M' || arr[i][0] !== 'M') {
                    str.push(arr[i].join(S));
                }
            }
        }
        str = str.join(E);
        str = str.split(/[Mm]/).slice(1);
        for (i = 0, ii = str.length; i < ii; ++i) {
            str[i] = 'M' + str[i];
        }
        return str;
    }

    ii = Math.max(pathArr1.length, pathArr2.length);
    for (i = 0; i < ii; ++i) {
        temp = _pathNormalizer(pathArr1[i], pathArr2[i]);
        pathArr1[i] = temp[0];
        pathArr2[i] = temp[1];
    }
    // Convert line path 2 dimensional array to string
    function linetopath(arr) {
        var i = 0,
            ii = 0,
            str = [];
        arr = arr || [];
        ii = arr.length;
        for (i = 0; i < ii; ++i) {
            if (arr[i].length - 1) {
                str.push(arr[i].join(S));
            }
        }
        return str.join(E);
    }
    /* path2curve appends repeated last path command,
        this function removes it or any other repeated path command */
    function removeBlanks(arr, pos) {
        var i = arr.length,
            j = 0,
            path;
        while (i-- - 1) {
            // Pop if length is zero
            if (arr[i].slice(1).toString() === arr[i - 1].slice(1).toString()) {
                arr.pop();
            } else {
                break;
            }
        }
        if (arr.length === 1 && pos) {
            arr.length = 0;
        }
    }
    /* Divide a path array to number to a given number of times
        as provided in parameters, All path array should start with M command */
    function _divide(arr, times) {
        var resArr = [],
            locArr = [],
            arrLen = arr.length,
            i = 0,
            ii = 0,
            x = 0,
            prevPos = 0,
            y = 0,

        // If array size is smaller than
        // divisions needed
        diffTimes = times - arrLen;
        while (diffTimes >= 0) {
            i = arr.length - 1;
            arr.push(arr.slice(i)[0]);
            --diffTimes;
        }
        arrLen = arr.length;
        for (i = 0; i <= times; ++i) {
            locArr.push(Math.round(i / times * arrLen));
        }
        for (i = 0, ii = locArr.length - 1; i < ii; ++i) {
            resArr.push(arr.slice(locArr[i], locArr[i + 1]));
            if (resArr[i][0][0] !== 'M' && resArr[i][0][0] !== mStr) {
                prevPos = resArr[i - 1].length - 1;
                x = resArr[i - 1][prevPos][1];
                y = resArr[i - 1][prevPos][2];
                resArr[i].unshift(['M', x, y]);
            }
        }
        return resArr;
    }
    /* If two path array have different number of MoveTo commands,
        divide the smaller number of MoveTo command holder to match the other one */
    function divideArray(diff) {
        var arrToDivide = [],
            countArr = [],
            transArr = [],
            i = 0,
            ii = 0,
            isArr1 = true;
        if (diff === 0) {
            return;
        } else if (diff > 0) {
            arrToDivide = pathArr2;
            isArr1 = false;
        } else {
            diff = -diff;
            arrToDivide = pathArr1;
        }
        // Maintaining a count array to judge number of times a1
        // path needs to be divided, 1 means dont divide
        for (i = 0, ii = arrToDivide.length; i < ii; ++i) {
            countArr.push(1);
        }
        while (diff--) {
            --i;
            if (i < 0) {
                i = ii - 1;
            }
            countArr[i]++;
        }

        for (i = 0; i < ii; ++i) {
            if (countArr[i] === 1) {
                transArr.push(arrToDivide[i]);
            } else {
                transArr.push.apply(transArr, _divide(arrToDivide[i], countArr[i]));
            }
        }
        if (isArr1) {
            pathArr1 = transArr;
        } else {
            pathArr2 = transArr;
        }
    }
    for (i = pathArr1.length; i--;) {
        removeBlanks(pathArr1[i], i);
        // If last element is blank pop it
        pathArr1[i].length || pathArr1.pop();
    }
    for (i = pathArr2.length; i--;) {
        removeBlanks(pathArr2[i], i);
        pathArr2[i].length || pathArr2.pop();
    }
    // Making number off moveto commands equal in both path
    divideArray(pathArr1.length - pathArr2.length);

    ii = Math.max(pathArr1.length, pathArr2.length);
    for (i = 0; i < ii; ++i) {
        temp = _pathNormalizer(linetopath(pathArr1[i]), linetopath(pathArr2[i]));
        pathArr1[i] = temp[0];
        pathArr2[i] = temp[1];
    }

    for (i = 0, ii = pathArr1.length; i < ii; ++i) {
        finalp1 = finalp1.concat(pathArr1[i]);
    }
    for (i = 0, ii = pathArr2.length; i < ii; ++i) {
        finalp2 = finalp2.concat(pathArr2[i]);
    }
    return [finalp1, finalp2];
}

// A function to calculate common path
// in two given paths
function commonPathCalculator(p1, p2) {
    'use strict';

    var i = 0,
        j = 0,
        ii = 0,
        jj = 0,
        k = 0,
        kk = 0,
        uncommon1 = 0,
        uncommon2 = 0,
        lim1 = 0,
        lim2 = 0,
        nearestPoint1,
        nearestPoint2,
        map1 = {},
        map2 = {},
        groupedPath1 = [],
        groupedPath2 = [],
        gpIndex1 = -1,
        gpIndex2 = -1,
        isSame = true;
    // Splitting the string commands to get
    // particular points later
    // Will be required while breaking paths
    // into common and uncommon parts
    function splitter(path) {
        var i = 0,
            ii = 0;
        path = path.split(/[MCLmcl]/).slice(1);
        for (i = 0, ii = path.length; i < ii; ++i) {
            path[i] = path[i].split(S).slice(1);
            i || path[i].unshift('M');
            if (i) {
                path[i].length === 2 && path[i].unshift(strL) || path[i].unshift('C');
            }
        }
        return path;
    }
    // populate the arr to object in reverse manner
    // i.e value to key mapping
    function mapper(arr, ob) {
        var i = 0,
            ii = arr.length,
            val,
            item;
        for (i = 0, ii = arr.length; i < ii; ++i) {
            val = arr[i].join(S);
            item = arr[i];
            if (item[0] === 'C' && item[3] === item[5] && item[4] === item[6]) {
                arr[i].stringValue = [strL, item[3], item[4]].join(S);
            } else item.stringValue = val;
            // Creating an array if undefined
            // pushing otherwise
            ob[item.stringValue] && ob[item.stringValue].push(i);
            ob[item.stringValue] || (ob[item.stringValue] = [i]);
        }
    }
    // Function to get nearest point that exist
    // in the other array
    function getNearestExistingPoint(arr, map, start, ii, lim) {
        var i = start,
            k = 0,
            kk = 0,
            item;
        for (; i < ii; ++i) {
            item = map[arr[i].stringValue];
            if (item) {
                for (k = 0, kk = item.length; k < kk; ++k) {
                    if (item[k] >= lim) {
                        return {
                            index: i,
                            mapValue: item[k],
                            diff: i - start
                        };
                    }
                }
            }
        }
        return -1;
    }
    // function to get last coordinate for CurveTo command
    function getCoordinateAsMove(arr) {
        var last = arr.length - 1;
        return ['M', arr[last - 1], arr[last]].join(S);
    }
    // function to conver path array to string
    function pathToString(arr) {
        return arr.join(E);
    }
    // commonPathCalculator flow here
    p1 = splitter(p1);
    p2 = splitter(p2);
    mapper(p1, map1);
    mapper(p2, map2);
    // Setting length
    ii = p1.length;
    jj = p2.length;
    i = 0;
    j = 0;
    // Making partitions for common
    // and uncommon parts
    // Checking if first is common or uncommon
    while (i < ii && j < jj) {
        ++gpIndex1;
        ++gpIndex2;
        // initializing blank arrays
        groupedPath1[gpIndex1] = [];
        groupedPath2[gpIndex2] = [];
        isSame = p1[i].stringValue === p2[j].stringValue;
        if (i) {
            // Logic to push prev coordinate as move command
            groupedPath1[gpIndex1].push(getCoordinateAsMove(p1[i - 1]));
            groupedPath2[gpIndex2].push(getCoordinateAsMove(p2[j - 1]));
        }
        if (isSame) {
            while (i < ii && j < jj && p1[i].stringValue === p2[j].stringValue) {
                groupedPath1[gpIndex1].push(p1[i].stringValue);
                groupedPath2[gpIndex2].push(p2[j].stringValue);
                ++i;
                ++j;
            }
        } else {
            nearestPoint1 = getNearestExistingPoint(p1, map2, i, ii, j);
            nearestPoint2 = getNearestExistingPoint(p2, map1, j, jj, i);
            // Assuming nearestPoint1 is nearer than nearestPoint2
            lim1 = nearestPoint1.index;
            lim2 = nearestPoint1.mapValue;
            // If nearestPoint2 is nearer
            if (!~nearestPoint1 || nearestPoint1.diff > nearestPoint2.diff) {
                lim1 = nearestPoint2.mapValue;
                lim2 = nearestPoint2.index;
            }
            if (!~nearestPoint1 && !~nearestPoint2) {
                // If both not found include all as uncommon
                lim1 = ii - 1;
                lim2 = jj - 1;
            }
            // Pushing uncommon paths
            while (i <= lim1) {
                groupedPath1[gpIndex1].push(p1[i].stringValue);
                ++i;
            }
            while (j <= lim2) {
                groupedPath2[gpIndex2].push(p2[j].stringValue);
                ++j;
            }
        }
        groupedPath1[gpIndex1] = pathToString(groupedPath1[gpIndex1]);
        groupedPath2[gpIndex2] = pathToString(groupedPath2[gpIndex2]);
    }
    // If Any one is left add them all
    if (i < ii) {
        ++gpIndex1;
        groupedPath1[gpIndex1] = [];
        groupedPath1[gpIndex1].push(getCoordinateAsMove(p1[i - 1]));
        ++gpIndex2;
        groupedPath2[gpIndex2] = [];
        groupedPath2[gpIndex2].push(getCoordinateAsMove(p2[j - 1]));
        while (i < ii) {
            groupedPath1[gpIndex1].push(p1[i].stringValue);
            ++i;
        }
        groupedPath1[gpIndex1] = pathToString(groupedPath1[gpIndex1]);
    }
    if (j < jj) {
        ++gpIndex1;
        groupedPath1[gpIndex1] = [];
        groupedPath1[gpIndex1].push(getCoordinateAsMove(p1[i - 1]));
        ++gpIndex2;
        groupedPath2[gpIndex2] = [];
        groupedPath2[gpIndex2].push(getCoordinateAsMove(p2[j - 1]));
        while (j < jj) {
            groupedPath2[gpIndex2].push(p2[j].stringValue);
            ++j;
        }
        groupedPath2[gpIndex2] = pathToString(groupedPath2[gpIndex2]);
    }
    return [groupedPath1, groupedPath2];
}

// function to get equal points for two different path
// We set path to an dynamically created svg path node
// and get equal number of path commands from two different
// paths. Uses getPointAtLength and getTotalLength of svg that
// arent supported on every browser
function _pathNormalizer(p1, p2) {
    'use strict';

    var i = 0,
        j = 0,
        ii = 0,
        jj = 0,
        item = {},
        fPath1 = [],
        fPath2 = [],
        divisions = 0,
        commonPath,
        tmp;
    // Uncommon path normalizer
    function normalizeUncommonPaths(p1, p2) {
        var dPath1,
            dPath2,
            i = 0,
            j = 0,
            item = {},
            pathLen1 = 0,
            pathLen2 = 0,
            fPath1 = [],
            fPath2 = [],
            divisions = 0,
            round = Math.round;
        // Creating path elements to use functions 'getTotalLength'
        // and 'getPointAtLength'
        dPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        dPath1.setAttribute("d", p1);

        dPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        dPath2.setAttribute("d", p2);

        // Getting length of the paths
        pathLen1 = dPath1.getTotalLength();
        pathLen2 = dPath2.getTotalLength();

        // Number of divisions will depend on larger path
        divisions = 0.15 * Math.max(pathLen1, pathLen2);
        divisions = Math.ceil(divisions);

        if (!divisions || !isFinite(divisions) || divisions < 10) {
            divisions = 10;
        }

        for (i = 0; i <= divisions; ++i) {
            item = dPath1.getPointAtLength(i / divisions * pathLen1);
            fPath1.push([i ? strL : strM, round(item.x), round(item.y)]);
            item = dPath2.getPointAtLength(i / divisions * pathLen2);
            fPath2.push([i ? strL : strM, round(item.x), round(item.y)]);
        }
        return [fPath1, fPath2];
    }
    if (!p1 || p1 === 'M  ') {
        p1 = p2.split(S).slice(0, 3).join(S).replace(/[LC]/, E);
    }
    if (!p2 || p2 === 'M  ') {
        p2 = p1.split(S).slice(0, 3).join(S).replace(/[LC]/, E);
    }
    commonPath = commonPathCalculator(p1, p2);

    for (i = 0, ii = commonPath[0].length; i < ii; ++i) {
        tmp = normalizeUncommonPaths(commonPath[0][i], commonPath[1][i]);
        if (i) {
            fPath1 = fPath1.concat(tmp[0].slice(1));
            fPath2 = fPath2.concat(tmp[1].slice(1));
        } else {
            fPath1 = fPath1.concat(tmp[0]);
            fPath2 = fPath2.concat(tmp[1]);
        }
    }
    return [fPath1, fPath2];
}

function runAnimation(anim, element, percent, status, totalOrigin, times, parentEl, configObject) {
    percent = toFloat(percent);
    var params,
        isInAnim,
        isInAnimSet,
        percents = [],
        next,
        prev,
        temp,
        timestamp,
        tempDiff,
        change,
        ms = anim.ms,
        from = {},
        to = {},
        diff = {};

    if (element.type === null) {
        return;
    }

    configObject = configObject || {};
    configObject.hookFn && configObject.hookFn.call(element);
    configObject.from = configObject.from || {};
    if (status) {
        for (i = 0, ii = animationElements.length; i < ii; i++) {
            var e = animationElements[i];
            if (e.el.id === element.id && e.anim === anim) {
                if (e.percent != percent) {
                    delete e.el.e;
                    delete e.el;
                    animationElements.splice(i, 1);
                    isInAnimSet = 1;
                } else {
                    isInAnim = e;
                }
                element.attr(e.totalOrigin);
                break;
            }
        }
    } else {
        status = +to; // NaN
    }
    for (var i = 0, ii = anim.percents.length; i < ii; i++) {
        if (anim.percents[i] === percent || anim.percents[i] > status * anim.top) {
            percent = anim.percents[i];
            prev = anim.percents[i - 1] || 0;
            ms = ms / anim.top * (percent - prev);
            next = anim.percents[i + 1];
            params = anim.anim[percent];
            break;
        } else if (status) {
            element.attr(anim.anim[anim.percents[i]]);
        }
    }
    if (!params) {
        return;
    }
    if (!isInAnim) {
        for (var attr in params) {
            if (params[HAS](attr)) {
                if (availableAnimAttrs[HAS](attr) || element.ca[attr]) {
                    from[attr] = configObject.from[attr] || element.attr(attr);
                    from[attr] == null && (from[attr] = availableAttrs[attr]);
                    to[attr] = params[attr];
                    change = false;
                    switch (availableAnimAttrs[attr]) {
                        case 'number':
                            tempDiff = to[attr] - from[attr];
                            (tempDiff || isNaN(tempDiff)) && (change = true);
                            diff[attr] = tempDiff / ms;
                            break;
                        case "colour":
                            if (from[attr] === to[attr]) {
                                break;
                            } else {
                                change = true;
                            }
                            var colorsNormalized = colorNormalizer(from[attr], to[attr], R.getRGB);
                            from[attr] = colorsNormalized[0];
                            var toColour = colorsNormalized[1];
                            if ((typeof toColour === 'undefined' ? 'undefined' : _typeof(toColour)) === STRING) {
                                if (from[attr].toLowerCase() !== NONE) {
                                    from[attr] = R.getRGB(from[attr]);
                                    if (!from[attr].opacity) {
                                        from[attr].opacity = 1;
                                    }
                                } else {
                                    from[attr] = {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        opacity: 0
                                    };
                                }
                                if (to[attr].toLowerCase() !== NONE) {
                                    toColour = R.getRGB(to[attr]);
                                    if (!toColour.opacity) {
                                        toColour.opacity = 1;
                                    }
                                } else {
                                    toColour = {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        opacity: 0
                                    };
                                }
                                diff[attr] = {
                                    r: (toColour.r - from[attr].r) / ms,
                                    g: (toColour.g - from[attr].g) / ms,
                                    b: (toColour.b - from[attr].b) / ms,
                                    opacity: (toColour.opacity - from[attr].opacity) / ms
                                };
                            } else {
                                diff[attr] = [];
                                for (i = 0, ii = from[attr].length; i < ii; ++i) {
                                    if (i === 0) {
                                        diff[attr].push(toColour[0]);
                                    } else {
                                        diff[attr].push({
                                            r: (toColour[i].r - from[attr][i].r) / ms,
                                            g: (toColour[i].g - from[attr][i].g) / ms,
                                            b: (toColour[i].b - from[attr][i].b) / ms,
                                            opacity: (toColour[i].opacity - from[attr][i].opacity) / ms
                                        });
                                    }
                                }
                            }
                            break;
                        case "path":
                            var toPath,
                                pathes = path2curve(from[attr], to[attr]);
                            if (configObject.smartMorph) {
                                pathes = pathNormalizer(pathes[0], pathes[1], configObject);
                            }
                            toPath = pathes[1];
                            from[attr] = pathes[0];
                            diff[attr] = [];
                            for (i = 0, ii = from[attr].length; i < ii; i++) {
                                diff[attr][i] = [0];
                                var jj;
                                jj = from[attr][i] ? from[attr][i].length : 0;
                                for (var j = 1; j < jj; j++) {
                                    diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
                                    !change && diff[attr][i][j] && (change = true);
                                }
                            }
                            break;
                        case "transform":
                            var _ = element._,
                                eq = equaliseTransform(_[attr], to[attr]);
                            change = true;
                            if (eq) {
                                from[attr] = eq.from;
                                to[attr] = eq.to;
                                diff[attr] = [];
                                diff[attr].real = true;
                                for (i = 0, ii = from[attr].length; i < ii; i++) {
                                    diff[attr][i] = [from[attr][i][0]];
                                    for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                        diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
                                    }
                                }
                            } else {
                                var m = element.matrix || new Matrix(),
                                    to2 = {
                                    _: {
                                        transform: _.transform
                                    },
                                    getBBox: function getBBox() {
                                        return element.getBBox(1);
                                    }
                                };
                                from[attr] = [m.a, m.b, m.c, m.d, m.e, m.f];
                                extractTransform(to2, to[attr]);
                                to[attr] = to2._.transform;
                                diff[attr] = [(to2.matrix.a - m.a) / ms, (to2.matrix.b - m.b) / ms, (to2.matrix.c - m.c) / ms, (to2.matrix.d - m.d) / ms, (to2.matrix.e - m.e) / ms, (to2.matrix.f - m.f) / ms];
                                // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];
                                // var to2 = {_:{}, getBBox: function () { return element.getBBox(); }};
                                // extractTransform(to2, to[attr]);
                                // diff[attr] = [
                                //     (to2._.sx - _.sx) / ms,
                                //     (to2._.sy - _.sy) / ms,
                                //     (to2._.deg - _.deg) / ms,
                                //     (to2._.dx - _.dx) / ms,
                                //     (to2._.dy - _.dy) / ms
                                // ];
                            }
                            break;
                        case "csv":
                            var values = Str(params[attr])[SPLIT](separator),
                                from2 = Str(from[attr])[SPLIT](separator);
                            if (attr === "clip-rect") {
                                from[attr] = from2;
                                diff[attr] = [];
                                i = from2.length;
                                while (i--) {
                                    tempDiff = values[i] - from[attr][i];
                                    (tempDiff || isNaN(tempDiff)) && (change = true);
                                    diff[attr][i] = tempDiff / ms;
                                }
                            }
                            to[attr] = values;
                            break;
                        default:
                            values = [][CONCAT](params[attr]);
                            from2 = [][CONCAT](from[attr]);
                            diff[attr] = [];
                            i = element.ca[attr].length;
                            while (i--) {
                                tempDiff = (values[i] || 0) - (from2[i] || 0);
                                (tempDiff || isNaN(tempDiff)) && (change = true);
                                diff[attr][i] = tempDiff / ms;
                            }
                            break;
                    }
                    if (!change) {
                        delete from[attr];
                        delete to[attr];
                        delete params[attr];
                        delete diff[attr];
                    }
                } else if (R._availableAttrs[HAS](attr) || attr === 'text' || element.ca[attr]) {
                    element.attr(attr, params[attr]);
                    delete params[attr];
                }
            }
        }var easing = params.easing,
            easyeasy = R.easing_formulas[easing];
        if (!easyeasy) {
            easyeasy = Str(easing).match(bezierrg);
            if (easyeasy && easyeasy.length === 5) {
                var curve = easyeasy;
                easyeasy = function easyeasy(t) {
                    return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
                };
            } else {
                easyeasy = pipe;
            }
        }
        timestamp = params.start || anim.start || +new Date();
        element.e = e = {
            anim: anim,
            percent: percent,
            timestamp: timestamp,
            start: timestamp + (anim.del || 0),
            status: 0,
            initstatus: status || 0,
            stop: false,
            ms: ms,
            easing: easyeasy,
            from: from,
            diff: diff,
            to: to,
            el: element,
            callback: params.callback,
            prev: prev,
            next: next,
            repeat: times || anim.times,
            origin: element.attr(),
            totalOrigin: totalOrigin,
            parentEl: parentEl,
            delayend: configObject && configObject.end,
            delaystart: configObject && configObject.start
        };
        animationElements.push(e);

        if (status && !isInAnim && !isInAnimSet) {
            e.stop = true;
            e.start = new Date() - ms * status;
            if (animationElements.length === 1) {
                return animation();
            }
        }
        if (isInAnimSet) {
            e.start = new Date() - e.ms * status;
        }
        animationElements.length === 1 && (requestAnimFrame || R.getAnimFrameFn())(animation);
    } else {
        isInAnim.initstatus = status;
        isInAnim.start = new Date() - isInAnim.ms * status;
    }
    (0, _eve3['default'])("raphael.anim.start." + element.id, element, anim);
}

/*\
 * Raphael.animation
 [ method ]
 **
 * Creates an animation object that can be passed to the @Element.animate or @Element.animateWith methods.
 * See also @Animation.delay and @Animation.repeat methods.
 **
 > Parameters
 **
 - params (object) final attributes for the element, see also @Element.attr
 - ms (number) number of milliseconds for animation to run
 - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
 - callback (function) #optional callback function. Will be called at the end of animation.
 **
 = (object) @Animation
\*/
R.animation = function (params, ms, easing, callback, stopPartialEventPropagation) {
    if (params instanceof Animation) {
        return params;
    }
    if (R.is(easing, FUNCTION) || !easing) {
        callback = callback || easing || null;
        easing = null;
    }
    !R.stopPartialEventPropagation && (R.stopPartialEventPropagation = stopPartialEventPropagation);
    params = Object(params);
    ms = +ms || 0;
    var p = {},
        json,
        attr;
    for (attr in params) {
        if (params[HAS](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
            json = true;
            p[attr] = params[attr];
        }
    } // Enabling the callback to be called even if attr is not provided
    callback && (json = true);
    if (!json) {
        return new Animation(params, ms);
    } else {
        easing && (p.easing = easing);
        callback && (p.callback = callback);
        return new Animation({
            100: p
        }, ms);
    }
};

/*\
 * Element.animate
 [ method ]
 **
 * Creates and starts animation for given element.
 **
 > Parameters
 **
 - params (object) final attributes for the element, see also @Element.attr
 - ms (number) number of milliseconds for animation to run
 - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
 - callback (function) #optional callback function. Will be called at the end of animation.
 * or
 - animation (object) animation object, see @Raphael.animation
 **
 = (object) original element
\*/
elproto.animate = function (params, ms, easing, callback) {
    var element = this;
    if (element.removed) {
        callback && callback.call(element);
        return element;
    }
    var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
    runAnimation(anim, element, anim.percents[0], null, element.attr());
    return element;
};

/*\
 * Element.status
 [ method ]
 **
 * Gets or sets the status of animation of the element.
 **
 > Parameters
 **
 - anim (object) #optional animation object
 - value (number) #optional 0 – 1. If specified, method works like a setter and sets the status of a given animation to the value. This will cause animation to jump to the given position.
 **
 = (number) status
 * or
 = (array) status if `anim` is not specified. Array of objects in format:
 o {
 o     anim: (object) animation object
 o     status: (number) status
 o }
 * or
 = (object) original element if `value` is specified
\*/
elproto.status = function (anim, value) {
    var out = [],
        i = 0,
        len,
        e;
    if (value != null) {
        runAnimation(anim, this, -1, mmin(value, 1));
        return this;
    } else {
        len = animationElements.length;
        for (; i < len; i++) {
            e = animationElements[i];
            if (e.el.id === this.id && (!anim || e.anim === anim)) {
                if (anim) {
                    return e.status;
                }
                out.push({
                    anim: e.anim,
                    status: e.status
                });
            }
        }
        if (anim) {
            return 0;
        }
        return out;
    }
};

/*\
 * Element.pause
 [ method ]
 **
 * Stops animation of the element with ability to resume it later on.
 **
 > Parameters
 **
 - anim (object) #optional animation object
 - resumeChildAnimation (boolean) #pauses the animation of the elements which are in sync with the current element
 **
 = (object) original element
\*/
elproto.pause = function (anim, pauseChildAnimation) {
    var now = +new Date(),
        e,
        i;
    for (i = 0; i < animationElements.length; i++) {
        e = animationElements[i];
        // @todo - need a scope to implement the logic for nested animations.
        if ((e.el.id === this.id || pauseChildAnimation && e.parentEl && e.parentEl.e.el && e.parentEl.e.el.id === this.id) && (!anim || e.anim === anim)) {
            if ((0, _eve3['default'])("raphael.anim.pause." + this.id, this, e.anim) !== false) {
                e.paused = true;
                e.pauseStart = now;
            }
        }
    }
    return this;
};

/*\
 * Element.resume
 [ method ]
 **
 * Resumes animation if it was paused with @Element.pause method.
 **
 > Parameters
 **
 - anim (object) #optional animation object
 - resumeChildAnimation (boolean) #resumes the animation of the elements which are in sync with the current element
 **
 = (object) original element
\*/
elproto.resume = function (anim, resumeChildAnimation) {
    var now = +new Date(),
        e,
        i;
    for (i = 0; i < animationElements.length; i++) {
        e = animationElements[i];
        // @todo - need a scope to implement the logic for nested animations.
        if ((e.el.id === this.id || resumeChildAnimation && e.parentEl && e.parentEl.e.el && e.parentEl.e.el.id === this.id) && (!anim || e.anim === anim)) {
            if ((0, _eve3['default'])("raphael.anim.resume." + this.id, this, e.anim) !== false) {
                delete e.paused;
                e.el.status(e.anim, e.status);
                e.pauseEnd = now;
                e.start += (e.parentEl && e.parentEl.e.pauseEnd || e.pauseEnd) - (e.parentEl && e.parentEl.e.pauseStart || e.pauseStart) || 0;
            }
        }
    }
    return this;
};

/*\
 * Element.stop
 [ method ]
 **
 * Stops animation of the element.
 **
 > Parameters
 **
 - anim (object) #optional animation object
 - stopChildAnimation (boolean) #optional stops the animation of all the element which are in sync with the current element
 - jumpToEnd (boolean) #optional takes the current animation to its end value
 **
 = (object) original element
\*/
elproto.stop = function (anim, stopChildAnimation, jumpToEnd) {
    var e, i, ele;
    if (stopChildAnimation) {
        for (i = animationElements.length - 1; i >= 0; i--) {
            e = animationElements[i];
            // @todo - need a scope to implement the logic for nested animations.
            if ((e.el.id === this.id || e.parentEl && e.parentEl.id === this.id) && (!anim || animationElements[i].anim === anim)) {
                ele = e.el;
                jumpToEnd && ele.attr(e.to);
                e.callback && e.callback.call(ele);
                delete ele.e;
                delete e.el;
                animationElements.splice(i, 1);
            }
        }
    } else {
        for (var i = 0; i < animationElements.length; i++) {
            e = animationElements[i];
            if (e.el.id === this.id && (!anim || e.anim === anim)) {
                if ((0, _eve3['default'])("raphael.anim.stop." + this.id, this, e.anim) !== false) {
                    animationElements.splice(i--, 1);
                }
            }
        }
    }
    // In case root object has hooked animation elements
    // in priority queue execute them all
    if (this.animElements) {
        executeAnimQueue(this.animElements);
    }
    return this;
};

function executeAnimQueue(queue) {
    var ob;
    // Looping until all executed
    while (ob = queue.deq()) {
        ob = ob.executeOb;
        ob.hookFn && ob.hookFn.call(ob.el);
        ob.el.attr(ob.attrs);
        ob.callback && ob.callback.call(ob.el);
    }
}

/**
 * Function for stopping animation when paper is cleared or removed
 * @param {Object} currPaper the current paper that is being removed/cleared
 */
function stopAnimation() {
    var currPaper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

    var linkedPaper = void 0;
    for (var i = 0; i < animationElements.length; i++) {
        linkedPaper = animationElements[i].el.paper;
        // All the elements associated with the current paper is removed if linkedPaper is already
        // disposed of currentPaper matches the linked Paper
        if (!linkedPaper || linkedPaper === currPaper) {
            animationElements.splice(i--, 1);
        }
    }
}
_eve3['default'].on("raphael.remove", stopAnimation);
_eve3['default'].on("raphael.clear", stopAnimation);
elproto.toString = function () {
    return 'Rapha\xEBl\u2019s object';
};

elproto.toFront = function () {
    if (this.removed) {
        return this;
    }

    var o = this,
        thisNode = R._engine.getNode(o),
        parent = o.parent,
        followers = o.followers,
        follower,
        i,
        ii;

    if (R._tofront(o, parent)) {
        parent.canvas.appendChild(thisNode);
    }

    for (i = 0, ii = followers.length; i < ii; i++) {
        (follower = followers[i]).stalk && follower.el[follower.stalk](o);
    }
    return o;
};

elproto.toBack = function () {
    if (this.removed) {
        return this;
    }

    var o = this,
        thisNode = R._engine.getNode(o),
        parent = o.parent,
        followers = o.followers,
        follower,
        i,
        ii;

    if (R._toback(o, parent)) {
        parent.canvas.insertBefore(thisNode, parent.canvas.firstChild);
    }

    for (i = 0, ii = followers.length; i < ii; i++) {
        (follower = followers[i]).stalk && follower.el[follower.stalk](o);
    }
    return o;
};

elproto.insertAfter = function (element) {
    if (this.removed) {
        return this;
    }

    var o = this,
        thisNode = R._engine.getNode(o),
        thatNode = R._engine.getLastNode(element),
        parentNode = element.parent.canvas,
        followers = o.followers,
        follower,
        i,
        ii;

    if (thatNode.nextSibling) {
        parentNode.insertBefore(thisNode, thatNode.nextSibling);
    } else {
        parentNode.appendChild(thisNode);
    }
    R._insertafter(o, element, o.parent, element.parent);

    for (i = 0, ii = followers.length; i < ii; i++) {
        (follower = followers[i]).stalk && follower.el[follower.stalk](element);
    }
    return o;
};

elproto.insertBefore = function (element) {
    if (this.removed) {
        return this;
    }

    var o = this,
        thisNode = R._engine.getNode(o),
        thatNode = R._engine.getNode(element),
        followers = o.followers,
        follower,
        i,
        ii;

    element.parent.canvas.insertBefore(thisNode, thatNode);
    R._insertbefore(o, element, o.parent, element.parent);
    o.parent = element.parent;

    for (i = 0, ii = followers.length; i < ii; i++) {
        (follower = followers[i]).stalk && follower.el[follower.stalk](element);
    }
    return this;
};

elproto.appendChild = function (element) {
    if (this.removed || this.type !== 'group') {
        return this;
    }

    var group = this,
        followers = group.followers,
        follower,
        thatNode,
        i,
        ii;

    // If appending in same group, simply perform toFront().
    if (element.parent === group) {
        element.toFront();
        return group;
    }

    thatNode = R._engine.getNode(element);

    // first remove from own group
    R._tear(element, element.parent);

    group.canvas.appendChild(thatNode);
    element.parent = group;

    !group.bottom && (group.bottom = element);
    element.prev = group.top;
    element.next = null;
    group.top && (group.top.next = element);
    group.top = element;

    for (i = 0, ii = followers.length; i < ii; i++) {
        (follower = followers[i]).stalk && follower.el[follower.stalk](element);
    }

    return group;
};

// Reverse application of appendChild
elproto.appendTo = function (group) {
    return group.appendChild(this);
};

elproto.removeChild = function (element) {
    if (this.removed || this.type !== 'group' || element.parent !== this) {
        return this;
    }

    var o = this,
        thatNode = R._engine.getNode(element),
        paper = o.paper;

    R._tear(element, o);
    paper.canvas.appendChild(thatNode);

    o.parent = paper;
    !paper.bottom && (paper.bottom = o);

    o.prev = paper.top;
    paper.top && (paper.top.next = o);
    paper.top = o;
    o.next = null;

    return o;
};

/*\
 * Raphael.format
 [ method ]
 **
 * Simple format function. Replaces construction of type “`{<number>}`” to the corresponding argument.
 **
 > Parameters
 **
 - token (string) string to format
 - … (string) rest of arguments will be treated as parameters for replacement
 = (string) formated string
 > Usage
 | var x = 10,
 |     y = 20,
 |     width = 40,
 |     height = 50;
 | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Raphael.format("M{0},{1}h{2}v{3}h{4}z", x, y, width, height, -width));
\*/
R.format = function (token, params) {
    var arg = (0, _raphael.getArrayCopy)(arguments),
        args = R.is(params, ARRAY) ? [0][CONCAT](params) : arg;
    token && R.is(token, STRING) && args.length - 1 && (token = token.replace(formatrg, function (str, i) {
        return args[++i] == null ? E : args[i];
    }));
    return token || E;
};

var crispFixer = R.vml && 0.5 || 0;

R.crispBound = (0, _raphael.cacher)(function (x, y, w, h, s) {
    var at = {},
        normalizer;

    x = x || 0;
    y = y || 0;
    w = w || 0;
    h = h || 0;
    s = s || 0;
    normalizer = s % 2 / 2 + crispFixer;

    // normalize for crisp edges
    at.x = round(x + normalizer) - normalizer;
    at.y = round(y + normalizer) - normalizer;
    at.width = round(x + w + normalizer) - normalizer - at.x;
    at.height = round(y + h + normalizer) - normalizer - at.y;
    at['stroke-width'] = s;

    // adjust to single pixel if resultant dimension is zero.
    at.width === 0 && w !== 0 && (at.width = 1);
    at.height === 0 && h !== 0 && (at.height = 1);

    return at;
}, R);

elproto.crisp = function () {
    var o = this,
        attrs = o.attrs,
        key,
        attr = {},
        values = o.attr();

    values = R.crispBound(values.x, values.y, values.width, values.height, values['stroke-width']);

    for (key in values) {
        if (attrs[key] === values[key]) {
            // only set attribute if changed
            delete values[key];
        }
    }

    return o.attr(values);
};

/*\
 * Raphael.define
 [ method ]
 **
 * Allows a unified definition of composite shapes and other behaviours using
 * simple directives.
 **
 > Parameters
 **
 - definition (object) the shape definition
\*/
R.define = function (name, init, ca, fn, e, data) {
    var i, ii;

    // multi definition
    if (R.is(name, ARRAY)) {
        for (i = 0, ii = name.length; i < ii; i++) {
            R.define(name[i]);
        }
        return;
    }
    // object definition
    else if (R.is(name, OBJECT)) {
            R.define(name.name, name[name.name], name.ca, name.fn, name.e, name.data);
            return;
        }
        // invalid or duplicate definition
        else if (!name || R.fn[name]) {
                return;
            }

    R.fn[name] = function () {
        var args = (0, _raphael.getArrayCopy)(arguments),
            element = init.apply(this, args),
            key;

        if (fn && R.is(fn, OBJECT)) {
            for (key in fn) {
                element[key] = fn[key];
            }
        }

        if (e && R.is(e, OBJECT)) {
            for (key in e) {
                element[key] && element[key](e[key]);
            }
        }

        if (ca) {
            if (R.is(ca, FUNCTION)) {
                element.ca[name] = ca;
            } else {
                for (key in ca) {
                    element.ca[key] = ca[key];
                }
            }

            // Check if namesake ca exists and apply it
            if (element.ca[name]) {
                R._lastArgIfGroup(args, true); // purge group
                if (args.length) {
                    // If name attribute is present then the received argument is an object with the customAttribute and other
                    // common attributes. Else it is just the customAttributes that is to be applied.
                    args[0][name] ? element.attr.apply(element, args) : element.attr(name, args[0]);
                }
            }
        }

        return element;
    };

    if (ca) {
        R.fn[name].ca = ca;
    }
    if (fn) {
        R.fn[name].fn = fn;
    }
    if (e) {
        R.fn[name].e = e;
    }
    if (data) {
        R.fn[name].data = data;
    }

    return R.fn[name];
};
// Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
(function (doc, loaded, _f) {
    if (doc.readyState == null && doc.addEventListener) {
        doc.addEventListener(loaded, _f = function f() {
            doc.removeEventListener(loaded, _f, false);
            doc.readyState = "complete";
        }, false);
        doc.readyState = "loading";
    }
    function isLoaded() {
        /in/.test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
    }
    isLoaded();
})(doc, "DOMContentLoaded");

_eve3['default'].on("raphael.DOMload", function () {
    loaded = true;
});
R._preload = function (src, f) {
    var doc = g.doc,
        img = doc.createElement("img");
    img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
    img.onload = function () {
        f.call(this);
        this.onload = null;
        doc.body.removeChild(this);
    };
    img.onerror = function () {
        doc.body.removeChild(this);
    };
    doc.body.appendChild(img);
    img.src = src;
};

// EXPOSE
// SVG and VML are appended just before the EXPOSE line
// Even with AMD, Raphael should be defined globally
// oldRaphael.was ? (g.win.Raphael = R) : (Raphael = R);

exports['default'] = R;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(57);
module.exports = __webpack_require__(27).f('iterator');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(46)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var defined = __webpack_require__(19);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(2)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(18);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(1);
var toObject = __webpack_require__(38);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
var global = __webpack_require__(0);
var hide = __webpack_require__(2);
var Iterators = __webpack_require__(21);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(59);
var step = __webpack_require__(60);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(5);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
module.exports = __webpack_require__(12).Symbol;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(1);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(31);
var redefine = __webpack_require__(34);
var META = __webpack_require__(63).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(24);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(16);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(27);
var wksDefine = __webpack_require__(28);
var enumKeys = __webpack_require__(64);
var isArray = __webpack_require__(65);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(8);
var toObject = __webpack_require__(38);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(20);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(66);
var $GOPD = __webpack_require__(67);
var $GOPS = __webpack_require__(39);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(29).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(11)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(2)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(1);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(39);
var pIE = __webpack_require__(29);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(37);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(5);
var gOPN = __webpack_require__(40).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(29);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(20);
var has = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(32);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('asyncIterator');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28)('observable');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _raphael = __webpack_require__(10);

// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.3 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

exports["default"] = function (glob) {
    var version = "0.5.3",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function fun() {},
        numsort = function numsort(a, b) {
        return a - b;
    },
        current_event,
        stop,
        events = { n: {} },
        firstDefined = function firstDefined() {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    },
        lastDefined = function lastDefined() {
        var i = this.length;
        while (--i) {
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    },
        objtos = Object.prototype.toString,
        Str = String,
        isArray = Array.isArray || function (ar) {
        return ar instanceof Array || objtos.call(ar) == "[object Array]";
    };
    /*\
     * eve
     [ method ]
      * Fires event with given `name`, given scope and other parameters.
      - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers
      = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
    function eve(name, scope) {
        var e = events,
            oldstop = stop,
            arg = (0, _raphael.getArrayCopy)(arguments),
            args = Array.prototype.slice.call(arg, 2),
            listeners = eve.listeners(name),
            z = 0,
            f = false,
            l,
            indexed = [],
            queue = {},
            out = [],
            ce = current_event,
            errors = [];
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for (var i = 0, ii = listeners.length; i < ii; i++) {
            if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
        }indexed.sort(numsort);
        while (indexed[z] < 0) {
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));
            if (stop) {
                stop = oldstop;
                return out;
            }
        }
        for (i = 0; i < ii; i++) {
            l = listeners[i];
            if ("zIndex" in l) {
                if (l.zIndex == indexed[z]) {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                    do {
                        z++;
                        l = queue[indexed[z]];
                        l && out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                    } while (l);
                } else {
                    queue[l.zIndex] = l;
                }
            } else {
                out.push(l.apply(scope, args));
                if (stop) {
                    break;
                }
            }
        }
        stop = oldstop;
        current_event = ce;
        return out;
    };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]
      * Internal method which gives you array of all event handlers that will be triggered by the given `name`.
      - name (string) name of the event, dot (`.`) or slash (`/`) separated
      = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = isArray(name) ? name : name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]
      * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.
      - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/
    eve.separator = function (sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        if (typeof f != "function") {
            return function () {};
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = isArray(name) ? name : Str(name).split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = { n: {} });
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) {
                    if (e.f[i] == f) {
                        exist = true;
                        break;
                    }
                }!exist && e.f.push(f);
            })(names[i]);
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var args = (0, _raphael.getArrayCopy)(arguments),
            attrs = [].slice.call(args, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(args, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = { n: {} };
            return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e,
            key,
            splice,
            i,
            ii,
            j,
            jj,
            cur = [events],
            inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for (key in e) {
                        if (e[has](key)) {
                            splice.push(e[key]);
                            inodes.unshift({
                                n: e,
                                name: key
                            });
                        }
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) {
                            if (e.f[j] == f) {
                                e.f.splice(j, 1);
                                break;
                            }
                        }!e.f.length && delete e.f;
                    }
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            var funcs = e.n[key].f;
                            for (j = 0, jj = funcs.length; j < jj; j++) {
                                if (funcs[j] == f) {
                                    funcs.splice(j, 1);
                                    break;
                                }
                            }!funcs.length && delete e.n[key].f;
                        }
                    }
                } else {
                    delete e.f;
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            delete e.n[key].f;
                        }
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
                // not empty (has listeners)
                continue prune;
            }
            for (key in e.n[e.name].n) {
                // not empty (has children)
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function f2() {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    glob.eve = eve;
    // typeof module != "undefined" && module.exports ? module.exports = eve : typeof define === "function" && define.amd ? define("eve", [], function() { return eve; }) : glob.eve = eve;
    return eve;
}(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : null);

module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

exports['default'] = function (R) {
    var _win = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null,
        g = {
        doc: _win.document,
        win: _win
    },
        elproto = R.el,
        has = 'hasOwnProperty',
        apply = 'apply',
        object = 'object',
        array = 'array',
        string = 'string',
        split = 'split',
        finite = 'finite',
        separator = /[, ]+/,
        oldRaphael = {
        was: Object.prototype[has].call(g.win, 'Raphael'),
        is: g.win.Raphael
    },
        E = '',
        mmax = Math.max,
        mmin = Math.min,
        paperproto = R.fn,
        getPath = R._getPath,
        Str = String,

    // Set
    Set = function Set(items) {
        this.items = [];
        this.length = 0;
        this.type = 'set';
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
        setproto = Set.prototype,
        getOffset = function getOffset(elem) {
        var box = elem.getBoundingClientRect(),
            doc = elem.ownerDocument,
            body = doc.body,
            docElem = doc.documentElement,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
        return {
            y: top,
            x: left
        };
    },


    /*\
        * Raphael.transformPath
        [ method ]
        **
        * Utility method
        **
        * Returns path transformed by a given transformation
        > Parameters
        - path (string) path string
        - transform (string|array) transformation string
        = (string) path
    \*/
    transformPath = R.transformPath = function (path, transform) {
        return mapPath(path, toMatrix(path, transform));
    },


    /*\
        * Raphael.toMatrix
        [ method ]
        **
        * Utility method
        **
        * Returns matrix of transformations applied to a given path
        > Parameters
        - path (string) path string
        - transform (string|array) transformation string
        = (object) @Matrix
    \*/
    toMatrix = R.toMatrix = function (path, transform) {
        var bb = pathDimensions(path),
            el = {
            _: {
                transform: E
            },
            getBBox: function getBBox() {
                return bb;
            }
        };
        extractTransform(el, transform);
        return el.matrix;
    },
        pathToRelative = R._pathToRelative = function (pathArray) {
        var pth = paths(pathArray);
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!R.is(pathArray, ARRAY) || !R.is(pathArray && pathArray[0], ARRAY)) {
            // rough assumption
            pathArray = R.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] === strM) {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push([strM, x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case 'm':
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] === mStr) {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = R._path2string;
        pth.rel = pathClone(res);
        return res;
    };

    /*
     * Raphael.st
     [ property (object) ]
     **
     * You can add your own method to elements and sets. It is wise to add a set method for each element method
     * you added, so you will be able to call the same method on sets too.
     **
     * See also @Raphael.el.
     > Usage
     | Raphael.el.red = function () {
     |     this.attr({fill: '#f00'});
     | };
     | Raphael.st.red = function () {
     |     this.forEach(function (el) {
     |         el.red();
     |     });
     | };
     | // then use it
     | paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
    */
    R.st = setproto;

    /*
     * Raphael.snapTo
     [ method ]
     **
     * Snaps given value to given grid.
     > Parameters
     - values (array|number) given array of values or step of the grid
     - value (number) value to adjust
     - tolerance (number) #optional tolerance for snapping. Default is `10`.
     = (number) adjusted value.
    */
    R.snapTo = function (values, value, tolerance) {
        var rem, i;

        if (!R.is(tolerance, finite)) {
            tolerance = 10;
        }

        if (R.is(values, array)) {
            i = values.length;
            while (i--) {
                if (Math.abs(values[i] - value) <= tolerance) {
                    return values[i];
                }
            }
        } else {
            values = +values;
            rem = value % values;

            if (rem < tolerance) {
                return value - rem;
            }
            if (rem > values - tolerance) {
                return value - rem + values;
            }
        }
        return value;
    };

    /*
     * Raphael.registerFont
     [ method ]
     **
     * Adds given font to the registered set of fonts for Raphaël. Should be used as an internal call from within Cufón’s font file.
     * Returns original parameter, so it could be used with chaining.
     # <a href='http://wiki.github.com/sorccu/cufon/about'>More about Cufón and how to convert your font form TTF, OTF, etc to JavaScript file.</a>
     **
     > Parameters
     **
     - font (object) the font to register
     = (object) the font you passed in
     > Usage
     | Cufon.registerFont(Raphael.registerFont({…}));
    */
    R.registerFont = function (font) {
        if (!font.face) {
            return font;
        }
        this.fonts = this.fonts || {};
        var fontcopy = {
            w: font.w,
            face: {},
            glyphs: {}
        },
            family = font.face['font-family'];
        for (var prop in font.face) {
            if (font.face[has](prop)) {
                fontcopy.face[prop] = font.face[prop];
            }
        }if (this.fonts[family]) {
            this.fonts[family].push(fontcopy);
        } else {
            this.fonts[family] = [fontcopy];
        }
        if (!font.svg) {
            fontcopy.face['units-per-em'] = g.win.parseInt(font.face['units-per-em'], 10);
            for (var glyph in font.glyphs) {
                if (font.glyphs[has](glyph)) {
                    var path = font.glyphs[glyph];
                    fontcopy.glyphs[glyph] = {
                        w: path.w,
                        k: {},
                        d: path.d && 'M' + path.d.replace(/[mlcxtrv]/g, function (command) {
                            return {
                                l: 'L',
                                c: 'C',
                                x: 'z',
                                t: 'm',
                                r: 'l',
                                v: 'c'
                            }[command] || 'M';
                        }) + 'z'
                    };
                    if (path.k) {
                        for (var k in path.k) {
                            if (path[has](k)) {
                                fontcopy.glyphs[glyph].k[k] = path.k[k];
                            }
                        }
                    }
                }
            }
        }
        return font;
    };

    /*
     * Raphael.fullfill
     [ method ]
     **
     * A little bit more advanced format function than @Raphael.format. Replaces construction of type “`{<name>}`” to the corresponding argument.
     **
     > Parameters
     **
     - token (string) string to format
     - json (object) object which properties will be used as a replacement
     = (string) formated string
     > Usage
     | // this will draw a rectangular shape equivalent to 'M10,20h40v50h-40z'
     | paper.path(Raphael.fullfill('M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z', {
     |     x: 10,
     |     y: 20,
     |     dim: {
     |         width: 40,
     |         height: 50,
     |         'negative width': -40
     |     }
     | }));
    */
    R.fullfill = function () {
        var tokenRegex = /\{([^\}]+)\}/g,
            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|')(.+?)\2\])(\(\))?/g,
            // matches .xxxxx or ['xxxxx'] to run over object properties
        replacer = function replacer(all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == 'function' && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + '';
            return res;
        };
        return function (str, obj) {
            return String(str).replace(tokenRegex, function (all, key) {
                return replacer(all, key, obj);
            });
        };
    }();

    /*
     * Raphael.ninja
     [ method ]
     **
     * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but anyway.) You can use `ninja` method.
     * Beware, that in this case plugins could stop working, because they are depending on global variable existance.
     **
     = (object) Raphael object
     > Usage
     | (function (local_raphael) {
     |     var paper = local_raphael(10, 10, 320, 200);
     |     …
     | })(Raphael.ninja());
    */
    R.ninja = function () {
        oldRaphael.was ? g.win.Raphael = oldRaphael.is : delete g.win.Raphael;
        return R;
    };

    /*\
     * Raphael.isPointInsidePath
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     > Parameters
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) true, if point is inside the path
    \*/
    R.isPointInsidePath = function (path, x, y) {
        var bbox = R.pathBBox(path);
        return R.isPointInsideBBox(bbox, x, y) && (interPathHelper(path, [[strM, x, y], ["H", bbox.x2 + 10]], 1) % 2 === 1 || interPathHelper(path, [[strM, x, y], ["V", bbox.y2 + 10]], 1) % 2 === 1);
    };

    /*\
     * Raphael.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     > Parameters
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if they intersect
    \*/
    R.isBBoxIntersect = function (bbox1, bbox2) {
        var i = R.isPointInsideBBox;
        return i(bbox2, bbox1.x, bbox1.y) || i(bbox2, bbox1.x2, bbox1.y) || i(bbox2, bbox1.x, bbox1.y2) || i(bbox2, bbox1.x2, bbox1.y2) || i(bbox1, bbox2.x, bbox2.y) || i(bbox1, bbox2.x2, bbox2.y) || i(bbox1, bbox2.x, bbox2.y2) || i(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    };

    /*\
     * Raphael.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding boxes.
     > Parameters
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point inside
    \*/
    R.isPointInsideBBox = function (bbox, x, y) {
        return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
    };

    /*\
     * Raphael.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Return bounding box of a given cubic bezier curve
     > Parameters
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for bezier curve
     = (object) point information in format:
     o {
     o     min: {
     o         x: (number) x coordinate of the left point
     o         y: (number) y coordinate of the top point
     o     }
     o     max: {
     o         x: (number) x coordinate of the right point
     o         y: (number) y coordinate of the bottom point
     o     }
     o }
    \*/
    R.bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!R.is(p1x, ARRAY)) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return {
            x: bbox.min.x,
            y: bbox.min.y,
            x2: bbox.max.x,
            y2: bbox.max.y,
            width: bbox.max.x - bbox.min.x,
            height: bbox.max.y - bbox.min.y
        };
    };

    R.addArrow = function (o, value, isEnd) {
        if (R.vml) {
            var values = Str(value).toLowerCase().split("-"),
                se = isEnd ? "end" : "start",
                i = values.length,
                type = "classic",
                w = "medium",
                h = "medium";
            while (i--) {
                switch (values[i]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        type = values[i];
                        break;
                    case "wide":
                    case "narrow":
                        h = values[i];
                        break;
                    case "long":
                    case "short":
                        w = values[i];
                        break;
                }
            }
            var stroke = o.node.getElementsByTagName("stroke")[0];
            stroke[se + "arrow"] = type;
            stroke[se + "arrowlength"] = w;
            stroke[se + "arrowwidth"] = h;
        } else if (R.svg) {
            if (o.type === 'path') {
                var values = Str(value).toLowerCase().split('-'),
                    p = o.paper,
                    se = isEnd ? 'end' : 'start',
                    node = o.node,
                    attrs = o.attrs,
                    stroke = attrs['stroke-width'],
                    i = values.length,
                    type = 'classic',
                    from,
                    to,
                    dx,
                    refX,
                    attr,
                    w = 3,
                    h = 3,
                    t = 5;
                while (i--) {
                    switch (values[i]) {
                        case 'block':
                        case 'classic':
                        case 'oval':
                        case 'diamond':
                        case 'open':
                        case 'none':
                            type = values[i];
                            break;
                        case 'wide':
                            h = 5;
                            break;
                        case 'narrow':
                            h = 2;
                            break;
                        case 'long':
                            w = 5;
                            break;
                        case 'short':
                            w = 2;
                            break;
                    }
                }
                if (type === 'open') {
                    w += 2;
                    h += 2;
                    t += 2;
                    dx = 1;
                    refX = isEnd ? 4 : 1;
                    attr = {
                        fill: noneStr,
                        stroke: attrs.stroke
                    };
                } else {
                    refX = dx = w / 2;
                    attr = {
                        fill: attrs.stroke,
                        stroke: noneStr
                    };
                }
                if (o._.arrows) {
                    if (isEnd) {
                        o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
                        o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
                    } else {
                        o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
                        o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
                    }
                } else {
                    o._.arrows = {};
                }
                if (type !== noneStr) {
                    var pathId = 'raphael-marker-' + type,
                        markerId = 'raphael-marker-' + se + type + w + h + '-obj' + o.id;
                    if (!R._g.doc.getElementById(pathId)) {
                        p.defs.appendChild($($('path'), {
                            'stroke-linecap': 'round',
                            d: markers[type],
                            id: pathId
                        }));
                        markerCounter[pathId] = 1;
                    } else {
                        markerCounter[pathId]++;
                    }
                    var marker = R._g.doc.getElementById(markerId),
                        use;
                    if (!marker) {
                        marker = $($('marker'), {
                            id: markerId,
                            markerHeight: h,
                            markerWidth: w,
                            orient: 'auto',
                            refX: refX,
                            refY: h / 2
                        });
                        use = $($('use'), {
                            'xlink:href': '#' + pathId,
                            transform: (isEnd ? 'rotate(180 ' + w / 2 + S + h / 2 + ') ' : E) + 'scale(' + w / t + ',' + h / t + ')',
                            'stroke-width': (1 / ((w / t + h / t) / 2)).toFixed(4)
                        });
                        marker.appendChild(use);
                        p.defs.appendChild(marker);
                        markerCounter[markerId] = 1;
                    } else {
                        markerCounter[markerId]++;
                        use = marker.getElementsByTagName('use')[0];
                    }
                    $(use, attr);
                    var delta = dx * (type !== 'diamond' && type !== 'oval');
                    if (isEnd) {
                        from = o._.arrows.startdx * stroke || 0;
                        to = R.getTotalLength(attrs.path) - delta * stroke;
                    } else {
                        from = delta * stroke;
                        to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                    }
                    attr = {};
                    attr['marker-' + se] = "url('" + R._url + '#' + markerId + "')";
                    if (to || from) {
                        attr.d = R.getSubpath(attrs.path, from, to);
                    }
                    $(node, attr);
                    o._.arrows[se + 'Path'] = pathId;
                    o._.arrows[se + 'Marker'] = markerId;
                    o._.arrows[se + 'dx'] = delta;
                    o._.arrows[se + 'Type'] = type;
                    o._.arrows[se + typeStringSTR] = value;
                } else {
                    if (isEnd) {
                        from = o._.arrows.startdx * stroke || 0;
                        to = R.getTotalLength(attrs.path) - from;
                    } else {
                        from = 0;
                        to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                    }
                    o._.arrows[se + 'Path'] && $(node, {
                        d: R.getSubpath(attrs.path, from, to)
                    });
                    delete o._.arrows[se + 'Path'];
                    delete o._.arrows[se + 'Marker'];
                    delete o._.arrows[se + 'dx'];
                    delete o._.arrows[se + 'Type'];
                    delete o._.arrows[se + typeStringSTR];
                }
                for (attr in markerCounter) {
                    if (markerCounter[has](attr) && !markerCounter[attr]) {
                        var item = R._g.doc.getElementById(attr);
                        item && item.parentNode.removeChild(item);
                    }
                }
            }
        }
    };

    /*\
     * Raphael.setWindow
     [ method ]
     **
     * Used when you need to draw in `&lt;iframe>`. Switched window to the iframe one.
     > Parameters
     - newwin (window) new window object
    \*/
    R.setWindow = function (newwin) {
        eve("raphael.setWindow", R, g.win, newwin);
        win = g.win = newwin;
        doc = g.doc = g.win.document;
        if (R._engine.initWin) {
            R._engine.initWin(g.win);
        }
    };

    /*\
     * Raphael.getColor
     [ method ]
     **
     * On each call returns next colour in the spectrum. To reset it back to red call @Raphael.getColor.reset
     > Parameters
     - value (number) #optional brightness, default is `0.75`
     = (string) hex representation of the colour.
    \*/
    R.getColor = function (value) {
        var start = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: value || .75
        },
            rgb = this.hsb2rgb(start.h, start.s, start.b);
        start.h += .075;
        if (start.h > 1) {
            start.h = 0;
            start.s -= .2;
            start.s <= 0 && (this.getColor.start = {
                h: 0,
                s: 1,
                b: start.b
            });
        }
        return rgb.hex;
    };

    /*\
     * Raphael.getColor.reset
     [ method ]
     **
     * Resets spectrum position for @Raphael.getColor back to red.
    \*/
    R.getColor.reset = function () {
        delete this.start;
    };

    /*\
     * Raphael.hsb
     [ method ]
     **
     * Converts HSB values to hex representation of the colour.
     > Parameters
     - h (number) hue
     - s (number) saturation
     - b (number) value or brightness
     = (string) hex representation of the colour.
    \*/
    R.hsb = (0, _raphael.cacher)(function (h, s, b) {
        return R.hsb2rgb(h, s, b).hex;
    });

    /*\
     * Raphael.hsl
     [ method ]
     **
     * Converts HSL values to hex representation of the colour.
     > Parameters
     - h (number) hue
     - s (number) saturation
     - l (number) luminosity
     = (string) hex representation of the colour.
    \*/
    R.hsl = (0, _raphael.cacher)(function (h, s, l) {
        return R.hsl2rgb(h, s, l).hex;
    });

    /*\
     * Raphael.angle
     [ method ]
     **
     * Returns angle between two or three points
     > Parameters
     - x1 (number) x coord of first point
     - y1 (number) y coord of first point
     - x2 (number) x coord of second point
     - y2 (number) y coord of second point
     - x3 (number) #optional x coord of third point
     - y3 (number) #optional y coord of third point
     = (number) angle in degrees.
    \*/
    R.angle = function (x1, y1, x2, y2, x3, y3) {
        if (x3 == null) {
            var x = x1 - x2,
                y = y1 - y2;
            if (!x && !y) {
                return 0;
            }
            return (180 + math.atan2(-y, -x) * rad2deg + 360) % 360;
        } else {
            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
        }
    };

    R.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };

    R.pathToRelative = pathToRelative;

    /*
     * Paper.getFont
     [ method ]
     **
     * Finds font object in the registered fonts by given parameters. You could specify only one word from the font name, like “Myriad” for “Myriad Pro”.
     **
     > Parameters
     **
     - family (string) font family name or any word from it
     - weight (string) #optional font weight
     - style (string) #optional font style
     - stretch (string) #optional font stretch
     = (object) the font object
     > Usage
     | paper.print(100, 100, 'Test string', paper.getFont('Times', 800), 30);
    */
    paperproto.getFont = function (family, weight, style, stretch) {
        stretch = stretch || 'normal';
        style = style || 'normal';
        weight = +weight || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[weight] || 400;
        if (!R.fonts) {
            return;
        }
        var font = R.fonts[family];
        if (!font) {
            var name = new RegExp('(^|\\s)' + family.replace(/[^\w\d\s+!~.:_-]/g, E) + '(\\s|$)', 'i');
            for (var fontName in R.fonts) {
                if (R.fonts[has](fontName)) {
                    if (name.test(fontName)) {
                        font = R.fonts[fontName];
                        break;
                    }
                }
            }
        }
        var thefont;
        if (font) {
            for (var i = 0, ii = font.length; i < ii; i++) {
                thefont = font[i];
                if (thefont.face['font-weight'] == weight && (thefont.face['font-style'] == style || !thefont.face['font-style']) && thefont.face['font-stretch'] == stretch) {
                    break;
                }
            }
        }
        return thefont;
    };

    /*
     * Paper.print
     [ method ]
     **
     * Creates path that represent given text written using given font at given position with given size.
     * Result of the method is path element that contains whole text as a separate path.
     **
     > Parameters
     **
     - x (number) x position of the text
     - y (number) y position of the text
     - string (string) text to print
     - font (object) font object, see @Paper.getFont
     - size (number) #optional size of the font, default is `16`
     - origin (string) #optional could be `'baseline'` or `'middle'`, default is `'middle'`
     - letter_spacing (number) #optional number in range `-1..1`, default is `0`
     = (object) resulting path element, which consist of all letters
     > Usage
     | var txt = r.print(10, 50, 'print', r.getFont('Museo'), 30).attr({fill: '#fff'});
    */
    paperproto.print = function (x, y, string, font, size, origin, letterSpacing) {
        origin = origin || 'middle'; // baseline|middle
        letterSpacing = mmax(mmin(letterSpacing || 0, 1), -1);
        var letters = Str(string)[split](E),
            shift = 0,
            notfirst = 0,
            path = E,
            scale;
        R.is(font, string) && (font = this.getFont(font));
        if (font) {
            scale = (size || 16) / font.face['units-per-em'];
            var bb = font.face.bbox[split](separator),
                top = +bb[0],
                lineHeight = bb[3] - bb[1],
                shifty = 0,
                height = +bb[1] + (origin == 'baseline' ? lineHeight + +font.face.descent : lineHeight / 2);
            for (var i = 0, ii = letters.length; i < ii; i++) {
                if (letters[i] == '\n') {
                    shift = 0;
                    curr = 0;
                    notfirst = 0;
                    shifty += lineHeight;
                } else {
                    var prev = notfirst && font.glyphs[letters[i - 1]] || {},
                        curr = font.glyphs[letters[i]];
                    shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + font.w * letterSpacing : 0;
                    notfirst = 1;
                }
                if (curr && curr.d) {
                    path += R.transformPath(curr.d, ['t', shift * scale, shifty * scale, 's', scale, scale, top, height, 't', (x - top) / scale, (y - height) / scale]);
                }
            }
        }
        return this.path(path).attr({
            fill: '#000',
            stroke: 'none'
        });
    };

    /*
     * Paper.add
     [ method ]
     **
     * Imports elements in JSON array in format `{type: type, <attributes>}`
     **
     > Parameters
     **
     - json (array)
     = (object) resulting set of imported elements
     > Usage
     | paper.add([
     |     {
     |         type: 'circle',
     |         cx: 10,
     |         cy: 10,
     |         r: 5
     |     },
     |     {
     |         type: 'rect',
     |         x: 10,
     |         y: 10,
     |         width: 10,
     |         height: 10,
     |         fill: '#fc0'
     |     }
     | ]);
    */
    paperproto.add = function (json) {
        if (R.is(json, 'array')) {
            var res = this.set(),
                i = 0,
                ii = json.length,
                j;
            for (; i < ii; i++) {
                j = json[i] || {};
                elements[has](j.type) && res.push(this[j.type]().attr(j));
            }
        }
        return res;
    };
    /*
     * Paper.getElementByPoint
     [ method ]
     **
     * Returns you topmost element under given point.
     **
     = (object) Raphaël element object
     > Parameters
     **
     - x (number) x coordinate from the top left corner of the window
     - y (number) y coordinate from the top left corner of the window
     > Usage
     | paper.getElementByPoint(mouseX, mouseY).attr({stroke: '#f00'});
    */
    paperproto.getElementByPoint = function (x, y) {
        var paper = this,
            svg = paper.canvas,
            target = g.doc.elementFromPoint(x, y);
        if (g.win.opera && target.tagName == 'svg') {
            var so = getOffset(svg),
                sr = svg.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = svg.getIntersectionList(sr, null);
            if (hits.length) {
                target = hits[hits.length - 1];
            }
        }
        if (!target) {
            return null;
        }
        while (target.parentNode && target != svg.parentNode && !target.raphael) {
            target = target.parentNode;
        }
        target == paper.canvas.parentNode && (target = svg);
        target = target && target.raphael ? paper.getById(target.raphaelid) : null;
        return target;
    };

    /*
     * Paper.getElementsByBBox
     [ method ]
     **
     * Returns set of elements that have an intersecting bounding box
     **
     > Parameters
     **
     - bbox (object) bbox to check with
     = (object) @Set
     */
    paperproto.getElementsByBBox = function (bbox) {
        var set = this.set();
        this.forEach(function (el) {
            if (R.isBBoxIntersect(el.getBBox(), bbox)) {
                set.push(el);
            }
        });
        return set;
    };

    /*
     * Paper.forEach
     [ method ]
     **
     * Executes given function for each element on the paper
     *
     * If callback function returns `false` it will stop loop running.
     **
     > Parameters
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Paper object
     > Usage
     | paper.forEach(function (el) {
     |     el.attr({ stroke: 'blue' });
     | });
    */
    paperproto.forEach = function (callback, thisArg) {
        var bot = this.bottom;
        while (bot) {
            if (callback.call(thisArg, bot) === false) {
                return this;
            }
            bot = bot.next;
        }
        return this;
    };

    /*
     * Paper.getElementsByPoint
     [ method ]
     **
     * Returns set of elements that have common point inside
     **
     > Parameters
     **
     - x (number) x coordinate of the point
     - y (number) y coordinate of the point
     = (object) @Set
    */
    paperproto.getElementsByPoint = function (x, y) {
        var set = this.set();
        this.forEach(function (el) {
            if (el.isPointInside(x, y)) {
                set.push(el);
            }
        });
        return set;
    };

    /*
     * Paper.set
     [ method ]
     **
     * Creates array-like object to keep and operate several elements at once.
     * Warning: it doesn’t create any elements for itself in the page, it just groups existing elements.
     * Sets act as pseudo elements — all methods available to an element can be used on a set.
     = (object) array-like object that represents set of elements
     **
     > Usage
     | var st = paper.set();
     | st.push(
     |     paper.circle(10, 10, 5),
     |     paper.circle(30, 10, 5)
     | );
     | st.attr({fill: 'red'}); // changes the fill of both circles
    */
    paperproto.set = function (itemsArray) {
        var args = (0, _raphael.getArrayCopy)(arguments);
        !R.is(itemsArray, 'array') && (itemsArray = Array.prototype.splice.call(args, 0, args.length));
        var out = new Set(itemsArray);
        this.__set__ && this.__set__.push(out);
        return out;
    };

    /*
     * Paper.setStart
     [ method ]
     **
     * Creates @Paper.set. All elements that will be created after calling this method and before calling
     * @Paper.setFinish will be added to the set.
     **
     > Usage
     | paper.setStart();
     | paper.circle(10, 10, 5),
     | paper.circle(30, 10, 5)
     | var st = paper.setFinish();
     | st.attr({fill: 'red'}); // changes the fill of both circles
    */
    paperproto.setStart = function (set) {
        this.__set__ = set || this.set();
    };

    /*
     * Paper.setFinish
     [ method ]
     **
     * See @Paper.setStart. This method finishes catching and returns resulting set.
     **
     = (object) set
    */
    paperproto.setFinish = function (set) {
        var out = this.__set__;
        delete this.__set__;
        return out;
    };

    /*\
     * Paper.removeDefs
     [ method ]
     **
     * Remove a particular definition of given id from paper
     **
     > Parameters
     **
     - id (string) id of the element to remove
     **
     > Usage
     | paper.removeDefs(id);
    \*/
    paperproto.removeDefs = function (id) {
        if (!R.svg) {
            return;
        }
        var element = R._g.doc.getElementById(id);
        element && element.remove();
    };

    /*\
     * Paper.updateDefs
     [ method ]
     **
     * Update definitions in paper
     **
     > Parameters
     **
     - id (string or object) id of the element or the element node itself
     - attrObj (object) attribute of the element object with it's children attributes nested
     - hardUpdateChildren (boolean) determines whether to create new children if child elements are less than
       the children in attrObj or remove children in same manner
     **
     > Usage
     | paper.updateDefs(id, {
     |      width: '100%',
     |      height: '100%',
     |      children: [{
     |          dx: '2'
     |      }]
     |   }, true);
     | // Updates element of given id
     | // Updates the child element if present and create new child if found less than the children in attrObj
     | // and delete a child in same manner according to value of 'hardUpdateChildren'
    \*/
    paperproto.updateDefs = function (id, attrObj, hardUpdateChildren) {
        if (!R.svg) {
            return;
        }
        var paper = this,
            element = !(id instanceof Node) ? R._g.doc.getElementById(id) : id,
            attrKey,
            i,
            diff,
            len,
            children = attrObj.children || [],
            elemChildren,
            childId,
            attr = {};

        hardUpdateChildren === undefined && (hardUpdateChildren = true);

        if (element) {
            for (attrKey in attrObj) {
                if (attrKey !== 'tagName' && attrKey !== 'children') {
                    element.setAttribute(attrKey, attrObj[attrKey]);
                }
            }
            elemChildren = element.children;
            for (i = 0, len = children.length; i < len; i++) {
                childId = children[i].id;
                elemChildren[i] ? paper.updateDefs(childId || elemChildren[i], children[i]) : hardUpdateChildren && paper._createDOMNodes(element, children[i]);
            }
            if (hardUpdateChildren) {
                diff = elemChildren.length - i;
                while (diff > 0) {
                    elemChildren[elemChildren.length - 1].remove();
                    diff--;
                }
            }
        }
    };

    /*
     * Element.isPointInside
     [ method ]
     **
     * Determine if given point is inside this element’s shape
     **
     > Parameters
     **
     - x (number) x coordinate of the point
     - y (number) y coordinate of the point
     = (boolean) `true` if point inside the shape
    */
    elproto.isPointInside = function (x, y) {
        var rp = this.realPath = this.realPath || getPath[this.type](this),
            tr;
        return R.isPointInsidePath((tr = this.attr('transform')) && tr.length && R.transformPath(rp, tr) || rp, x, y);
    };

    /*
     * Element.glow
     [ method ]
     **
     * Return set of elements that create glow-like effect around given element. See @Paper.set.
     *
     * Note: Glow is not connected to the element. If you change element attributes it won’t adjust itself.
     **
     > Parameters
     **
     - glow (object) #optional parameters object with all properties optional:
     o {
     o     width (number) size of the glow, default is `10`
     o     fill (boolean) will it be filled, default is `false`
     o     opacity (number) opacity, default is `0.5`
     o     offsetx (number) horizontal offset, default is `0`
     o     offsety (number) vertical offset, default is `0`
     o     color (string) glow colour, default is `black`
     o }
     = (object) @Paper.set of elements that represents glow
    */
    elproto.glow = function (glow) {
        if (this.type == 'text') {
            return null;
        }
        glow = glow || {};
        var s = {
            width: (glow.width || 10) + (+this.attr('stroke-width') || 1),
            fill: glow.fill || false,
            opacity: glow.opacity || 0.5,
            offsetx: glow.offsetx || 0,
            offsety: glow.offsety || 0,
            color: glow.color || '#000'
        },
            c = s.width / 2,
            r = this.paper,
            out = r.set(),
            path = this.realPath || getPath[this.type](this);
        path = this.matrix ? R.mapPath(path, this.matrix) : path;
        for (var i = 1; i < c + 1; i++) {
            out.push(r.path(path).attr({
                stroke: s.color,
                fill: s.fill ? s.color : 'none',
                'stroke-linejoin': 'round',
                'stroke-linecap': 'round',
                'stroke-width': +(s.width / c * i).toFixed(3),
                opacity: +(s.opacity / c).toFixed(3)
            }));
        }
        return out.insertBefore(this).translate(s.offsetx, s.offsety);
    };

    /*
     * Element.setTime
     [ method ]
     **
     * Sets the status of animation of the element in milliseconds. Similar to @Element.status method.
     **
     > Parameters
     **
     - anim (object) animation object
     - value (number) number of milliseconds from the beginning of the animation
     **
     = (object) original element if `value` is specified
     * Note, that during animation following events are triggered:
     *
     * On each animation frame event `anim.frame.<id>`, on start `anim.start.<id>` and on end `anim.finish.<id>`.
    */
    elproto.setTime = function (anim, value) {
        if (anim && value != null) {
            this.status(anim, mmin(value, anim.ms) / anim.ms);
        }
        return this;
    };

    elproto.blur = function (size) {
        if (R.svg) {
            // Experimental. No Safari support. Use it on your own risk.
            var t = this;
            if (+size !== 0) {
                var fltr = $('filter'),
                    blur = $('feGaussianBlur');
                t.attrs.blur = size;
                fltr.id = R.getElementID(R.createUUID());
                $(blur, {
                    stdDeviation: +size || 1.5
                });
                fltr.appendChild(blur);
                t.paper.defs.appendChild(fltr);
                t._blur = fltr;
                $(t.node, {
                    filter: "url('" + R._url + '#' + fltr.id + "')"
                });
            } else {
                if (t._blur) {
                    t._blur.parentNode.removeChild(t._blur);
                    delete t._blur;
                    delete t.attrs.blur;
                }
                t.node.removeAttribute('filter');
            }
        } else if (R.vml) {
            var s = this.node.runtimeStyle,
                f = s.filter;
            f = f.replace(blurregexp, E);
            if (+size !== 0) {
                this.attrs.blur = size;
                s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
                s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
            } else {
                s.filter = f;
                s.margin = 0;
                delete this.attrs.blur;
            }
            return this;
        } else if (R.canvas) {
            return this;
        }
    };

    /*\
     * Raphael.getSubpath
     [ method ]
     **
     * Return subpath of a given path from given length to given length.
     **
     > Parameters
     **
     - path (string) SVG path string
     - from (number) position of the start of the segment
     - to (number) position of the end of the segment
     **
     = (string) pathstring for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        if (this.type != "path") {
            return;
        }
        return R.getSubpath(this.attrs.path, from, to);
    };

    /*
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set.
     = (object) original element
    */
    setproto.push = function () {
        var item, len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };

    /*
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it.
     = (object) element
    */
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };

    /*
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set.
     *
     * If function returns `false` it will stop loop running.
     **
     > Parameters
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    */
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    for (var method in elproto) {
        if (elproto[has](method)) {
            setproto[method] = function (methodname) {
                return function () {
                    var arg = arguments;
                    return this.forEach(function (el) {
                        el[methodname][apply](el, arg);
                    });
                };
            }(method);
        }
    }
    setproto.attr = function (name, value) {
        if (name && R.is(name, array) && R.is(name[0], object)) {
            for (var j = 0, jj = name.length; j < jj; j++) {
                this.items[j].attr(name[j]);
            }
        } else {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
                this.items[i].attr(name, value);
            }
        }
        return this;
    };

    /*
     * Set.clear
     [ method ]
     **
     * Removeds all elements from the set
    */
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };

    /*
     * Set.splice
     [ method ]
     **
     * Removes given element from the set
     **
     > Parameters
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    */
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, isNaN(count) && this.length || count));
        var tail = [],
            todel = [],
            args = [],
            arglen,
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };

    /*
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     > Parameters
     **
     - element (object) element to remove
     = (boolean) `true` if object was found & removed from the set
    */
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (this[i] == el) {
                this.splice(i, 1);
                return true;
            }
        }
    };
    setproto.animate = function (params, ms, easing, callback) {
        (R.is(easing, 'function') || !easing) && (callback = easing || null);
        var len = this.items.length,
            i = len,
            item,
            anim,
            set = this,
            collector;
        if (!len) {
            return this;
        }
        callback && (collector = function collector() {
            ! --len && callback.call(set);
        });
        easing = R.is(easing, string) ? easing : collector;
        anim = R.animation(params, ms, easing, collector);
        item = this.items[--i].animate(anim);
        while (i--) {
            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
        }
        return this;
    };
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) {
            if (!this.items[i].removed) {
                var box = this.items[i].getBBox();
                x.push(box.x);
                y.push(box.y);
                x2.push(box.x + box.width);
                y2.push(box.y + box.height);
            }
        }
        x = mmin[apply](0, x);
        y = mmin[apply](0, y);
        x2 = mmax[apply](0, x2);
        y2 = mmax[apply](0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y
        };
    };
    setproto.clone = function (s) {
        s = new Set();
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return 'Rapha\xEBl\u2018s set';
    };

    setproto.glow = function (glowConfig) {
        var ret = this.paper.set();
        this.forEach(function (shape, index) {
            var g = shape.glow(glowConfig);
            if (g != null) {
                g.forEach(function (shape2, index2) {
                    ret.push(shape2);
                });
            }
        });
        return ret;
    };

    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }

    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }

    function interHelper(bez1, bez2, justCount) {
        var bbox1 = R.bezierBBox(bez1),
            bbox2 = R.bezierBBox(bez2);

        if (!R.isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = mmax(~~(l1 / 5), 1),
            n2 = mmax(~~(l2 / 5), 1),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];

        for (var i = 0; i < n1 + 1; i++) {
            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
            dots1.push({
                x: p.x,
                y: p.y,
                t: i / n1
            });
        }
        for (i = 0; i < n2 + 1; i++) {
            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
            dots2.push({
                x: p.x,
                y: p.y,
                t: i / n2
            });
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] === is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1.001 && t2 >= 0 && t2 <= 1.001) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: mmin(t1, 1),
                                t2: mmin(t2, 1)
                            });
                        }
                    }
                }
            }
        }
        return res;
    }

    /*\
     * Raphael.pathIntersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     > Parameters
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point
     o         y: (number) y coordinate of the point
     o         t1: (number) t value for segment of path1
     o         t2: (number) t value for segment of path2
     o         segment1: (number) order number for segment of path1
     o         segment2: (number) order number for segment of path2
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    R.pathIntersection = function (path1, path2) {
        return interPathHelper(path1, path2);
    };
    R.pathIntersectionNumber = function (path1, path2) {
        return interPathHelper(path1, path2, 1);
    };
    function interPathHelper(path1, path2, justCount) {
        path1 = R._path2curve(path1);
        path2 = R._path2curve(path2);
        var x1,
            y1,
            x2,
            y2,
            x1m,
            y1m,
            x2m,
            y2m,
            bez1,
            bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] === strM) {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] === "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] === strM) {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] === "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
};

var _raphael = __webpack_require__(10);

module.exports = exports['default'];

/**
 * All non fusincharts related functionalities of redRaphael is listed here
 */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(7);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; };

/** !
* RedRaphael 1.0.0 - JavaScript Vector Library SVG Module
* Copyright (c) 2012-2013 FusionCharts, Inc. <http://www.fusioncharts.com>
*
* Raphael 2.1.0 - JavaScript Vector Library SVG Module
* Copyright (c) 2008-2012 Dmitry Baranovskiy <http://raphaeljs.com>
* Copyright © 2008-2012 Sencha Labs <http://sencha.com>
*
* Licensed under the MIT license.
*/
// Define _window as window object in case of indivual file inclusion.


exports['default'] = function (R) {
    if (R.svg) {
        var has = 'hasOwnProperty',
            tSpanStr = 'tspan',
            vAlignStr = 'vertical-align',
            lineHeightStr = 'line-height',
            fontSizeStr = 'font-size',

        // fontFamilyStr = 'font-family',
        imageStr = 'image',
            noneStr = 'none',
            notToTuneStr = '_do-not-tune',
            textStr = 'text',
            textPathStr = 'textpath',
            rtlStr = 'rtl',
            arrayStr = 'array',
            middleStr = 'middle',
            bottomStr = 'bottom',
            topStr = 'top',
            pxStr = 'px',
            initialStr = 'initial',
            fnStr = 'function',
            brStr = '<br>',
            hiddenStr = 'hidden',
            visibleStr = 'visible',
            objectStr = 'object',
            fillStr = 'fill',
            transformStr = 'transform',
            visibilityStr = 'visibility',
            IESplTspanAttr = {
            visibility: hiddenStr,
            'font-size': '0px'
        },
            Str = String,
            VERTICAL = 'vertical',
            HORIZONTAL = 'horizontal',
            PRESERVESTRING = 'pre',
            BLANKSTRING = '',
            toFloat = parseFloat,
            toInt = parseInt,
            vAlignMultiplier = {
            top: 0,
            bottom: -1,
            middle: -0.5
        },
            win = R._g.win,
            navigator = win.navigator,
            isIE = /* @cc_on!@ */false || !!document.documentMode,
            math = Math,
            UNDEF,
            mmax = math.max,
            abs = math.abs,
            pow = math.pow,
            sqrt = math.sqrt,
            xlinkRegx = /^xlink:/,
            separator = /[, ]+/,
            textBreakRegx = /\n|<br\s*?\/?>/i,
            ltgtbrRegex = /&lt|&gt|&quot|&#039|&#034|<br/i,
            nbspRegex = /&nbsp;|&#160;|&#xA0;/g,
            arrayShift = Array.prototype.shift,
            zeroStrokeFix = !!(/AppleWebKit/.test(navigator.userAgent) && (!/Chrome/.test(navigator.userAgent) || navigator.appVersion.match(/Chrome\/(\d+)\./)[1] < 29)),
            eve = R.eve,
            E = '',
            S = ' ',
            xlink = 'http://www.w3.org/1999/xlink',
            svgNSStr = 'http://www.w3.org/2000/svg',
            isIpad = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
            typeStringSTR = 'string',
            markers = {
            block: 'M5,0 0,2.5 5,5z',
            classic: 'M5,0 0,2.5 5,5 3.5,3 3.5,2z',
            diamond: 'M2.5,0 5,2.5 2.5,5 0,2.5z',
            open: 'M6,1 1,3.5 6,6',
            oval: 'M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z'
        },
            shapeRenderingAttrs = {
            speed: 'optimizeSpeed',
            crisp: 'crispEdges',
            precision: 'geometricPrecision'
        },
            nav = navigator.userAgent.toLowerCase(),
            isIE9 = function () {
            var verIE = nav.indexOf('msie') != -1 ? parseInt(nav.split('msie')[1]) : false;
            if (verIE && verIE === 9) {
                return true;
            } else {
                return false;
            }
        }(),
            supportsPointer = R.supportsPointer,
            supportsTouch = R.supportsTouch,
            markerCounter = {},
            preLoad = function preLoad(elem, ig, isURL, paper) {
            R._preload(isURL[1], function () {
                var w = this.offsetWidth,
                    h = this.offsetHeight;
                $(elem, {
                    width: w,
                    height: h
                });
                $(ig, {
                    width: w,
                    height: h
                });
                paper.safari();
            });
        },
            quickExtend = function quickExtend(obj1, obj2) {
            if (obj2) {
                for (var key in obj2) {
                    obj1[key] = obj2[key];
                }
            }
        },
            lastHoveredInfo = {
            elementInfo: []
        },
            doc = R._g.doc,
            win = R._g.win,
            safeMouseEventMapping = {
            mouseover: "touchstart",
            mousedown: "touchstart",
            mouseup: "touchend",
            mousemove: "touchmove",
            mouseout: "touchend" // to handle mouseout event
        },
            allPossibleAttrs = {
            "accent-height": true,
            "accumulate": true,
            "additive": true,
            "alignment-baseline": true,
            "alphabetic": true,
            "amplitude": true,
            "arabic-form": true,
            "ascent": true,
            "azimuth": true,
            "baseline-shift": true,
            "bbox": true,
            "begin": true,
            "bias": true,
            "by": true,
            "cap-height": true,
            "class": true,
            "clip": true,
            "clip-path": true,
            "clip-rule": true,
            "color": true,
            "color-interpolation": true,
            "color-interpolation-filters": true,
            "color-profile": true,
            "color-rendering": true,
            "cursor": true,
            "cx": true,
            "cy": true,
            "d": true,
            "decelerate": true,
            "descent": true,
            "direction": true,
            "display": true,
            "divisor": true,
            "dominant-baseline": true,
            "dur": true,
            "dx": true,
            "dy": true,
            "elevation": true,
            "enable-background": true,
            "end": true,
            "exponent": true,
            "fill": true,
            "fill-opacity": true,
            "fill-rule": true,
            "filter": true,
            "flood-color": true,
            "flood-opacity": true,
            "font-family": true,
            "font-size": true,
            "font-size-adjust": true,
            "font-stretch": true,
            "font-style": true,
            "font-variant": true,
            "font-weight": true,
            "format": true,
            "fr": true,
            "from": true,
            "fx": true,
            "fy": true,
            "g1": true,
            "g2": true,
            "glyph-name": true,
            "glyph-orientation-horizontal": true,
            "glyph-orientation-vertical": true,
            "hanging": true,
            "height": true,
            "horiz-adv-x": true,
            "horiz-origin-x": true,
            "href": true,
            "hreflang": true,
            "id": true,
            "ideographic": true,
            "image-rendering": true,
            "in2": true,
            "in": true,
            "intercept": true,
            "k1": true,
            "k2": true,
            "k3": true,
            "k4": true,
            "k": true,
            "kerning": true,
            "lang": true,
            "letter-spacing": true,
            "lighting-color": true,
            "local": true,
            "marker-end": true,
            "marker-mid": true,
            "marker-start": true,
            "mask": true,
            "mathematical": true,
            "max": true,
            "media": true,
            "method": true,
            "min": true,
            "mode": true,
            "name": true,
            "offset": true,
            "opacity": true,
            "operator": true,
            "order": true,
            "orient": true,
            "orientation": true,
            "origin": true,
            "overflow": true,
            "overline-position": true,
            "overline-thickness": true,
            "paint-order": true,
            "panose-1": true,
            "path": true,
            "ping": true,
            "pointer-events": true,
            "points": true,
            "r": true,
            "radius": true,
            "rel": true,
            "rendering-intent": true,
            "restart": true,
            "result": true,
            "rotate": true,
            "rx": true,
            "ry": true,
            "scale": true,
            "seed": true,
            "shape-rendering": true,
            "slope": true,
            "spacing": true,
            "speed": true,
            "stemh": true,
            "stemv": true,
            "stop-color": true,
            "stop-opacity": true,
            "strikethrough-position": true,
            "strikethrough-thickness": true,
            "string": true,
            "stroke": true,
            "stroke-dasharray": true,
            "stroke-dashoffset": true,
            "stroke-linecap": true,
            "stroke-linejoin": true,
            "stroke-miterlimit": true,
            "stroke-opacity": true,
            "stroke-width": true,
            "style": true,
            "tabindex": true,
            "target": true,
            "text-anchor": true,
            "text-decoration": true,
            "text-rendering": true,
            "to": true,
            "transform": true,
            "type": true,
            "u1": true,
            "u2": true,
            "underline-position": true,
            "underline-thickness": true,
            "unicode": true,
            "unicode-bidi": true,
            "unicode-range": true,
            "units-per-em": true,
            "v-alphabetic": true,
            "v-hanging": true,
            "v-ideographic": true,
            "v-mathematical": true,
            "values": true,
            "vector-effect": true,
            "version": true,
            "vert-adv-y": true,
            "vert-origin-x": true,
            "vert-origin-y": true,
            "visibility": true,
            "width": true,
            "widths": true,
            "word-spacing": true,
            "writing-mode": true,
            "x1": true,
            "x2": true,
            "x": true,
            "x-height": true,
            "xlink:actuate": true,
            "xlink:arcrole": true,
            "xlink:href": true,
            "xlink:role": true,
            "xlink:show": true,
            "xlink:title": true,
            "xlink:type": true,
            "xml:base": true,
            "xml:lang": true,
            "xml:space": true,
            "y1": true,
            "y2": true,
            "y": true,
            "z": true
        };

        /** External function to fire mouseOut for various elements for touch supported devices
         * TouchStart/Pointer Over event is attached in the capturing phase on the document so that
         * when ever any dom is tapped, this callback gets executed 1st and mouseout of the last event is
         * fired.
        */
        if (supportsTouch) {
            doc.addEventListener(supportsPointer ? 'pointerover' : 'touchstart', function (e) {
                if (lastHoveredInfo.srcElement && lastHoveredInfo.srcElement !== (e.srcElement || e.target)) {
                    var elementInfo = lastHoveredInfo.elementInfo,
                        ii = elementInfo.length,
                        elementInfo,
                        elems,
                        i;
                    for (i = 0; i < ii; i++) {
                        elems = elementInfo[i];
                        elems.callback.call(elems.el, e);
                    }
                }
                lastHoveredInfo = {
                    elementInfo: []
                };
            }, true);
        }

        R.toString = function () {
            return 'Your browser supports SVG.\nYou are running Rapha\xebl ' + this.version;
        };

        // Code commented as resources will now be referenced using relative urls.
        // @todo Remove once we have acertained that there are no issues in any environment.
        // Automatic gradient and other reference update on state change
        // R._url = (/msie/i.test(navigator.userAgent) && !window.opera) ?
        //     E : updateReferenceUrl();
        // if (R._url && R._g.win.history.pushState) {
        //     R._g.win.history.pushState = (function () {
        //         var fn = R._g.win.history.pushState;
        //         return function () {
        //             var ret = fn.apply(R._g.win.history, arguments);
        //             return updateReferenceUrl(), ret;
        //         };
        //     }());
        //     R._g.win.addEventListener("popstate", updateReferenceUrl, false);
        // }
        R._url = E;

        var updateGradientReference = function updateGradientReference(element, newGradient) {
            var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fill';

            var gradient = attr === 'fill' ? element.gradient : element['stroke-gradient'];

            if (gradient) {
                if (gradient === newGradient) {
                    return; // no change
                }
                // else gradient is specified and it is not same as newGradient, implying a dereference
                gradient.refCount--;
                if (!gradient.refCount) {
                    gradient.parentNode.removeChild(gradient);
                }
                attr === 'fill' ? delete element.gradient : delete element['stroke-gradient'];
            }

            if (newGradient) {
                // add new gradient
                attr === 'fill' ? element.gradient = newGradient : element['stroke-gradient'] = newGradient;
                newGradient.refCount++;
            }
        };

        var $ = R._createNode = function (el, attr) {
            // Create the element
            if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === typeStringSTR) {
                // eslint-disable-line valid-typeof
                el = R._g.doc.createElementNS(svgNSStr, el);
            }
            if (attr) {
                var key, value;
                for (key in attr) {
                    // IE9 cannot convert the value to string while applying 'transform' attribute
                    value = isIE9 ? Str(attr[key]) : attr[key];
                    if (xlinkRegx.test(key)) {
                        el.setAttributeNS(xlink, key.replace(xlinkRegx, E), value);
                    } else {
                        el.setAttribute(key, value);
                    }
                }
            }
            return el;
        },
            gradientUnitNames = {
            userSpaceOnUse: 'userSpaceOnUse',
            objectBoundingBox: 'objectBoundingBox'
        },
            gradientSpreadNames = {
            pad: 'pad',
            redlect: 'reflect',
            repeat: 'repeat'
        },
            addGradient = function addGradient(element, gradient) {
            var _$;

            var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fill';

            if (!element.paper || !element.paper.defs) {
                return 0;
            }

            var type = 'linear',
                SVG = element.paper,
                id = R.getElementID((SVG.id + '-' + gradient).replace(/[()\s%:,\xb0#]/g, '_')),
                fx = 0.5,
                fy = 0.5,
                r,
                cx,
                cy,
                units,
                spread,
                o = element.node,
                s = o.style,
                el = R._g.doc.getElementById(id),
                vector;

            if (!el) {
                gradient = Str(gradient).replace(R._radial_gradient, function (all, opts) {
                    type = 'radial';
                    opts = opts ? opts.split(',') : [];
                    units = opts[5];
                    spread = opts[6];

                    var _fx = opts[0],
                        _fy = opts[1],
                        _r = opts[2],
                        _cx = opts[3],
                        _cy = opts[4],
                        shifted = _fx && _fy,
                        dir,
                        sqx;

                    if (_r) {
                        r = /%/.test(_r) ? _r : toFloat(_r);
                    }

                    if (units === gradientUnitNames.userSpaceOnUse) {
                        if (shifted) {
                            fx = _fx;
                            fy = _fy;
                        }
                        if (_cx && _cy) {
                            cx = _cx;
                            cy = _cy;
                            if (!shifted) {
                                fx = cx;
                                fy = cy;
                            }
                        }
                        return E;
                    }

                    if (shifted) {
                        fx = toFloat(_fx);
                        fy = toFloat(_fy);
                        dir = (fy > 0.5) * 2 - 1;
                        (sqx = pow(fx - 0.5, 2)) + pow(fy - 0.5, 2) > 0.25 && sqx < 0.25 && (fy = sqrt(0.25 - sqx) * dir + 0.5) && fy !== 0.5 && (fy = fy.toFixed(5) - 1e-5 * dir);
                    }
                    if (_cx && _cy) {
                        cx = toFloat(_cx);
                        cy = toFloat(_cy);
                        dir = (cy > 0.5) * 2 - 1;

                        (sqx = pow(cx - 0.5, 2)) + pow(cy - 0.5, 2) > 0.25 && sqx < 0.25 && (cy = sqrt(0.25 - sqx) * dir + 0.5) && cy !== 0.5 && (cy = cy.toFixed(5) - 1e-5 * dir);

                        if (!shifted) {
                            fx = cx;
                            fy = cy;
                        }
                    }

                    return E;
                });
                gradient = gradient.split(/\s*-\s*/);
                if (type === 'linear') {
                    var angle = gradient.shift(),
                        specs = angle.match(/\((.*)\)/),
                        max;

                    specs = specs && specs[1] && specs[1].split(/\s*,\s*/);
                    angle = -toFloat(angle);
                    if (isNaN(angle)) {
                        return null;
                    }
                    if (specs && specs.length) {
                        if (specs[0] in gradientUnitNames) {
                            units = specs.shift();
                            specs[0] in gradientSpreadNames && (spread = specs.shift());
                        } else {
                            specs[4] && (units = specs[4]);
                            specs[5] && (spread = specs[5]);
                        }

                        /** @todo apply angle rotation and validation */
                        vector = [specs[0] || '0%', specs[1] || '0%', specs[2] || '100%', specs[3] || '0%'];
                    } else {
                        vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))];
                        max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
                        vector[2] *= max;
                        vector[3] *= max;
                        if (vector[2] < 0) {
                            vector[0] = -vector[2];
                            vector[2] = 0;
                        }
                        if (vector[3] < 0) {
                            vector[1] = -vector[3];
                            vector[3] = 0;
                        }
                    }
                }
                var dots = R._parseDots(gradient);
                if (!dots) {
                    return null;
                }

                el = $(type + 'Gradient', {
                    id: id
                });
                el.refCount = 0;
                units in gradientUnitNames && el.setAttribute('gradientUnits', Str(units));
                spread in gradientSpreadNames && el.setAttribute('spreadMethod', Str(spread));
                if (type === 'radial') {
                    r !== undefined && el.setAttribute('r', Str(r));

                    if (cx !== undefined && cy !== undefined) {
                        el.setAttribute('cx', Str(cx));
                        el.setAttribute('cy', Str(cy));
                    }
                    el.setAttribute('fx', Str(fx));
                    el.setAttribute('fy', Str(fy));
                } else {
                    $(el, {
                        x1: vector[0],
                        y1: vector[1],
                        x2: vector[2],
                        y2: vector[3]
                    });
                }

                for (var i = 0, ii = dots.length; i < ii; i++) {
                    el.appendChild($('stop', {
                        offset: dots[i].offset ? dots[i].offset : i ? '100%' : '0%',
                        'stop-color': dots[i].color || '#fff',
                        // add stop opacity information
                        'stop-opacity': dots[i].opacity === undefined ? 1 : dots[i].opacity
                    }));
                }
                SVG.defs.appendChild(el);
            }
            updateGradientReference(element, el, attr);
            $(o, (_$ = {}, _$[attr] = "url('" + R._url + '#' + id + "')", _$[attr + '-opacity'] = 1, _$));
            s.fill = E;
            return 1;
        },
            updatePosition = function updatePosition(o) {
            var bbox = o.getBBox(1);
            $(o.pattern, {
                patternTransform: o.matrix.invert() + ' translate(' + bbox.x + ',' + bbox.y + ')'
            });
        },
            addArrow = function addArrow(o, value, isEnd) {
            if (o.type == "path") {
                var values = Str(value).toLowerCase().split("-"),
                    p = o.paper,
                    se = isEnd ? "end" : "start",
                    node = o.node,
                    attrs = o.attrs,
                    stroke = attrs["stroke-width"],
                    i = values.length,
                    type = "classic",
                    from,
                    to,
                    dx,
                    refX,
                    attr,
                    w = 3,
                    h = 3,
                    t = 5;
                while (i--) {
                    switch (values[i]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            type = values[i];
                            break;
                        case "wide":
                            h = 5;
                            break;
                        case "narrow":
                            h = 2;
                            break;
                        case "long":
                            w = 5;
                            break;
                        case "short":
                            w = 2;
                            break;
                    }
                }
                if (type == "open") {
                    w += 2;
                    h += 2;
                    t += 2;
                    dx = 1;
                    refX = isEnd ? 4 : 1;
                    attr = {
                        fill: "none",
                        stroke: attrs.stroke
                    };
                } else {
                    refX = dx = w / 2;
                    attr = {
                        fill: attrs.stroke,
                        stroke: "none"
                    };
                }
                if (o._.arrows) {
                    if (isEnd) {
                        o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
                        o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
                    } else {
                        o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
                        o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
                    }
                } else {
                    o._.arrows = {};
                }
                if (type != "none") {
                    var pathId = "raphael-marker-" + type,
                        markerId = "raphael-marker-" + se + type + w + h + "-obj" + o.id;
                    if (!R._g.doc.getElementById(pathId)) {
                        p.defs.appendChild($($("path"), {
                            "stroke-linecap": "round",
                            d: markers[type],
                            id: pathId
                        }));
                        markerCounter[pathId] = 1;
                    } else {
                        markerCounter[pathId]++;
                    }
                    var marker = R._g.doc.getElementById(markerId),
                        use;
                    if (!marker) {
                        marker = $($("marker"), {
                            id: markerId,
                            markerHeight: h,
                            markerWidth: w,
                            orient: "auto",
                            refX: refX,
                            refY: h / 2
                        });
                        use = $($("use"), {
                            "xlink:href": "#" + pathId,
                            transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
                            "stroke-width": (1 / ((w / t + h / t) / 2)).toFixed(4)
                        });
                        marker.appendChild(use);
                        p.defs.appendChild(marker);
                        markerCounter[markerId] = 1;
                    } else {
                        markerCounter[markerId]++;
                        use = marker.getElementsByTagName("use")[0];
                    }
                    $(use, attr);
                    var delta = dx * (type != "diamond" && type != "oval");
                    if (isEnd) {
                        from = o._.arrows.startdx * stroke || 0;
                        to = R.getTotalLength(attrs.path) - delta * stroke;
                    } else {
                        from = delta * stroke;
                        to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                    }
                    attr = {};
                    attr["marker-" + se] = "url('" + R._url + "#" + markerId + "')";
                    if (to || from) {
                        attr.d = R.getSubpath(attrs.path, from, to);
                    }
                    $(node, attr);
                    o._.arrows[se + "Path"] = pathId;
                    o._.arrows[se + "Marker"] = markerId;
                    o._.arrows[se + "dx"] = delta;
                    o._.arrows[se + "Type"] = type;
                    o._.arrows[se + "String"] = value;
                } else {
                    if (isEnd) {
                        from = o._.arrows.startdx * stroke || 0;
                        to = R.getTotalLength(attrs.path) - from;
                    } else {
                        from = 0;
                        to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
                    }
                    o._.arrows[se + "Path"] && $(node, {
                        d: R.getSubpath(attrs.path, from, to)
                    });
                    delete o._.arrows[se + "Path"];
                    delete o._.arrows[se + "Marker"];
                    delete o._.arrows[se + "dx"];
                    delete o._.arrows[se + "Type"];
                    delete o._.arrows[se + "String"];
                }
                for (attr in markerCounter) {
                    if (markerCounter[has](attr) && !markerCounter[attr]) {
                        var item = R._g.doc.getElementById(attr);
                        item && item.parentNode.removeChild(item);
                    }
                }
            }
        },
            dasharray = {
            // In Firefox 37.0.1 the value of "stroke-dasharray" attribute `0` make the stroke/border invisible.
            // The actual issue is setting `none` as the value of `stroke-dasharray` attribute
            // redraphael internally changes the "none" value to "0", thus the stroke/border becomes invisible
            // To fix this issue now instead of setting the value as `0` for `stroke-dasharray` attribute
            // now using `none` string as none is a w3c standard value for stroke-dasharray
            '': [noneStr],
            'none': [noneStr],
            '-': [3, 1],
            '.': [1, 1],
            '-.': [3, 1, 1, 1],
            '-..': [3, 1, 1, 1, 1, 1],
            '. ': [1, 3],
            '- ': [4, 3],
            '--': [8, 3],
            '- .': [4, 3, 1, 3],
            '--.': [8, 3, 1, 3],
            '--..': [8, 3, 1, 3, 1, 3]
        },
            addDashes = function addDashes(o, value, params) {
            if (value !== undefined) {
                var predefValue = dasharray[value.toLowerCase && value.toLowerCase()],
                    calculatedValues,
                    width,
                    butt,
                    i,
                    widthFactor;

                value = predefValue || [].concat(value);
                if (R.is(value, arrayStr)) {
                    width = params['stroke-width'] || o.attrs['stroke-width'] || 1;
                    butt = {
                        round: width,
                        square: width,
                        butt: 0
                    }[params['stroke-linecap'] || o.attrs['stroke-linecap']] || 0;
                    i = value.length;
                    widthFactor = predefValue ? width : 1;

                    if (value[0] === noneStr) {
                        calculatedValues = value;
                    } else {
                        calculatedValues = [];
                        while (i--) {
                            calculatedValues[i] = value[i] * widthFactor + (i % 2 ? 1 : -1) * butt;
                            calculatedValues[i] <= 0 && (calculatedValues[i] = 0.01 + (width <= 1 ? butt : 0));
                            if (isNaN(calculatedValues[i])) {
                                calculatedValues[i] = 0;
                            }
                        }
                    }
                    return {
                        'stroke-dasharray': calculatedValues.join(',')
                    };
                }
            }
        },
            setFillAndStroke = R._setFillAndStroke = function (o, params) {
            if (!o.paper.canvas) {
                return;
            }
            var node = o.node,
                attrs = o.attrs,
                paper = o.paper,

            // s = node.style,
            // vis = s.visibility,
            el,
                att,
                finalAttr = {},
                finalS = {},
                ignoreAttrs = { 'clip-rect': true },
                value,
                pathClip,
                urlArr,
                rect;

            // s.visibility = hiddenStr;
            if (o.type === imageStr) {
                (0, _raphael.loadRefImage)(o, params);
            }
            for (att in params) {
                if (att in R._availableAttrs) {
                    value = params[att];
                    if (value === E && att in attrs) {
                        delete attrs[att];
                        node.removeAttribute(att === 'src' ? 'href' : att);
                    } else if (value === null && !ignoreAttrs[att]) {
                        // when an attribute is provided as null, it will be removed from the element
                        if (att in attrs) {
                            delete attrs[att];
                            node.removeAttribute(att === 'src' ? 'href' : att);
                        }
                    } else {
                        attrs[att] = value;
                        switch (att) {
                            case 'blur':
                                o.blur(value);
                                break;
                            case 'href':
                            case 'title':
                            case 'target':
                                var pn = node.parentNode;
                                if (pn.tagName.toLowerCase() !== 'a') {
                                    if (value === E) {
                                        break;
                                    }
                                    var hl = $('a');
                                    hl.raphael = true;
                                    hl.raphaelid = node.raphaelid;
                                    pn.insertBefore(hl, node);
                                    hl.appendChild(node);
                                    pn = hl;
                                }
                                if (att === 'target') {
                                    pn.setAttributeNS(xlink, 'show', value === 'blank' ? 'new' : value);
                                } else {
                                    pn.setAttributeNS(xlink, att, value);
                                }
                                node.titleNode = pn;
                                break;
                            case 'cursor':
                                finalS.cursor = value;
                                break;
                            case 'transform':
                                o.transform(value);
                                break;
                            case 'rotation':
                                if (R.is(value, arrayStr)) {
                                    o.rotate.apply(o, value);
                                } else {
                                    o.rotate(value);
                                }
                                break;
                            case 'arrow-start':
                                addArrow(o, value);
                                break;
                            case 'arrow-end':
                                addArrow(o, value, 1);
                                break;
                            case 'clip-path':
                                pathClip = true;
                            // falls through
                            case 'clip-rect':
                                rect = !pathClip && Str(value).split(separator);
                                o._.clipispath = !!pathClip;
                                if (pathClip || rect.length === 4) {
                                    o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
                                    var rc = $(pathClip ? 'path' : 'rect');
                                    el = $('clipPath');
                                    el.id = R.getElementID(R.createUUID());
                                    $(rc, pathClip ? {
                                        d: value ? attrs['clip-path'] = R._pathToAbsolute(value) : R._availableAttrs.path,
                                        fill: noneStr
                                    } : {
                                        x: rect[0],
                                        y: rect[1],
                                        width: rect[2],
                                        height: rect[3],
                                        transform: o.matrix.invert()
                                    });
                                    el.appendChild(rc);
                                    paper.defs.appendChild(el);
                                    finalAttr['clip-path'] = "url('" + R._url + '#' + el.id + "')";
                                    o.clip = rc;
                                }
                                if (!value) {
                                    var path = node.getAttribute('clip-path');
                                    if (path) {
                                        var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));
                                        clip && clip.parentNode.removeChild(clip);
                                        finalAttr['clip-path'] = E;
                                        document.documentMode === 11 && node.removeAttribute('clip-path');
                                        delete o.clip;
                                    }
                                }
                                break;
                            case 'path':
                                if (o.type === 'path') {
                                    finalAttr.d = value ? attrs.path = R._stopabsolutePath ? R.sanitizePath(value) : R._pathToAbsolute(value) : R._availableAttrs.path;
                                    o._.dirty = 1;
                                    if (o._.arrows) {
                                        'startString' in o._.arrows && addArrow(o, o._.arrows.startString);
                                        'endString' in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                    }
                                }
                                break;
                            case 'width':
                                finalAttr[att] = value;
                                o._.dirty = 1;
                                if (attrs.fx) {
                                    att = 'x';
                                    value = attrs.x;
                                } else {
                                    break;
                                }
                            // falls through
                            case 'x':
                                if (attrs.fx) {
                                    value = -attrs.x - (attrs.width || 0);
                                }
                            // falls through
                            case 'rx':
                                if (att === 'rx' && o.type === 'rect') {
                                    break;
                                }
                            // falls through
                            case 'cx':
                                finalAttr[att] = value;
                                o.pattern && updatePosition(o);
                                o._.dirty = 1;
                                break;
                            case 'height':
                                finalAttr[att] = value;
                                o._.dirty = 1;
                                if (attrs.fy) {
                                    att = 'y';
                                    value = attrs.y;
                                } else {
                                    break;
                                }
                            // falls through
                            case 'y':
                                // For text don't apply y attribute as it will be applied during tuneText
                                if (o.type === textStr) {
                                    break;
                                }
                                if (attrs.fy) {
                                    value = -attrs.y - (attrs.height || 0);
                                }
                            // falls through
                            case 'ry':
                                if (att === 'ry' && o.type === 'rect') {
                                    break;
                                }
                            // falls through
                            case 'cy':
                                finalAttr[att] = value;
                                o.pattern && updatePosition(o);
                                o._.dirty = 1;
                                break;
                            case 'r':
                                if (o.type === 'rect') {
                                    finalAttr.rx = finalAttr.ry = value;
                                } else {
                                    finalAttr[att] = value;
                                }
                                o._.dirty = 1;
                                break;
                            case 'src':
                                if (o.type === imageStr) {
                                    node.setAttributeNS(xlink, 'href', value);
                                }
                                break;
                            case 'stroke-width':
                                if (o._.sx !== 1 || o._.sy !== 1) {
                                    value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
                                }
                                if (paper._vbSize) {
                                    value *= paper._vbSize;
                                }
                                if (zeroStrokeFix && value === 0) {
                                    value = 0.000001;
                                }
                                finalAttr[att] = value;
                                // if this time we have no stroke-dasharray param but last time we have then update it according to new stroke-width
                                // Do not apply stroke-dasharray if the current stroke-dasharray is ''
                                if (!params['stroke-dasharray'] && attrs['stroke-dasharray'] && params['stroke-dasharray'] !== '') {
                                    quickExtend(finalAttr, addDashes(o, attrs['stroke-dasharray'], params));
                                }
                                if (o._.arrows) {
                                    'startString' in o._.arrows && R.addArrow && R.addArrow(o, o._.arrows.startString);
                                    'endString' in o._.arrows && R.addArrow && R.addArrow(o, o._.arrows.endString, 1);
                                }
                                break;
                            case 'stroke-dasharray':
                                quickExtend(finalAttr, addDashes(o, value, params));
                                break;
                            case 'fill':
                                var isURL = R._ISURL.test(value);
                                if (isURL) {
                                    urlArr = value.split(R._ISURL);
                                    el = $('pattern');
                                    var ig = $(imageStr);
                                    el.id = R.getElementID(R.createUUID());
                                    $(el, {
                                        x: 0,
                                        y: 0,
                                        patternUnits: 'userSpaceOnUse',
                                        height: 1,
                                        width: 1
                                    });
                                    $(ig, {
                                        x: 0,
                                        y: 0,
                                        'xlink:href': urlArr[1]
                                    });
                                    el.appendChild(ig);
                                    preLoad(el, ig, urlArr, paper);
                                    paper.defs.appendChild(el);
                                    finalAttr.fill = "url('" + R._url + urlArr[1] + "')";

                                    o.pattern = el;
                                    o.pattern && updatePosition(o);
                                    break;
                                }
                                var clr = R.getRGB(value);
                                if (!clr.error) {
                                    delete params.gradient;
                                    delete attrs.gradient;
                                    // !R.is(attrs.opacity, "undefined") &&
                                    //     R.is(params.opacity, "undefined") &&
                                    //     finalAttr[opacity] = attrs.opacity;
                                    !R.is(attrs['fill-opacity'], 'undefined') && R.is(params['fill-opacity'], 'undefined') && (finalAttr['fill-opacity'] = attrs['fill-opacity']);
                                    o.gradient && updateGradientReference(o);
                                } else if ((o.type === 'circle' || o.type === 'ellipse' || Str(value).charAt() !== 'r') && addGradient(o, value)) {
                                    // The reason for this block of code is not known, hence it is commented out as it is causeing issues in
                                    // IE8 browser for gradient color
                                    /* if ("opacity" in attrs || "fill-opacity" in attrs) {
                                        var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                                        if (gradient) {
                                            var stops = gradient.getElementsByTagName("stop");
                                            $(stops[stops.length - 1], {
                                                "stop-opacity": ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs["fill-opacity"] : 1)
                                            });
                                        }
                                    } */
                                    attrs.gradient = value;
                                    // attrs.fill = "none";
                                    break;
                                }
                                if (clr[has]('opacity')) {
                                    finalAttr['fill-opacity'] = clr.opacity > 1 ? clr.opacity / 100 : clr.opacity;
                                    o._.fillOpacityDirty = true;
                                } else if (o._.fillOpacityDirty && R.is(attrs['fill-opacity'], 'undefined') && R.is(params['fill-opacity'], 'undefined')) {
                                    node.removeAttribute('fill-opacity');
                                    delete o._.fillOpacityDirty;
                                }
                            // falls through
                            case 'stroke':
                                clr = R.getRGB(value);
                                if (clr.error) {
                                    if (o.type === 'circle' || o.type === 'ellipse' || Str(value).charAt() !== 'r') {
                                        addGradient(o, value, 'stroke');
                                    }
                                } else {
                                    finalAttr[att] = clr.hex;
                                    updateGradientReference(o, UNDEF, att);
                                }
                                if (att === 'stroke') {
                                    // remove stroke opacity when stroke is set to none
                                    if (clr[has]('opacity')) {
                                        finalAttr['stroke-opacity'] = clr.opacity > 1 ? clr.opacity / 100 : clr.opacity;
                                        o._.strokeOpacityDirty = true;
                                    } else if (o._.strokeOpacityDirty && R.is(attrs['stroke-opacity'], 'undefined') && R.is(params['stroke-opacity'], 'undefined')) {
                                        node.removeAttribute('stroke-opacity');
                                        delete o._.strokeOpacityDirty;
                                    }
                                    if (o._.arrows) {
                                        'startString' in o._.arrows && addArrow(o, o._.arrows.startString);
                                        'endString' in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                                    }
                                }
                                break;
                            case 'gradient':
                                (o.type === 'circle' || o.type === 'ellipse' || Str(value).charAt() !== 'r') && addGradient(o, value);
                                break;
                            case 'visibility':
                                value === hiddenStr ? o.hide() : o.show();
                                break;
                            case 'opacity':
                                // if (attrs.gradient && !attrs[has]("stroke-opacity")) {
                                //     finalAttr["stroke-opacity"] = value > 1 ? value / 100 : value;
                                // }
                                value = value > 1 ? value / 100 : value;
                                finalAttr.opacity = value;
                                break;
                            // fall
                            case 'fill-opacity':
                                // if (attrs.gradient) {
                                //     gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\([\'\"]#|[\'\"]\)$/g, E));
                                //     if (gradient) {
                                //         stops = gradient.getElementsByTagName("stop");
                                //         l = stops.length;
                                //         for (i = 0; i < l; i += 1) {
                                //           $(stops[i], {
                                //               "stop-opacity": value
                                //           });
                                //         }
                                //     }
                                //     break;
                                // }
                                value = value > 1 ? value / 100 : value;
                                finalAttr['fill-opacity'] = value;
                                break;
                            case 'shape-rendering':
                                o.attrs[att] = value = shapeRenderingAttrs[value] || value || 'auto';
                                finalAttr[att] = value;
                                node.style.shapeRendering = value;
                                break;

                            case 'line-height': // do not apply
                            case 'vertical-align':
                                // do not apply
                                break;
                            default:
                                att === fontSizeStr && (value = toInt(value, 10) + 'px');
                                o._.dirty = 1;
                                finalAttr[att] = value;
                                if (_raphael.dashedAttr2CSSMap[att]) {
                                    finalS[_raphael.dashedAttr2CSSMap[att]] = value;
                                }
                                break;
                        }
                    }
                } else if (att in allPossibleAttrs) {
                    // ensuring any kind of attributes can be applied to a dom
                    if (value === E && att in attrs) {
                        delete attrs[att];
                        node.removeAttribute(att);
                    } else {
                        attrs[att] = value;
                        finalS[att] = value;
                    }
                }
            }
            // Finally apply the styles
            for (att in finalS) {
                node.style[att] = finalS[att];
            }
            // Finally apply the attributes
            for (att in finalAttr) {
                node.setAttribute(att, finalAttr[att]);
            }
            o.type === textStr && !params[notToTuneStr] && tuneText(o, params);
            // s.visibility = vis;
        },

        /*
        * Keeps the follower element in sync with the leaders.
        * First and second arguments represents the context(element) and the
        name of the callBack function respectively.
        * The callBack is invoked for indivual follower Element with the rest of
        arguments.
        */
        updateFollowers = R._updateFollowers = function () {
            var i,
                ii,
                followerElem,
                args = (0, _raphael.getArrayCopy)(arguments),
                o = arrayShift.call(args),
                fnName = arrayShift.call(args);
            for (i = 0, ii = o.followers.length; i < ii; i++) {
                followerElem = o.followers[i].el;
                followerElem[fnName].apply(followerElem, args);
            }
        },
            leading = 1.2,
            tuneText = function tuneText(el, params) {
            // If there is no effective change in new attributes then ignore
            if (el.type !== textStr || !(params[has](textStr) || params[has]('font') || params[has](fontSizeStr) || params[has]('x') || params[has]('y') || params[has](lineHeightStr) || params[has](vAlignStr) || params[has](textPathStr))) {
                return;
            }
            var a = el.attrs,
                defs = el.paper.defs,
                group = el.parent,
                node = el.node,
                fontSize,
                oldAttr = el._oldAttr = el._oldAttr || { baseLineDiff: 8, valign: -0.5 },
                // Store all the attributes that are getting applied. This will help us to apply deferential information only.
            lineHeight = toFloat(params[lineHeightStr] || a[lineHeightStr]),
                direction = params.direction || a.direction || group && group.attrs && group.attrs.direction || oldAttr.direction || initialStr,
                valign,
                updateNode = false,
                tspanAttr,
                updateTspan = false,
                i,
                l,
                ii,

            // For rtl text in IE there is a blank tspan to fix RTL rendering issues in IE.
            // So there will twice the amount of tSpan
            j = !isIE && direction === rtlStr ? 2 : 1,
                texts,
                tempIESpan,
                tspan,
                updateAlignment = false,
                tspans,
                text,
                textChanged = false,

            // @todo: Comment the below lines of code in order to fix RED-8282
            // removeAllChild = !!(!isIE && oldAttr.direction && direction !== oldAttr.direction);
            removeAllChild,

            // Check whether a string has &nbsp; or similar non-breaking space
            hasnbsp = function hasnbsp(text) {
                return text && nbspRegex.test(text);
            },

            /**
             * replaces multiple spaces and different codes of nbsp
             * with single white space so that it simulates the behaviour of dom
             * rendering for text
             * @param {string} text
             * @returns {string} processed text
             */
            spacify = function spacify(text) {
                return text.replace(/\s+/g, ' ').trim().replace(nbspRegex, ' ');
            };

            if (params[has](textPathStr)) {
                var rUUID = R.getElementID(R.createUUID()),
                    textPathParams = params[textPathStr];

                var textPath,
                    tSpan,
                    txtNode,
                    dy = 0,
                    textPathProps = {};

                for (var key in textPathParams) {
                    if (textPathParams.hasOwnProperty(key)) {
                        if (key === 'path' && !('href' in textPathParams)) {
                            if (oldAttr.textPathStr !== textPathParams[key]) {
                                if (el.textPathDef) {
                                    el.textPathDef.setAttribute('d', textPathParams[key] || E);

                                    textPathProps.href = '#' + el.textPathDef.getAttribute('id');
                                    textPathProps['xlink:href'] = '#' + el.textPathDef.getAttribute('id');
                                } else {
                                    el.textPathDef = defs.appendChild($('path', {
                                        id: rUUID,
                                        d: textPathParams[key] || E
                                    }));

                                    textPathProps.href = '#' + rUUID;
                                    textPathProps['xlink:href'] = '#' + rUUID;
                                }

                                oldAttr.textPathStr = textPathParams[key];
                            } else {
                                textPathProps.href = '#' + el.textPathDef.getAttribute('id');
                                textPathProps['xlink:href'] = '#' + el.textPathDef.getAttribute('id');
                            }
                        } else {
                            textPathProps[key] = textPathParams[key];
                        }
                    }
                }

                if (params[has](textStr)) {
                    txtNode = R._g.doc.createTextNode(params[textStr] || E);
                    oldAttr.pathText = a.text = params[textStr] || E;
                } else {
                    txtNode = R._g.doc.createTextNode(oldAttr.pathText || oldAttr.text || E);
                    oldAttr.pathText = oldAttr.pathText || oldAttr.text || E;
                    delete oldAttr.text;
                }

                if (params[has](vAlignStr)) {
                    if (params[vAlignStr] === middleStr) {
                        dy = 0.3;
                        oldAttr.valign = -0.5;
                    } else if (params[vAlignStr] === bottomStr) {
                        dy = 0.7;
                        oldAttr.valign = -1;
                    } else if (params[vAlignStr] === topStr) {
                        oldAttr.valign = 0;
                    }
                    tSpan = $('tspan', { dy: dy + 'em' });
                    tSpan.appendChild(txtNode);

                    oldAttr.tSpan = tSpan;
                } else {
                    if (oldAttr.tSpan && (oldAttr.tSpan.textContent === params[textStr] || _typeof(params[textStr]) !== typeStringSTR)) {
                        tSpan = oldAttr.tSpan;
                    } else {
                        if (oldAttr.valign === -0.5) {
                            dy = 0.3;
                        } else if (oldAttr.valign === -1) {
                            dy = 0.7;
                        } else {
                            dy = 0;
                        }

                        tSpan = $('tspan', { dy: dy + 'em' });
                        tSpan.appendChild(txtNode);

                        oldAttr.tSpan = tSpan;
                    }
                }

                // IE 11 does not support x and y with textPath
                // hence removing x and y
                delete oldAttr.x;
                delete oldAttr.y;
                node.removeAttribute('x');
                node.removeAttribute('y');

                textPath = $('textPath', textPathProps);
                textPath.appendChild(tSpan || txtNode);

                while (node.firstChild) {
                    node.removeChild(node.firstChild);
                }
                node.appendChild(textPath);
            } else {
                oldAttr.direction = direction;

                // cleanup old attr remnants from rendering a text path
                if (el.textPathDef && defs) {
                    el.textPathDef.parentNode.removeChild(el.textPathDef);
                    delete el.textPathDef;
                }

                delete oldAttr.txtNode;
                delete oldAttr.tSpan;
                delete oldAttr.textPathStr;

                // If line height is not valid (0, NaN, undefuned), then derive it from fontSize
                if (!lineHeight) {
                    fontSize = params.fontSize || params[fontSizeStr] || a[fontSizeStr] || group && group.attrs && group.attrs.fontSize;
                    fontSize = fontSize ? fontSize.toString().replace(pxStr, E) : 10;
                    lineHeight = fontSize * leading;
                }
                // If the containing text got changed
                if (params[has](textStr) || oldAttr.pathText) {
                    // If the text is an arra then join with <br>
                    if (R.is(params.text, arrayStr)) {
                        text = params.text.join(brStr);
                    } else if (params.text == null) {
                        text = oldAttr.pathText;
                    } else {
                        text = params.text;
                    }

                    delete oldAttr.pathText;

                    // If it is a new text applied
                    if (text !== oldAttr.text) {
                        textChanged = true;
                        // Convert all the &lt; and &gt; to < and > and if there is any <br/> tag in between &lt; and &gt;
                        // then converting them into <<br/> and ><br/> respectively.
                        if (text && ltgtbrRegex.test(text)) {
                            text = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;|&#034;/g, '"').replace(/&#039;/g, '\'').replace(/&<br\/>lt;|&l<br\/>t;|&lt<br\/>;/g, '<<br/>').replace(/&<br\/>gt;|&g<br\/>t;|&gt<br\/>;/g, '><br/>');
                        }
                        oldAttr.text = a.text = text;
                        if (textBreakRegx.test(text)) {
                            // if multiline text
                            if (oldAttr.noTSpan) {
                                // previously it was single line
                                oldAttr.noTSpan = !(removeAllChild = true);
                            }
                            texts = Str(text).split(textBreakRegx);
                            l = texts.length;
                        } else {
                            // single line
                            // If it is a single line text then always remove the children
                            removeAllChild = true;
                            oldAttr.noTSpan = true; // Always remove old text node
                            l = 1;
                        }
                        // if no if lines are changed
                        if (oldAttr.lineCount !== l) {
                            oldAttr.lineCount = l;
                            updateAlignment = true;
                        }
                    }
                }

                if (lineHeight !== oldAttr.lineHeight) {
                    // lineHeight change
                    oldAttr.lineHeight = lineHeight;
                    oldAttr.baseLineDiff = lineHeight * 0.75; // Approximate calculation
                    updateAlignment = true;
                }

                // If the text was RTL earlier and now changed or vice versa
                if (removeAllChild) {
                    // remove all children
                    while (node.firstChild) {
                        node.removeChild(node.firstChild);
                    }
                }

                // ** If multiline text mode
                if (oldAttr.lineCount > 1) {
                    // Remove white-space preserve property from parent text node
                    if (node.style.whiteSpace === PRESERVESTRING) {
                        node.style.whiteSpace = BLANKSTRING;
                    }
                    tspanAttr = {};
                    if (!oldAttr.tspanAttr) {
                        oldAttr.tspanAttr = {};
                        oldAttr.tspan0Attr = {};
                    }
                    // If the dy needs to be changed
                    if (oldAttr.tspanAttr.dy !== oldAttr.lineHeight) {
                        oldAttr.tspanAttr.dy = tspanAttr.dy = oldAttr.lineHeight;
                        updateTspan = true;
                    }

                    // if x is getting changed
                    if (params[has]('x') && oldAttr.tspanAttr.x !== params.x) {
                        // X change
                        // If the x is getting changed, then the tspan need to be updated
                        // Note: we don't need to update the node as it is already updated during setFillAndStroke
                        oldAttr.tspan0Attr.x = oldAttr.tspanAttr.x = tspanAttr.x = a.x;
                        updateTspan = true;
                    }

                    // Note for the first tspan (i === 0), we will add only the x attribute. No dy
                    // If the containing text got changed
                    if (textChanged) {
                        tspans = node.getElementsByTagName(tSpanStr);
                        for (i = 0; i < l; i++) {
                            tspan = tspans[i * j];
                            if (tspan) {
                                // If already there is a tspan then remove the text
                                tspan.innerHTML = E;
                                if (isIE) {
                                    // For IE, setting the innerHTML of tspan to blank string doesnot remove
                                    // the child nodes. Child nodes should be removed explicitly.
                                    while (tspan.firstChild) {
                                        tspan.removeChild(tspan.firstChild);
                                    }
                                }
                                if (updateTspan) {
                                    // If update required, update here
                                    $(tspan, i ? tspanAttr : oldAttr.tspan0Attr);
                                }
                            } else {
                                // Else create a new span
                                tspan = $(tSpanStr, i ? oldAttr.tspanAttr : oldAttr.tspan0Attr);
                                node.appendChild(tspan);
                                // Special fix for RTL texts in IE-SVG browsers
                                if (!isIE && direction === rtlStr) {
                                    tempIESpan = $(tSpanStr, IESplTspanAttr);
                                    tempIESpan.appendChild(R._g.doc.createTextNode('i'));
                                    node.appendChild(tempIESpan);
                                }
                            }
                            // If it is a blank line, preserve it
                            if (!texts[i]) {
                                tspan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
                                texts[i] = S;
                            }

                            // If text has &nbsp; then change the white-space style of the node to 'preserve' for disabling space collapse
                            if (hasnbsp(texts[i])) {
                                texts[i] = spacify(texts[i]);
                                tspan.style.whiteSpace = PRESERVESTRING;
                            } else if (tspan.style.whiteSpace === PRESERVESTRING) {
                                tspan.style.whiteSpace = BLANKSTRING;
                            }
                            // create and append the text node
                            tspan.appendChild(R._g.doc.createTextNode(texts[i]));
                        }

                        ii = l * j;
                        // If there are already more tspan than required, then remove the extra tspans
                        if (tspans.length > ii) {
                            for (i = tspans.length - 1; i >= ii; i -= 1) {
                                node.removeChild(tspans[i]);
                            }
                        }
                    } else if (updateTspan) {
                        // else if the tspans needs to be updated
                        tspans = node.getElementsByTagName(tSpanStr); // @note: don't count on tspan, rather store the previous count
                        ii = tspans.length;
                        for (i = 0; i < ii; i += j) {
                            $(tspans[i], i ? tspanAttr : oldAttr.tspan0Attr);
                        }
                    }
                } else if (textChanged) {
                    // ** single line mode
                    // If text has &nbsp; then change the white-space style of the node to 'preserve' for disabling space collapse
                    if (hasnbsp(text)) {
                        text = spacify(text);
                        node.style.whiteSpace = PRESERVESTRING;
                    } else if (node.style.whiteSpace === PRESERVESTRING) {
                        node.style.whiteSpace = BLANKSTRING;
                    }
                    // create and append the text node
                    node.appendChild(R._g.doc.createTextNode(text));
                }

                if (params[vAlignStr]) {
                    // vAlign change
                    valign = vAlignMultiplier[a[vAlignStr]] || 0; // default v-alignment is middle but for wrong alignment value it will be top.
                    if (valign !== oldAttr.valign) {
                        oldAttr.valign = valign;
                        updateAlignment = true;
                    }
                }

                // Update the dy of the first tspan according to the v-alignment
                if (updateAlignment) {
                    oldAttr.shift = oldAttr.baseLineDiff + oldAttr.lineCount * oldAttr.lineHeight * oldAttr.valign;
                    updateNode = true;
                }
                // if y is getting changed
                if ((params.y || params.y === 0) && oldAttr.y !== params.y) {
                    // Y change
                    oldAttr.y = a.y;
                    updateNode = true;
                }

                // Update the node's attribute
                if (updateNode && (oldAttr.y || oldAttr.y === 0) && (oldAttr.shift || oldAttr.shift === 0)) {
                    $(node, { y: Math.round(oldAttr.y + oldAttr.shift) });
                }
            }
        },
            Element = function Element(node, svg, group /*, dontAppend */) {
            var o = this,
                parent = group || svg;

            /*! dontAppend && */parent.canvas && parent.canvas.appendChild(node);

            o.node = o[0] = node;
            node.raphael = true;
            node.raphaelid = o.id = R._oid++;

            o.matrix = R.matrix();
            o.realPath = null;

            o.attrs = o.attrs || {};
            o.followers = o.followers || [];

            o.paper = svg;
            o.ca = o.customAttributes = o.customAttributes || new svg._CustomAttributes();

            o._ = {
                transform: [],
                sx: 1,
                sy: 1,
                deg: 0,
                dx: 0,
                dy: 0,
                dirty: 1
            };

            o.parent = parent;
            !parent.bottom && (parent.bottom = o);

            o.prev = parent.top;
            parent.top && (parent.top.next = o);
            parent.top = o;
            o.next = null;
        },

        /*
         * Function to get the distance between two touches
        */
        getTouchDistance = function getTouchDistance(touch1, touch2, isY) {
            var select = isY ? 'pageY' : 'pageX';
            return Math.abs(touch2[select] - touch1[select]);
        },

        /**
         * Function to store the various event handlers
         */
        storeHandlers = R.storeHandlers = function (elem, handler, fn) {
            // Storing the handlers
            elem._actualListners || (elem._actualListners = []);
            elem._derivedListeners || (elem._derivedListeners = []);
            elem._actualListners.push(handler);
            elem._derivedListeners.push(fn);
        },

        /**
         * Function to remove various handlers
         */
        removeHandlers = function removeHandlers(elem, handler) {
            // Storing the handlers
            var index = elem._actualListners.indexOf(handler),
                derivedHandler;

            if (index !== -1) {
                derivedHandler = elem._derivedListeners[index];
                elem._actualListners.splice(index, 1);
                elem._derivedListeners.splice(index, 1);
            }
            return derivedHandler;
        },
            elproto = R.el;

        Element.prototype = elproto;
        elproto.constructor = Element;

        R._engine.getNode = function (el) {
            var node = el.node || el[0].node;
            return node.titleNode || node;
        };
        R._engine.getLastNode = function (el) {
            var node = el.node || el[el.length - 1].node;
            return node.titleNode || node;
        };

        elproto.rotate = function (deg, cx, cy) {
            var o = this,
                bbox;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'rotate', deg, cx, cy);
            deg = Str(deg).split(separator);
            if (deg.length - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                bbox = o.getBBox(1);
                cx = bbox.x + bbox.width / 2;
                cy = bbox.y + bbox.height / 2;
            }
            o.transform(o._.transform.concat([['r', deg, cx, cy]]));
            return o;
        };

        elproto.scale = function (sx, sy, cx, cy) {
            var o = this,
                bbox;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'scale', sx, sy, cx, cy);
            sx = Str(sx).split(separator);
            if (sx.length - 1) {
                sy = toFloat(sx[1]);
                cx = toFloat(sx[2]);
                cy = toFloat(sx[3]);
            }
            sx = toFloat(sx[0]);
            sy == null && (sy = sx);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                bbox = o.getBBox(1);
            }
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
            o.transform(o._.transform.concat([['s', sx, sy, cx, cy]]));
            return o;
        };

        elproto.translate = function (dx, dy) {
            var o = this;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'translate', dx, dy);
            dx = Str(dx).split(separator);
            if (dx.length - 1) {
                dy = toFloat(dx[1]);
            }
            dx = toFloat(dx[0]) || 0;
            dy = +dy || 0;
            o.transform(o._.transform.concat([['t', dx, dy]]));
            return o;
        };

        elproto.transform = function (tstr) {
            var o = this,
                _ = o._,
                sw;

            if (tstr == null) {
                return _.transform;
            }
            R._extractTransform(o, tstr);

            o.clip && !_.clipispath && $(o.clip, {
                transform: o.matrix.invert()
            });
            o.pattern && updatePosition(o);
            o.node && $(o.node, {
                transform: o.matrix
            });

            if (_.sx !== 1 || _.sy !== 1) {
                sw = o.attrs['stroke-width'];
                sw && o.attr({
                    'stroke-width': sw
                });
            }

            return o;
        };

        elproto.hide = function () {
            var o = this;
            updateFollowers(o, 'hide');
            !o.removed && o.paper.safari(o.node.style.display = noneStr);
            return o;
        };

        elproto.show = function () {
            var o = this;
            updateFollowers(o, 'show');
            !o.removed && o.paper.safari(o.node.style.display = E);
            return o;
        };

        elproto.remove = function () {
            if (this.removed || !this.parent.canvas) {
                return;
            }

            var o = this,
                node = R._engine.getNode(o),
                paper = o.paper,
                defs = paper.defs,
                i;

            paper.__set__ && paper.__set__.exclude(o);
            eve.unbind('raphael.*.*.' + o.id);

            if (o.gradient && defs) {
                updateGradientReference(o);
            }
            if (o['stroke-gradient'] && defs) {
                updateGradientReference(o, UNDEF, 'stroke');
            }
            if (o.textPathDef && defs) {
                o.textPathDef.parentNode.removeChild(o.textPathDef);
                delete o.textPathDef;
            }

            while (i = o.followers.pop()) {
                i.el.remove();
            }
            while (i = o.bottom) {
                i.remove();
            }

            if (o._drag) {
                o.undrag();
            }

            if (o.events) {
                while (i = o.events.pop()) {
                    i.unbind();
                }
            }

            o.parent.canvas.contains(node) && o.parent.canvas.removeChild(node);
            o.removeData();
            delete paper._elementsById[o.id]; // remove from lookup hash
            R._tear(o, o.parent);

            for (i in o) {
                o[i] = _typeof(o[i]) === fnStr ? R._removedFactory(i) : null;
            }

            o.removed = true;
        };

        elproto._getBBox = function () {
            var fn,
                o = this,
                node = o.node,
                bbox = {},
                a = o.attrs,
                align,
                hide,
                isText = o.type === textStr;
            if (isIE && isText) {
                fn = (0, _raphael.showRecursively)(o);
            } else {
                if (node.style.display === noneStr) {
                    o.show();
                    hide = true;
                }
            }

            try {
                bbox = node.getBBox();
                if (isText) {
                    // If bbox does not have x / y, which is possible in certain
                    // environments, we mathematically calculate these values by
                    // using x, y (adjusted using the values of text-anchor, and
                    // vertical-align attributes), of the element along with the
                    // width and height provided by the getBBox().
                    if (bbox.x === undefined) {
                        bbox.isCalculated = true;
                        align = a['text-anchor'];
                        bbox.x = (a.x || 0) - bbox.width * (align === 'start' ? 0 : align === middleStr ? 0.5 : 1);
                    }

                    if (bbox.y === undefined) {
                        bbox.isCalculated = true;
                        align = a[vAlignStr];
                        bbox.y = (a.y || 0) - bbox.height * (align === bottomStr ? 1 : align === middleStr ? 0.5 : 0);
                    }
                }
            } catch (e) {
                // Firefox 3.0.x plays badly here
            } finally {
                bbox = bbox || {};
            }
            isIE && isText ? fn && fn() : hide && o.hide();
            return bbox;
        };

        elproto.attr = function (name, value) {
            if (this.removed) {
                return this;
            }
            var elem = this,
                attrs = this.attrs,
                key,
                finalParam = {},
                i,
                ii,
                params,
                subkey,
                par,
                follower,
                invokedCa = elem._invokedCa || (elem._invokedCa = {}),
                ca,
                caObj = this.ca;
            // get all, return all applied attributes
            if (name == null) {
                var res = {};
                for (key in attrs) {
                    if (attrs[has](key)) {
                        res[key] = attrs[key];
                    }
                }
                res.gradient && res.fill === noneStr && (res.fill = res.gradient) && delete res.gradient;
                res.transform = this._.transform;
                res.visibility = this.node.style.display === noneStr ? hiddenStr : visibleStr;
                return res;
            } else {
                if (value == null) {
                    if (R.is(name, objectStr)) {
                        // Provided as an object
                        params = name;
                    } else if (R.is(name, typeStringSTR)) {
                        // get one, return the value of the given attribute
                        if (name === fillStr && attrs.fill === noneStr && attrs.gradient) {
                            return attrs.gradient;
                        }
                        if (name === transformStr) {
                            return this._.transform;
                        }
                        if (name === visibilityStr) {
                            return this.node.style.display === noneStr ? hiddenStr : visibleStr;
                        }

                        if (name in attrs) {
                            return attrs[name];
                        } else if (R.is(caObj[name], fnStr)) {
                            return caObj[name].def;
                        }
                        return R._availableAttrs[name];
                    }
                } else {
                    // key value provided seperately
                    params = {};
                    params[name] = value;
                }

                if (!R.stopPartialEventPropagation) {
                    for (key in params) {
                        eve('raphael.attr.' + key + '.' + this.id, this, params[key], key);
                    }
                }

                // For each param
                for (key in params) {
                    // check if that is a Custom attribute or not
                    ca = caObj[key];
                    if (ca && !invokedCa[key] && R.is(ca, fnStr)) {
                        invokedCa[key] = true; // prevent recursion
                        par = ca.apply(this, [].concat(params[key]));
                        invokedCa[key] = false;

                        // If the custom attribute create another set of attribute to be updated
                        // Then add them in the attribute list
                        for (subkey in par) {
                            finalParam[subkey] = par[subkey];
                        }
                        // Add the attribute in attrs
                        attrs[key] = params[key];
                    } else {
                        finalParam[key] = params[key];
                    }
                }

                setFillAndStroke(this, finalParam);

                for (i = 0, ii = this.followers.length; i < ii; i++) {
                    follower = this.followers[i];
                    follower.cb && !follower.cb.call(follower.el, finalParam, this) || follower.el.attr(finalParam);
                }

                return this;
            }
        };

        elproto.pinchstart = function (handler, context) {
            var elem = this,
                dummyEve = {},
                fn = function fn(e) {
                // Pinchstart is triggered only if 2 fingers are used.
                if (e.touches && e.touches.length === 2) {
                    var touch1 = e.touches[0],
                        touch2 = e.touches[1];
                    // Flag to block drag events
                    elem._blockDrag = true;
                    e && e.preventDefault();
                    R.makeSelectiveCopy(dummyEve, e);
                    dummyEve.data = {
                        finger0: touch1,
                        finger1: touch2,
                        distanceX: getTouchDistance(touch1, touch2),
                        distanceY: getTouchDistance(touch1, touch2, true)
                    };
                    handler.call(context || elem, dummyEve);
                } else {
                    elem._blockDrag = false;
                }
            };
            // Storing the handlers
            storeHandlers(elem, handler, fn);

            elem.node.addEventListener('touchstart', fn);
        };

        elproto.unpinchstart = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);
            elem.__blockDrag = false;
            elem._pinchDragStarted = false;
            derivedHandler && elem.node.removeEventListener('touchstart', derivedHandler);
        };

        elproto.pinchmove = function (handler, context) {
            var elem = this,
                dummyEve = {},
                fn = function fn(e) {
                // Pinchin is triggered only if 2 fingers are used.
                if (e.touches && e.touches.length === 2) {
                    var touch1 = e.touches[0],
                        touch2 = e.touches[1];
                    e && e.preventDefault();
                    elem._pinchDragStarted = true;
                    R.makeSelectiveCopy(dummyEve, e);
                    dummyEve.data = {
                        finger0: touch1,
                        finger1: touch2,
                        distanceX: getTouchDistance(touch1, touch2),
                        distanceY: getTouchDistance(touch1, touch2, true)
                    };
                    handler.call(context || elem, dummyEve);
                }
            };

            // Storing the handlers
            storeHandlers(elem, handler, fn);

            elem.node.addEventListener('touchmove', fn);
        };

        elproto.unpinchmove = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);

            derivedHandler && elem.node.removeEventListener('touchmove', derivedHandler);
        };

        elproto.pinchend = function (handler, context) {
            var elem = this,
                fn = function fn(e) {
                if (elem._pinchDragStarted) {
                    elem._pinchDragStarted = false;
                    handler.call(context || elem, e);
                }
            };

            // Storing the handlers
            storeHandlers(elem, handler, fn);

            elem.node.addEventListener('touchend', fn);
        };

        elproto.unpinchend = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);
            elem._pinchDragStarted = false;
            derivedHandler && elem.node.removeEventListener('touchend', derivedHandler);
        };

        elproto.pinch = function (pinchstarthandler, pinchinhandler, pinchendhandler) {
            elproto.pinchstart.call(this, pinchstarthandler);
            elproto.pinchin.call(this, pinchinhandler);
            elproto.pinchend.call(this, pinchendhandler);
        };

        elproto.unpinch = function (pinchstarthandler, pinchinhandler, pinchendhandler) {
            elproto.unpinchstart.call(this, pinchstarthandler);
            elproto.unpinchin.call(this, pinchinhandler);
            elproto.unpinchend.call(this, pinchendhandler);
        };
        elproto.fcwheel = function (handler, context) {
            var elem = this,
                dummyEve = {},
                fn = function fn(e) {
                e && e.preventDefault();
                R.makeSelectiveCopy(dummyEve, e);
                handler.call(context || elem, dummyEve);
            };
            // Storing the handlers
            storeHandlers(elem, handler, fn);
            elem.node.addEventListener('wheel', fn);
        };
        elproto.fcunwheel = function (handler) {
            var elem = this,
                derivedHandler = removeHandlers(elem, handler);
            derivedHandler && elem.node.removeEventListener('wheel', derivedHandler);
        };

        /* \
        * Element.on
        [ method ]
        **
        * Bind handler function for a particular event to Element
        * @param eventType - Type of event
        * @param handler - Function to be called on the firing of the event
        \ */
        elproto.on = function (eventType, handler, context) {
            if (!handler || !eventType) {
                return;
            }
            var elem = this,
                node,
                actualEventType,

            // an event is termed as safe if it is preceeded by fc
            isSafe = eventType.match(/fc-/),
                fn = handler;
            if (this.removed) {
                return this;
            }

            elem._actualListners || (elem._actualListners = []);
            elem._derivedListeners || (elem._derivedListeners = []);

            switch (eventType) {
                case 'fc-dragstart':
                    elem.drag(null, handler);
                    return elem;
                case 'fc-dragmove':
                    elem.drag(handler);
                    return elem;
                case 'fc-dragend':
                    elem.drag(null, null, handler);
                    return elem;
                case 'fc-dbclick':
                    elem.dbclick(handler, context);
                    return elem;
                case 'fc-pinchstart':
                    elem.pinchstart(handler, context);
                    return elem;
                case 'fc-pinchmove':
                    elem.pinchmove(handler, context);
                    return elem;
                case 'fc-pinchend':
                    elem.pinchend(handler, context);
                    return elem;
                case 'fc-click':
                    elem.fcclick(handler, context);
                    return elem;
                case 'fc-wheel':
                    elem.fcwheel(handler, context);
                    return elem;
            }

            // Setting the original event on which operations has to be done
            isSafe && (eventType = eventType.replace(/fc-/, ''));

            /**
             * Here we are implementing safe mouse events. All browsers for which pointer events are supported, we are using
             * pointer events for touch. For rest (non-hybrid ios device) we are using touch events.
             */
            if (isSafe) {
                if (supportsTouch) {
                    actualEventType = eventType;
                    eventType = (supportsPointer ? R.safePointerEventMapping[eventType] : safeMouseEventMapping[eventType]) || eventType;

                    // Mouse out event's handler is fired when the next element on the page is hovered.
                    if (actualEventType === 'mouseout') {
                        fn = function fn(e) {
                            // No action done if multi touch triggered in touch device supporting pointer
                            if (!(supportsPointer && supportsTouch && !e.isPrimary)) {
                                lastHoveredInfo.elementInfo.push({
                                    el: context || elem,
                                    callback: handler
                                });
                                lastHoveredInfo.srcElement = e.srcElement || e.target;
                            }
                        };
                        eventType = supportsPointer ? 'pointerover' : 'touchstart';
                    }
                }
            }

            // IE-11 cannot emit load and error event,
            // that's why we are attaching the load and error events on the Reference Image
            if (this._ && this._.RefImg && (eventType === 'load' || eventType === 'error')) {
                node = this._.RefImg;
                fn = function fn(e) {
                    // No action done if multi touch triggered in touch device supporting pointer
                    // !(supportsPointer && supportsTouch && !e.isPrimary) && !elem.removed && handler.call(elem, e);
                    !elem.removed && handler.call(elem, e);
                };
            } else {
                node = this.node;
            }
            if (fn === handler) {
                fn = function fn(e) {
                    // No action done if multi touch triggered in touch device supporting pointer
                    !(supportsPointer && supportsTouch && !e.isPrimary) && handler.call(context || elem, e);
                };
            }
            elem._actualListners.push(handler);
            elem._derivedListeners.push(fn);

            if (node.addEventListener) {
                node.addEventListener(eventType, fn);
            } else {
                node['on' + eventType] = fn;
            }
            return this;
        };

        /* \
        * Element.off
        [ method ]
        **
        * Remove handler function bind to an event of element
        * @param eventType - Type of event
        * @param handler - Function to be removed from event
        \ */
        elproto.off = function (eventType, handler) {
            var elem = this,
                fn = handler,
                actualEventType,
                index,

            // an event is termed as safe if it is preceeded by fc
            isSafe = eventType.match(/fc-/),
                node;
            if (this.removed || !elem._actualListners || !eventType || !handler) {
                return this;
            }

            // Unbinding the drag events
            switch (eventType) {
                case 'fc-dragstart':
                    elem.undragstart(handler);
                    return elem;
                case 'fc-dragmove':
                    elem.undragmove(handler);
                    return elem;
                case 'fc-dragend':
                    elem.undragend(handler);
                    return elem;
                case 'fc-dbclick':
                    elem.undbclick(handler);
                    return elem;
                case 'fc-pinchstart':
                    elem.unpinchstart(handler);
                    return elem;
                case 'fc-pinchmove':
                    elem.unpinchmove(handler);
                    return elem;
                case 'fc-pinchend':
                    elem.unpinchend(handler);
                    return elem;
                case 'fc-click':
                    elem.fcunclick(handler);
                    return elem;
                case 'fc-wheel':
                    elem.fcunwheel(handler);
                    return elem;
            }

            // Setting the original event on which operations has to be done
            isSafe && (eventType = eventType.replace(/fc-/, ''));

            fn = handler;

            if (isSafe) {
                if (supportsTouch) {
                    actualEventType = eventType;
                    eventType = (supportsPointer ? R.safePointerEventMapping[eventType] : safeMouseEventMapping[eventType]) || eventType;
                    if (actualEventType === 'mouseout') {
                        eventType = supportsPointer ? 'pointerover' : 'touchstart';
                    }
                }
            }

            if (this._ && this._.RefImg) {
                node = this._.RefImg;
            } else {
                node = this.node;
            }
            index = elem._actualListners.indexOf(fn);

            if (index !== -1) {
                fn = elem._derivedListeners[index];
                elem._actualListners.splice(index, 1);
                elem._derivedListeners.splice(index, 1);
            }

            if (node.removeEventListener) {
                node.removeEventListener(eventType, fn);
            } else {
                node['on' + eventType] = null;
            }
            return this;
        };

        R._engine.path = function (svg, attrs, group) {
            var el = $('path'),
                res = new Element(el, svg, group);

            res.type = 'path';
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };

        R._engine.group = function (svg, id, group, overrideId) {
            var el = $('g'),
                res = new Element(el, svg, group);

            res.type = 'group';
            res.canvas = res.node;
            res.top = res.bottom = null;
            res._id = id || E;

            if (id) {
                if (overrideId) {
                    el.setAttribute('class', 'raphael-group-' + id);
                } else {
                    el.setAttribute('class', 'raphael-group-' + res.id + '-' + id);
                }
            }

            return res;
        };

        R._engine.circle = function (svg, attrs, group) {
            var el = $('circle'),
                res = new Element(el, svg, group);

            res.type = 'circle';
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.rect = function (svg, attrs, group) {
            var el = $('rect'),
                res = new Element(el, svg, group);

            res.type = 'rect';
            attrs.rx = attrs.ry = attrs.r;
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.ellipse = function (svg, attrs, group) {
            var el = $('ellipse'),
                res = new Element(el, svg, group);

            res.type = 'ellipse';
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.image = function (svg, attrs, group) {
            var el = $(imageStr),
                res = new Element(el, svg, group, true);

            res._.group = group || svg;
            res.type = imageStr;
            el.setAttribute('preserveAspectRatio', noneStr);
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };
        R._engine.text = function (svg, attrs, group, css) {
            var el = $(textStr),
                res = new Element(el, svg, group);
            res.type = textStr;
            // Ideally this code should not be here as .css() is not a function of rapheal.
            css && res.css && res.css(css, undefined, true);
            // Apply the attribute if provided
            attrs && res.attr(attrs);
            return res;
        };

        R._engine.setSize = function (width, height) {
            this.width = width || this.width;
            this.height = height || this.height;
            this.canvas.setAttribute('width', this.width);
            this.canvas.setAttribute('height', this.height);
            if (this._viewBox) {
                this.setViewBox.apply(this, this._viewBox);
            }
            return this;
        };
        R._engine.create = function () {
            var con = R._getContainer.apply(0, arguments),
                container = con && con.container,
                x = con.x,
                y = con.y,
                width = con.width,
                height = con.height,
                paper;
            if (!container) {
                throw new Error('SVG container not found.');
            }
            var cnvs = $('svg'),
                css = 'overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);' + '-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;' + '-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;' + 'vertical-align:middle;',
                isFloating;
            // '-ms-touch-action : none' permits no default touch behaviors in IE (10 and 11) browser
            // '-touch-action : none' permits no default touch behaviors in mozilla of windows
            if (supportsTouch) {
                if (R.isIE10) {
                    css += '-ms-touch-action:none;';
                } else {
                    css += 'touch-action:none;';
                }
            }
            x = x || 0;
            y = y || 0;
            width = width || 512;
            height = height || 342;
            $(cnvs, {
                height: height,
                version: 1.1,
                width: width,
                xmlns: svgNSStr
            });

            if (container === 1) {
                cnvs.style.cssText = css + 'position:absolute;left:' + x + 'px;top:' + y + pxStr;

                // Store body as the container
                container = R._g.doc.body;
                container.appendChild(cnvs);
                isFloating = 1;
            } else {
                cnvs.style.cssText = css + 'position:relative';
                if (container.firstChild) {
                    container.insertBefore(cnvs, container.firstChild);
                } else {
                    container.appendChild(cnvs);
                }
            }
            paper = new R._Paper();
            paper.width = width;
            paper.height = height;
            paper.canvas = cnvs;
            // Store the container for further detachment and attachment
            paper.container = container;

            $(cnvs, {
                id: 'raphael-paper-' + paper.id
            });
            paper.clear();
            paper._left = paper._top = 0;
            isFloating && (paper.renderfix = function () {
                // No render fix required when isFloating is true
            });
            paper.renderfix();
            return paper;
        };
        R._engine.setViewBox = function (x, y, w, h, fit) {
            eve('raphael.setViewBox', this, this._viewBox, [x, y, w, h, fit]);
            var size = mmax(w / this.width, h / this.height),
                top = this.top,
                aspectRatio = fit ? 'meet' : 'xMinYMin',
                vb,
                sw;
            if (x == null) {
                if (this._vbSize) {
                    size = 1;
                }
                delete this._vbSize;
                vb = '0 0 ' + this.width + S + this.height;
            } else {
                this._vbSize = size;
                vb = x + S + y + S + w + S + h;
            }
            $(this.canvas, {
                viewBox: vb,
                preserveAspectRatio: aspectRatio
            });
            if (size) {
                while (top) {
                    sw = 'stroke-width' in top.attrs ? top.attrs['stroke-width'] : 1;
                    top.attr({
                        'stroke-width': sw
                    });
                    top._.dirty = 1;
                    top._.dirtyT = 1;
                    top = top.prev;
                }
            }
            this._viewBox = [x, y, w, h, !!fit];
            return this;
        };

        /**
         * Function to remove the paper form the DOM tree
         */
        R.prototype.detachPaper = function () {
            if (this._detached !== false) {
                this.container.removeChild(this.canvas);
                this._detached = true;
            }
        };
        /**
         * Function to append the paper in the DOM tree
         * @note: This might change the order of the child elements.
         */
        R.prototype.attachPaper = function () {
            if (this._detached) {
                this.container.appendChild(this.canvas);
                this._detached = false;
            }
        };

        R.prototype.renderfix = function () {
            var cnvs = this.canvas,
                s = cnvs.style,
                pos;
            try {
                pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
            } catch (e) {
                pos = cnvs.createSVGMatrix();
            }
            var left = -pos.e % 1,
                top = -pos.f % 1;
            if (left || top) {
                if (left) {
                    this._left = (this._left + left) % 1;
                    s.left = this._left + pxStr;
                }
                if (top) {
                    this._top = (this._top + top) % 1;
                    s.top = this._top + pxStr;
                }
            }
        };

        R.prototype._desc = function (txt) {
            var desc = this.desc;

            if (!desc) {
                this.desc = desc = $('desc');
                this.canvas.appendChild(desc);
            } else {
                while (desc.firstChild) {
                    desc.removeChild(desc.firstChild);
                }
            }
            desc.appendChild(R._g.doc.createTextNode(R.is(txt, typeStringSTR) ? txt : 'Created with Red Rapha\xebl ' + R.version));
        };

        R.prototype.clear = function () {
            var c;
            eve('raphael.clear', this);

            while (c = this.bottom) {
                c.remove();
            }

            c = this.canvas;
            while (c.firstChild) {
                c.removeChild(c.firstChild);
            }
            this.bottom = this.top = null;
            c.appendChild(this.desc = $('desc'));
            c.appendChild(this.defs = $('defs'));
        };

        R.prototype.remove = function () {
            var i;
            eve('raphael.remove', this);

            while (i = this.bottom) {
                i.remove();
            }

            this.defs && this.defs.parentNode.removeChild(this.defs);
            this.desc && this.desc.parentNode.removeChild(this.desc);
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (i in this) {
                this[i] = _typeof(this[i]) === fnStr ? R._removedFactory(i) : null;
            }
            this.removed = true;
        };
        R.prototype.setHTMLClassName = function () {
            // blank functiom
        };
        // var setproto = R.st;
        // for (var method in elproto)
        //     if (elproto[has](method) && !setproto[has](method)) {
        //         setproto[method] = (function(methodname) {
        //             return function() {
        //                 var arg = arguments;
        //                 return this.forEach(function(el) {
        //                     el[methodname].apply(el, arg);
        //                 });
        //             };
        //         })(method);
        //     }
    }
};

var _raphael = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(7);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2["default"] === "function" && typeof _iterator2["default"] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2["default"] === "function" && obj.constructor === _symbol2["default"] && obj !== _symbol2["default"].prototype ? "symbol" : typeof obj; };

/**!
* RedRaphael 1.0.0 - JavaScript Vector Library VML Module
* Copyright (c) 2012-2013 FusionCharts, Inc. <http://www.fusioncharts.com>
*
* Raphael 2.1.0 - JavaScript Vector Library VML Module
* Copyright (c) 2008-2012 Dmitry Baranovskiy <http://raphaeljs.com>
* Copyright © 2008-2012 Sencha Labs <http://sencha.com>
*
* Licensed under the MIT license.
*/
// Define _window as window object in case of indivual file inclusion.


exports["default"] = function (R) {
    if (R.vml) {
        var LoadRefImage = function LoadRefImage(element, attrs) {
            var src = attrs.src,
                parent = element._.group,
                node = element.node;
            if (!element._.RefImg) {
                element._.RefImg = new Image();
            }
            if (attrs.src === undefined) {
                return;
            }
            element._.RefImg.src = src;
        };

        var has = "hasOwnProperty",
            Str = String,
            toFloat = parseFloat,
            math = Math,
            round = math.round,
            mmax = math.max,
            mmin = math.min,
            sqrt = math.sqrt,
            abs = math.abs,
            fillString = "fill",
            separator = /[, ]+/,
            eve = R.eve,
            ms = " progid:DXImageTransform.Microsoft",
            arrayShift = Array.prototype.shift,
            doc = R._g.doc,
            f = doc.createElement("div"),
            b,
            S = " ",
            E = "",
            map = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
        },
            bites = /([clmz]),?([^clmz]*)/gi,
            blurregexp = / progid:\S+Blur\([^\)]+\)/g,
            val = /-?[^,\s-]+/g,
            cssDot = "position:absolute;left:0;top:0;width:1px;height:1px",
            zoom = 21600,
            pathTypes = {
            path: 1,
            rect: 1,
            image: 1
        },
            ovalTypes = {
            circle: 1,
            ellipse: 1
        },
            path2vml = function path2vml(path) {
            var total = /[ahqstv]/ig,
                command = R._pathToAbsolute;
            Str(path).match(total) && (command = R._path2curve);
            total = /[clmz]/g;
            if (command == R._pathToAbsolute && !Str(path).match(total)) {
                var res = Str(path).replace(bites, function (all, command, args) {
                    var vals = [],
                        isMove = command.toLowerCase() == "m",
                        res = map[command];
                    args.replace(val, function (value) {
                        if (isMove && vals.length == 2) {
                            res += vals + map[command == "m" ? "l" : "L"];
                            vals = [];
                        }
                        vals.push(round(value * zoom));
                    });
                    return res + vals;
                });

                return res || 'm0,0';
            }
            var pa = command(path),
                p,
                r;
            res = [];
            for (var i = 0, ii = pa.length; i < ii; i++) {
                p = pa[i];
                r = pa[i][0].toLowerCase();
                r == "z" && (r = "x");
                for (var j = 1, jj = p.length; j < jj; j++) {
                    r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
                }
                res.push(r);
            }
            return res.length ? res.join(S) : 'm0,0';
        },
            compensation = function compensation(deg, dx, dy) {
            var m = R.matrix();
            m.rotate(-deg, .5, .5);
            return {
                dx: m.x(dx, dy),
                dy: m.y(dx, dy)
            };
        },
            setCoords = function setCoords(p, sx, sy, dx, dy, deg) {
            var _ = p._,
                m = p.matrix,
                fillpos = _.fillpos,
                o = p.node,
                s = o.style,
                y = 1,
                flip = "",
                dxdy,
                kx = zoom / sx,
                ky = zoom / sy;
            s.visibility = "hidden";
            if (!sx || !sy) {
                return;
            }
            o.coordsize = abs(kx) + S + abs(ky);
            s.rotation = deg * (sx * sy < 0 ? -1 : 1);
            if (deg) {
                var c = compensation(deg, dx, dy);
                dx = c.dx;
                dy = c.dy;
            }
            sx < 0 && (flip += "x");
            sy < 0 && (flip += " y") && (y = -1);
            s.flip = flip;
            o.coordorigin = dx * -kx + S + dy * -ky;
            if (fillpos || _.fillsize) {
                var fill = o.getElementsByTagName(fillString);
                fill = fill && fill[0];
                if (fill) {
                    o.removeChild(fill);
                    if (fillpos) {
                        c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
                        fill.position = c.dx * y + S + c.dy * y;
                    }
                    if (_.fillsize) {
                        fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
                    }
                    o.appendChild(fill);
                }
            }
            s.visibility = "visible";
        };
        f.innerHTML = '<v:shape adj="1"/>';
        b = f.firstChild;
        b.style.behavior = "url(#default#VML)";
        if (!(b && _typeof(b.adj) == 'object')) {
            R.type = E;
            // return (R.type = E);
        }
        f = null;

        R._url = E;
        R.toString = function () {
            return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xEBl " + this.version;
        };
        var addArrow = function addArrow(o, value, isEnd) {
            var values = Str(value).toLowerCase().split("-"),
                se = isEnd ? "end" : "start",
                i = values.length,
                type = "classic",
                w = "medium",
                h = "medium";
            while (i--) {
                switch (values[i]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        type = values[i];
                        break;
                    case "wide":
                    case "narrow":
                        h = values[i];
                        break;
                    case "long":
                    case "short":
                        w = values[i];
                        break;
                }
            }
            var stroke = o.node.getElementsByTagName("stroke")[0];
            stroke[se + "arrow"] = type;
            stroke[se + "arrowlength"] = w;
            stroke[se + "arrowwidth"] = h;
        },
            applyCustomAttributes = function applyCustomAttributes(o, attrs) {
            for (var key in attrs) {
                eve("raphael.attr." + key + "." + o.id, o, attrs[key], key);
                o.ca[key] && o.attr(key, attrs[key]);
            }
        },
            styles = ['font', 'line-height', 'font-family', 'font-weight', 'font-style', 'font-size'],
            getComputedFontStyle = function getComputedFontStyle(o) {
            var style = {},
                _break,
                i,
                len = styles.length,
                attrs;
            while (o.paper && o.paper.canvas) {
                attrs = o.attrs;
                _break = true;
                for (i = 0; i < len; i++) {
                    if (!style[styles[i]]) {
                        style[styles[i]] = attrs[styles[i]];
                        _break = false;
                    }
                }
                if (_break) break;
                o = o.parent;
            }
            return style;
        },
            setFillAndStroke = R._setFillAndStroke = function (o, params) {
            if (!o.paper.canvas) return;
            // o.paper.canvas.style.display = "none";
            o.attrs = o.attrs || {};
            var node = o.node,
                a = o.attrs,
                s = node.style,
                xy,
                oriOp,
                newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r),
                isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),
                isGroup = o.type === 'group',
                res = o;
            oriOp = res.oriOp || (res.oriOp = {});
            for (var par in params) {
                // Not setting any black property
                if (params[par] === '') {
                    node.removeAttribute(par);
                    delete a[par];
                    delete params[par];
                    continue;
                } else if (params[has](par)) {
                    a[par] = params[par];
                }
            }if (newpath) {
                a.path = R._getPath[o.type](o);
                o._.dirty = 1;
            }
            params.href && (node.href = params.href);
            params.title && (node.title = params.title);
            params.target && (node.target = params.target);
            params.cursor && (s.cursor = params.cursor);
            "blur" in params && o.blur(params.blur);

            if (params.path && o.type == "path" || newpath) {
                node.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
                if (o.type == "image") {
                    o._.fillpos = [a.x, a.y];
                    o._.fillsize = [a.width, a.height];
                    setCoords(o, 1, 1, 0, 0, 0);
                }
            }
            "transform" in params && o.transform(params.transform);
            if ("rotation" in params) {
                var rotation = params.rotation;
                if (R.is(rotation, "array")) {
                    o.rotate.apply(o, rotation);
                } else {
                    o.rotate(rotation);
                }
            }
            if ("visibility" in params) {
                params.visibility === 'hidden' ? o.hide() : o.show();
            }
            if (isOval) {
                var cx = +a.cx,
                    cy = +a.cy,
                    rx = +a.rx || +a.r || 0,
                    ry = +a.ry || +a.r || 0;
                node.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
            }
            if ("clip-rect" in params) {
                var rect = Str(params["clip-rect"]).split(separator);

                if (rect.length == 4) {
                    rect[0] = +rect[0];
                    rect[1] = +rect[1];
                    rect[2] = +rect[2] + rect[0];
                    rect[3] = +rect[3] + rect[1];

                    /** @todo create separate element for group clip-rect to
                     * avoid unclipping issue */
                    var div = isGroup ? node : node.clipRect || R._g.doc.createElement("div"),
                        offset,
                        dstyle = div.style;

                    if (isGroup) {
                        o.clip = rect.slice(); // copy param
                        offset = o.matrix.offset();
                        offset = [toFloat(offset[0]), toFloat(offset[1])];
                        // invert matrix calculation
                        rect[0] -= offset[0];
                        rect[1] -= offset[1];
                        rect[2] -= offset[0];
                        rect[3] -= offset[1];
                        // Fix for bug in ie clip-auto when height/width is not defined
                        /** @todo set dynamic w/h based on clip bounds or find
                         * another workaround fix */
                        //dstyle.width = "10800px";
                        //dstyle.height = "10800px";

                        // Not sure about the above fix
                        // Revert the fix because it's creating another issue.
                        // Setting the Group style, width/height as "10800px" makes the other group inaccessible
                        // which is below this group
                        dstyle.width = "1px";
                        dstyle.height = "1px";
                    } else if (!node.clipRect) {
                        dstyle.top = "0";
                        dstyle.left = "0";
                        dstyle.width = o.paper.width + "px";
                        dstyle.height = o.paper.height + "px";
                        node.parentNode.insertBefore(div, node);
                        div.appendChild(node);
                        div.raphael = true;
                        div.raphaelid = node.raphaelid;
                        node.clipRect = div;
                    }
                    dstyle.position = "absolute";
                    dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
                }
                if (!params["clip-rect"]) {
                    if (isGroup && o.clip) {
                        node.style.clip = "rect(0px 10800px 10800px 0px)";
                        delete o.clip;
                    } else if (node.clipRect) {
                        node.clipRect.style.clip = "rect(0px 10800px 10800px 0px)";
                    }
                }
            }

            if ("shape-rendering" in params) {
                node.style.antialias = params["shape-rendering"] !== 'crisp';
            }
            // Css styles will be applied in element or group.
            if (o.textpath || isGroup) {
                var textpathStyle = isGroup ? node.style : o.textpath.style;
                params.font && (textpathStyle.font = params.font);
                params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
                params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
                params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
                params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
            }
            if ("arrow-start" in params) {
                R.addArrow && R.addArrow(res, params["arrow-start"]);
            }
            if ("arrow-end" in params) {
                R.addArrow && R.addArrow(res, params["arrow-end"], 1);
            }
            if (params.opacity != null || params["stroke-width"] != null || params.fill != null || params.src != null || params.stroke != null || params["stroke-width"] != null || params["stroke-opacity"] != null || params["fill-opacity"] != null || params["stroke-dasharray"] != null || params["stroke-miterlimit"] != null || params["stroke-linejoin"] != null || params["stroke-linecap"] != null) {
                var fill = node.getElementsByTagName(fillString),
                    newfill = false,
                    fillOpacity = -1;
                fill = fill && fill[0];
                !fill && (newfill = fill = createNode(fillString));
                if (o.type == "image" && params.src) {
                    LoadRefImage(o, params);
                    fill.src = params.src;
                }
                params.fill && (fill.on = true);
                if (fill.on == null || params.fill == "none" || params.fill === null) {
                    fill.on = false;
                }

                if (fill.on && params.fill) {
                    var isURL = Str(params.fill).match(R._ISURL),
                        urlArr;
                    if (isURL) {
                        urlArr = params.fill.split(R._ISURL);
                        fill.parentNode == node && node.removeChild(fill);
                        fill.rotate = true;
                        fill.src = urlArr[1];
                        fill.type = "tile";
                        var bbox = o.getBBox(1);
                        fill.position = bbox.x + S + bbox.y;
                        o._.fillpos = [bbox.x, bbox.y];

                        R._preload(urlArr[1], function () {
                            o._.fillsize = [this.offsetWidth, this.offsetHeight];
                        });
                    } else {
                        var color = R.getRGB(params.fill);
                        fill.color = color.hex;
                        fill.src = E;
                        fill.type = "solid";

                        if (color.error && (res.type in {
                            circle: 1,
                            ellipse: 1
                        } || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
                            a.fill = "none";
                            a.gradient = params.fill;
                            fill.rotate = false;
                        } else if ("opacity" in color && !("fill-opacity" in params)) {
                            // store oiginal non gradient color opacity
                            oriOp.nonGradOpacity = fillOpacity = color.opacity;
                        }
                    }
                }
                if (fillOpacity !== -1 || "fill-opacity" in params || "opacity" in params) {
                    var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1);
                    opacity = mmin(mmax(opacity, 0), 1);
                    oriOp.opacity = opacity;
                    // if gradient color opacity is set then opacity (applied through the params)
                    //  should be multiplied with the gradient opacity so that ratio will remain same
                    if (oriOp.opacity1 !== undefined) {
                        fill.opacity = oriOp.opacity1 * opacity;
                        fill['o:opacity2'] = oriOp.opacity2 * opacity;
                    } else {
                        // multiply with the original non gradient color opacity with the opacity to preserve the ratio of the opacity
                        fill.opacity = opacity * (oriOp.nonGradOpacity === undefined ? 1 : oriOp.nonGradOpacity);
                    }
                    if (fill.src) {
                        fill.color = "none";
                    }
                }
                oriOp.opacity = undefined;
                node.appendChild(fill);
                var stroke = node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0],
                    newstroke = false;
                !stroke && (newstroke = stroke = createNode("stroke"));
                if (params.stroke && params.stroke != "none" || params["stroke-width"] || params["stroke-opacity"] != null || params["stroke-dasharray"] || params["stroke-miterlimit"] || params["stroke-linejoin"] || params["stroke-linecap"]) {
                    stroke.on = true;
                }
                (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
                var strokeColor = R.getRGB('stroke' in params ? params.stroke : a.stroke);
                stroke.on && params.stroke && (stroke.color = strokeColor.hex);
                opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.opacity + 1 || 2) - 1);
                var width = (toFloat(params["stroke-width"]) || 1) * .75;
                opacity = mmin(mmax(opacity, 0), 1);
                params["stroke-width"] == null && (width = a["stroke-width"]);
                params["stroke-width"] && (stroke.weight = width);
                width && width < 1 && (opacity *= width) && (stroke.weight = 1);
                // stroke-opacity should be applied only if stroke color is provided.
                stroke.opacity = a.stroke !== 'none' ? opacity : 0;
                params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"]) || newstroke && (newstroke.joinstyle = 'miter');
                stroke.miterlimit = params["stroke-miterlimit"] || 8;
                params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
                if (params["stroke-dasharray"]) {
                    var dasharray = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    };
                    stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : params["stroke-dasharray"].join && params["stroke-dasharray"].join(' ') || E;
                }
                newstroke && node.appendChild(stroke);
            }
            if (res.type == "text") {
                res.paper.canvas.style.display = E;
                var span = res.paper.span,
                    m = 100,
                    _style = getComputedFontStyle(res),
                    fontSize = _style.font && _style.font.match(/\d+(?:\.\d*)?(?=px)/),
                    lineHeight = _style['line-height'] && (_style['line-height'] + E).match(/\d+(?:\.\d*)?(?=px)/);
                s = span.style;
                _style.font && (s.font = _style.font);
                _style["font-family"] && (s.fontFamily = _style["font-family"]);
                _style["font-weight"] && (s.fontWeight = _style["font-weight"]);
                _style["font-style"] && (s.fontStyle = _style["font-style"]);
                fontSize = toFloat(_style["font-size"] || fontSize && fontSize[0]) || 10;
                s.fontSize = fontSize * m + "px";
                lineHeight = toFloat(_style["line-height"] || lineHeight && lineHeight[0] || fontSize * 1.2) || 12;
                s.lineHeight = lineHeight * m + 'px';
                R.is(params.text, 'array') && (params.text = res.textpath.string = params.text.join('\n').replace(/<br\s*?\/?>/ig, '\n'));
                res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                var brect = span.getBoundingClientRect();
                res.W = a.w = (brect.right - brect.left) / m;
                res.H = a.h = (brect.bottom - brect.top) / m;
                // res.paper.canvas.style.display = "none";
                res.X = a.x;
                res.Y = a.y;
                var leading = lineHeight - fontSize;

                switch (a["vertical-align"]) {
                    case "top":
                        res.bby = res.H / 2; // + leading;
                        break;
                    case "bottom":
                        res.bby = -res.H / 2; // - leading;
                        break;
                    default:
                        res.bby = 0;
                }

                ("x" in params || "y" in params || res.bby !== undefined) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round((a.y + (res.bby || 0)) * zoom), round(a.x * zoom) + 1));
                var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size", "line-height"];
                for (var d = 0, dd = dirtyattrs.length; d < dd; d++) {
                    if (dirtyattrs[d] in params) {
                        res._.dirty = 1;
                        break;
                    }
                } // text-anchor emulation
                switch (a["text-anchor"]) {
                    case "start":
                        res.textpath.style["v-text-align"] = "left";
                        res.bbx = res.W / 2;
                        break;
                    case "end":
                        res.textpath.style["v-text-align"] = "right";
                        res.bbx = -res.W / 2;
                        break;
                    default:
                        res.textpath.style["v-text-align"] = "center";
                        res.bbx = 0;
                        break;
                }
                res.textpath.style["v-text-kern"] = true;
            }
            // res.paper.canvas.style.display = E;
        },

        /*
        * Keeps the follower element in sync with the leaders.
        * First and second arguments represents the context(element) and the
        name of the callBack function respectively.
        * The callBack is invoked for indivual follower Element with the rest of
        arguments.
        */
        updateFollowers = R._updateFollowers = function () {
            var i,
                ii,
                followerElem,
                args = (0, _raphael.getArrayCopy)(arguments),
                o = arrayShift.call(args),
                fnName = arrayShift.call(args);
            for (i = 0, ii = o.followers.length; i < ii; i++) {
                followerElem = o.followers[i].el;
                followerElem[fnName].apply(followerElem, args);
            }
        },
            addGradientFill = function addGradientFill(o, gradient, fill) {
            o.attrs = o.attrs || {};
            var attrs = o.attrs,
                pow = Math.pow,
                oriFOpacity,
                oriOp = o.oriOp,
                opacity,
                oindex,
                type = "linear",
                fxfy = ".5 .5";
            o.attrs.gradient = gradient;
            gradient = Str(gradient).replace(R._radial_gradient, function (all, opts) {
                type = "radial";
                opts = opts && opts.split(',') || [];

                // fx,fy of vml is cx,cy of svg
                var cx = opts[0],
                    cy = opts[1],
                    r = opts[2],
                    fx = opts[3],
                    fy = opts[4],
                    units = opts[5];
                if (fx && fy) {
                    fx = toFloat(fx);
                    fy = toFloat(fy);
                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
                    fxfy = fx + S + fy;
                }
                return E;
            });
            gradient = gradient.split(/\s*\-\s*/);
            if (type == "linear") {
                var angle = gradient.shift();
                angle = -toFloat(angle);
                if (isNaN(angle)) {
                    return null;
                }
            }
            var dots = R._parseDots(gradient);
            if (!dots) {
                return null;
            }
            o = o.shape || o.node;
            if (dots.length) {
                fill.parentNode == o && o.removeChild(fill);
                fill.on = true;
                fill.method = "none";
                fill.color = dots[0].color;
                fill.color2 = dots[dots.length - 1].color;
                //For VML use first and last available alpha
                var clrs = [],
                    opacity1 = 1,
                    opacity2 = dots[0].opacity === undefined ? 1 : dots[0].opacity;
                for (var i = 0, ii = dots.length; i < ii; i++) {
                    dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
                    if (dots[i].opacity !== undefined) {
                        opacity1 = dots[i].opacity; //update with latest avaible opacity
                    }
                }
                fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;
                //set opacity1 & opacity2
                // store original gradient color opacity
                oriOp.opacity1 = opacity1;
                oriOp.opacity2 = opacity2;
                oriFOpacity = oriOp.opacity === undefined ? 1 : oriOp.opacity;
                // if gradient color opacity is set then opacity (applied through the params)
                // should be multiplied with the gradient opacity so that ratio will remain same
                fill.opacity = opacity1 * oriFOpacity;
                fill['o:opacity2'] = opacity2 * oriFOpacity;
                if (type == "radial") {
                    fill.type = "gradientTitle";
                    fill.focus = "100%";
                    fill.focussize = "0 0";
                    fill.focusposition = fxfy;
                    fill.angle = 0;
                } else {
                    // fill.rotate= true;
                    fill.type = "gradient";
                    fill.angle = (270 - angle) % 360;
                }
                o.appendChild(fill);
            }
            return 1;
        },
            Element = function Element(node, vml, group /*, dontAppend*/) {
            var o = this,
                parent = group || vml,
                skew;

            /*!dontAppend && */parent.canvas && parent.canvas.appendChild(node);
            skew = createNode("skew");
            skew.on = true;
            node.appendChild(skew);
            o.skew = skew;

            o.node = o[0] = node;
            node.raphael = true;
            node.raphaelid = o.id = R._oid++;

            o.X = 0;
            o.Y = 0;

            o.attrs = o.attrs || {};
            o.followers = o.followers || [];

            o.paper = vml;
            o.ca = o.customAttributes = o.customAttributes || new vml._CustomAttributes();

            o.matrix = R.matrix();
            o._ = {
                transform: [],
                sx: 1,
                sy: 1,
                dx: 0,
                dy: 0,
                deg: 0,
                dirty: 1,
                dirtyT: 1
            };

            o.parent = parent;
            !parent.bottom && (parent.bottom = o);

            o.prev = parent.top;
            parent.top && (parent.top.next = o);
            parent.top = o;
            o.next = null;
        };
        var elproto = R.el;

        Element.prototype = elproto;
        elproto.constructor = Element;

        elproto.transform = function (tstr) {
            if (tstr == null) {
                return this._.transform;
            }
            var vbs = this.paper._viewBoxShift,
                vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
                oldt;

            if (vbs) {
                oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
            }

            R._extractTransform(this, vbt + tstr);

            var matrix = this.matrix.clone(),
                skew = this.skew,
                o = this.node,
                split,
                isGrad = ~Str(this.attrs.fill).indexOf("-"),
                isPatt = !Str(this.attrs.fill).indexOf("url(");
            matrix.translate(-.5, -.5);
            if (isPatt || isGrad || this.type == "image") {
                skew.matrix = "1 0 0 1";
                skew.offset = "0 0";
                split = matrix.split();
                if (isGrad && split.noRotation || !split.isSimple) {
                    o.style.filter = matrix.toFilter();
                    var bb = this.getBBox(),
                        bbt = this.getBBox(1),
                        xget = bb.x2 && bbt.x2 && 'x2' || 'x',
                        yget = bb.y2 && bbt.y2 && 'y2' || 'y',
                        dx = bb[xget] - bbt[xget],
                        dy = bb[yget] - bbt[yget];
                    o.coordorigin = dx * -zoom + S + dy * -zoom;
                    setCoords(this, 1, 1, dx, dy, 0);
                } else {
                    o.style.filter = E;
                    setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
                }
            } else {
                o.style.filter = E;
                skew.matrix = Str(matrix);
                skew.offset = matrix.offset();
            }
            oldt && (this._.transform = oldt);

            return this;
        };
        elproto.rotate = function (deg, cx, cy) {
            var o = this;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'rotate', deg, cx, cy);
            if (deg == null) {
                return;
            }
            deg = Str(deg).split(separator);
            if (deg.length - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                var bbox = o.getBBox(1);
                cx = bbox.x + bbox.width / 2;
                cy = bbox.y + bbox.height / 2;
            }
            o._.dirtyT = 1;
            o.transform(o._.transform.concat([["r", deg, cx, cy]]));
            return o;
        };
        elproto.translate = function (dx, dy) {
            var o = this;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'translate', dx, dy);
            dx = Str(dx).split(separator);
            if (dx.length - 1) {
                dy = toFloat(dx[1]);
            }
            dx = toFloat(dx[0]) || 0;
            dy = +dy || 0;
            if (o._.bbox) {
                o._.bbox.x += dx;
                o._.bbox.y += dy;
            }
            o.transform(o._.transform.concat([["t", dx, dy]]));
            return o;
        };
        elproto.scale = function (sx, sy, cx, cy) {
            var o = this;
            if (o.removed) {
                return o;
            }
            updateFollowers(o, 'scale', sx, sy, cx, cy);
            sx = Str(sx).split(separator);
            if (sx.length - 1) {
                sy = toFloat(sx[1]);
                cx = toFloat(sx[2]);
                cy = toFloat(sx[3]);
                isNaN(cx) && (cx = null);
                isNaN(cy) && (cy = null);
            }
            sx = toFloat(sx[0]);
            sy == null && (sy = sx);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                var bbox = o.getBBox(1);
            }
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;

            o.transform(o._.transform.concat([["s", sx, sy, cx, cy]]));
            o._.dirtyT = 1;
            return o;
        };
        elproto.hide = function (soft) {
            var o = this;
            updateFollowers(o, 'hide', soft);
            !o.removed && (o.node.style.display = "none");
            return o;
        };

        elproto.show = function (soft) {
            var o = this;
            updateFollowers(o, 'show', soft);
            !o.removed && (o.node.style.display = E);
            return o;
        };
        elproto._getBBox = function () {
            var o = this;
            if (o.removed) {
                return {};
            }
            return {
                x: o.X + (o.bbx || 0) - o.W / 2,
                y: o.Y + (o.bby || 0) - o.H / 2,
                width: o.W,
                height: o.H
            };
        };
        elproto.remove = function () {
            if (this.removed || !this.parent.canvas) {
                return;
            }

            var o = this,
                node = R._engine.getNode(o),
                paper = o.paper,
                shape = o.shape,
                i;

            paper.__set__ && paper.__set__.exclude(o);
            eve.unbind("raphael.*.*." + o.id);

            shape && shape.parentNode.removeChild(shape);
            node.parentNode && node.parentNode.removeChild(node);

            while (i = o.followers.pop()) {
                i.el.remove();
            }
            while (i = o.bottom) {
                i.remove();
            }

            if (o._drag) {
                o.undrag();
            }

            if (o.events) {
                while (i = o.events.pop()) {
                    i.unbind();
                }
            }

            o.removeData();
            delete paper._elementsById[o.id];
            R._tear(o, o.parent);

            for (var i in o) {
                o[i] = typeof o[i] === "function" ? R._removedFactory(i) : null;
            }
            o.removed = true;
        };

        elproto.attr = function (name, value) {
            if (this.removed) {
                return this;
            }
            if (name == null) {
                var res = {};
                for (var a in this.attrs) {
                    if (this.attrs[has](a)) {
                        res[a] = this.attrs[a];
                    }
                }res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                res.transform = this._.transform;
                res.visibility = this.node.style.display === "none" ? "hidden" : "visible";
                return res;
            }
            if (value == null && R.is(name, "string")) {
                if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient;
                }
                if (name == "visibility") {
                    return this.node.style.display === "none" ? "hidden" : "visible";
                }
                var names = name.split(separator),
                    out = {};
                for (var i = 0, ii = names.length; i < ii; i++) {
                    name = names[i];
                    if (name in this.attrs) {
                        out[name] = this.attrs[name];
                    } else if (R.is(this.ca[name], "function")) {
                        out[name] = this.ca[name].def;
                    } else {
                        out[name] = R._availableAttrs[name];
                    }
                }
                return ii - 1 ? out : out[names[0]];
            }
            if (this.attrs && value == null && R.is(name, "array")) {
                out = {};
                for (i = 0, ii = name.length; i < ii; i++) {
                    out[name[i]] = this.attr(name[i]);
                }
                return out;
            }
            var params;
            if (value != null) {
                params = {};
                params[name] = value;
            }
            value == null && R.is(name, "object") && (params = name);
            if (!R.stopPartialEventPropagation) {
                for (var key in params) {
                    eve("raphael.attr." + key + "." + this.id, this, params[key], key);
                }
            }
            if (params) {
                var todel = {};
                for (key in this.ca) {
                    if (this.ca[key] && params[has](key) && R.is(this.ca[key], "function") && !this.ca['_invoked' + key]) {
                        this.ca['_invoked' + key] = true; // prevent recursion
                        var par = this.ca[key].apply(this, [].concat(params[key]));
                        delete this.ca['_invoked' + key];

                        for (var subkey in par) {
                            if (par[has](subkey)) {
                                params[subkey] = par[subkey];
                            }
                        }
                        this.attrs[key] = params[key];
                        if (par === false) {
                            todel[key] = params[key];
                            delete params[key];
                        }
                    }
                }

                // this.paper.canvas.style.display = "none";
                if ('text' in params && this.type == "text") {
                    R.is(params.text, 'array') && (params.text = params.text.join('\n'));
                    this.textpath.string = params.text.replace(/<br\s*?\/?>/ig, '\n');
                }
                setFillAndStroke(this, params);
                var follower;
                for (i = 0, ii = this.followers.length; i < ii; i++) {
                    follower = this.followers[i];
                    follower.cb && !follower.cb.call(follower.el, params, this) || follower.el.attr(params);
                }
                for (var subkey in todel) {
                    params[subkey] = todel[subkey];
                }
                // this.paper.canvas.style.display = E;
            }
            return this;
        };

        /*\
        * Element.on
        [ method ]
        **
        * Bind handler function for a particular event to Element
        * @param eventType - Type of event
        * @param handler - Function to be called on the firing of the event
        \*/
        elproto.on = function (eventType, handler, context) {
            var elem = this,
                dummyEve,
                fn = handler;
            if (elem.removed) {
                return elem;
            }

            elem._actualListners || (elem._actualListners = []);
            elem._derivedListeners || (elem._derivedListeners = []);

            switch (eventType) {
                case 'fc-dragstart':
                    elem.drag(null, handler);
                    return elem;
                case 'fc-dragmove':
                    elem.drag(handler);
                    return elem;
                case 'fc-dragend':
                    elem.drag(null, null, handler);
                    return elem;
                case 'fc-dbclick':
                    elem.dbclick(handler, context);
                    return elem;
                case 'fc-click':
                    elem.fcclick(handler, context);
                    return elem;
            }

            eventType = eventType.replace(/fc-/, '');

            // There is discrepancy in IE-8 load and error event emmition,
            // that's why we are attaching the load and error events on the Reference Image
            if (elem._ && elem._.RefImg && (eventType === 'load' || eventType === 'error')) {
                node = elem._.RefImg;
                fn = function (el, handler) {
                    return function (e) {
                        dummyEve = {};
                        R.makeSelectiveCopy(dummyEve, e);
                        dummyEve.target = elem._.RefImg;
                        !el.removed && handler.call(el, dummyEve);
                    };
                }(elem, handler);
            } else {
                node = elem.node;
            }

            if (!node.attachEvent) {
                fn = function fn() {
                    var evt = R._g.win.event;
                    evt.target = evt.srcElement;
                    handler(evt);
                };
            } else if (fn === handler) {
                fn = function fn(e) {
                    handler.call(context || elem, e);
                };
            }

            // Storing the actual and derived event for removing it later
            elem._actualListners.push(handler);
            elem._derivedListeners.push(fn);

            if (node.attachEvent) {
                node.attachEvent('on' + eventType, fn);
            } else {
                node['on' + eventType] = fn;
            }
            return elem;
        };

        /*\
        * Element.off
        [ method ]
        **
        * Remove handler function bind to an event of element
        * @param eventType - Type of event
        * @param handler - Function to be removed from event
        \*/
        elproto.off = function (eventType, handler) {
            var elem = this,
                index;
            if (elem.removed) {
                return elem;
            }

            switch (eventType) {
                case 'fc-dragstart':
                    elem.undragstart(handler);
                    return elem;
                case 'fc-dragmove':
                    elem.undragmove(handler);
                    return elem;
                case 'fc-dragend':
                    elem.undragend(handler);
                    return elem;
                case 'fc-dbclick':
                    elem.undbclick(handler);
                    return elem;
                case 'fc-click':
                    elem.fcunclick(handler);
                    return elem;
            }

            eventType = eventType.replace(/fc-/, '');

            index = elem._actualListners.indexOf(handler);

            if (index !== -1) {
                handler = elem._derivedListeners[index];
                elem._actualListners.splice(index, 1);
                elem._derivedListeners.splice(index, 1);
            }

            if (elem.node.attachEvent) {
                elem.node.detachEvent('on' + eventType, handler);
            } else {
                elem.node['on' + eventType] = null;
            }
            return elem;
        };

        R._engine.getNode = function (el) {
            var node = el.node || el[0].node;
            return node.clipRect || node;
        };
        R._engine.getLastNode = function (el) {
            var node = el.node || el[el.length - 1].node;
            return node.clipRect || node;
        };

        R._engine.group = function (vml, id, group, overrideId) {
            var el = R._g.doc.createElement("div"),
                className,
                universalClassName = vml._HTMLClassName,
                p = new Element(el, vml, group);

            el.style.cssText = cssDot;
            p._id = id || E;

            if (id) {
                if (overrideId) {
                    className = el.className = 'raphael-group-' + id;
                } else {
                    className = el.className = 'raphael-group-' + p.id + '-' + id;
                }
            }

            if (universalClassName) {
                el.className = className ? className + ' ' + universalClassName : universalClassName;
            }
            (group || vml).canvas.appendChild(el);

            p.type = 'group';
            p.canvas = p.node;
            p.transform = R._engine.group.transform;
            p.top = null;
            p.bottom = null;

            return p;
        };

        R._engine.group.transform = function (tstr) {
            if (tstr == null) {
                return this._.transform;
            }

            var o = this,
                s = o.node.style,
                c = o.clip,
                vbs = o.paper._viewBoxShift,
                vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
                oldt,
                matrix,
                offset,
                tx,
                ty;

            if (vbs) {
                oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, o._.transform || E);
            }
            R._extractTransform(o, vbt + tstr);
            matrix = o.matrix;
            offset = matrix.offset();
            tx = toFloat(offset[0]) || 0;
            ty = toFloat(offset[1]) || 0;

            s.left = tx + "px";
            s.top = ty + "px";
            s.zoom = (o._.tzoom = matrix.get(0)) + E;

            /** @todo try perform relative group transform, thus avoiding
             * transform on clipping */
            c && (s.clip = R.format("rect({1}px {2}px {3}px {0}px)", [c[0] - tx, c[1] - ty, c[2] - tx, c[3] - ty]));

            return o;
        };

        R._engine.path = function (vml, attrs, group) {
            var el = createNode("shape");
            el.style.cssText = cssDot;
            el.coordsize = zoom + S + zoom;
            el.coordorigin = vml.coordorigin;

            var p = new Element(el, vml, group);
            p.type = attrs.type || "path";
            p.path = [];
            p.Path = E;

            attrs.type && delete attrs.type;
            setFillAndStroke(p, attrs);
            applyCustomAttributes(p, attrs);
            return p;
        };

        R._engine.rect = function (vml, attrs, group) {
            var path = R._rectPath(attrs.x, attrs.y, attrs.w, attrs.h, attrs.r);

            attrs.path = path;
            attrs.type = "rect";

            var res = vml.path(attrs, group),
                a = res.attrs;
            res.X = a.x;
            res.Y = a.y;
            res.W = a.width;
            res.H = a.height;
            a.path = path;

            return res;
        };
        R._engine.ellipse = function (vml, attrs, group) {
            attrs.type = "ellipse";

            var res = vml.path(attrs, group),
                a = res.attrs;
            res.X = a.x - a.rx;
            res.Y = a.y - a.ry;
            res.W = a.rx * 2;
            res.H = a.ry * 2;

            return res;
        };
        R._engine.circle = function (vml, attrs, group) {
            attrs.type = "circle";

            var res = vml.path(attrs, group),
                a = res.attrs;

            res.X = a.x - a.r;
            res.Y = a.y - a.r;
            res.W = res.H = a.r * 2;
            return res;
        };
        ;
        R._engine.image = function (vml, attrs, group) {
            attrs.w || (attrs.w = attrs.width);
            attrs.h || (attrs.h = attrs.height);
            var path = R._rectPath(attrs.x, attrs.y, attrs.w, attrs.h);

            attrs.path = path;
            attrs.type = "image";
            attrs.stroke = "none";
            var res = vml.path(attrs, group),
                a = res.attrs,
                node = res.node,
                fill = node.getElementsByTagName(fillString)[0];
            !res._.RefImg && (res._.RefImg = new Image());
            a.src = attrs.src;
            res.X = a.x = attrs.x;
            res.Y = a.y = attrs.y;
            res.W = a.width = attrs.w;
            res.H = a.height = attrs.h;

            fill.parentNode == node && node.removeChild(fill);
            fill.rotate = true;
            fill.src = a.src;
            fill.type = "tile";
            res._.fillpos = [a.x, a.y];
            res._.fillsize = [a.w, a.h];
            node.appendChild(fill);
            setCoords(res, 1, 1, 0, 0, 0);
            return res;
        };
        R._engine.text = function (vml, attrs, group, css) {
            var el = createNode("shape"),
                path = createNode("path"),
                o = createNode("textpath");
            x = attrs.x || 0;
            y = attrs.y || 0;
            text = attrs.text;
            path.v = R.format("m{0},{1}l{2},{1}", round(attrs.x * zoom), round(attrs.y * zoom), round(attrs.x * zoom) + 1);
            path.textpathok = true;
            o.string = Str(attrs.text).replace(/<br\s*?\/?>/ig, '\n');
            o.on = true;
            el.style.cssText = cssDot;
            el.coordsize = zoom + S + zoom;
            el.coordorigin = "0 0";
            var p = new Element(el, vml, group);

            p.shape = el;
            p.path = path;
            p.textpath = o;
            p.type = "text";
            p.attrs.text = Str(attrs.text || E);
            p.attrs.x = attrs.x;
            p.attrs.y = attrs.y;
            p.attrs.w = 1;
            p.attrs.h = 1;
            css && p.css && p.css(css, undefined, true);
            setFillAndStroke(p, attrs);
            applyCustomAttributes(p, attrs);

            el.appendChild(o);
            el.appendChild(path);

            return p;
        };

        R._engine.setSize = function (width, height) {
            var cs = this.canvas.style;
            this.width = width;
            this.height = height;
            width == +width && (width += "px");
            height == +height && (height += "px");
            width && (cs.width = width);
            height && (cs.height = height);
            cs.clip = "rect(0 " + cs.width + " " + cs.height + " 0)";
            if (this._viewBox) {
                R._engine.setViewBox.apply(this, this._viewBox);
            }
            return this;
        };
        R._engine.setViewBox = function (x, y, w, h, fit) {
            eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
            var width = this.width,
                height = this.height,
                size = 1 / mmax(w / width, h / height),
                H,
                W;
            if (fit) {
                H = height / h;
                W = width / w;
                if (w * H < width) {
                    x -= (width - w * H) / 2 / H;
                }
                if (h * W < height) {
                    y -= (height - h * W) / 2 / W;
                }
            }
            this._viewBox = [x, y, w, h, !!fit];
            this._viewBoxShift = {
                dx: -x,
                dy: -y,
                scale: size
            };
            this.forEach(function (el) {
                el.transform("...");
            });
            return this;
        };
        var createNode;
        R._engine.initWin = function (win) {
            var doc = win.document;
            doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
                createNode = R._createNode = function (tagName, attrs) {
                    var el = doc.createElement('<rvml:' + tagName + ' class="rvml">'),
                        prop;
                    for (prop in attrs) {
                        el[prop] = Str(attrs[prop]);
                    }
                    return el;
                };
            } catch (e) {
                createNode = R._createNode = function (tagName, attrs) {
                    var el = doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'),
                        prop;
                    for (prop in attrs) {
                        el[prop] = Str(attrs[prop]);
                    }
                    return el;
                };
            }
        };
        R._engine.initWin(R._g.win);
        R._engine.create = function () {
            var con = R._getContainer.apply(0, arguments),
                container = con.container,
                height = con.height,
                s,
                width = con.width,
                x = con.x,
                y = con.y;
            if (!container) {
                throw new Error("VML container not found.");
            }
            var res = new R._Paper(),
                c = res.canvas = R._g.doc.createElement("div"),
                cs = c.style;
            x = x || 0;
            y = y || 0;
            width = width || 512;
            height = height || 342;
            res.width = width;
            res.height = height;
            width == +width && (width += "px");
            height == +height && (height += "px");
            res.coordsize = zoom * 1e3 + S + zoom * 1e3;
            res.coordorigin = "0 0";
            c.id = "raphael-paper-" + res.id;
            res.span = R._g.doc.createElement("span");
            res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
            c.appendChild(res.span);
            cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;cursor:default;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
            if (container == 1) {
                R._g.doc.body.appendChild(c);
                cs.left = x + "px";
                cs.top = y + "px";
                cs.position = "absolute";
            } else {
                if (container.firstChild) {
                    container.insertBefore(c, container.firstChild);
                } else {
                    container.appendChild(c);
                }
            }
            res.renderfix = function () {};
            return res;
        };
        R.prototype.clear = function () {
            var c;
            eve("raphael.clear", this);
            while (c = this.bottom) {
                c.remove();
            }
            this.canvas.innerHTML = E;
            this.span = R._g.doc.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas.appendChild(this.span);
            this.bottom = this.top = null;
        };
        R.prototype.remove = function () {
            var i;
            eve("raphael.remove", this);
            while (i = this.bottom) {
                i.remove();
            }
            this.canvas.parentNode.removeChild(this.canvas);
            for (i in this) {
                this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
            }
            return true;
        };

        R.prototype.setHTMLClassName = function (className) {
            this._HTMLClassName = className;
        };
        // var setproto = R.st;
        // for (var method in elproto)
        //     if (elproto[has](method) && !setproto[has](method)) {
        //         setproto[method] = (function(methodname) {
        //             return function() {
        //                 var arg = arguments;
        //                 return this.forEach(function(el) {
        //                     el[methodname].apply(el, arg);
        //                 });
        //             };
        //         })(method);
        //     }
    }
};

var _raphael = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = exports["default"];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(7);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(9);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; }; /*jslint forin: true, regexp: true, todo: true, white: false, browser: true,
                                                                                                                                                                                                                                                                                                                                         sloppy: true, white: true, eqeq: false, newcap: true, nomen: true */

/*global FusionCharts */

/**
 * Raphael Canvas Extension
 */

exports['default'] = function (R) {
    if (R.canvas) {
        var win = R._g.win,
            doc = R._g.doc,
            g = R._g,
            STRING = 'string',
            PX = 'px',
            separator = /[, ]+/,
            Str = win.String,
            toInt = win.parseInt,
            toFloat = win.parseFloat,
            math = win.Math,
            mmax = math.max,
            mmin = math.min,
            pi = math.PI,
            mathFloor = math.floor,
            eve = R.eve,
            paperproto = R.fn,
            elproto = R.el,
            setproto = R.st,
            clone = R.clone,
            deg2rad = pi / 180,
            rad2deg = 180 / pi,
            DEFAULT_FILL = "#fff",
            DEFAULT_STROKE = "#000",
            has = "hasOwnProperty",
            S = " ",

        /** @todo: detect touch */
        supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints > 0,
            events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel".split(S),
            noHandle = false,
            $,
            FauxNode,
            Element,
            draggable = [],
            drag = [],
            dragMove = function dragMove(e) {
            var x = e.clientX,
                y = e.clientY,
                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                dragi,
                j = drag.length;
            while (j--) {
                dragi = drag[j];
                if (supportsTouch) {
                    var i = e.touches.length,
                        touch;
                    while (i--) {
                        touch = e.touches[i];
                        if (touch.identifier == dragi.el._drag.id) {
                            x = touch.clientX;
                            y = touch.clientY;
                            (e.originalEvent ? e.originalEvent : e).preventDefault();
                            break;
                        }
                    }
                } else {
                    e.preventDefault();
                }

                //var node = dragi.el.node;
                //o,
                //next = node.nextSibling,
                //parent = node.parentNode,
                //display = node.style.display;

                /** @todo: implement raphael.drag.over */

                //g.win.opera && parent.removeChild(node);
                //node.style.display = "none";
                //o = dragi.el.paper.getElementByPoint(x, y);
                //node.style.display = display;
                //g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
                //o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
                x += scrollX;
                y += scrollY;
                eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
            }
        },
            dragUp = function dragUp(e) {
            R.unmousemove(dragMove).unmouseup(dragUp);
            var i = drag.length,
                dragi;
            while (i--) {
                dragi = drag[i];
                dragi.el._drag = {};
                dragi.onendHandler && eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            }
            drag = [];
        };

        $ = R._createNode = function (el, attr) {
            if (attr) {
                if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === STRING) {
                    el = $(el);
                }
                for (var key in attr) {
                    if (attr.hasOwnProperty(key)) {
                        el.setAttribute(key, Str(attr[key]));
                    }
                }
            } else {
                el = doc.createElement(el);
            }
            return el;
        };

        R._getConnectedNodes = function (node) {
            return {
                above: [],
                below: []
            };
        };

        R._getTargetNode = function (coords) {
            var x = coords[0],
                y = coords[1];
        };

        R._containerEventHandler = function (event) {
            event = event || win.event;

            if (noHandle) {
                return;
            }

            /** @todo: do not use offsetX and offsetY */
            var x = event.offsetX,
                //mathFloor(event.pageX || (event.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft) || 0),
            y = event.offsetY,
                //mathFloor(event.pageY || (event.clientY + doc.body.scrollTop + doc.documentElement.scrollTop) || 0),
            type = event.type,
                node = R._getTargetNode([x, y]);

            //console.log(type + ":: x: " + x + " y: " + y);

            /*
            if (typeof node.listeners[type] === 'function') {
                node.listeners[type].call(node, e);
            }*/
        };

        FauxNode = function FauxNode(parent) {
            this.type = "basic";

            this.owner = parent;

            // Element reference needed to get attrs so that there is no need to
            // maintain a redundant copy.
            this._rElement = null;

            // False if this element does not need mouse interactivity.
            this.mouseInteractions = false;
            this.matrix = null;

            // An outline path that will be the outline of the shape or in case of
            // text the rect that bounds the text.
            this.outlinePath = null;

            this.conf = {};
        };

        FauxNode.prototype = {

            constructor: FauxNode,

            /**
             * This method does the complete rendering of the element, including
             * (re)setting the bbox and image map.
             *
             * @returns {_L10.FauxNode.prototype}
             */
            render: function render() {

                var o = this;

                o.draw();
                o.setBBox();

                return o;
            },

            /**
             * Applies the transforms and clipping to the context and draws the
             * element.
             *
             * @returns {undefined}
             */
            draw: function draw() {
                var o = this,
                    ctx = o.context,
                    el = o._rElement,
                    m = el.matrix,
                    isClipped = o.isClipped,
                    attrs = o.validateAttrs(),
                    cr,
                    end;

                // After the validation the attributes need to be set to the element
                // as validateAttrs works on a copy of the attrs object.
                el.attrs = attrs;

                ctx.save();

                ctx.fillStyle = attrs.fill;
                ctx.strokeStyle = attrs.stroke;
                ctx.lineWidth = attrs['stroke-width'];

                // Applying the clip before the context is transformed as is the case
                // in case of SVG.
                if (cr = attrs['clip-rect']) {
                    cr = cr.split(" ");
                    ctx.rect(cr[0], cr[1], cr[2], cr[3]);
                    ctx.clip();
                    isClipped = o.isClipped = true;
                }

                o.applyTransform(m);

                o.paint();

                ctx.restore();
            },

            /**
             * Parse the attributes provided to paint the element shape using the
             * canvas context.
             *
             * Overridden by individual derived FauxNodes
             */
            paint: function paint() {},

            /**
             * The redraw of the FauxNodes is to be handled by the CanvasObjectModel
             * instance as it involves redrawing all the elements corresponsing to
             * that canvas in the proper order.
             */
            redraw: function redraw() {
                this.COMInstance.redraw(this);
            },

            /**
             * Clears the rectangle corresponding to the bounding box of the node.
             */
            clear: function clear() {
                var o = this,
                    ctx = o.context,
                    bbox = o._bbox;

                /** @todo: while clearing the stroke-width also needs to be accounted for. */
                if (bbox) {
                    ctx.clearRect(bbox.x, bbox.y, bbox.width, bbox.height);
                }
            },

            /**
             * Creates the area node in the image map so that mouse interactivity
             * can be emulated using it.
             */
            addMouseInteractivity: function addMouseInteractivity() {
                var o = this,
                    attrs = o._rElement.attrs,
                    bbox = o._bbox,
                    map = o.owner.wrapper._map,
                    shape = o.type === 'circle' ? 'circle' : 'rect',
                    coords = shape === 'circle' ? [attrs.cx, attrs.cy, attrs.r].join(",") : [bbox.x, bbox.y, bbox.x2, bbox.y2].join(","),
                    area,
                    end;

                area = $('area', { shape: shape, coords: coords });
                if (map.firstChild) {
                    map.insertBefore(area, map.firstChild);
                } else {
                    map.appendChild(area);
                }

                /** @todo: should be put this check here */
                o._mouseArea = area;

                // Needed for paths.
                o.eventListeners = {};
            },

            /**
             * Update the coords of the area node (image map) corresponding to the FauxNode
             * after it has been modified by changing attributes.
             */
            updateMapAreaCoords: function updateMapAreaCoords() {
                var o = this,
                    oArea = o._mouseArea,
                    bbox = o._bbox;

                if (oArea) {
                    //o.context.strokeRect(bbox.x, bbox.y, bbox.width, bbox.height);
                    if (o instanceof CircleFauxNode) {
                        var r = bbox.width / 2;
                        oArea.setAttribute('coords', [bbox.x + r, bbox.y + r, r].join(","));
                    } else {
                        oArea.setAttribute('coords', [bbox.x, bbox.y, bbox.x2, bbox.y2].join(","));
                    }
                }
            },

            /**
             * Applies the transform given the transformation matrix to the context.
             *
             * @param {type} matrix
             * @param {type} bbox
             * @param {type} dontsetbbox
             *
             * @returns {_L10.FauxNode.prototype.transformBBox.tbox}
             */
            applyTransform: function applyTransform(m) {
                var o = this,
                    ctx = o.context,
                    split;

                if (m) {
                    split = m.split();
                    ctx.translate(split.dx, split.dy);
                    !split.noRotation && ctx.rotate(deg2rad * split.rotate);
                    ctx.scale(split.scalex, split.scaley);
                }
            },

            /**
             *
             */
            setBBox: function setBBox() {
                var o = this,
                    el = o._rElement,
                    m = el.matrix,
                    parent = o.owner,
                    pm = parent.getTransformMatrix && parent.getTransformMatrix();

                if (pm) {
                    pm = pm.clone();
                    pm.add(m);
                    m = pm;
                }

                if (o.outlinePath) {
                    o._bbox = R.pathBBox(R.transformPath(o.outlinePath, m.toTransformString()).toString());
                } else {
                    o.setShapeBBox(m);
                }

                o._mouseArea && o.updateMapAreaCoords();
            },

            getBBox: function getBBox() {
                return this._bbox;
            },

            drawPath: function drawPath(path) {
                var o = this,
                    ctx = o.context,
                    len = path && path.length || 0,
                    pp = PathParser,
                    i = 0,
                    command,
                    x,
                    y,
                    end;

                // The PathParser object has been borrowed from canvg. All 3rd party attributions implied.
                pp.reset();
                pp.setTokens(path);

                //var bb = new BoundingBox();
                if (ctx != null) {
                    ctx.beginPath();
                }

                while (!pp.isEnd()) {
                    pp.nextCommand();
                    switch (pp.command) {
                        case 'M':
                        case 'm':
                            var p = pp.getAsCurrentPoint();
                            pp.addMarker(p);
                            //bb.addPoint(p.x, p.y);
                            if (ctx != null) {
                                ctx.moveTo(p.x, p.y);
                            }
                            pp.start = pp.current;
                            while (!pp.isCommandOrEnd()) {
                                var p = pp.getAsCurrentPoint();
                                pp.addMarker(p, pp.start);
                                //bb.addPoint(p.x, p.y);
                                if (ctx != null) {
                                    ctx.lineTo(p.x, p.y);
                                }
                            }
                            break;
                        case 'L':
                        case 'l':
                            while (!pp.isCommandOrEnd()) {
                                var c = pp.current;
                                var p = pp.getAsCurrentPoint();
                                pp.addMarker(p, c);
                                //bb.addPoint(p.x, p.y);
                                if (ctx != null) {
                                    ctx.lineTo(p.x, p.y);
                                }
                            }
                            break;
                        case 'H':
                        case 'h':
                            while (!pp.isCommandOrEnd()) {
                                var newP = new Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
                                pp.addMarker(newP, pp.current);
                                pp.current = newP;
                                //bb.addPoint(pp.current.x, pp.current.y);
                                if (ctx != null) {
                                    ctx.lineTo(pp.current.x, pp.current.y);
                                }
                            }
                            break;
                        case 'V':
                        case 'v':
                            while (!pp.isCommandOrEnd()) {
                                var newP = new Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
                                pp.addMarker(newP, pp.current);
                                pp.current = newP;
                                //bb.addPoint(pp.current.x, pp.current.y);
                                if (ctx != null) {
                                    ctx.lineTo(pp.current.x, pp.current.y);
                                }
                            }
                            break;
                        case 'C':
                        case 'c':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var p1 = pp.getPoint();
                                var cntrl = pp.getAsControlPoint();
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, p1);
                                //bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) {
                                    ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                }
                            }
                            break;
                        case 'S':
                        case 's':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var p1 = pp.getReflectedControlPoint();
                                var cntrl = pp.getAsControlPoint();
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, p1);
                                //bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) {
                                    ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                }
                            }
                            break;
                        case 'Q':
                        case 'q':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var cntrl = pp.getAsControlPoint();
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, cntrl);
                                //bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                            break;
                        case 'T':
                        case 't':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var cntrl = pp.getReflectedControlPoint();
                                pp.control = cntrl;
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, cntrl);
                                //bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                            break;
                        case 'A':
                        case 'a':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var rx = pp.getScalar();
                                var ry = pp.getScalar();
                                var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
                                var largeArcFlag = pp.getScalar();
                                var sweepFlag = pp.getScalar();
                                var cp = pp.getAsCurrentPoint();

                                // Conversion from endpoint to center parameterization
                                // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                                // x1', y1'
                                var currp = new Point(Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0, -Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0);
                                // adjust radii
                                var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);
                                if (l > 1) {
                                    rx *= Math.sqrt(l);
                                    ry *= Math.sqrt(l);
                                }
                                // cx', cy'
                                var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));
                                if (isNaN(s)) s = 0;
                                var cpp = new Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
                                // cx, cy
                                var centp = new Point((curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
                                // vector magnitude
                                var m = function m(v) {
                                    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
                                };
                                // ratio between two vectors
                                var r = function r(u, v) {
                                    return (u[0] * v[0] + u[1] * v[1]) / (m(u) * m(v));
                                };
                                // angle between two vectors
                                var a = function a(u, v) {
                                    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(r(u, v));
                                };
                                // initial angle
                                var a1 = a([1, 0], [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry]);
                                // angle delta
                                var u = [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry];
                                var v = [(-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry];
                                var ad = a(u, v);
                                if (r(u, v) <= -1) ad = Math.PI;
                                if (r(u, v) >= 1) ad = 0;

                                // for markers
                                var dir = 1 - sweepFlag ? 1.0 : -1.0;
                                var ah = a1 + dir * (ad / 2.0);
                                var halfWay = new Point(centp.x + rx * Math.cos(ah), centp.y + ry * Math.sin(ah));
                                pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                                pp.addMarkerAngle(cp, ah - dir * Math.PI);

                                //bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
                                if (ctx != null) {
                                    var r = rx > ry ? rx : ry;
                                    var sx = rx > ry ? 1 : rx / ry;
                                    var sy = rx > ry ? ry / rx : 1;

                                    ctx.translate(centp.x, centp.y);
                                    ctx.rotate(xAxisRotation);
                                    ctx.scale(sx, sy);
                                    ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
                                    ctx.scale(1 / sx, 1 / sy);
                                    ctx.rotate(-xAxisRotation);
                                    ctx.translate(-centp.x, -centp.y);
                                }
                            }
                            break;
                        case 'Z':
                        case 'z':
                            if (ctx != null) ctx.closePath();
                            pp.current = pp.start;
                    }
                }

                o.outlinePath = path;

                return o;
            },

            /**
             * Methods to add and remove event listeners emulating the DOM of
             * standard browsers (and also the non-standard one).
             */
            addEventListener: function addEventListener() {
                var o = this,
                    args = arguments,
                    eventName = args && args[0],
                    handler = args && args[1],
                    area,
                    checkPathHandler,
                    end;

                if (!o._mouseArea) {
                    o.addMouseInteractivity();
                }

                area = o._mouseArea;

                if (typeof eventName === 'string' && typeof handler === 'function') {
                    /*
                    * If the shape has an associated path then we need to check if
                    * the mouse is within the co-ordinates of the path.
                    */
                    if (o._path) {

                        /*
                        * If the event being listened to is mouseover, mouseout or
                        * mousemove then the mouse position has to be constantly
                        * monitored and the event handler called explicitly when
                        * appropriate.
                        */
                        if (eventName === 'mouseover' || eventName === 'mouseout' || eventName === 'mousemove') {

                            if (!o._mousemoveAdded) {
                                var startListening = function (node) {

                                    var isInside = false,
                                        isOutside = true,
                                        transition = false;

                                    return function (event) {
                                        /** @todo: replace layerX and layerY with
                                         * standard ways of determining mouse position.
                                         */
                                        var x = event.layerX,
                                            y = event.layerY;

                                        transition = false;
                                        /*
                                        * Check if the current position of the mouse
                                        * pointer lies within the path or not.
                                        */
                                        if (R.isPointInsidePath(node._transformPath, x, y)) {
                                            /*
                                            * @todo: fix isPointInsidePath to return the
                                            * proper result when the mouse pointer is on
                                            * the same horizontal/vertical lines as one
                                            * of the vertices of the path.
                                            */
                                            isInside = true;
                                            if (isOutside) {
                                                isOutside = false;
                                                transition = true;
                                            }
                                        } else {
                                            isOutside = true;
                                            if (isInside) {
                                                isInside = false;
                                                transition = true;
                                            }
                                        }

                                        // Based on the state of the flags, fire the
                                        // appropriate event handlers.
                                        if (isOutside && transition && node.eventListeners['mouseout']) {
                                            node.eventListeners['mouseout'].apply(this, arguments);
                                        }
                                        if (isInside) {
                                            if (transition && node.eventListeners['mouseover']) {
                                                node.eventListeners['mouseover'].apply(this, arguments);
                                            }
                                            if (node.eventListeners['mousemove']) {
                                                node.eventListeners['mousemove'].apply(this, arguments);
                                            }
                                        }
                                    };
                                }(o);

                                area.addEventListener('mousemove', startListening, false);
                                o._mousemoveAdded = true;
                            }

                            o.eventListeners[eventName] = handler;
                        } else {
                            var checkPathHandler = function (node, handler) {
                                return function (event) {
                                    if (R.isPointInsidePath(node._path, event.layerX, event.layerY)) {
                                        handler.apply(this, arguments);
                                    }
                                };
                            }(o, handler);

                            area.addEventListener(eventName, checkPathHandler, false);
                        }
                    } else {
                        area.addEventListener(eventName, handler, false);
                    }
                }
            },

            removeEventListener: function removeEventListener() {
                var o = this,
                    args = arguments,
                    eventName = args && args[0],
                    handler = args && args[1],
                    area,
                    end;

                if (!o._mouseArea) {
                    return;
                }
                area = o._mouseArea;

                if (typeof eventName === 'string' && typeof handler === 'function') {
                    area.removeEventListener(eventName, handler);
                }
            },

            attachEvent: function attachEvent() {},

            detachEvent: function detachEvent() {},

            validateAttrs: function validateAttrs(attrs) {

                var o = this,
                    elAttrs = clone(o._rElement.attrs),
                    attr,
                    val;

                if (attrs === null) {
                    if (o._isValid) {
                        return elAttrs;
                    } else {
                        o._isValid = true;
                    }
                }

                attrs = attrs || elAttrs;

                for (attr in attrs) {
                    val = attrs[attr];

                    switch (attr) {

                        default:
                            continue;
                    }
                }

                return attrs;
            },

            attrs: function attrs() {}
        };

        var NodeListItem = function NodeListItem(node) {
            this.node = node;
            this.next = null;
            this.prev = null;
        },
            NodeList = function NodeList() {
            this.top = null;
            this.bottom = null;
        };

        NodeList.prototype = {

            constructor: NodeList,

            add: function add(node) {

                node = new NodeListItem(node);

                if (!this.bottom) {
                    this.bottom = node;
                }
                if (this.top) {
                    this.top.next = node;
                }
                node.next = null;
                node.prev = this.top;

                this.top = node;
            },

            addList: function addList(list) {
                if (!this.bottom) {
                    this.bottom = list.bottom;
                }

                if (this.top) {
                    this.top.next = list.bottom;
                    list.bottom.prev = this.top;
                }

                this.top = list.top;
            },

            toFront: function toFront(node) {
                if (this.top === node) {
                    return false;
                }

                if (this.bottom === node) {
                    this.bottom = node.next;
                }

                //var map = node.node.canvas._map,
                //    area = node.node._mouseArea;

                node.prev && (node.prev.next = node.next);
                node.next && (node.next.prev = node.prev);

                this.top.next = node;
                node.prev = this.top;
                node.next = null;

                this.top = node;

                /*if (map.firstChild) {
                    map.insertBefore(area, map.firstChild);
                }
                else {
                    map.appendChild(area);
                }
                 node.redraw();*/
            },

            toBack: function toBack(node) {
                if (this.bottom === node) {
                    return false;
                }

                if (this.top === node) {
                    this.top = node.prev;
                }

                //var map = node.canvas._map,
                //    area = node._mouseArea;

                node.prev && (node.prev.next = node.next);
                node.next && (node.next.prev = node.prev);

                this.bottom.prev = node;
                node.prev = null;
                node.next = this.bottom;

                this.bottom = node;

                /*map.appendChild(area);
                 node.redraw();*/
            },

            insertBefore: function insertBefore() {},

            insertAfter: function insertAfter() {},

            each: function each(fn, args) {
                var item = this.bottom;

                while (item) {
                    fn.apply(item.node, args);
                    item = item.next;
                }
            },

            iterate: function iterate(fn, args) {
                var item = this.bottom,
                    retVal = true;

                while (item) {
                    retVal = fn.apply(item.node, args);

                    if (retVal === false) {
                        break;
                    }

                    item = item.next;
                }
            },

            dispose: function dispose() {

                this.each(function () {
                    this.node.dispose && this.node.dispose();
                });

                this.top = null;
                this.bottom = null;
            }
        };

        /**
         *
            ncowner, a NodeCollection that corresponds to the collection of which
            the layer neing created  is a part
             above, a NodeCollection iterator, that indicated the collection the layer has to be rendered. If
            not provided then this is the first layer of ncowner.
        */
        var CanvasLayer = function CanvasLayer(ncowner, canvas) {
            this.items = new NodeList();

            this.owner = ncowner;
            //this.above = above;
            this.element = null;

            if (canvas) {
                this.element = canvas;
            } else {
                this.init();
            }
        };

        CanvasLayer.prototype = {
            constructor: CanvasLayer,

            appendChild: function appendChild() {
                var o = this,
                    ownerWrapper = o.owner.wrapper,
                    ele = this.element;

                if (ownerWrapper._image) {
                    ownerWrapper.insertBefore(ele, ownerWrapper._image);
                } else {
                    ownerWrapper.appendChild(ele);
                }
            },

            insertBefore: function insertBefore() {},

            insertAfter: function insertAfter() {},

            init: function init() {
                this.element = $("canvas");
                // CHECKPOINT: width and height in %?
                $(this.element, {
                    width: this.owner.wrapper.offsetWidth,
                    height: this.owner.wrapper.offsetHeight
                });

                this.element.style.cssText = "position:absolute;left:0;top:0;";

                this.appendChild();
            },

            getCanvas: function getCanvas() {
                return this.element;
            },

            getContext: function getContext() {
                return this.element.getContext('2d');
            },

            addToLayer: function addToLayer(node) {
                this.items.add(node);
            },

            mergeWithLayerOnTop: function mergeWithLayerOnTop(layerObj) {
                this.items.addList(layerObj.items);
                layerObj.dispose(true);
            },

            mergeWithLayerOnBottom: function mergeWithLayerOnBottom(layerObj) {
                layerObj.items.addList(this.items);
                this.items = layerObj.items;
                layerObj.dispose(true);
            },

            dispose: function dispose(softDispose) {

                if (!softDispose) {
                    this.items.each(function () {
                        this.dispose();
                    });
                }

                this.items = null;
                this.owner = null;

                this.element.parentNode.removeChild(this.element);
                this.element = null;
            }
        };

        var NodeCollection = function NodeCollection(parent, wrapper, canvas) {

            this.nodeItems = new NodeList();
            this.collectionItems = new NodeList();
            this.layerItems = new NodeList();

            this.owner = this.parent = parent;
            this.layerOnTop = null;

            this.currentLayer = null;
            this.baseLayer = null;

            if (wrapper) {
                this.wrapper = wrapper;
                this.currentLayer = this.baseLayer = new CanvasLayer(this, canvas);
            } else {
                this.init();
            }
        };

        NodeCollection.prototype = {
            constructor: NodeCollection,

            init: function init() {

                var o = this,
                    parent = o.parent,
                    imageMap = parent.wrapper._image,
                    wrapper = $("div");

                // Hacky but need a refernce to the image map to addEventListeners.
                wrapper.style.cssText = "width:100%;height:100%;position:absolute;left:0;top:0;";

                wrapper._map = parent.wrapper._map;

                if (imageMap) {
                    parent.wrapper.insertBefore(wrapper, imageMap);
                } else {
                    parent.wrapper.appendChild(wrapper);
                }

                o.wrapper = wrapper;
                o.currentLayer = o.baseLayer = new CanvasLayer(o);
            },

            getCurrentContext: function getCurrentContext() {
                return this.currentLayer.getContext();
            },

            setLayerOnTop: function setLayerOnTop(layerObj) {
                this.layerOnTop = layerObj;
            },

            getCurrentCanvas: function getCurrentCanvas() {
                return this.currentLayer.getCanvas();
            },

            addNode: function addNode(node) {
                this.nodeItems.add(node);

                if (node.type === "group") {
                    this.addCollection(node);
                } else {
                    this.currentLayer.addToLayer(node);
                }
            },

            addCollection: function addCollection(collectionNode) {

                collectionNode = collectionNode || new NodeCollection(this);

                this.collectionItems.add(collectionNode);
                this.currentLayer = new CanvasLayer(this);
                this.layerItems.add(this.currentLayer);
                collectionNode.setLayerOnTop(this.currentLayer);
            },

            dispose: function dispose() {
                this.nodeItems.dispose();
                this.collectionItems.dispose();
                this.layerItems.dispose();
                this.owner = this.parent = null;

                this.ownerLayer = null;
                this.currentLayer = null;
                this.baseLayer = null;
            }
        };

        /**
         * The CanvasObjectModel will be a layer of abstraction above the individual
         * FauxNodes created to emulate the DOM in case of canvas rendering.
         * The engine will be the point of contact for Raphael._engine that will be
         * the direct consumer of the FauxNodes.
         */
        var CanvasObjectModel = function CanvasObjectModel(cnvs, wrpr, width, height) {

            var com = this,
                root = new NodeCollection(null, wrpr, cnvs);

            //root.set

            com.width = width;
            com.height = height;

            com.createNode = function (type, parent) {

                parent = parent || root;

                var node,
                    nodeItems = parent.nodeItems,
                    layer = parent.currentLayer,
                    canvasEle = layer.getCanvas();

                switch (type) {
                    case 'rect':
                        node = new RectFauxNode(parent);
                        break;

                    case 'circle':
                        node = new CircleFauxNode(parent);
                        break;

                    case 'path':
                        node = new PathFauxNode(parent);
                        break;

                    case 'text':
                        node = new TextFauxNode(parent);
                        break;

                    case 'group':
                        node = new GroupFauxNode(parent);
                        parent.addCollection(node);
                        break;

                    default:
                        node = new FauxNode(canvasEle);
                }

                node.COMInstance = this;
                nodeItems.add(node);
                layer.addToLayer(node);

                return node;
            };

            /**
             * This method is needed to redraw a node. Redraw is to be handled at the
             * COM level as redrawing one node needs all the (connected) nodes to be
             * redrawn in the right order.
             *
             * @param {type} node The node that needs to be redrawn.
             *
             * @returns {undefined}
             */
            com.redraw = function (node) {

                // Check if node is a group or a shape.
                var nodeList, childNode, layer;

                if (node.type === "group") {
                    nodeList = node.nodeItems;
                    node.render();
                } else {

                    layer = node.layer;
                    nodeList = layer.items;
                    childNode = nodeList.bottom;

                    // Clear the canvas.
                    layer.element.width = layer.element.width;

                    while (childNode) {
                        fNode = childNode.node;
                        fNode.type !== "group" && fNode.render();
                        childNode = childNode.next;
                    }
                }
            };

            com.insertBefore = function (node) {};

            com.insertAfter = function (node) {};

            com.removeNode = function (node) {};

            com.refreshNode = function (node) {};

            com.refreshAll = function () {};
        };

        Point = function Point(x, y) {
            this.x = x;
            this.y = y;
        };

        Point.prototype.angleTo = function (p) {
            return Math.atan2(p.y - this.y, p.x - this.x);
        };

        Point.prototype.applyTransform = function (v) {
            var xp = this.x * v[0] + this.y * v[2] + v[4];
            var yp = this.x * v[1] + this.y * v[3] + v[5];
            this.x = xp;
            this.y = yp;
        };

        PathParser = new function () {

            this.tokens = null;

            this.setTokens = function (d) {
                if (typeof d === 'string') {
                    this.tokens = d.split(' ');
                } else {
                    this.tokens = d;
                }
            };

            this.reset = function () {
                this.i = -1;
                this.command = '';
                this.previousCommand = '';
                this.start = new Point(0, 0);
                this.control = new Point(0, 0);
                this.current = new Point(0, 0);
                this.points = [];
                this.angles = [];
            };

            this.isEnd = function () {
                return this.i >= this.tokens.length - 1;
            };

            this.isCommandOrEnd = function () {
                if (this.isEnd()) {
                    return true;
                }

                return this.tokens[this.i + 1].toString().match(/^[A-Za-z]$/) != null;
            };

            this.isRelativeCommand = function () {
                switch (this.command) {
                    case 'm':
                    case 'l':
                    case 'h':
                    case 'v':
                    case 'c':
                    case 's':
                    case 'q':
                    case 't':
                    case 'a':
                    case 'z':
                        return true;
                        break;
                }
                return false;
            };

            this.getToken = function () {
                this.i++;
                return this.tokens[this.i];
            };

            this.getScalar = function () {
                return parseFloat(this.getToken());
            };

            this.nextCommand = function () {
                this.previousCommand = this.command;
                this.command = this.getToken();
            };

            this.getPoint = function () {
                var p = new Point(this.getScalar(), this.getScalar());
                return this.makeAbsolute(p);
            };

            this.getAsControlPoint = function () {
                var p = this.getPoint();
                this.control = p;
                return p;
            };

            this.getAsCurrentPoint = function () {
                var p = this.getPoint();
                this.current = p;
                return p;
            };

            this.getReflectedControlPoint = function () {
                if (this.previousCommand.toLowerCase() != 'c' && this.previousCommand.toLowerCase() != 's' && this.previousCommand.toLowerCase() != 'q' && this.previousCommand.toLowerCase() != 't') {
                    return this.current;
                }

                // reflect point
                var p = new Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
                return p;
            };

            this.makeAbsolute = function (p) {
                if (this.isRelativeCommand()) {
                    p.x += this.current.x;
                    p.y += this.current.y;
                }
                return p;
            };

            this.addMarker = function (p, from, priorTo) {
                // if the last angle isn't filled in because we didn't have this point yet ...
                if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length - 1] == null) {
                    this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(priorTo);
                }
                this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
            };

            this.addMarkerAngle = function (p, a) {
                this.points.push(p);
                this.angles.push(a);
            };

            this.getMarkerPoints = function () {
                return this.points;
            };

            this.getMarkerAngles = function () {
                for (var i = 0; i < this.angles.length; i++) {
                    if (this.angles[i] == null) {
                        for (var j = i + 1; j < this.angles.length; j++) {
                            if (this.angles[j] != null) {
                                this.angles[i] = this.angles[j];
                                break;
                            }
                        }
                    }
                }
                return this.angles;
            };
        }();

        /**
         * The FauxNode is the adapter written to give DOM node like handling to the
         * shapes that are create using canvas object model.
         */

        RectFauxNode = function RectFauxNode(parentObj) {
            this.type = "rect";
            this._isValid = false;

            this.parent = this.owner = parentObj;
            this.context = parentObj.getCurrentContext();
            this.layer = parentObj.currentLayer;
        };

        RectFauxNode.prototype = R.extend(new FauxNode(), {

            constructor: RectFauxNode,

            paint: function paint() {

                var o = this,
                    ctx = o.context,

                // CHECKPOINT 3. Rename validateAttrs to getValidAttrs?
                attrs = o.validateAttrs(),
                    x = attrs.x,
                    y = attrs.y,
                    w = attrs.width,
                    h = attrs.height,
                    r = attrs.r,

                /** @todo: provide support for rx, ry */
                rx = r || attrs.rx,
                    ry = r || attrs.ry;

                if (attrs.r) {
                    path = ["M", x + rx, y, "L", x + w - rx, y].concat(["A", rx, ry, 0, 0, 1, x + w, y + ry]).concat(["L", x + w, y + h - ry]).concat(["A", rx, ry, 0, 0, 1, x + w - rx, y + h]).concat(["L", x + rx, y + h]).concat(["A", rx, ry, 0, 0, 1, x, y + h - ry]).concat(["L", x, y + ry]).concat(["A", rx, ry, 0, 0, 1, x + rx, y, "Z"]);
                } else {
                    path = ["M", x, y, "H", x + w, "V", y + h, "H", x, "V", y, "Z"];
                }

                o.drawPath(path);

                if (attrs['stroke-width']) {
                    var strokeAlpha = attrs['stroke-opacity'] === undefined ? attrs['opacity'] : attrs['stroke-opacity'];
                    if (strokeAlpha !== undefined) {
                        ctx.globalAlpha = strokeAlpha;
                    }
                    ctx.stroke();
                }
                var fillAlpha = attrs['fill-opacity'] === undefined ? attrs['opacity'] : attrs['fill-opacity'];
                if (fillAlpha !== undefined) {
                    ctx.globalAlpha = fillAlpha;
                }
                ctx.fill();

                return;
            },

            validateAttrs: function validateAttrs(attrs) {
                var o = this,
                    elAttrs = clone(o._rElement.attrs),
                    attr,
                    val;

                if (attrs === null) {
                    if (o._isValid) {
                        return elAttrs;
                    } else {
                        o._isValid = true;
                    }
                }

                attrs = attrs || elAttrs;

                for (attr in attrs) {
                    val = attrs[attr];

                    switch (attr) {
                        case "r":
                            var w = elAttrs.width,
                                h = elAttrs.height,
                                maxR = mmin(w, h) / 2;

                            if (val > maxR) {
                                attrs.r = maxR;
                            }

                            if (val < 0) {
                                attrs.r = 0;
                            }
                            break;

                        case "width":
                        case "height":
                            if (val < 0) {
                                attrs[attr] = 0;
                            };
                            break;

                        default:
                            continue;
                    }
                }

                return attrs;
            },

            setShapeBBox: function setShapeBBox(m) {
                var o = this,
                    el = o._rElement,
                    attrs = el.attrs,
                    sX = m.get(0),
                    sY = m.get(3),
                    tX = m.get(4),
                    tY = m.get(5),
                    strokeW = attrs['stroke-width'];

                o._bbox = {
                    x: attrs.x * sX + tX - strokeW,
                    y: attrs.y * sY + tY - strokeW,
                    width: attrs.width * sX + 2 * strokeW,
                    height: attrs.height * sY + 2 * strokeW
                };

                o._bbox.x2 = o._bbox.x + o._bbox.width;
                o._bbox.y2 = o._bbox.y + o._bbox.height;

                o.X = o._bbox.x;
                o.Y = o._bbox.y;
                o.W = o._bbox.width;
                o.H = o._bbox.height;
            }
        });

        var CircleFauxNode = function CircleFauxNode(parentObj) {
            this.type = "circle";
            this._isValid = false;

            this.parent = this.owner = parentObj;
            this.context = parentObj.getCurrentContext();
            this.layer = parentObj.currentLayer;
        },
            PathFauxNode = function PathFauxNode(parentObj) {
            this.type = "path";
            this._isValid = false;

            this.parent = this.owner = parentObj;
            this.context = parentObj.getCurrentContext();
            this.layer = parentObj.currentLayer;
        },
            TextFauxNode = function TextFauxNode(parentObj) {
            this.type = "text";
            this._isValid = false;

            this.parent = this.owner = parentObj;
            this.context = parentObj.getCurrentContext();
            this.layer = parentObj.currentLayer;
        },
            GroupFauxNode = function GroupFauxNode(parent, width, height) {

            this.type = "group";

            this.nodeItems = new NodeList();
            this.collectionItems = new NodeList();
            this.layerItems = new NodeList();

            this.owner = this.parent = parent;
            this.layerOnTop = parent.currentLayer;

            this.currentLayer = null;
            this.baseLayer = null;

            this.init();
        };

        CircleFauxNode.prototype = R.extend(new FauxNode(), {

            constructor: CircleFauxNode,

            paint: function paint() {
                var o = this,
                    ctx = o.context,
                    attrs = o.validateAttrs(),
                    x = attrs.cx,
                    y = attrs.cy,
                    r = attrs.r,

                /** @todo: provide support for rx, ry */
                rx = r || attrs.rx,
                    ry = r || attrs.ry;

                if (attrs.r) {

                    o.drawPath(["M", x + r, y, "A", rx, ry, 0, 1, 0, x - r, y, "A", rx, ry, 0, 1, 0, x + r, y, "Z"]);

                    if (attrs['stroke-width']) {
                        var strokeAlpha = attrs['stroke-opacity'] === undefined ? attrs['opacity'] : attrs['stroke-opacity'];
                        if (strokeAlpha !== undefined) {
                            ctx.globalAlpha = strokeAlpha;
                        }
                        ctx.stroke();
                    }
                    var fillAlpha = attrs['fill-opacity'] === undefined ? attrs['opacity'] : attrs['fill-opacity'];
                    if (fillAlpha !== undefined) {
                        ctx.globalAlpha = fillAlpha;
                    }
                    ctx.fill();
                }

                return;
            },

            setShapeBBox: function setShapeBBox(m) {
                var o = this,
                    el = o._rElement,
                    attrs = el.attrs,
                    sX = m.get(0),
                    sY = m.get(3),
                    tX = m.get(4),
                    tY = m.get(5),
                    strokeW = attrs['stroke-width'];

                o._bbox = {
                    x: tX + (attrs.cx - attrs.r) * sX - strokeW,
                    y: tY + (attrs.cy - attrs.r) * sY - strokeW,
                    width: 2 * (strokeW + attrs.r * sX),
                    height: 2 * (attrs.r * sY + strokeW)
                };

                o._bbox.x2 = o._bbox.x + o._bbox.width;
                o._bbox.y2 = o._bbox.y + o._bbox.height;

                o.X = o._bbox.x;
                o.Y = o._bbox.y;
                o.W = o._bbox.width;
                o.H = o._bbox.height;
            }
        });

        PathFauxNode.prototype = R.extend(new FauxNode(), {

            constructor: PathFauxNode,

            paint: function paint() {
                var o = this,
                    el = o._rElement,
                    attrs = el.attrs,
                    path = el.attr('path'),
                    m = el.matrix,
                    ctx = o.context;

                // 1. Get the path from the path attribute
                // 2. Accept paths in different array formats.
                // 3. Optimize as this can potentially be a huge pain-point.
                // 4. Draw path mapping M,L,H,V etc to canvas APIs
                o.drawPath(path);
                o._transformPath = R.transformPath(path, m.toTransformString());

                var strokeAlpha = attrs['stroke-opacity'] === undefined ? attrs['opacity'] : attrs['stroke-opacity'];
                if (strokeAlpha !== undefined) {
                    ctx.globalAlpha = strokeAlpha;
                }
                ctx.stroke();
                var fillAlpha = attrs['fill-opacity'] === undefined ? attrs['opacity'] : attrs['fill-opacity'];
                if (fillAlpha !== undefined) {
                    ctx.globalAlpha = fillAlpha;
                }
                ctx.fill();

                return;
            }
        });

        TextFauxNode.prototype = R.extend(new FauxNode(), {

            constructor: TextFauxNode,

            paint: function paint() {
                var o = this,
                    el = o._rElement,
                    attrs = el.attr(),
                    text = attrs['text'],
                    stroke = attrs['stroke'],
                    valign = attrs['vertical-align'],
                    halign = attrs['text-anchor'],
                    x = attrs['x'],
                    y = attrs['y'],
                    m = el.matrix,
                    ctx = o.context,
                    path;

                // apply the font styles, if any

                // find the dimensions of the text using the given styles.
                // All the dimensions should be present in the attrs user provided OR default.
                var fontSize = attrs['font-size'] || 10,
                    lineHeight = attrs['line-height'] || toInt(fontSize, 10) * 1.2,
                    fontArr = ["normal", fontSize, attrs['font']];

                // draw the text.
                ctx.fillStyle = stroke;
                ctx.font = fontArr.join(" ");

                if (text) {
                    var texts = Str(text).split(/\n|<br\s*?\/?>/ig),
                        totalHeight = texts.length * lineHeight,
                        totalWidth = -Infinity,
                        startX = Infinity,
                        startY,
                        width,
                        textX,
                        textY;

                    if (valign === "top") {
                        startY = y + lineHeight;
                    } else if (valign === "middle") {
                        startY = y - totalHeight / 2 + lineHeight / 2;
                    } else {
                        // valign is bottom.
                        startY = y - totalHeight + lineHeight;
                    }

                    for (var i = 0, ii = texts.length; i < ii; i += 1) {

                        text = texts[i];
                        textY = startY + lineHeight * i;
                        width = ctx.measureText(text).width;

                        if (halign === "start") {
                            textX = x;
                        } else if (halign === "middle") {
                            textX = x - width / 2;
                        } else {
                            textX = x - width;
                        }

                        totalWidth = mmax(totalWidth, width);
                        startX = mmin(startX, textX);

                        ctx.fillText(text, textX, textY);
                    }

                    el._textdirty = false;
                }

                o.outlinePath = ["M", startX, startY - lineHeight / 1.4, "H", startX + totalWidth, "V", startY - lineHeight + totalHeight, "H", startX, "V", startY - lineHeight / 1.4];

                return;
            }
        });

        GroupFauxNode.prototype = R.extend(R.extend(new FauxNode(), NodeCollection.prototype), {

            constructor: GroupFauxNode,

            draw: function draw() {

                // Clear the group canvas first.
                this.layerItems.each(function () {
                    this.element.width = this.element.width;
                });

                FauxNode.prototype.draw.apply(this, arguments);
            },

            /**
             * This method does the complete rendering of the element, including
             * (re)setting the bbox and image map.
             *
             * @returns {_L10.FauxNode.prototype}
             */
            render: function render() {

                var o = this;

                o.draw();
                o.setBBox();

                return o;
            },

            paint: function paint() {
                var o = this,
                    list = o.nodeList,
                    el = o._rElement,
                    canvas = o.canvas,
                    attrs = el.attrs,
                    childNode = list.bottom;

                /** @todo: Clean this up */
                if (attrs.opacity !== undefined) {
                    this.layerItems.each(function () {
                        this.getContext().globalAlpha = attrs.opacity;
                    });
                }

                while (childNode) {
                    childNode.render();
                    childNode = childNode.next;
                }
            },

            setBBox: function setBBox() {},

            addMouseInteractivity: function addMouseInteractivity() {},

            applyTransform: function applyTransform(m) {
                var o = this,
                    parent = o.parent,
                    parentMatrix = parent.getTransformMatrix && parent.getTransformMatrix();

                // Parent is a group element with a transformation applied to it.
                if (parentMatrix) {
                    o.matrixApplied = parentMatrix.clone();
                    o.matrixApplied.add(m.a, m.b, m.c, m.d, m.e, m.f);
                } else {
                    o.matrixApplied = m;
                }

                this.layerItems.each(function () {
                    FauxNode.prototype.applyTransform.apply(this, [o.matrixApplied]);
                });
            },

            getTransformMatrix: function getTransformMatrix() {
                return this.matrixApplied;
            }
        });

        Element = function Element(node, paper, group) {
            var o = this,
                parent = group || paper;

            o.node = o[0] = node;
            node.raphael = true;
            node.raphaelid = o.id = R._oid++;
            node._rElement = o;

            o.X = 0;
            o.Y = 0;

            o.attrs = o.attrs || {};
            o.styles = o.styles || {};
            o.followers = o.followers || [];

            o.paper = paper;
            o.com = parent.com;

            o.ca = o.customAttributes = o.customAttributes || new paper._CustomAttributes();

            o.matrix = R.matrix();
            o._ = {
                transform: [],
                sx: 1,
                sy: 1,
                dx: 0,
                dy: 0,
                deg: 0
            };

            o.parent = parent;
            !parent.bottom && (parent.bottom = o);

            o.prev = parent.top || null;
            parent.top && (parent.top.next = o);
            parent.top = o;
            o.next = null;
        };

        Element.prototype = elproto;
        elproto.constructor = Element;

        var repaint = function repaint(el, finalAttrs, positionChanged, dimensionChanged) {

            var node = getNode(el),
                preC = R._getConnectedNodes(node),
                attrs = el.attrs,
                elAbove = preC.above,
                elBelow = preC.below,
                len,
                attr,
                i;

            for (attr in finalAttrs) {
                attrs[attr] = finalAttrs[attr];
            }

            node.redraw();
        },
            setFillAndStroke = function setFillAndStroke(el, params) {

            var attrs = el.attrs,
                node = el.node,
                finalAttrs = {},
                att,
                val,
                needsRepaint = false,
                positionChanged = false,
                dimensionChanged = false,
                i;

            for (att in params) {
                if (params[has](att)) {
                    if (!R._availableAttrs[has](att)) {
                        continue;
                    }
                    val = params[att];

                    switch (att) {

                        case 'fill-opacity':
                        case 'opacity':
                        case 'stroke-opcaity':
                        case 'stroke':
                        case 'fill':
                            finalAttrs[att] = val;
                            needsRepaint = true;
                            break;

                        case 'stroke-width':
                        case "cx":
                        case "cy":
                        case "x":
                        case "y":
                            finalAttrs[att] = val;
                            positionChanged = true;
                            break;

                        case "width":
                        case "height":
                            finalAttrs[att] = val;
                            dimensionChanged = true;
                            break;

                        case "clip-rect":
                            finalAttrs[att] = val;
                            needsRepaint = true;
                            break;

                        case "font-size":
                        case "font":
                        case "vertical-align":
                        case "text-anchor":
                            finalAttrs[att] = val;
                            needsRepaint = true;

                        default:
                            continue;
                    }
                }
            }

            tuneText(el, params, finalAttrs);

            finalAttrs = node.validateAttrs(finalAttrs);

            if (needsRepaint || positionChanged || dimensionChanged) {
                repaint(el, finalAttrs, positionChanged, dimensionChanged);
            }
        },
            leading = 1.2,
            tuneText = function tuneText(el, params, finalAttrs) {
            if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y") || params[has]("line-height") || params[has]("vertical-align"))) {
                return;
            }

            var a = el.attr(),
                fontSize = params['font-size'] || a['font-size'] || 10,
                lineHeight = toFloat(params['line-height'] || a['line-height']) || toInt(fontSize, 10) * leading,
                valign = params["vertical-align"] || a["vertical-align"] || "middle";

            if (isNaN(lineHeight)) {
                lineHeight = fontSize * leading;
            }

            finalAttrs['font-size'] = toInt(fontSize, 10) + "px";
            finalAttrs['font'] = params['font'] || a['font'] || 'Verdana';
            finalAttrs['vertical-align'] = valign;
            finalAttrs['x'] = params['x'] || a['x'] || 0;
            finalAttrs['y'] = params['y'] || a['y'] || 0;
            finalAttrs['line-height'] = toInt(lineHeight, 10);
            finalAttrs['text-anchor'] = params['text-anchor'] || a['text-anchor'] || 'middle';
        };

        R._engine.initWin = function (win) {
            win = win;
            doc = win.document;
        };

        R._engine.setSize = function (w, h) {
            var paper = this,
                cs = paper.canvas.style;

            cs.width = (paper.width = +w || paper.width) + PX;
            cs.height = (paper.height = +h || paper.height) + PX;
            /** @todo call setViewBox from setSize() */
            return paper;
        };
        /** @todo implement setViewBox() */
        R._engine.create = function () {
            var con = R._getContainer.apply(0, arguments) || {},
                container = con.container,
                x = con.x,
                y = con.y,
                width = con.width,
                height = con.height,

            //handler = R._containerEventHandler,
            wrapper,
                cssText,
                image,
                mmap,
                i,
                paper,
                canvas;

            if (!container) {
                throw new Error("Canvas container not found.");
            }

            paper = new R._Paper();
            paper.canvas = wrapper = $("div");

            x = x || 0;
            y = y || 0;
            paper.width = width = width || 512;
            paper.height = height = height || 342;
            paper.left = paper.top = 0;

            if (container == 1) {
                wrapper.style.cssText = cssText + R.format(";width:100%;height:100%;position:absolute;left:{0}px;top:{1}px;", [x, y]);
                doc.body.appendChild(wrapper);
            } else {
                wrapper.style.cssText = cssText + ";width:100%;height:100%;position:absolute";
                if (container.firstChild) {
                    container.insertBefore(wrapper, container.firstChild);
                } else {
                    container.appendChild(wrapper);
                }
            }

            cssText = "overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);" + "-webkit-user-select:none;-moz-user-select:-moz-none;" + "-khtml-user-select:none;-ms-user-select:none;user-select:none;" + "-o-user-select:none;cursor:default;" + R.format("width:{0}px;height:{1}px;", [width, height]);

            // Create the canvas element and set it to occupy full space. Retain a
            // reference to its context.
            canvas = $("canvas");
            canvas.style.cssText = "position:absolute;left:0;top:0";
            canvas.setAttribute('width', paper.width);
            canvas.setAttribute('height', paper.height);

            paper.com = new CanvasObjectModel(canvas, wrapper, paper.width, paper.height);

            wrapper.appendChild(canvas);

            image = $("img");

            // Easter egg idea! :)
            image.src = "image1.png";

            image.style.cssText = "opacity: 0;z-index: 100;background: transparent;position: absolute;left: 0;top: 0;width: " + width + "px;height: " + height + "px";
            wrapper.appendChild(image);

            mmap = $("map");

            mmap.setAttribute("name", "mousemap");
            mmap.setAttribute("id", "mousemap"); // Needed for FF.

            wrapper.appendChild(mmap);

            image.setAttribute("usemap", "#mousemap");
            wrapper._image = image;
            wrapper._map = mmap;

            return paper;
        };

        var getNode = R._engine.getNode = function (el) {
            return el.node || el[0].node;
        };

        R._engine.getLastNode = function (el) {
            return el.node || el[el.length - 1].node;
        };

        R._engine.rect = function (paper, x, y, w, h, r, group) {

            var node = paper.com.createNode('rect', group && group.node),
                el = new Element(node, paper, group),
                attrs = el.attrs;

            attrs.x = x;
            attrs.y = y;
            attrs.width = w;
            attrs.height = h;
            attrs.fill = "#fff";
            attrs.stroke = "#000";
            attrs['stroke-width'] = 1;
            attrs.r = r || 0;
            attrs.rx = r || 0;
            attrs.ry = r || 0;

            el.type = "rect";

            node.render();
            return el;
        };

        R._engine.circle = function (paper, x, y, r, group) {
            var node = paper.com.createNode('circle', group && group.node),
                el = new Element(node, paper, group),
                attrs = el.attrs;

            attrs.cx = x;
            attrs.cy = y;
            attrs.r = r;
            attrs.fill = 'none';
            attrs.stroke = '#000';
            attrs['stroke-width'] = 1;

            el.type = "circle";

            node.render();
            return el;
        };

        R._engine.ellipse = function (paper, x, y, rx, ry, group) {
            var node = new FauxNode(),
                el = new Element(node, paper, group);

            el.type = "ellipse";
            return el;
        };

        R._engine.image = function (paper, src, x, y, w, h, group) {
            var node = new FauxNode(),
                el = new Element(node, paper, group);

            el.type = "image";
            return el;
        };

        R._engine.text = function (paper, x, y, text, group) {
            var node = paper.com.createNode('text', group && group.node),
                el = new Element(node, paper, group),
                attrs = el.attrs;

            attrs.x = x;
            attrs.y = y;
            attrs.text = text;
            attrs.fill = 'none';
            attrs.stroke = '#000';
            attrs.font = 'Verdana';
            attrs['font-size'] = '12px';
            attrs['vertical-align'] = 'middle';
            attrs['text-anchor'] = 'middle';

            el.type = "text";
            node.render();
            return el;
        };

        R._engine.path = function (pathString, paper, group) {
            var node = paper.com.createNode('path', group && group.node),
                el = new Element(node, paper, group),
                attrs = el.attrs;

            attrs.path = pathString;
            attrs.fill = "#fff";
            attrs.stroke = "#000";
            attrs['stroke-width'] = 1;

            el.type = "path";

            node.render();

            return el;
        };

        R._engine.group = function (paper, id, group) {

            var node = paper.com.createNode('group', group && group.node),
                el = new Element(node, paper, group),
                wrapper = node.wrapper;

            id && wrapper.setAttribute('class', ['red', id].join('-'));

            el.canvas = wrapper;

            //(group && group.canvas.appendChild(wrapper)) || paper.canvas.appendChild(wrapper);

            el.type = "group";
            return el;
        };

        elproto._getBBox = function () {
            if (this.removed) {
                return {};
            }

            return {
                x: this.X + (this.bbx || 0) - this.W / 2,
                y: this.Y + (this.bby || 0) - this.H / 2,
                width: this.W,
                height: this.H
            };
        };

        /***** ELEMENT REORDERING / RESTRUCTING *****/

        elproto.toFront = function () {
            if (this.removed) {
                return this;
            }

            var o = this,
                thisNode = o.node,
                parent = o.parent,
                parentNode = thisNode.owner,
                followers = o.followers,
                follower,
                i,
                ii;

            if (R._tofront(o, parent)) {
                if (elproto.type === "group") {
                    parent.canvas.appendChild(thisNode);
                } else {
                    parentNode.nodeList.tofront(thisNode);
                }
            }

            for (i = 0, ii = followers.length; i < ii; i++) {
                (follower = followers[i]).stalk && follower.el[follower.stalk](o);
            }

            return o;
        };

        elproto.toBack = function () {
            if (this.removed) {
                return this;
            }

            var o = this,
                thisNode = o.node,
                parent = o.parent,
                parentNode = thisNode.owner,
                followers = o.followers,
                follower,
                i,
                ii;

            if (R._toback(o, parent)) {
                if (elproto.type === "group") {
                    parent.canvas.appendChild(thisNode);
                } else {
                    parentNode.nodeList.toback(thisNode);
                }
            }

            for (i = 0, ii = followers.length; i < ii; i++) {
                (follower = followers[i]).stalk && follower.el[follower.stalk](o);
            }

            return o;
        };

        elproto.insertAfter = function (element) {
            if (this.removed) {
                return this;
            }

            var o = this,
                thisNode = o.node,
                thatNode = element.node,
                parentNode = thatNode.owner,
                followers = o.followers,
                follower,
                i,
                ii;

            if (thatNode.next) {
                parentNode.nodeList.insertBefore(thisNode, thatNode.next);
            } else {
                parentNode.appendChild(thisNode);
            }

            R._insertafter(o, element, o.parent, element.parent);

            for (i = 0, ii = followers.length; i < ii; i++) {
                (follower = followers[i]).stalk && follower.el[follower.stalk](element);
            }

            return o;
        };

        elproto.insertBefore = function (element) {
            if (this.removed) {
                return this;
            }

            var o = this,
                thisNode = o.node,
                thatNode = element.node,
                parentNode = thatNode.owner,
                followers = o.followers,
                follower,
                i,
                ii;

            if (thatNode) {
                parentNode.nodeList.insertBefore(thisNode, thatNode);
            } else {
                parentNode.appendChild(thisNode);
            }

            R._insertafter(o, element, o.parent, element.parent);

            for (i = 0, ii = followers.length; i < ii; i++) {
                (follower = followers[i]).stalk && follower.el[follower.stalk](element);
            }

            return o;
        };

        elproto.appendChild = function (element) {
            return this;
        };

        elproto.removeChild = function (element) {
            return this;
        };

        /***** ELEMENT REORDERING / RESTRUCTING *****/

        elproto.attr = function (name, value) {
            if (this.removed) {
                return this;
            }

            var o = this,
                attrs = o.attrs,
                ca = o.ca,
                names,
                params,
                par,
                res,
                key,
                out,
                subkey,
                delkeys,
                follower,
                ii,
                i;

            // fetch a copy of all attributes
            if (name == null) {
                res = {};
                for (key in attrs) {
                    if (attrs.hasOwnProperty(key)) {
                        res[key] = attrs[key];
                    }
                }res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                res.transform = o._.transform;
                /** @todo res.visibility = o.node.style.display === "none" ? "hidden" : "visible"; */
                return res;
            }

            // fetch a single value
            if (value == null && R.is(name, "string")) {
                if (name == "fill" && attrs.fill == "none" && attrs.gradient) {
                    return attrs.gradient;
                }
                if (name == "transform") {
                    return o._.transform;
                }
                /** @todo if (name == "visibility") {
                    return this.node.style.display === "none" ? "hidden" : "visible";
                }*/

                names = name.split(separator), out = {};

                for (i = 0, ii = names.length; i < ii; i++) {
                    name = names[i];
                    if (name in attrs) {
                        out[name] = attrs[name];
                    } else if (R.is(ca[name], "function")) {
                        out[name] = ca[name].def;
                    } else {
                        out[name] = R._availableAttrs[name];
                    }
                }
                return ii - 1 ? out : out[names[0]];
            }

            // fetch specific attributes
            if (value == null && R.is(name, "array")) {
                out = {};
                for (i = 0, ii = name.length; i < ii; i++) {
                    out[name[i]] = o.attr(name[i]);
                }
                return out;
            }

            // prepare setter params
            if (value != null) {
                params = {};
                params[name] = value;
            } else if (name != null && R.is(name, "object")) {
                params = name;
            }

            if (R.stopEvent !== false) {
                for (key in params) {
                    eve("raphael.attr." + key + "." + o.id, o, params[key], key);
                }
            }

            delkeys = {};
            for (key in ca) {

                if (ca[key] && params.hasOwnProperty(key) && R.is(ca[key], "function") && !ca['_invoked' + key]) {

                    ca['_invoked' + key] = true; // prevent recursion
                    par = ca[key].apply(o, [].concat(params[key]));
                    delete ca['_invoked' + key];

                    for (subkey in par) {
                        if (par.hasOwnProperty(subkey)) {
                            params[subkey] = par[subkey];
                        }
                    }
                    attrs[key] = params[key];
                    if (par === false) {
                        delkeys[key] = params[key];
                        delete params[key];
                    }
                }
            }

            setFillAndStroke(this, params);

            for (i = 0, ii = o.followers.length; i < ii; i++) {
                follower = o.followers[i];
                follower.cb && !follower.cb.call(follower.el, params, o) || follower.el.attr(params);
            }

            for (subkey in delkeys) {
                params[subkey] = delkeys[subkey];
            }
            return this;
        };

        /**************** Drag *********************/
        elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {

            function start(e) {
                (e.originalEvent || e).preventDefault();
                var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                    scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
                this._drag.x = e.clientX + scrollX;
                this._drag.y = e.clientY + scrollY;
                this._drag.id = e.identifier;
                !drag.length && R.mousemove(dragMove).mouseup(dragUp);
                drag.push({
                    el: this,
                    move_scope: move_scope,
                    start_scope: start_scope,
                    end_scope: end_scope,
                    onmoveHandler: onmove,
                    onstartHandler: onstart,
                    onendHandler: onend
                });
                onstart && eve.on("raphael.drag.start." + this.id, onstart);
                onmove && eve.on("raphael.drag.move." + this.id, onmove);
                onend && eve.on("raphael.drag.end." + this.id, onend);
                onstart && eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
            }
            this._drag = {};
            draggable.push({
                el: this,
                start: start
            });
            this.mousedown(start);
            return this;
        };

        elproto.undrag = function () {
            var i = draggable.length;
            while (i--) {
                if (draggable[i].el == this) {
                    this.unmousedown(draggable[i].start);
                    draggable.splice(i, 1);
                    eve.unbind("raphael.drag.*." + this.id);
                }
            }!draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
        };

        /***************** Drag *****************/
        /************ TRANSFORMATIONS *************/

        elproto.rotate = function (deg, cx, cy) {

            var o = this,
                bbox;
            if (o.removed) {
                return o;
            }
            deg = Str(deg).split(separator);
            if (deg.length - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                bbox = o.getBBox(1);
                cx = bbox.x + bbox.width / 2;
                cy = bbox.y + bbox.height / 2;
            }
            o.transform(o._.transform.concat([["r", deg, cx, cy]]));
            return o;
        };

        elproto.scale = function (sx, sy, cx, cy) {
            var o = this,
                bbox;
            if (o.removed) {
                return o;
            }
            sx = Str(sx).split(separator);
            if (sx.length - 1) {
                sy = toFloat(sx[1]);
                cx = toFloat(sx[2]);
                cy = toFloat(sx[3]);
            }
            sx = toFloat(sx[0]);
            sy == null && (sy = sx);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                bbox = o.getBBox(1);
            }
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
            o.transform(o._.transform.concat([["s", sx, sy, cx, cy]]));

            return o;
        };

        elproto.translate = function (dx, dy) {
            var o = this;
            if (o.removed) {
                return o;
            }
            dx = Str(dx).split(separator);
            if (dx.length - 1) {
                dy = toFloat(dx[1]);
            }
            dx = toFloat(dx[0]) || 0;
            dy = +dy || 0;
            o.transform(o._.transform.concat([["t", dx, dy]]));

            return o;
        };

        elproto.transform = function (tstr) {

            var o = this,
                _ = o._,
                sw;

            if (tstr === null) {
                return _.transform;
            }

            R._extractTransform(o, tstr);

            /** @todo: what changes to be made here in the context of canvas */
            /*o.clip && !_.clipispath && $(o.clip, {
                transform: o.matrix.invert()
            });
            o.pattern && updatePosition(o); */
            if (_.sx != 1 || _.sy != 1) {
                sw = o.attrs[has]("stroke-width") ? o.attrs["stroke-width"] : 1;
                o.attr({
                    "stroke-width": sw
                });
            }

            o.node && o.node.redraw();

            return o;
        };

        /************ TRANSFORMATIONS *************/

        elproto.hide = function () {
            return this;
        };

        elproto.show = function () {
            return this;
        };

        elproto.on = function (eventType, handler) {
            var el = this,
                listeners = el.listeners;

            if (!listeners) {
                listeners = el.listeners = {};
            }

            if (!listeners[eventType]) {
                listeners[eventType] = [];
            }

            listeners[eventType].push(handler);
        };

        elproto.remove = function () {
            return this;
        };

        paperproto.clear = function () {
            eve("raphael.clear", this);
            return this;
        };

        paperproto.remove = function () {
            if (this.removed) {
                return;
            }

            var paper = this,
                canvas = paper.canvas,
                pn = canvas.parentNode,
                i;

            eve("raphael.remove", paper);
            pn.removeChild(canvas);

            for (i in paper) {
                paper[i] = typeof paper[i] == "function" ? R._removedFactory(i) : null;
            }

            this.removed = true;
        };

        R.toString = function () {
            return "Your browser supports canvas.\nYou are running RedRaphael " + R.version;
        };

        for (var method in elproto) {
            if (elproto.hasOwnProperty(method) && !setproto.hasOwnProperty(method)) {
                setproto[method] = function (methodname) {
                    return function () {
                        var arg = arguments;
                        return this.forEach(function (el) {
                            el[methodname].apply(el, arg);
                        });
                    };
                }(method);
            }
        };
    }
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=raphael.js.map