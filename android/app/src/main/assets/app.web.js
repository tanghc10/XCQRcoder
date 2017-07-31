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

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(9),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "F:\\githubFile\\XCQRcoder\\src\\scanner.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] scanner.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-018b95ff", Component.options)
	  } else {
	    hotAPI.reload("data-v-018b95ff", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("0ce7eeff", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-018b95ff!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scanner.vue", function() {
	     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-018b95ff!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scanner.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.wrapper { align-items: center;\n}\n.scanner-container {align-items: center;margin-top: 100px\n}\n.title { font-size: 48px;\n}\n.counter{font-size: 48px\n}\n.logo { width: 360px; height: 82px;\n}\n.scanner{width: 500px;height: 500px;margin: 50px\n}\n.button{width: 200px;height: 50px;font-size: 100px;margin-top: 20px;text-align: center;background-color: green\n}\n.input{width: 400px;height: 40px;background-color: gray\n}\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper",
	    on: {
	      "click": _vm.update
	    }
	  }, [_c('div', {
	    staticClass: "scanner-container"
	  }, [_c('text', {
	    staticClass: "counter"
	  }, [_vm._v(_vm._s(_vm.totalIMEI == 0 ? '--' : _vm.totalIMEI))]), _vm._v(" "), _c('wxscanner', {
	    ref: "scanner",
	    staticClass: "scanner"
	  })], 1), _vm._v(" "), _c('div', [_c('text', [_vm._v("生产批次")]), _vm._v(" "), _c('input', {
	    staticClass: "input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Input Text"
	    },
	    on: {
	      "change": _vm.pbchange
	    }
	  })]), _vm._v(" "), _c('div', [_c('text', [_vm._v("产品类别")]), _vm._v(" "), _c('input', {
	    staticClass: "input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Input Text"
	    },
	    on: {
	      "change": _vm.ptchange
	    }
	  })]), _vm._v(" "), _c('div', [_c('text', [_vm._v("产品代别")]), _vm._v(" "), _c('input', {
	    staticClass: "input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Input Text"
	    },
	    on: {
	      "change": _vm.pgchange
	    }
	  })]), _vm._v(" "), _c('button', {
	    staticClass: "button",
	    on: {
	      "click": function($event) {
	        _vm.send()
	      }
	    }
	  }, [_vm._v("发送")]), _vm._v(" "), _c('button', {
	    staticClass: "button",
	    on: {
	      "click": function($event) {
	        _vm.clear()
	      }
	    }
	  }, [_vm._v("清除数据")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-018b95ff", module.exports)
	  }
	}

/***/ })
/******/ ]);