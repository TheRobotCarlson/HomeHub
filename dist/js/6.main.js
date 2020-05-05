(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Photos.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Photos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    data () {\r\n        return {\r\n            imageIndex: 0,\r\n            imageTimeout: 5000,\r\n            images: null,\r\n            imageScrollActive: true,\r\n            activeImage: null,\r\n            height: 700\r\n        }\r\n    },\r\n    methods: {\r\n        prevImage(){\r\n            this.imageIndex = this.imageIndex - 1;\r\n\r\n            if(this.imageIndex <= 0){\r\n               this.imageIndex = this.images.length - 1; \r\n            }\r\n\r\n            this.activeImage = this.images[this.imageIndex];\r\n        },\r\n        nextImage(){\r\n            this.imageIndex = this.imageIndex + 1;\r\n\r\n            if(this.imageIndex >= this.images.length){\r\n               this.imageIndex = 0; \r\n            }\r\n\r\n            this.activeImage = this.images[this.imageIndex];\r\n        },\r\n        scrollImages(){\r\n            if(this.imageScrollActive){\r\n                this.nextImage();\r\n                setTimeout(\r\n                    this.scrollImages,\r\n                    this.imageTimeout\r\n                );\r\n            }\r\n        },\r\n        getImagesFromBackend () {\r\n            const path = `http://localhost:5000/api/images`\r\n                axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path)\r\n                .then(response => {\r\n                this.images = response.data.imageList\r\n                this.activeImage = this.images[0];\r\n            })\r\n            .catch(error => {\r\n                console.log(error)\r\n            })\r\n        }\r\n    },\r\n    created () {\r\n        this.getImagesFromBackend();\r\n\r\n        setTimeout(\r\n            this.scrollImages,\r\n            this.imageTimeout\r\n        );\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/Photos.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Photos.vue?vue&type=template&id=626df39e&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Photos.vue?vue&type=template&id=626df39e& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.activeImage\n    ? _c(\"v-img\", {\n        key: _vm.activeImage,\n        attrs: {\n          eager: true,\n          src: _vm.activeImage,\n          contain: \"\",\n          \"max-height\": _vm.height\n        }\n      })\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Photos.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/Photos.vue":
/*!***********************************!*\
  !*** ./src/components/Photos.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Photos_vue_vue_type_template_id_626df39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Photos.vue?vue&type=template&id=626df39e& */ \"./src/components/Photos.vue?vue&type=template&id=626df39e&\");\n/* harmony import */ var _Photos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Photos.vue?vue&type=script&lang=js& */ \"./src/components/Photos.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Photos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Photos_vue_vue_type_template_id_626df39e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Photos_vue_vue_type_template_id_626df39e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Photos.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Photos.vue?");

/***/ }),

/***/ "./src/components/Photos.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/Photos.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Photos.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/Photos.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Photos.vue?");

/***/ }),

/***/ "./src/components/Photos.vue?vue&type=template&id=626df39e&":
/*!******************************************************************!*\
  !*** ./src/components/Photos.vue?vue&type=template&id=626df39e& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_template_id_626df39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Photos.vue?vue&type=template&id=626df39e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Photos.vue?vue&type=template&id=626df39e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_template_id_626df39e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_template_id_626df39e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Photos.vue?");

/***/ })

}]);