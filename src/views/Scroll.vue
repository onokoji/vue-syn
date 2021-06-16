<template>
<div class="scroll page">
    <h1>Vueでスクロール位置を取得しフェードイン・アウト処理をする</h1>
<transition name="fade">
  <div v-show="visible">
  <h1 id="header-logo">ここがフェードイン・アウトするよ</h1>
  </div>
</transition>
  <p>いろいろ書きたいこと...夢...希望...勇気...そして、愛</p>
      <p>フェー</p>
    <p>フェー</p>
    <p>フェー</p>
    <p>フェー</p>
    <p>フェー</p>
    <p>フェー</p>
    <p>フェー</p>
    <p>フェー</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>ドイン</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>アウト</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      visible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 100;
      } else if (window.scrollY < 90) {
        this.visible = !this.visible;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
