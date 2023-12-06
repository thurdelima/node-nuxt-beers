<template>
  <div class="container-fluid">
    <div class="dashboard-title-cs">
      <h2 class="display-5">Beer test <span class="emoji">🍺</span></h2>
      <p class="lead">Details about specific beer.</p>
    </div>
  </div>

  <div class="row featurette">
    <div class="col-md-5">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        class="shadow-sm rounded-circle img-w"
        alt="Avatar"
      />
    </div>
    <div class="col-md-7">
      <p class="lead">
        <span class="text-body-secondary">Description: </span>Another
        featurette? Of course. More placeholder content here to give you an idea
        of how this layout would work with some actual real-world content in
        place.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "beerId",

  async asyncData({ params }) {
    const beerId = params.id;
    return { beerId };
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

.text-body-secondary {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
  font-weight: 500 !important;
}

.img-w {
    width: 70%;
  }



@media (min-width: 1281px) {
  .img-w {
    width: 70%;
  }
}

@media (min-width: 1025px) {
  .img-w {
    width: 70%;
  }
}

@media (min-width: 801px) {
  .img-w {
    width: 50%;
  }
}

@media (min-width: 600px) {
  .img-w {
    width: 70%;
  }
}

@media (min-width: 480px) {
  .col-md-5 {
    text-align: center;
  }

  .img-w {
    width: 50%;
  }
}

@media (min-width: 320px) {
  .col-md-5 {
    text-align: center;
  }

  img-w: {
    width: 50%;
  }
}
</style>
