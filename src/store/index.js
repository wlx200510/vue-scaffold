import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations.js'
import * as getters from './getters'

import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: ''
    },
    mutations,
    getters,
    modules: {
        example
    },
    strict: 'debug',
    plugins: []
})