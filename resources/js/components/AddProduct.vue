<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h1>Add Product</h1>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="product.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="product.description">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Is this product certified?</label>
                                    <input
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
                console.log(response)
                this.$router.push('/products')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>