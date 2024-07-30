import './bootstrap'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import ProductIndex from './components/ProductIndex.vue'
import AddProduct from './components/AddProduct.vue'

const app = createApp()
app.component('product-index', ProductIndex)
app.component('add-product', AddProduct)
app.mount('#app')