<template>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h2 class="display-5">Beers <span class="emoji">🍺</span></h2>
      <p class="lead">Explore the world of beers in our dashboard.</p>
    </div>
  </div>
  <div class="table-scrollable">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Image</th>
          <th scope="col">Category_id</th>
          <th scope="col">View</th>
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
              class="rounded-circle"
            />
          </td>
          <td>1</td>
          <td>
            <nuxt-link to="/beer/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
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
          <td>1</td>
          <td>
            <nuxt-link to="/beer/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
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
          <td>1</td>
          <td>
            <nuxt-link to="/beer/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "beers",
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
