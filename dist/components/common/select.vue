<template>
  <div class="">
    <!-- <p>{{ title }}</p> -->
    <select v-model="selected">
      <option v-for="option in items" :value="option">
        {{ option.text }}
      </option>
    </select>
    <!-- <div>選擇：{{ selected.text }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'f2e-select',
  props: {
    title: {
      type: String,
      default: function () {
        return '選單標題'
      }
    },
    items: {
      type: [Object, Array],
      default: function () {
        return [
          { text: '項目1', value: 1 },
          { text: '項目2', value: 2 },
          { text: '項目3', value: 3 }
        ]
      }
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  created () {
    this.items.forEach((item, i) => {
      if (i === 0) {
        this.selected = item
      }
    })
  }
}
</script>

<style lang="scss" scoped>
p {
  color: green;
}

select {
  min-width: 80px;
  height: 32px;
  line-height: 20px;
  font-size: 14px;
  margin: 5px auto;
  padding: .375rem 1.75rem .375rem .75rem;
  border: 1px solid;
  border-radius: .25rem;
  -webkit-appearance: none;
  background: #FFF url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;
}
</style>
