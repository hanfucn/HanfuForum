/*

  Copyright (C) 2019 张珏敏.

  This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/

import Vue from 'vue'
import Vuex from 'vuex'

import auth from './module/auth'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    isRouterAlive: false // isRouterAlive控制显示，提供reload方法刷新App视图
  },
  modules: {
    auth
  },
  actions: actions,
  mutations: mutations,
  strict: debug,
  getters: getters
})

/*
* 严格模式 strict
* https://vuex.vuejs.org/zh/guide/strict.html
* */

/*
store.state.auth // -> module auth 的状态
store.state.b // -> moduleB 的状态
*/

/*
* Vuex 当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model 会比较棘手
* https://vuex.vuejs.org/zh/guide/forms.html
* */
