import Login from './views/Login.vue'
import MainLayout from './views/MainLayout.vue'
import Dashboard from './views/Dashboard.vue'
import ProductLine from './views/ProductLine.vue'
import ProductManagement from './views/ProductManagement.vue'
import PublicDB from './views/PublicDB.vue'
import ProductDetail from './views/ProductDetail.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/app',
    component: MainLayout,
    children: [
      { path: 'home', component: Dashboard },
      { path: 'product-line', component: ProductLine },
      { path: 'product', component: ProductManagement },
      { path: 'db', component: PublicDB },
      { path: 'product-detail', component: ProductDetail },
    ],
  },
]

export default routes 