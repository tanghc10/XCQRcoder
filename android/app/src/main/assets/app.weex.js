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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _scanner = __webpack_require__(1);

	var _scanner2 = _interopRequireDefault(_scanner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_scanner2.default.el = '#root';
	exports.default = new Vue(_scanner2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
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
	__vue_options__.__file = "F:\\githubFile\\XCQRcoder\\src\\scanner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-50d57a20"
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "alignItems": "center"
	  },
	  "scanner-container": {
	    "alignItems": "center",
	    "marginTop": 100
	  },
	  "title": {
	    "fontSize": 48
	  },
	  "counter": {
	    "fontSize": 48
	  },
	  "logo": {
	    "width": 360,
	    "height": 82
	  },
	  "scanner": {
	    "width": 500,
	    "height": 500,
	    "margin": 50
	  },
	  "button": {
	    "width": 200,
	    "height": 50,
	    "fontSize": 100,
	    "marginTop": 20,
	    "textAlign": "center",
	    "backgroundColor": "#008000"
	  },
	  "input": {
	    "width": 400,
	    "height": 40,
	    "backgroundColor": "#808080"
	  }
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	var navigator = weex.requireModule('navigator');
	var globalEvent = weex.requireModule('globalEvent');
	var storage = weex.requireModule('storage');
	var http = weex.requireModule('http');
	var modal = weex.requireModule('modal');
	exports.default = {
	  created: function created() {
	    var that = this;
	    globalEvent.addEventListener('scannerEvent', function (e) {
	      console.log(e);
	      that.getScannerString(e);
	    });
	    storage.getItem('IMEIList', function (event) {
	      var IMEIList = event.data;
	      console.log('--data--' + IMEIList);
	      if (IMEIList) {
	        IMEIList = that.getArrayWithString(IMEIList);
	        that.totalIMEI = IMEIList.length;
	      }
	    });
	  },

	  data: {
	    target: 'World',
	    totalIMEI: 0,
	    pbValue: 0,
	    ptValue: 0,
	    pgValue: 0
	  },
	  methods: {
	    update: function update(e) {
	      this.target = 'Weex';
	      console.log('target:', this.target);
	    },
	    jump: function jump() {
	      var scanPageURL = this.getBaseUrl(weex.config.bundleUrl) + '/' + 'sendPage.weex.js';
	      console.log('------weex config url', weex.config.bundleUrl);
	      console.log('------scan url', scanPageURL);
	      navigator.push({
	        url: scanPageURL,
	        animated: "true"
	      }, function (event) {
	        console.log({ message: 'callback: ' + event });
	      });
	    },
	    getBaseUrl: function getBaseUrl(url) {
	      var urlArray = url.split('/');
	      var newArray = urlArray.slice(0, urlArray.length - 1);
	      return newArray.join('/');
	    },
	    getScannerString: function getScannerString(result) {
	      console.log(result);
	      var string = result.result;
	      var newIMEI = void 0;
	      if (string.IMEI) {
	        newIMEI = string.IMEI;
	      } else {
	        var strArray = string.split(';');
	        console.log('array' + strArray);
	        console.log(strArray.length);
	        if (strArray.length > 2) {
	          console.log('--------- ');
	          var IMEIString = strArray[2];
	          console.log('------' + IMEIString);
	          if (IMEIString.indexOf('IMEI') >= 0) {
	            console.log('string' + IMEIString);
	            newIMEI = IMEIString.split(':')[1];
	          }
	        }
	      }
	      console.log(newIMEI);
	      if (typeof newIMEI != "undefined") this.dealWithIMEI(newIMEI);
	    },
	    getStringWithArray: function getStringWithArray(array) {
	      console.log('----getStr----', array);
	      var str = '';
	      for (var i = 0; i < array.length; i++) {
	        console.log('----IMEI----', array[i]);
	        str = str + array[i] + '\n';
	      }
	      console.log('----result----', str);
	      return str;
	    },
	    getArrayWithString: function getArrayWithString(string) {
	      var array = string.split('\n');
	      return array.slice(0, array.length - 1);
	    },
	    dealWithIMEI: function dealWithIMEI(IMEI) {
	      var _this = this;

	      storage.getItem('IMEIList', function (event) {
	        var IMEIList = event.data;
	        console.log('--data--' + IMEIList);
	        console.log(typeof IMEIList === 'undefined' ? 'undefined' : _typeof(IMEIList));
	        if (typeof IMEIList != "undefined") {
	          IMEIList = _this.getArrayWithString(IMEIList);
	          console.log('storaged data -- -- --', IMEIList);
	          for (var i = 0; i < IMEIList.length; i++) {
	            if (IMEIList[i] == IMEI) {
	              return;
	            }
	          }
	          _this.totalIMEI++;
	          IMEIList.push(IMEI);
	          IMEIList = _this.getStringWithArray(IMEIList);
	          storage.setItem('IMEIList', IMEIList);
	        } else {
	          IMEIList = new Array(IMEI);
	          console.log('---imeilist', IMEIList);
	          IMEIList = _this.getStringWithArray(IMEIList);
	          storage.setItem('IMEIList', IMEIList, function (event) {
	            console.log('set success', event.data);
	            _this.totalIMEI++;
	          });
	        }
	        console.log('----storge----' + event.data);
	      });
	    },
	    pbchange: function pbchange(event) {
	      this.pbValue = event.value;
	    },
	    ptchange: function ptchange(event) {
	      this.ptValue = event.value;
	    },
	    pgchange: function pgchange(event) {
	      this.pgValue = event.value;
	    },
	    send: function send() {
	      var _this2 = this;

	      console.log(this.pbValue, this.ptValue, this.pgValue);
	      var that = this;
	      storage.getItem('IMEIList', function (event) {
	        var IMEIList = event.data;
	        console.log('--data--' + IMEIList);
	        if (IMEIList) {
	          IMEIList = _this2.getArrayWithString(IMEIList);
	          var sendParam = '{"imeiList":[' + IMEIList + '],';
	          console.log("sendParam1:  " + sendParam);
	          sendParam = sendParam + '"pb":"' + that.pbValue + '","pt":"' + that.ptValue + '","pg":"' + that.pgValue + '"}';
	          console.log("sendParam2:  " + sendParam);
	          var param = '{"url":"https://test.xiaoan110.com/scm/procedure/imei2Sn","sendParam":' + sendParam + '}';
	          console.log("param:  " + param);
	          // let param = new Map();
	          // let sendParam = new Map();
	          // sendParam.imeiList = IMEIList;
	          // sendParam.pb = that.pbValue;
	          // sendParam.pt = that.ptValue;
	          // sendParam.pg = that.pgValue;
	          // param.url = 'https://test.xiaoan110.com/scm/procedure/imei2Sn';
	          // param.sendParam = sendParam;
	          http.postwithDic(param, function (res) {
	            console.log("response:" + res);
	            var obj = JSON.parse(res);
	            var result = obj.suc;
	            console.log("result:" + result);
	            modal.alert({ message: result ? '上传成功' : '上传失败' });
	          });
	        }
	      });
	    },
	    clear: function clear() {
	      var that = this;
	      modal.confirm({
	        message: '确认清除所有扫码设备？',
	        okTitle: '确认',
	        cancelTitle: '取消'
	      }, function (e) {
	        if (e == '确认') {
	          storage.removeItem("IMEIList", function (e) {
	            if (typeof e.data == "undefined") {
	              that.totalIMEI = 0;
	            }
	          });
	        }
	      });
	    }
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"],
	    on: {
	      "click": _vm.update
	    }
	  }, [_c('div', {
	    staticClass: ["scanner-container"]
	  }, [_c('text', {
	    staticClass: ["counter"]
	  }, [_vm._v(_vm._s(_vm.totalIMEI == 0 ? '--' : _vm.totalIMEI))]), _c('wxscanner', {
	    ref: "scanner",
	    staticClass: ["scanner"]
	  })], 1), _c('div', [_c('text', [_vm._v("生产批次")]), _c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "Input Text"
	    },
	    on: {
	      "change": _vm.pbchange
	    }
	  })]), _c('div', [_c('text', [_vm._v("产品类别")]), _c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "Input Text"
	    },
	    on: {
	      "change": _vm.ptchange
	    }
	  })]), _c('div', [_c('text', [_vm._v("产品代别")]), _c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "Input Text"
	    },
	    on: {
	      "change": _vm.pgchange
	    }
	  })]), _c('button', {
	    staticClass: ["button"],
	    on: {
	      "click": function($event) {
	        _vm.send()
	      }
	    }
	  }, [_vm._v("发送")]), _c('button', {
	    staticClass: ["button"],
	    on: {
	      "click": function($event) {
	        _vm.clear()
	      }
	    }
	  }, [_vm._v("清除数据")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);