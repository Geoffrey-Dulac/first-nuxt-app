<template>
  <div class="bg-grey">
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style>
.bg-grey {
  background-color: #f4f7f8;
}

h1 {
  color: #2ec58d;
}

h3 {
  color: #2f495e;
}

p {
  color: #687783;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
