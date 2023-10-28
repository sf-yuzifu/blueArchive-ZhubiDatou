import './assets/index.css'
import '@arco-design/web-vue/dist/arco.css'

import { createApp } from 'vue'
import { Modal } from '@arco-design/web-vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'
import i18n from '@/i18n'

const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(i18n)

app.mount('#app')

if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      Modal.confirm({
        title: i18n.global.t('trans.warning'),
        content: i18n.global.t('trans.sw-update-tip'),
        okText: i18n.global.t('trans.ok'),
        onOk: () => {
          updateSW(true)
        },
        onCancel: false,
        hideCancel: false
      })
    }
  })
}

document.querySelector('title').innerHTML = i18n.global.t('trans.title')
