import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCart from './pages/ShoppingCart.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/cart',
            component: ShoppingCart,
        },
        {
            path: '/products',
            component: ProductsPage
        },
        {
            path: '/products/:productId',
            component: ProductDetailPage
        }
    ]
})

createApp(App).use(router).mount('#app')
