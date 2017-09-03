import Vue from 'vue'
import Vuex from 'vuex'
// ES6 inport 语法规范
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// vuex自带的日志   控制台
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 线下调试
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})