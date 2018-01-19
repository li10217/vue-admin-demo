import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import module1 from './modules/module1'
import app from './modules/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        common,
        module1,
        app,
    },
    strict: debug
})
