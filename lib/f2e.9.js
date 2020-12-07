(window["f2e_jsonp"] = window["f2e_jsonp"] || []).push([[9],{

/***/ "2192":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8bb1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("f21af7d6", content, shadowRoot)
};

/***/ }),

/***/ "4f91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9a7f2fa2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/test/pageChange.vue?vue&type=template&id=02d6894a&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(_vm._s(_vm.name)+"-page "),_c('div',{staticClass:"container-fluid py-2"},[_c('nav',{attrs:{"aria-label":"Demo of Bootstrap 4 Navigation"}},[_c('ul',{staticClass:"pagination"},[_c('li',{staticClass:"page-item",staticStyle:{"z-index":"2"},on:{"click":function($event){return _vm.pageDet()}}},[_vm._m(0)]),_c('li',[_c('div',[_c('div',{staticStyle:{"width":"239px","overflow":"hidden"},attrs:{"id":"pageSize"}},[_c('ul',{staticClass:"pagination",staticStyle:{"transform":"translateX(0px)"},attrs:{"id":"pagination-demo"}},_vm._l((_vm.list),function(item,i){return _c('li',{key:i,class:['page-item',(_vm.now_page)===i+1 ?'active':''],on:{"click":function($event){return _vm.pageSize(i+1)}}},[_c('a',{staticClass:"page-link"},[_vm._v(_vm._s(i+1))])])}),0)])])]),_c('li',{staticClass:"page-item",staticStyle:{"z-index":"2"},on:{"click":function($event){return _vm.pageAdd()}}},[_vm._m(1)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"page-link"},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("«")]),_c('span',{staticClass:"sr-only"},[_vm._v("Previous")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"page-link"},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("»")]),_c('span',{staticClass:"sr-only"},[_vm._v("Next")])])}]


// CONCATENATED MODULE: ./src/components/test/pageChange.vue?vue&type=template&id=02d6894a&scoped=true&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/lodash/fill.js
var fill = __webpack_require__("a1d1");
var fill_default = /*#__PURE__*/__webpack_require__.n(fill);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("1157");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/test/pageChange.vue?vue&type=script&lang=js&shadow


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


/* harmony default export */ var pageChangevue_type_script_lang_js_shadow = ({
  name: "test1",
  props: {
    name: {
      type: String,
      default: 'GGGGG'
    },
    max: {
      type: Number,
      default: function () {
        return 6;
      }
    }
  },
  data: function () {
    return {
      min: 0,
      now_page: 1,
      // 當下頁面
      list: []
    };
  },

  created() {
    this.list = fill_default()(Array(this.max), 0); // console.log(">>>>>",_fill(Array(3), 2))
  },

  watch: {},
  methods: {
    pageSize(page) {
      this.pageLine(page);
    },

    pageLine(page) {
      var w = 34; // 每格的寬度

      var bef_posx = jquery_default()('#pagination-demo').css('transform').split(/[()]/)[1].split(',')[4];
      var num = 0;

      if (this.now_page > page) {
        num = w * (this.now_page - page);
      } else {
        num = -1 * w * (page - this.now_page);
      }

      console.log("width", jquery_default()('#pagination-demo').css('width')); // console.log(bef_posx,page)

      var max_width = (Number(jquery_default()('#pagination-demo').css('width').replace("px", "")) + w * 3) * -1;
      var size = num + Number(bef_posx);
      size = size > 0 ? 0 : size;
      console.log("max_width", max_width, jquery_default()('#pagination-demo').css('width'), size);
      size = size < max_width ? max_width : size;

      if (page > this.min + 3) {
        // num += 64
        console.log("A:", size);
        document.getElementById("pagination-demo").style.transform = "translateX(" + size + "px)";
      } else if (page <= this.min + 3) {
        size = 0;
        console.log("B:", size);
        document.getElementById("pagination-demo").style.transform = "translateX(" + size + "px)";
      }

      var after_posx = jquery_default()('#pagination-demo').css('transform').split(/[()]/)[1].split(',')[4];
      console.log("after", after_posx, num);
      this.now_page = page;
    },

    //
    pageAdd() {
      // console.log('++',this.now_page)
      if (this.now_page + 1 > this.max) return;
      this.pageSize(parseInt(this.now_page) + 1);
    },

    pageDet() {
      if (this.now_page - 1 <= this.min) return;
      this.pageSize(parseInt(this.now_page) - 1);
    }

  }
});
// CONCATENATED MODULE: ./src/components/test/pageChange.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var test_pageChangevue_type_script_lang_js_shadow = (pageChangevue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/test/pageChange.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("a0e7")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  test_pageChangevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "02d6894a",
  null
  ,true
)

/* harmony default export */ var pageChangeshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8bb1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div[data-v-02d6894a]{color:#00f}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a0e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageChange_vue_vue_type_style_index_0_id_02d6894a_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2192");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageChange_vue_vue_type_style_index_0_id_02d6894a_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageChange_vue_vue_type_style_index_0_id_02d6894a_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageChange_vue_vue_type_style_index_0_id_02d6894a_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageChange_vue_vue_type_style_index_0_id_02d6894a_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageChange_vue_vue_type_style_index_0_id_02d6894a_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=f2e.9.js.map