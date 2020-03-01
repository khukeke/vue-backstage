
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Test from '../components/Test.vue'

Vue.use(VueRouter)


// const test = r => require.ensure([], () => r(require('../components/Test.vue')), 'home')

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    }
]

const router = new VueRouter({
    routes
    // strice: process.env.NODE_ENV !== 'production'
})
export default router;
