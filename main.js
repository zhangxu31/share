import Vue from 'vue'
import VueRouter from 'vue-router'

import Xigua from '@hfe/xigua'
Xigua.install(Vue)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import './stylesheet/index.scss'

import './zcomponents/styles/index.scss'
import Zcomponents from './zcomponents'
Zcomponents.install(Vue)

import { netRoutes, otherRoutes, treeRoutes, treeGraphRoutes } from './route/router-config'
import { mtCallGraphs, dpCallGraphs, callOtherRoutes } from './route/call-graph-routers'
// tree
// import { treeGrahps } from './route/tree-routers'

import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'hash',
  routes: []
    .concat(netRoutes)
    .concat(otherRoutes)
    .concat(mtCallGraphs)
    .concat(dpCallGraphs)
    .concat(treeRoutes) // tree
    .concat(treeGraphRoutes) // tree
    .concat(callOtherRoutes)
})

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
