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


</style>
