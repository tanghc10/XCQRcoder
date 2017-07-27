// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/yangxu/Documents/workspace/weex/XCQRcoder/src/views/scanner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-235cef48"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

	module.exports = {
	  "total-container": {
	    "width": 750,
	    "height": 200,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "scanner-container": {
	    "width": 750,
	    "height": 600,
	    "flexDirection": "row",
	    "backgroundColor": "#008000",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "scanner": {
	    "width": 400,
	    "height": 400,
	    "backgroundColor": "#FF0000"
	  },
	  "button-container": {
	    "height": 150,
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "button": {
	    "fontSize": 35,
	    "backgroundColor": "#D3D3D3",
	    "borderRadius": 10
	  }
	}

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: {
	        total: 0
	    },
	    methods: {
	        clearIMEIList: function clearIMEIList() {},
	        gotoSendData: function gotoSendData() {}
	    }

	};
	module.exports = exports["default"];

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["total-container"]
	  }, [_c('text', [_vm._v("已扫描设备数:" + _vm._s(_vm.total == 0 ? '--' : _vm.total))])]), _vm._m(0), _c('div', [_c('div', {
	    staticClass: ["button-container"]
	  }, [_c('button', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.clearIMEIList
	    }
	  }, [_vm._v("清除数据")])], 1), _c('div', {
	    staticClass: ["button-container"]
	  }, [_c('button', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.gotoSendData
	    }
	  }, [_vm._v("上传设备列表")])], 1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["scanner-container"]
	  }, [_c('div', {
	    staticClass: ["scanner"]
	  }, [_c('text')])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });