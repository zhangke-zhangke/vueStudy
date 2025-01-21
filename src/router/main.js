import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import counter from '../components/Count/count.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: {path: '/home'},
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../components/login/loginTest.vue')
        },
        {
            path: '/counter',
            name: 'counter',
            component: counter
        }
    ]
})

export default router
