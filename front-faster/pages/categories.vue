<template>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h2 class="display-5">Categories <span class="emoji">📊</span></h2>
      <p class="lead">Explore the categories in our dashboard.</p>
    </div>
  </div>

  <div class="table-scrollable">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/2"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/3"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/2"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/3"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/2"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/3"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/2"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/3"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/1"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/2"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>
            <nuxt-link to="/category/3"
              ><button type="button" class="btn btn-primary">
                <i class="bi bi-eye-fill"></i></button
            ></nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "categories",
  watchquery: ["page", "order", "q"],
  methods: {
    navigateToCategory(categoryId: number): void {
      this.$router.push(`/category/${categoryId}`);
    },
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

.table-scrollable {
  overflow-x: auto;

  margin: auto;
}
</style>
