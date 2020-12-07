<template>
  <div class="row no-gutters bg-light position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png" class="w-100" alt="test">
    </div>
    <div class="col-md-6 position-static p-4 pl-md-0">
      <h5 class="mt-0">{{ title }}</h5>
      <p>{{ contents }}</p>
      <a :href="link" class="stretched-link" :target="target">{{ linkName }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'f2e-stretchedLinkBox',
  props: {
    title: {
      type: String,
      default: function () {
        return 'Default Title'
      }
    },
    contents: {
      type: String,
      default: function () {
        return 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      }
    },
    link: {
      type: String,
      default: function () {
        return '#'
      }
    },
    target: {
      type: String,
      default: function () {
        return '_self'
      }
    },
    linkName: {
      type: String,
      default: function () {
        return 'Go somewhere'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/style.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

p {
  color: #000;
}
</style>
