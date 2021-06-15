<template>
<transition-group name="fade" mode="out-in">
<div v-if="center" key="center">
<h2>最初の画面</h2>
<div @click="watchLeft">左の画面にいく</div>
<div @click="watchRight">右の画面にいく</div>
</div>
<div v-if="left" key="left">
<h2>左の画面</h2>
<div @click="watchCenter">最初の画面に戻る</div>
<div @click="watchRight">右の画面にいく</div>
</div>
<div v-if="right" key="right">
<h2>右の画面</h2>
<div @click="watchCenter">最初の画面に戻る</div>
<div @click="watchLeft">左の画面にいく</div>
</div>
</transition-group>

</template>

<script>

export default {
  data() {
      return {
        show: false,
        center: true,
        left: false,
        right: false,
      };
    },
    mounted() {
      //コンポーネントがマウントされるタイミングでフラグを書き換え->表示アニメーション
      this.show = true;
    },
    beforeRouteLeave(to, from, next) {
      //vue-routerでの遷移発生イベント時にフラグを書き換え->削除アニメーション
      this.show = false;
      setTimeout(() => {
        //setTimeoutにより、3秒後にページ遷移を実行
        next();
      }, 3000);
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
<style>
div.click{
  cursor: pointer;
}
 
/* [v-cloak] {
  display: none;
} */
 
  .fade-enter-active {
    transition: opacity 3s;
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 3s;
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }

</style>

