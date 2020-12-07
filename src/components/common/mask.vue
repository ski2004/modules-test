<template>
  <div class="background" :class="{
      'bg-in':show===true,
      'bg-out':show===false
    }">
    <div
      class="default"
      :class="{
        'content-in':active===true,
        'content-out':active===false,
      }"
      :style="{ height: height , width: width }"
    >
      <component :is="views" :close="close"></component>
      <button class="btn btn-primary btn-close" @click="close()">close</button>
    </div>
    
  </div>
</template>


<script>
export default {
  name: "test2",
  props: {
    active: {
      type: Boolean,
      required: false,
      default: function() {
        return true;
      }
    },
    height: {
      type: String,
      default: function() {
        return "";
      }
    },
    width: {
      type: String,
      default: function() {
        return "90%";
      }
    },
    views: {
      type: [String, Object],
      default: function() {
        return "test";
      }
    }
  },
  components: {
    test: {
      // cdn版本會出錯
      template: "<p>test</p>"
    }
  },
  data: function() {
    // 資料
    return {
      show: this.active
    };
  },
  methods: {
    //有無相依都會計算方法
    close() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss" scoped >
// @import "@/assets/scss/style.scss";  // 請勿這樣使用
@import '~bootstrap/dist/css/bootstrap.min.css';
/* 遮罩 */
.background {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  & > .mask {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  & > .default {
    background-color: white;
    width: 500px;
    height: 300px;
    border-radius: 20px;
  }
  & > .content-in {
    &.center {
      position: fixed;
      animation: content-in 1s forwards;
    }
    &.top {
      position: fixed;
      animation: content-top 1s forwards;
    }
  }

  & > .content-out {
    &.center {
      position: fixed;
      top: 20vh;
      animation: content-out 1s forwards;
    }
    &.top {
      position: fixed;
      animation: content-out 1s forwards;
    }
  }
}
.bg-in {
  animation: b-in 0.5s forwards;
}
.bg-out {
  animation: b-out 0.5s forwards;
}

// 中間內容漸進出
@keyframes content-in {
  0% {
    top: 0vh;
  }
  100% {
    top: 20vh;
  }
}
@keyframes content-top {
  0% {
    top: 0vh;
  }
  100% {
    top: 1vh;
  }
}

@keyframes content-out {
  100% {
    top: -100vh;
  }
}

// 背景漸進出
@keyframes b-in {
  100% {
    background-color: rgba(55, 55, 55, 0.6);
  }
}
@keyframes b-out {
  100% {
    opacity: 0;
    display: none;
    bottom: 100vh;
    z-index: -1;
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>