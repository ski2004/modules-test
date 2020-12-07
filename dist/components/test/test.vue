<template>
  <div>{{name}}-test</div>
</template>

<script>


export default {
  name:"test1",
  props: {
    name: {
      type: String,
      default: 'GGGGG'
    },
  },
  
}
</script>
<style lang="scss" scoped>
div{
  color:blue;
}
</style>