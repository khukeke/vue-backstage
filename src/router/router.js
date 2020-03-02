
import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/Test.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)


// const test = r => require.ensure([], () => r(require('../components/Test.vue')), 'home')

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
]
const router = new VueRouter({
    routes,
    // strice: process.env.NODE_ENV !== 'production'
})
export default router;
