import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import module1 from './modules/module1'
import admin from './modules/admin'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        common,
        module1,
        admin,
    },
    strict: debug
})
