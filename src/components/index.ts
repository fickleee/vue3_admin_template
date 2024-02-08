import SvgIcon from '@/components/SvgIcon/index.vue'
import Category from '@/components/Category/index.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponent: any = { SvgIcon, Category }
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
