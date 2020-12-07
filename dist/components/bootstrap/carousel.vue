<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://cdn01.dcfever.com/articles/news/2018/04/180403_landscapetips_01.jpg" class="d-block w-100" alt="01">
      </div>
      <div class="carousel-item">
        <img src="https://cdn01.dcfever.com/articles/news/2018/04/180403_landscapetips_09.jpg" class="d-block w-100" alt="09">
      </div>
      <div class="carousel-item">
        <img src="https://cdn01.dcfever.com/articles/news/2018/04/180403_landscapetips_12.jpg" class="d-block w-100" alt="12">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'

export default {
  name: 'f2e-carousel',
  props: {
    title: {
      type: String,
      default: function () {
        return '輪播標題'
      }
    }
  },
  data () {
    return {}
  },
  watch: {},
  mounted () {
    $('.carousel').carousel({
      interval: 2000
    })
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/style.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>
