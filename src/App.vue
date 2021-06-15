<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/page">Page</router-link> |
    <router-link to="/fade">Fade</router-link> |
    <router-link to="/scroll">Scroll</router-link>
  </div>
  <transition mode=”out-in” name="fade" appear>
  <router-view/>
  </transition>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>

<script>
// export default {
//   data() {
//     return {
//       visible: true,
//     };
//   },
//   };
</script>
