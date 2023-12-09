<template>
<nav aria-label="breadcrumb ">
  <ol class="breadcrumb m-crumb">
  <nuxt-link class="breadcrumb-item" :to="`/`"> 
    Home
    </nuxt-link>
    <nuxt-link class="breadcrumb-item" :to="`/beers`"> 
    Categories
    </nuxt-link>
      <nuxt-link class="breadcrumb-item" :to="`/beer/${route.params.id}`"> 
    Beer Details
    </nuxt-link>
  </ol>
</nav>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
     <h2 v-if="loading" class="display-5">
        <p class="card-text placeholder-glow">
          <span class="placeholder col-3 h-loading"></span>
        </p>
      </h2>
      <h2 v-else class="display-5">Beer {{ beer.name }} <span class="emoji">🍺</span></h2>
      <p class="lead">Details about specific beer.</p>
    </div>
  </div>

  <div class="row featurette">
   <div v-if="loading" class="col-md-5 ">
      <p class="card-text placeholder-glow ">
          <span class="placeholder col-12  h-loading loading-avatar"></span>
        </p>
    </div>
    <div v-else class="col-md-5">
      <img
        :src="beer.image"
        class="shadow-sm rounded-circle img-w"
        alt="Avatar"
      />
    </div>
    <div class="col-md-7">
    <p v-if="loading" class="lead">
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 h-loading"></span>
          <span class="placeholder col-12 h-loading"></span>
          <span class="placeholder col-12 h-loading"></span>
        </p>
      </p>
      <p v-else class="lead">
        <span class="text-body-secondary">Description: </span>{{ beer.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const loading = ref(true);

const beer = ref([]);
const route = useRoute();

const fetchData = async () => {
  try {
    const route = useRoute();
    const response = await fetch(
      `http://localhost:3333/api/beers/${route.params.id}`,
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
    beer.value = data;
    console.log(`beers: `, beer);
    

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

.text-body-secondary {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
  font-weight: 500 !important;
}

.img-w {
    width: 70%;
    margin: 10px;
  }

.loading-avatar {
  height: 25vh !important;
    border-radius: 100% !important;
    width: 25vh !important;
}  


.m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}



@media (min-width: 1281px) {
  .img-w {
    width: 70%;
    margin: 10px;
  }
}

@media (min-width: 1025px) {
  .img-w {
    width: 70%;
     margin: 10px;
  }
}

@media (min-width: 801px) {
  .img-w {
    width: 50%;
     margin: 10px;
  }
}

@media (min-width: 600px) {
  .img-w {
    width: 70%;
     margin: 10px;
  }
}

@media (min-width: 480px) {
  .col-md-5 {
    text-align: center;
  }

  .img-w {
    width: 50%;
     margin: 10px;
  }
}

@media (min-width: 320px) {
  .col-md-5 {
    text-align: center;
  }

  img-w: {
    width: 50%;
     margin: 10px;
  }
}



</style>
