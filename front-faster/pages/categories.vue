<template>
<nav aria-label="breadcrumb ">
  <ol class="breadcrumb m-crumb">
  <nuxt-link class="breadcrumb-item" :to="`/`"> 
    Home
    </nuxt-link>
    <nuxt-link class="breadcrumb-item" :to="`/categories`"> 
    Categories
    </nuxt-link>
  </ol>
</nav>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h2 class="display-5">Categories <span class="emoji">📊</span></h2>
      <p class="lead">Explore the categories in our dashboard.</p>
    </div>
  </div>

  <div v-if="loading" class="text-center">
    <p class="card-text placeholder-glow">
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
       <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>
      <span class="placeholder col-12 h-loading"></span>

     
   
      
    </p>
  </div>

  <div v-else class="table-scrollable">
    <table v-if="categories.length > 0" class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td>{{ category.name }}</td>
          <td>
            <nuxt-link :to="`/category/${category.id}`"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="alert alert-warning" role="alert">
      No categories available.
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const categories = ref([]);
const loading = ref(true);

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3333/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    categories.value = data;
    loading.value = false;
    
  } catch (error) {
    console.error("Error fetching categories:", error.message);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style>
.dashboard-title-cs {
  margin-top: 80px;
  text-align: left;
}
.emoji {
  font-size: 2rem;
  margin-left: 8px;
}

.table-scrollable {
  overflow-x: auto;

  margin: auto;
}

.h-loading {
  height: 40px;
  margin: 5px;
}

.m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}
</style>
