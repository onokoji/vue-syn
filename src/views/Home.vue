<template>
<div class="home page">
<img src="../assets/logo-line.svg" alt="">
<h1>2021シングラム文化祭はじまる <router-link to="/about"><font-awesome-icon class="animated headShake infinite" icon="arrow-circle-right" /></router-link>  </h1>

<p class="home">今回はVue.jsを使ってWEBサイトを作ってみました。vue-cliをインストールするところから始めて、いくつかのサイトで画面遷移のエフェクトをテストしつつ、公式サイトでEnter & Leave トランジションを確認したところです、どうぞよろしく。</p>
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

