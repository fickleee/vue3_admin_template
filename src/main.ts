import { createApp } from 'vue'
import App from '@/App.vue'
// 引入vue-router
import router from './router'
// 引入路由鉴权
import './permisstion'
// 引入pinia仓库
import pinia from './store'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import { isHasButton } from './directive/has'
import globalComponents from '@/components/index'
import '@/styles/index.scss'
const app = createApp(App)
app.use(globalComponents)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
isHasButton(app)
import 'virtual:svg-icons-register'
app.mount('#app')
