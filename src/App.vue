<template>
  <div id="app">
    <div id="nav">
      <select class="custom-select" style="width:200px" v-model="view">
        <option value>請選擇元件</option>
        <option v-for="(item,i) in list" :value="item">{{item}}</option>
      </select>
    </div>
    <div>
      <template v-if="view !== ''">
        <components :is="view" />
      </template>
    </div>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import camelCase from "lodash/camelCase";

export default {
  name: "",
  props: {},
  data: function() {
    // 資料
    return {
      view: "",
      list: []
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    // 全部元件
    const requireComponent = require.context("@/components", true, /\.vue$/);

    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName);
      let componentName = camelCase(
        fileName.replace(/^\.\//, "").replace(/\.\w+$/, "")
      );
      this.list.push(`f2e-${componentName}`);
    });
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: function() {
    //元素已掛載， el 被建立。
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
};
</script>

<style lang="scss" scoped>
// 有用到bootstrap需引入
@import '@/assets/scss/style.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  z-index: 99999;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
