<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h1>Add Product</h1>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create" id="createProduct">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input id="title" type="text" class="form-control" v-model="product.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input id="description" type="text" class="form-control" v-model="product.description">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Is this product certified?</label>
                                    <input
                                        id="certified"
                                        type="checkbox"
                                        @input="checked = $event.target.checked"
                                        v-model="product.is_certified"
                                    />
                                </div>
                            </div>
                            <br>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                            <br>
                            <div class="col-12">
                                <a href="/">Back to all products</a>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"add-product",
    data(){
        return {
            product:{
                title:"",
                description:"",
                is_certified: false,
            }
        }
    },
    methods:{
        async create(){
            await axios.post('/api/product', this.product).then(response=>{
                const createProductForm = document.getElementById('createProduct')
                createProductForm.submit()
                createProductForm.reset()
                console.log(response)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>