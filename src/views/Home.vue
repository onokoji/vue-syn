<template>
<div class="home page">
<img src="../assets/logo-line.svg" alt="">
<h1>2021シングラム文化祭はじまる <router-link to="/about"><font-awesome-icon icon="arrow-circle-right" /></router-link>  </h1>

<p class="home">今回はVue.jsを使ってWEBサイトを作ってみました。<a href="https://qiita.com/567000/items/dde495d6a8ad1c25fa43" target="_blank">vue-cliをインストール</a>  するところから始めて、いくつかのサイトで画面遷移のエフェクトをテストしつつ、<a href="https://v3.ja.vuejs.org/guide/transitions-enterleave.html" target="_blank">公式サイトでEnter & Leave トランジション</a> を確認したところです、どうぞよろしく。</p>
</div>
</template>

<script>

export default {
 data() {
    return {
      show: true,
    };
  },

};
</script>

<style>
.home {

}

</style>

