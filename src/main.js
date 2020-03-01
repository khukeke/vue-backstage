import Vue from 'vue'
import App from './App.vue'
// import Test from './components/Test.vue'

import router from './router/router'
import store from './store'

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
