(window["f2e_jsonp"] = window["f2e_jsonp"] || []).push([[4],{

/***/ "0c93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9a7f2fa2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bootstrap/carousel.vue?vue&type=template&id=09cf31f3&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel slide",attrs:{"id":"carouselExampleIndicators","data-ride":"carousel"}},[_vm._m(0),_c('div',{staticClass:"carousel-inner"},[_vm._m(1),_vm._m(2),_vm._m(3),_c('div',{staticClass:"carousel-caption d-none d-md-block"},[_c('h1',[_vm._v(_vm._s(_vm.title))])])]),_vm._m(4),_vm._m(5)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{staticClass:"carousel-indicators"},[_c('li',{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),_c('li',{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),_c('li',{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel-item active"},[_c('img',{staticClass:"d-block w-100",attrs:{"src":"https://cdn01.dcfever.com/articles/news/2018/04/180403_landscapetips_01.jpg","alt":"01"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel-item"},[_c('img',{staticClass:"d-block w-100",attrs:{"src":"https://cdn01.dcfever.com/articles/news/2018/04/180403_landscapetips_09.jpg","alt":"09"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel-item"},[_c('img',{staticClass:"d-block w-100",attrs:{"src":"https://cdn01.dcfever.com/articles/news/2018/04/180403_landscapetips_12.jpg","alt":"12"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"carousel-control-prev",attrs:{"href":"#carouselExampleIndicators","role":"button","data-slide":"prev"}},[_c('span',{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"sr-only"},[_vm._v("Previous")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"carousel-control-next",attrs:{"href":"#carouselExampleIndicators","role":"button","data-slide":"next"}},[_c('span',{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"sr-only"},[_vm._v("Next")])])}]


// CONCATENATED MODULE: ./src/components/bootstrap/carousel.vue?vue&type=template&id=09cf31f3&scoped=true&shadow

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.min.js
var bootstrap_min = __webpack_require__("3e48");

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("1157");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bootstrap/carousel.vue?vue&type=script&lang=js&shadow
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


/* harmony default export */ var carouselvue_type_script_lang_js_shadow = ({
  name: 'f2e-carousel',
  props: {
    title: {
      type: String,
      default: function () {
        return '輪播標題';
      }
    }
  },

  data() {
    return {};
  },

  watch: {},

  mounted() {
    jquery_default()('.carousel').carousel({
      interval: 2000
    });
  }

});
// CONCATENATED MODULE: ./src/components/bootstrap/carousel.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var bootstrap_carouselvue_type_script_lang_js_shadow = (carouselvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/bootstrap/carousel.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("d9cc")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  bootstrap_carouselvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09cf31f3",
  null
  ,true
)

/* harmony default export */ var carouselshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a845":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c64e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("44f2bab8", content, shadowRoot)
};

/***/ }),

/***/ "c64e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__("3073");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d9cc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_09cf31f3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a845");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_09cf31f3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_09cf31f3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_09cf31f3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_09cf31f3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_09cf31f3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=f2e.4.js.map