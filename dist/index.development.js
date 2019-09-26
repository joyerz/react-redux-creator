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
// export let options = {
//   logger: true, // redux-logger
//   fetchMethod: null, // fetch请求
//   history: 'browser', // browser, hash, memory, none
//   autoActions: true,
//   middleware: [], // middleware
// }
// export default function config(opts) {
//   options = {
//     ...options,
//     ...opts
//   }
//   console.log(options)
// }
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
console.log('o', options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2NvcmUvZGlzdC9pby00Mjc5NDVkZC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvY29yZS9kaXN0L3JlZHV4LXNhZ2EtZWZmZWN0cy5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2RlbGF5LXAvZGlzdC9yZWR1eC1zYWdhLWRlbGF5LXAuZXNtLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9pcy9kaXN0L3JlZHV4LXNhZ2EtaXMuZXNtLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9zeW1ib2xzL2Rpc3QvcmVkdXgtc2FnYS1zeW1ib2xzLmVzbS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvcmVkdXgtbG9nZ2VyL2Rpc3QvcmVkdXgtbG9nZ2VyLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1lZmZlY3RzLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3MtaW1tdXRhYmxlL3NlYW1sZXNzLWltbXV0YWJsZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvbGlicy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vc3JjL2xpYnMvY29ubmVjdFNhZ2FzLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy9saWJzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvbGlicy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvbGlicy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci9leHRlcm5hbCBcInJlZHV4LWFjdGlvbnNcIiIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiXSwibmFtZXMiOlsiYnVpbGRSZWR1eCIsImNvbm5lY3RTYWdhcyIsImNvbmZpZyIsImNyZWF0ZVN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJvYmoycGFyYW1zIiwib2JqIiwicHJlZml4Iiwic3VmZml4IiwicGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ1bmRlZmluZWQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImpvaW4iLCJ1bmRlclNjb3JlVG9DYW1lbCIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJub3RFbXB0eSIsInZhbHVlIiwibm90TnVsbE9yVW5kZWZpZW5kIiwiY3JlYXRlV2F0Y2hlciIsImVmZmVjdHMiLCJwdXQiLCJjYWxsIiwiYWxsQWN0aW9ucyIsInNhZ2FzIiwicmVkdWNlcnMiLCJnZXRBY3Rpb24iLCJhY3Rpb25OYW1lIiwiZ2V0U3RhdGUiLCJjaGlsZCIsImdldCIsInN0YXRlIiwic2VsZWN0IiwicmVkdXhlciIsImFyZ3MiLCJyZWR1eCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZiIsIndhdGNoIiwidGFrZUxhdGVzdCIsInR5cGVzIiwiU1RBUlQiLCJwYXlsb2FkIiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJleHRyYWN0Iiwib25SZXN1bHQiLCJvbkFmdGVyIiwib25FcnJvciIsImZldGNoIiwiY2FsbGJhY2tDb25maWciLCJpbmRleE9mIiwiZmV0Y2hNZXRob2QiLCJvcHRpb25zIiwicmVzdWx0IiwiZmFsbGJhY2tSZXN1bHQiLCJhdXRvQWN0aW9ucyIsInN1Y2Nlc3MiLCJyZXNldCIsImRlZmF1bHREYXRhIiwiaW5pdGlhbFN0YXRlIiwiSW1tdXRhYmxlIiwibG9hZGluZyIsImVycm9yIiwiU1VDQ0VTUyIsIkVSUk9SIiwiUkVTRVQiLCJzdGFydCIsImNyZWF0ZUFjdGlvbiIsImVycm9yTWVzc2FnZSIsImhhbmRsZUFjdGlvbnMiLCJhY3Rpb24iLCJtZXJnZSIsImJ1aWxkTGlzdFJlZHV4IiwicGFnZSIsInBlcl9wYWdlIiwidG90YWxfY291bnQiLCJ0b3RhbF9wYWdlIiwiZW50cmllcyIsImxpbWl0IiwiZGVmYXVsdE9wdGlvbnMiLCJsb2dnZXIiLCJoaXN0b3J5IiwibWlkZGxld2FyZSIsImdldE9wdGlvbnMiLCJvcHRzIiwiY29uc29sZSIsImxvZyIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVSb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvbWJpbmVNaWRkbGV3YXJlIiwibWlkZGxlV2FyZSIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsImluaXRTdGF0ZSIsInN0b3JlIiwicnVuIiwicm9vdFNhZ2EiLCJhbGwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcnRCQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsNEJBQTRCO0FBQ3JFOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsNEJBQTRCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7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YyxDQUFDWSxHQUFmO0FBQUE7QUFBQSx5RUFBbUIsU0FBVUMsUUFBVixDQUFtQjVFLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQixtQkFBTTZFLDhEQUFHLENBQUNqRixtREFBRCxDQUFUOztBQURpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBVWdGLFFBQVY7QUFBQSxHQUFuQjtBQUlBLFNBQU9GLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQzVDRCxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJpbmRleC5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgeyBUQVNLX0NBTkNFTCwgVEVSTUlOQVRFLCBTQUdBX0xPQ0FUSU9OLCBTQUdBX0FDVElPTiwgSU8sIFNFTEZfQ0FOQ0VMTEFUSU9OIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBhcnJheSwgbm90VW5kZWYsIHBhdHRlcm4sIG11bHRpY2FzdCwgY2hhbm5lbCwgdW5kZWYsIHRhc2ssIGZ1bmMsIGJ1ZmZlciwgc3RyaW5nLCBvYmplY3QgfSBmcm9tICdAcmVkdXgtc2FnYS9pcyc7XG5pbXBvcnQgZGVsYXlQIGZyb20gJ0ByZWR1eC1zYWdhL2RlbGF5LXAnO1xuXG52YXIga29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xudmFyIGtUcnVlID1cbi8qI19fUFVSRV9fKi9cbmtvbnN0KHRydWUpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xuICBub29wID1cbiAgLyojX19QVVJFX18qL1xuICBuZXcgUHJveHkobm9vcCwge1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ1RoZXJlIHdhcyBhbiBhdHRlbXB0IHRvIGFzc2lnbiBhIHByb3BlcnR5IHRvIGludGVybmFsIGBub29wYCBmdW5jdGlvbi4nKTtcbiAgICB9XG4gIH0pO1xufVxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkodikge1xuICByZXR1cm4gdjtcbn07XG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gaGFzU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJztcbmZ1bmN0aW9uIGNoZWNrKHZhbHVlLCBwcmVkaWNhdGUsIGVycm9yKSB7XG4gIGlmICghcHJlZGljYXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn1cbnZhciBhc3NpZ25XaXRoU3ltYm9scyA9IGZ1bmN0aW9uIGFzc2lnbldpdGhTeW1ib2xzKHRhcmdldCwgc291cmNlKSB7XG4gIF9leHRlbmRzKHRhcmdldCwgc291cmNlKTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICB0YXJnZXRbc10gPSBzb3VyY2Vbc107XG4gICAgfSk7XG4gIH1cbn07XG52YXIgZmxhdE1hcCA9IGZ1bmN0aW9uIGZsYXRNYXAobWFwcGVyLCBhcnIpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIChfcmVmID0gW10pLmNvbmNhdC5hcHBseShfcmVmLCBhcnIubWFwKG1hcHBlcikpO1xufTtcbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuXG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuZnVuY3Rpb24gb25jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgZm4oKTtcbiAgfTtcbn1cblxudmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcbiAgdGhyb3cgZXJyO1xufTtcblxudmFyIGtSZXR1cm4gPSBmdW5jdGlvbiBrUmV0dXJuKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRvbmU6IHRydWVcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VJdGVyYXRvcihuZXh0LCB0aHJvLCBuYW1lKSB7XG4gIGlmICh0aHJvID09PSB2b2lkIDApIHtcbiAgICB0aHJvID0ga1Rocm93O1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSAnaXRlcmF0b3InO1xuICB9XG5cbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG1ldGE6IHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9LFxuICAgIG5leHQ6IG5leHQsXG4gICAgdGhyb3c6IHRocm8sXG4gICAgcmV0dXJuOiBrUmV0dXJuLFxuICAgIGlzU2FnYUl0ZXJhdG9yOiB0cnVlXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IsIF9yZWYyKSB7XG4gIHZhciBzYWdhU3RhY2sgPSBfcmVmMi5zYWdhU3RhY2s7XG5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlKi9cbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIGNvbnNvbGUuZXJyb3Ioc2FnYVN0YWNrKTtcbn1cbnZhciBpbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKFwiXFxuICByZWR1eC1zYWdhOiBFcnJvciBjaGVja2luZyBob29rcyBkZXRlY3RlZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuIFRoaXMgaXMgbGlrZWx5IGEgYnVnXFxuICBpbiByZWR1eC1zYWdhIGNvZGUgYW5kIG5vdCB5b3Vycy4gVGhhbmtzIGZvciByZXBvcnRpbmcgdGhpcyBpbiB0aGUgcHJvamVjdCdzIGdpdGh1YiByZXBvLlxcbiAgRXJyb3I6IFwiICsgZXJyICsgXCJcXG5cIik7XG59O1xudmFyIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZnVuY3Rpb24gY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoY3R4LCBwcm9wcykge1xuICByZXR1cm4gKGN0eCA/IGN0eCArICcuJyA6ICcnKSArIFwic2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50IFwiICsgcHJvcHMgKyBcIiBpcyBub3QgYSBwbGFpbiBvYmplY3RcIjtcbn07XG52YXIgRlJPWkVOX0FDVElPTl9FUlJPUiA9IFwiWW91IGNhbid0IHB1dCAoYS5rLmEuIGRpc3BhdGNoIGZyb20gc2FnYSkgZnJvemVuIGFjdGlvbnMuXFxuV2UgaGF2ZSB0byBkZWZpbmUgYSBzcGVjaWFsIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IG9uIHRob3NlIGFjdGlvbnMgZm9yIHNjaGVkdWxpbmcgcHVycG9zZXMuXFxuT3RoZXJ3aXNlIHlvdSB3b3VsZG4ndCBiZSBhYmxlIHRvIGNvbW11bmljYXRlIHByb3Blcmx5IGJldHdlZW4gc2FnYXMgJiBvdGhlciBzdWJzY3JpYmVycyAoYWN0aW9uIG9yZGVyaW5nIHdvdWxkIGJlY29tZSBmYXIgbGVzcyBwcmVkaWN0YWJsZSkuXFxuSWYgeW91IGFyZSB1c2luZyByZWR1eCBhbmQgeW91IGNhcmUgYWJvdXQgdGhpcyBiZWhhdmlvdXIgKGZyb3plbiBhY3Rpb25zKSxcXG50aGVuIHlvdSBtaWdodCB3YW50IHRvIHN3aXRjaCB0byBmcmVlemluZyBhY3Rpb25zIGluIGEgbWlkZGxld2FyZSByYXRoZXIgdGhhbiBpbiBhY3Rpb24gY3JlYXRvci5cXG5FeGFtcGxlIGltcGxlbWVudGF0aW9uOlxcblxcbmNvbnN0IGZyZWV6ZUFjdGlvbnMgPSBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiBuZXh0KE9iamVjdC5mcmVlemUoYWN0aW9uKSlcXG5cIjsgLy8gY3JlYXRlcyBlbXB0eSwgYnV0IG5vdC1ob2xleSBhcnJheVxuXG52YXIgY3JlYXRlRW1wdHlBcnJheSA9IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5QXJyYXkobikge1xuICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KG4pKTtcbn07XG52YXIgd3JhcFNhZ2FEaXNwYXRjaCA9IGZ1bmN0aW9uIHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2soYWN0aW9uLCBmdW5jdGlvbiAoYWMpIHtcbiAgICAgICAgcmV0dXJuICFPYmplY3QuaXNGcm96ZW4oYWMpO1xuICAgICAgfSwgRlJPWkVOX0FDVElPTl9FUlJPUik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BhdGNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3Rpb24sIFNBR0FfQUNUSU9OLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgc2hvdWxkVGVybWluYXRlID0gZnVuY3Rpb24gc2hvdWxkVGVybWluYXRlKHJlcykge1xuICByZXR1cm4gcmVzID09PSBURVJNSU5BVEU7XG59O1xudmFyIHNob3VsZENhbmNlbCA9IGZ1bmN0aW9uIHNob3VsZENhbmNlbChyZXMpIHtcbiAgcmV0dXJuIHJlcyA9PT0gVEFTS19DQU5DRUw7XG59O1xudmFyIHNob3VsZENvbXBsZXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcGxldGUocmVzKSB7XG4gIHJldHVybiBzaG91bGRUZXJtaW5hdGUocmVzKSB8fCBzaG91bGRDYW5jZWwocmVzKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzKHNoYXBlLCBwYXJlbnRDYWxsYmFjaykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNoYXBlKTtcbiAgdmFyIHRvdGFsQ291bnQgPSBrZXlzLmxlbmd0aDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHRvdGFsQ291bnQsIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYyA+IDA7XG4gICAgfSwgJ2NyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3M6IGdldCBhbiBlbXB0eSBhcnJheSBvciBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciBjb21wbGV0ZWRDb3VudCA9IDA7XG4gIHZhciBjb21wbGV0ZWQ7XG4gIHZhciByZXN1bHRzID0gYXJyYXkoc2hhcGUpID8gY3JlYXRlRW1wdHlBcnJheSh0b3RhbENvdW50KSA6IHt9O1xuICB2YXIgY2hpbGRDYWxsYmFja3MgPSB7fTtcblxuICBmdW5jdGlvbiBjaGVja0VuZCgpIHtcbiAgICBpZiAoY29tcGxldGVkQ291bnQgPT09IHRvdGFsQ291bnQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBwYXJlbnRDYWxsYmFjayhyZXN1bHRzKTtcbiAgICB9XG4gIH1cblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaENiQXRLZXkgPSBmdW5jdGlvbiBjaENiQXRLZXkocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VyciB8fCBzaG91bGRDb21wbGV0ZShyZXMpKSB7XG4gICAgICAgIHBhcmVudENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgICBwYXJlbnRDYWxsYmFjayhyZXMsIGlzRXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNba2V5XSA9IHJlcztcbiAgICAgICAgY29tcGxldGVkQ291bnQrKztcbiAgICAgICAgY2hlY2tFbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hDYkF0S2V5LmNhbmNlbCA9IG5vb3A7XG4gICAgY2hpbGRDYWxsYmFja3Nba2V5XSA9IGNoQ2JBdEtleTtcbiAgfSk7XG5cbiAgcGFyZW50Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzW2tleV0uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzO1xufVxuZnVuY3Rpb24gZ2V0TWV0YUluZm8oZm4pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmbi5uYW1lIHx8ICdhbm9ueW1vdXMnLFxuICAgIGxvY2F0aW9uOiBnZXRMb2NhdGlvbihmbilcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGluc3RydW1lbnRlZCkge1xuICByZXR1cm4gaW5zdHJ1bWVudGVkW1NBR0FfTE9DQVRJT05dO1xufVxuXG52YXIgQlVGRkVSX09WRVJGTE9XID0gXCJDaGFubmVsJ3MgQnVmZmVyIG92ZXJmbG93IVwiO1xudmFyIE9OX09WRVJGTE9XX1RIUk9XID0gMTtcbnZhciBPTl9PVkVSRkxPV19EUk9QID0gMjtcbnZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG52YXIgT05fT1ZFUkZMT1dfRVhQQU5EID0gNDtcbnZhciB6ZXJvQnVmZmVyID0ge1xuICBpc0VtcHR5OiBrVHJ1ZSxcbiAgcHV0OiBub29wLFxuICB0YWtlOiBub29wXG59O1xuXG5mdW5jdGlvbiByaW5nQnVmZmVyKGxpbWl0LCBvdmVyZmxvd0FjdGlvbikge1xuICBpZiAobGltaXQgPT09IHZvaWQgMCkge1xuICAgIGxpbWl0ID0gMTA7XG4gIH1cblxuICB2YXIgYXJyID0gbmV3IEFycmF5KGxpbWl0KTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBwdXNoSW5kZXggPSAwO1xuICB2YXIgcG9wSW5kZXggPSAwO1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChpdCkge1xuICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgcHVzaEluZGV4ID0gKHB1c2hJbmRleCArIDEpICUgbGltaXQ7XG4gICAgbGVuZ3RoKys7XG4gIH07XG5cbiAgdmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKCkge1xuICAgIGlmIChsZW5ndGggIT0gMCkge1xuICAgICAgdmFyIGl0ID0gYXJyW3BvcEluZGV4XTtcbiAgICAgIGFycltwb3BJbmRleF0gPSBudWxsO1xuICAgICAgbGVuZ3RoLS07XG4gICAgICBwb3BJbmRleCA9IChwb3BJbmRleCArIDEpICUgbGltaXQ7XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChpdCkge1xuICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHB1c2goaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvdWJsZWRMaW1pdDtcblxuICAgICAgICBzd2l0Y2ggKG92ZXJmbG93QWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19USFJPVzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihCVUZGRVJfT1ZFUkZMT1cpO1xuXG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19TTElERTpcbiAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gcHVzaEluZGV4O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcbiAgICAgICAgICAgIGRvdWJsZWRMaW1pdCA9IDIgKiBsaW1pdDtcbiAgICAgICAgICAgIGFyciA9IGZsdXNoKCk7XG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcHVzaEluZGV4ID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gMDtcbiAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBsaW1pdCA9IGRvdWJsZWRMaW1pdDtcbiAgICAgICAgICAgIHB1c2goaXQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OiAvLyBEUk9QXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFrZTogdGFrZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn1cblxudmFyIG5vbmUgPSBmdW5jdGlvbiBub25lKCkge1xuICByZXR1cm4gemVyb0J1ZmZlcjtcbn07XG52YXIgZml4ZWQgPSBmdW5jdGlvbiBmaXhlZChsaW1pdCkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xufTtcbnZhciBkcm9wcGluZyA9IGZ1bmN0aW9uIGRyb3BwaW5nKGxpbWl0KSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19EUk9QKTtcbn07XG52YXIgc2xpZGluZyA9IGZ1bmN0aW9uIHNsaWRpbmcobGltaXQpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1NMSURFKTtcbn07XG52YXIgZXhwYW5kaW5nID0gZnVuY3Rpb24gZXhwYW5kaW5nKGluaXRpYWxTaXplKSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xufTtcblxudmFyIGJ1ZmZlcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIG5vbmU6IG5vbmUsXG4gIGZpeGVkOiBmaXhlZCxcbiAgZHJvcHBpbmc6IGRyb3BwaW5nLFxuICBzbGlkaW5nOiBzbGlkaW5nLFxuICBleHBhbmRpbmc6IGV4cGFuZGluZ1xufSk7XG5cbnZhciBUQUtFID0gJ1RBS0UnO1xudmFyIFBVVCA9ICdQVVQnO1xudmFyIEFMTCA9ICdBTEwnO1xudmFyIFJBQ0UgPSAnUkFDRSc7XG52YXIgQ0FMTCA9ICdDQUxMJztcbnZhciBDUFMgPSAnQ1BTJztcbnZhciBGT1JLID0gJ0ZPUksnO1xudmFyIEpPSU4gPSAnSk9JTic7XG52YXIgQ0FOQ0VMID0gJ0NBTkNFTCc7XG52YXIgU0VMRUNUID0gJ1NFTEVDVCc7XG52YXIgQUNUSU9OX0NIQU5ORUwgPSAnQUNUSU9OX0NIQU5ORUwnO1xudmFyIENBTkNFTExFRCA9ICdDQU5DRUxMRUQnO1xudmFyIEZMVVNIID0gJ0ZMVVNIJztcbnZhciBHRVRfQ09OVEVYVCA9ICdHRVRfQ09OVEVYVCc7XG52YXIgU0VUX0NPTlRFWFQgPSAnU0VUX0NPTlRFWFQnO1xuXG52YXIgZWZmZWN0VHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIFRBS0U6IFRBS0UsXG4gIFBVVDogUFVULFxuICBBTEw6IEFMTCxcbiAgUkFDRTogUkFDRSxcbiAgQ0FMTDogQ0FMTCxcbiAgQ1BTOiBDUFMsXG4gIEZPUks6IEZPUkssXG4gIEpPSU46IEpPSU4sXG4gIENBTkNFTDogQ0FOQ0VMLFxuICBTRUxFQ1Q6IFNFTEVDVCxcbiAgQUNUSU9OX0NIQU5ORUw6IEFDVElPTl9DSEFOTkVMLFxuICBDQU5DRUxMRUQ6IENBTkNFTExFRCxcbiAgRkxVU0g6IEZMVVNILFxuICBHRVRfQ09OVEVYVDogR0VUX0NPTlRFWFQsXG4gIFNFVF9DT05URVhUOiBTRVRfQ09OVEVYVFxufSk7XG5cbnZhciBURVNUX0hJTlQgPSAnXFxuKEhJTlQ6IGlmIHlvdSBhcmUgZ2V0dGluZyB0aGVzZSBlcnJvcnMgaW4gdGVzdHMsIGNvbnNpZGVyIHVzaW5nIGNyZWF0ZU1vY2tUYXNrIGZyb20gQHJlZHV4LXNhZ2EvdGVzdGluZy11dGlscyknO1xuXG52YXIgbWFrZUVmZmVjdCA9IGZ1bmN0aW9uIG1ha2VFZmZlY3QodHlwZSwgcGF5bG9hZCkge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW0lPXSA9IHRydWUsIF9yZWYuY29tYmluYXRvciA9IGZhbHNlLCBfcmVmLnR5cGUgPSB0eXBlLCBfcmVmLnBheWxvYWQgPSBwYXlsb2FkLCBfcmVmO1xufTtcblxudmFyIGlzRm9ya0VmZmVjdCA9IGZ1bmN0aW9uIGlzRm9ya0VmZmVjdChlZmYpIHtcbiAgcmV0dXJuIGVmZiAmJiBlZmZbSU9dICYmIGVmZi50eXBlID09PSBGT1JLO1xufTtcblxudmFyIGRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaChlZmYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhlZmYsIGlzRm9ya0VmZmVjdCwgJ2RldGFjaChlZmYpOiBhcmd1bWVudCBtdXN0IGJlIGEgZm9yayBlZmZlY3QnKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEZPUkssIF9leHRlbmRzKHt9LCBlZmYucGF5bG9hZCwge1xuICAgIGRldGFjaGVkOiB0cnVlXG4gIH0pKTtcbn07XG5mdW5jdGlvbiB0YWtlKHBhdHRlcm5PckNoYW5uZWwsIG11bHRpY2FzdFBhdHRlcm4pIHtcbiAgaWYgKHBhdHRlcm5PckNoYW5uZWwgPT09IHZvaWQgMCkge1xuICAgIHBhdHRlcm5PckNoYW5uZWwgPSAnKic7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2hlY2soYXJndW1lbnRzWzBdLCBub3RVbmRlZiwgJ3Rha2UocGF0dGVybk9yQ2hhbm5lbCk6IHBhdHRlcm5PckNoYW5uZWwgaXMgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBpZiAocGF0dGVybihwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBtYWtlRWZmZWN0KFRBS0UsIHtcbiAgICAgIHBhdHRlcm46IHBhdHRlcm5PckNoYW5uZWxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChtdWx0aWNhc3QocGF0dGVybk9yQ2hhbm5lbCkgJiYgbm90VW5kZWYobXVsdGljYXN0UGF0dGVybikgJiYgcGF0dGVybihtdWx0aWNhc3RQYXR0ZXJuKSkge1xuICAgIHJldHVybiBtYWtlRWZmZWN0KFRBS0UsIHtcbiAgICAgIGNoYW5uZWw6IHBhdHRlcm5PckNoYW5uZWwsXG4gICAgICBwYXR0ZXJuOiBtdWx0aWNhc3RQYXR0ZXJuXG4gICAgfSk7XG4gIH1cblxuICBpZiAoY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBtYWtlRWZmZWN0KFRBS0UsIHtcbiAgICAgIGNoYW5uZWw6IHBhdHRlcm5PckNoYW5uZWxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidGFrZShwYXR0ZXJuT3JDaGFubmVsKTogYXJndW1lbnQgXCIgKyBwYXR0ZXJuT3JDaGFubmVsICsgXCIgaXMgbm90IHZhbGlkIGNoYW5uZWwgb3IgYSB2YWxpZCBwYXR0ZXJuXCIpO1xuICB9XG59XG52YXIgdGFrZU1heWJlID0gZnVuY3Rpb24gdGFrZU1heWJlKCkge1xuICB2YXIgZWZmID0gdGFrZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIGVmZi5wYXlsb2FkLm1heWJlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5mdW5jdGlvbiBwdXQoY2hhbm5lbCQxLCBhY3Rpb24pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNoZWNrKGNoYW5uZWwkMSwgbm90VW5kZWYsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgY2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcbiAgICAgIGNoZWNrKGNoYW5uZWwkMSwgY2hhbm5lbCwgXCJwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgXCIgKyBjaGFubmVsJDEgKyBcIiBpcyBub3QgYSB2YWxpZCBjaGFubmVsXCIpO1xuICAgICAgY2hlY2soYWN0aW9uLCBub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrKGNoYW5uZWwkMSwgbm90VW5kZWYsICdwdXQoYWN0aW9uKTogYXJndW1lbnQgYWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1bmRlZihhY3Rpb24pKSB7XG4gICAgYWN0aW9uID0gY2hhbm5lbCQxOyAvLyBgdW5kZWZpbmVkYCBpbnN0ZWFkIG9mIGBudWxsYCB0byBtYWtlIGRlZmF1bHQgcGFyYW1ldGVyIHdvcmtcblxuICAgIGNoYW5uZWwkMSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KFBVVCwge1xuICAgIGNoYW5uZWw6IGNoYW5uZWwkMSxcbiAgICBhY3Rpb246IGFjdGlvblxuICB9KTtcbn1cbnZhciBwdXRSZXNvbHZlID0gZnVuY3Rpb24gcHV0UmVzb2x2ZSgpIHtcbiAgdmFyIGVmZiA9IHB1dC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIGVmZi5wYXlsb2FkLnJlc29sdmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcbmZ1bmN0aW9uIGFsbChlZmZlY3RzKSB7XG4gIHZhciBlZmYgPSBtYWtlRWZmZWN0KEFMTCwgZWZmZWN0cyk7XG4gIGVmZi5jb21iaW5hdG9yID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn1cbmZ1bmN0aW9uIHJhY2UoZWZmZWN0cykge1xuICB2YXIgZWZmID0gbWFrZUVmZmVjdChSQUNFLCBlZmZlY3RzKTtcbiAgZWZmLmNvbWJpbmF0b3IgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufSAvLyB0aGlzIG1hdGNoIGdldEZuQ2FsbERlc2NyaXB0b3IgbG9naWNcblxudmFyIHZhbGlkYXRlRm5EZXNjcmlwdG9yID0gZnVuY3Rpb24gdmFsaWRhdGVGbkRlc2NyaXB0b3IoZWZmZWN0TmFtZSwgZm5EZXNjcmlwdG9yKSB7XG4gIGNoZWNrKGZuRGVzY3JpcHRvciwgbm90VW5kZWYsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgZm4gaXMgdW5kZWZpbmVkIG9yIG51bGxcIik7XG5cbiAgaWYgKGZ1bmMoZm5EZXNjcmlwdG9yKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgdmFyIGZuO1xuXG4gIGlmIChhcnJheShmbkRlc2NyaXB0b3IpKSB7XG4gICAgY29udGV4dCA9IGZuRGVzY3JpcHRvclswXTtcbiAgICBmbiA9IGZuRGVzY3JpcHRvclsxXTtcbiAgICBjaGVjayhmbiwgbm90VW5kZWYsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgb2YgdHlwZSBbY29udGV4dCwgZm5dIGhhcyB1bmRlZmluZWQgb3IgbnVsbCBgZm5gXCIpO1xuICB9IGVsc2UgaWYgKG9iamVjdChmbkRlc2NyaXB0b3IpKSB7XG4gICAgY29udGV4dCA9IGZuRGVzY3JpcHRvci5jb250ZXh0O1xuICAgIGZuID0gZm5EZXNjcmlwdG9yLmZuO1xuICAgIGNoZWNrKGZuLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBvZiB0eXBlIHtjb250ZXh0LCBmbn0gaGFzIHVuZGVmaW5lZCBvciBudWxsIGBmbmBcIik7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2soZm5EZXNjcmlwdG9yLCBmdW5jLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IGZuIGlzIG5vdCBmdW5jdGlvblwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29udGV4dCAmJiBzdHJpbmcoZm4pKSB7XG4gICAgY2hlY2soY29udGV4dFtmbl0sIGZ1bmMsIGVmZmVjdE5hbWUgKyBcIjogY29udGV4dCBhcmd1bWVudHMgaGFzIG5vIHN1Y2ggbWV0aG9kIC0gXFxcIlwiICsgZm4gKyBcIlxcXCJcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2hlY2soZm4sIGZ1bmMsIGVmZmVjdE5hbWUgKyBcIjogdW5wYWNrZWQgZm4gYXJndW1lbnQgKGZyb20gW2NvbnRleHQsIGZuXSBvciB7Y29udGV4dCwgZm59KSBpcyBub3QgYSBmdW5jdGlvblwiKTtcbn07XG5cbmZ1bmN0aW9uIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSB7XG4gIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgdmFyIGZuO1xuXG4gIGlmIChmdW5jKGZuRGVzY3JpcHRvcikpIHtcbiAgICBmbiA9IGZuRGVzY3JpcHRvcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoYXJyYXkoZm5EZXNjcmlwdG9yKSkge1xuICAgICAgY29udGV4dCA9IGZuRGVzY3JpcHRvclswXTtcbiAgICAgIGZuID0gZm5EZXNjcmlwdG9yWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yLmNvbnRleHQ7XG4gICAgICBmbiA9IGZuRGVzY3JpcHRvci5mbjtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiBzdHJpbmcoZm4pICYmIGZ1bmMoY29udGV4dFtmbl0pKSB7XG4gICAgICBmbiA9IGNvbnRleHRbZm5dO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBmbjogZm4sXG4gICAgYXJnczogYXJnc1xuICB9O1xufVxuXG52YXIgaXNOb3REZWxheUVmZmVjdCA9IGZ1bmN0aW9uIGlzTm90RGVsYXlFZmZlY3QoZm4pIHtcbiAgcmV0dXJuIGZuICE9PSBkZWxheTtcbn07XG5cbmZ1bmN0aW9uIGNhbGwoZm5EZXNjcmlwdG9yKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGFyZzAgPSB0eXBlb2YgYXJnc1swXSA9PT0gJ251bWJlcicgPyBhcmdzWzBdIDogJ21zJztcbiAgICBjaGVjayhmbkRlc2NyaXB0b3IsIGlzTm90RGVsYXlFZmZlY3QsIFwiaW5zdGVhZCBvZiB3cml0aW5nIGB5aWVsZCBjYWxsKGRlbGF5LCBcIiArIGFyZzAgKyBcIilgIHdoZXJlIGRlbGF5IGlzIGFuIGVmZmVjdCBmcm9tIGByZWR1eC1zYWdhL2VmZmVjdHNgIHlvdSBzaG91bGQgd3JpdGUgYHlpZWxkIGRlbGF5KFwiICsgYXJnMCArIFwiKWBcIik7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2NhbGwnLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIGFwcGx5KGNvbnRleHQsIGZuLCBhcmdzKSB7XG4gIGlmIChhcmdzID09PSB2b2lkIDApIHtcbiAgICBhcmdzID0gW107XG4gIH1cblxuICB2YXIgZm5EZXNjcmlwdG9yID0gW2NvbnRleHQsIGZuXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdhcHBseScsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjcmlwdG9yKFtjb250ZXh0LCBmbl0sIGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIGNwcyhmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignY3BzJywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENQUywgZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIGZvcmsoZm5EZXNjcmlwdG9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2ZvcmsnLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoRk9SSywgZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHNwYXduKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdzcGF3bicsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4gZGV0YWNoKGZvcmsuYXBwbHkodm9pZCAwLCBbZm5EZXNjcmlwdG9yXS5jb25jYXQoYXJncykpKTtcbn1cbmZ1bmN0aW9uIGpvaW4odGFza09yVGFza3MpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignam9pbiguLi50YXNrcykgaXMgbm90IHN1cHBvcnRlZCBhbnkgbW9yZS4gUGxlYXNlIHVzZSBqb2luKFsuLi50YXNrc10pIHRvIGpvaW4gbXVsdGlwbGUgdGFza3MuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFycmF5KHRhc2tPclRhc2tzKSkge1xuICAgICAgdGFza09yVGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBjaGVjayh0LCB0YXNrLCBcImpvaW4oWy4uLnRhc2tzXSk6IGFyZ3VtZW50IFwiICsgdCArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVjayh0YXNrT3JUYXNrcywgdGFzaywgXCJqb2luKHRhc2spOiBhcmd1bWVudCBcIiArIHRhc2tPclRhc2tzICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEpPSU4sIHRhc2tPclRhc2tzKTtcbn1cbmZ1bmN0aW9uIGNhbmNlbCh0YXNrT3JUYXNrcykge1xuICBpZiAodGFza09yVGFza3MgPT09IHZvaWQgMCkge1xuICAgIHRhc2tPclRhc2tzID0gU0VMRl9DQU5DRUxMQVRJT047XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWwoLi4udGFza3MpIGlzIG5vdCBzdXBwb3J0ZWQgYW55IG1vcmUuIFBsZWFzZSB1c2UgY2FuY2VsKFsuLi50YXNrc10pIHRvIGNhbmNlbCBtdWx0aXBsZSB0YXNrcy4nKTtcbiAgICB9XG5cbiAgICBpZiAoYXJyYXkodGFza09yVGFza3MpKSB7XG4gICAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNoZWNrKHQsIHRhc2ssIFwiY2FuY2VsKFsuLi50YXNrc10pOiBhcmd1bWVudCBcIiArIHQgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhc2tPclRhc2tzICE9PSBTRUxGX0NBTkNFTExBVElPTiAmJiBub3RVbmRlZih0YXNrT3JUYXNrcykpIHtcbiAgICAgIGNoZWNrKHRhc2tPclRhc2tzLCB0YXNrLCBcImNhbmNlbCh0YXNrKTogYXJndW1lbnQgXCIgKyB0YXNrT3JUYXNrcyArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDQU5DRUwsIHRhc2tPclRhc2tzKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yID0gaWRlbnRpdHk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUgPiAxID8gX2xlbjUgLSAxIDogMCksIF9rZXk1ID0gMTsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIGFyZ3NbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2hlY2soYXJndW1lbnRzWzBdLCBub3RVbmRlZiwgJ3NlbGVjdChzZWxlY3RvciwgWy4uLl0pOiBhcmd1bWVudCBzZWxlY3RvciBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayhzZWxlY3RvciwgZnVuYywgXCJzZWxlY3Qoc2VsZWN0b3IsIFsuLi5dKTogYXJndW1lbnQgXCIgKyBzZWxlY3RvciArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoU0VMRUNULCB7XG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIGFyZ3M6IGFyZ3NcbiAgfSk7XG59XG4vKipcbiAgY2hhbm5lbChwYXR0ZXJuLCBbYnVmZmVyXSkgICAgPT4gY3JlYXRlcyBhIHByb3h5IGNoYW5uZWwgZm9yIHN0b3JlIGFjdGlvbnNcbioqL1xuXG5mdW5jdGlvbiBhY3Rpb25DaGFubmVsKHBhdHRlcm4kMSwgYnVmZmVyJDEpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhwYXR0ZXJuJDEsIHBhdHRlcm4sICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sLi4uKTogYXJndW1lbnQgcGF0dGVybiBpcyBub3QgdmFsaWQnKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY2hlY2soYnVmZmVyJDEsIG5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBidWZmZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgICBjaGVjayhidWZmZXIkMSwgYnVmZmVyLCBcImFjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgXCIgKyBidWZmZXIkMSArIFwiIGlzIG5vdCBhIHZhbGlkIGJ1ZmZlclwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChBQ1RJT05fQ0hBTk5FTCwge1xuICAgIHBhdHRlcm46IHBhdHRlcm4kMSxcbiAgICBidWZmZXI6IGJ1ZmZlciQxXG4gIH0pO1xufVxuZnVuY3Rpb24gY2FuY2VsbGVkKCkge1xuICByZXR1cm4gbWFrZUVmZmVjdChDQU5DRUxMRUQsIHt9KTtcbn1cbmZ1bmN0aW9uIGZsdXNoKGNoYW5uZWwkMSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGNoYW5uZWwkMSwgY2hhbm5lbCwgXCJmbHVzaChjaGFubmVsKTogYXJndW1lbnQgXCIgKyBjaGFubmVsJDEgKyBcIiBpcyBub3QgdmFsaWQgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEZMVVNILCBjaGFubmVsJDEpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dChwcm9wKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socHJvcCwgc3RyaW5nLCBcImdldENvbnRleHQocHJvcCk6IGFyZ3VtZW50IFwiICsgcHJvcCArIFwiIGlzIG5vdCBhIHN0cmluZ1wiKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEdFVF9DT05URVhULCBwcm9wKTtcbn1cbmZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhwcm9wcywgb2JqZWN0LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZyhudWxsLCBwcm9wcykpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoU0VUX0NPTlRFWFQsIHByb3BzKTtcbn1cbnZhciBkZWxheSA9XG4vKiNfX1BVUkVfXyovXG5jYWxsLmJpbmQobnVsbCwgZGVsYXlQKTtcblxuZXhwb3J0IHsgYXBwbHkgYXMgJCwgQUxMIGFzIEEsIGxvZ0Vycm9yIGFzIEIsIENBTEwgYXMgQywgd3JhcFNhZ2FEaXNwYXRjaCBhcyBELCBpZGVudGl0eSBhcyBFLCBGT1JLIGFzIEYsIEdFVF9DT05URVhUIGFzIEcsIGJ1ZmZlcnMgYXMgSCwgZGV0YWNoIGFzIEksIEpPSU4gYXMgSiwgdGFrZSBhcyBLLCBmb3JrIGFzIEwsIGNhbmNlbCBhcyBNLCBjYWxsIGFzIE4sIGFjdGlvbkNoYW5uZWwgYXMgTywgUFVUIGFzIFAsIHNsaWRpbmcgYXMgUSwgUkFDRSBhcyBSLCBTRUxFQ1QgYXMgUywgVEFLRSBhcyBULCBkZWxheSBhcyBVLCByYWNlIGFzIFYsIGVmZmVjdFR5cGVzIGFzIFcsIHRha2VNYXliZSBhcyBYLCBwdXQgYXMgWSwgcHV0UmVzb2x2ZSBhcyBaLCBhbGwgYXMgXywgQ1BTIGFzIGEsIGNwcyBhcyBhMCwgc3Bhd24gYXMgYTEsIGpvaW4gYXMgYTIsIHNlbGVjdCBhcyBhMywgY2FuY2VsbGVkIGFzIGE0LCBmbHVzaCBhcyBhNSwgZ2V0Q29udGV4dCBhcyBhNiwgc2V0Q29udGV4dCBhcyBhNywgQ0FOQ0VMIGFzIGIsIGNoZWNrIGFzIGMsIEFDVElPTl9DSEFOTkVMIGFzIGQsIGV4cGFuZGluZyBhcyBlLCBDQU5DRUxMRUQgYXMgZiwgRkxVU0ggYXMgZywgU0VUX0NPTlRFWFQgYXMgaCwgaW50ZXJuYWxFcnIgYXMgaSwgZ2V0TWV0YUluZm8gYXMgaiwga1RydWUgYXMgaywgY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrcyBhcyBsLCBjcmVhdGVFbXB0eUFycmF5IGFzIG0sIG5vbmUgYXMgbiwgb25jZSBhcyBvLCBhc3NpZ25XaXRoU3ltYm9scyBhcyBwLCBtYWtlSXRlcmF0b3IgYXMgcSwgcmVtb3ZlIGFzIHIsIHNob3VsZENvbXBsZXRlIGFzIHMsIG5vb3AgYXMgdCwgZmxhdE1hcCBhcyB1LCBnZXRMb2NhdGlvbiBhcyB2LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZyBhcyB3LCBhc3luY0l0ZXJhdG9yU3ltYm9sIGFzIHgsIHNob3VsZENhbmNlbCBhcyB5LCBzaG91bGRUZXJtaW5hdGUgYXMgeiB9O1xuIiwiaW1wb3J0ICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBjaGFubmVsLCBzdHJpbmdhYmxlRnVuYywgZnVuYywgbm90VW5kZWYgfSBmcm9tICdAcmVkdXgtc2FnYS9pcyc7XG5pbXBvcnQgeyBxIGFzIG1ha2VJdGVyYXRvciwgSyBhcyB0YWtlLCBMIGFzIGZvcmssIE0gYXMgY2FuY2VsLCBOIGFzIGNhbGwsIE8gYXMgYWN0aW9uQ2hhbm5lbCwgUSBhcyBzbGlkaW5nLCBVIGFzIGRlbGF5LCBWIGFzIHJhY2UsIGMgYXMgY2hlY2sgfSBmcm9tICcuL2lvLTQyNzk0NWRkLmpzJztcbmV4cG9ydCB7IE8gYXMgYWN0aW9uQ2hhbm5lbCwgXyBhcyBhbGwsICQgYXMgYXBwbHksIE4gYXMgY2FsbCwgTSBhcyBjYW5jZWwsIGE0IGFzIGNhbmNlbGxlZCwgYTAgYXMgY3BzLCBVIGFzIGRlbGF5LCBXIGFzIGVmZmVjdFR5cGVzLCBhNSBhcyBmbHVzaCwgTCBhcyBmb3JrLCBhNiBhcyBnZXRDb250ZXh0LCBhMiBhcyBqb2luLCBZIGFzIHB1dCwgWiBhcyBwdXRSZXNvbHZlLCBWIGFzIHJhY2UsIGEzIGFzIHNlbGVjdCwgYTcgYXMgc2V0Q29udGV4dCwgYTEgYXMgc3Bhd24sIEsgYXMgdGFrZSwgWCBhcyB0YWtlTWF5YmUgfSBmcm9tICcuL2lvLTQyNzk0NWRkLmpzJztcbmltcG9ydCAnQHJlZHV4LXNhZ2EvZGVsYXktcCc7XG5cbnZhciBkb25lID0gZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGRvbmU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG52YXIgcUVuZCA9IHt9O1xuZnVuY3Rpb24gc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiAnY2hhbm5lbCc7XG4gIH1cblxuICBpZiAoc3RyaW5nYWJsZUZ1bmMocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpO1xuICB9XG5cbiAgaWYgKGZ1bmMocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gcGF0dGVybk9yQ2hhbm5lbC5uYW1lO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKTtcbn1cbmZ1bmN0aW9uIGZzbUl0ZXJhdG9yKGZzbSwgc3RhcnRTdGF0ZSwgbmFtZSkge1xuICB2YXIgc3RhdGVVcGRhdGVyLFxuICAgICAgZXJyb3JTdGF0ZSxcbiAgICAgIGVmZmVjdCxcbiAgICAgIG5leHRTdGF0ZSA9IHN0YXJ0U3RhdGU7XG5cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGVycm9yKSB7XG4gICAgaWYgKG5leHRTdGF0ZSA9PT0gcUVuZCkge1xuICAgICAgcmV0dXJuIGRvbmUoYXJnKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgJiYgIWVycm9yU3RhdGUpIHtcbiAgICAgIG5leHRTdGF0ZSA9IHFFbmQ7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVVcGRhdGVyICYmIHN0YXRlVXBkYXRlcihhcmcpO1xuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGVycm9yID8gZnNtW2Vycm9yU3RhdGVdKGVycm9yKSA6IGZzbVtuZXh0U3RhdGVdKCk7XG4gICAgICBuZXh0U3RhdGUgPSBjdXJyZW50U3RhdGUubmV4dFN0YXRlO1xuICAgICAgZWZmZWN0ID0gY3VycmVudFN0YXRlLmVmZmVjdDtcbiAgICAgIHN0YXRlVXBkYXRlciA9IGN1cnJlbnRTdGF0ZS5zdGF0ZVVwZGF0ZXI7XG4gICAgICBlcnJvclN0YXRlID0gY3VycmVudFN0YXRlLmVycm9yU3RhdGU7XG4gICAgICByZXR1cm4gbmV4dFN0YXRlID09PSBxRW5kID8gZG9uZShhcmcpIDogZWZmZWN0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlSXRlcmF0b3IobmV4dCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQobnVsbCwgZXJyb3IpO1xuICB9LCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbixcbiAgICAgIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGFrZUV2ZXJ5KFwiICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG5cbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZm9yay5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5Q2FuY2VsID0gZnVuY3Rpb24geUNhbmNlbCh0YXNrKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGNhbmNlbCh0YXNrKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHRhc2ssIGFjdGlvbjtcblxuICB2YXIgc2V0VGFzayA9IGZ1bmN0aW9uIHNldFRhc2sodCkge1xuICAgIHJldHVybiB0YXNrID0gdDtcbiAgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB0YXNrID8ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMycsXG4gICAgICAgIGVmZmVjdDogeUNhbmNlbCh0YXNrKVxuICAgICAgfSA6IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbiksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0VGFza1xuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldFRhc2tcbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcInRha2VMYXRlc3QoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiB0YWtlTGVhZGluZyhwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG5cbiAgdmFyIHlDYWxsID0gZnVuY3Rpb24geUNhbGwoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogY2FsbC5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhY3Rpb247XG5cbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUNhbGwoYWN0aW9uKVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGFrZUxlYWRpbmcoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShkZWxheUxlbmd0aCwgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhY3Rpb24sIGNoYW5uZWw7XG4gIHZhciB5QWN0aW9uQ2hhbm5lbCA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBzbGlkaW5nKDEpKVxuICB9O1xuXG4gIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB0YWtlKGNoYW5uZWwpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlEZWxheSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogZGVsYXkoZGVsYXlMZW5ndGgpXG4gIH07XG5cbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICB2YXIgc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIHNldENoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2hhbm5lbCA9IGNoO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlBY3Rpb25DaGFubmVsLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldENoYW5uZWxcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMycsXG4gICAgICAgIGVmZmVjdDogeVRha2UoKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxNCcsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKVxuICAgICAgfTtcbiAgICB9LFxuICAgIHE0OiBmdW5jdGlvbiBxNCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5RGVsYXlcbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcInRocm90dGxlKFwiICsgc2FmZU5hbWUocGF0dGVybikgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gcmV0cnkobWF4VHJpZXMsIGRlbGF5TGVuZ3RoLCBmbikge1xuICB2YXIgY291bnRlciA9IG1heFRyaWVzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5Q2FsbCA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogY2FsbC5hcHBseSh2b2lkIDAsIFtmbl0uY29uY2F0KGFyZ3MpKVxuICB9O1xuICB2YXIgeURlbGF5ID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBkZWxheShkZWxheUxlbmd0aClcbiAgfTtcbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeUNhbGwsXG4gICAgICAgIGVycm9yU3RhdGU6ICdxMTAnXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiBxRW5kXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTEwOiBmdW5jdGlvbiBxMTAoZXJyb3IpIHtcbiAgICAgIGNvdW50ZXIgLT0gMTtcblxuICAgICAgaWYgKGNvdW50ZXIgPD0gMCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlEZWxheVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwicmV0cnkoXCIgKyBmbi5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUhlbHBlcihkZWxheUxlbmd0aCwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhY3Rpb24sIHJhY2VPdXRwdXQ7XG4gIHZhciB5VGFrZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKVxuICB9O1xuICB2YXIgeVJhY2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHJhY2Uoe1xuICAgICAgYWN0aW9uOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpLFxuICAgICAgZGVib3VuY2U6IGRlbGF5KGRlbGF5TGVuZ3RoKVxuICAgIH0pXG4gIH07XG5cbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZm9yay5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5Tm9vcCA9IGZ1bmN0aW9uIHlOb29wKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHZhciBzZXRSYWNlT3V0cHV0ID0gZnVuY3Rpb24gc2V0UmFjZU91dHB1dChybykge1xuICAgIHJldHVybiByYWNlT3V0cHV0ID0gcm87XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeVRha2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTMnLFxuICAgICAgICBlZmZlY3Q6IHlSYWNlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldFJhY2VPdXRwdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4gcmFjZU91dHB1dC5kZWJvdW5jZSA/IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbilcbiAgICAgIH0gOiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5Tm9vcChyYWNlT3V0cHV0LmFjdGlvbiksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJkZWJvdW5jZShcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbnZhciB2YWxpZGF0ZVRha2VFZmZlY3QgPSBmdW5jdGlvbiB2YWxpZGF0ZVRha2VFZmZlY3QoZm4sIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBjaGVjayhwYXR0ZXJuT3JDaGFubmVsLCBub3RVbmRlZiwgZm4ubmFtZSArIFwiIHJlcXVpcmVzIGEgcGF0dGVybiBvciBjaGFubmVsXCIpO1xuICBjaGVjayh3b3JrZXIsIG5vdFVuZGVmLCBmbi5uYW1lICsgXCIgcmVxdWlyZXMgYSBzYWdhIHBhcmFtZXRlclwiKTtcbn07XG5cbmZ1bmN0aW9uIHRha2VFdmVyeSQxKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlVGFrZUVmZmVjdCh0YWtlRXZlcnkkMSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rha2VFdmVyeSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gdGFrZUxhdGVzdCQxKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlVGFrZUVmZmVjdCh0YWtlTGF0ZXN0JDEsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFt0YWtlTGF0ZXN0LCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiB0YWtlTGVhZGluZyQxKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlVGFrZUVmZmVjdCh0YWtlTGVhZGluZyQxLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zID4gMiA/IF9sZW4zIC0gMiA6IDApLCBfa2V5MyA9IDI7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMl0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGFrZUxlYWRpbmcsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHRocm90dGxlJDEobXMsIHBhdHRlcm4sIHdvcmtlcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHBhdHRlcm4sIG5vdFVuZGVmLCAndGhyb3R0bGUgcmVxdWlyZXMgYSBwYXR0ZXJuJyk7XG4gICAgY2hlY2sod29ya2VyLCBub3RVbmRlZiwgJ3Rocm90dGxlIHJlcXVpcmVzIGEgc2FnYSBwYXJhbWV0ZXInKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDMgPyBfbGVuNCAtIDMgOiAwKSwgX2tleTQgPSAzOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NCAtIDNdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rocm90dGxlLCBtcywgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gcmV0cnkkMShtYXhUcmllcywgZGVsYXlMZW5ndGgsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUgPiAzID8gX2xlbjUgLSAzIDogMCksIF9rZXk1ID0gMzsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIGFyZ3NbX2tleTUgLSAzXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICByZXR1cm4gY2FsbC5hcHBseSh2b2lkIDAsIFtyZXRyeSwgbWF4VHJpZXMsIGRlbGF5TGVuZ3RoLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiBkZWJvdW5jZShkZWxheUxlbmd0aCwgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiA+IDMgPyBfbGVuNiAtIDMgOiAwKSwgX2tleTYgPSAzOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgYXJnc1tfa2V5NiAtIDNdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW2RlYm91bmNlSGVscGVyLCBkZWxheUxlbmd0aCwgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5leHBvcnQgeyBkZWJvdW5jZSwgcmV0cnkkMSBhcyByZXRyeSwgdGFrZUV2ZXJ5JDEgYXMgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0JDEgYXMgdGFrZUxhdGVzdCwgdGFrZUxlYWRpbmckMSBhcyB0YWtlTGVhZGluZywgdGhyb3R0bGUkMSBhcyB0aHJvdHRsZSB9O1xuIiwiaW1wb3J0IHsgQ0FOQ0VMIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5cbmZ1bmN0aW9uIGRlbGF5UChtcywgdmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkge1xuICAgIHZhbCA9IHRydWU7XG4gIH1cblxuICB2YXIgdGltZW91dElkO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChyZXNvbHZlLCBtcywgdmFsKTtcbiAgfSk7XG5cbiAgcHJvbWlzZVtDQU5DRUxdID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9O1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxheVA7XG4iLCJpbXBvcnQgeyBUQVNLLCBTQUdBX0FDVElPTiwgTVVMVElDQVNULCBJTyB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuXG52YXIgdW5kZWYgPSBmdW5jdGlvbiB1bmRlZih2KSB7XG4gIHJldHVybiB2ID09PSBudWxsIHx8IHYgPT09IHVuZGVmaW5lZDtcbn07XG52YXIgbm90VW5kZWYgPSBmdW5jdGlvbiBub3RVbmRlZih2KSB7XG4gIHJldHVybiB2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZDtcbn07XG52YXIgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoZikge1xuICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG59O1xudmFyIG51bWJlciA9IGZ1bmN0aW9uIG51bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcic7XG59O1xudmFyIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhzKSB7XG4gIHJldHVybiB0eXBlb2YgcyA9PT0gJ3N0cmluZyc7XG59O1xudmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBvYmplY3QgPSBmdW5jdGlvbiBvYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogJiYgIWFycmF5KG9iaikgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xudmFyIHByb21pc2UgPSBmdW5jdGlvbiBwcm9taXNlKHApIHtcbiAgcmV0dXJuIHAgJiYgZnVuYyhwLnRoZW4pO1xufTtcbnZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIGl0ZXJhdG9yKGl0KSB7XG4gIHJldHVybiBpdCAmJiBmdW5jKGl0Lm5leHQpICYmIGZ1bmMoaXQudGhyb3cpO1xufTtcbnZhciBpdGVyYWJsZSA9IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG4gIHJldHVybiBpdCAmJiBmdW5jKFN5bWJvbCkgPyBmdW5jKGl0W1N5bWJvbC5pdGVyYXRvcl0pIDogYXJyYXkoaXQpO1xufTtcbnZhciB0YXNrID0gZnVuY3Rpb24gdGFzayh0KSB7XG4gIHJldHVybiB0ICYmIHRbVEFTS107XG59O1xudmFyIHNhZ2FBY3Rpb24gPSBmdW5jdGlvbiBzYWdhQWN0aW9uKGEpIHtcbiAgcmV0dXJuIEJvb2xlYW4oYSAmJiBhW1NBR0FfQUNUSU9OXSk7XG59O1xudmFyIG9ic2VydmFibGUgPSBmdW5jdGlvbiBvYnNlcnZhYmxlKG9iKSB7XG4gIHJldHVybiBvYiAmJiBmdW5jKG9iLnN1YnNjcmliZSk7XG59O1xudmFyIGJ1ZmZlciA9IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcbiAgcmV0dXJuIGJ1ZiAmJiBmdW5jKGJ1Zi5pc0VtcHR5KSAmJiBmdW5jKGJ1Zi50YWtlKSAmJiBmdW5jKGJ1Zi5wdXQpO1xufTtcbnZhciBwYXR0ZXJuID0gZnVuY3Rpb24gcGF0dGVybihwYXQpIHtcbiAgcmV0dXJuIHBhdCAmJiAoc3RyaW5nKHBhdCkgfHwgc3ltYm9sKHBhdCkgfHwgZnVuYyhwYXQpIHx8IGFycmF5KHBhdCkgJiYgcGF0LmV2ZXJ5KHBhdHRlcm4pKTtcbn07XG52YXIgY2hhbm5lbCA9IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcbiAgcmV0dXJuIGNoICYmIGZ1bmMoY2gudGFrZSkgJiYgZnVuYyhjaC5jbG9zZSk7XG59O1xudmFyIHN0cmluZ2FibGVGdW5jID0gZnVuY3Rpb24gc3RyaW5nYWJsZUZ1bmMoZikge1xuICByZXR1cm4gZnVuYyhmKSAmJiBmLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpO1xufTtcbnZhciBzeW1ib2wgPSBmdW5jdGlvbiBzeW1ib2woc3ltKSB7XG4gIHJldHVybiBCb29sZWFuKHN5bSkgJiYgdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBzeW0uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBzeW0gIT09IFN5bWJvbC5wcm90b3R5cGU7XG59O1xudmFyIG11bHRpY2FzdCA9IGZ1bmN0aW9uIG11bHRpY2FzdChjaCkge1xuICByZXR1cm4gY2hhbm5lbChjaCkgJiYgY2hbTVVMVElDQVNUXTtcbn07XG52YXIgZWZmZWN0ID0gZnVuY3Rpb24gZWZmZWN0KGVmZikge1xuICByZXR1cm4gZWZmICYmIGVmZltJT107XG59O1xuXG5leHBvcnQgeyBhcnJheSwgYnVmZmVyLCBjaGFubmVsLCBlZmZlY3QsIGZ1bmMsIGl0ZXJhYmxlLCBpdGVyYXRvciwgbXVsdGljYXN0LCBub3RVbmRlZiwgbnVtYmVyLCBvYmplY3QsIG9ic2VydmFibGUsIHBhdHRlcm4sIHByb21pc2UsIHNhZ2FBY3Rpb24sIHN0cmluZywgc3RyaW5nYWJsZUZ1bmMsIHN5bWJvbCwgdGFzaywgdW5kZWYgfTtcbiIsInZhciBjcmVhdGVTeW1ib2wgPSBmdW5jdGlvbiBjcmVhdGVTeW1ib2wobmFtZSkge1xuICByZXR1cm4gXCJAQHJlZHV4LXNhZ2EvXCIgKyBuYW1lO1xufTtcblxudmFyIENBTkNFTCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0NBTkNFTF9QUk9NSVNFJyk7XG52YXIgQ0hBTk5FTF9FTkRfVFlQRSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0NIQU5ORUxfRU5EJyk7XG52YXIgSU8gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdJTycpO1xudmFyIE1BVENIID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnTUFUQ0gnKTtcbnZhciBNVUxUSUNBU1QgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdNVUxUSUNBU1QnKTtcbnZhciBTQUdBX0FDVElPTiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1NBR0FfQUNUSU9OJyk7XG52YXIgU0VMRl9DQU5DRUxMQVRJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdTRUxGX0NBTkNFTExBVElPTicpO1xudmFyIFRBU0sgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdUQVNLJyk7XG52YXIgVEFTS19DQU5DRUwgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdUQVNLX0NBTkNFTCcpO1xudmFyIFRFUk1JTkFURSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1RFUk1JTkFURScpO1xudmFyIFNBR0FfTE9DQVRJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdMT0NBVElPTicpO1xuXG5leHBvcnQgeyBDQU5DRUwsIENIQU5ORUxfRU5EX1RZUEUsIElPLCBNQVRDSCwgTVVMVElDQVNULCBTQUdBX0FDVElPTiwgU0FHQV9MT0NBVElPTiwgU0VMRl9DQU5DRUxMQVRJT04sIFRBU0ssIFRBU0tfQ0FOQ0VMLCBURVJNSU5BVEUgfTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHQpOnQoZS5yZWR1eExvZ2dlcj1lLnJlZHV4TG9nZ2VyfHx7fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlLHQpe2Uuc3VwZXJfPXQsZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSl9ZnVuY3Rpb24gcihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwia2luZFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KSx0JiZ0Lmxlbmd0aCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYXRoXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIG4oZSx0LHIpe24uc3VwZXJfLmNhbGwodGhpcyxcIkVcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJoc1wiLHt2YWx1ZTpyLGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBvKGUsdCl7by5zdXBlcl8uY2FsbCh0aGlzLFwiTlwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGkoZSx0KXtpLnN1cGVyXy5jYWxsKHRoaXMsXCJEXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gYShlLHQscil7YS5zdXBlcl8uY2FsbCh0aGlzLFwiQVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaW5kZXhcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpdGVtXCIse3ZhbHVlOnIsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGYoZSx0LHIpe3ZhciBuPWUuc2xpY2UoKHJ8fHQpKzF8fGUubGVuZ3RoKTtyZXR1cm4gZS5sZW5ndGg9dDwwP2UubGVuZ3RoK3Q6dCxlLnB1c2guYXBwbHkoZSxuKSxlfWZ1bmN0aW9uIHUoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpO3JldHVyblwib2JqZWN0XCIhPT10P3Q6ZT09PU1hdGg/XCJtYXRoXCI6bnVsbD09PWU/XCJudWxsXCI6QXJyYXkuaXNBcnJheShlKT9cImFycmF5XCI6XCJbb2JqZWN0IERhdGVdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk/XCJkYXRlXCI6XCJmdW5jdGlvblwiPT10eXBlb2YgZS50b1N0cmluZyYmL15cXC8uKlxcLy8udGVzdChlLnRvU3RyaW5nKCkpP1wicmVnZXhwXCI6XCJvYmplY3RcIn1mdW5jdGlvbiBsKGUsdCxyLGMscyxkLHApe3M9c3x8W10scD1wfHxbXTt2YXIgZz1zLnNsaWNlKDApO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkKXtpZihjKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZjKGcsZCkpcmV0dXJuO2lmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGM/XCJ1bmRlZmluZWRcIjpOKGMpKSl7aWYoYy5wcmVmaWx0ZXImJmMucHJlZmlsdGVyKGcsZCkpcmV0dXJuO2lmKGMubm9ybWFsaXplKXt2YXIgaD1jLm5vcm1hbGl6ZShnLGQsZSx0KTtoJiYoZT1oWzBdLHQ9aFsxXSl9fX1nLnB1c2goZCl9XCJyZWdleHBcIj09PXUoZSkmJlwicmVnZXhwXCI9PT11KHQpJiYoZT1lLnRvU3RyaW5nKCksdD10LnRvU3RyaW5nKCkpO3ZhciB5PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6TihlKSx2PVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Tih0KSxiPVwidW5kZWZpbmVkXCIhPT15fHxwJiZwW3AubGVuZ3RoLTFdLmxocyYmcFtwLmxlbmd0aC0xXS5saHMuaGFzT3duUHJvcGVydHkoZCksbT1cInVuZGVmaW5lZFwiIT09dnx8cCYmcFtwLmxlbmd0aC0xXS5yaHMmJnBbcC5sZW5ndGgtMV0ucmhzLmhhc093blByb3BlcnR5KGQpO2lmKCFiJiZtKXIobmV3IG8oZyx0KSk7ZWxzZSBpZighbSYmYilyKG5ldyBpKGcsZSkpO2Vsc2UgaWYodShlKSE9PXUodCkpcihuZXcgbihnLGUsdCkpO2Vsc2UgaWYoXCJkYXRlXCI9PT11KGUpJiZlLXQhPT0wKXIobmV3IG4oZyxlLHQpKTtlbHNlIGlmKFwib2JqZWN0XCI9PT15JiZudWxsIT09ZSYmbnVsbCE9PXQpaWYocC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGhzPT09ZX0pLmxlbmd0aCllIT09dCYmcihuZXcgbihnLGUsdCkpO2Vsc2V7aWYocC5wdXNoKHtsaHM6ZSxyaHM6dH0pLEFycmF5LmlzQXJyYXkoZSkpe3ZhciB3O2UubGVuZ3RoO2Zvcih3PTA7dzxlLmxlbmd0aDt3Kyspdz49dC5sZW5ndGg/cihuZXcgYShnLHcsbmV3IGkodm9pZCAwLGVbd10pKSk6bChlW3ddLHRbd10scixjLGcsdyxwKTtmb3IoO3c8dC5sZW5ndGg7KXIobmV3IGEoZyx3LG5ldyBvKHZvaWQgMCx0W3crK10pKSl9ZWxzZXt2YXIgeD1PYmplY3Qua2V5cyhlKSxTPU9iamVjdC5rZXlzKHQpO3guZm9yRWFjaChmdW5jdGlvbihuLG8pe3ZhciBpPVMuaW5kZXhPZihuKTtpPj0wPyhsKGVbbl0sdFtuXSxyLGMsZyxuLHApLFM9ZihTLGkpKTpsKGVbbl0sdm9pZCAwLHIsYyxnLG4scCl9KSxTLmZvckVhY2goZnVuY3Rpb24oZSl7bCh2b2lkIDAsdFtlXSxyLGMsZyxlLHApfSl9cC5sZW5ndGg9cC5sZW5ndGgtMX1lbHNlIGUhPT10JiYoXCJudW1iZXJcIj09PXkmJmlzTmFOKGUpJiZpc05hTih0KXx8cihuZXcgbihnLGUsdCkpKX1mdW5jdGlvbiBjKGUsdCxyLG4pe3JldHVybiBuPW58fFtdLGwoZSx0LGZ1bmN0aW9uKGUpe2UmJm4ucHVzaChlKX0sciksbi5sZW5ndGg/bjp2b2lkIDB9ZnVuY3Rpb24gcyhlLHQscil7aWYoci5wYXRoJiZyLnBhdGgubGVuZ3RoKXt2YXIgbixvPWVbdF0saT1yLnBhdGgubGVuZ3RoLTE7Zm9yKG49MDtuPGk7bisrKW89b1tyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpzKG9bci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmRlbGV0ZSBvW3IucGF0aFtuXV07YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjpvW3IucGF0aFtuXV09ci5yaHN9fWVsc2Ugc3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoZVt0XSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmU9ZihlLHQpO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6ZVt0XT1yLnJoc31yZXR1cm4gZX1mdW5jdGlvbiBkKGUsdCxyKXtpZihlJiZ0JiZyJiZyLmtpbmQpe2Zvcih2YXIgbj1lLG89LTEsaT1yLnBhdGg/ci5wYXRoLmxlbmd0aC0xOjA7KytvPGk7KVwidW5kZWZpbmVkXCI9PXR5cGVvZiBuW3IucGF0aFtvXV0mJihuW3IucGF0aFtvXV09XCJudW1iZXJcIj09dHlwZW9mIHIucGF0aFtvXT9bXTp7fSksbj1uW3IucGF0aFtvXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoci5wYXRoP25bci5wYXRoW29dXTpuLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZGVsZXRlIG5bci5wYXRoW29dXTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOm5bci5wYXRoW29dXT1yLnJoc319fWZ1bmN0aW9uIHAoZSx0LHIpe2lmKHIucGF0aCYmci5wYXRoLmxlbmd0aCl7dmFyIG4sbz1lW3RdLGk9ci5wYXRoLmxlbmd0aC0xO2ZvcihuPTA7bjxpO24rKylvPW9bci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChvW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpvW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOm9bci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJOXCI6ZGVsZXRlIG9bci5wYXRoW25dXX19ZWxzZSBzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChlW3RdLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJFXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJOXCI6ZT1mKGUsdCl9cmV0dXJuIGV9ZnVuY3Rpb24gZyhlLHQscil7aWYoZSYmdCYmciYmci5raW5kKXt2YXIgbixvLGk9ZTtmb3Iobz1yLnBhdGgubGVuZ3RoLTEsbj0wO248bztuKyspXCJ1bmRlZmluZWRcIj09dHlwZW9mIGlbci5wYXRoW25dXSYmKGlbci5wYXRoW25dXT17fSksaT1pW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnAoaVtyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6aVtyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjppW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiTlwiOmRlbGV0ZSBpW3IucGF0aFtuXV19fX1mdW5jdGlvbiBoKGUsdCxyKXtpZihlJiZ0KXt2YXIgbj1mdW5jdGlvbihuKXtyJiYhcihlLHQsbil8fGQoZSx0LG4pfTtsKGUsdCxuKX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImNvbG9yOiBcIitGW2VdLmNvbG9yK1wiOyBmb250LXdlaWdodDogYm9sZFwifWZ1bmN0aW9uIHYoZSl7dmFyIHQ9ZS5raW5kLHI9ZS5wYXRoLG49ZS5saHMsbz1lLnJocyxpPWUuaW5kZXgsYT1lLml0ZW07c3dpdGNoKHQpe2Nhc2VcIkVcIjpyZXR1cm5bci5qb2luKFwiLlwiKSxuLFwi4oaSXCIsb107Y2FzZVwiTlwiOnJldHVybltyLmpvaW4oXCIuXCIpLG9dO2Nhc2VcIkRcIjpyZXR1cm5bci5qb2luKFwiLlwiKV07Y2FzZVwiQVwiOnJldHVybltyLmpvaW4oXCIuXCIpK1wiW1wiK2krXCJdXCIsYV07ZGVmYXVsdDpyZXR1cm5bXX19ZnVuY3Rpb24gYihlLHQscixuKXt2YXIgbz1jKGUsdCk7dHJ5e24/ci5ncm91cENvbGxhcHNlZChcImRpZmZcIik6ci5ncm91cChcImRpZmZcIil9Y2F0Y2goZSl7ci5sb2coXCJkaWZmXCIpfW8/by5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWUua2luZCxuPXYoZSk7ci5sb2cuYXBwbHkocixbXCIlYyBcIitGW3RdLnRleHQseSh0KV0uY29uY2F0KFAobikpKX0pOnIubG9nKFwi4oCU4oCUIG5vIGRpZmYg4oCU4oCUXCIpO3RyeXtyLmdyb3VwRW5kKCl9Y2F0Y2goZSl7ci5sb2coXCLigJTigJQgZGlmZiBlbmQg4oCU4oCUIFwiKX19ZnVuY3Rpb24gbShlLHQscixuKXtzd2l0Y2goXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpKXtjYXNlXCJvYmplY3RcIjpyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlW25dP2Vbbl0uYXBwbHkoZSxQKHIpKTplW25dO2Nhc2VcImZ1bmN0aW9uXCI6cmV0dXJuIGUodCk7ZGVmYXVsdDpyZXR1cm4gZX19ZnVuY3Rpb24gdyhlKXt2YXIgdD1lLnRpbWVzdGFtcCxyPWUuZHVyYXRpb247cmV0dXJuIGZ1bmN0aW9uKGUsbixvKXt2YXIgaT1bXCJhY3Rpb25cIl07cmV0dXJuIGkucHVzaChcIiVjXCIrU3RyaW5nKGUudHlwZSkpLHQmJmkucHVzaChcIiVjQCBcIituKSxyJiZpLnB1c2goXCIlYyhpbiBcIitvLnRvRml4ZWQoMikrXCIgbXMpXCIpLGkuam9pbihcIiBcIil9fWZ1bmN0aW9uIHgoZSx0KXt2YXIgcj10LmxvZ2dlcixuPXQuYWN0aW9uVHJhbnNmb3JtZXIsbz10LnRpdGxlRm9ybWF0dGVyLGk9dm9pZCAwPT09bz93KHQpOm8sYT10LmNvbGxhcHNlZCxmPXQuY29sb3JzLHU9dC5sZXZlbCxsPXQuZGlmZixjPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LnRpdGxlRm9ybWF0dGVyO2UuZm9yRWFjaChmdW5jdGlvbihvLHMpe3ZhciBkPW8uc3RhcnRlZCxwPW8uc3RhcnRlZFRpbWUsZz1vLmFjdGlvbixoPW8ucHJldlN0YXRlLHk9by5lcnJvcix2PW8udG9vayx3PW8ubmV4dFN0YXRlLHg9ZVtzKzFdO3gmJih3PXgucHJldlN0YXRlLHY9eC5zdGFydGVkLWQpO3ZhciBTPW4oZyksaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2EoZnVuY3Rpb24oKXtyZXR1cm4gd30sZyxvKTphLGo9RChwKSxFPWYudGl0bGU/XCJjb2xvcjogXCIrZi50aXRsZShTKStcIjtcIjpcIlwiLEE9W1wiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiXTtBLnB1c2goRSksdC50aW1lc3RhbXAmJkEucHVzaChcImNvbG9yOiBncmF5OyBmb250LXdlaWdodDogbGlnaHRlcjtcIiksdC5kdXJhdGlvbiYmQS5wdXNoKFwiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiKTt2YXIgTz1pKFMsaix2KTt0cnl7az9mLnRpdGxlJiZjP3IuZ3JvdXBDb2xsYXBzZWQuYXBwbHkocixbXCIlYyBcIitPXS5jb25jYXQoQSkpOnIuZ3JvdXBDb2xsYXBzZWQoTyk6Zi50aXRsZSYmYz9yLmdyb3VwLmFwcGx5KHIsW1wiJWMgXCIrT10uY29uY2F0KEEpKTpyLmdyb3VwKE8pfWNhdGNoKGUpe3IubG9nKE8pfXZhciBOPW0odSxTLFtoXSxcInByZXZTdGF0ZVwiKSxQPW0odSxTLFtTXSxcImFjdGlvblwiKSxDPW0odSxTLFt5LGhdLFwiZXJyb3JcIiksRj1tKHUsUyxbd10sXCJuZXh0U3RhdGVcIik7aWYoTilpZihmLnByZXZTdGF0ZSl7dmFyIEw9XCJjb2xvcjogXCIrZi5wcmV2U3RhdGUoaCkrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltOXShcIiVjIHByZXYgc3RhdGVcIixMLGgpfWVsc2UgcltOXShcInByZXYgc3RhdGVcIixoKTtpZihQKWlmKGYuYWN0aW9uKXt2YXIgVD1cImNvbG9yOiBcIitmLmFjdGlvbihTKStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW1BdKFwiJWMgYWN0aW9uICAgIFwiLFQsUyl9ZWxzZSByW1BdKFwiYWN0aW9uICAgIFwiLFMpO2lmKHkmJkMpaWYoZi5lcnJvcil7dmFyIE09XCJjb2xvcjogXCIrZi5lcnJvcih5LGgpK1wiOyBmb250LXdlaWdodDogYm9sZDtcIjtyW0NdKFwiJWMgZXJyb3IgICAgIFwiLE0seSl9ZWxzZSByW0NdKFwiZXJyb3IgICAgIFwiLHkpO2lmKEYpaWYoZi5uZXh0U3RhdGUpe3ZhciBfPVwiY29sb3I6IFwiK2YubmV4dFN0YXRlKHcpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbRl0oXCIlYyBuZXh0IHN0YXRlXCIsXyx3KX1lbHNlIHJbRl0oXCJuZXh0IHN0YXRlXCIsdyk7bCYmYihoLHcscixrKTt0cnl7ci5ncm91cEVuZCgpfWNhdGNoKGUpe3IubG9nKFwi4oCU4oCUIGxvZyBlbmQg4oCU4oCUXCIpfX0pfWZ1bmN0aW9uIFMoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1PYmplY3QuYXNzaWduKHt9LEwsZSkscj10LmxvZ2dlcixuPXQuc3RhdGVUcmFuc2Zvcm1lcixvPXQuZXJyb3JUcmFuc2Zvcm1lcixpPXQucHJlZGljYXRlLGE9dC5sb2dFcnJvcnMsZj10LmRpZmZQcmVkaWNhdGU7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHIpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTtpZihlLmdldFN0YXRlJiZlLmRpc3BhdGNoKXJldHVybiBjb25zb2xlLmVycm9yKFwiW3JlZHV4LWxvZ2dlcl0gcmVkdXgtbG9nZ2VyIG5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBwYXNzIGxvZ2dlciBpbnN0YW5jZSBhcyBtaWRkbGV3YXJlOlxcbi8vIExvZ2dlciB3aXRoIGRlZmF1bHQgb3B0aW9uc1xcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxcbiAgcmVkdWNlcixcXG4gIGFwcGx5TWlkZGxld2FyZShsb2dnZXIpXFxuKVxcbi8vIE9yIHlvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGxvZ2dlciB3aXRoIGN1c3RvbSBvcHRpb25zIGh0dHA6Ly9iaXQubHkvcmVkdXgtbG9nZ2VyLW9wdGlvbnNcXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xcbiAgLy8gLi4ub3B0aW9uc1xcbn0pO1xcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXFxuICByZWR1Y2VyLFxcbiAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcXG4pXFxuXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTt2YXIgdT1bXTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9ZS5nZXRTdGF0ZTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGwpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJiFpKHIsbCkpcmV0dXJuIGUobCk7dmFyIGM9e307dS5wdXNoKGMpLGMuc3RhcnRlZD1PLm5vdygpLGMuc3RhcnRlZFRpbWU9bmV3IERhdGUsYy5wcmV2U3RhdGU9bihyKCkpLGMuYWN0aW9uPWw7dmFyIHM9dm9pZCAwO2lmKGEpdHJ5e3M9ZShsKX1jYXRjaChlKXtjLmVycm9yPW8oZSl9ZWxzZSBzPWUobCk7Yy50b29rPU8ubm93KCktYy5zdGFydGVkLGMubmV4dFN0YXRlPW4ocigpKTt2YXIgZD10LmRpZmYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGY/ZihyLGwpOnQuZGlmZjtpZih4KHUsT2JqZWN0LmFzc2lnbih7fSx0LHtkaWZmOmR9KSksdS5sZW5ndGg9MCxjLmVycm9yKXRocm93IGMuZXJyb3I7cmV0dXJuIHN9fX19dmFyIGssaixFPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBBcnJheSh0KzEpLmpvaW4oZSl9LEE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRShcIjBcIix0LWUudG9TdHJpbmcoKS5sZW5ndGgpK2V9LEQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEEoZS5nZXRIb3VycygpLDIpK1wiOlwiK0EoZS5nZXRNaW51dGVzKCksMikrXCI6XCIrQShlLmdldFNlY29uZHMoKSwyKStcIi5cIitBKGUuZ2V0TWlsbGlzZWNvbmRzKCksMyl9LE89XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZTpEYXRlLE49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sUD1mdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHQ9MCxyPUFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKylyW3RdPWVbdF07cmV0dXJuIHJ9cmV0dXJuIEFycmF5LmZyb20oZSl9LEM9W107az1cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBnbG9iYWw/XCJ1bmRlZmluZWRcIjpOKGdsb2JhbCkpJiZnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGo9ay5EZWVwRGlmZixqJiZDLnB1c2goZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgaiYmay5EZWVwRGlmZj09PWMmJihrLkRlZXBEaWZmPWosaj12b2lkIDApfSksdChuLHIpLHQobyxyKSx0KGksciksdChhLHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGMse2RpZmY6e3ZhbHVlOmMsZW51bWVyYWJsZTohMH0sb2JzZXJ2YWJsZURpZmY6e3ZhbHVlOmwsZW51bWVyYWJsZTohMH0sYXBwbHlEaWZmOnt2YWx1ZTpoLGVudW1lcmFibGU6ITB9LGFwcGx5Q2hhbmdlOnt2YWx1ZTpkLGVudW1lcmFibGU6ITB9LHJldmVydENoYW5nZTp7dmFsdWU6ZyxlbnVtZXJhYmxlOiEwfSxpc0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBqfSxlbnVtZXJhYmxlOiEwfSxub0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBDJiYoQy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UoKX0pLEM9bnVsbCksY30sZW51bWVyYWJsZTohMH19KTt2YXIgRj17RTp7Y29sb3I6XCIjMjE5NkYzXCIsdGV4dDpcIkNIQU5HRUQ6XCJ9LE46e2NvbG9yOlwiIzRDQUY1MFwiLHRleHQ6XCJBRERFRDpcIn0sRDp7Y29sb3I6XCIjRjQ0MzM2XCIsdGV4dDpcIkRFTEVURUQ6XCJ9LEE6e2NvbG9yOlwiIzIxOTZGM1wiLHRleHQ6XCJBUlJBWTpcIn19LEw9e2xldmVsOlwibG9nXCIsbG9nZ2VyOmNvbnNvbGUsbG9nRXJyb3JzOiEwLGNvbGxhcHNlZDp2b2lkIDAscHJlZGljYXRlOnZvaWQgMCxkdXJhdGlvbjohMSx0aW1lc3RhbXA6ITAsc3RhdGVUcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sYWN0aW9uVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGVycm9yVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNvbG9yczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cImluaGVyaXRcIn0scHJldlN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuXCIjOUU5RTlFXCJ9LGFjdGlvbjpmdW5jdGlvbigpe3JldHVyblwiIzAzQTlGNFwifSxuZXh0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm5cIiM0Q0FGNTBcIn0sZXJyb3I6ZnVuY3Rpb24oKXtyZXR1cm5cIiNGMjA0MDRcIn19LGRpZmY6ITEsZGlmZlByZWRpY2F0ZTp2b2lkIDAsdHJhbnNmb3JtZXI6dm9pZCAwfSxUPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9ZS5kaXNwYXRjaCxyPWUuZ2V0U3RhdGU7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9TKCkoe2Rpc3BhdGNoOnQsZ2V0U3RhdGU6cn0pOnZvaWQgY29uc29sZS5lcnJvcihcIlxcbltyZWR1eC1sb2dnZXIgdjNdIEJSRUFLSU5HIENIQU5HRVxcbltyZWR1eC1sb2dnZXIgdjNdIFNpbmNlIDMuMC4wIHJlZHV4LWxvZ2dlciBleHBvcnRzIGJ5IGRlZmF1bHQgbG9nZ2VyIHdpdGggZGVmYXVsdCBzZXR0aW5ncy5cXG5bcmVkdXgtbG9nZ2VyIHYzXSBDaGFuZ2VcXG5bcmVkdXgtbG9nZ2VyIHYzXSBpbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5bcmVkdXgtbG9nZ2VyIHYzXSB0b1xcbltyZWR1eC1sb2dnZXIgdjNdIGltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5cIil9O2UuZGVmYXVsdHM9TCxlLmNyZWF0ZUxvZ2dlcj1TLGUubG9nZ2VyPVQsZS5kZWZhdWx0PVQsT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbiIsImV4cG9ydCAqIGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGltbXV0YWJsZUluaXQoY29uZmlnKSB7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjE1LjAuMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMVxuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRV9GQUxMQkFDSyA9IDB4ZWFjNztcblxuICB2YXIgZ2xvYmFsQ29uZmlnID0ge1xuICAgIHVzZV9zdGF0aWM6IGZhbHNlXG4gIH07XG4gIGlmIChpc09iamVjdChjb25maWcpKSB7XG4gICAgICBpZiAoY29uZmlnLnVzZV9zdGF0aWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGdsb2JhbENvbmZpZy51c2Vfc3RhdGljID0gQm9vbGVhbihjb25maWcudXNlX3N0YXRpYyk7XG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc09iamVjdChkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICAgIUFycmF5LmlzQXJyYXkoZGF0YSkgJiZcbiAgICAgIGRhdGEgIT09IG51bGxcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zdGFudGlhdGVFbXB0eU9iamVjdChvYmopIHtcbiAgICAgIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgIGlmICghcHJvdG90eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvcGVydHlUbyh0YXJnZXQsIG1ldGhvZE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbWV0aG9kTmFtZSwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBiYW5Qcm9wZXJ0eSh0YXJnZXQsIG1ldGhvZE5hbWUpIHtcbiAgICBhZGRQcm9wZXJ0eVRvKHRhcmdldCwgbWV0aG9kTmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICB0aHJvdyBuZXcgSW1tdXRhYmxlRXJyb3IoXCJUaGUgXCIgKyBtZXRob2ROYW1lICtcbiAgICAgICAgXCIgbWV0aG9kIGNhbm5vdCBiZSBpbnZva2VkIG9uIGFuIEltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZS5cIik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaW1tdXRhYmlsaXR5VGFnID0gXCJfX2ltbXV0YWJsZV9pbnZhcmlhbnRzX2hvbGRcIjtcblxuICBmdW5jdGlvbiBhZGRJbW11dGFiaWxpdHlUYWcodGFyZ2V0KSB7XG4gICAgYWRkUHJvcGVydHlUbyh0YXJnZXQsIGltbXV0YWJpbGl0eVRhZywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ltbXV0YWJsZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbnVsbCB8fCBCb29sZWFuKFxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgaW1tdXRhYmlsaXR5VGFnKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW4gSmF2YVNjcmlwdCwgb25seSBvYmplY3RzIGFyZSBldmVuIHBvdGVudGlhbGx5IG11dGFibGUuXG4gICAgICAvLyBzdHJpbmdzLCBudW1iZXJzLCBudWxsLCBhbmQgdW5kZWZpbmVkIGFyZSBhbGwgbmF0dXJhbGx5IGltbXV0YWJsZS5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXF1YWwoYSwgYikge1xuICAgIC8vIEF2b2lkIGZhbHNlIHBvc2l0aXZlcyBkdWUgdG8gKE5hTiAhPT0gTmFOKSBldmFsdWF0aW5nIHRvIHRydWVcbiAgICByZXR1cm4gKGEgPT09IGIgfHwgKGEgIT09IGEgJiYgYiAhPT0gYikpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNNZXJnYWJsZU9iamVjdCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsICYmIHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIgJiYgIShBcnJheS5pc0FycmF5KHRhcmdldCkpICYmICEodGFyZ2V0IGluc3RhbmNlb2YgRGF0ZSk7XG4gIH1cblxuICB2YXIgbXV0YXRpbmdPYmplY3RNZXRob2RzID0gW1xuICAgIFwic2V0UHJvdG90eXBlT2ZcIlxuICBdO1xuXG4gIHZhciBub25NdXRhdGluZ09iamVjdE1ldGhvZHMgPSBbXG4gICAgXCJrZXlzXCJcbiAgXTtcblxuICB2YXIgbXV0YXRpbmdBcnJheU1ldGhvZHMgPSBtdXRhdGluZ09iamVjdE1ldGhvZHMuY29uY2F0KFtcbiAgICBcInB1c2hcIiwgXCJwb3BcIiwgXCJzb3J0XCIsIFwic3BsaWNlXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCIsIFwicmV2ZXJzZVwiXG4gIF0pO1xuXG4gIHZhciBub25NdXRhdGluZ0FycmF5TWV0aG9kcyA9IG5vbk11dGF0aW5nT2JqZWN0TWV0aG9kcy5jb25jYXQoW1xuICAgIFwibWFwXCIsIFwiZmlsdGVyXCIsIFwic2xpY2VcIiwgXCJjb25jYXRcIiwgXCJyZWR1Y2VcIiwgXCJyZWR1Y2VSaWdodFwiXG4gIF0pO1xuXG4gIHZhciBtdXRhdGluZ0RhdGVNZXRob2RzID0gbXV0YXRpbmdPYmplY3RNZXRob2RzLmNvbmNhdChbXG4gICAgXCJzZXREYXRlXCIsIFwic2V0RnVsbFllYXJcIiwgXCJzZXRIb3Vyc1wiLCBcInNldE1pbGxpc2Vjb25kc1wiLCBcInNldE1pbnV0ZXNcIiwgXCJzZXRNb250aFwiLCBcInNldFNlY29uZHNcIixcbiAgICBcInNldFRpbWVcIiwgXCJzZXRVVENEYXRlXCIsIFwic2V0VVRDRnVsbFllYXJcIiwgXCJzZXRVVENIb3Vyc1wiLCBcInNldFVUQ01pbGxpc2Vjb25kc1wiLCBcInNldFVUQ01pbnV0ZXNcIixcbiAgICBcInNldFVUQ01vbnRoXCIsIFwic2V0VVRDU2Vjb25kc1wiLCBcInNldFllYXJcIlxuICBdKTtcblxuICBmdW5jdGlvbiBJbW11dGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gJ015RXJyb3InO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG4gIH1cbiAgSW1tdXRhYmxlRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG4gIEltbXV0YWJsZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVycm9yO1xuXG4gIGZ1bmN0aW9uIG1ha2VJbW11dGFibGUob2JqLCBiYW5uZWRNZXRob2RzKSB7XG4gICAgLy8gVGFnIGl0IHNvIHdlIGNhbiBxdWlja2x5IHRlbGwgaXQncyBpbW11dGFibGUgbGF0ZXIuXG4gICAgYWRkSW1tdXRhYmlsaXR5VGFnKG9iaik7XG5cbiAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gTWFrZSBhbGwgbXV0YXRpbmcgbWV0aG9kcyB0aHJvdyBleGNlcHRpb25zLlxuICAgICAgZm9yICh2YXIgaW5kZXggaW4gYmFubmVkTWV0aG9kcykge1xuICAgICAgICBpZiAoYmFubmVkTWV0aG9kcy5oYXNPd25Qcm9wZXJ0eShpbmRleCkpIHtcbiAgICAgICAgICBiYW5Qcm9wZXJ0eShvYmosIGJhbm5lZE1ldGhvZHNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGcmVlemUgaXQgYW5kIHJldHVybiBpdC5cbiAgICAgIE9iamVjdC5mcmVlemUob2JqKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZU1ldGhvZFJldHVybkltbXV0YWJsZShvYmosIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgY3VycmVudE1ldGhvZCA9IG9ialttZXRob2ROYW1lXTtcblxuICAgIGFkZFByb3BlcnR5VG8ob2JqLCBtZXRob2ROYW1lLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBJbW11dGFibGUoY3VycmVudE1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cykpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlTZXQoaWR4LCB2YWx1ZSwgY29uZmlnKSB7XG4gICAgdmFyIGRlZXAgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLmRlZXA7XG5cbiAgICBpZiAoaWR4IGluIHRoaXMpIHtcbiAgICAgIGlmIChkZWVwICYmIHRoaXNbaWR4XSAhPT0gdmFsdWUgJiYgaXNNZXJnYWJsZU9iamVjdCh2YWx1ZSkgJiYgaXNNZXJnYWJsZU9iamVjdCh0aGlzW2lkeF0pKSB7XG4gICAgICAgIHZhbHVlID0gSW1tdXRhYmxlLm1lcmdlKHRoaXNbaWR4XSwgdmFsdWUsIHtkZWVwOiB0cnVlLCBtb2RlOiAncmVwbGFjZSd9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0VxdWFsKHRoaXNbaWR4XSwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtdXRhYmxlID0gYXNNdXRhYmxlQXJyYXkuY2FsbCh0aGlzKTtcbiAgICBtdXRhYmxlW2lkeF0gPSBJbW11dGFibGUodmFsdWUpO1xuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlQXJyYXkobXV0YWJsZSk7XG4gIH1cblxuICB2YXIgaW1tdXRhYmxlRW1wdHlBcnJheSA9IEltbXV0YWJsZShbXSk7XG5cbiAgZnVuY3Rpb24gYXJyYXlTZXRJbihwdGgsIHZhbHVlLCBjb25maWcpIHtcbiAgICB2YXIgaGVhZCA9IHB0aFswXTtcblxuICAgIGlmIChwdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gYXJyYXlTZXQuY2FsbCh0aGlzLCBoZWFkLCB2YWx1ZSwgY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhaWwgPSBwdGguc2xpY2UoMSk7XG4gICAgICB2YXIgdGhpc0hlYWQgPSB0aGlzW2hlYWRdO1xuICAgICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgICBpZiAodHlwZW9mKHRoaXNIZWFkKSA9PT0gXCJvYmplY3RcIiAmJiB0aGlzSGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBNaWdodCAodmFsaWRseSkgYmUgb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlID0gSW1tdXRhYmxlLnNldEluKHRoaXNIZWFkLCB0YWlsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV4dEhlYWQgPSB0YWlsWzBdO1xuICAgICAgICAvLyBJZiB0aGUgbmV4dCBwYXRoIHBhcnQgaXMgYSBudW1iZXIsIHRoZW4gd2UgYXJlIHNldHRpbmcgaW50byBhbiBhcnJheSwgZWxzZSBhbiBvYmplY3QuXG4gICAgICAgIGlmIChuZXh0SGVhZCAhPT0gJycgJiYgaXNGaW5pdGUobmV4dEhlYWQpKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBhcnJheVNldEluLmNhbGwoaW1tdXRhYmxlRW1wdHlBcnJheSwgdGFpbCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gb2JqZWN0U2V0SW4uY2FsbChpbW11dGFibGVFbXB0eU9iamVjdCwgdGFpbCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWFkIGluIHRoaXMgJiYgdGhpc0hlYWQgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbXV0YWJsZSA9IGFzTXV0YWJsZUFycmF5LmNhbGwodGhpcyk7XG4gICAgICBtdXRhYmxlW2hlYWRdID0gbmV3VmFsdWU7XG4gICAgICByZXR1cm4gbWFrZUltbXV0YWJsZUFycmF5KG11dGFibGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VJbW11dGFibGVBcnJheShhcnJheSkge1xuICAgIC8vIERvbid0IGNoYW5nZSB0aGVpciBpbXBsZW1lbnRhdGlvbnMsIGJ1dCB3cmFwIHRoZXNlIGZ1bmN0aW9ucyB0byBtYWtlIHN1cmVcbiAgICAvLyB0aGV5IGFsd2F5cyByZXR1cm4gYW4gaW1tdXRhYmxlIHZhbHVlLlxuICAgIGZvciAodmFyIGluZGV4IGluIG5vbk11dGF0aW5nQXJyYXlNZXRob2RzKSB7XG4gICAgICBpZiAobm9uTXV0YXRpbmdBcnJheU1ldGhvZHMuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XG4gICAgICAgIHZhciBtZXRob2ROYW1lID0gbm9uTXV0YXRpbmdBcnJheU1ldGhvZHNbaW5kZXhdO1xuICAgICAgICBtYWtlTWV0aG9kUmV0dXJuSW1tdXRhYmxlKGFycmF5LCBtZXRob2ROYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWdsb2JhbENvbmZpZy51c2Vfc3RhdGljKSB7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcImZsYXRNYXBcIiwgIGZsYXRNYXApO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJhc09iamVjdFwiLCBhc09iamVjdCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcImFzTXV0YWJsZVwiLCBhc011dGFibGVBcnJheSk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcInNldFwiLCBhcnJheVNldCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcInNldEluXCIsIGFycmF5U2V0SW4pO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJ1cGRhdGVcIiwgdXBkYXRlKTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwidXBkYXRlSW5cIiwgdXBkYXRlSW4pO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJnZXRJblwiLCBnZXRJbik7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycmF5W2ldID0gSW1tdXRhYmxlKGFycmF5W2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZShhcnJheSwgbXV0YXRpbmdBcnJheU1ldGhvZHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUltbXV0YWJsZURhdGUoZGF0ZSkge1xuICAgIGlmICghZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMpIHtcbiAgICAgIGFkZFByb3BlcnR5VG8oZGF0ZSwgXCJhc011dGFibGVcIiwgYXNNdXRhYmxlRGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGUoZGF0ZSwgbXV0YXRpbmdEYXRlTWV0aG9kcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhc011dGFibGVEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldFRpbWUoKSk7XG4gIH1cblxuICAvKipcbiAgICogRWZmZWN0aXZlbHkgcGVyZm9ybXMgYSBtYXAoKSBvdmVyIHRoZSBlbGVtZW50cyBpbiB0aGUgYXJyYXksIHVzaW5nIHRoZVxuICAgKiBwcm92aWRlZCBpdGVyYXRvciwgZXhjZXB0IHRoYXQgd2hlbmV2ZXIgdGhlIGl0ZXJhdG9yIHJldHVybnMgYW4gYXJyYXksIHRoYXRcbiAgICogYXJyYXkncyBlbGVtZW50cyBhcmUgYWRkZWQgdG8gdGhlIGZpbmFsIHJlc3VsdCBpbnN0ZWFkIG9mIHRoZSBhcnJheSBpdHNlbGYuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdG9yIC0gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIG9uIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkuIEl0IHdpbGwgcmVjZWl2ZSB0aHJlZSBhcmd1bWVudHM6IHRoZSBjdXJyZW50IHZhbHVlLCB0aGUgY3VycmVudCBpbmRleCwgYW5kIHRoZSBjdXJyZW50IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGZsYXRNYXAoaXRlcmF0b3IpIHtcbiAgICAvLyBDYWxsaW5nIC5mbGF0TWFwKCkgd2l0aCBubyBhcmd1bWVudHMgaXMgYSBuby1vcC4gRG9uJ3QgYm90aGVyIGNsb25pbmcuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGgsXG4gICAgICAgIGluZGV4O1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgaXRlcmF0b3JSZXN1bHQgPSBpdGVyYXRvcih0aGlzW2luZGV4XSwgaW5kZXgsIHRoaXMpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVyYXRvclJlc3VsdCkpIHtcbiAgICAgICAgLy8gQ29uY2F0ZW5hdGUgQXJyYXkgcmVzdWx0cyBpbnRvIHRoZSByZXR1cm4gdmFsdWUgd2UncmUgYnVpbGRpbmcgdXAuXG4gICAgICAgIHJlc3VsdC5wdXNoLmFwcGx5KHJlc3VsdCwgaXRlcmF0b3JSZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIG5vbi1BcnJheSByZXN1bHRzIHRoZSBzYW1lIHdheSBtYXAoKSBkb2VzLlxuICAgICAgICByZXN1bHQucHVzaChpdGVyYXRvclJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGVBcnJheShyZXN1bHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSW1tdXRhYmxlIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBnaXZlbiBrZXlzIGluY2x1ZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBrZXlzVG9SZW1vdmUgLSBBIGxpc3Qgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgdGhlIGtleXMgdG8gZXhjbHVkZSBpbiB0aGUgcmV0dXJuIHZhbHVlLiBJbnN0ZWFkIG9mIHByb3ZpZGluZyBhIHNpbmdsZSBhcnJheSwgdGhpcyBtZXRob2QgY2FuIGFsc28gYmUgY2FsbGVkIGJ5IHBhc3NpbmcgbXVsdGlwbGUgc3RyaW5ncyBhcyBzZXBhcmF0ZSBhcmd1bWVudHMuXG4gICAqL1xuICBmdW5jdGlvbiB3aXRob3V0KHJlbW92ZSkge1xuICAgIC8vIENhbGxpbmcgLndpdGhvdXQoKSB3aXRoIG5vIGFyZ3VtZW50cyBpcyBhIG5vLW9wLiBEb24ndCBib3RoZXIgY2xvbmluZy5cbiAgICBpZiAodHlwZW9mIHJlbW92ZSA9PT0gXCJ1bmRlZmluZWRcIiAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlbW92ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAvLyBJZiB3ZSB3ZXJlbid0IGdpdmVuIGFuIGFycmF5LCB1c2UgdGhlIGFyZ3VtZW50cyBsaXN0LlxuICAgICAgdmFyIGtleXNUb1JlbW92ZUFycmF5ID0gKEFycmF5LmlzQXJyYXkocmVtb3ZlKSkgP1xuICAgICAgICAgcmVtb3ZlLnNsaWNlKCkgOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAvLyBDb252ZXJ0IG51bWVyaWMga2V5cyB0byBzdHJpbmdzIHNpbmNlIHRoYXQncyBob3cgdGhleSdsbFxuICAgICAgLy8gY29tZSBmcm9tIHRoZSBlbnVtZXJhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAga2V5c1RvUmVtb3ZlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCwgaWR4LCBhcnIpIHtcbiAgICAgICAgaWYodHlwZW9mKGVsKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGFycltpZHhdID0gZWwudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIHJldHVybiBrZXlzVG9SZW1vdmVBcnJheS5pbmRleE9mKGtleSkgIT09IC0xO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gaW5zdGFudGlhdGVFbXB0eU9iamVjdCh0aGlzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHJlbW92ZSh0aGlzW2tleV0sIGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdGhpc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlT2JqZWN0KHJlc3VsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBhc011dGFibGVBcnJheShvcHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLCBpLCBsZW5ndGg7XG5cbiAgICBpZihvcHRzICYmIG9wdHMuZGVlcCkge1xuICAgICAgZm9yKGkgPSAwLCBsZW5ndGggPSB0aGlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFzRGVlcE11dGFibGUodGhpc1tpXSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IoaSA9IDAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFZmZlY3RpdmVseSBwZXJmb3JtcyBhIFttYXBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L21hcCkgb3ZlciB0aGUgZWxlbWVudHMgaW4gdGhlIGFycmF5LCBleHBlY3RpbmcgdGhhdCB0aGUgaXRlcmF0b3IgZnVuY3Rpb25cbiAgICogd2lsbCByZXR1cm4gYW4gYXJyYXkgb2YgdHdvIGVsZW1lbnRzIC0gdGhlIGZpcnN0IHJlcHJlc2VudGluZyBhIGtleSwgdGhlIG90aGVyXG4gICAqIGEgdmFsdWUuIFRoZW4gcmV0dXJucyBhbiBJbW11dGFibGUgT2JqZWN0IGNvbnN0cnVjdGVkIG9mIHRob3NlIGtleXMgYW5kIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0b3IgLSBBIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2YgdHdvIGVsZW1lbnRzIC0gdGhlIGZpcnN0IHJlcHJlc2VudGluZyB0aGUgZGVzaXJlZCBrZXksIHRoZSBvdGhlciB0aGUgZGVzaXJlZCB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFzT2JqZWN0KGl0ZXJhdG9yKSB7XG4gICAgLy8gSWYgbm8gaXRlcmF0b3Igd2FzIHByb3ZpZGVkLCBhc3N1bWUgdGhlIGlkZW50aXR5IGZ1bmN0aW9uXG4gICAgLy8gKHN1Z2dlc3RpbmcgdGhpcyBhcnJheSBpcyBhbHJlYWR5IGEgbGlzdCBvZiBrZXkvdmFsdWUgcGFpcnMuKVxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaXRlcmF0b3IgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9LFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgaW5kZXg7XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBwYWlyICA9IGl0ZXJhdG9yKHRoaXNbaW5kZXhdLCBpbmRleCwgdGhpcyksXG4gICAgICAgICAga2V5ICAgPSBwYWlyWzBdLFxuICAgICAgICAgIHZhbHVlID0gcGFpclsxXTtcblxuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChyZXN1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNEZWVwTXV0YWJsZShvYmopIHtcbiAgICBpZiAoXG4gICAgICAoIW9iaikgfHxcbiAgICAgICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgfHxcbiAgICAgICghT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGltbXV0YWJpbGl0eVRhZykpIHx8XG4gICAgICAob2JqIGluc3RhbmNlb2YgRGF0ZSlcbiAgICApIHsgcmV0dXJuIG9iajsgfVxuICAgIHJldHVybiBJbW11dGFibGUuYXNNdXRhYmxlKG9iaiwge2RlZXA6IHRydWV9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrQ29weShzcmMsIGRlc3QpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzcmMsIGtleSkpIHtcbiAgICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJbW11dGFibGUgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgYW5kIHZhbHVlcyBvZiBib3RoXG4gICAqIHRoaXMgb2JqZWN0IGFuZCB0aGUgcHJvdmlkZWQgb2JqZWN0LCBwcmlvcml0aXppbmcgdGhlIHByb3ZpZGVkIG9iamVjdCdzXG4gICAqIHZhbHVlcyB3aGVuZXZlciB0aGUgc2FtZSBrZXkgaXMgcHJlc2VudCBpbiBib3RoIG9iamVjdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvdGhlciAtIFRoZSBvdGhlciBvYmplY3QgdG8gbWVyZ2UuIE11bHRpcGxlIG9iamVjdHMgY2FuIGJlIHBhc3NlZCBhcyBhbiBhcnJheS4gSW4gc3VjaCBhIGNhc2UsIHRoZSBsYXRlciBhbiBvYmplY3QgYXBwZWFycyBpbiB0aGF0IGxpc3QsIHRoZSBoaWdoZXIgaXRzIHByaW9yaXR5LlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0gT3B0aW9uYWwgY29uZmlnIG9iamVjdCB0aGF0IGNvbnRhaW5zIHNldHRpbmdzLiBTdXBwb3J0ZWQgc2V0dGluZ3MgYXJlOiB7ZGVlcDogdHJ1ZX0gZm9yIGRlZXAgbWVyZ2UgYW5kIHttZXJnZXI6IG1lcmdlckZ1bmN9IHdoZXJlIG1lcmdlckZ1bmMgaXMgYSBmdW5jdGlvblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB0YWtlcyBhIHByb3BlcnR5IGZyb20gYm90aCBvYmplY3RzLiBJZiBhbnl0aGluZyBpcyByZXR1cm5lZCBpdCBvdmVycmlkZXMgdGhlIG5vcm1hbCBtZXJnZSBiZWhhdmlvdXIuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZShvdGhlciwgY29uZmlnKSB7XG4gICAgLy8gQ2FsbGluZyAubWVyZ2UoKSB3aXRoIG5vIGFyZ3VtZW50cyBpcyBhIG5vLW9wLiBEb24ndCBib3RoZXIgY2xvbmluZy5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKG90aGVyID09PSBudWxsIHx8ICh0eXBlb2Ygb3RoZXIgIT09IFwib2JqZWN0XCIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW1tdXRhYmxlI21lcmdlIGNhbiBvbmx5IGJlIGludm9rZWQgd2l0aCBvYmplY3RzIG9yIGFycmF5cywgbm90IFwiICsgSlNPTi5zdHJpbmdpZnkob3RoZXIpKTtcbiAgICB9XG5cbiAgICB2YXIgcmVjZWl2ZWRBcnJheSA9IChBcnJheS5pc0FycmF5KG90aGVyKSksXG4gICAgICAgIGRlZXAgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLmRlZXAsXG4gICAgICAgIG1vZGUgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLm1vZGUgfHwgJ21lcmdlJyxcbiAgICAgICAgbWVyZ2VyICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcubWVyZ2VyLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICAvLyBVc2UgdGhlIGdpdmVuIGtleSB0byBleHRyYWN0IGEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gb2JqZWN0LCB0aGVuIHBsYWNlXG4gICAgLy8gdGhhdCB2YWx1ZSBpbiB0aGUgcmVzdWx0IG9iamVjdCB1bmRlciB0aGUgc2FtZSBrZXkuIElmIHRoYXQgcmVzdWx0ZWRcbiAgICAvLyBpbiBhIGNoYW5nZSBmcm9tIHRoaXMgb2JqZWN0J3MgdmFsdWUgYXQgdGhhdCBrZXksIHNldCBhbnlDaGFuZ2VzID0gdHJ1ZS5cbiAgICBmdW5jdGlvbiBhZGRUb1Jlc3VsdChjdXJyZW50T2JqLCBvdGhlck9iaiwga2V5KSB7XG4gICAgICB2YXIgaW1tdXRhYmxlVmFsdWUgPSBJbW11dGFibGUob3RoZXJPYmpba2V5XSk7XG4gICAgICB2YXIgbWVyZ2VyUmVzdWx0ID0gbWVyZ2VyICYmIG1lcmdlcihjdXJyZW50T2JqW2tleV0sIGltbXV0YWJsZVZhbHVlLCBjb25maWcpO1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRPYmpba2V5XTtcblxuICAgICAgaWYgKChyZXN1bHQgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgKG1lcmdlclJlc3VsdCAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAoIWN1cnJlbnRPYmouaGFzT3duUHJvcGVydHkoa2V5KSkgfHxcbiAgICAgICAgIWlzRXF1YWwoaW1tdXRhYmxlVmFsdWUsIGN1cnJlbnRWYWx1ZSkpIHtcblxuICAgICAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKG1lcmdlclJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBtZXJnZXJSZXN1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVlcCAmJiBpc01lcmdhYmxlT2JqZWN0KGN1cnJlbnRWYWx1ZSkgJiYgaXNNZXJnYWJsZU9iamVjdChpbW11dGFibGVWYWx1ZSkpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IEltbXV0YWJsZS5tZXJnZShjdXJyZW50VmFsdWUsIGltbXV0YWJsZVZhbHVlLCBjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gaW1tdXRhYmxlVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRXF1YWwoY3VycmVudFZhbHVlLCBuZXdWYWx1ZSkgfHwgIWN1cnJlbnRPYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gTWFrZSBhIHNoYWxsb3cgY2xvbmUgb2YgdGhlIGN1cnJlbnQgb2JqZWN0LlxuICAgICAgICAgICAgcmVzdWx0ID0gcXVpY2tDb3B5KGN1cnJlbnRPYmosIGluc3RhbnRpYXRlRW1wdHlPYmplY3QoY3VycmVudE9iaikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdFtrZXldID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckRyb3BwZWRLZXlzKGN1cnJlbnRPYmosIG90aGVyT2JqKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudE9iaikge1xuICAgICAgICBpZiAoIW90aGVyT2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIE1ha2UgYSBzaGFsbG93IGNsb25lIG9mIHRoZSBjdXJyZW50IG9iamVjdC5cbiAgICAgICAgICAgIHJlc3VsdCA9IHF1aWNrQ29weShjdXJyZW50T2JqLCBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KGN1cnJlbnRPYmopKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleTtcblxuICAgIC8vIEFjaGlldmUgcHJpb3JpdGl6YXRpb24gYnkgb3ZlcnJpZGluZyBwcmV2aW91cyB2YWx1ZXMgdGhhdCBnZXQgaW4gdGhlIHdheS5cbiAgICBpZiAoIXJlY2VpdmVkQXJyYXkpIHtcbiAgICAgIC8vIFRoZSBtb3N0IGNvbW1vbiB1c2UgY2FzZToganVzdCBtZXJnZSBvbmUgb2JqZWN0IGludG8gdGhlIGV4aXN0aW5nIG9uZS5cbiAgICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG90aGVyLCBrZXkpKSB7XG4gICAgICAgICAgYWRkVG9SZXN1bHQodGhpcywgb3RoZXIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb2RlID09PSAncmVwbGFjZScpIHtcbiAgICAgICAgY2xlYXJEcm9wcGVkS2V5cyh0aGlzLCBvdGhlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIGFsc28gYWNjZXB0IGFuIEFycmF5XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IG90aGVyLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIG90aGVyRnJvbUFycmF5ID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgICAgIGZvciAoa2V5IGluIG90aGVyRnJvbUFycmF5KSB7XG4gICAgICAgICAgaWYgKG90aGVyRnJvbUFycmF5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGFkZFRvUmVzdWx0KHJlc3VsdCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdGhpcywgb3RoZXJGcm9tQXJyYXksIGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1ha2VJbW11dGFibGVPYmplY3QocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RSZXBsYWNlKHZhbHVlLCBjb25maWcpIHtcbiAgICB2YXIgZGVlcCAgICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcuZGVlcDtcblxuICAgIC8vIENhbGxpbmcgLnJlcGxhY2UoKSB3aXRoIG5vIGFyZ3VtZW50cyBpcyBhIG5vLW9wLiBEb24ndCBib3RoZXIgY2xvbmluZy5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkltbXV0YWJsZSNyZXBsYWNlIGNhbiBvbmx5IGJlIGludm9rZWQgd2l0aCBvYmplY3RzIG9yIGFycmF5cywgbm90IFwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW1tdXRhYmxlLm1lcmdlKHRoaXMsIHZhbHVlLCB7ZGVlcDogZGVlcCwgbW9kZTogJ3JlcGxhY2UnfSk7XG4gIH1cblxuICB2YXIgaW1tdXRhYmxlRW1wdHlPYmplY3QgPSBJbW11dGFibGUoe30pO1xuXG4gIGZ1bmN0aW9uIG9iamVjdFNldEluKHBhdGgsIHZhbHVlLCBjb25maWcpIHtcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KHBhdGgpKSB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCB0byBJbW11dGFibGUjc2V0SW4gbXVzdCBiZSBhbiBhcnJheSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBcXFwia2V5XFxcIiBzdHJpbmcuXCIpO1xuICAgIH1cblxuICAgIHZhciBoZWFkID0gcGF0aFswXTtcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBvYmplY3RTZXQuY2FsbCh0aGlzLCBoZWFkLCB2YWx1ZSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICB2YXIgdGFpbCA9IHBhdGguc2xpY2UoMSk7XG4gICAgdmFyIG5ld1ZhbHVlO1xuICAgIHZhciB0aGlzSGVhZCA9IHRoaXNbaGVhZF07XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShoZWFkKSAmJiB0eXBlb2YodGhpc0hlYWQpID09PSBcIm9iamVjdFwiICYmIHRoaXNIZWFkICE9PSBudWxsKSB7XG4gICAgICAvLyBNaWdodCAodmFsaWRseSkgYmUgb2JqZWN0IG9yIGFycmF5XG4gICAgICBuZXdWYWx1ZSA9IEltbXV0YWJsZS5zZXRJbih0aGlzSGVhZCwgdGFpbCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZSA9IG9iamVjdFNldEluLmNhbGwoaW1tdXRhYmxlRW1wdHlPYmplY3QsIHRhaWwsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShoZWFkKSAmJiB0aGlzSGVhZCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBtdXRhYmxlID0gcXVpY2tDb3B5KHRoaXMsIGluc3RhbnRpYXRlRW1wdHlPYmplY3QodGhpcykpO1xuICAgIG11dGFibGVbaGVhZF0gPSBuZXdWYWx1ZTtcbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChtdXRhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9iamVjdFNldChwcm9wZXJ0eSwgdmFsdWUsIGNvbmZpZykge1xuICAgIHZhciBkZWVwICAgICAgICAgID0gY29uZmlnICYmIGNvbmZpZy5kZWVwO1xuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICBpZiAoZGVlcCAmJiB0aGlzW3Byb3BlcnR5XSAhPT0gdmFsdWUgJiYgaXNNZXJnYWJsZU9iamVjdCh2YWx1ZSkgJiYgaXNNZXJnYWJsZU9iamVjdCh0aGlzW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgdmFsdWUgPSBJbW11dGFibGUubWVyZ2UodGhpc1twcm9wZXJ0eV0sIHZhbHVlLCB7ZGVlcDogdHJ1ZSwgbW9kZTogJ3JlcGxhY2UnfSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNFcXVhbCh0aGlzW3Byb3BlcnR5XSwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtdXRhYmxlID0gcXVpY2tDb3B5KHRoaXMsIGluc3RhbnRpYXRlRW1wdHlPYmplY3QodGhpcykpO1xuICAgIG11dGFibGVbcHJvcGVydHldID0gSW1tdXRhYmxlKHZhbHVlKTtcbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChtdXRhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShwcm9wZXJ0eSwgdXBkYXRlcikge1xuICAgIHZhciByZXN0QXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGluaXRpYWxWYWwgPSB0aGlzW3Byb3BlcnR5XTtcbiAgICByZXR1cm4gSW1tdXRhYmxlLnNldCh0aGlzLCBwcm9wZXJ0eSwgdXBkYXRlci5hcHBseShpbml0aWFsVmFsLCBbaW5pdGlhbFZhbF0uY29uY2F0KHJlc3RBcmdzKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5QYXRoKG9iaiwgcGF0aCkge1xuICAgIC8qanNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRoLmxlbmd0aDsgb2JqICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiAoaSAmJiBpID09IGwpID8gb2JqIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlSW4ocGF0aCwgdXBkYXRlcikge1xuICAgIHZhciByZXN0QXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGluaXRpYWxWYWwgPSBnZXRJblBhdGgodGhpcywgcGF0aCk7XG5cbiAgICByZXR1cm4gSW1tdXRhYmxlLnNldEluKHRoaXMsIHBhdGgsIHVwZGF0ZXIuYXBwbHkoaW5pdGlhbFZhbCwgW2luaXRpYWxWYWxdLmNvbmNhdChyZXN0QXJncykpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluKHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IGdldEluUGF0aCh0aGlzLCBwYXRoKTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNNdXRhYmxlT2JqZWN0KG9wdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5zdGFudGlhdGVFbXB0eU9iamVjdCh0aGlzKSwga2V5O1xuXG4gICAgaWYob3B0cyAmJiBvcHRzLmRlZXApIHtcbiAgICAgIGZvciAoa2V5IGluIHRoaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gYXNEZWVwTXV0YWJsZSh0aGlzW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIHRoaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdGhpc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgcGxhaW4gb2JqZWN0IHRvIGJlIHVzZWQgZm9yIGNsb25pbmdcbiAgZnVuY3Rpb24gaW5zdGFudGlhdGVQbGFpbk9iamVjdCgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvLyBGaW5hbGl6ZXMgYW4gb2JqZWN0IHdpdGggaW1tdXRhYmxlIG1ldGhvZHMsIGZyZWV6ZXMgaXQsIGFuZCByZXR1cm5zIGl0LlxuICBmdW5jdGlvbiBtYWtlSW1tdXRhYmxlT2JqZWN0KG9iaikge1xuICAgIGlmICghZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMpIHtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcIm1lcmdlXCIsIG1lcmdlKTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInJlcGxhY2VcIiwgb2JqZWN0UmVwbGFjZSk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJ3aXRob3V0XCIsIHdpdGhvdXQpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwiYXNNdXRhYmxlXCIsIGFzTXV0YWJsZU9iamVjdCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJzZXRcIiwgb2JqZWN0U2V0KTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInNldEluXCIsIG9iamVjdFNldEluKTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInVwZGF0ZVwiLCB1cGRhdGUpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwidXBkYXRlSW5cIiwgdXBkYXRlSW4pO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwiZ2V0SW5cIiwgZ2V0SW4pO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlKG9iaiwgbXV0YXRpbmdPYmplY3RNZXRob2RzKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBvYmplY3QgaXMgYSB2YWxpZCByZWFjdCBlbGVtZW50XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YxNS4wLjEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMzI2XG4gIGZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICBvYmogIT09IG51bGwgJiZcbiAgICAgICAgICAgKG9iai4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFX0ZBTExCQUNLIHx8IG9iai4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmlsZU9iamVjdChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgIG9iaiBpbnN0YW5jZW9mIEZpbGU7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Jsb2JPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBCbG9iO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Vycm9yKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIEltbXV0YWJsZShvYmosIG9wdGlvbnMsIHN0YWNrUmVtYWluaW5nKSB7XG4gICAgaWYgKGlzSW1tdXRhYmxlKG9iaikgfHwgaXNSZWFjdEVsZW1lbnQob2JqKSB8fCBpc0ZpbGVPYmplY3Qob2JqKSB8fCBpc0Jsb2JPYmplY3Qob2JqKSB8fCBpc0Vycm9yKG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChpc1Byb21pc2Uob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai50aGVuKEltbXV0YWJsZSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBtYWtlSW1tdXRhYmxlQXJyYXkob2JqLnNsaWNlKCkpO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIG1ha2VJbW11dGFibGVEYXRlKG5ldyBEYXRlKG9iai5nZXRUaW1lKCkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRG9uJ3QgZnJlZXplIHRoZSBvYmplY3Qgd2Ugd2VyZSBnaXZlbjsgbWFrZSBhIGNsb25lIGFuZCB1c2UgdGhhdC5cbiAgICAgIHZhciBwcm90b3R5cGUgPSBvcHRpb25zICYmIG9wdGlvbnMucHJvdG90eXBlO1xuICAgICAgdmFyIGluc3RhbnRpYXRlRW1wdHlPYmplY3QgPVxuICAgICAgICAoIXByb3RvdHlwZSB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUpID9cbiAgICAgICAgICBpbnN0YW50aWF0ZVBsYWluT2JqZWN0IDogKGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpOyB9KTtcbiAgICAgIHZhciBjbG9uZSA9IGluc3RhbnRpYXRlRW1wdHlPYmplY3QoKTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLypqc2hpbnQgZXFudWxsOnRydWUgKi9cbiAgICAgICAgaWYgKHN0YWNrUmVtYWluaW5nID09IG51bGwpIHtcbiAgICAgICAgICBzdGFja1JlbWFpbmluZyA9IDY0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFja1JlbWFpbmluZyA8PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEltbXV0YWJsZUVycm9yKFwiQXR0ZW1wdCB0byBjb25zdHJ1Y3QgSW1tdXRhYmxlIGZyb20gYSBkZWVwbHkgbmVzdGVkIG9iamVjdCB3YXMgZGV0ZWN0ZWQuXCIgK1xuICAgICAgICAgICAgXCIgSGF2ZSB5b3UgdHJpZWQgdG8gd3JhcCBhbiBvYmplY3Qgd2l0aCBjaXJjdWxhciByZWZlcmVuY2VzIChlLmcuIFJlYWN0IGVsZW1lbnQpP1wiICtcbiAgICAgICAgICAgIFwiIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcnRmZWxkbWFuL3NlYW1sZXNzLWltbXV0YWJsZS93aWtpL0RlZXBseS1uZXN0ZWQtb2JqZWN0LXdhcy1kZXRlY3RlZCBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tSZW1haW5pbmcgLT0gMTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkpIHtcbiAgICAgICAgICBjbG9uZVtrZXldID0gSW1tdXRhYmxlKG9ialtrZXldLCB1bmRlZmluZWQsIHN0YWNrUmVtYWluaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChjbG9uZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciB0byBhbGxvdyB0aGUgdXNlIG9mIG9iamVjdCBtZXRob2RzIGFzIHN0YXRpYyBtZXRob2RzIG9mIEltbXV0YWJsZS5cbiAgZnVuY3Rpb24gdG9TdGF0aWMoZm4pIHtcbiAgICBmdW5jdGlvbiBzdGF0aWNXcmFwcGVyKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICB2YXIgc2VsZiA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGljV3JhcHBlcjtcbiAgfVxuXG4gIC8vIFdyYXBwZXIgdG8gYWxsb3cgdGhlIHVzZSBvZiBvYmplY3QgbWV0aG9kcyBhcyBzdGF0aWMgbWV0aG9kcyBvZiBJbW11dGFibGUuXG4gIC8vIHdpdGggdGhlIGFkZGl0aW9uYWwgY29uZGl0aW9uIG9mIGNob29zaW5nIHdoaWNoIGZ1bmN0aW9uIHRvIGNhbGwgZGVwZW5kaW5nXG4gIC8vIGlmIGFyZ3VtZW50IGlzIGFuIGFycmF5IG9yIGFuIG9iamVjdC5cbiAgZnVuY3Rpb24gdG9TdGF0aWNPYmplY3RPckFycmF5KGZuT2JqZWN0LCBmbkFycmF5KSB7XG4gICAgZnVuY3Rpb24gc3RhdGljV3JhcHBlcigpIHtcbiAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgdmFyIHNlbGYgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxmKSkge1xuICAgICAgICAgIHJldHVybiBmbkFycmF5LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZm5PYmplY3QuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRpY1dyYXBwZXI7XG4gIH1cblxuICAvLyBXcmFwcGVyIHRvIGFsbG93IHRoZSB1c2Ugb2Ygb2JqZWN0IG1ldGhvZHMgYXMgc3RhdGljIG1ldGhvZHMgb2YgSW1tdXRhYmxlLlxuICAvLyB3aXRoIHRoZSBhZGRpdGlvbmFsIGNvbmRpdGlvbiBvZiBjaG9vc2luZyB3aGljaCBmdW5jdGlvbiB0byBjYWxsIGRlcGVuZGluZ1xuICAvLyBpZiBhcmd1bWVudCBpcyBhbiBhcnJheSBvciBhbiBvYmplY3Qgb3IgYSBkYXRlLlxuICBmdW5jdGlvbiB0b1N0YXRpY09iamVjdE9yRGF0ZU9yQXJyYXkoZm5PYmplY3QsIGZuQXJyYXksIGZuRGF0ZSkge1xuICAgIGZ1bmN0aW9uIHN0YXRpY1dyYXBwZXIoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIHZhciBzZWxmID0gYXJncy5zaGlmdCgpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZikpIHtcbiAgICAgICAgICByZXR1cm4gZm5BcnJheS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICByZXR1cm4gZm5EYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZm5PYmplY3QuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRpY1dyYXBwZXI7XG4gIH1cblxuICAvLyBFeHBvcnQgdGhlIGxpYnJhcnlcbiAgSW1tdXRhYmxlLmZyb20gICAgICAgICAgID0gSW1tdXRhYmxlO1xuICBJbW11dGFibGUuaXNJbW11dGFibGUgICAgPSBpc0ltbXV0YWJsZTtcbiAgSW1tdXRhYmxlLkltbXV0YWJsZUVycm9yID0gSW1tdXRhYmxlRXJyb3I7XG4gIEltbXV0YWJsZS5tZXJnZSAgICAgICAgICA9IHRvU3RhdGljKG1lcmdlKTtcbiAgSW1tdXRhYmxlLnJlcGxhY2UgICAgICAgID0gdG9TdGF0aWMob2JqZWN0UmVwbGFjZSk7XG4gIEltbXV0YWJsZS53aXRob3V0ICAgICAgICA9IHRvU3RhdGljKHdpdGhvdXQpO1xuICBJbW11dGFibGUuYXNNdXRhYmxlICAgICAgPSB0b1N0YXRpY09iamVjdE9yRGF0ZU9yQXJyYXkoYXNNdXRhYmxlT2JqZWN0LCBhc011dGFibGVBcnJheSwgYXNNdXRhYmxlRGF0ZSk7XG4gIEltbXV0YWJsZS5zZXQgICAgICAgICAgICA9IHRvU3RhdGljT2JqZWN0T3JBcnJheShvYmplY3RTZXQsIGFycmF5U2V0KTtcbiAgSW1tdXRhYmxlLnNldEluICAgICAgICAgID0gdG9TdGF0aWNPYmplY3RPckFycmF5KG9iamVjdFNldEluLCBhcnJheVNldEluKTtcbiAgSW1tdXRhYmxlLnVwZGF0ZSAgICAgICAgID0gdG9TdGF0aWModXBkYXRlKTtcbiAgSW1tdXRhYmxlLnVwZGF0ZUluICAgICAgID0gdG9TdGF0aWModXBkYXRlSW4pO1xuICBJbW11dGFibGUuZ2V0SW4gICAgICAgICAgPSB0b1N0YXRpYyhnZXRJbik7XG4gIEltbXV0YWJsZS5mbGF0TWFwICAgICAgICA9IHRvU3RhdGljKGZsYXRNYXApO1xuICBJbW11dGFibGUuYXNPYmplY3QgICAgICAgPSB0b1N0YXRpYyhhc09iamVjdCk7XG4gIGlmICghZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMpIHtcbiAgICAgIEltbXV0YWJsZS5zdGF0aWMgPSBpbW11dGFibGVJbml0KHtcbiAgICAgICAgICB1c2Vfc3RhdGljOiB0cnVlXG4gICAgICB9KTtcbiAgfVxuXG4gIE9iamVjdC5mcmVlemUoSW1tdXRhYmxlKTtcblxuICByZXR1cm4gSW1tdXRhYmxlO1xufVxuXG4gIHZhciBJbW11dGFibGUgPSBpbW11dGFibGVJbml0KCk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEltbXV0YWJsZTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBJbW11dGFibGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBleHBvcnRzLkltbXV0YWJsZSA9IEltbXV0YWJsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XG4gICAgd2luZG93LkltbXV0YWJsZSA9IEltbXV0YWJsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsLkltbXV0YWJsZSA9IEltbXV0YWJsZTtcbiAgfVxufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IGJ1aWxkUmVkdXgsIGJ1aWxkTGlzdFJlZHV4IH0gZnJvbSAnLi9saWJzL2hlbHBlcidcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vbGlicy9zZXR0aW5ncydcbmltcG9ydCBjb25uZWN0U2FnYXMgZnJvbSAnLi9saWJzL2Nvbm5lY3RTYWdhcydcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2xpYnMvc3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYnVpbGRSZWR1eDogY29ubmVjdFNhZ2FzKGJ1aWxkUmVkdXgpLFxuICBjb25maWcsXG4gIGNyZWF0ZVN0b3JlOiBjb25maWd1cmVTdG9yZSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHt9XG5cbi8qKlxuICog5bCG5a+56LGh6L2s5Y+Y5Li6IHBhcmFtcyBzdHJpbmdcbiAqIGUuZy4geyBuYW1lOiAndXNlcicsIGFnZTogMTN9ID0+IG5hbWU9dXNlciZhZ2U9MTNcbiAqIEBwYXJhbSBvYmpcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmoycGFyYW1zKG9iaiwgcHJlZml4ID0gJycsIHN1ZmZpeCA9ICcnKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCAhb2JqKSByZXR1cm4gJydcblxuICBsZXQgcGFyYW1zID0gW11cbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcbiAgICAgIGlmIChvYmpba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkgeyAvLyDmlbDnu4Tlkozlr7nosaHnibnmrorlpITnkIZcbiAgICAgICAgcGFyYW1zLnB1c2goYCR7a2V5fT0ke0pTT04uc3RyaW5naWZ5KG9ialtrZXldKX1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLnB1c2goYCR7a2V5fT0ke29ialtrZXldfWApXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gcHJlZml4ICsgcGFyYW1zLmpvaW4oJyYnKSArIHN1ZmZpeFxufVxuXG4vKipcbiAqICDkuIvliJLnur/ovazpqbzls7BcbiAqIEBwYXJhbSBuYW1lXG4gKi9cbmV4cG9ydCBjb25zdCB1bmRlclNjb3JlVG9DYW1lbCA9IChuYW1lKSA9PlxuICBuYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpdGVtWzBdLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9IHZhbHVlID0+IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09ICcnXG5leHBvcnQgY29uc3Qgbm90TnVsbE9yVW5kZWZpZW5kID0gdmFsdWUgPT4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZFxuIiwiaW1wb3J0IHsgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0LCBzZWxlY3QsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IHsgb2JqMnBhcmFtcywgdW5kZXJTY29yZVRvQ2FtZWwsIG5vdE51bGxPclVuZGVmaWVuZCB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJy4vc2V0dGluZ3MnXG5cbi8vIOW4uOinhHNhZ2Fz55qE5pON5L2cXG5jb25zdCBlZmZlY3RzID0ge1xuICBwdXQsXG4gIGNhbGxcbn1cblxuLy8g5YWo5bGA55qEcmVkdXggYWN0aW9uc1xuY29uc3QgYWxsQWN0aW9ucyA9IHt9XG5leHBvcnQgbGV0IHNhZ2FzID0gW11cbmV4cG9ydCBsZXQgcmVkdWNlcnMgPSB7fVxuXG4vLyDojrflj5blhajlsYDnmoRhY3Rpb25cbmNvbnN0IGdldEFjdGlvbiA9IChhY3Rpb25OYW1lKSA9PiBhbGxBY3Rpb25zW2FjdGlvbk5hbWVdXG5cbi8vIOiOt+WPluWFqOWxgOeahHN0YXRlXG5jb25zdCBnZXRTdGF0ZSA9IGZ1bmN0aW9uKihjaGlsZCkge1xuICBjb25zdCBnZXQgPSBzdGF0ZSA9PiBzdGF0ZVtjaGlsZF1cbiAgcmV0dXJuIHlpZWxkIHNlbGVjdChnZXQpXG59XG5cbi8qKlxuICog5Yib5bu6cmVkdWNl5pe26Ieq5Yqo5YWz6IGUc2FnYVxuICovXG5leHBvcnQgZGVmYXVsdCByZWR1eGVyID0+ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHJlZHV4ID0gcmVkdXhlci5jYWxsKG51bGwsIC4uLmFyZ3MpXG4gIGNvbnN0IG5hbWUgPSB1bmRlclNjb3JlVG9DYW1lbChhcmdzWzBdKVxuXG4gIGFsbEFjdGlvbnNbbmFtZV0gPSByZWR1eC5hY3Rpb25zXG4gIHJlZHVjZXJzW25hbWVdID0gcmVkdXgucmVkdWNlclxuXG4gIHJldHVybiBjb25mID0+IHtcbiAgICBjb25zdCB3YXRjaCA9IGNyZWF0ZVdhdGNoZXIocmVkdXgsIGNvbmYpXG4gICAgc2FnYXMucHVzaCh3YXRjaClcbiAgICByZXR1cm4gcmVkdXguYWN0aW9uc1xuICB9XG59XG5cbi8qKlxuICogYWRkIHdhdGNoZXJcbiAqIEBwYXJhbSByZWR1eFxuICogQHBhcmFtIGNvbmZcbiAqIEByZXR1cm4ge0l0ZXJhYmxlSXRlcmF0b3I8Rm9ya0VmZmVjdD59XG4gKi9cbmZ1bmN0aW9uKiBjcmVhdGVXYXRjaGVyKHJlZHV4LCBjb25mKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QocmVkdXgudHlwZXMuU1RBUlQsIGZ1bmN0aW9uKiAoeyBwYXlsb2FkIH0pIHtcbiAgICBjb25mID0gY29uZiB8fCB7fVxuICAgIGxldCB7IHVybCwgZGF0YSwgbWV0aG9kLCBoZWFkZXJzID0ge30sIGV4dHJhY3QgPSB7fSwgb25SZXN1bHQsIG9uQWZ0ZXIsIG9uRXJyb3IsIGZldGNoIH0gPSBjb25mXG5cbiAgICBjb25zdCBjYWxsYmFja0NvbmZpZyA9IHtcbiAgICAgIC4uLmVmZmVjdHMsXG4gICAgICBnZXRBY3Rpb246IGdldEFjdGlvbixcbiAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gdXJs5aSE55CGXG4gICAgICB1cmwgPSB0eXBlb2YgdXJsID09PSAnZnVuY3Rpb24nID8geWllbGQgdXJsKHBheWxvYWQsIGNhbGxiYWNrQ29uZmlnKSA6IHVybFxuICAgICAgbWV0aG9kID0gbWV0aG9kID8gbWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJ1xuXG4gICAgICAvLyBkYXRh5aSE55CGXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSA9IHlpZWxkIGRhdGEocGF5bG9hZCwgY2FsbGJhY2tDb25maWcpXG4gICAgICB9XG5cbiAgICAgIC8vIEdFVOaWueazleS4i++8jGRhdGHlkIjlubbliLB1cmzkuK1cbiAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnICYmIGRhdGEpIHtcbiAgICAgICAgdXJsICs9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnXG4gICAgICAgIHVybCArPSBvYmoycGFyYW1zKGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGxldCByZXN1bHRcblxuICAgICAgLy8gZmV0Y2jmlrnms5XmmK/lkKblrprkuYlcbiAgICAgIGNvbnN0IGZldGNoTWV0aG9kID0gZmV0Y2ggPyBmZXRjaCA6IG9wdGlvbnMuZmV0Y2hNZXRob2RcbiAgICAgIGlmIChmZXRjaE1ldGhvZCAmJiB1cmwpIHtcbiAgICAgICAgcmVzdWx0ID0geWllbGQgY2FsbChmZXRjaE1ldGhvZCwge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgIC4uLmV4dHJhY3QsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIGRhdGEgaGFuZGxlclxuICAgICAgaWYgKG9uUmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrUmVzdWx0ID0geWllbGQgY2FsbChvblJlc3VsdCwgcmVzdWx0LCBwYXlsb2FkLCBjYWxsYmFja0NvbmZpZylcblxuICAgICAgICAvLyDliKTmlq1mYWxsYmFja1Jlc3VsdOS4jeaYr251bGwsIHVuZGVmaW5lZCwg5Y2z5L2/5piv56m65Lmf6KaB6YeH55SoXG4gICAgICAgIHJlc3VsdCA9IG5vdE51bGxPclVuZGVmaWVuZChmYWxsYmFja1Jlc3VsdClcbiAgICAgICAgICA/IGZhbGxiYWNrUmVzdWx0XG4gICAgICAgICAgOiByZXN1bHRcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b0FjdGlvbnNcbiAgICAgIGlmIChvcHRpb25zLmF1dG9BY3Rpb25zKSB7XG4gICAgICAgIHlpZWxkIHB1dChyZWR1eC5hY3Rpb25zLnN1Y2Nlc3MocmVzdWx0KSlcbiAgICAgIH1cblxuICAgICAgLy8gYWZ0ZXIgZGF0YSBoYW5kbGVkIGNhbGxiYWNrXG4gICAgICBpZiAob25BZnRlcikge1xuICAgICAgICB5aWVsZCBjYWxsKG9uQWZ0ZXIsIHJlc3VsdCwgcGF5bG9hZCwgY2FsbGJhY2tDb25maWcpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBhdXRvQWN0aW9uc1xuICAgICAgaWYgKG9wdGlvbnMuYXV0b0FjdGlvbnMpIHtcbiAgICAgICAgeWllbGQgcHV0KHJlZHV4LmFjdGlvbnMucmVzZXQoKSlcbiAgICAgIH1cblxuICAgICAgLy8gZXJyb3IgaGFuZGxlclxuICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgeWllbGQgY2FsbChvbkVycm9yLCBlcnIsIHBheWxvYWQsIGNhbGxiYWNrQ29uZmlnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuXG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdzZWFtbGVzcy1pbW11dGFibGUnXG5cbi8qKlxuICogQGRlc2Mgbm9ybWFsXG4gKiBAcGFyYW0gYWN0aW9uTmFtZSB7c3RyaW5nfSwgZS5nLiBsb2FkX2l0ZW1cbiAqIEBwYXJhbSAgZGVmYXVsdERhdGEge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkUmVkdXggPSAoYWN0aW9uTmFtZSwgZGVmYXVsdERhdGEgPSB7fSkgPT4ge1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSAoKSA9PlxuICAgIEltbXV0YWJsZSh7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgcGFyYW1zOiBudWxsLFxuICAgICAgZGF0YToge30sXG4gICAgICAuLi5kZWZhdWx0RGF0YSxcbiAgICB9KVxuXG4gIGNvbnN0IFNUQVJUID0gYCR7YWN0aW9uTmFtZX1fU1RBUlRgXG4gIGNvbnN0IFNVQ0NFU1MgPSBgJHthY3Rpb25OYW1lfV9TVUNDRVNTYFxuICBjb25zdCBFUlJPUiA9IGAke2FjdGlvbk5hbWV9X0VSUk9SYFxuICBjb25zdCBSRVNFVCA9IGAke2FjdGlvbk5hbWV9X1JFU1RgXG5cbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVBY3Rpb24oU1RBUlQsIChwYXJhbXMgPSBudWxsKSA9PiAoe3BhcmFtc30pKVxuICBjb25zdCByZXNldCA9IGNyZWF0ZUFjdGlvbihSRVNFVClcbiAgY29uc3Qgc3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihTVUNDRVNTLCBkYXRhID0+ICh7IGRhdGEgfSkpXG4gIGNvbnN0IGVycm9yID0gY3JlYXRlQWN0aW9uKEVSUk9SLCBlcnJvck1lc3NhZ2UgPT4gKHsgZXJyb3JNZXNzYWdlIH0pKVxuXG4gIGNvbnN0IHJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zKFxuICAgIHtcbiAgICAgIFtTVEFSVF06IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICBzdGF0ZS5tZXJnZSh7XG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgcGFyYW1zOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5wYXJhbXMsXG4gICAgICAgIH0pLFxuICAgICAgW1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgc3RhdGUubWVyZ2Uoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0pLFxuICAgICAgW0VSUk9SXTogKHN0YXRlLCBhY3Rpb24pID0+XG4gICAgICAgIEltbXV0YWJsZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgICAgW1JFU0VUXTogKHN0YXRlLCBhY3Rpb24pID0+IGluaXRpYWxTdGF0ZSgpLFxuICAgIH0sXG4gICAgaW5pdGlhbFN0YXRlKCksXG4gIClcblxuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHN0YXJ0LFxuICAgICAgc3VjY2VzcyxcbiAgICAgIGVycm9yLFxuICAgICAgcmVzZXQsXG4gICAgfSxcbiAgICB0eXBlczoge1xuICAgICAgU1RBUlQsXG4gICAgICBTVUNDRVNTLFxuICAgICAgRVJST1IsXG4gICAgICBSRVNFVCxcbiAgICB9LFxuICAgIHJlZHVjZXIsXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGFjdGlvbk5hbWUge3N0cmluZ30sIGUuZy4gbGlzdF92ZWhpY2xlXG4gKiBAcGFyYW0gZGVmYXVsdERhdGEge29iamVjdH1cbiAqIEByZXR1cm4ge3t0eXBlczoge1NVQ0NFU1M6IHN0cmluZywgU1RBUlQ6IHN0cmluZywgRVJST1I6IHN0cmluZywgUkVTRVQ6IHN0cmluZ30sIHJlZHVjZXI6IEZ1bmN0aW9uLCBhY3Rpb25zOlxuICogICB7c3VjY2VzczogYWN0aW9uQ3JlYXRvciwgc3RhcnQ6IGFjdGlvbkNyZWF0b3IsIHJlc2V0OiBhY3Rpb25DcmVhdG9yLCBlcnJvcjogYWN0aW9uQ3JlYXRvcn19fVxuICovXG5leHBvcnQgY29uc3QgYnVpbGRMaXN0UmVkdXggPSAoYWN0aW9uTmFtZSwgZGVmYXVsdERhdGEgPSB7fSkgPT4ge1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSAoKSA9PlxuICAgIEltbXV0YWJsZSh7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICB0b3RhbF9jb3VudDogMCxcbiAgICAgICAgdG90YWxfcGFnZTogMCxcbiAgICAgICAgZW50cmllczogW10sXG4gICAgICB9LFxuICAgICAgLi4uZGVmYXVsdERhdGEsXG4gICAgfSlcblxuICBjb25zdCBTVEFSVCA9IGAke2FjdGlvbk5hbWV9X0xJU1RfU1RBUlRgXG4gIGNvbnN0IFNVQ0NFU1MgPSBgJHthY3Rpb25OYW1lfV9MSVNUX1NVQ0NFU1NgXG4gIGNvbnN0IFJFU0VUID0gYFJFU0VUXyR7YWN0aW9uTmFtZX1fTElTVGBcbiAgY29uc3QgRVJST1IgPSBgJHthY3Rpb25OYW1lfV9MSVNUX0VSUk9SYFxuXG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlQWN0aW9uKFNUQVJULCAocGFnZSwgbGltaXQsIHBhcmFtcykgPT4gKHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHBhcmFtcyxcbiAgfSkpXG4gIGNvbnN0IHN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oU1VDQ0VTUywgZGF0YSA9PiAoeyBkYXRhIH0pKVxuICBjb25zdCByZXNldCA9IGNyZWF0ZUFjdGlvbihSRVNFVClcbiAgY29uc3QgZXJyb3IgPSBjcmVhdGVBY3Rpb24oRVJST1IpXG5cbiAgY29uc3QgcmVkdWNlciA9IGhhbmRsZUFjdGlvbnMoXG4gICAge1xuICAgICAgW1NUQVJUXTogKHN0YXRlLCBhY3Rpb24pID0+XG4gICAgICAgIHN0YXRlLm1lcmdlKHtcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIHBhcmFtczogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQucGFyYW1zLFxuICAgICAgICB9KSxcbiAgICAgIFtTVUNDRVNTXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1lcmdlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgW0VSUk9SXTogc3RhdGUgPT4gc3RhdGUubWVyZ2UoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWUsIHN1Y2Nlc3M6IGZhbHNlIH0pLFxuICAgICAgW1JFU0VUXTogc3RhdGUgPT4gaW5pdGlhbFN0YXRlKCksXG4gICAgfSxcbiAgICBpbml0aWFsU3RhdGUoKSxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcmVkdWNlcixcbiAgICB0eXBlczoge1xuICAgICAgU1RBUlQsXG4gICAgICBTVUNDRVNTLFxuICAgICAgUkVTRVQsXG4gICAgICBFUlJPUixcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIHN0YXJ0LFxuICAgICAgc3VjY2VzcyxcbiAgICAgIGVycm9yLFxuICAgICAgcmVzZXQsXG4gICAgfSxcbiAgfVxufVxuIiwiLy8g5Yid5aeL5YyW6YWN572uXG5cbi8vIGV4cG9ydCBsZXQgb3B0aW9ucyA9IHtcbi8vICAgbG9nZ2VyOiB0cnVlLCAvLyByZWR1eC1sb2dnZXJcbi8vICAgZmV0Y2hNZXRob2Q6IG51bGwsIC8vIGZldGNo6K+35rGCXG4vLyAgIGhpc3Rvcnk6ICdicm93c2VyJywgLy8gYnJvd3NlciwgaGFzaCwgbWVtb3J5LCBub25lXG4vLyAgIGF1dG9BY3Rpb25zOiB0cnVlLFxuLy8gICBtaWRkbGV3YXJlOiBbXSwgLy8gbWlkZGxld2FyZVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWcob3B0cykge1xuLy8gICBvcHRpb25zID0ge1xuLy8gICAgIC4uLm9wdGlvbnMsXG4vLyAgICAgLi4ub3B0c1xuLy8gICB9XG4vLyAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4vLyB9XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBsb2dnZXI6IHRydWUsIC8vIHJlZHV4LWxvZ2dlclxuICBmZXRjaE1ldGhvZDogbnVsbCwgLy8gZmV0Y2jor7fmsYJcbiAgaGlzdG9yeTogJ2Jyb3dzZXInLCAvLyBicm93c2VyLCBoYXNoLCBtZW1vcnksIG5vbmVcbiAgYXV0b0FjdGlvbnM6IHRydWUsXG4gIG1pZGRsZXdhcmU6IFtdLCAvLyBtaWRkbGV3YXJlXG59XG5cbmV4cG9ydCBjb25zdCBnZXRPcHRpb25zID0gKCkgPT4ge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICAuLi5kZWZhdWx0T3B0aW9uc1xuICB9XG5cbiAgcmV0dXJuIChvcHRzKSA9PiB7XG4gICAgaWYgKG9wdHMpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC4uLm9wdHNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0gZ2V0T3B0aW9ucygpXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IGNvbmZpZygpXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB7IHJlZHVjZXJzLCBzYWdhcyB9IGZyb20gJy4vY29ubmVjdFNhZ2FzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9zZXR0aW5ncydcblxuY29uc3Qgb3B0aW9ucyA9IGNvbmZpZygpXG5jb25zb2xlLmxvZygnbycsIG9wdGlvbnMpXG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuXG5jb25zdCBjcmVhdGVSb290UmVkdWNlciA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gY29tYmluZVJlZHVjZXJzKHtcbiAgICAuLi5yZWR1Y2VycyxcbiAgfSlcbn1cblxuY29uc3QgY29tYmluZU1pZGRsZXdhcmUgPSAoKSA9PiB7XG4gIGxldCBtaWRkbGVXYXJlID0gW1xuICAgIHNhZ2FNaWRkbGV3YXJlLFxuICBdXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3B0aW9ucy5taWRkbGV3YXJlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIG1pZGRsZVdhcmUgPSBbLi4ubWlkZGxlV2FyZSwgLi4ub3B0aW9ucy5taWRkbGV3YXJlXVxuICB9XG4gIGlmIChvcHRpb25zLmxvZ2dlcikge1xuICAgIG1pZGRsZVdhcmUucHVzaChsb2dnZXIpXG4gIH1cbiAgcmV0dXJuIGNvbXBvc2UoXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZVdhcmUpLFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGNyZWF0ZVJvb3RSZWR1Y2VyKHJlZHVjZXJzKSxcbiAgICBpbml0U3RhdGUsXG4gICAgY29tYmluZU1pZGRsZXdhcmUoKSxcbiAgKVxuICBzYWdhTWlkZGxld2FyZS5ydW4oZnVuY3Rpb24qIHJvb3RTYWdhKGdldFN0YXRlKSB7XG4gICAgeWllbGQgYWxsKHNhZ2FzKVxuICB9KVxuXG4gIHJldHVybiBzdG9yZVxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==