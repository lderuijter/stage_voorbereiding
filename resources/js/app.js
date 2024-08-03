import './bootstrap'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './components/App.vue'
import ProductIndex from './components/ProductIndex.vue'
import AddProduct from './components/AddProduct.vue'
import UpdateProduct from './components/UpdateProduct.vue'
import router from './routes'

const app = createApp()
app.component('App', App)
app.component('product-index', ProductIndex)
app.component('add-product', AddProduct)
app.component('update-product', UpdateProduct)
app.use(router)
app.mount('#app')