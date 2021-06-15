<template>
<div id="app">
<div id="nav">
<!-- 以下はHTMLのaタグみたいな感じです -->
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link>
</div>

<!-- transitionタグで囲むことでrouter animationを簡単につけれます -->
<!-- nameに好きな名前をつけてstyle内のトランジションクラスの前に書きます -->
<transition name="router-transition">

<!-- router-viewにviewsフォルダ内の〇〇.vueがpathに応じて表示されます -->
<router-view/>

</transition>

</div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

body {
background: #eee;
}

#app {
height: 50vh;
margin: 0 auto;
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
}

#nav a {
font-weight: bold;
color: #2c3e50;
}

#nav a.router-link-exact-active {
color: #42b983;
}

.page {
position: fixed;
left: 0;
right: 0;
width: inherit;
padding: 0 50px;
}

.router-transition-enter-active {
animation: fadeIn 1s;
animation-delay: .5s;
opacity: 0;
}

@keyframes fadeIn {
from {
transform: translateY(-20px);
opacity: 0;
}
to {
transform: translateY(0);
opacity: 1;
}
}

.router-transition-leave-active {
animation: fadeOut 1s;
}

@keyframes fadeOut {
from {
transform: translateY(0);
}
to {
transform: translateY(-20px);
opacity: 0;
}
}

</style>