import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import JsonFormatter from '../views/JsonFormatter.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Layout',
    //     component: Layout,
    //     props: {
    //         laymsg: 'ccccddd'
    //     }
    // },
    {
        path: '/',
        name: 'Layout',
        component: JsonFormatter
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
    ,
    {
        path: '/secret',
        name: 'Secret',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Secret.vue')
    }
    ,
]

const router = new VueRouter({
    routes
})

export default router