import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import counter from '../components/Count/count.vue'
import userDetail from '@/components/userInfo/userDetail.vue'


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
        },
        {
            path: '/userDetail',
            name: 'userDetail',
            component: userDetail
        }
    ]
})

export default router
