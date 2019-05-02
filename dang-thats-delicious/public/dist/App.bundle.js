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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Couldn't find preset \"@babel/preset-env\" relative to directory \"/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/css-loader\"\n    at /home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)\n    at OptionManager.mergePresets (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)\n    at OptionManager.mergeOptions (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)\n    at OptionManager.init (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\n    at File.initOptions (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-loader/lib/index.js:46:20)\n    at Object.module.exports (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/babel-loader/lib/index.js:155:20)\n    at runLoaders (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at /home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:205:4\n    at /home/wurst/slipsnip/Learn-Node/dang-thats-delicious/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at processTicksAndRejections (internal/process/task_queues.js:79:9)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _bling = __webpack_require__(0);

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map