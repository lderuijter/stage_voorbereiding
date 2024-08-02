import './bootstrap'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import ProductIndex from './components/ProductIndex.vue'
import AddProduct from './components/AddProduct.vue'
import UpdateProduct from './components/UpdateProduct.vue'

const app = createApp()
app.component('product-index', ProductIndex)
app.component('add-product', AddProduct)
app.component('update-product', UpdateProduct)
app.mount('#app')