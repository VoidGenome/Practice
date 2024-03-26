import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

// import VBtn from 'vuetify/lib/components/VBtn'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdiSvg', // default - only for display purposes
  },
  // VBtn
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')
