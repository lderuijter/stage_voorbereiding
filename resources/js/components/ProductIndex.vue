<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <br>
  <router-link to="/create">
    <button class="btn btn-primary">Create product</button>
  </router-link>
  <br><br>
  <h1>All Products</h1>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Certified</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <th scope="row">{{ product.id }}</th>
      <td>{{ product.title }}</td>
      <td>{{ product.description }}</td>
      <td v-if="product.is_certified">Product is certified</td>
      <td v-else>Product is not certified</td>
      <td>
        <router-link :to="{ name: 'edit', params: { id: product.id }}">
        <button class="btn btn-warning" style="color: white; margin-right: 10px;" type="button">Update product</button>
      </router-link>
    </td>
    <td>
      <button class="btn btn-danger" type="button" @click="deleteProduct(product.id)">Delete product</button>
    </td>
    </tr>
  </tbody>
</table>
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