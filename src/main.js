import './assets/main.css'
// import './assets/common.scss'

import { createApp } from 'vue'
import App from './App.vue'
import routers from './router/main'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import locale from 'element-plus/es/locale/lang/zh-cn'
import * as Icons from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 引入中文语言包

import { createPinia } from 'pinia'


// createApp(App).use(router).mount('#app')
const app = createApp(App)

app.use(createPinia())
app.use(routers)
app.use(ElementPlus, {
    locale: zhCn,
  })
// 注册所有图标为全局组件
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key])
  })


app.mount('#app')

