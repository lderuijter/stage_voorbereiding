<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h1>Update Product</h1>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                        :checked="product.is_certified"
                                        v-model="product.is_certified"
                                    />
                                </div>
                            </div>
                            <br>
                            <div class="col-12">
                                <button type="submit" class="btn btn-success">Save</button>
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
    name:"update-product",
    mounted(){
        this.getProduct()
    },
    data(){
        return {
            product:{}
        }
    },
    methods:{
        getProduct(){
            axios.get('/api/product/' + this.$route.params.id).then(response=>{
                this.product = response.data
                console.log(response.data)
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await axios.put('/api/product/' + this.$route.params.id, this.product).then(response=>{
                console.log(response)
                this.$router.push('/products')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>