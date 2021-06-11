<template>
<div v-cloak>

<div v-if="center" key="center">
<p>最初の画面</p>
<div v-on:click="watchLeft">左の画面にいく</div>
<div v-on:click="watchRight">右の画面にいく</div>
</div>
<div v-if="left" key="left">
<p>左の画面</p>
<div v-on:click="watchCenter">最初の画面に戻る</div>
<div v-on:click="watchRight">右の画面にいく</div>
</div>
<div v-if="right" key="right">
<p>右の画面</p>
<div v-on:click="watchCenter">最初の画面に戻る</div>
<div v-on:click="watchLeft">左の画面にいく</div>
</div>

</div>
</template>

<script>

export default {
  data() {
      return {
        center: true,
        left: false,
        right: false,
      };
    },
    methods: {
      watchCenter: function () {
        this.center = true;
        this.left = false;
        this.right = false;
      },
      watchLeft: function () {
        this.center = false;
        this.left = true;
        this.right = false;
      },
      watchRight: function () {
        this.center = false;
        this.left = false;
        this.right = true;
      },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.click{
  cursor: pointer;
}
 
[v-cloak] {
  display: none;
}
 
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
 
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>

