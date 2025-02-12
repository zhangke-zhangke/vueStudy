import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import counter from '../components/Count/count.vue'
import userDetail from '@/components/userInfo/userDetail.vue'
import HomeHandle from '@/components/handle/homeHandle.vue'
import ExportContent from '@/views/word/exportContent.vue'


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
        },
        {
            path: '/handle',
            name: 'handle',
            component: HomeHandle
        },
        {
            path: '/word',
            name: 'word',
            component: () => import('../views/word/exportContent.vue')
        }
    ]
})

export default router
