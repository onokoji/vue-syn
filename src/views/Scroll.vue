<template>
<div class="scroll page">
    <h1>Please Scroll <font-awesome-icon icon="arrow-down" class="animated fadeOutDown infinite" /></h1>
<transition name="fade">
  <div v-show="visible">
  <div id="scroll-fadein">
    <img src="../assets/logo-y.svg" alt="">
<h1>フェードイン・フェードアウト<router-link to="/thanks"><font-awesome-icon icon="arrow-circle-right" class="animated headShake infinite" /></router-link> </h1>
<p>フェードイン・フェードアウトはv-showを利用してスクロール位置をスクリプトで確認しつつ、またEnter &amp; Leave トランジションで対応しています</p>
    </div>
  </div>
</transition>
   
    <!-- <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p>
    <p>するよ</p> -->
</div>
</template>

<script>
export default {
  data() {
    return {
      // show: true,
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
        this.visible = window.scrollY > 20;
      } else if (window.scrollY < 10) {
        this.visible = !this.visible;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
height:320vh;

}
.page {
  position:absolute;
height: 300vh;
}
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
#scroll-fadein {
  position: fixed;
  top: 5%;
  padding: 200px 50px 0 0;
  // left: 9%;
}

/* ヘッダーロゴ フェード処理ここから */

.fade-enter-from ,
.fade-leave-to {
  opacity: 0;
  transition: opacity 1s;
}
.fade-enter-active,
 {
  transition: opacity 1s;
}



/* ヘッダーロゴ フェード処理ここまで */

</style>
