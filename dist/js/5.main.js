(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Music.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Music.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  data () {\r\n    return {\r\n      randomNumber: 0\r\n    }\r\n  },\r\n  methods: {\r\n    getRandomInt (min, max) {\r\n      min = Math.ceil(min)\r\n      max = Math.floor(max)\r\n      return Math.floor(Math.random() * (max - min + 1)) + min\r\n    },\r\n    getRandom () {\r\n      // this.randomNumber = this.getRandomInt(1, 100)\r\n      this.randomNumber = this.getRandomFromBackend()\r\n    },\r\n    getRandomFromBackend () {\r\n      const path = `http://localhost:5000/api/random`\r\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path)\r\n      .then(response => {\r\n        this.randomNumber = response.data.randomNumber\r\n      })\r\n      .catch(error => {\r\n        console.log(error)\r\n      })\r\n    }\r\n  },\r\n  created () {\r\n    this.getRandom()\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/Music.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Music.vue?vue&type=template&id=06073fa5&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Music.vue?vue&type=template&id=06073fa5& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-card\",\n    { staticClass: \"d-flex align-center\", attrs: { dark: \"\", height: \"200\" } },\n    [\n      _c(\"v-scroll-y-transition\", [\n        _c(\"div\", { staticClass: \"display-3 flex-grow-1 text-center\" }, [\n          _vm._v(\"\\n        Music will be here soon!\\n      \")\n        ])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Music.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/Music.vue":
/*!**********************************!*\
  !*** ./src/components/Music.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Music_vue_vue_type_template_id_06073fa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Music.vue?vue&type=template&id=06073fa5& */ \"./src/components/Music.vue?vue&type=template&id=06073fa5&\");\n/* harmony import */ var _Music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Music.vue?vue&type=script&lang=js& */ \"./src/components/Music.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Music_vue_vue_type_template_id_06073fa5___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Music_vue_vue_type_template_id_06073fa5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Music.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Music.vue?");

/***/ }),

/***/ "./src/components/Music.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Music.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Music.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/Music.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Music.vue?");

/***/ }),

/***/ "./src/components/Music.vue?vue&type=template&id=06073fa5&":
/*!*****************************************************************!*\
  !*** ./src/components/Music.vue?vue&type=template&id=06073fa5& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_template_id_06073fa5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Music.vue?vue&type=template&id=06073fa5& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Music.vue?vue&type=template&id=06073fa5&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_template_id_06073fa5___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_template_id_06073fa5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Music.vue?");

/***/ })

}]);