// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

//import de arquivos do node_modules
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

//Usando as importações do node_modules
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

//Servidor declarado na variável de ambiente(Configuração do resource)
Vue.http.options.root = process.env.SERVER


const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
    routes
})
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})