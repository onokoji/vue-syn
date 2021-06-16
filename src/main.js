import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AnimateCss from 'animate.css';
// Install Animate.css
//ここからfontawesome追加
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLeaf)
//ここまで追加

createApp(App).use(store).use(router).mount('#app').use(AnimateCss).component('font-awesome-icon', FontAwesomeIcon )
