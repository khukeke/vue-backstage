import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // title: '测试状态',
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
/* eslint-enable */
