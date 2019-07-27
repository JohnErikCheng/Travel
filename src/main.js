// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//300毫秒延迟问题的解决
import fastClick from 'fastclick'
//重置样式
import './assets/style/reset.css'
//1像素边框的解决方案
import './assets/style/border.css'
//iconfont全局引入,多处用到
import './assets/style/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
