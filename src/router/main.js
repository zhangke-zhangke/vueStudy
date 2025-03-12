import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import { concatRouters } from './routerMap'

// 读取routerMap.js文件，创建路由实例
const routers = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: concatRouters
})


export default routers