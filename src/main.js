import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300延迟
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
// 注入事件，绑定到DOM上
fastclick.attach(document.body)

// 懒加载，插件，，require是webpack支持的
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
