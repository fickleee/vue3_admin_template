import router from '@/router'
import setting from './setting'
//@ts-ignore
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
import useUserStore from './store/modules/user'
import pinia from './store'
const userStore = useUserStore(pinia)

router.beforeEach(async (to: any, _from: any, next: any) => {
  nprogress.start()
  const token = userStore.token
  const username = userStore.username
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        //放行
        next()
      } else {
        try {
          await userStore.userInfo()
          //放行
          //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
          next({ ...to })
        } catch (error) {
          //token问题
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

router.afterEach((to: any) => {
  document.title = `${setting.title} - ${to.meta.title}`
  nprogress.done()
})
