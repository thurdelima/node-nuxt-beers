<template>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h2 v-if="loading" class="display-5">
        <p class="card-text placeholder-glow">
          <span class="placeholder col-3 h-loading"></span>
        </p>
      </h2>
      <h2 v-else class="display-5">
        Category {{ categoriesData.category.name }}
        <span class="emoji">🔎</span>
      </h2>
    </div>
  </div>

  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h3 class="display-6">Beers of category <span class="emoji">🍻</span></h3>
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
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Description</th>
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
        </tr>
       
       
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const loading = ref(true);
const categoriesData = ref({});
const beers = ref([]);

const fetchData = async () => {
  try {
    const route = useRoute();
    const response = await fetch(
      `http://localhost:3333/api/categories/${route.params.id}/beers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    beers.value = data.beers;
    console.log(`beers: `, beers);
    categoriesData.value = data;

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
</style>
