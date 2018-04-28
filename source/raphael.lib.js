/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
let UNDEF,
    BLANK = '__blank',
    nullStr = '\u2400',
    E = '',
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
        var i, len, arg;
        for (i = 0, len = array.length, arg = new Array(len); i < len; i++) {
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
var cacher = function (f, scope, postprocessor, key, maxCache, sharedCache, firstArgKey) {
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
    function cachedfunction (arg1) {
        var args = firstArgKey ? arg1 : getArrayCopy(arguments).join(nullStr),
            newEndStr,
            // newEnd,
            cur,
            // __next,
            // __prev,
            // nextStr,
            oldEnd,
            oldStart;

        args = args === E ? BLANK : args;
        // /** **** Cache hit ******/
        // // If the following condition is true it is a cache hit.
        // if (args in cache) {
        //     // cur is the element due to cache hit
        //     cur = cache[args];
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
        //         cache.__start.__prev = args; // present start node's previous pointer should point to the cur node

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
        //     cache[args] = {
        //         __prev: null,
        //         __next: cache.__start // newNode's __next pointer should point to the present start
        //     };
        //     // If there is a function then call the function to get the results
        //     f && (cache[args][key] = postprocessor ? postprocessor(f.apply(scope, arguments)) : f.apply(scope, arguments));

        //     // If start is present(start can be null if it is first node), point start.__prev to the new object
        //     if (cache.__start !== null) {
        //         cache.__start.__prev = args; // The present start node will fall second.
        //     }
        //     // finally assign start to the new node as start always points to the node at front
        //     cache.__start = cache[args];
        //     // In case newNode is the first node of the cache end will also be null, but it should point to the start.
        //     (cache.__end === null) && (cache.__end = args);
        //     count++;
        // }
        // cur is the element due to cache hit
        cur = cache[args];
        if (!cur) { /** ***** Cache miss *******/
            /* ----- insertion process begins here ----- */
            // create a new node and finally assign the new node as start as it should always points to the node at front
            cur = cache.__start = cache[args] = {};
            // If there is a function then call the function to get the results
            f && (cache[args][key] = postprocessor ? postprocessor(f.apply(scope, arguments)) : f.apply(scope, arguments));
            // In case newNode is the first node of the cache end will also be null, but it should point to the start.
            (cache.__end === null) && (cache.__end = args);
            // increase the counter
            count++;
            /* ----- deletion process begins here -----
            *  deletion takes place if cache is full 
            */
            if (count > maxCache && cache.__end) {
                oldEnd = cache.__end;
                // update the end pointer
                cache.__end = cache[oldEnd].__prev;
                // __next pointer of the second last element should be deleted.
                cache[newEndStr].__next = cache[oldEnd].next;
                // delete the node
                delete cache[cache.__end];
                count--; // decrement the counter
            }
        } else { // hit then conect the prev and next of hit to each other
            if (cur.__prev) {
                cache[cur.__prev].__next = cur.__next;
                cur.__next && (cur.__next.__prev = cur.__prev);
            }
        }
        // this is not the start element then set it as the start element
        oldStart = cache.__start;
        if (oldStart !== cur) {
            cur.__prev = null;
            cur.__next = oldStart;
            oldStart && (oldStart.__prev = args);
        }
        return cache[args][key];
    }
    return cachedfunction;
};

export {merge, getArrayCopy, dashedAttr2CSSMap, loadRefImage, showRecursively, cacher};
