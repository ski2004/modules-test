<template>
  <!-- 頁籤 -->
  <div class="container-fluid py-2">
    <nav aria-label="Demo of Bootstrap 4 Navigation">
      <ul class="pagination">
        <li class="page-item" @click="pageDet(this)" style="z-index:2;">
          <a class="page-link">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li>
          <div>
            <div style="width: 229px;overflow:hidden;" id="pageSize">
              <ul class="pagination" id="pagination-demo" style="transform:translateX(0px)">
                <li class="page-item active" @click="test(this)">
                  <a class="page-link">1</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">24</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">3</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">4</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">5</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">6</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">7</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">8</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">9</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">10</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">11</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">12</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">13</a>
                </li>
                <li class="page-item" @click="test(this)">
                  <a class="page-link">14</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li class="page-item" @click="pageAdd(this)" style="z-index:2;">
          <a class="page-link">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "f2e-page",
  props: {
    name: {
      type: String,
      default: "GGGGG"
    }
  },
  methods:{
    pageAdd(){

    },
    test(){

    },
    pageDet(){
      
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "@/assets/scss/style.scss";  // 請勿這樣使用
@import '~bootstrap/dist/css/bootstrap.min.css';
div {
  color: blue;
}
</style>