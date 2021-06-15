<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/page">Page</router-link> |
    <router-link to="/fade">Fade</router-link> |
    <router-link to="/scroll">Scroll</router-link>
  </div>
<!-- transitionタグで囲むことでrouter animationを簡単につけれます -->
<!-- animate cssのような第三者のアニメーションライブラリも以下(enter-active-class)のように使えます -->
<transition name="router-transition" enter-active-class="animated zoomIn" leave-active-class="animated bounceOutRight">

<!-- router-viewにviewsフォルダ内の〇〇.vueがpathに応じて表示されます -->
<router-view/>

</transition>
</template>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

body {
background: #eee;
}
#app {
  margin: 0 auto;
max-width: 1000px;
background: #fff;
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
padding: 30px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page {
position: fixed; 
right: 0;
left: 0;
width: inherit;
padding: 0 50px;
}
</style>

