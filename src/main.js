import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSlider from 'vue-slider-component'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-slider-component/theme/default.css'
import './styles/main.scss';
import 'vue-swatches/dist/vue-swatches.css'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component('VueSlider', VueSlider)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
