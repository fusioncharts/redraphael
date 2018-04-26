/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
let UNDEF,
    BLANK = 'blank',
    arrayToStr = '[object Array]',
    objectToStr = '[object Object]',
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
    loadRefImage = function (element, attrs) {
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
    showRecursively = function (el) {
        var origAttrTree = {},
            currentEl = el,
            currentNode = origAttrTree,
            fn = function () {
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
    checkCyclicRef = function (obj, parentArr) {
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
    getArrayCopy = function (array) {
        for (var i = 0, len = array.length, arg = new Array(len); i < len; i++) {
            arg[i] = array[i];
        }
        return arg;
    },
    merge = function (obj1, obj2, skipUndef, tgtArr, srcArr) {
        var item,
            srcVal,
            tgtVal,
            str,
            cRef;
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

                if (typeof tgtVal !== 'object') {
                    if (!(skipUndef && tgtVal === UNDEF)) {
                        obj1[item] = tgtVal;
                    }
                } else {
                    if (srcVal === null || typeof srcVal !== 'object') {
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

                if (tgtVal !== null && typeof tgtVal === 'object') {
                    // Fix for issue BUG: FWXT-602
                    // IE < 9 Object.prototype.toString.call(null) gives
                    // '[object Object]' instead of '[object Null]'
                    // that's why null value becomes Object in IE < 9
                    str = Object.prototype.toString.call(tgtVal);
                    if (str === objectToStr) {
                        if (srcVal === null || typeof srcVal !== 'object') {
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
export default function (obj1, obj2, skipUndef, shallow) {
    var item;
    // if none of the arguments are object then return back
    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
        return null;
    }

    if (typeof obj2 !== 'object' || obj2 === null) {
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
}

export {merge, getArrayCopy, BLANK, dashedAttr2CSSMap, loadRefImage, showRecursively};
