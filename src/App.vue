<template>
<div id="nav">
<!-- 以下はHTMLのaタグみたいな感じです -->
<router-link to="/"><img src="./assets/logo-line.svg" alt=""></router-link> |
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link> |
<router-link to="/scroll">Scroll</router-link> |
<router-link to="/thanks">Thanks</router-link> |
<!-- <router-link to="/page">Page</router-link> | -->
</div>
<div id="app">
<!-- transitionタグで囲むことでrouter animationを簡単につけれます -->
<!-- nameに好きな名前をつけてstyle内のトランジションクラスの前に書きます -->
<transition>
<!-- router-viewにviewsフォルダ内の〇〇.vueがpathに応じて表示されます -->
<router-view/>
</transition>

</div>


</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

body{
  margin: 0;
  /* background: #000; */
}
body{
  animation: bgchange 10s ease infinite;/*変化の時間を変更したい場合は20sの部分を好きな時間に変更*/
}

@keyframes bgchange{
      0%   {background:#000;}/*変化させたい色*/
      40%  {background:#7e9db1;}/*変化させたい色*/
      80%  {background:#b17ea0;}/*変化させたい色*/
      100% {background:#000;}/*変化させたい色*/
 }

#app {
height: 70vh;
margin: 0 auto;
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
padding: 0px;
}
.page {
/* background: #111; */
color: #FFF;
position: fixed;
left: 0;
right: 0;
width: inherit;
padding: 50px 50px;
height: 60vh;
}

.page p a{
  color: #bbbbbb;
  text-decoration: none;
  padding-bottom: -2px;
  border-bottom:2px dotted #666;
}
.page h1{
  font-size: 48px;
}
.page p{
  font-size: 24px;
  color: #d3d3d3;
}
.page h1 a {
  color:rgb(194, 194, 194);
}
#nav {
padding: 30px;

}
#nav img {
width: 16%;
float: left;
}

#nav a {
font-weight: bold;
color: #2c3e50;
}

#nav a.router-link-exact-active {
color: #ffffff;
}


/* バウンス */

/* .v-enter-active {
  animation: bounce-in .5s ease-out both;
}
.v-leave-active {
  animation: bounce-in .5s reverse ease-in both;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
} */


/* 透過 */

.v-enter-from, .v-leave-to {
  transform: translateX(-20px);
  opacity: 0;
  
}


.v-enter-active, .v-leave-active {
 transition: all 1s ease-out;
}


</style>