import './bootstrap'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import ProductIndex from './components/ProductIndex.vue'

const app = createApp()
app.component('product-index', ProductIndex)
app.mount('#app')