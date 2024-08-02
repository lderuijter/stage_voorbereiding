<template>
  <a href="/create">Create Product</a>
  <h1>All Products</h1>
  <div>
    <div v-for="product in products" :key="product.id">
      ---
      <h2>Title: {{ product.title }}</h2>
      <h2>Description: {{ product.description }}</h2>
      <h3 v-if="product.is_certified">Product is certified</h3>
      <router-link :to="{ path: 'update', params: { id: product.id }}">Update product</router-link>
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
</script>