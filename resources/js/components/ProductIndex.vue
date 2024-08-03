<template>
  <router-link to="/create">Create product</router-link>
  <h1>All Products</h1>
  <div>
    <div v-for="product in products" :key="product.id">
      <h2>Title: {{ product.title }}</h2>
      <h2>Description: {{ product.description }}</h2>
      <h3 v-if="product.is_certified">Product is certified</h3>
      <router-link :to="{ name: 'edit', params: { id: product.id }}">Update product</router-link>
      <button type="button" @click="deleteProduct(product.id)">Delete product</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const products = ref([])
const getProducts = () => {
  axios.get('/api/products')
  .then(result => products.value = result.data)
  .catch(error => console.log(error.response.data))
}

onMounted(() => getProducts())

const deleteProduct = (id) => {
  if(confirm("Are you sure to delete this product?")){
    axios.delete('/api/product/' + id).then(response=>{
    getProducts()
    console.log(response)
  }).catch(error=>{
    console.log(error)
  })
  }
}
</script>