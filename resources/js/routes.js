import { createMemoryHistory, createRouter } from 'vue-router'
import App from './components/App.vue'
import AddProduct from './components/AddProduct.vue'
import UpdateProduct from './components/UpdateProduct.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/create',
            component: AddProduct,
            name: 'create'
        }, 
        {
            path: '/edit/:id',
            component: UpdateProduct, 
            name: 'edit'
        }
    ]
    })

export default router