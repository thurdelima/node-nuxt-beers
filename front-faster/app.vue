<template>
  <div>
    <Header />
    <body>
      <div class="container">
        <NuxtPage />
      </div>
    </body>
    <Footer />
  </div>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 128px);
  margin: 0;
  padding: 0;
}




@media (min-width: 1281px) {
  .m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}
}

@media (min-width: 1025px) {
 .m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}
}

@media (min-width: 801px) {
.m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}
}

@media (min-width: 600px) {
 .m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}
}

@media (min-width: 480px) {
  .m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}
}

@media (min-width: 320px) {
 .m-crumb {
  margin: 10px;

}

a {
 text-decoration: auto;
 color: rgba( 0, 0, 0 , 0.65);
}
}
</style>
