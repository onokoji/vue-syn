<template>
<div class="fade page">
<h1>フェードトランジション</h1>
<div id="demo">
  <button @click="show = !show">
    Toggle
  </button>
  
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

