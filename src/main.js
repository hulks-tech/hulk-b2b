import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(ElementPlus)
app.use(router)
app.mount('#app')
