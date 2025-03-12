import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import counter from '../components/Count/count.vue'
import userDetail from '@/components/userInfo/userDetail.vue'
import HomeHandle from '@/components/handle/homeHandle.vue'
import ExportContent from '@/views/word/exportContent.vue'
import blog from '@/components/blog/index.vue'
import layout from '@/components/layout/index.vue'


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
        },
        // 博客架子
        {
            path: '/blog',
            name: 'blog',
            component: blog,
        },
        {
            path: '/blogDetail',
            name: 'blogDetail',
            component: () => import('@/components/blog/components/blogDetailInfo.vue')
        },
        // layout布局，固定导航栏，浏览子路由
        {
            path: '/layout',
            name: 'layout',
            component: layout,
            redirect: {path: '/layout/defalut'},
            children: [{
                path: '/defalut',
                name: 'layoutDefalut',
                component: ''
            }]
        }
    ]
})

export default router
