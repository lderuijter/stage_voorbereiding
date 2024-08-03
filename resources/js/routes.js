import { createMemoryHistory, createRouter } from 'vue-router'
import ProductIndex from './components/ProductIndex.vue'
import AddProduct from './components/AddProduct.vue'
import UpdateProduct from './components/UpdateProduct.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/products',
            component: ProductIndex
        },
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