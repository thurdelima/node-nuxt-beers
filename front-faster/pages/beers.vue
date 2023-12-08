<template>

<nav aria-label="breadcrumb ">
  <ol class="breadcrumb m-crumb">
  <nuxt-link class="breadcrumb-item" :to="`/`"> 
    Home
    </nuxt-link>
    <nuxt-link class="breadcrumb-item" :to="`/beers`"> 
    Beers
    </nuxt-link>
  </ol>
</nav>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h2 class="display-5">Beers <span class="emoji">🍺</span></h2>
      <p class="lead">Explore the world of beers in our dashboard.</p>
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
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Description</th>
          <th scope="col">Category_id</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="beer in beers">
          <th scope="row">{{beer.id}}</th>
          <td>{{beer.name}}</td>
          <td>
            <img
              :src="beer.image"
              alt=""
              width="32"
              height="32"
              class="rounded-circle"
            />
          </td>
           <td>{{beer.description}}</td>
           <td>{{beer.category_id}}</td>
          <td>
            <nuxt-link :to="`/beer/${beer.id}`"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>

         
       
        
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";


const beers = ref([]);
const loading = ref(true);

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3333/api/beers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    beers.value = data;
   
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

.rounded-circle {
  border-radius: 50% !important;
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
