<template>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h2 class="display-5">
        Category {{ $route.params.id }} <span class="emoji">🔎</span>
      </h2>
      
    </div>
  </div>

 

  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h3 class="display-6">
        Beers of category <span class="emoji">🍻</span>
      </h3>
      
    </div>
  </div>

  <div class="table-scrollable">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Image</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class=" rounded-circle "
            />
          </td>
          
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class=" rounded-circle"
            />
          </td>
         
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle"
            />
          </td>
          
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle"
            />
          </td>
          
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle"
            />
          </td>
         
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle"
            />
          </td>
          
        </tr>
        
      </tbody>
    </table>
  </div>


</template>

<script>
export default {
  name: "categoryId",

  async asyncData({ params }) {
    const categoryId = params.id;
    return { categoryId };
  },
};
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
