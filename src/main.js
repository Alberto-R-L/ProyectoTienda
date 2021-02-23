import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import Notifications from 'vue-notification'
 
Vue.use(Notifications)

Vue.use(VueRouter)

Vue.use(firestorePlugin)


Vue.config.productionTip = false

import producto from './components/producto.vue'
import main from './components/main.vue'
import login from './components/login.vue'
import carrito from './components/carrito.vue'
Vue.component(producto)

const routes = [
  { path: '/', component: main },
  { path: '/producto/:id', component: producto },
  { path: '/login', component: login },
  { path: '/carrito', component: carrito }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
