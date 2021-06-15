import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AnimateCss from 'animate.css';
// Install Animate.css
createApp(App).use(store).use(router).mount('#app').use(AnimateCss)
