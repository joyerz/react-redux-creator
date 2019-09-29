module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/io-427945dd.js":
/*!***********************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/io-427945dd.js ***!
  \***********************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a0, a1, a2, a3, a4, a5, a6, a7, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return effectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return takeMaybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return putResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return asyncIteratorSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return shouldTerminate; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);

var noop = function noop() {};

if ( true && typeof Proxy !== 'undefined') {
  noop =
  /*#__PURE__*/
  new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"], {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"];
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"];
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["multicast"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(action): argument action is undefined');
    }
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["undef"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"];
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"] && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"], 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["buffer"], "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"], "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"], createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__["default"]);




/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js ***!
  \**********************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return takeLeading$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./io-427945dd.js */ "./node_modules/@redux-saga/core/dist/io-427945dd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["a1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["X"]; });

/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};
function safeName(patternOrChannel) {
  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return 'channel';
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["stringableFunc"])(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["q"])(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["M"])(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["O"])(pattern, Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["K"])(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["V"])({
      action: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel),
      debounce: Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["c"])(patternOrChannel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a pattern or channel");
  Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeEvery$1, patternOrChannel, worker);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}
function takeLatest$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLatest$1, patternOrChannel, worker);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}
function takeLeading$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLeading$1, patternOrChannel, worker);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}
function throttle$1(ms, pattern, worker) {
  if (true) {
    Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["c"])(pattern, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a pattern');
    Object(_io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a saga parameter');
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [throttle, ms, pattern, worker].concat(args));
}
function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return _io_427945dd_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}




/***/ }),

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js ***!
  \***************************************************************/
/*! exports provided: array, buffer, channel, effect, func, iterable, iterator, multicast, notUndef, number, object, observable, pattern, promise, sagaAction, string, stringableFunc, symbol, task, undef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func", function() { return func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterable", function() { return iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notUndef", function() { return notUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaAction", function() { return sagaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringableFunc", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undef", function() { return undef; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]];
};




/***/ }),

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js ***!
  \*************************************************************************/
/*! exports provided: CANCEL, CHANNEL_END_TYPE, IO, MATCH, MULTICAST, SAGA_ACTION, SAGA_LOCATION, SELF_CANCELLATION, TASK, TASK_CANCEL, TERMINATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END_TYPE", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTICAST", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return SAGA_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINATE", function() { return TERMINATE; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js ***!
  \**************************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["effectTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["putResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeMaybe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["retry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLeading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/seamless-immutable/seamless-immutable.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/seamless-immutable/seamless-immutable.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  "use strict";

function immutableInit(config) {

  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L21
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element');
  var REACT_ELEMENT_TYPE_FALLBACK = 0xeac7;

  var globalConfig = {
    use_static: false
  };
  if (isObject(config)) {
      if (config.use_static !== undefined) {
          globalConfig.use_static = Boolean(config.use_static);
      }
  }

  function isObject(data) {
    return (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      data !== null
    );
  }

  function instantiateEmptyObject(obj) {
      var prototype = Object.getPrototypeOf(obj);
      if (!prototype) {
          return {};
      } else {
          return Object.create(prototype);
      }
  }

  function addPropertyTo(target, methodName, value) {
    Object.defineProperty(target, methodName, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value
    });
  }

  function banProperty(target, methodName) {
    addPropertyTo(target, methodName, function() {
      throw new ImmutableError("The " + methodName +
        " method cannot be invoked on an Immutable data structure.");
    });
  }

  var immutabilityTag = "__immutable_invariants_hold";

  function addImmutabilityTag(target) {
    addPropertyTo(target, immutabilityTag, true);
  }

  function isImmutable(target) {
    if (typeof target === "object") {
      return target === null || Boolean(
        Object.getOwnPropertyDescriptor(target, immutabilityTag)
      );
    } else {
      // In JavaScript, only objects are even potentially mutable.
      // strings, numbers, null, and undefined are all naturally immutable.
      return true;
    }
  }

  function isEqual(a, b) {
    // Avoid false positives due to (NaN !== NaN) evaluating to true
    return (a === b || (a !== a && b !== b));
  }

  function isMergableObject(target) {
    return target !== null && typeof target === "object" && !(Array.isArray(target)) && !(target instanceof Date);
  }

  var mutatingObjectMethods = [
    "setPrototypeOf"
  ];

  var nonMutatingObjectMethods = [
    "keys"
  ];

  var mutatingArrayMethods = mutatingObjectMethods.concat([
    "push", "pop", "sort", "splice", "shift", "unshift", "reverse"
  ]);

  var nonMutatingArrayMethods = nonMutatingObjectMethods.concat([
    "map", "filter", "slice", "concat", "reduce", "reduceRight"
  ]);

  var mutatingDateMethods = mutatingObjectMethods.concat([
    "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
    "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes",
    "setUTCMonth", "setUTCSeconds", "setYear"
  ]);

  function ImmutableError(message) {
    this.name = 'MyError';
    this.message = message;
    this.stack = (new Error()).stack;
  }
  ImmutableError.prototype = new Error();
  ImmutableError.prototype.constructor = Error;

  function makeImmutable(obj, bannedMethods) {
    // Tag it so we can quickly tell it's immutable later.
    addImmutabilityTag(obj);

    if (true) {
      // Make all mutating methods throw exceptions.
      for (var index in bannedMethods) {
        if (bannedMethods.hasOwnProperty(index)) {
          banProperty(obj, bannedMethods[index]);
        }
      }

      // Freeze it and return it.
      Object.freeze(obj);
    }

    return obj;
  }

  function makeMethodReturnImmutable(obj, methodName) {
    var currentMethod = obj[methodName];

    addPropertyTo(obj, methodName, function() {
      return Immutable(currentMethod.apply(obj, arguments));
    });
  }

  function arraySet(idx, value, config) {
    var deep          = config && config.deep;

    if (idx in this) {
      if (deep && this[idx] !== value && isMergableObject(value) && isMergableObject(this[idx])) {
        value = Immutable.merge(this[idx], value, {deep: true, mode: 'replace'});
      }
      if (isEqual(this[idx], value)) {
        return this;
      }
    }

    var mutable = asMutableArray.call(this);
    mutable[idx] = Immutable(value);
    return makeImmutableArray(mutable);
  }

  var immutableEmptyArray = Immutable([]);

  function arraySetIn(pth, value, config) {
    var head = pth[0];

    if (pth.length === 1) {
      return arraySet.call(this, head, value, config);
    } else {
      var tail = pth.slice(1);
      var thisHead = this[head];
      var newValue;

      if (typeof(thisHead) === "object" && thisHead !== null) {
        // Might (validly) be object or array
        newValue = Immutable.setIn(thisHead, tail, value);
      } else {
        var nextHead = tail[0];
        // If the next path part is a number, then we are setting into an array, else an object.
        if (nextHead !== '' && isFinite(nextHead)) {
          newValue = arraySetIn.call(immutableEmptyArray, tail, value);
        } else {
          newValue = objectSetIn.call(immutableEmptyObject, tail, value);
        }
      }

      if (head in this && thisHead === newValue) {
        return this;
      }

      var mutable = asMutableArray.call(this);
      mutable[head] = newValue;
      return makeImmutableArray(mutable);
    }
  }

  function makeImmutableArray(array) {
    // Don't change their implementations, but wrap these functions to make sure
    // they always return an immutable value.
    for (var index in nonMutatingArrayMethods) {
      if (nonMutatingArrayMethods.hasOwnProperty(index)) {
        var methodName = nonMutatingArrayMethods[index];
        makeMethodReturnImmutable(array, methodName);
      }
    }

    if (!globalConfig.use_static) {
      addPropertyTo(array, "flatMap",  flatMap);
      addPropertyTo(array, "asObject", asObject);
      addPropertyTo(array, "asMutable", asMutableArray);
      addPropertyTo(array, "set", arraySet);
      addPropertyTo(array, "setIn", arraySetIn);
      addPropertyTo(array, "update", update);
      addPropertyTo(array, "updateIn", updateIn);
      addPropertyTo(array, "getIn", getIn);
    }

    for(var i = 0, length = array.length; i < length; i++) {
      array[i] = Immutable(array[i]);
    }

    return makeImmutable(array, mutatingArrayMethods);
  }

  function makeImmutableDate(date) {
    if (!globalConfig.use_static) {
      addPropertyTo(date, "asMutable", asMutableDate);
    }

    return makeImmutable(date, mutatingDateMethods);
  }

  function asMutableDate() {
    return new Date(this.getTime());
  }

  /**
   * Effectively performs a map() over the elements in the array, using the
   * provided iterator, except that whenever the iterator returns an array, that
   * array's elements are added to the final result instead of the array itself.
   *
   * @param {function} iterator - The iterator function that will be invoked on each element in the array. It will receive three arguments: the current value, the current index, and the current object.
   */
  function flatMap(iterator) {
    // Calling .flatMap() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    var result = [],
        length = this.length,
        index;

    for (index = 0; index < length; index++) {
      var iteratorResult = iterator(this[index], index, this);

      if (Array.isArray(iteratorResult)) {
        // Concatenate Array results into the return value we're building up.
        result.push.apply(result, iteratorResult);
      } else {
        // Handle non-Array results the same way map() does.
        result.push(iteratorResult);
      }
    }

    return makeImmutableArray(result);
  }

  /**
   * Returns an Immutable copy of the object without the given keys included.
   *
   * @param {array} keysToRemove - A list of strings representing the keys to exclude in the return value. Instead of providing a single array, this method can also be called by passing multiple strings as separate arguments.
   */
  function without(remove) {
    // Calling .without() with no arguments is a no-op. Don't bother cloning.
    if (typeof remove === "undefined" && arguments.length === 0) {
      return this;
    }

    if (typeof remove !== "function") {
      // If we weren't given an array, use the arguments list.
      var keysToRemoveArray = (Array.isArray(remove)) ?
         remove.slice() : Array.prototype.slice.call(arguments);

      // Convert numeric keys to strings since that's how they'll
      // come from the enumeration of the object.
      keysToRemoveArray.forEach(function(el, idx, arr) {
        if(typeof(el) === "number") {
          arr[idx] = el.toString();
        }
      });

      remove = function(val, key) {
        return keysToRemoveArray.indexOf(key) !== -1;
      };
    }

    var result = instantiateEmptyObject(this);

    for (var key in this) {
      if (this.hasOwnProperty(key) && remove(this[key], key) === false) {
        result[key] = this[key];
      }
    }

    return makeImmutableObject(result);
  }

  function asMutableArray(opts) {
    var result = [], i, length;

    if(opts && opts.deep) {
      for(i = 0, length = this.length; i < length; i++) {
        result.push(asDeepMutable(this[i]));
      }
    } else {
      for(i = 0, length = this.length; i < length; i++) {
        result.push(this[i]);
      }
    }

    return result;
  }

  /**
   * Effectively performs a [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over the elements in the array, expecting that the iterator function
   * will return an array of two elements - the first representing a key, the other
   * a value. Then returns an Immutable Object constructed of those keys and values.
   *
   * @param {function} iterator - A function which should return an array of two elements - the first representing the desired key, the other the desired value.
   */
  function asObject(iterator) {
    // If no iterator was provided, assume the identity function
    // (suggesting this array is already a list of key/value pairs.)
    if (typeof iterator !== "function") {
      iterator = function(value) { return value; };
    }

    var result = {},
        length = this.length,
        index;

    for (index = 0; index < length; index++) {
      var pair  = iterator(this[index], index, this),
          key   = pair[0],
          value = pair[1];

      result[key] = value;
    }

    return makeImmutableObject(result);
  }

  function asDeepMutable(obj) {
    if (
      (!obj) ||
      (typeof obj !== 'object') ||
      (!Object.getOwnPropertyDescriptor(obj, immutabilityTag)) ||
      (obj instanceof Date)
    ) { return obj; }
    return Immutable.asMutable(obj, {deep: true});
  }

  function quickCopy(src, dest) {
    for (var key in src) {
      if (Object.getOwnPropertyDescriptor(src, key)) {
        dest[key] = src[key];
      }
    }

    return dest;
  }

  /**
   * Returns an Immutable Object containing the properties and values of both
   * this object and the provided object, prioritizing the provided object's
   * values whenever the same key is present in both objects.
   *
   * @param {object} other - The other object to merge. Multiple objects can be passed as an array. In such a case, the later an object appears in that list, the higher its priority.
   * @param {object} config - Optional config object that contains settings. Supported settings are: {deep: true} for deep merge and {merger: mergerFunc} where mergerFunc is a function
   *                          that takes a property from both objects. If anything is returned it overrides the normal merge behaviour.
   */
  function merge(other, config) {
    // Calling .merge() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    if (other === null || (typeof other !== "object")) {
      throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(other));
    }

    var receivedArray = (Array.isArray(other)),
        deep          = config && config.deep,
        mode          = config && config.mode || 'merge',
        merger        = config && config.merger,
        result;

    // Use the given key to extract a value from the given object, then place
    // that value in the result object under the same key. If that resulted
    // in a change from this object's value at that key, set anyChanges = true.
    function addToResult(currentObj, otherObj, key) {
      var immutableValue = Immutable(otherObj[key]);
      var mergerResult = merger && merger(currentObj[key], immutableValue, config);
      var currentValue = currentObj[key];

      if ((result !== undefined) ||
        (mergerResult !== undefined) ||
        (!currentObj.hasOwnProperty(key)) ||
        !isEqual(immutableValue, currentValue)) {

        var newValue;

        if (mergerResult !== undefined) {
          newValue = mergerResult;
        } else if (deep && isMergableObject(currentValue) && isMergableObject(immutableValue)) {
          newValue = Immutable.merge(currentValue, immutableValue, config);
        } else {
          newValue = immutableValue;
        }

        if (!isEqual(currentValue, newValue) || !currentObj.hasOwnProperty(key)) {
          if (result === undefined) {
            // Make a shallow clone of the current object.
            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
          }

          result[key] = newValue;
        }
      }
    }

    function clearDroppedKeys(currentObj, otherObj) {
      for (var key in currentObj) {
        if (!otherObj.hasOwnProperty(key)) {
          if (result === undefined) {
            // Make a shallow clone of the current object.
            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
          }
          delete result[key];
        }
      }
    }

    var key;

    // Achieve prioritization by overriding previous values that get in the way.
    if (!receivedArray) {
      // The most common use case: just merge one object into the existing one.
      for (key in other) {
        if (Object.getOwnPropertyDescriptor(other, key)) {
          addToResult(this, other, key);
        }
      }
      if (mode === 'replace') {
        clearDroppedKeys(this, other);
      }
    } else {
      // We also accept an Array
      for (var index = 0, length = other.length; index < length; index++) {
        var otherFromArray = other[index];

        for (key in otherFromArray) {
          if (otherFromArray.hasOwnProperty(key)) {
            addToResult(result !== undefined ? result : this, otherFromArray, key);
          }
        }
      }
    }

    if (result === undefined) {
      return this;
    } else {
      return makeImmutableObject(result);
    }
  }

  function objectReplace(value, config) {
    var deep          = config && config.deep;

    // Calling .replace() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    if (value === null || typeof value !== "object") {
      throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(value));
    }

    return Immutable.merge(this, value, {deep: deep, mode: 'replace'});
  }

  var immutableEmptyObject = Immutable({});

  function objectSetIn(path, value, config) {
    if (!(Array.isArray(path)) || path.length === 0) {
      throw new TypeError("The first argument to Immutable#setIn must be an array containing at least one \"key\" string.");
    }

    var head = path[0];
    if (path.length === 1) {
      return objectSet.call(this, head, value, config);
    }

    var tail = path.slice(1);
    var newValue;
    var thisHead = this[head];

    if (this.hasOwnProperty(head) && typeof(thisHead) === "object" && thisHead !== null) {
      // Might (validly) be object or array
      newValue = Immutable.setIn(thisHead, tail, value);
    } else {
      newValue = objectSetIn.call(immutableEmptyObject, tail, value);
    }

    if (this.hasOwnProperty(head) && thisHead === newValue) {
      return this;
    }

    var mutable = quickCopy(this, instantiateEmptyObject(this));
    mutable[head] = newValue;
    return makeImmutableObject(mutable);
  }

  function objectSet(property, value, config) {
    var deep          = config && config.deep;

    if (this.hasOwnProperty(property)) {
      if (deep && this[property] !== value && isMergableObject(value) && isMergableObject(this[property])) {
        value = Immutable.merge(this[property], value, {deep: true, mode: 'replace'});
      }
      if (isEqual(this[property], value)) {
        return this;
      }
    }

    var mutable = quickCopy(this, instantiateEmptyObject(this));
    mutable[property] = Immutable(value);
    return makeImmutableObject(mutable);
  }

  function update(property, updater) {
    var restArgs = Array.prototype.slice.call(arguments, 2);
    var initialVal = this[property];
    return Immutable.set(this, property, updater.apply(initialVal, [initialVal].concat(restArgs)));
  }

  function getInPath(obj, path) {
    /*jshint eqnull:true */
    for (var i = 0, l = path.length; obj != null && i < l; i++) {
      obj = obj[path[i]];
    }

    return (i && i == l) ? obj : undefined;
  }

  function updateIn(path, updater) {
    var restArgs = Array.prototype.slice.call(arguments, 2);
    var initialVal = getInPath(this, path);

    return Immutable.setIn(this, path, updater.apply(initialVal, [initialVal].concat(restArgs)));
  }

  function getIn(path, defaultValue) {
    var value = getInPath(this, path);
    return value === undefined ? defaultValue : value;
  }

  function asMutableObject(opts) {
    var result = instantiateEmptyObject(this), key;

    if(opts && opts.deep) {
      for (key in this) {
        if (this.hasOwnProperty(key)) {
          result[key] = asDeepMutable(this[key]);
        }
      }
    } else {
      for (key in this) {
        if (this.hasOwnProperty(key)) {
          result[key] = this[key];
        }
      }
    }

    return result;
  }

  // Creates plain object to be used for cloning
  function instantiatePlainObject() {
    return {};
  }

  // Finalizes an object with immutable methods, freezes it, and returns it.
  function makeImmutableObject(obj) {
    if (!globalConfig.use_static) {
      addPropertyTo(obj, "merge", merge);
      addPropertyTo(obj, "replace", objectReplace);
      addPropertyTo(obj, "without", without);
      addPropertyTo(obj, "asMutable", asMutableObject);
      addPropertyTo(obj, "set", objectSet);
      addPropertyTo(obj, "setIn", objectSetIn);
      addPropertyTo(obj, "update", update);
      addPropertyTo(obj, "updateIn", updateIn);
      addPropertyTo(obj, "getIn", getIn);
    }

    return makeImmutable(obj, mutatingObjectMethods);
  }

  // Returns true if object is a valid react element
  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L326
  function isReactElement(obj) {
    return typeof obj === 'object' &&
           obj !== null &&
           (obj.$$typeof === REACT_ELEMENT_TYPE_FALLBACK || obj.$$typeof === REACT_ELEMENT_TYPE);
  }

  function isFileObject(obj) {
    return typeof File !== 'undefined' &&
           obj instanceof File;
  }

  function isBlobObject(obj) {
    return typeof Blob !== 'undefined' &&
           obj instanceof Blob;
  }

  function isPromise(obj) {
    return typeof obj === 'object' &&
           typeof obj.then === 'function';
  }

  function isError(obj) {
    return obj instanceof Error;
  }

  function Immutable(obj, options, stackRemaining) {
    if (isImmutable(obj) || isReactElement(obj) || isFileObject(obj) || isBlobObject(obj) || isError(obj)) {
      return obj;
    } else if (isPromise(obj)) {
      return obj.then(Immutable);
    } else if (Array.isArray(obj)) {
      return makeImmutableArray(obj.slice());
    } else if (obj instanceof Date) {
      return makeImmutableDate(new Date(obj.getTime()));
    } else {
      // Don't freeze the object we were given; make a clone and use that.
      var prototype = options && options.prototype;
      var instantiateEmptyObject =
        (!prototype || prototype === Object.prototype) ?
          instantiatePlainObject : (function() { return Object.create(prototype); });
      var clone = instantiateEmptyObject();

      if (true) {
        /*jshint eqnull:true */
        if (stackRemaining == null) {
          stackRemaining = 64;
        }
        if (stackRemaining <= 0) {
          throw new ImmutableError("Attempt to construct Immutable from a deeply nested object was detected." +
            " Have you tried to wrap an object with circular references (e.g. React element)?" +
            " See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
        }
        stackRemaining -= 1;
      }

      for (var key in obj) {
        if (Object.getOwnPropertyDescriptor(obj, key)) {
          clone[key] = Immutable(obj[key], undefined, stackRemaining);
        }
      }

      return makeImmutableObject(clone);
    }
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  function toStatic(fn) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      return fn.apply(self, args);
    }

    return staticWrapper;
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  // with the additional condition of choosing which function to call depending
  // if argument is an array or an object.
  function toStaticObjectOrArray(fnObject, fnArray) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      if (Array.isArray(self)) {
          return fnArray.apply(self, args);
      } else {
          return fnObject.apply(self, args);
      }
    }

    return staticWrapper;
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  // with the additional condition of choosing which function to call depending
  // if argument is an array or an object or a date.
  function toStaticObjectOrDateOrArray(fnObject, fnArray, fnDate) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      if (Array.isArray(self)) {
          return fnArray.apply(self, args);
      } else if (self instanceof Date) {
          return fnDate.apply(self, args);
      } else {
          return fnObject.apply(self, args);
      }
    }

    return staticWrapper;
  }

  // Export the library
  Immutable.from           = Immutable;
  Immutable.isImmutable    = isImmutable;
  Immutable.ImmutableError = ImmutableError;
  Immutable.merge          = toStatic(merge);
  Immutable.replace        = toStatic(objectReplace);
  Immutable.without        = toStatic(without);
  Immutable.asMutable      = toStaticObjectOrDateOrArray(asMutableObject, asMutableArray, asMutableDate);
  Immutable.set            = toStaticObjectOrArray(objectSet, arraySet);
  Immutable.setIn          = toStaticObjectOrArray(objectSetIn, arraySetIn);
  Immutable.update         = toStatic(update);
  Immutable.updateIn       = toStatic(updateIn);
  Immutable.getIn          = toStatic(getIn);
  Immutable.flatMap        = toStatic(flatMap);
  Immutable.asObject       = toStatic(asObject);
  if (!globalConfig.use_static) {
      Immutable.static = immutableInit({
          use_static: true
      });
  }

  Object.freeze(Immutable);

  return Immutable;
}

  var Immutable = immutableInit();
  /* istanbul ignore if */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Immutable;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/helper */ "./src/libs/helper.js");
/* harmony import */ var _libs_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/settings */ "./src/libs/settings.js");
/* harmony import */ var _libs_connectSagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/connectSagas */ "./src/libs/connectSagas.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/store */ "./src/libs/store.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  buildRedux: Object(_libs_connectSagas__WEBPACK_IMPORTED_MODULE_2__["default"])(_libs_helper__WEBPACK_IMPORTED_MODULE_0__["buildRedux"]),
  config: _libs_settings__WEBPACK_IMPORTED_MODULE_1__["config"],
  createStore: _libs_store__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/libs/common.js":
/*!****************************!*\
  !*** ./src/libs/common.js ***!
  \****************************/
/*! exports provided: default, obj2params, underScoreToCamel, notEmpty, notNullOrUndefiend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2params", function() { return obj2params; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underScoreToCamel", function() { return underScoreToCamel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return notEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notNullOrUndefiend", function() { return notNullOrUndefiend; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({});
/**
 * 将对象转变为 params string
 * e.g. { name: 'user', age: 13} => name=user&age=13
 * @param obj
 * @return {*}
 */

function obj2params(obj) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== 'object' || !obj) return '';
  var params = [];
  Object.keys(obj).forEach(function (key) {
    if (obj[key] !== undefined && obj[key] !== null) {
      if (obj[key] instanceof Object) {
        // 数组和对象特殊处理
        params.push("".concat(key, "=").concat(JSON.stringify(obj[key])));
      } else {
        params.push("".concat(key, "=").concat(obj[key]));
      }
    }
  });
  return prefix + params.join('&') + suffix;
}
/**
 *  下划线转驼峰
 * @param name
 */

var underScoreToCamel = function underScoreToCamel(name) {
  return name.split('_').map(function (item, index) {
    if (item.length > 0) {
      if (index === 0) {
        return item;
      } else {
        return item[0].toUpperCase() + item.substring(1).toLowerCase();
      }
    } else {
      return '';
    }
  }).join('');
};
var notEmpty = function notEmpty(value) {
  return value !== null && value !== undefined && value !== '';
};
var notNullOrUndefiend = function notNullOrUndefiend(value) {
  return value !== null && value !== undefined;
};

/***/ }),

/***/ "./src/libs/connectSagas.js":
/*!**********************************!*\
  !*** ./src/libs/connectSagas.js ***!
  \**********************************/
/*! exports provided: sagas, reducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return sagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/libs/common.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/libs/settings.js");



var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(createWatcher);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // 常规sagas的操作

var effects = {
  put: redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"],
  call: redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"]
}; // 全局的redux actions

var allActions = {};
var sagas = [];
var reducers = {}; // 获取全局的action

var getAction = function getAction(actionName) {
  return allActions[actionName];
}; // 获取全局的state


var getState =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getState(child) {
  var get;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getState$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          get = function get(state) {
            return state[child];
          };

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(get);

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, getState);
});
/**
 * 创建reduce时自动关联saga
 */


/* harmony default export */ __webpack_exports__["default"] = (function (reduxer) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var redux = reduxer.call.apply(reduxer, [null].concat(args));
    var name = Object(_common__WEBPACK_IMPORTED_MODULE_3__["underScoreToCamel"])(args[0]);
    allActions[name] = redux.actions;
    reducers[name] = redux.reducer;
    return function (conf) {
      var watch = createWatcher(redux, conf);
      sagas.push(watch);
      return redux.actions;
    };
  };
});
/**
 * add watcher
 * @param redux
 * @param conf
 * @return {IterableIterator<ForkEffect>}
 */

function createWatcher(redux, conf) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function createWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(redux.types.START,
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
            var payload, _conf, url, data, method, _conf$headers, headers, _conf$extract, extract, onResult, onAfter, onError, fetch, callbackConfig, result, fetchMethod, fallbackResult;

            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    payload = _ref.payload;
                    conf = conf || {};
                    _conf = conf, url = _conf.url, data = _conf.data, method = _conf.method, _conf$headers = _conf.headers, headers = _conf$headers === void 0 ? {} : _conf$headers, _conf$extract = _conf.extract, extract = _conf$extract === void 0 ? {} : _conf$extract, onResult = _conf.onResult, onAfter = _conf.onAfter, onError = _conf.onError, fetch = _conf.fetch;
                    callbackConfig = _objectSpread({}, effects, {
                      getAction: getAction,
                      getState: getState
                    });
                    _context2.prev = 4;

                    if (!(typeof url === 'function')) {
                      _context2.next = 11;
                      break;
                    }

                    _context2.next = 8;
                    return url(payload, callbackConfig);

                  case 8:
                    _context2.t0 = _context2.sent;
                    _context2.next = 12;
                    break;

                  case 11:
                    _context2.t0 = url;

                  case 12:
                    url = _context2.t0;
                    method = method ? method.toUpperCase() : 'GET'; // data处理

                    if (!(typeof data === 'function')) {
                      _context2.next = 18;
                      break;
                    }

                    _context2.next = 17;
                    return data(payload, callbackConfig);

                  case 17:
                    data = _context2.sent;

                  case 18:
                    // GET方法下，data合并到url中
                    if (method === 'GET' && data) {
                      url += url.indexOf('?') === -1 ? '?' : '&';
                      url += Object(_common__WEBPACK_IMPORTED_MODULE_3__["obj2params"])(data);
                    }

                    // fetch方法是否定义
                    fetchMethod = fetch ? fetch : _settings__WEBPACK_IMPORTED_MODULE_4__["options"].fetchMethod;

                    if (!(fetchMethod && url)) {
                      _context2.next = 24;
                      break;
                    }

                    _context2.next = 23;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(fetchMethod, _objectSpread({
                      url: url,
                      method: method,
                      data: data,
                      headers: headers
                    }, extract));

                  case 23:
                    result = _context2.sent;

                  case 24:
                    if (!onResult) {
                      _context2.next = 29;
                      break;
                    }

                    _context2.next = 27;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(onResult, result, payload, callbackConfig);

                  case 27:
                    fallbackResult = _context2.sent;
                    result = Object(_common__WEBPACK_IMPORTED_MODULE_3__["notNullOrUndefiend"])(fallbackResult) ? fallbackResult : result;

                  case 29:
                    if (!_settings__WEBPACK_IMPORTED_MODULE_4__["options"].autoActions) {
                      _context2.next = 32;
                      break;
                    }

                    _context2.next = 32;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(redux.actions.success(result));

                  case 32:
                    if (!onAfter) {
                      _context2.next = 35;
                      break;
                    }

                    _context2.next = 35;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(onAfter, result, payload, callbackConfig);

                  case 35:
                    _context2.next = 45;
                    break;

                  case 37:
                    _context2.prev = 37;
                    _context2.t1 = _context2["catch"](4);

                    if (!_settings__WEBPACK_IMPORTED_MODULE_4__["options"].autoActions) {
                      _context2.next = 42;
                      break;
                    }

                    _context2.next = 42;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(redux.actions.reset());

                  case 42:
                    if (!onError) {
                      _context2.next = 45;
                      break;
                    }

                    _context2.next = 45;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(onError, _context2.t1, payload, callbackConfig);

                  case 45:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee, null, [[4, 37]]);
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./src/libs/helper.js":
/*!****************************!*\
  !*** ./src/libs/helper.js ***!
  \****************************/
/*! exports provided: buildRedux, buildListRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildRedux", function() { return buildRedux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildListRedux", function() { return buildListRedux; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seamless-immutable */ "./node_modules/seamless-immutable/seamless-immutable.development.js");
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * @desc normal
 * @param actionName {string}, e.g. load_item
 * @param  defaultData {object}
 */

var buildRedux = function buildRedux(actionName) {
  var _handleActions;

  var defaultData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var initialState = function initialState() {
    return seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
      loading: false,
      error: false,
      success: false,
      params: null,
      data: {}
    }, defaultData));
  };

  var START = "".concat(actionName, "_START");
  var SUCCESS = "".concat(actionName, "_SUCCESS");
  var ERROR = "".concat(actionName, "_ERROR");
  var RESET = "".concat(actionName, "_REST");
  var start = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(START, function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return {
      params: params
    };
  });
  var reset = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(RESET);
  var success = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(SUCCESS, function (data) {
    return {
      data: data
    };
  });
  var error = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(ERROR, function (errorMessage) {
    return {
      errorMessage: errorMessage
    };
  });
  var reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["handleActions"])((_handleActions = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, START, function (state, action) {
    return state.merge({
      loading: true,
      error: false,
      success: false,
      params: action.payload && action.payload.params
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, SUCCESS, function (state, action) {
    return state.merge({
      loading: false,
      error: false,
      success: true,
      data: action.payload && action.payload.data
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, ERROR, function (state, action) {
    return seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default()({
      loading: false,
      error: true,
      success: false
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, RESET, function (state, action) {
    return initialState();
  }), _handleActions), initialState());
  return {
    actions: {
      start: start,
      success: success,
      error: error,
      reset: reset
    },
    types: {
      START: START,
      SUCCESS: SUCCESS,
      ERROR: ERROR,
      RESET: RESET
    },
    reducer: reducer
  };
};
/**
 *
 * @param actionName {string}, e.g. list_vehicle
 * @param defaultData {object}
 * @return {{types: {SUCCESS: string, START: string, ERROR: string, RESET: string}, reducer: Function, actions:
 *   {success: actionCreator, start: actionCreator, reset: actionCreator, error: actionCreator}}}
 */

var buildListRedux = function buildListRedux(actionName) {
  var _handleActions2;

  var defaultData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var initialState = function initialState() {
    return seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
      loading: false,
      error: false,
      success: false,
      params: {},
      data: {
        page: 1,
        per_page: 10,
        total_count: 0,
        total_page: 0,
        entries: []
      }
    }, defaultData));
  };

  var START = "".concat(actionName, "_LIST_START");
  var SUCCESS = "".concat(actionName, "_LIST_SUCCESS");
  var RESET = "RESET_".concat(actionName, "_LIST");
  var ERROR = "".concat(actionName, "_LIST_ERROR");
  var start = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(START, function (page, limit, params) {
    return {
      page: page,
      limit: limit,
      params: params
    };
  });
  var success = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(SUCCESS, function (data) {
    return {
      data: data
    };
  });
  var reset = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(RESET);
  var error = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(ERROR);
  var reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["handleActions"])((_handleActions2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, START, function (state, action) {
    return state.merge({
      loading: true,
      success: false,
      params: action.payload && action.payload.params
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, SUCCESS, function (state, action) {
    return state.merge({
      loading: false,
      success: true,
      data: action.payload && action.payload.data
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, ERROR, function (state) {
    return state.merge({
      loading: false,
      error: true,
      success: false
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, RESET, function (state) {
    return initialState();
  }), _handleActions2), initialState());
  return {
    reducer: reducer,
    types: {
      START: START,
      SUCCESS: SUCCESS,
      RESET: RESET,
      ERROR: ERROR
    },
    actions: {
      start: start,
      success: success,
      error: error,
      reset: reset
    }
  };
};

/***/ }),

/***/ "./src/libs/settings.js":
/*!******************************!*\
  !*** ./src/libs/settings.js ***!
  \******************************/
/*! exports provided: getOptions, config, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 初始化配置
var defaultOptions = {
  logger: true,
  // redux-logger
  fetchMethod: null,
  // fetch请求
  history: 'browser',
  // browser, hash, memory, none
  autoActions: true,
  middleware: [] // middleware

};
var getOptions = function getOptions() {
  var options = _objectSpread({}, defaultOptions);

  return function (opts) {
    if (opts) {
      options = _objectSpread({}, options, {}, opts);
    }

    return options;
  };
};
var config = getOptions();
var options = config();

/***/ }),

/***/ "./src/libs/store.js":
/*!***************************!*\
  !*** ./src/libs/store.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _connectSagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connectSagas */ "./src/libs/connectSagas.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings */ "./src/libs/settings.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var options = Object(_settings__WEBPACK_IMPORTED_MODULE_8__["config"])();
var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();

var createRootReducer = function createRootReducer(reducers) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])(_objectSpread({}, reducers));
};

var combineMiddleware = function combineMiddleware() {
  var middleWare = [sagaMiddleware];

  if (Object.prototype.toString.call(options.middleware) === '[object Array]') {
    middleWare = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(middleWare), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(options.middleware));
  }

  if (options.logger) {
    middleWare.push(redux_logger__WEBPACK_IMPORTED_MODULE_6___default.a);
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(middleWare)));
};

function configureStore(initState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(createRootReducer(_connectSagas__WEBPACK_IMPORTED_MODULE_7__["reducers"]), initState, combineMiddleware());
  sagaMiddleware.run(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function rootSaga(getState) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_5__["all"])(_connectSagas__WEBPACK_IMPORTED_MODULE_7__["sagas"]);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, rootSaga);
  }));
  return store;
}

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9pby00Mjc5NDVkZC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvY29yZS9kaXN0L3JlZHV4LXNhZ2EtZWZmZWN0cy5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2RlbGF5LXAvZGlzdC9yZWR1eC1zYWdhLWRlbGF5LXAuZXNtLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9pcy9kaXN0L3JlZHV4LXNhZ2EtaXMuZXNtLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9zeW1ib2xzL2Rpc3QvcmVkdXgtc2FnYS1zeW1ib2xzLmVzbS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvcmVkdXgtbG9nZ2VyL2Rpc3QvcmVkdXgtbG9nZ2VyLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1lZmZlY3RzLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3MtaW1tdXRhYmxlL3NlYW1sZXNzLWltbXV0YWJsZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvbGlicy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vc3JjL2xpYnMvY29ubmVjdFNhZ2FzLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy9saWJzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvbGlicy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvbGlicy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci9leHRlcm5hbCBcInJlZHV4LWFjdGlvbnNcIiIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiXSwibmFtZXMiOlsiYnVpbGRSZWR1eCIsImNvbm5lY3RTYWdhcyIsImNvbmZpZyIsImNyZWF0ZVN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJvYmoycGFyYW1zIiwib2JqIiwicHJlZml4Iiwic3VmZml4IiwicGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ1bmRlZmluZWQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImpvaW4iLCJ1bmRlclNjb3JlVG9DYW1lbCIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJub3RFbXB0eSIsInZhbHVlIiwibm90TnVsbE9yVW5kZWZpZW5kIiwiY3JlYXRlV2F0Y2hlciIsImVmZmVjdHMiLCJwdXQiLCJjYWxsIiwiYWxsQWN0aW9ucyIsInNhZ2FzIiwicmVkdWNlcnMiLCJnZXRBY3Rpb24iLCJhY3Rpb25OYW1lIiwiZ2V0U3RhdGUiLCJjaGlsZCIsImdldCIsInN0YXRlIiwic2VsZWN0IiwicmVkdXhlciIsImFyZ3MiLCJyZWR1eCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZiIsIndhdGNoIiwidGFrZUxhdGVzdCIsInR5cGVzIiwiU1RBUlQiLCJwYXlsb2FkIiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJleHRyYWN0Iiwib25SZXN1bHQiLCJvbkFmdGVyIiwib25FcnJvciIsImZldGNoIiwiY2FsbGJhY2tDb25maWciLCJpbmRleE9mIiwiZmV0Y2hNZXRob2QiLCJvcHRpb25zIiwicmVzdWx0IiwiZmFsbGJhY2tSZXN1bHQiLCJhdXRvQWN0aW9ucyIsInN1Y2Nlc3MiLCJyZXNldCIsImRlZmF1bHREYXRhIiwiaW5pdGlhbFN0YXRlIiwiSW1tdXRhYmxlIiwibG9hZGluZyIsImVycm9yIiwiU1VDQ0VTUyIsIkVSUk9SIiwiUkVTRVQiLCJzdGFydCIsImNyZWF0ZUFjdGlvbiIsImVycm9yTWVzc2FnZSIsImhhbmRsZUFjdGlvbnMiLCJhY3Rpb24iLCJtZXJnZSIsImJ1aWxkTGlzdFJlZHV4IiwicGFnZSIsInBlcl9wYWdlIiwidG90YWxfY291bnQiLCJ0b3RhbF9wYWdlIiwiZW50cmllcyIsImxpbWl0IiwiZGVmYXVsdE9wdGlvbnMiLCJsb2dnZXIiLCJoaXN0b3J5IiwibWlkZGxld2FyZSIsImdldE9wdGlvbnMiLCJvcHRzIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY29tYmluZU1pZGRsZXdhcmUiLCJtaWRkbGVXYXJlIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjb21wb3NlIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdFN0YXRlIiwic3RvcmUiLCJydW4iLCJyb290U2FnYSIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNydEJBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUFBO0FBQUE7QUFBQSxPQUFVOEUsUUFBVjtBQUFBLEdBQW5CO0FBSUEsU0FBT0YsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDM0NELGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImluZGV4LmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IFRBU0tfQ0FOQ0VMLCBURVJNSU5BVEUsIFNBR0FfTE9DQVRJT04sIFNBR0FfQUNUSU9OLCBJTywgU0VMRl9DQU5DRUxMQVRJT04gfSBmcm9tICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IGFycmF5LCBub3RVbmRlZiwgcGF0dGVybiwgbXVsdGljYXN0LCBjaGFubmVsLCB1bmRlZiwgdGFzaywgZnVuYywgYnVmZmVyLCBzdHJpbmcsIG9iamVjdCB9IGZyb20gJ0ByZWR1eC1zYWdhL2lzJztcbmltcG9ydCBkZWxheVAgZnJvbSAnQHJlZHV4LXNhZ2EvZGVsYXktcCc7XG5cbnZhciBrb25zdCA9IGZ1bmN0aW9uIGtvbnN0KHYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG52YXIga1RydWUgPVxuLyojX19QVVJFX18qL1xua29uc3QodHJ1ZSk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XG4gIG5vb3AgPVxuICAvKiNfX1BVUkVfXyovXG4gIG5ldyBQcm94eShub29wLCB7XG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycignVGhlcmUgd2FzIGFuIGF0dGVtcHQgdG8gYXNzaWduIGEgcHJvcGVydHkgdG8gaW50ZXJuYWwgYG5vb3BgIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgfSk7XG59XG52YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiBpZGVudGl0eSh2KSB7XG4gIHJldHVybiB2O1xufTtcbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nO1xudmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSBoYXNTeW1ib2wgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBTeW1ib2wuYXN5bmNJdGVyYXRvciA6ICdAQGFzeW5jSXRlcmF0b3InO1xuZnVuY3Rpb24gY2hlY2sodmFsdWUsIHByZWRpY2F0ZSwgZXJyb3IpIHtcbiAgaWYgKCFwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufVxudmFyIGFzc2lnbldpdGhTeW1ib2xzID0gZnVuY3Rpb24gYXNzaWduV2l0aFN5bWJvbHModGFyZ2V0LCBzb3VyY2UpIHtcbiAgX2V4dGVuZHModGFyZ2V0LCBzb3VyY2UpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgIHRhcmdldFtzXSA9IHNvdXJjZVtzXTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBmbGF0TWFwID0gZnVuY3Rpb24gZmxhdE1hcChtYXBwZXIsIGFycikge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIGFyci5tYXAobWFwcGVyKSk7XG59O1xuZnVuY3Rpb24gcmVtb3ZlKGFycmF5LCBpdGVtKSB7XG4gIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG5cbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBmbigpO1xuICB9O1xufVxuXG52YXIga1Rocm93ID0gZnVuY3Rpb24ga1Rocm93KGVycikge1xuICB0aHJvdyBlcnI7XG59O1xuXG52YXIga1JldHVybiA9IGZ1bmN0aW9uIGtSZXR1cm4odmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZG9uZTogdHJ1ZVxuICB9O1xufTtcblxuZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKG5leHQsIHRocm8sIG5hbWUpIHtcbiAgaWYgKHRocm8gPT09IHZvaWQgMCkge1xuICAgIHRocm8gPSBrVGhyb3c7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgbmFtZSA9ICdpdGVyYXRvcic7XG4gIH1cblxuICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgbWV0YToge1xuICAgICAgbmFtZTogbmFtZVxuICAgIH0sXG4gICAgbmV4dDogbmV4dCxcbiAgICB0aHJvdzogdGhybyxcbiAgICByZXR1cm46IGtSZXR1cm4sXG4gICAgaXNTYWdhSXRlcmF0b3I6IHRydWVcbiAgfTtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaXRlcmF0b3I7XG59XG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvciwgX3JlZjIpIHtcbiAgdmFyIHNhZ2FTdGFjayA9IF9yZWYyLnNhZ2FTdGFjaztcblxuICAvKmVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUqL1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgY29uc29sZS5lcnJvcihzYWdhU3RhY2spO1xufVxudmFyIGludGVybmFsRXJyID0gZnVuY3Rpb24gaW50ZXJuYWxFcnIoZXJyKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoXCJcXG4gIHJlZHV4LXNhZ2E6IEVycm9yIGNoZWNraW5nIGhvb2tzIGRldGVjdGVkIGFuIGluY29uc2lzdGVudCBzdGF0ZS4gVGhpcyBpcyBsaWtlbHkgYSBidWdcXG4gIGluIHJlZHV4LXNhZ2EgY29kZSBhbmQgbm90IHlvdXJzLiBUaGFua3MgZm9yIHJlcG9ydGluZyB0aGlzIGluIHRoZSBwcm9qZWN0J3MgZ2l0aHViIHJlcG8uXFxuICBFcnJvcjogXCIgKyBlcnIgKyBcIlxcblwiKTtcbn07XG52YXIgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgPSBmdW5jdGlvbiBjcmVhdGVTZXRDb250ZXh0V2FybmluZyhjdHgsIHByb3BzKSB7XG4gIHJldHVybiAoY3R4ID8gY3R4ICsgJy4nIDogJycpICsgXCJzZXRDb250ZXh0KHByb3BzKTogYXJndW1lbnQgXCIgKyBwcm9wcyArIFwiIGlzIG5vdCBhIHBsYWluIG9iamVjdFwiO1xufTtcbnZhciBGUk9aRU5fQUNUSU9OX0VSUk9SID0gXCJZb3UgY2FuJ3QgcHV0IChhLmsuYS4gZGlzcGF0Y2ggZnJvbSBzYWdhKSBmcm96ZW4gYWN0aW9ucy5cXG5XZSBoYXZlIHRvIGRlZmluZSBhIHNwZWNpYWwgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgb24gdGhvc2UgYWN0aW9ucyBmb3Igc2NoZWR1bGluZyBwdXJwb3Nlcy5cXG5PdGhlcndpc2UgeW91IHdvdWxkbid0IGJlIGFibGUgdG8gY29tbXVuaWNhdGUgcHJvcGVybHkgYmV0d2VlbiBzYWdhcyAmIG90aGVyIHN1YnNjcmliZXJzIChhY3Rpb24gb3JkZXJpbmcgd291bGQgYmVjb21lIGZhciBsZXNzIHByZWRpY3RhYmxlKS5cXG5JZiB5b3UgYXJlIHVzaW5nIHJlZHV4IGFuZCB5b3UgY2FyZSBhYm91dCB0aGlzIGJlaGF2aW91ciAoZnJvemVuIGFjdGlvbnMpLFxcbnRoZW4geW91IG1pZ2h0IHdhbnQgdG8gc3dpdGNoIHRvIGZyZWV6aW5nIGFjdGlvbnMgaW4gYSBtaWRkbGV3YXJlIHJhdGhlciB0aGFuIGluIGFjdGlvbiBjcmVhdG9yLlxcbkV4YW1wbGUgaW1wbGVtZW50YXRpb246XFxuXFxuY29uc3QgZnJlZXplQWN0aW9ucyA9IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IG5leHQoT2JqZWN0LmZyZWV6ZShhY3Rpb24pKVxcblwiOyAvLyBjcmVhdGVzIGVtcHR5LCBidXQgbm90LWhvbGV5IGFycmF5XG5cbnZhciBjcmVhdGVFbXB0eUFycmF5ID0gZnVuY3Rpb24gY3JlYXRlRW1wdHlBcnJheShuKSB7XG4gIHJldHVybiBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkobikpO1xufTtcbnZhciB3cmFwU2FnYURpc3BhdGNoID0gZnVuY3Rpb24gd3JhcFNhZ2FEaXNwYXRjaChkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVjayhhY3Rpb24sIGZ1bmN0aW9uIChhYykge1xuICAgICAgICByZXR1cm4gIU9iamVjdC5pc0Zyb3plbihhYyk7XG4gICAgICB9LCBGUk9aRU5fQUNUSU9OX0VSUk9SKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzcGF0Y2goT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGlvbiwgU0FHQV9BQ1RJT04sIHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciBzaG91bGRUZXJtaW5hdGUgPSBmdW5jdGlvbiBzaG91bGRUZXJtaW5hdGUocmVzKSB7XG4gIHJldHVybiByZXMgPT09IFRFUk1JTkFURTtcbn07XG52YXIgc2hvdWxkQ2FuY2VsID0gZnVuY3Rpb24gc2hvdWxkQ2FuY2VsKHJlcykge1xuICByZXR1cm4gcmVzID09PSBUQVNLX0NBTkNFTDtcbn07XG52YXIgc2hvdWxkQ29tcGxldGUgPSBmdW5jdGlvbiBzaG91bGRDb21wbGV0ZShyZXMpIHtcbiAgcmV0dXJuIHNob3VsZFRlcm1pbmF0ZShyZXMpIHx8IHNob3VsZENhbmNlbChyZXMpO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3Moc2hhcGUsIHBhcmVudENhbGxiYWNrKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc2hhcGUpO1xuICB2YXIgdG90YWxDb3VudCA9IGtleXMubGVuZ3RoO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2sodG90YWxDb3VudCwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjID4gMDtcbiAgICB9LCAnY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrczogZ2V0IGFuIGVtcHR5IGFycmF5IG9yIG9iamVjdCcpO1xuICB9XG5cbiAgdmFyIGNvbXBsZXRlZENvdW50ID0gMDtcbiAgdmFyIGNvbXBsZXRlZDtcbiAgdmFyIHJlc3VsdHMgPSBhcnJheShzaGFwZSkgPyBjcmVhdGVFbXB0eUFycmF5KHRvdGFsQ291bnQpIDoge307XG4gIHZhciBjaGlsZENhbGxiYWNrcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGNoZWNrRW5kKCkge1xuICAgIGlmIChjb21wbGV0ZWRDb3VudCA9PT0gdG90YWxDb3VudCkge1xuICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHBhcmVudENhbGxiYWNrKHJlc3VsdHMpO1xuICAgIH1cbiAgfVxuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoQ2JBdEtleSA9IGZ1bmN0aW9uIGNoQ2JBdEtleShyZXMsIGlzRXJyKSB7XG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXJyIHx8IHNob3VsZENvbXBsZXRlKHJlcykpIHtcbiAgICAgICAgcGFyZW50Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICAgIHBhcmVudENhbGxiYWNrKHJlcywgaXNFcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1trZXldID0gcmVzO1xuICAgICAgICBjb21wbGV0ZWRDb3VudCsrO1xuICAgICAgICBjaGVja0VuZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaENiQXRLZXkuY2FuY2VsID0gbm9vcDtcbiAgICBjaGlsZENhbGxiYWNrc1trZXldID0gY2hDYkF0S2V5O1xuICB9KTtcblxuICBwYXJlbnRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjb21wbGV0ZWQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gY2hpbGRDYWxsYmFja3Nba2V5XS5jYW5jZWwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY2hpbGRDYWxsYmFja3M7XG59XG5mdW5jdGlvbiBnZXRNZXRhSW5mbyhmbikge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGZuLm5hbWUgfHwgJ2Fub255bW91cycsXG4gICAgbG9jYXRpb246IGdldExvY2F0aW9uKGZuKVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oaW5zdHJ1bWVudGVkKSB7XG4gIHJldHVybiBpbnN0cnVtZW50ZWRbU0FHQV9MT0NBVElPTl07XG59XG5cbnZhciBCVUZGRVJfT1ZFUkZMT1cgPSBcIkNoYW5uZWwncyBCdWZmZXIgb3ZlcmZsb3chXCI7XG52YXIgT05fT1ZFUkZMT1dfVEhST1cgPSAxO1xudmFyIE9OX09WRVJGTE9XX0RST1AgPSAyO1xudmFyIE9OX09WRVJGTE9XX1NMSURFID0gMztcbnZhciBPTl9PVkVSRkxPV19FWFBBTkQgPSA0O1xudmFyIHplcm9CdWZmZXIgPSB7XG4gIGlzRW1wdHk6IGtUcnVlLFxuICBwdXQ6IG5vb3AsXG4gIHRha2U6IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIHJpbmdCdWZmZXIobGltaXQsIG92ZXJmbG93QWN0aW9uKSB7XG4gIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7XG4gICAgbGltaXQgPSAxMDtcbiAgfVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGltaXQpO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHB1c2hJbmRleCA9IDA7XG4gIHZhciBwb3BJbmRleCA9IDA7XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKGl0KSB7XG4gICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICBsZW5ndGgrKztcbiAgfTtcblxuICB2YXIgdGFrZSA9IGZ1bmN0aW9uIHRha2UoKSB7XG4gICAgaWYgKGxlbmd0aCAhPSAwKSB7XG4gICAgICB2YXIgaXQgPSBhcnJbcG9wSW5kZXhdO1xuICAgICAgYXJyW3BvcEluZGV4XSA9IG51bGw7XG4gICAgICBsZW5ndGgtLTtcbiAgICAgIHBvcEluZGV4ID0gKHBvcEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgIHJldHVybiBpdDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICBpdGVtcy5wdXNoKHRha2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNFbXB0eTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiBsZW5ndGggPT0gMDtcbiAgICB9LFxuICAgIHB1dDogZnVuY3Rpb24gcHV0KGl0KSB7XG4gICAgICBpZiAobGVuZ3RoIDwgbGltaXQpIHtcbiAgICAgICAgcHVzaChpdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZG91YmxlZExpbWl0O1xuXG4gICAgICAgIHN3aXRjaCAob3ZlcmZsb3dBY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1RIUk9XOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEJVRkZFUl9PVkVSRkxPVyk7XG5cbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1NMSURFOlxuICAgICAgICAgICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgICAgICAgcG9wSW5kZXggPSBwdXNoSW5kZXg7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfRVhQQU5EOlxuICAgICAgICAgICAgZG91YmxlZExpbWl0ID0gMiAqIGxpbWl0O1xuICAgICAgICAgICAgYXJyID0gZmx1c2goKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcG9wSW5kZXggPSAwO1xuICAgICAgICAgICAgYXJyLmxlbmd0aCA9IGRvdWJsZWRMaW1pdDtcbiAgICAgICAgICAgIGxpbWl0ID0gZG91YmxlZExpbWl0O1xuICAgICAgICAgICAgcHVzaChpdCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6IC8vIERST1BcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWtlOiB0YWtlLFxuICAgIGZsdXNoOiBmbHVzaFxuICB9O1xufVxuXG52YXIgbm9uZSA9IGZ1bmN0aW9uIG5vbmUoKSB7XG4gIHJldHVybiB6ZXJvQnVmZmVyO1xufTtcbnZhciBmaXhlZCA9IGZ1bmN0aW9uIGZpeGVkKGxpbWl0KSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19USFJPVyk7XG59O1xudmFyIGRyb3BwaW5nID0gZnVuY3Rpb24gZHJvcHBpbmcobGltaXQpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX0RST1ApO1xufTtcbnZhciBzbGlkaW5nID0gZnVuY3Rpb24gc2xpZGluZyhsaW1pdCkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfU0xJREUpO1xufTtcbnZhciBleHBhbmRpbmcgPSBmdW5jdGlvbiBleHBhbmRpbmcoaW5pdGlhbFNpemUpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIoaW5pdGlhbFNpemUsIE9OX09WRVJGTE9XX0VYUEFORCk7XG59O1xuXG52YXIgYnVmZmVycyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgbm9uZTogbm9uZSxcbiAgZml4ZWQ6IGZpeGVkLFxuICBkcm9wcGluZzogZHJvcHBpbmcsXG4gIHNsaWRpbmc6IHNsaWRpbmcsXG4gIGV4cGFuZGluZzogZXhwYW5kaW5nXG59KTtcblxudmFyIFRBS0UgPSAnVEFLRSc7XG52YXIgUFVUID0gJ1BVVCc7XG52YXIgQUxMID0gJ0FMTCc7XG52YXIgUkFDRSA9ICdSQUNFJztcbnZhciBDQUxMID0gJ0NBTEwnO1xudmFyIENQUyA9ICdDUFMnO1xudmFyIEZPUksgPSAnRk9SSyc7XG52YXIgSk9JTiA9ICdKT0lOJztcbnZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcbnZhciBTRUxFQ1QgPSAnU0VMRUNUJztcbnZhciBBQ1RJT05fQ0hBTk5FTCA9ICdBQ1RJT05fQ0hBTk5FTCc7XG52YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG52YXIgRkxVU0ggPSAnRkxVU0gnO1xudmFyIEdFVF9DT05URVhUID0gJ0dFVF9DT05URVhUJztcbnZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cbnZhciBlZmZlY3RUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgVEFLRTogVEFLRSxcbiAgUFVUOiBQVVQsXG4gIEFMTDogQUxMLFxuICBSQUNFOiBSQUNFLFxuICBDQUxMOiBDQUxMLFxuICBDUFM6IENQUyxcbiAgRk9SSzogRk9SSyxcbiAgSk9JTjogSk9JTixcbiAgQ0FOQ0VMOiBDQU5DRUwsXG4gIFNFTEVDVDogU0VMRUNULFxuICBBQ1RJT05fQ0hBTk5FTDogQUNUSU9OX0NIQU5ORUwsXG4gIENBTkNFTExFRDogQ0FOQ0VMTEVELFxuICBGTFVTSDogRkxVU0gsXG4gIEdFVF9DT05URVhUOiBHRVRfQ09OVEVYVCxcbiAgU0VUX0NPTlRFWFQ6IFNFVF9DT05URVhUXG59KTtcblxudmFyIFRFU1RfSElOVCA9ICdcXG4oSElOVDogaWYgeW91IGFyZSBnZXR0aW5nIHRoZXNlIGVycm9ycyBpbiB0ZXN0cywgY29uc2lkZXIgdXNpbmcgY3JlYXRlTW9ja1Rhc2sgZnJvbSBAcmVkdXgtc2FnYS90ZXN0aW5nLXV0aWxzKSc7XG5cbnZhciBtYWtlRWZmZWN0ID0gZnVuY3Rpb24gbWFrZUVmZmVjdCh0eXBlLCBwYXlsb2FkKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbSU9dID0gdHJ1ZSwgX3JlZi5jb21iaW5hdG9yID0gZmFsc2UsIF9yZWYudHlwZSA9IHR5cGUsIF9yZWYucGF5bG9hZCA9IHBheWxvYWQsIF9yZWY7XG59O1xuXG52YXIgaXNGb3JrRWZmZWN0ID0gZnVuY3Rpb24gaXNGb3JrRWZmZWN0KGVmZikge1xuICByZXR1cm4gZWZmICYmIGVmZltJT10gJiYgZWZmLnR5cGUgPT09IEZPUks7XG59O1xuXG52YXIgZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKGVmZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGVmZiwgaXNGb3JrRWZmZWN0LCAnZGV0YWNoKGVmZik6IGFyZ3VtZW50IG11c3QgYmUgYSBmb3JrIGVmZmVjdCcpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoRk9SSywgX2V4dGVuZHMoe30sIGVmZi5wYXlsb2FkLCB7XG4gICAgZGV0YWNoZWQ6IHRydWVcbiAgfSkpO1xufTtcbmZ1bmN0aW9uIHRha2UocGF0dGVybk9yQ2hhbm5lbCwgbXVsdGljYXN0UGF0dGVybikge1xuICBpZiAocGF0dGVybk9yQ2hhbm5lbCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0dGVybk9yQ2hhbm5lbCA9ICcqJztcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjaGVjayhhcmd1bWVudHNbMF0sIG5vdFVuZGVmLCAndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogcGF0dGVybk9yQ2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGlmIChwYXR0ZXJuKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgcGF0dGVybjogcGF0dGVybk9yQ2hhbm5lbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG11bHRpY2FzdChwYXR0ZXJuT3JDaGFubmVsKSAmJiBub3RVbmRlZihtdWx0aWNhc3RQYXR0ZXJuKSAmJiBwYXR0ZXJuKG11bHRpY2FzdFBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCxcbiAgICAgIHBhdHRlcm46IG11bHRpY2FzdFBhdHRlcm5cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBhcmd1bWVudCBcIiArIHBhdHRlcm5PckNoYW5uZWwgKyBcIiBpcyBub3QgdmFsaWQgY2hhbm5lbCBvciBhIHZhbGlkIHBhdHRlcm5cIik7XG4gIH1cbn1cbnZhciB0YWtlTWF5YmUgPSBmdW5jdGlvbiB0YWtlTWF5YmUoKSB7XG4gIHZhciBlZmYgPSB0YWtlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQubWF5YmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcbmZ1bmN0aW9uIHB1dChjaGFubmVsJDEsIGFjdGlvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBjaGFubmVsLCBcInB1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBcIiArIGNoYW5uZWwkMSArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWxcIik7XG4gICAgICBjaGVjayhhY3Rpb24sIG5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVuZGVmKGFjdGlvbikpIHtcbiAgICBhY3Rpb24gPSBjaGFubmVsJDE7IC8vIGB1bmRlZmluZWRgIGluc3RlYWQgb2YgYG51bGxgIHRvIG1ha2UgZGVmYXVsdCBwYXJhbWV0ZXIgd29ya1xuXG4gICAgY2hhbm5lbCQxID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoUFVULCB7XG4gICAgY2hhbm5lbDogY2hhbm5lbCQxLFxuICAgIGFjdGlvbjogYWN0aW9uXG4gIH0pO1xufVxudmFyIHB1dFJlc29sdmUgPSBmdW5jdGlvbiBwdXRSZXNvbHZlKCkge1xuICB2YXIgZWZmID0gcHV0LmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQucmVzb2x2ZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcbiAgdmFyIGVmZiA9IG1ha2VFZmZlY3QoQUxMLCBlZmZlY3RzKTtcbiAgZWZmLmNvbWJpbmF0b3IgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufVxuZnVuY3Rpb24gcmFjZShlZmZlY3RzKSB7XG4gIHZhciBlZmYgPSBtYWtlRWZmZWN0KFJBQ0UsIGVmZmVjdHMpO1xuICBlZmYuY29tYmluYXRvciA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59IC8vIHRoaXMgbWF0Y2ggZ2V0Rm5DYWxsRGVzY3JpcHRvciBsb2dpY1xuXG52YXIgdmFsaWRhdGVGbkRlc2NyaXB0b3IgPSBmdW5jdGlvbiB2YWxpZGF0ZUZuRGVzY3JpcHRvcihlZmZlY3ROYW1lLCBmbkRlc2NyaXB0b3IpIHtcbiAgY2hlY2soZm5EZXNjcmlwdG9yLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBmbiBpcyB1bmRlZmluZWQgb3IgbnVsbFwiKTtcblxuICBpZiAoZnVuYyhmbkRlc2NyaXB0b3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGFycmF5KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgIGZuID0gZm5EZXNjcmlwdG9yWzFdO1xuICAgIGNoZWNrKGZuLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBvZiB0eXBlIFtjb250ZXh0LCBmbl0gaGFzIHVuZGVmaW5lZCBvciBudWxsIGBmbmBcIik7XG4gIH0gZWxzZSBpZiAob2JqZWN0KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yLmNvbnRleHQ7XG4gICAgZm4gPSBmbkRlc2NyaXB0b3IuZm47XG4gICAgY2hlY2soZm4sIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IG9mIHR5cGUge2NvbnRleHQsIGZufSBoYXMgdW5kZWZpbmVkIG9yIG51bGwgYGZuYFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhmbkRlc2NyaXB0b3IsIGZ1bmMsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgZm4gaXMgbm90IGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikpIHtcbiAgICBjaGVjayhjb250ZXh0W2ZuXSwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiBjb250ZXh0IGFyZ3VtZW50cyBoYXMgbm8gc3VjaCBtZXRob2QgLSBcXFwiXCIgKyBmbiArIFwiXFxcIlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaGVjayhmbiwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiB1bnBhY2tlZCBmbiBhcmd1bWVudCAoZnJvbSBbY29udGV4dCwgZm5dIG9yIHtjb250ZXh0LCBmbn0pIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xufTtcblxuZnVuY3Rpb24gZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpIHtcbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGZ1bmMoZm5EZXNjcmlwdG9yKSkge1xuICAgIGZuID0gZm5EZXNjcmlwdG9yO1xuICB9IGVsc2Uge1xuICAgIGlmIChhcnJheShmbkRlc2NyaXB0b3IpKSB7XG4gICAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgICAgZm4gPSBmbkRlc2NyaXB0b3JbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3IuY29udGV4dDtcbiAgICAgIGZuID0gZm5EZXNjcmlwdG9yLmZuO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikgJiYgZnVuYyhjb250ZXh0W2ZuXSkpIHtcbiAgICAgIGZuID0gY29udGV4dFtmbl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIGZuOiBmbixcbiAgICBhcmdzOiBhcmdzXG4gIH07XG59XG5cbnZhciBpc05vdERlbGF5RWZmZWN0ID0gZnVuY3Rpb24gaXNOb3REZWxheUVmZmVjdChmbikge1xuICByZXR1cm4gZm4gIT09IGRlbGF5O1xufTtcblxuZnVuY3Rpb24gY2FsbChmbkRlc2NyaXB0b3IpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgYXJnMCA9IHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJyA/IGFyZ3NbMF0gOiAnbXMnO1xuICAgIGNoZWNrKGZuRGVzY3JpcHRvciwgaXNOb3REZWxheUVmZmVjdCwgXCJpbnN0ZWFkIG9mIHdyaXRpbmcgYHlpZWxkIGNhbGwoZGVsYXksIFwiICsgYXJnMCArIFwiKWAgd2hlcmUgZGVsYXkgaXMgYW4gZWZmZWN0IGZyb20gYHJlZHV4LXNhZ2EvZWZmZWN0c2AgeW91IHNob3VsZCB3cml0ZSBgeWllbGQgZGVsYXkoXCIgKyBhcmcwICsgXCIpYFwiKTtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignY2FsbCcsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gYXBwbHkoY29udGV4dCwgZm4sIGFyZ3MpIHtcbiAgaWYgKGFyZ3MgPT09IHZvaWQgMCkge1xuICAgIGFyZ3MgPSBbXTtcbiAgfVxuXG4gIHZhciBmbkRlc2NyaXB0b3IgPSBbY29udGV4dCwgZm5dO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2FwcGx5JywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2NyaXB0b3IoW2NvbnRleHQsIGZuXSwgYXJncykpO1xufVxuZnVuY3Rpb24gY3BzKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdjcHMnLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ1BTLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gZm9yayhmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignZm9yaycsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGT1JLLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gc3Bhd24oZm5EZXNjcmlwdG9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ3NwYXduJywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBkZXRhY2goZm9yay5hcHBseSh2b2lkIDAsIFtmbkRlc2NyaXB0b3JdLmNvbmNhdChhcmdzKSkpO1xufVxuZnVuY3Rpb24gam9pbih0YXNrT3JUYXNrcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdqb2luKC4uLnRhc2tzKSBpcyBub3Qgc3VwcG9ydGVkIGFueSBtb3JlLiBQbGVhc2UgdXNlIGpvaW4oWy4uLnRhc2tzXSkgdG8gam9pbiBtdWx0aXBsZSB0YXNrcy4nKTtcbiAgICB9XG5cbiAgICBpZiAoYXJyYXkodGFza09yVGFza3MpKSB7XG4gICAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNoZWNrKHQsIHRhc2ssIFwiam9pbihbLi4udGFza3NdKTogYXJndW1lbnQgXCIgKyB0ICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrKHRhc2tPclRhc2tzLCB0YXNrLCBcImpvaW4odGFzayk6IGFyZ3VtZW50IFwiICsgdGFza09yVGFza3MgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoSk9JTiwgdGFza09yVGFza3MpO1xufVxuZnVuY3Rpb24gY2FuY2VsKHRhc2tPclRhc2tzKSB7XG4gIGlmICh0YXNrT3JUYXNrcyA9PT0gdm9pZCAwKSB7XG4gICAgdGFza09yVGFza3MgPSBTRUxGX0NBTkNFTExBVElPTjtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbCguLi50YXNrcykgaXMgbm90IHN1cHBvcnRlZCBhbnkgbW9yZS4gUGxlYXNlIHVzZSBjYW5jZWwoWy4uLnRhc2tzXSkgdG8gY2FuY2VsIG11bHRpcGxlIHRhc2tzLicpO1xuICAgIH1cblxuICAgIGlmIChhcnJheSh0YXNrT3JUYXNrcykpIHtcbiAgICAgIHRhc2tPclRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2hlY2sodCwgdGFzaywgXCJjYW5jZWwoWy4uLnRhc2tzXSk6IGFyZ3VtZW50IFwiICsgdCArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFza09yVGFza3MgIT09IFNFTEZfQ0FOQ0VMTEFUSU9OICYmIG5vdFVuZGVmKHRhc2tPclRhc2tzKSkge1xuICAgICAgY2hlY2sodGFza09yVGFza3MsIHRhc2ssIFwiY2FuY2VsKHRhc2spOiBhcmd1bWVudCBcIiArIHRhc2tPclRhc2tzICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTkNFTCwgdGFza09yVGFza3MpO1xufVxuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3RvciA9PT0gdm9pZCAwKSB7XG4gICAgc2VsZWN0b3IgPSBpZGVudGl0eTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjaGVjayhhcmd1bWVudHNbMF0sIG5vdFVuZGVmLCAnc2VsZWN0KHNlbGVjdG9yLCBbLi4uXSk6IGFyZ3VtZW50IHNlbGVjdG9yIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKHNlbGVjdG9yLCBmdW5jLCBcInNlbGVjdChzZWxlY3RvciwgWy4uLl0pOiBhcmd1bWVudCBcIiArIHNlbGVjdG9yICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChTRUxFQ1QsIHtcbiAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgYXJnczogYXJnc1xuICB9KTtcbn1cbi8qKlxuICBjaGFubmVsKHBhdHRlcm4sIFtidWZmZXJdKSAgICA9PiBjcmVhdGVzIGEgcHJveHkgY2hhbm5lbCBmb3Igc3RvcmUgYWN0aW9uc1xuKiovXG5cbmZ1bmN0aW9uIGFjdGlvbkNoYW5uZWwocGF0dGVybiQxLCBidWZmZXIkMSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHBhdHRlcm4kMSwgcGF0dGVybiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwuLi4pOiBhcmd1bWVudCBwYXR0ZXJuIGlzIG5vdCB2YWxpZCcpO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBjaGVjayhidWZmZXIkMSwgbm90VW5kZWYsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IGJ1ZmZlciBpcyB1bmRlZmluZWQnKTtcbiAgICAgIGNoZWNrKGJ1ZmZlciQxLCBidWZmZXIsIFwiYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBcIiArIGJ1ZmZlciQxICsgXCIgaXMgbm90IGEgdmFsaWQgYnVmZmVyXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEFDVElPTl9DSEFOTkVMLCB7XG4gICAgcGF0dGVybjogcGF0dGVybiQxLFxuICAgIGJ1ZmZlcjogYnVmZmVyJDFcbiAgfSk7XG59XG5mdW5jdGlvbiBjYW5jZWxsZWQoKSB7XG4gIHJldHVybiBtYWtlRWZmZWN0KENBTkNFTExFRCwge30pO1xufVxuZnVuY3Rpb24gZmx1c2goY2hhbm5lbCQxKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soY2hhbm5lbCQxLCBjaGFubmVsLCBcImZsdXNoKGNoYW5uZWwpOiBhcmd1bWVudCBcIiArIGNoYW5uZWwkMSArIFwiIGlzIG5vdCB2YWxpZCBjaGFubmVsXCIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoRkxVU0gsIGNoYW5uZWwkMSk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KHByb3ApIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhwcm9wLCBzdHJpbmcsIFwiZ2V0Q29udGV4dChwcm9wKTogYXJndW1lbnQgXCIgKyBwcm9wICsgXCIgaXMgbm90IGEgc3RyaW5nXCIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoR0VUX0NPTlRFWFQsIHByb3ApO1xufVxuZnVuY3Rpb24gc2V0Q29udGV4dChwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHByb3BzLCBvYmplY3QsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKG51bGwsIHByb3BzKSk7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChTRVRfQ09OVEVYVCwgcHJvcHMpO1xufVxudmFyIGRlbGF5ID1cbi8qI19fUFVSRV9fKi9cbmNhbGwuYmluZChudWxsLCBkZWxheVApO1xuXG5leHBvcnQgeyBhcHBseSBhcyAkLCBBTEwgYXMgQSwgbG9nRXJyb3IgYXMgQiwgQ0FMTCBhcyBDLCB3cmFwU2FnYURpc3BhdGNoIGFzIEQsIGlkZW50aXR5IGFzIEUsIEZPUksgYXMgRiwgR0VUX0NPTlRFWFQgYXMgRywgYnVmZmVycyBhcyBILCBkZXRhY2ggYXMgSSwgSk9JTiBhcyBKLCB0YWtlIGFzIEssIGZvcmsgYXMgTCwgY2FuY2VsIGFzIE0sIGNhbGwgYXMgTiwgYWN0aW9uQ2hhbm5lbCBhcyBPLCBQVVQgYXMgUCwgc2xpZGluZyBhcyBRLCBSQUNFIGFzIFIsIFNFTEVDVCBhcyBTLCBUQUtFIGFzIFQsIGRlbGF5IGFzIFUsIHJhY2UgYXMgViwgZWZmZWN0VHlwZXMgYXMgVywgdGFrZU1heWJlIGFzIFgsIHB1dCBhcyBZLCBwdXRSZXNvbHZlIGFzIFosIGFsbCBhcyBfLCBDUFMgYXMgYSwgY3BzIGFzIGEwLCBzcGF3biBhcyBhMSwgam9pbiBhcyBhMiwgc2VsZWN0IGFzIGEzLCBjYW5jZWxsZWQgYXMgYTQsIGZsdXNoIGFzIGE1LCBnZXRDb250ZXh0IGFzIGE2LCBzZXRDb250ZXh0IGFzIGE3LCBDQU5DRUwgYXMgYiwgY2hlY2sgYXMgYywgQUNUSU9OX0NIQU5ORUwgYXMgZCwgZXhwYW5kaW5nIGFzIGUsIENBTkNFTExFRCBhcyBmLCBGTFVTSCBhcyBnLCBTRVRfQ09OVEVYVCBhcyBoLCBpbnRlcm5hbEVyciBhcyBpLCBnZXRNZXRhSW5mbyBhcyBqLCBrVHJ1ZSBhcyBrLCBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzIGFzIGwsIGNyZWF0ZUVtcHR5QXJyYXkgYXMgbSwgbm9uZSBhcyBuLCBvbmNlIGFzIG8sIGFzc2lnbldpdGhTeW1ib2xzIGFzIHAsIG1ha2VJdGVyYXRvciBhcyBxLCByZW1vdmUgYXMgciwgc2hvdWxkQ29tcGxldGUgYXMgcywgbm9vcCBhcyB0LCBmbGF0TWFwIGFzIHUsIGdldExvY2F0aW9uIGFzIHYsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nIGFzIHcsIGFzeW5jSXRlcmF0b3JTeW1ib2wgYXMgeCwgc2hvdWxkQ2FuY2VsIGFzIHksIHNob3VsZFRlcm1pbmF0ZSBhcyB6IH07XG4iLCJpbXBvcnQgJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IGNoYW5uZWwsIHN0cmluZ2FibGVGdW5jLCBmdW5jLCBub3RVbmRlZiB9IGZyb20gJ0ByZWR1eC1zYWdhL2lzJztcbmltcG9ydCB7IHEgYXMgbWFrZUl0ZXJhdG9yLCBLIGFzIHRha2UsIEwgYXMgZm9yaywgTSBhcyBjYW5jZWwsIE4gYXMgY2FsbCwgTyBhcyBhY3Rpb25DaGFubmVsLCBRIGFzIHNsaWRpbmcsIFUgYXMgZGVsYXksIFYgYXMgcmFjZSwgYyBhcyBjaGVjayB9IGZyb20gJy4vaW8tNDI3OTQ1ZGQuanMnO1xuZXhwb3J0IHsgTyBhcyBhY3Rpb25DaGFubmVsLCBfIGFzIGFsbCwgJCBhcyBhcHBseSwgTiBhcyBjYWxsLCBNIGFzIGNhbmNlbCwgYTQgYXMgY2FuY2VsbGVkLCBhMCBhcyBjcHMsIFUgYXMgZGVsYXksIFcgYXMgZWZmZWN0VHlwZXMsIGE1IGFzIGZsdXNoLCBMIGFzIGZvcmssIGE2IGFzIGdldENvbnRleHQsIGEyIGFzIGpvaW4sIFkgYXMgcHV0LCBaIGFzIHB1dFJlc29sdmUsIFYgYXMgcmFjZSwgYTMgYXMgc2VsZWN0LCBhNyBhcyBzZXRDb250ZXh0LCBhMSBhcyBzcGF3biwgSyBhcyB0YWtlLCBYIGFzIHRha2VNYXliZSB9IGZyb20gJy4vaW8tNDI3OTQ1ZGQuanMnO1xuaW1wb3J0ICdAcmVkdXgtc2FnYS9kZWxheS1wJztcblxudmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZG9uZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBxRW5kID0ge307XG5mdW5jdGlvbiBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSB7XG4gIGlmIChjaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuICdjaGFubmVsJztcbiAgfVxuXG4gIGlmIChzdHJpbmdhYmxlRnVuYyhwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCk7XG4gIH1cblxuICBpZiAoZnVuYyhwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBwYXR0ZXJuT3JDaGFubmVsLm5hbWU7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpO1xufVxuZnVuY3Rpb24gZnNtSXRlcmF0b3IoZnNtLCBzdGFydFN0YXRlLCBuYW1lKSB7XG4gIHZhciBzdGF0ZVVwZGF0ZXIsXG4gICAgICBlcnJvclN0YXRlLFxuICAgICAgZWZmZWN0LFxuICAgICAgbmV4dFN0YXRlID0gc3RhcnRTdGF0ZTtcblxuICBmdW5jdGlvbiBuZXh0KGFyZywgZXJyb3IpIHtcbiAgICBpZiAobmV4dFN0YXRlID09PSBxRW5kKSB7XG4gICAgICByZXR1cm4gZG9uZShhcmcpO1xuICAgIH1cblxuICAgIGlmIChlcnJvciAmJiAhZXJyb3JTdGF0ZSkge1xuICAgICAgbmV4dFN0YXRlID0gcUVuZDtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZVVwZGF0ZXIgJiYgc3RhdGVVcGRhdGVyKGFyZyk7XG4gICAgICB2YXIgY3VycmVudFN0YXRlID0gZXJyb3IgPyBmc21bZXJyb3JTdGF0ZV0oZXJyb3IpIDogZnNtW25leHRTdGF0ZV0oKTtcbiAgICAgIG5leHRTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5uZXh0U3RhdGU7XG4gICAgICBlZmZlY3QgPSBjdXJyZW50U3RhdGUuZWZmZWN0O1xuICAgICAgc3RhdGVVcGRhdGVyID0gY3VycmVudFN0YXRlLnN0YXRlVXBkYXRlcjtcbiAgICAgIGVycm9yU3RhdGUgPSBjdXJyZW50U3RhdGUuZXJyb3JTdGF0ZTtcbiAgICAgIHJldHVybiBuZXh0U3RhdGUgPT09IHFFbmQgPyBkb25lKGFyZykgOiBlZmZlY3Q7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VJdGVyYXRvcihuZXh0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChudWxsLCBlcnJvcik7XG4gIH0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiB0YWtlRXZlcnkocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKVxuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uLFxuICAgICAgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0YWtlRXZlcnkoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiB0YWtlTGF0ZXN0KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlDYW5jZWwgPSBmdW5jdGlvbiB5Q2FuY2VsKHRhc2spIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogY2FuY2VsKHRhc2spXG4gICAgfTtcbiAgfTtcblxuICB2YXIgdGFzaywgYWN0aW9uO1xuXG4gIHZhciBzZXRUYXNrID0gZnVuY3Rpb24gc2V0VGFzayh0KSB7XG4gICAgcmV0dXJuIHRhc2sgPSB0O1xuICB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeVRha2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHRhc2sgPyB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EzJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FuY2VsKHRhc2spXG4gICAgICB9IDoge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRUYXNrXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbiksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0VGFza1xuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGFrZUxhdGVzdChcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHRha2VMZWFkaW5nKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUNhbGwgPSBmdW5jdGlvbiB5Q2FsbChhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBjYWxsLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbjtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FsbChhY3Rpb24pXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0YWtlTGVhZGluZyhcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGFjdGlvbiwgY2hhbm5lbDtcbiAgdmFyIHlBY3Rpb25DaGFubmVsID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIHNsaWRpbmcoMSkpXG4gIH07XG5cbiAgdmFyIHlUYWtlID0gZnVuY3Rpb24geVRha2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHRha2UoY2hhbm5lbClcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgeURlbGF5ID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBkZWxheShkZWxheUxlbmd0aClcbiAgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHZhciBzZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaGFubmVsID0gY2g7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeUFjdGlvbkNoYW5uZWwsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0Q2hhbm5lbFxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EzJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSgpLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3E0JyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTQ6IGZ1bmN0aW9uIHE0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlEZWxheVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGhyb3R0bGUoXCIgKyBzYWZlTmFtZShwYXR0ZXJuKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiByZXRyeShtYXhUcmllcywgZGVsYXlMZW5ndGgsIGZuKSB7XG4gIHZhciBjb3VudGVyID0gbWF4VHJpZXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlDYWxsID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBjYWxsLmFwcGx5KHZvaWQgMCwgW2ZuXS5jb25jYXQoYXJncykpXG4gIH07XG4gIHZhciB5RGVsYXkgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IGRlbGF5KGRlbGF5TGVuZ3RoKVxuICB9O1xuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FsbCxcbiAgICAgICAgZXJyb3JTdGF0ZTogJ3ExMCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6IHFFbmRcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMTA6IGZ1bmN0aW9uIHExMChlcnJvcikge1xuICAgICAgY291bnRlciAtPSAxO1xuXG4gICAgICBpZiAoY291bnRlciA8PSAwKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeURlbGF5XG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJyZXRyeShcIiArIGZuLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlSGVscGVyKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGFjdGlvbiwgcmFjZU91dHB1dDtcbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG4gIHZhciB5UmFjZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogcmFjZSh7XG4gICAgICBhY3Rpb246IHRha2UocGF0dGVybk9yQ2hhbm5lbCksXG4gICAgICBkZWJvdW5jZTogZGVsYXkoZGVsYXlMZW5ndGgpXG4gICAgfSlcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlOb29wID0gZnVuY3Rpb24geU5vb3AodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgdmFyIHNldFJhY2VPdXRwdXQgPSBmdW5jdGlvbiBzZXRSYWNlT3V0cHV0KHJvKSB7XG4gICAgcmV0dXJuIHJhY2VPdXRwdXQgPSBybztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMycsXG4gICAgICAgIGVmZmVjdDogeVJhY2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0UmFjZU91dHB1dFxuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiByYWNlT3V0cHV0LmRlYm91bmNlID8ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKVxuICAgICAgfSA6IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlOb29wKHJhY2VPdXRwdXQuYWN0aW9uKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcImRlYm91bmNlKFwiICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxudmFyIHZhbGlkYXRlVGFrZUVmZmVjdCA9IGZ1bmN0aW9uIHZhbGlkYXRlVGFrZUVmZmVjdChmbiwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGNoZWNrKHBhdHRlcm5PckNoYW5uZWwsIG5vdFVuZGVmLCBmbi5uYW1lICsgXCIgcmVxdWlyZXMgYSBwYXR0ZXJuIG9yIGNoYW5uZWxcIik7XG4gIGNoZWNrKHdvcmtlciwgbm90VW5kZWYsIGZuLm5hbWUgKyBcIiByZXF1aXJlcyBhIHNhZ2EgcGFyYW1ldGVyXCIpO1xufTtcblxuZnVuY3Rpb24gdGFrZUV2ZXJ5JDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VFdmVyeSQxLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGFrZUV2ZXJ5LCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiB0YWtlTGF0ZXN0JDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VMYXRlc3QkMSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rha2VMYXRlc3QsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHRha2VMZWFkaW5nJDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VMZWFkaW5nJDEsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAyXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFt0YWtlTGVhZGluZywgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gdGhyb3R0bGUkMShtcywgcGF0dGVybiwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socGF0dGVybiwgbm90VW5kZWYsICd0aHJvdHRsZSByZXF1aXJlcyBhIHBhdHRlcm4nKTtcbiAgICBjaGVjayh3b3JrZXIsIG5vdFVuZGVmLCAndGhyb3R0bGUgcmVxdWlyZXMgYSBzYWdhIHBhcmFtZXRlcicpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMyA/IF9sZW40IC0gMyA6IDApLCBfa2V5NCA9IDM7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gM10gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGhyb3R0bGUsIG1zLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiByZXRyeSQxKG1heFRyaWVzLCBkZWxheUxlbmd0aCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSA+IDMgPyBfbGVuNSAtIDMgOiAwKSwgX2tleTUgPSAzOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NSAtIDNdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHJldHVybiBjYWxsLmFwcGx5KHZvaWQgMCwgW3JldHJ5LCBtYXhUcmllcywgZGVsYXlMZW5ndGgsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIGRlYm91bmNlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42ID4gMyA/IF9sZW42IC0gMyA6IDApLCBfa2V5NiA9IDM7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2IC0gM10gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbZGVib3VuY2VIZWxwZXIsIGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbmV4cG9ydCB7IGRlYm91bmNlLCByZXRyeSQxIGFzIHJldHJ5LCB0YWtlRXZlcnkkMSBhcyB0YWtlRXZlcnksIHRha2VMYXRlc3QkMSBhcyB0YWtlTGF0ZXN0LCB0YWtlTGVhZGluZyQxIGFzIHRha2VMZWFkaW5nLCB0aHJvdHRsZSQxIGFzIHRocm90dGxlIH07XG4iLCJpbXBvcnQgeyBDQU5DRUwgfSBmcm9tICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcblxuZnVuY3Rpb24gZGVsYXlQKG1zLCB2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7XG4gICAgdmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciB0aW1lb3V0SWQ7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHJlc29sdmUsIG1zLCB2YWwpO1xuICB9KTtcblxuICBwcm9taXNlW0NBTkNFTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH07XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGF5UDtcbiIsImltcG9ydCB7IFRBU0ssIFNBR0FfQUNUSU9OLCBNVUxUSUNBU1QsIElPIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5cbnZhciB1bmRlZiA9IGZ1bmN0aW9uIHVuZGVmKHYpIHtcbiAgcmV0dXJuIHYgPT09IG51bGwgfHwgdiA9PT0gdW5kZWZpbmVkO1xufTtcbnZhciBub3RVbmRlZiA9IGZ1bmN0aW9uIG5vdFVuZGVmKHYpIHtcbiAgcmV0dXJuIHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkO1xufTtcbnZhciBmdW5jID0gZnVuY3Rpb24gZnVuYyhmKSB7XG4gIHJldHVybiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJztcbn07XG52YXIgbnVtYmVyID0gZnVuY3Rpb24gbnVtYmVyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJztcbn07XG52YXIgc3RyaW5nID0gZnVuY3Rpb24gc3RyaW5nKHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJztcbn07XG52YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIG9iamVjdCA9IGZ1bmN0aW9uIG9iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAhYXJyYXkob2JqKSAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG52YXIgcHJvbWlzZSA9IGZ1bmN0aW9uIHByb21pc2UocCkge1xuICByZXR1cm4gcCAmJiBmdW5jKHAudGhlbik7XG59O1xudmFyIGl0ZXJhdG9yID0gZnVuY3Rpb24gaXRlcmF0b3IoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGZ1bmMoaXQubmV4dCkgJiYgZnVuYyhpdC50aHJvdyk7XG59O1xudmFyIGl0ZXJhYmxlID0gZnVuY3Rpb24gaXRlcmFibGUoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGZ1bmMoU3ltYm9sKSA/IGZ1bmMoaXRbU3ltYm9sLml0ZXJhdG9yXSkgOiBhcnJheShpdCk7XG59O1xudmFyIHRhc2sgPSBmdW5jdGlvbiB0YXNrKHQpIHtcbiAgcmV0dXJuIHQgJiYgdFtUQVNLXTtcbn07XG52YXIgc2FnYUFjdGlvbiA9IGZ1bmN0aW9uIHNhZ2FBY3Rpb24oYSkge1xuICByZXR1cm4gQm9vbGVhbihhICYmIGFbU0FHQV9BQ1RJT05dKTtcbn07XG52YXIgb2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIG9ic2VydmFibGUob2IpIHtcbiAgcmV0dXJuIG9iICYmIGZ1bmMob2Iuc3Vic2NyaWJlKTtcbn07XG52YXIgYnVmZmVyID0gZnVuY3Rpb24gYnVmZmVyKGJ1Zikge1xuICByZXR1cm4gYnVmICYmIGZ1bmMoYnVmLmlzRW1wdHkpICYmIGZ1bmMoYnVmLnRha2UpICYmIGZ1bmMoYnVmLnB1dCk7XG59O1xudmFyIHBhdHRlcm4gPSBmdW5jdGlvbiBwYXR0ZXJuKHBhdCkge1xuICByZXR1cm4gcGF0ICYmIChzdHJpbmcocGF0KSB8fCBzeW1ib2wocGF0KSB8fCBmdW5jKHBhdCkgfHwgYXJyYXkocGF0KSAmJiBwYXQuZXZlcnkocGF0dGVybikpO1xufTtcbnZhciBjaGFubmVsID0gZnVuY3Rpb24gY2hhbm5lbChjaCkge1xuICByZXR1cm4gY2ggJiYgZnVuYyhjaC50YWtlKSAmJiBmdW5jKGNoLmNsb3NlKTtcbn07XG52YXIgc3RyaW5nYWJsZUZ1bmMgPSBmdW5jdGlvbiBzdHJpbmdhYmxlRnVuYyhmKSB7XG4gIHJldHVybiBmdW5jKGYpICYmIGYuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJyk7XG59O1xudmFyIHN5bWJvbCA9IGZ1bmN0aW9uIHN5bWJvbChzeW0pIHtcbiAgcmV0dXJuIEJvb2xlYW4oc3ltKSAmJiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHN5bS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIHN5bSAhPT0gU3ltYm9sLnByb3RvdHlwZTtcbn07XG52YXIgbXVsdGljYXN0ID0gZnVuY3Rpb24gbXVsdGljYXN0KGNoKSB7XG4gIHJldHVybiBjaGFubmVsKGNoKSAmJiBjaFtNVUxUSUNBU1RdO1xufTtcbnZhciBlZmZlY3QgPSBmdW5jdGlvbiBlZmZlY3QoZWZmKSB7XG4gIHJldHVybiBlZmYgJiYgZWZmW0lPXTtcbn07XG5cbmV4cG9ydCB7IGFycmF5LCBidWZmZXIsIGNoYW5uZWwsIGVmZmVjdCwgZnVuYywgaXRlcmFibGUsIGl0ZXJhdG9yLCBtdWx0aWNhc3QsIG5vdFVuZGVmLCBudW1iZXIsIG9iamVjdCwgb2JzZXJ2YWJsZSwgcGF0dGVybiwgcHJvbWlzZSwgc2FnYUFjdGlvbiwgc3RyaW5nLCBzdHJpbmdhYmxlRnVuYywgc3ltYm9sLCB0YXNrLCB1bmRlZiB9O1xuIiwidmFyIGNyZWF0ZVN5bWJvbCA9IGZ1bmN0aW9uIGNyZWF0ZVN5bWJvbChuYW1lKSB7XG4gIHJldHVybiBcIkBAcmVkdXgtc2FnYS9cIiArIG5hbWU7XG59O1xuXG52YXIgQ0FOQ0VMID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnQ0FOQ0VMX1BST01JU0UnKTtcbnZhciBDSEFOTkVMX0VORF9UWVBFID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnQ0hBTk5FTF9FTkQnKTtcbnZhciBJTyA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0lPJyk7XG52YXIgTUFUQ0ggPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdNQVRDSCcpO1xudmFyIE1VTFRJQ0FTVCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ01VTFRJQ0FTVCcpO1xudmFyIFNBR0FfQUNUSU9OID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnU0FHQV9BQ1RJT04nKTtcbnZhciBTRUxGX0NBTkNFTExBVElPTiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1NFTEZfQ0FOQ0VMTEFUSU9OJyk7XG52YXIgVEFTSyA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1RBU0snKTtcbnZhciBUQVNLX0NBTkNFTCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1RBU0tfQ0FOQ0VMJyk7XG52YXIgVEVSTUlOQVRFID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnVEVSTUlOQVRFJyk7XG52YXIgU0FHQV9MT0NBVElPTiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0xPQ0FUSU9OJyk7XG5cbmV4cG9ydCB7IENBTkNFTCwgQ0hBTk5FTF9FTkRfVFlQRSwgSU8sIE1BVENILCBNVUxUSUNBU1QsIFNBR0FfQUNUSU9OLCBTQUdBX0xPQ0FUSU9OLCBTRUxGX0NBTkNFTExBVElPTiwgVEFTSywgVEFTS19DQU5DRUwsIFRFUk1JTkFURSB9O1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/dChleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sdCk6dChlLnJlZHV4TG9nZ2VyPWUucmVkdXhMb2dnZXJ8fHt9KX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUsdCl7ZS5zdXBlcl89dCxlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KX1mdW5jdGlvbiByKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJraW5kXCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pLHQmJnQubGVuZ3RoJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhdGhcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gbihlLHQscil7bi5zdXBlcl8uY2FsbCh0aGlzLFwiRVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibGhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmhzXCIse3ZhbHVlOnIsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIG8oZSx0KXtvLnN1cGVyXy5jYWxsKHRoaXMsXCJOXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJyaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gaShlLHQpe2kuc3VwZXJfLmNhbGwodGhpcyxcIkRcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBhKGUsdCxyKXthLnN1cGVyXy5jYWxsKHRoaXMsXCJBXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpbmRleFwiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIml0ZW1cIix7dmFsdWU6cixlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gZihlLHQscil7dmFyIG49ZS5zbGljZSgocnx8dCkrMXx8ZS5sZW5ndGgpO3JldHVybiBlLmxlbmd0aD10PDA/ZS5sZW5ndGgrdDp0LGUucHVzaC5hcHBseShlLG4pLGV9ZnVuY3Rpb24gdShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOk4oZSk7cmV0dXJuXCJvYmplY3RcIiE9PXQ/dDplPT09TWF0aD9cIm1hdGhcIjpudWxsPT09ZT9cIm51bGxcIjpBcnJheS5pc0FycmF5KGUpP1wiYXJyYXlcIjpcIltvYmplY3QgRGF0ZV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT9cImRhdGVcIjpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnRvU3RyaW5nJiYvXlxcLy4qXFwvLy50ZXN0KGUudG9TdHJpbmcoKSk/XCJyZWdleHBcIjpcIm9iamVjdFwifWZ1bmN0aW9uIGwoZSx0LHIsYyxzLGQscCl7cz1zfHxbXSxwPXB8fFtdO3ZhciBnPXMuc2xpY2UoMCk7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGQpe2lmKGMpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJmMoZyxkKSlyZXR1cm47aWYoXCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgYz9cInVuZGVmaW5lZFwiOk4oYykpKXtpZihjLnByZWZpbHRlciYmYy5wcmVmaWx0ZXIoZyxkKSlyZXR1cm47aWYoYy5ub3JtYWxpemUpe3ZhciBoPWMubm9ybWFsaXplKGcsZCxlLHQpO2gmJihlPWhbMF0sdD1oWzFdKX19fWcucHVzaChkKX1cInJlZ2V4cFwiPT09dShlKSYmXCJyZWdleHBcIj09PXUodCkmJihlPWUudG9TdHJpbmcoKSx0PXQudG9TdHJpbmcoKSk7dmFyIHk9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpLHY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpOKHQpLGI9XCJ1bmRlZmluZWRcIiE9PXl8fHAmJnBbcC5sZW5ndGgtMV0ubGhzJiZwW3AubGVuZ3RoLTFdLmxocy5oYXNPd25Qcm9wZXJ0eShkKSxtPVwidW5kZWZpbmVkXCIhPT12fHxwJiZwW3AubGVuZ3RoLTFdLnJocyYmcFtwLmxlbmd0aC0xXS5yaHMuaGFzT3duUHJvcGVydHkoZCk7aWYoIWImJm0pcihuZXcgbyhnLHQpKTtlbHNlIGlmKCFtJiZiKXIobmV3IGkoZyxlKSk7ZWxzZSBpZih1KGUpIT09dSh0KSlyKG5ldyBuKGcsZSx0KSk7ZWxzZSBpZihcImRhdGVcIj09PXUoZSkmJmUtdCE9PTApcihuZXcgbihnLGUsdCkpO2Vsc2UgaWYoXCJvYmplY3RcIj09PXkmJm51bGwhPT1lJiZudWxsIT09dClpZihwLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdC5saHM9PT1lfSkubGVuZ3RoKWUhPT10JiZyKG5ldyBuKGcsZSx0KSk7ZWxzZXtpZihwLnB1c2goe2xoczplLHJoczp0fSksQXJyYXkuaXNBcnJheShlKSl7dmFyIHc7ZS5sZW5ndGg7Zm9yKHc9MDt3PGUubGVuZ3RoO3crKyl3Pj10Lmxlbmd0aD9yKG5ldyBhKGcsdyxuZXcgaSh2b2lkIDAsZVt3XSkpKTpsKGVbd10sdFt3XSxyLGMsZyx3LHApO2Zvcig7dzx0Lmxlbmd0aDspcihuZXcgYShnLHcsbmV3IG8odm9pZCAwLHRbdysrXSkpKX1lbHNle3ZhciB4PU9iamVjdC5rZXlzKGUpLFM9T2JqZWN0LmtleXModCk7eC5mb3JFYWNoKGZ1bmN0aW9uKG4sbyl7dmFyIGk9Uy5pbmRleE9mKG4pO2k+PTA/KGwoZVtuXSx0W25dLHIsYyxnLG4scCksUz1mKFMsaSkpOmwoZVtuXSx2b2lkIDAscixjLGcsbixwKX0pLFMuZm9yRWFjaChmdW5jdGlvbihlKXtsKHZvaWQgMCx0W2VdLHIsYyxnLGUscCl9KX1wLmxlbmd0aD1wLmxlbmd0aC0xfWVsc2UgZSE9PXQmJihcIm51bWJlclwiPT09eSYmaXNOYU4oZSkmJmlzTmFOKHQpfHxyKG5ldyBuKGcsZSx0KSkpfWZ1bmN0aW9uIGMoZSx0LHIsbil7cmV0dXJuIG49bnx8W10sbChlLHQsZnVuY3Rpb24oZSl7ZSYmbi5wdXNoKGUpfSxyKSxuLmxlbmd0aD9uOnZvaWQgMH1mdW5jdGlvbiBzKGUsdCxyKXtpZihyLnBhdGgmJnIucGF0aC5sZW5ndGgpe3ZhciBuLG89ZVt0XSxpPXIucGF0aC5sZW5ndGgtMTtmb3Iobj0wO248aTtuKyspbz1vW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMob1tyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZGVsZXRlIG9bci5wYXRoW25dXTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOm9bci5wYXRoW25dXT1yLnJoc319ZWxzZSBzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cyhlW3RdLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZT1mKGUsdCk7YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjplW3RdPXIucmhzfXJldHVybiBlfWZ1bmN0aW9uIGQoZSx0LHIpe2lmKGUmJnQmJnImJnIua2luZCl7Zm9yKHZhciBuPWUsbz0tMSxpPXIucGF0aD9yLnBhdGgubGVuZ3RoLTE6MDsrK288aTspXCJ1bmRlZmluZWRcIj09dHlwZW9mIG5bci5wYXRoW29dXSYmKG5bci5wYXRoW29dXT1cIm51bWJlclwiPT10eXBlb2Ygci5wYXRoW29dP1tdOnt9KSxuPW5bci5wYXRoW29dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cyhyLnBhdGg/bltyLnBhdGhbb11dOm4sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpkZWxldGUgbltyLnBhdGhbb11dO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6bltyLnBhdGhbb11dPXIucmhzfX19ZnVuY3Rpb24gcChlLHQscil7aWYoci5wYXRoJiZyLnBhdGgubGVuZ3RoKXt2YXIgbixvPWVbdF0saT1yLnBhdGgubGVuZ3RoLTE7Zm9yKG49MDtuPGk7bisrKW89b1tyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpwKG9bci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOm9bci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJFXCI6b1tyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIk5cIjpkZWxldGUgb1tyLnBhdGhbbl1dfX1lbHNlIHN3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpwKGVbdF0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjplW3RdPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjplW3RdPXIubGhzO2JyZWFrO2Nhc2VcIk5cIjplPWYoZSx0KX1yZXR1cm4gZX1mdW5jdGlvbiBnKGUsdCxyKXtpZihlJiZ0JiZyJiZyLmtpbmQpe3ZhciBuLG8saT1lO2ZvcihvPXIucGF0aC5sZW5ndGgtMSxuPTA7bjxvO24rKylcInVuZGVmaW5lZFwiPT10eXBlb2YgaVtyLnBhdGhbbl1dJiYoaVtyLnBhdGhbbl1dPXt9KSxpPWlbci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChpW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjppW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOmlbci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJOXCI6ZGVsZXRlIGlbci5wYXRoW25dXX19fWZ1bmN0aW9uIGgoZSx0LHIpe2lmKGUmJnQpe3ZhciBuPWZ1bmN0aW9uKG4pe3ImJiFyKGUsdCxuKXx8ZChlLHQsbil9O2woZSx0LG4pfX1mdW5jdGlvbiB5KGUpe3JldHVyblwiY29sb3I6IFwiK0ZbZV0uY29sb3IrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCJ9ZnVuY3Rpb24gdihlKXt2YXIgdD1lLmtpbmQscj1lLnBhdGgsbj1lLmxocyxvPWUucmhzLGk9ZS5pbmRleCxhPWUuaXRlbTtzd2l0Y2godCl7Y2FzZVwiRVwiOnJldHVybltyLmpvaW4oXCIuXCIpLG4sXCLihpJcIixvXTtjYXNlXCJOXCI6cmV0dXJuW3Iuam9pbihcIi5cIiksb107Y2FzZVwiRFwiOnJldHVybltyLmpvaW4oXCIuXCIpXTtjYXNlXCJBXCI6cmV0dXJuW3Iuam9pbihcIi5cIikrXCJbXCIraStcIl1cIixhXTtkZWZhdWx0OnJldHVybltdfX1mdW5jdGlvbiBiKGUsdCxyLG4pe3ZhciBvPWMoZSx0KTt0cnl7bj9yLmdyb3VwQ29sbGFwc2VkKFwiZGlmZlwiKTpyLmdyb3VwKFwiZGlmZlwiKX1jYXRjaChlKXtyLmxvZyhcImRpZmZcIil9bz9vLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZS5raW5kLG49dihlKTtyLmxvZy5hcHBseShyLFtcIiVjIFwiK0ZbdF0udGV4dCx5KHQpXS5jb25jYXQoUChuKSkpfSk6ci5sb2coXCLigJTigJQgbm8gZGlmZiDigJTigJRcIik7dHJ5e3IuZ3JvdXBFbmQoKX1jYXRjaChlKXtyLmxvZyhcIuKAlOKAlCBkaWZmIGVuZCDigJTigJQgXCIpfX1mdW5jdGlvbiBtKGUsdCxyLG4pe3N3aXRjaChcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOk4oZSkpe2Nhc2VcIm9iamVjdFwiOnJldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGVbbl0/ZVtuXS5hcHBseShlLFAocikpOmVbbl07Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gZSh0KTtkZWZhdWx0OnJldHVybiBlfX1mdW5jdGlvbiB3KGUpe3ZhciB0PWUudGltZXN0YW1wLHI9ZS5kdXJhdGlvbjtyZXR1cm4gZnVuY3Rpb24oZSxuLG8pe3ZhciBpPVtcImFjdGlvblwiXTtyZXR1cm4gaS5wdXNoKFwiJWNcIitTdHJpbmcoZS50eXBlKSksdCYmaS5wdXNoKFwiJWNAIFwiK24pLHImJmkucHVzaChcIiVjKGluIFwiK28udG9GaXhlZCgyKStcIiBtcylcIiksaS5qb2luKFwiIFwiKX19ZnVuY3Rpb24geChlLHQpe3ZhciByPXQubG9nZ2VyLG49dC5hY3Rpb25UcmFuc2Zvcm1lcixvPXQudGl0bGVGb3JtYXR0ZXIsaT12b2lkIDA9PT1vP3codCk6byxhPXQuY29sbGFwc2VkLGY9dC5jb2xvcnMsdT10LmxldmVsLGw9dC5kaWZmLGM9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQudGl0bGVGb3JtYXR0ZXI7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8scyl7dmFyIGQ9by5zdGFydGVkLHA9by5zdGFydGVkVGltZSxnPW8uYWN0aW9uLGg9by5wcmV2U3RhdGUseT1vLmVycm9yLHY9by50b29rLHc9by5uZXh0U3RhdGUseD1lW3MrMV07eCYmKHc9eC5wcmV2U3RhdGUsdj14LnN0YXJ0ZWQtZCk7dmFyIFM9bihnKSxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YShmdW5jdGlvbigpe3JldHVybiB3fSxnLG8pOmEsaj1EKHApLEU9Zi50aXRsZT9cImNvbG9yOiBcIitmLnRpdGxlKFMpK1wiO1wiOlwiXCIsQT1bXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCJdO0EucHVzaChFKSx0LnRpbWVzdGFtcCYmQS5wdXNoKFwiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiKSx0LmR1cmF0aW9uJiZBLnB1c2goXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCIpO3ZhciBPPWkoUyxqLHYpO3RyeXtrP2YudGl0bGUmJmM/ci5ncm91cENvbGxhcHNlZC5hcHBseShyLFtcIiVjIFwiK09dLmNvbmNhdChBKSk6ci5ncm91cENvbGxhcHNlZChPKTpmLnRpdGxlJiZjP3IuZ3JvdXAuYXBwbHkocixbXCIlYyBcIitPXS5jb25jYXQoQSkpOnIuZ3JvdXAoTyl9Y2F0Y2goZSl7ci5sb2coTyl9dmFyIE49bSh1LFMsW2hdLFwicHJldlN0YXRlXCIpLFA9bSh1LFMsW1NdLFwiYWN0aW9uXCIpLEM9bSh1LFMsW3ksaF0sXCJlcnJvclwiKSxGPW0odSxTLFt3XSxcIm5leHRTdGF0ZVwiKTtpZihOKWlmKGYucHJldlN0YXRlKXt2YXIgTD1cImNvbG9yOiBcIitmLnByZXZTdGF0ZShoKStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW05dKFwiJWMgcHJldiBzdGF0ZVwiLEwsaCl9ZWxzZSByW05dKFwicHJldiBzdGF0ZVwiLGgpO2lmKFApaWYoZi5hY3Rpb24pe3ZhciBUPVwiY29sb3I6IFwiK2YuYWN0aW9uKFMpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbUF0oXCIlYyBhY3Rpb24gICAgXCIsVCxTKX1lbHNlIHJbUF0oXCJhY3Rpb24gICAgXCIsUyk7aWYoeSYmQylpZihmLmVycm9yKXt2YXIgTT1cImNvbG9yOiBcIitmLmVycm9yKHksaCkrXCI7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO3JbQ10oXCIlYyBlcnJvciAgICAgXCIsTSx5KX1lbHNlIHJbQ10oXCJlcnJvciAgICAgXCIseSk7aWYoRilpZihmLm5leHRTdGF0ZSl7dmFyIF89XCJjb2xvcjogXCIrZi5uZXh0U3RhdGUodykrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltGXShcIiVjIG5leHQgc3RhdGVcIixfLHcpfWVsc2UgcltGXShcIm5leHQgc3RhdGVcIix3KTtsJiZiKGgsdyxyLGspO3RyeXtyLmdyb3VwRW5kKCl9Y2F0Y2goZSl7ci5sb2coXCLigJTigJQgbG9nIGVuZCDigJTigJRcIil9fSl9ZnVuY3Rpb24gUygpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PU9iamVjdC5hc3NpZ24oe30sTCxlKSxyPXQubG9nZ2VyLG49dC5zdGF0ZVRyYW5zZm9ybWVyLG89dC5lcnJvclRyYW5zZm9ybWVyLGk9dC5wcmVkaWNhdGUsYT10LmxvZ0Vycm9ycyxmPXQuZGlmZlByZWRpY2F0ZTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgcilyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX19O2lmKGUuZ2V0U3RhdGUmJmUuZGlzcGF0Y2gpcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJbcmVkdXgtbG9nZ2VyXSByZWR1eC1sb2dnZXIgbm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIHBhc3MgbG9nZ2VyIGluc3RhbmNlIGFzIG1pZGRsZXdhcmU6XFxuLy8gTG9nZ2VyIHdpdGggZGVmYXVsdCBvcHRpb25zXFxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXFxuICByZWR1Y2VyLFxcbiAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcXG4pXFxuLy8gT3IgeW91IGNhbiBjcmVhdGUgeW91ciBvd24gbG9nZ2VyIHdpdGggY3VzdG9tIG9wdGlvbnMgaHR0cDovL2JpdC5seS9yZWR1eC1sb2dnZXItb3B0aW9uc1xcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcih7XFxuICAvLyAuLi5vcHRpb25zXFxufSk7XFxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcXG4gIHJlZHVjZXIsXFxuICBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKVxcbilcXG5cIiksZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfX19O3ZhciB1PVtdO3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj1lLmdldFN0YXRlO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgaSYmIWkocixsKSlyZXR1cm4gZShsKTt2YXIgYz17fTt1LnB1c2goYyksYy5zdGFydGVkPU8ubm93KCksYy5zdGFydGVkVGltZT1uZXcgRGF0ZSxjLnByZXZTdGF0ZT1uKHIoKSksYy5hY3Rpb249bDt2YXIgcz12b2lkIDA7aWYoYSl0cnl7cz1lKGwpfWNhdGNoKGUpe2MuZXJyb3I9byhlKX1lbHNlIHM9ZShsKTtjLnRvb2s9Ty5ub3coKS1jLnN0YXJ0ZWQsYy5uZXh0U3RhdGU9bihyKCkpO3ZhciBkPXQuZGlmZiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZj9mKHIsbCk6dC5kaWZmO2lmKHgodSxPYmplY3QuYXNzaWduKHt9LHQse2RpZmY6ZH0pKSx1Lmxlbmd0aD0wLGMuZXJyb3IpdGhyb3cgYy5lcnJvcjtyZXR1cm4gc319fX12YXIgayxqLEU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IEFycmF5KHQrMSkuam9pbihlKX0sQT1mdW5jdGlvbihlLHQpe3JldHVybiBFKFwiMFwiLHQtZS50b1N0cmluZygpLmxlbmd0aCkrZX0sRD1mdW5jdGlvbihlKXtyZXR1cm4gQShlLmdldEhvdXJzKCksMikrXCI6XCIrQShlLmdldE1pbnV0ZXMoKSwyKStcIjpcIitBKGUuZ2V0U2Vjb25kcygpLDIpK1wiLlwiK0EoZS5nZXRNaWxsaXNlY29uZHMoKSwzKX0sTz1cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJm51bGwhPT1wZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlOkRhdGUsTj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxQPWZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLHI9QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKXJbdF09ZVt0XTtyZXR1cm4gcn1yZXR1cm4gQXJyYXkuZnJvbShlKX0sQz1bXTtrPVwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGdsb2JhbD9cInVuZGVmaW5lZFwiOk4oZ2xvYmFsKSkmJmdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30saj1rLkRlZXBEaWZmLGomJkMucHVzaChmdW5jdGlvbigpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBqJiZrLkRlZXBEaWZmPT09YyYmKGsuRGVlcERpZmY9aixqPXZvaWQgMCl9KSx0KG4sciksdChvLHIpLHQoaSxyKSx0KGEsciksT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYyx7ZGlmZjp7dmFsdWU6YyxlbnVtZXJhYmxlOiEwfSxvYnNlcnZhYmxlRGlmZjp7dmFsdWU6bCxlbnVtZXJhYmxlOiEwfSxhcHBseURpZmY6e3ZhbHVlOmgsZW51bWVyYWJsZTohMH0sYXBwbHlDaGFuZ2U6e3ZhbHVlOmQsZW51bWVyYWJsZTohMH0scmV2ZXJ0Q2hhbmdlOnt2YWx1ZTpnLGVudW1lcmFibGU6ITB9LGlzQ29uZmxpY3Q6e3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGp9LGVudW1lcmFibGU6ITB9LG5vQ29uZmxpY3Q6e3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIEMmJihDLmZvckVhY2goZnVuY3Rpb24oZSl7ZSgpfSksQz1udWxsKSxjfSxlbnVtZXJhYmxlOiEwfX0pO3ZhciBGPXtFOntjb2xvcjpcIiMyMTk2RjNcIix0ZXh0OlwiQ0hBTkdFRDpcIn0sTjp7Y29sb3I6XCIjNENBRjUwXCIsdGV4dDpcIkFEREVEOlwifSxEOntjb2xvcjpcIiNGNDQzMzZcIix0ZXh0OlwiREVMRVRFRDpcIn0sQTp7Y29sb3I6XCIjMjE5NkYzXCIsdGV4dDpcIkFSUkFZOlwifX0sTD17bGV2ZWw6XCJsb2dcIixsb2dnZXI6Y29uc29sZSxsb2dFcnJvcnM6ITAsY29sbGFwc2VkOnZvaWQgMCxwcmVkaWNhdGU6dm9pZCAwLGR1cmF0aW9uOiExLHRpbWVzdGFtcDohMCxzdGF0ZVRyYW5zZm9ybWVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxhY3Rpb25UcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sZXJyb3JUcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY29sb3JzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiaW5oZXJpdFwifSxwcmV2U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm5cIiM5RTlFOUVcIn0sYWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuXCIjMDNBOUY0XCJ9LG5leHRTdGF0ZTpmdW5jdGlvbigpe3JldHVyblwiIzRDQUY1MFwifSxlcnJvcjpmdW5jdGlvbigpe3JldHVyblwiI0YyMDQwNFwifX0sZGlmZjohMSxkaWZmUHJlZGljYXRlOnZvaWQgMCx0cmFuc2Zvcm1lcjp2b2lkIDB9LFQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1lLmRpc3BhdGNoLHI9ZS5nZXRTdGF0ZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByP1MoKSh7ZGlzcGF0Y2g6dCxnZXRTdGF0ZTpyfSk6dm9pZCBjb25zb2xlLmVycm9yKFwiXFxuW3JlZHV4LWxvZ2dlciB2M10gQlJFQUtJTkcgQ0hBTkdFXFxuW3JlZHV4LWxvZ2dlciB2M10gU2luY2UgMy4wLjAgcmVkdXgtbG9nZ2VyIGV4cG9ydHMgYnkgZGVmYXVsdCBsb2dnZXIgd2l0aCBkZWZhdWx0IHNldHRpbmdzLlxcbltyZWR1eC1sb2dnZXIgdjNdIENoYW5nZVxcbltyZWR1eC1sb2dnZXIgdjNdIGltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xcbltyZWR1eC1sb2dnZXIgdjNdIHRvXFxuW3JlZHV4LWxvZ2dlciB2M10gaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xcblwiKX07ZS5kZWZhdWx0cz1MLGUuY3JlYXRlTG9nZ2VyPVMsZS5sb2dnZXI9VCxlLmRlZmF1bHQ9VCxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pO1xuIiwiZXhwb3J0ICogZnJvbSAnQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzJztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaW1tdXRhYmxlSW5pdChjb25maWcpIHtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MTUuMC4xL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxXG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IgJiYgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFX0ZBTExCQUNLID0gMHhlYWM3O1xuXG4gIHZhciBnbG9iYWxDb25maWcgPSB7XG4gICAgdXNlX3N0YXRpYzogZmFsc2VcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KGNvbmZpZykpIHtcbiAgICAgIGlmIChjb25maWcudXNlX3N0YXRpYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMgPSBCb29sZWFuKGNvbmZpZy51c2Vfc3RhdGljKTtcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT2JqZWN0KGRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmXG4gICAgICAhQXJyYXkuaXNBcnJheShkYXRhKSAmJlxuICAgICAgZGF0YSAhPT0gbnVsbFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KG9iaikge1xuICAgICAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICAgICAgaWYgKCFwcm90b3R5cGUpIHtcbiAgICAgICAgICByZXR1cm4ge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9wZXJ0eVRvKHRhcmdldCwgbWV0aG9kTmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBtZXRob2ROYW1lLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJhblByb3BlcnR5KHRhcmdldCwgbWV0aG9kTmFtZSkge1xuICAgIGFkZFByb3BlcnR5VG8odGFyZ2V0LCBtZXRob2ROYW1lLCBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93IG5ldyBJbW11dGFibGVFcnJvcihcIlRoZSBcIiArIG1ldGhvZE5hbWUgK1xuICAgICAgICBcIiBtZXRob2QgY2Fubm90IGJlIGludm9rZWQgb24gYW4gSW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlLlwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBpbW11dGFiaWxpdHlUYWcgPSBcIl9faW1tdXRhYmxlX2ludmFyaWFudHNfaG9sZFwiO1xuXG4gIGZ1bmN0aW9uIGFkZEltbXV0YWJpbGl0eVRhZyh0YXJnZXQpIHtcbiAgICBhZGRQcm9wZXJ0eVRvKHRhcmdldCwgaW1tdXRhYmlsaXR5VGFnLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSW1tdXRhYmxlKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBudWxsIHx8IEJvb2xlYW4oXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBpbW11dGFiaWxpdHlUYWcpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbiBKYXZhU2NyaXB0LCBvbmx5IG9iamVjdHMgYXJlIGV2ZW4gcG90ZW50aWFsbHkgbXV0YWJsZS5cbiAgICAgIC8vIHN0cmluZ3MsIG51bWJlcnMsIG51bGwsIGFuZCB1bmRlZmluZWQgYXJlIGFsbCBuYXR1cmFsbHkgaW1tdXRhYmxlLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFcXVhbChhLCBiKSB7XG4gICAgLy8gQXZvaWQgZmFsc2UgcG9zaXRpdmVzIGR1ZSB0byAoTmFOICE9PSBOYU4pIGV2YWx1YXRpbmcgdG8gdHJ1ZVxuICAgIHJldHVybiAoYSA9PT0gYiB8fCAoYSAhPT0gYSAmJiBiICE9PSBiKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc01lcmdhYmxlT2JqZWN0KHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQgIT09IG51bGwgJiYgdHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIiAmJiAhKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkgJiYgISh0YXJnZXQgaW5zdGFuY2VvZiBEYXRlKTtcbiAgfVxuXG4gIHZhciBtdXRhdGluZ09iamVjdE1ldGhvZHMgPSBbXG4gICAgXCJzZXRQcm90b3R5cGVPZlwiXG4gIF07XG5cbiAgdmFyIG5vbk11dGF0aW5nT2JqZWN0TWV0aG9kcyA9IFtcbiAgICBcImtleXNcIlxuICBdO1xuXG4gIHZhciBtdXRhdGluZ0FycmF5TWV0aG9kcyA9IG11dGF0aW5nT2JqZWN0TWV0aG9kcy5jb25jYXQoW1xuICAgIFwicHVzaFwiLCBcInBvcFwiLCBcInNvcnRcIiwgXCJzcGxpY2VcIiwgXCJzaGlmdFwiLCBcInVuc2hpZnRcIiwgXCJyZXZlcnNlXCJcbiAgXSk7XG5cbiAgdmFyIG5vbk11dGF0aW5nQXJyYXlNZXRob2RzID0gbm9uTXV0YXRpbmdPYmplY3RNZXRob2RzLmNvbmNhdChbXG4gICAgXCJtYXBcIiwgXCJmaWx0ZXJcIiwgXCJzbGljZVwiLCBcImNvbmNhdFwiLCBcInJlZHVjZVwiLCBcInJlZHVjZVJpZ2h0XCJcbiAgXSk7XG5cbiAgdmFyIG11dGF0aW5nRGF0ZU1ldGhvZHMgPSBtdXRhdGluZ09iamVjdE1ldGhvZHMuY29uY2F0KFtcbiAgICBcInNldERhdGVcIiwgXCJzZXRGdWxsWWVhclwiLCBcInNldEhvdXJzXCIsIFwic2V0TWlsbGlzZWNvbmRzXCIsIFwic2V0TWludXRlc1wiLCBcInNldE1vbnRoXCIsIFwic2V0U2Vjb25kc1wiLFxuICAgIFwic2V0VGltZVwiLCBcInNldFVUQ0RhdGVcIiwgXCJzZXRVVENGdWxsWWVhclwiLCBcInNldFVUQ0hvdXJzXCIsIFwic2V0VVRDTWlsbGlzZWNvbmRzXCIsIFwic2V0VVRDTWludXRlc1wiLFxuICAgIFwic2V0VVRDTW9udGhcIiwgXCJzZXRVVENTZWNvbmRzXCIsIFwic2V0WWVhclwiXG4gIF0pO1xuXG4gIGZ1bmN0aW9uIEltbXV0YWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm5hbWUgPSAnTXlFcnJvcic7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbiAgfVxuICBJbW11dGFibGVFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbiAgSW1tdXRhYmxlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXJyb3I7XG5cbiAgZnVuY3Rpb24gbWFrZUltbXV0YWJsZShvYmosIGJhbm5lZE1ldGhvZHMpIHtcbiAgICAvLyBUYWcgaXQgc28gd2UgY2FuIHF1aWNrbHkgdGVsbCBpdCdzIGltbXV0YWJsZSBsYXRlci5cbiAgICBhZGRJbW11dGFiaWxpdHlUYWcob2JqKTtcblxuICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAvLyBNYWtlIGFsbCBtdXRhdGluZyBtZXRob2RzIHRocm93IGV4Y2VwdGlvbnMuXG4gICAgICBmb3IgKHZhciBpbmRleCBpbiBiYW5uZWRNZXRob2RzKSB7XG4gICAgICAgIGlmIChiYW5uZWRNZXRob2RzLmhhc093blByb3BlcnR5KGluZGV4KSkge1xuICAgICAgICAgIGJhblByb3BlcnR5KG9iaiwgYmFubmVkTWV0aG9kc1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZyZWV6ZSBpdCBhbmQgcmV0dXJuIGl0LlxuICAgICAgT2JqZWN0LmZyZWV6ZShvYmopO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlTWV0aG9kUmV0dXJuSW1tdXRhYmxlKG9iaiwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBjdXJyZW50TWV0aG9kID0gb2JqW21ldGhvZE5hbWVdO1xuXG4gICAgYWRkUHJvcGVydHlUbyhvYmosIG1ldGhvZE5hbWUsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEltbXV0YWJsZShjdXJyZW50TWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcnJheVNldChpZHgsIHZhbHVlLCBjb25maWcpIHtcbiAgICB2YXIgZGVlcCAgICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcuZGVlcDtcblxuICAgIGlmIChpZHggaW4gdGhpcykge1xuICAgICAgaWYgKGRlZXAgJiYgdGhpc1tpZHhdICE9PSB2YWx1ZSAmJiBpc01lcmdhYmxlT2JqZWN0KHZhbHVlKSAmJiBpc01lcmdhYmxlT2JqZWN0KHRoaXNbaWR4XSkpIHtcbiAgICAgICAgdmFsdWUgPSBJbW11dGFibGUubWVyZ2UodGhpc1tpZHhdLCB2YWx1ZSwge2RlZXA6IHRydWUsIG1vZGU6ICdyZXBsYWNlJ30pO1xuICAgICAgfVxuICAgICAgaWYgKGlzRXF1YWwodGhpc1tpZHhdLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG11dGFibGUgPSBhc011dGFibGVBcnJheS5jYWxsKHRoaXMpO1xuICAgIG11dGFibGVbaWR4XSA9IEltbXV0YWJsZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGVBcnJheShtdXRhYmxlKTtcbiAgfVxuXG4gIHZhciBpbW11dGFibGVFbXB0eUFycmF5ID0gSW1tdXRhYmxlKFtdKTtcblxuICBmdW5jdGlvbiBhcnJheVNldEluKHB0aCwgdmFsdWUsIGNvbmZpZykge1xuICAgIHZhciBoZWFkID0gcHRoWzBdO1xuXG4gICAgaWYgKHB0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBhcnJheVNldC5jYWxsKHRoaXMsIGhlYWQsIHZhbHVlLCBjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFpbCA9IHB0aC5zbGljZSgxKTtcbiAgICAgIHZhciB0aGlzSGVhZCA9IHRoaXNbaGVhZF07XG4gICAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICAgIGlmICh0eXBlb2YodGhpc0hlYWQpID09PSBcIm9iamVjdFwiICYmIHRoaXNIZWFkICE9PSBudWxsKSB7XG4gICAgICAgIC8vIE1pZ2h0ICh2YWxpZGx5KSBiZSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgbmV3VmFsdWUgPSBJbW11dGFibGUuc2V0SW4odGhpc0hlYWQsIHRhaWwsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXh0SGVhZCA9IHRhaWxbMF07XG4gICAgICAgIC8vIElmIHRoZSBuZXh0IHBhdGggcGFydCBpcyBhIG51bWJlciwgdGhlbiB3ZSBhcmUgc2V0dGluZyBpbnRvIGFuIGFycmF5LCBlbHNlIGFuIG9iamVjdC5cbiAgICAgICAgaWYgKG5leHRIZWFkICE9PSAnJyAmJiBpc0Zpbml0ZShuZXh0SGVhZCkpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGFycmF5U2V0SW4uY2FsbChpbW11dGFibGVFbXB0eUFycmF5LCB0YWlsLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBvYmplY3RTZXRJbi5jYWxsKGltbXV0YWJsZUVtcHR5T2JqZWN0LCB0YWlsLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGhlYWQgaW4gdGhpcyAmJiB0aGlzSGVhZCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBtdXRhYmxlID0gYXNNdXRhYmxlQXJyYXkuY2FsbCh0aGlzKTtcbiAgICAgIG11dGFibGVbaGVhZF0gPSBuZXdWYWx1ZTtcbiAgICAgIHJldHVybiBtYWtlSW1tdXRhYmxlQXJyYXkobXV0YWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUltbXV0YWJsZUFycmF5KGFycmF5KSB7XG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZWlyIGltcGxlbWVudGF0aW9ucywgYnV0IHdyYXAgdGhlc2UgZnVuY3Rpb25zIHRvIG1ha2Ugc3VyZVxuICAgIC8vIHRoZXkgYWx3YXlzIHJldHVybiBhbiBpbW11dGFibGUgdmFsdWUuXG4gICAgZm9yICh2YXIgaW5kZXggaW4gbm9uTXV0YXRpbmdBcnJheU1ldGhvZHMpIHtcbiAgICAgIGlmIChub25NdXRhdGluZ0FycmF5TWV0aG9kcy5oYXNPd25Qcm9wZXJ0eShpbmRleCkpIHtcbiAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBub25NdXRhdGluZ0FycmF5TWV0aG9kc1tpbmRleF07XG4gICAgICAgIG1ha2VNZXRob2RSZXR1cm5JbW11dGFibGUoYXJyYXksIG1ldGhvZE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMpIHtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwiZmxhdE1hcFwiLCAgZmxhdE1hcCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcImFzT2JqZWN0XCIsIGFzT2JqZWN0KTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwiYXNNdXRhYmxlXCIsIGFzTXV0YWJsZUFycmF5KTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwic2V0XCIsIGFycmF5U2V0KTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwic2V0SW5cIiwgYXJyYXlTZXRJbik7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcInVwZGF0ZVwiLCB1cGRhdGUpO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJ1cGRhdGVJblwiLCB1cGRhdGVJbik7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcImdldEluXCIsIGdldEluKTtcbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXlbaV0gPSBJbW11dGFibGUoYXJyYXlbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlKGFycmF5LCBtdXRhdGluZ0FycmF5TWV0aG9kcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlSW1tdXRhYmxlRGF0ZShkYXRlKSB7XG4gICAgaWYgKCFnbG9iYWxDb25maWcudXNlX3N0YXRpYykge1xuICAgICAgYWRkUHJvcGVydHlUbyhkYXRlLCBcImFzTXV0YWJsZVwiLCBhc011dGFibGVEYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZShkYXRlLCBtdXRhdGluZ0RhdGVNZXRob2RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzTXV0YWJsZURhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFZmZlY3RpdmVseSBwZXJmb3JtcyBhIG1hcCgpIG92ZXIgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSwgdXNpbmcgdGhlXG4gICAqIHByb3ZpZGVkIGl0ZXJhdG9yLCBleGNlcHQgdGhhdCB3aGVuZXZlciB0aGUgaXRlcmF0b3IgcmV0dXJucyBhbiBhcnJheSwgdGhhdFxuICAgKiBhcnJheSdzIGVsZW1lbnRzIGFyZSBhZGRlZCB0byB0aGUgZmluYWwgcmVzdWx0IGluc3RlYWQgb2YgdGhlIGFycmF5IGl0c2VsZi5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0b3IgLSBUaGUgaXRlcmF0b3IgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgb24gZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheS4gSXQgd2lsbCByZWNlaXZlIHRocmVlIGFyZ3VtZW50czogdGhlIGN1cnJlbnQgdmFsdWUsIHRoZSBjdXJyZW50IGluZGV4LCBhbmQgdGhlIGN1cnJlbnQgb2JqZWN0LlxuICAgKi9cbiAgZnVuY3Rpb24gZmxhdE1hcChpdGVyYXRvcikge1xuICAgIC8vIENhbGxpbmcgLmZsYXRNYXAoKSB3aXRoIG5vIGFyZ3VtZW50cyBpcyBhIG5vLW9wLiBEb24ndCBib3RoZXIgY2xvbmluZy5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgaW5kZXg7XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBpdGVyYXRvclJlc3VsdCA9IGl0ZXJhdG9yKHRoaXNbaW5kZXhdLCBpbmRleCwgdGhpcyk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZXJhdG9yUmVzdWx0KSkge1xuICAgICAgICAvLyBDb25jYXRlbmF0ZSBBcnJheSByZXN1bHRzIGludG8gdGhlIHJldHVybiB2YWx1ZSB3ZSdyZSBidWlsZGluZyB1cC5cbiAgICAgICAgcmVzdWx0LnB1c2guYXBwbHkocmVzdWx0LCBpdGVyYXRvclJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgbm9uLUFycmF5IHJlc3VsdHMgdGhlIHNhbWUgd2F5IG1hcCgpIGRvZXMuXG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZXJhdG9yUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZUFycmF5KHJlc3VsdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJbW11dGFibGUgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGdpdmVuIGtleXMgaW5jbHVkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGtleXNUb1JlbW92ZSAtIEEgbGlzdCBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyB0aGUga2V5cyB0byBleGNsdWRlIGluIHRoZSByZXR1cm4gdmFsdWUuIEluc3RlYWQgb2YgcHJvdmlkaW5nIGEgc2luZ2xlIGFycmF5LCB0aGlzIG1ldGhvZCBjYW4gYWxzbyBiZSBjYWxsZWQgYnkgcGFzc2luZyBtdWx0aXBsZSBzdHJpbmdzIGFzIHNlcGFyYXRlIGFyZ3VtZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIHdpdGhvdXQocmVtb3ZlKSB7XG4gICAgLy8gQ2FsbGluZyAud2l0aG91dCgpIHdpdGggbm8gYXJndW1lbnRzIGlzIGEgbm8tb3AuIERvbid0IGJvdGhlciBjbG9uaW5nLlxuICAgIGlmICh0eXBlb2YgcmVtb3ZlID09PSBcInVuZGVmaW5lZFwiICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVtb3ZlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIC8vIElmIHdlIHdlcmVuJ3QgZ2l2ZW4gYW4gYXJyYXksIHVzZSB0aGUgYXJndW1lbnRzIGxpc3QuXG4gICAgICB2YXIga2V5c1RvUmVtb3ZlQXJyYXkgPSAoQXJyYXkuaXNBcnJheShyZW1vdmUpKSA/XG4gICAgICAgICByZW1vdmUuc2xpY2UoKSA6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgIC8vIENvbnZlcnQgbnVtZXJpYyBrZXlzIHRvIHN0cmluZ3Mgc2luY2UgdGhhdCdzIGhvdyB0aGV5J2xsXG4gICAgICAvLyBjb21lIGZyb20gdGhlIGVudW1lcmF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICBrZXlzVG9SZW1vdmVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpZHgsIGFycikge1xuICAgICAgICBpZih0eXBlb2YoZWwpID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgYXJyW2lkeF0gPSBlbC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVtb3ZlID0gZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleXNUb1JlbW92ZUFycmF5LmluZGV4T2Yoa2V5KSAhPT0gLTE7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KHRoaXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMpIHtcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgcmVtb3ZlKHRoaXNba2V5XSwga2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGVPYmplY3QocmVzdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzTXV0YWJsZUFycmF5KG9wdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sIGksIGxlbmd0aDtcblxuICAgIGlmKG9wdHMgJiYgb3B0cy5kZWVwKSB7XG4gICAgICBmb3IoaSA9IDAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXNEZWVwTXV0YWJsZSh0aGlzW2ldKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcihpID0gMCwgbGVuZ3RoID0gdGhpcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEVmZmVjdGl2ZWx5IHBlcmZvcm1zIGEgW21hcF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvbWFwKSBvdmVyIHRoZSBlbGVtZW50cyBpbiB0aGUgYXJyYXksIGV4cGVjdGluZyB0aGF0IHRoZSBpdGVyYXRvciBmdW5jdGlvblxuICAgKiB3aWxsIHJldHVybiBhbiBhcnJheSBvZiB0d28gZWxlbWVudHMgLSB0aGUgZmlyc3QgcmVwcmVzZW50aW5nIGEga2V5LCB0aGUgb3RoZXJcbiAgICogYSB2YWx1ZS4gVGhlbiByZXR1cm5zIGFuIEltbXV0YWJsZSBPYmplY3QgY29uc3RydWN0ZWQgb2YgdGhvc2Uga2V5cyBhbmQgdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBpdGVyYXRvciAtIEEgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiB0d28gZWxlbWVudHMgLSB0aGUgZmlyc3QgcmVwcmVzZW50aW5nIHRoZSBkZXNpcmVkIGtleSwgdGhlIG90aGVyIHRoZSBkZXNpcmVkIHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gYXNPYmplY3QoaXRlcmF0b3IpIHtcbiAgICAvLyBJZiBubyBpdGVyYXRvciB3YXMgcHJvdmlkZWQsIGFzc3VtZSB0aGUgaWRlbnRpdHkgZnVuY3Rpb25cbiAgICAvLyAoc3VnZ2VzdGluZyB0aGlzIGFycmF5IGlzIGFscmVhZHkgYSBsaXN0IG9mIGtleS92YWx1ZSBwYWlycy4pXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBpdGVyYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge30sXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBpbmRleDtcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIHBhaXIgID0gaXRlcmF0b3IodGhpc1tpbmRleF0sIGluZGV4LCB0aGlzKSxcbiAgICAgICAgICBrZXkgICA9IHBhaXJbMF0sXG4gICAgICAgICAgdmFsdWUgPSBwYWlyWzFdO1xuXG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlT2JqZWN0KHJlc3VsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBhc0RlZXBNdXRhYmxlKG9iaikge1xuICAgIGlmIChcbiAgICAgICghb2JqKSB8fFxuICAgICAgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB8fFxuICAgICAgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgaW1tdXRhYmlsaXR5VGFnKSkgfHxcbiAgICAgIChvYmogaW5zdGFuY2VvZiBEYXRlKVxuICAgICkgeyByZXR1cm4gb2JqOyB9XG4gICAgcmV0dXJuIEltbXV0YWJsZS5hc011dGFibGUob2JqLCB7ZGVlcDogdHJ1ZX0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tDb3B5KHNyYywgZGVzdCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNyYywga2V5KSkge1xuICAgICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIEltbXV0YWJsZSBPYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBhbmQgdmFsdWVzIG9mIGJvdGhcbiAgICogdGhpcyBvYmplY3QgYW5kIHRoZSBwcm92aWRlZCBvYmplY3QsIHByaW9yaXRpemluZyB0aGUgcHJvdmlkZWQgb2JqZWN0J3NcbiAgICogdmFsdWVzIHdoZW5ldmVyIHRoZSBzYW1lIGtleSBpcyBwcmVzZW50IGluIGJvdGggb2JqZWN0cy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG90aGVyIC0gVGhlIG90aGVyIG9iamVjdCB0byBtZXJnZS4gTXVsdGlwbGUgb2JqZWN0cyBjYW4gYmUgcGFzc2VkIGFzIGFuIGFycmF5LiBJbiBzdWNoIGEgY2FzZSwgdGhlIGxhdGVyIGFuIG9iamVjdCBhcHBlYXJzIGluIHRoYXQgbGlzdCwgdGhlIGhpZ2hlciBpdHMgcHJpb3JpdHkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSBPcHRpb25hbCBjb25maWcgb2JqZWN0IHRoYXQgY29udGFpbnMgc2V0dGluZ3MuIFN1cHBvcnRlZCBzZXR0aW5ncyBhcmU6IHtkZWVwOiB0cnVlfSBmb3IgZGVlcCBtZXJnZSBhbmQge21lcmdlcjogbWVyZ2VyRnVuY30gd2hlcmUgbWVyZ2VyRnVuYyBpcyBhIGZ1bmN0aW9uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IHRha2VzIGEgcHJvcGVydHkgZnJvbSBib3RoIG9iamVjdHMuIElmIGFueXRoaW5nIGlzIHJldHVybmVkIGl0IG92ZXJyaWRlcyB0aGUgbm9ybWFsIG1lcmdlIGJlaGF2aW91ci5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlKG90aGVyLCBjb25maWcpIHtcbiAgICAvLyBDYWxsaW5nIC5tZXJnZSgpIHdpdGggbm8gYXJndW1lbnRzIGlzIGEgbm8tb3AuIERvbid0IGJvdGhlciBjbG9uaW5nLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAob3RoZXIgPT09IG51bGwgfHwgKHR5cGVvZiBvdGhlciAhPT0gXCJvYmplY3RcIikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbW11dGFibGUjbWVyZ2UgY2FuIG9ubHkgYmUgaW52b2tlZCB3aXRoIG9iamVjdHMgb3IgYXJyYXlzLCBub3QgXCIgKyBKU09OLnN0cmluZ2lmeShvdGhlcikpO1xuICAgIH1cblxuICAgIHZhciByZWNlaXZlZEFycmF5ID0gKEFycmF5LmlzQXJyYXkob3RoZXIpKSxcbiAgICAgICAgZGVlcCAgICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcuZGVlcCxcbiAgICAgICAgbW9kZSAgICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcubW9kZSB8fCAnbWVyZ2UnLFxuICAgICAgICBtZXJnZXIgICAgICAgID0gY29uZmlnICYmIGNvbmZpZy5tZXJnZXIsXG4gICAgICAgIHJlc3VsdDtcblxuICAgIC8vIFVzZSB0aGUgZ2l2ZW4ga2V5IHRvIGV4dHJhY3QgYSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBvYmplY3QsIHRoZW4gcGxhY2VcbiAgICAvLyB0aGF0IHZhbHVlIGluIHRoZSByZXN1bHQgb2JqZWN0IHVuZGVyIHRoZSBzYW1lIGtleS4gSWYgdGhhdCByZXN1bHRlZFxuICAgIC8vIGluIGEgY2hhbmdlIGZyb20gdGhpcyBvYmplY3QncyB2YWx1ZSBhdCB0aGF0IGtleSwgc2V0IGFueUNoYW5nZXMgPSB0cnVlLlxuICAgIGZ1bmN0aW9uIGFkZFRvUmVzdWx0KGN1cnJlbnRPYmosIG90aGVyT2JqLCBrZXkpIHtcbiAgICAgIHZhciBpbW11dGFibGVWYWx1ZSA9IEltbXV0YWJsZShvdGhlck9ialtrZXldKTtcbiAgICAgIHZhciBtZXJnZXJSZXN1bHQgPSBtZXJnZXIgJiYgbWVyZ2VyKGN1cnJlbnRPYmpba2V5XSwgaW1tdXRhYmxlVmFsdWUsIGNvbmZpZyk7XG4gICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudE9ialtrZXldO1xuXG4gICAgICBpZiAoKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAobWVyZ2VyUmVzdWx0ICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICghY3VycmVudE9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB8fFxuICAgICAgICAhaXNFcXVhbChpbW11dGFibGVWYWx1ZSwgY3VycmVudFZhbHVlKSkge1xuXG4gICAgICAgIHZhciBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAobWVyZ2VyUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG1lcmdlclJlc3VsdDtcbiAgICAgICAgfSBlbHNlIGlmIChkZWVwICYmIGlzTWVyZ2FibGVPYmplY3QoY3VycmVudFZhbHVlKSAmJiBpc01lcmdhYmxlT2JqZWN0KGltbXV0YWJsZVZhbHVlKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gSW1tdXRhYmxlLm1lcmdlKGN1cnJlbnRWYWx1ZSwgaW1tdXRhYmxlVmFsdWUsIGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBpbW11dGFibGVWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNFcXVhbChjdXJyZW50VmFsdWUsIG5ld1ZhbHVlKSB8fCAhY3VycmVudE9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBNYWtlIGEgc2hhbGxvdyBjbG9uZSBvZiB0aGUgY3VycmVudCBvYmplY3QuXG4gICAgICAgICAgICByZXN1bHQgPSBxdWlja0NvcHkoY3VycmVudE9iaiwgaW5zdGFudGlhdGVFbXB0eU9iamVjdChjdXJyZW50T2JqKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyRHJvcHBlZEtleXMoY3VycmVudE9iaiwgb3RoZXJPYmopIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50T2JqKSB7XG4gICAgICAgIGlmICghb3RoZXJPYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gTWFrZSBhIHNoYWxsb3cgY2xvbmUgb2YgdGhlIGN1cnJlbnQgb2JqZWN0LlxuICAgICAgICAgICAgcmVzdWx0ID0gcXVpY2tDb3B5KGN1cnJlbnRPYmosIGluc3RhbnRpYXRlRW1wdHlPYmplY3QoY3VycmVudE9iaikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5O1xuXG4gICAgLy8gQWNoaWV2ZSBwcmlvcml0aXphdGlvbiBieSBvdmVycmlkaW5nIHByZXZpb3VzIHZhbHVlcyB0aGF0IGdldCBpbiB0aGUgd2F5LlxuICAgIGlmICghcmVjZWl2ZWRBcnJheSkge1xuICAgICAgLy8gVGhlIG1vc3QgY29tbW9uIHVzZSBjYXNlOiBqdXN0IG1lcmdlIG9uZSBvYmplY3QgaW50byB0aGUgZXhpc3Rpbmcgb25lLlxuICAgICAgZm9yIChrZXkgaW4gb3RoZXIpIHtcbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3RoZXIsIGtleSkpIHtcbiAgICAgICAgICBhZGRUb1Jlc3VsdCh0aGlzLCBvdGhlciwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vZGUgPT09ICdyZXBsYWNlJykge1xuICAgICAgICBjbGVhckRyb3BwZWRLZXlzKHRoaXMsIG90aGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2UgYWxzbyBhY2NlcHQgYW4gQXJyYXlcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gb3RoZXIubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgb3RoZXJGcm9tQXJyYXkgPSBvdGhlcltpbmRleF07XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb3RoZXJGcm9tQXJyYXkpIHtcbiAgICAgICAgICBpZiAob3RoZXJGcm9tQXJyYXkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgYWRkVG9SZXN1bHQocmVzdWx0ICE9PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0aGlzLCBvdGhlckZyb21BcnJheSwga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChyZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9iamVjdFJlcGxhY2UodmFsdWUsIGNvbmZpZykge1xuICAgIHZhciBkZWVwICAgICAgICAgID0gY29uZmlnICYmIGNvbmZpZy5kZWVwO1xuXG4gICAgLy8gQ2FsbGluZyAucmVwbGFjZSgpIHdpdGggbm8gYXJndW1lbnRzIGlzIGEgbm8tb3AuIERvbid0IGJvdGhlciBjbG9uaW5nLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW1tdXRhYmxlI3JlcGxhY2UgY2FuIG9ubHkgYmUgaW52b2tlZCB3aXRoIG9iamVjdHMgb3IgYXJyYXlzLCBub3QgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBJbW11dGFibGUubWVyZ2UodGhpcywgdmFsdWUsIHtkZWVwOiBkZWVwLCBtb2RlOiAncmVwbGFjZSd9KTtcbiAgfVxuXG4gIHZhciBpbW11dGFibGVFbXB0eU9iamVjdCA9IEltbXV0YWJsZSh7fSk7XG5cbiAgZnVuY3Rpb24gb2JqZWN0U2V0SW4ocGF0aCwgdmFsdWUsIGNvbmZpZykge1xuICAgIGlmICghKEFycmF5LmlzQXJyYXkocGF0aCkpIHx8IHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IHRvIEltbXV0YWJsZSNzZXRJbiBtdXN0IGJlIGFuIGFycmF5IGNvbnRhaW5pbmcgYXQgbGVhc3Qgb25lIFxcXCJrZXlcXFwiIHN0cmluZy5cIik7XG4gICAgfVxuXG4gICAgdmFyIGhlYWQgPSBwYXRoWzBdO1xuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG9iamVjdFNldC5jYWxsKHRoaXMsIGhlYWQsIHZhbHVlLCBjb25maWcpO1xuICAgIH1cblxuICAgIHZhciB0YWlsID0gcGF0aC5zbGljZSgxKTtcbiAgICB2YXIgbmV3VmFsdWU7XG4gICAgdmFyIHRoaXNIZWFkID0gdGhpc1toZWFkXTtcblxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGhlYWQpICYmIHR5cGVvZih0aGlzSGVhZCkgPT09IFwib2JqZWN0XCIgJiYgdGhpc0hlYWQgIT09IG51bGwpIHtcbiAgICAgIC8vIE1pZ2h0ICh2YWxpZGx5KSBiZSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgIG5ld1ZhbHVlID0gSW1tdXRhYmxlLnNldEluKHRoaXNIZWFkLCB0YWlsLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gb2JqZWN0U2V0SW4uY2FsbChpbW11dGFibGVFbXB0eU9iamVjdCwgdGFpbCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGhlYWQpICYmIHRoaXNIZWFkID09PSBuZXdWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIG11dGFibGUgPSBxdWlja0NvcHkodGhpcywgaW5zdGFudGlhdGVFbXB0eU9iamVjdCh0aGlzKSk7XG4gICAgbXV0YWJsZVtoZWFkXSA9IG5ld1ZhbHVlO1xuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlT2JqZWN0KG11dGFibGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0U2V0KHByb3BlcnR5LCB2YWx1ZSwgY29uZmlnKSB7XG4gICAgdmFyIGRlZXAgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLmRlZXA7XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgIGlmIChkZWVwICYmIHRoaXNbcHJvcGVydHldICE9PSB2YWx1ZSAmJiBpc01lcmdhYmxlT2JqZWN0KHZhbHVlKSAmJiBpc01lcmdhYmxlT2JqZWN0KHRoaXNbcHJvcGVydHldKSkge1xuICAgICAgICB2YWx1ZSA9IEltbXV0YWJsZS5tZXJnZSh0aGlzW3Byb3BlcnR5XSwgdmFsdWUsIHtkZWVwOiB0cnVlLCBtb2RlOiAncmVwbGFjZSd9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0VxdWFsKHRoaXNbcHJvcGVydHldLCB2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG11dGFibGUgPSBxdWlja0NvcHkodGhpcywgaW5zdGFudGlhdGVFbXB0eU9iamVjdCh0aGlzKSk7XG4gICAgbXV0YWJsZVtwcm9wZXJ0eV0gPSBJbW11dGFibGUodmFsdWUpO1xuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlT2JqZWN0KG11dGFibGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKHByb3BlcnR5LCB1cGRhdGVyKSB7XG4gICAgdmFyIHJlc3RBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaW5pdGlhbFZhbCA9IHRoaXNbcHJvcGVydHldO1xuICAgIHJldHVybiBJbW11dGFibGUuc2V0KHRoaXMsIHByb3BlcnR5LCB1cGRhdGVyLmFwcGx5KGluaXRpYWxWYWwsIFtpbml0aWFsVmFsXS5jb25jYXQocmVzdEFyZ3MpKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJblBhdGgob2JqLCBwYXRoKSB7XG4gICAgLypqc2hpbnQgZXFudWxsOnRydWUgKi9cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGgubGVuZ3RoOyBvYmogIT0gbnVsbCAmJiBpIDwgbDsgaSsrKSB7XG4gICAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChpICYmIGkgPT0gbCkgPyBvYmogOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVJbihwYXRoLCB1cGRhdGVyKSB7XG4gICAgdmFyIHJlc3RBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaW5pdGlhbFZhbCA9IGdldEluUGF0aCh0aGlzLCBwYXRoKTtcblxuICAgIHJldHVybiBJbW11dGFibGUuc2V0SW4odGhpcywgcGF0aCwgdXBkYXRlci5hcHBseShpbml0aWFsVmFsLCBbaW5pdGlhbFZhbF0uY29uY2F0KHJlc3RBcmdzKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW4ocGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0SW5QYXRoKHRoaXMsIHBhdGgpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBhc011dGFibGVPYmplY3Qob3B0cykge1xuICAgIHZhciByZXN1bHQgPSBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KHRoaXMpLCBrZXk7XG5cbiAgICBpZihvcHRzICYmIG9wdHMuZGVlcCkge1xuICAgICAgZm9yIChrZXkgaW4gdGhpcykge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBhc0RlZXBNdXRhYmxlKHRoaXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gdGhpcykge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gQ3JlYXRlcyBwbGFpbiBvYmplY3QgdG8gYmUgdXNlZCBmb3IgY2xvbmluZ1xuICBmdW5jdGlvbiBpbnN0YW50aWF0ZVBsYWluT2JqZWN0KCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8vIEZpbmFsaXplcyBhbiBvYmplY3Qgd2l0aCBpbW11dGFibGUgbWV0aG9kcywgZnJlZXplcyBpdCwgYW5kIHJldHVybnMgaXQuXG4gIGZ1bmN0aW9uIG1ha2VJbW11dGFibGVPYmplY3Qob2JqKSB7XG4gICAgaWYgKCFnbG9iYWxDb25maWcudXNlX3N0YXRpYykge1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwibWVyZ2VcIiwgbWVyZ2UpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwicmVwbGFjZVwiLCBvYmplY3RSZXBsYWNlKTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcIndpdGhvdXRcIiwgd2l0aG91dCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJhc011dGFibGVcIiwgYXNNdXRhYmxlT2JqZWN0KTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInNldFwiLCBvYmplY3RTZXQpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwic2V0SW5cIiwgb2JqZWN0U2V0SW4pO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwidXBkYXRlXCIsIHVwZGF0ZSk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJ1cGRhdGVJblwiLCB1cGRhdGVJbik7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJnZXRJblwiLCBnZXRJbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGUob2JqLCBtdXRhdGluZ09iamVjdE1ldGhvZHMpO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIG9iamVjdCBpcyBhIHZhbGlkIHJlYWN0IGVsZW1lbnRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjE1LjAuMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wzMjZcbiAgZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgIG9iaiAhPT0gbnVsbCAmJlxuICAgICAgICAgICAob2JqLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVfRkFMTEJBQ0sgfHwgb2JqLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGaWxlT2JqZWN0KG9iaikge1xuICAgIHJldHVybiB0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgb2JqIGluc3RhbmNlb2YgRmlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQmxvYk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgIG9iaiBpbnN0YW5jZW9mIEJsb2I7XG4gIH1cblxuICBmdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXJyb3Iob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVycm9yO1xuICB9XG5cbiAgZnVuY3Rpb24gSW1tdXRhYmxlKG9iaiwgb3B0aW9ucywgc3RhY2tSZW1haW5pbmcpIHtcbiAgICBpZiAoaXNJbW11dGFibGUob2JqKSB8fCBpc1JlYWN0RWxlbWVudChvYmopIHx8IGlzRmlsZU9iamVjdChvYmopIHx8IGlzQmxvYk9iamVjdChvYmopIHx8IGlzRXJyb3Iob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShvYmopKSB7XG4gICAgICByZXR1cm4gb2JqLnRoZW4oSW1tdXRhYmxlKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIG1ha2VJbW11dGFibGVBcnJheShvYmouc2xpY2UoKSk7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gbWFrZUltbXV0YWJsZURhdGUobmV3IERhdGUob2JqLmdldFRpbWUoKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEb24ndCBmcmVlemUgdGhlIG9iamVjdCB3ZSB3ZXJlIGdpdmVuOyBtYWtlIGEgY2xvbmUgYW5kIHVzZSB0aGF0LlxuICAgICAgdmFyIHByb3RvdHlwZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wcm90b3R5cGU7XG4gICAgICB2YXIgaW5zdGFudGlhdGVFbXB0eU9iamVjdCA9XG4gICAgICAgICghcHJvdG90eXBlIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSkgP1xuICAgICAgICAgIGluc3RhbnRpYXRlUGxhaW5PYmplY3QgOiAoZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7IH0pO1xuICAgICAgdmFyIGNsb25lID0gaW5zdGFudGlhdGVFbXB0eU9iamVjdCgpO1xuXG4gICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuICAgICAgICBpZiAoc3RhY2tSZW1haW5pbmcgPT0gbnVsbCkge1xuICAgICAgICAgIHN0YWNrUmVtYWluaW5nID0gNjQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YWNrUmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgSW1tdXRhYmxlRXJyb3IoXCJBdHRlbXB0IHRvIGNvbnN0cnVjdCBJbW11dGFibGUgZnJvbSBhIGRlZXBseSBuZXN0ZWQgb2JqZWN0IHdhcyBkZXRlY3RlZC5cIiArXG4gICAgICAgICAgICBcIiBIYXZlIHlvdSB0cmllZCB0byB3cmFwIGFuIG9iamVjdCB3aXRoIGNpcmN1bGFyIHJlZmVyZW5jZXMgKGUuZy4gUmVhY3QgZWxlbWVudCk/XCIgK1xuICAgICAgICAgICAgXCIgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ydGZlbGRtYW4vc2VhbWxlc3MtaW1tdXRhYmxlL3dpa2kvRGVlcGx5LW5lc3RlZC1vYmplY3Qtd2FzLWRldGVjdGVkIGZvciBkZXRhaWxzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFja1JlbWFpbmluZyAtPSAxO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSkge1xuICAgICAgICAgIGNsb25lW2tleV0gPSBJbW11dGFibGUob2JqW2tleV0sIHVuZGVmaW5lZCwgc3RhY2tSZW1haW5pbmcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYWtlSW1tdXRhYmxlT2JqZWN0KGNsb25lKTtcbiAgICB9XG4gIH1cblxuICAvLyBXcmFwcGVyIHRvIGFsbG93IHRoZSB1c2Ugb2Ygb2JqZWN0IG1ldGhvZHMgYXMgc3RhdGljIG1ldGhvZHMgb2YgSW1tdXRhYmxlLlxuICBmdW5jdGlvbiB0b1N0YXRpYyhmbikge1xuICAgIGZ1bmN0aW9uIHN0YXRpY1dyYXBwZXIoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIHZhciBzZWxmID0gYXJncy5zaGlmdCgpO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0aWNXcmFwcGVyO1xuICB9XG5cbiAgLy8gV3JhcHBlciB0byBhbGxvdyB0aGUgdXNlIG9mIG9iamVjdCBtZXRob2RzIGFzIHN0YXRpYyBtZXRob2RzIG9mIEltbXV0YWJsZS5cbiAgLy8gd2l0aCB0aGUgYWRkaXRpb25hbCBjb25kaXRpb24gb2YgY2hvb3Npbmcgd2hpY2ggZnVuY3Rpb24gdG8gY2FsbCBkZXBlbmRpbmdcbiAgLy8gaWYgYXJndW1lbnQgaXMgYW4gYXJyYXkgb3IgYW4gb2JqZWN0LlxuICBmdW5jdGlvbiB0b1N0YXRpY09iamVjdE9yQXJyYXkoZm5PYmplY3QsIGZuQXJyYXkpIHtcbiAgICBmdW5jdGlvbiBzdGF0aWNXcmFwcGVyKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICB2YXIgc2VsZiA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGYpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuQXJyYXkuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmbk9iamVjdC5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGljV3JhcHBlcjtcbiAgfVxuXG4gIC8vIFdyYXBwZXIgdG8gYWxsb3cgdGhlIHVzZSBvZiBvYmplY3QgbWV0aG9kcyBhcyBzdGF0aWMgbWV0aG9kcyBvZiBJbW11dGFibGUuXG4gIC8vIHdpdGggdGhlIGFkZGl0aW9uYWwgY29uZGl0aW9uIG9mIGNob29zaW5nIHdoaWNoIGZ1bmN0aW9uIHRvIGNhbGwgZGVwZW5kaW5nXG4gIC8vIGlmIGFyZ3VtZW50IGlzIGFuIGFycmF5IG9yIGFuIG9iamVjdCBvciBhIGRhdGUuXG4gIGZ1bmN0aW9uIHRvU3RhdGljT2JqZWN0T3JEYXRlT3JBcnJheShmbk9iamVjdCwgZm5BcnJheSwgZm5EYXRlKSB7XG4gICAgZnVuY3Rpb24gc3RhdGljV3JhcHBlcigpIHtcbiAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgdmFyIHNlbGYgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxmKSkge1xuICAgICAgICAgIHJldHVybiBmbkFycmF5LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfSBlbHNlIGlmIChzZWxmIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIHJldHVybiBmbkRhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmbk9iamVjdC5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGljV3JhcHBlcjtcbiAgfVxuXG4gIC8vIEV4cG9ydCB0aGUgbGlicmFyeVxuICBJbW11dGFibGUuZnJvbSAgICAgICAgICAgPSBJbW11dGFibGU7XG4gIEltbXV0YWJsZS5pc0ltbXV0YWJsZSAgICA9IGlzSW1tdXRhYmxlO1xuICBJbW11dGFibGUuSW1tdXRhYmxlRXJyb3IgPSBJbW11dGFibGVFcnJvcjtcbiAgSW1tdXRhYmxlLm1lcmdlICAgICAgICAgID0gdG9TdGF0aWMobWVyZ2UpO1xuICBJbW11dGFibGUucmVwbGFjZSAgICAgICAgPSB0b1N0YXRpYyhvYmplY3RSZXBsYWNlKTtcbiAgSW1tdXRhYmxlLndpdGhvdXQgICAgICAgID0gdG9TdGF0aWMod2l0aG91dCk7XG4gIEltbXV0YWJsZS5hc011dGFibGUgICAgICA9IHRvU3RhdGljT2JqZWN0T3JEYXRlT3JBcnJheShhc011dGFibGVPYmplY3QsIGFzTXV0YWJsZUFycmF5LCBhc011dGFibGVEYXRlKTtcbiAgSW1tdXRhYmxlLnNldCAgICAgICAgICAgID0gdG9TdGF0aWNPYmplY3RPckFycmF5KG9iamVjdFNldCwgYXJyYXlTZXQpO1xuICBJbW11dGFibGUuc2V0SW4gICAgICAgICAgPSB0b1N0YXRpY09iamVjdE9yQXJyYXkob2JqZWN0U2V0SW4sIGFycmF5U2V0SW4pO1xuICBJbW11dGFibGUudXBkYXRlICAgICAgICAgPSB0b1N0YXRpYyh1cGRhdGUpO1xuICBJbW11dGFibGUudXBkYXRlSW4gICAgICAgPSB0b1N0YXRpYyh1cGRhdGVJbik7XG4gIEltbXV0YWJsZS5nZXRJbiAgICAgICAgICA9IHRvU3RhdGljKGdldEluKTtcbiAgSW1tdXRhYmxlLmZsYXRNYXAgICAgICAgID0gdG9TdGF0aWMoZmxhdE1hcCk7XG4gIEltbXV0YWJsZS5hc09iamVjdCAgICAgICA9IHRvU3RhdGljKGFzT2JqZWN0KTtcbiAgaWYgKCFnbG9iYWxDb25maWcudXNlX3N0YXRpYykge1xuICAgICAgSW1tdXRhYmxlLnN0YXRpYyA9IGltbXV0YWJsZUluaXQoe1xuICAgICAgICAgIHVzZV9zdGF0aWM6IHRydWVcbiAgICAgIH0pO1xuICB9XG5cbiAgT2JqZWN0LmZyZWV6ZShJbW11dGFibGUpO1xuXG4gIHJldHVybiBJbW11dGFibGU7XG59XG5cbiAgdmFyIEltbXV0YWJsZSA9IGltbXV0YWJsZUluaXQoKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gSW1tdXRhYmxlO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEltbXV0YWJsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgIGV4cG9ydHMuSW1tdXRhYmxlID0gSW1tdXRhYmxlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICB3aW5kb3cuSW1tdXRhYmxlID0gSW1tdXRhYmxlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWwuSW1tdXRhYmxlID0gSW1tdXRhYmxlO1xuICB9XG59KSgpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgYnVpbGRSZWR1eCwgYnVpbGRMaXN0UmVkdXggfSBmcm9tICcuL2xpYnMvaGVscGVyJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9saWJzL3NldHRpbmdzJ1xuaW1wb3J0IGNvbm5lY3RTYWdhcyBmcm9tICcuL2xpYnMvY29ubmVjdFNhZ2FzJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vbGlicy9zdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidWlsZFJlZHV4OiBjb25uZWN0U2FnYXMoYnVpbGRSZWR1eCksXG4gIGNvbmZpZyxcbiAgY3JlYXRlU3RvcmU6IGNvbmZpZ3VyZVN0b3JlLFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge31cblxuLyoqXG4gKiDlsIblr7nosaHovazlj5jkuLogcGFyYW1zIHN0cmluZ1xuICogZS5nLiB7IG5hbWU6ICd1c2VyJywgYWdlOiAxM30gPT4gbmFtZT11c2VyJmFnZT0xM1xuICogQHBhcmFtIG9ialxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9iajJwYXJhbXMob2JqLCBwcmVmaXggPSAnJywgc3VmZml4ID0gJycpIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFvYmopIHJldHVybiAnJ1xuXG4gIGxldCBwYXJhbXMgPSBbXVxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG9ialtrZXldIGluc3RhbmNlb2YgT2JqZWN0KSB7IC8vIOaVsOe7hOWSjOWvueixoeeJueauiuWkhOeQhlxuICAgICAgICBwYXJhbXMucHVzaChgJHtrZXl9PSR7SlNPTi5zdHJpbmdpZnkob2JqW2tleV0pfWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMucHVzaChgJHtrZXl9PSR7b2JqW2tleV19YClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBwcmVmaXggKyBwYXJhbXMuam9pbignJicpICsgc3VmZml4XG59XG5cbi8qKlxuICogIOS4i+WIkue6v+i9rOmpvOWzsFxuICogQHBhcmFtIG5hbWVcbiAqL1xuZXhwb3J0IGNvbnN0IHVuZGVyU2NvcmVUb0NhbWVsID0gKG5hbWUpID0+XG4gIG5hbWVcbiAgICAuc3BsaXQoJ18nKVxuICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1bMF0udG9VcHBlckNhc2UoKSArIGl0ZW0uc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5ID0gdmFsdWUgPT4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gJydcbmV4cG9ydCBjb25zdCBub3ROdWxsT3JVbmRlZmllbmQgPSB2YWx1ZSA9PiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4iLCJpbXBvcnQgeyBwdXQsIGNhbGwsIHRha2VMYXRlc3QsIHNlbGVjdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgeyBvYmoycGFyYW1zLCB1bmRlclNjb3JlVG9DYW1lbCwgbm90TnVsbE9yVW5kZWZpZW5kIH0gZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9zZXR0aW5ncydcblxuLy8g5bi46KeEc2FnYXPnmoTmk43kvZxcbmNvbnN0IGVmZmVjdHMgPSB7XG4gIHB1dCxcbiAgY2FsbFxufVxuXG4vLyDlhajlsYDnmoRyZWR1eCBhY3Rpb25zXG5jb25zdCBhbGxBY3Rpb25zID0ge31cbmV4cG9ydCBsZXQgc2FnYXMgPSBbXVxuZXhwb3J0IGxldCByZWR1Y2VycyA9IHt9XG5cbi8vIOiOt+WPluWFqOWxgOeahGFjdGlvblxuY29uc3QgZ2V0QWN0aW9uID0gKGFjdGlvbk5hbWUpID0+IGFsbEFjdGlvbnNbYWN0aW9uTmFtZV1cblxuLy8g6I635Y+W5YWo5bGA55qEc3RhdGVcbmNvbnN0IGdldFN0YXRlID0gZnVuY3Rpb24qKGNoaWxkKSB7XG4gIGNvbnN0IGdldCA9IHN0YXRlID0+IHN0YXRlW2NoaWxkXVxuICByZXR1cm4geWllbGQgc2VsZWN0KGdldClcbn1cblxuLyoqXG4gKiDliJvlu7pyZWR1Y2Xml7boh6rliqjlhbPogZRzYWdhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJlZHV4ZXIgPT4gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcmVkdXggPSByZWR1eGVyLmNhbGwobnVsbCwgLi4uYXJncylcbiAgY29uc3QgbmFtZSA9IHVuZGVyU2NvcmVUb0NhbWVsKGFyZ3NbMF0pXG5cbiAgYWxsQWN0aW9uc1tuYW1lXSA9IHJlZHV4LmFjdGlvbnNcbiAgcmVkdWNlcnNbbmFtZV0gPSByZWR1eC5yZWR1Y2VyXG5cbiAgcmV0dXJuIGNvbmYgPT4ge1xuICAgIGNvbnN0IHdhdGNoID0gY3JlYXRlV2F0Y2hlcihyZWR1eCwgY29uZilcbiAgICBzYWdhcy5wdXNoKHdhdGNoKVxuICAgIHJldHVybiByZWR1eC5hY3Rpb25zXG4gIH1cbn1cblxuLyoqXG4gKiBhZGQgd2F0Y2hlclxuICogQHBhcmFtIHJlZHV4XG4gKiBAcGFyYW0gY29uZlxuICogQHJldHVybiB7SXRlcmFibGVJdGVyYXRvcjxGb3JrRWZmZWN0Pn1cbiAqL1xuZnVuY3Rpb24qIGNyZWF0ZVdhdGNoZXIocmVkdXgsIGNvbmYpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChyZWR1eC50eXBlcy5TVEFSVCwgZnVuY3Rpb24qICh7IHBheWxvYWQgfSkge1xuICAgIGNvbmYgPSBjb25mIHx8IHt9XG4gICAgbGV0IHsgdXJsLCBkYXRhLCBtZXRob2QsIGhlYWRlcnMgPSB7fSwgZXh0cmFjdCA9IHt9LCBvblJlc3VsdCwgb25BZnRlciwgb25FcnJvciwgZmV0Y2ggfSA9IGNvbmZcblxuICAgIGNvbnN0IGNhbGxiYWNrQ29uZmlnID0ge1xuICAgICAgLi4uZWZmZWN0cyxcbiAgICAgIGdldEFjdGlvbjogZ2V0QWN0aW9uLFxuICAgICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyB1cmzlpITnkIZcbiAgICAgIHVybCA9IHR5cGVvZiB1cmwgPT09ICdmdW5jdGlvbicgPyB5aWVsZCB1cmwocGF5bG9hZCwgY2FsbGJhY2tDb25maWcpIDogdXJsXG4gICAgICBtZXRob2QgPSBtZXRob2QgPyBtZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnXG5cbiAgICAgIC8vIGRhdGHlpITnkIZcbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhID0geWllbGQgZGF0YShwYXlsb2FkLCBjYWxsYmFja0NvbmZpZylcbiAgICAgIH1cblxuICAgICAgLy8gR0VU5pa55rOV5LiL77yMZGF0YeWQiOW5tuWIsHVybOS4rVxuICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcgJiYgZGF0YSkge1xuICAgICAgICB1cmwgKz0gdXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJidcbiAgICAgICAgdXJsICs9IG9iajJwYXJhbXMoZGF0YSlcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc3VsdFxuXG4gICAgICAvLyBmZXRjaOaWueazleaYr+WQpuWumuS5iVxuICAgICAgY29uc3QgZmV0Y2hNZXRob2QgPSBmZXRjaCA/IGZldGNoIDogb3B0aW9ucy5mZXRjaE1ldGhvZFxuICAgICAgaWYgKGZldGNoTWV0aG9kICYmIHVybCkge1xuICAgICAgICByZXN1bHQgPSB5aWVsZCBjYWxsKGZldGNoTWV0aG9kLCB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgLi4uZXh0cmFjdCxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gZGF0YSBoYW5kbGVyXG4gICAgICBpZiAob25SZXN1bHQpIHtcbiAgICAgICAgY29uc3QgZmFsbGJhY2tSZXN1bHQgPSB5aWVsZCBjYWxsKG9uUmVzdWx0LCByZXN1bHQsIHBheWxvYWQsIGNhbGxiYWNrQ29uZmlnKVxuXG4gICAgICAgIC8vIOWIpOaWrWZhbGxiYWNrUmVzdWx05LiN5pivbnVsbCwgdW5kZWZpbmVkLCDljbPkvb/mmK/nqbrkuZ/opoHph4fnlKhcbiAgICAgICAgcmVzdWx0ID0gbm90TnVsbE9yVW5kZWZpZW5kKGZhbGxiYWNrUmVzdWx0KVxuICAgICAgICAgID8gZmFsbGJhY2tSZXN1bHRcbiAgICAgICAgICA6IHJlc3VsdFxuICAgICAgfVxuXG4gICAgICAvLyBhdXRvQWN0aW9uc1xuICAgICAgaWYgKG9wdGlvbnMuYXV0b0FjdGlvbnMpIHtcbiAgICAgICAgeWllbGQgcHV0KHJlZHV4LmFjdGlvbnMuc3VjY2VzcyhyZXN1bHQpKVxuICAgICAgfVxuXG4gICAgICAvLyBhZnRlciBkYXRhIGhhbmRsZWQgY2FsbGJhY2tcbiAgICAgIGlmIChvbkFmdGVyKSB7XG4gICAgICAgIHlpZWxkIGNhbGwob25BZnRlciwgcmVzdWx0LCBwYXlsb2FkLCBjYWxsYmFja0NvbmZpZylcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGF1dG9BY3Rpb25zXG4gICAgICBpZiAob3B0aW9ucy5hdXRvQWN0aW9ucykge1xuICAgICAgICB5aWVsZCBwdXQocmVkdXguYWN0aW9ucy5yZXNldCgpKVxuICAgICAgfVxuXG4gICAgICAvLyBlcnJvciBoYW5kbGVyXG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICB5aWVsZCBjYWxsKG9uRXJyb3IsIGVyciwgcGF5bG9hZCwgY2FsbGJhY2tDb25maWcpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ3NlYW1sZXNzLWltbXV0YWJsZSdcblxuLyoqXG4gKiBAZGVzYyBub3JtYWxcbiAqIEBwYXJhbSBhY3Rpb25OYW1lIHtzdHJpbmd9LCBlLmcuIGxvYWRfaXRlbVxuICogQHBhcmFtICBkZWZhdWx0RGF0YSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgYnVpbGRSZWR1eCA9IChhY3Rpb25OYW1lLCBkZWZhdWx0RGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9ICgpID0+XG4gICAgSW1tdXRhYmxlKHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBwYXJhbXM6IG51bGwsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIC4uLmRlZmF1bHREYXRhLFxuICAgIH0pXG5cbiAgY29uc3QgU1RBUlQgPSBgJHthY3Rpb25OYW1lfV9TVEFSVGBcbiAgY29uc3QgU1VDQ0VTUyA9IGAke2FjdGlvbk5hbWV9X1NVQ0NFU1NgXG4gIGNvbnN0IEVSUk9SID0gYCR7YWN0aW9uTmFtZX1fRVJST1JgXG4gIGNvbnN0IFJFU0VUID0gYCR7YWN0aW9uTmFtZX1fUkVTVGBcblxuICBjb25zdCBzdGFydCA9IGNyZWF0ZUFjdGlvbihTVEFSVCwgKHBhcmFtcyA9IG51bGwpID0+ICh7cGFyYW1zfSkpXG4gIGNvbnN0IHJlc2V0ID0gY3JlYXRlQWN0aW9uKFJFU0VUKVxuICBjb25zdCBzdWNjZXNzID0gY3JlYXRlQWN0aW9uKFNVQ0NFU1MsIGRhdGEgPT4gKHsgZGF0YSB9KSlcbiAgY29uc3QgZXJyb3IgPSBjcmVhdGVBY3Rpb24oRVJST1IsIGVycm9yTWVzc2FnZSA9PiAoeyBlcnJvck1lc3NhZ2UgfSkpXG5cbiAgY29uc3QgcmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoXG4gICAge1xuICAgICAgW1NUQVJUXTogKHN0YXRlLCBhY3Rpb24pID0+XG4gICAgICAgIHN0YXRlLm1lcmdlKHtcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBwYXJhbXM6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnBhcmFtcyxcbiAgICAgICAgfSksXG4gICAgICBbU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICBzdGF0ZS5tZXJnZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSksXG4gICAgICBbRVJST1JdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgSW1tdXRhYmxlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgfSksXG4gICAgICBbUkVTRVRdOiAoc3RhdGUsIGFjdGlvbikgPT4gaW5pdGlhbFN0YXRlKCksXG4gICAgfSxcbiAgICBpbml0aWFsU3RhdGUoKSxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgYWN0aW9uczoge1xuICAgICAgc3RhcnQsXG4gICAgICBzdWNjZXNzLFxuICAgICAgZXJyb3IsXG4gICAgICByZXNldCxcbiAgICB9LFxuICAgIHR5cGVzOiB7XG4gICAgICBTVEFSVCxcbiAgICAgIFNVQ0NFU1MsXG4gICAgICBFUlJPUixcbiAgICAgIFJFU0VULFxuICAgIH0sXG4gICAgcmVkdWNlcixcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gYWN0aW9uTmFtZSB7c3RyaW5nfSwgZS5nLiBsaXN0X3ZlaGljbGVcbiAqIEBwYXJhbSBkZWZhdWx0RGF0YSB7b2JqZWN0fVxuICogQHJldHVybiB7e3R5cGVzOiB7U1VDQ0VTUzogc3RyaW5nLCBTVEFSVDogc3RyaW5nLCBFUlJPUjogc3RyaW5nLCBSRVNFVDogc3RyaW5nfSwgcmVkdWNlcjogRnVuY3Rpb24sIGFjdGlvbnM6XG4gKiAgIHtzdWNjZXNzOiBhY3Rpb25DcmVhdG9yLCBzdGFydDogYWN0aW9uQ3JlYXRvciwgcmVzZXQ6IGFjdGlvbkNyZWF0b3IsIGVycm9yOiBhY3Rpb25DcmVhdG9yfX19XG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZExpc3RSZWR1eCA9IChhY3Rpb25OYW1lLCBkZWZhdWx0RGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9ICgpID0+XG4gICAgSW1tdXRhYmxlKHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgZGF0YToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgIHRvdGFsX2NvdW50OiAwLFxuICAgICAgICB0b3RhbF9wYWdlOiAwLFxuICAgICAgICBlbnRyaWVzOiBbXSxcbiAgICAgIH0sXG4gICAgICAuLi5kZWZhdWx0RGF0YSxcbiAgICB9KVxuXG4gIGNvbnN0IFNUQVJUID0gYCR7YWN0aW9uTmFtZX1fTElTVF9TVEFSVGBcbiAgY29uc3QgU1VDQ0VTUyA9IGAke2FjdGlvbk5hbWV9X0xJU1RfU1VDQ0VTU2BcbiAgY29uc3QgUkVTRVQgPSBgUkVTRVRfJHthY3Rpb25OYW1lfV9MSVNUYFxuICBjb25zdCBFUlJPUiA9IGAke2FjdGlvbk5hbWV9X0xJU1RfRVJST1JgXG5cbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVBY3Rpb24oU1RBUlQsIChwYWdlLCBsaW1pdCwgcGFyYW1zKSA9PiAoe1xuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgcGFyYW1zLFxuICB9KSlcbiAgY29uc3Qgc3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihTVUNDRVNTLCBkYXRhID0+ICh7IGRhdGEgfSkpXG4gIGNvbnN0IHJlc2V0ID0gY3JlYXRlQWN0aW9uKFJFU0VUKVxuICBjb25zdCBlcnJvciA9IGNyZWF0ZUFjdGlvbihFUlJPUilcblxuICBjb25zdCByZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhcbiAgICB7XG4gICAgICBbU1RBUlRdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgc3RhdGUubWVyZ2Uoe1xuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgcGFyYW1zOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5wYXJhbXMsXG4gICAgICAgIH0pLFxuICAgICAgW1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUubWVyZ2Uoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBbRVJST1JdOiBzdGF0ZSA9PiBzdGF0ZS5tZXJnZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgc3VjY2VzczogZmFsc2UgfSksXG4gICAgICBbUkVTRVRdOiBzdGF0ZSA9PiBpbml0aWFsU3RhdGUoKSxcbiAgICB9LFxuICAgIGluaXRpYWxTdGF0ZSgpLFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICByZWR1Y2VyLFxuICAgIHR5cGVzOiB7XG4gICAgICBTVEFSVCxcbiAgICAgIFNVQ0NFU1MsXG4gICAgICBSRVNFVCxcbiAgICAgIEVSUk9SLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgc3RhcnQsXG4gICAgICBzdWNjZXNzLFxuICAgICAgZXJyb3IsXG4gICAgICByZXNldCxcbiAgICB9LFxuICB9XG59XG4iLCIvLyDliJ3lp4vljJbphY3nva5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBsb2dnZXI6IHRydWUsIC8vIHJlZHV4LWxvZ2dlclxuICBmZXRjaE1ldGhvZDogbnVsbCwgLy8gZmV0Y2jor7fmsYJcbiAgaGlzdG9yeTogJ2Jyb3dzZXInLCAvLyBicm93c2VyLCBoYXNoLCBtZW1vcnksIG5vbmVcbiAgYXV0b0FjdGlvbnM6IHRydWUsXG4gIG1pZGRsZXdhcmU6IFtdLCAvLyBtaWRkbGV3YXJlXG59XG5cbmV4cG9ydCBjb25zdCBnZXRPcHRpb25zID0gKCkgPT4ge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICAuLi5kZWZhdWx0T3B0aW9uc1xuICB9XG5cbiAgcmV0dXJuIChvcHRzKSA9PiB7XG4gICAgaWYgKG9wdHMpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC4uLm9wdHNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gZ2V0T3B0aW9ucygpXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IGNvbmZpZygpXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgeyByZWR1Y2Vycywgc2FnYXMgfSBmcm9tICcuL2Nvbm5lY3RTYWdhcydcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vc2V0dGluZ3MnXG5cbmNvbnN0IG9wdGlvbnMgPSBjb25maWcoKVxuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxuY29uc3QgY3JlYXRlUm9vdFJlZHVjZXIgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgLi4ucmVkdWNlcnMsXG4gIH0pXG59XG5cbmNvbnN0IGNvbWJpbmVNaWRkbGV3YXJlID0gKCkgPT4ge1xuICBsZXQgbWlkZGxlV2FyZSA9IFtcbiAgICBzYWdhTWlkZGxld2FyZSxcbiAgXVxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9wdGlvbnMubWlkZGxld2FyZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBtaWRkbGVXYXJlID0gWy4uLm1pZGRsZVdhcmUsIC4uLm9wdGlvbnMubWlkZGxld2FyZV1cbiAgfVxuICBpZiAob3B0aW9ucy5sb2dnZXIpIHtcbiAgICBtaWRkbGVXYXJlLnB1c2gobG9nZ2VyKVxuICB9XG4gIHJldHVybiBjb21wb3NlKFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGVXYXJlKSxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0U3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBjcmVhdGVSb290UmVkdWNlcihyZWR1Y2VycyksXG4gICAgaW5pdFN0YXRlLFxuICAgIGNvbWJpbmVNaWRkbGV3YXJlKCksXG4gIClcbiAgc2FnYU1pZGRsZXdhcmUucnVuKGZ1bmN0aW9uKiByb290U2FnYShnZXRTdGF0ZSkge1xuICAgIHlpZWxkIGFsbChzYWdhcylcbiAgfSlcblxuICByZXR1cm4gc3RvcmVcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=