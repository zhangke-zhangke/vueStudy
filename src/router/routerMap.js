import counter from '../components/Count/count.vue'
import userDetail from '@/components/userInfo/userDetail.vue'
import HomeHandle from '@/components/handle/homeHandle.vue'
import blog from '@/components/blog/index.vue'
import layout from '@/components/layout/index.vue'


// export const router = createRouter({
//     history: createWebHashHistory(import.meta.env.BASE_URL),
//     routes: [
//         {
//             path: '/',
//             name: 'index',
//             redirect: {path: '/home'},
//         },
//         {
//             path: '/home',
//             name: 'home',
//             component: () => import('../components/login/loginTest.vue')
//         },
//         {
//             path: '/counter',
//             name: 'counter',
//             component: counter
//         },
//         {
//             path: '/userDetail',
//             name: 'userDetail',
//             component: userDetail
//         },
//         {
//             path: '/handle',
//             name: 'handle',
//             component: HomeHandle
//         },
//         // 博客架子
//         {
//             path: '/blog',
//             name: 'blog',
//             component: blog,
//         },
//         {
//             path: '/blogDetail',
//             name: 'blogDetail',
//             component: () => import('@/components/blog/components/blogDetailInfo.vue')
//         },
//         // layout布局，固定导航栏，浏览子路由
//         // {
//         //     path: '/layout',
//         //     name: 'layout',
//         //     component: layout,
//         //     redirect: {path: '/layout/default'},
//         //     children: [{
//         //         path: 'default',
//         //         name: 'layoutDefault',
//         //         meta: {title: '首页', icon: 'el-icon-s-home'},
//         //         component: () => import('@/views/layoutHome/home.vue')
//         //     }]
//         // }
//     ]
// })



// 路由分开写，便于管理，如下：
 export const studyRouter = [
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
 ]


// layout布局，固定导航栏，浏览子路由
 export const layoutRoutes = [
    {
        path: '/layout',
        name: 'layout',
        component: layout,
        redirect: {path: '/layout/default'},
        children: [{
            path: 'default',
            name: 'layoutDefault',
            meta: {title: '首页', icon: 'House'},
            component: () => import('@/views/layoutHome/home.vue')
        },{
            path: 'setting',
            name: 'layoutSetting',
            meta: {title: '设置', icon: 'Setting'},
            component: () => import('@/views/layoutSetting/setting.vue')
        },{
            path: 'user',
            name: 'layoutUser',
            meta: {title: '用户', icon: 'User'},
            component: () => import('@/views/layoutUser/userInfo.vue')
        }]
    }
]


export const concatRouters = [...studyRouter, ...layoutRoutes]
