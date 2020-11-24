<template>
  <div class="text-center">
    <img src="~/assets/kamoulox.jpg" class="height-175px mb-3 radius-10px" />
    <h1>KAMOULOX !</h1>
    <h3 class="mt-4">Bienvenue à toi jeune fan de Kamoulox</h3>
    <p class="mt-1">Tu penses connaitre toutes les répliques mythiques ? Tu es au bon endroit, tu n'es qu'à un click du test !</p>
    <NuxtLink to="/survey" class="text-decoration-none">
      <button-homepage class="mx-auto">
        <p class="margin-block-end-0">Se tester !</p>
      </button-homepage>
    </NuxtLink>
  </div>
</template>

<script>
  import ButtonHomepage from '../components/ButtonHomepage'
  export default {
    components: {
      ButtonHomepage
    },
  }
</script>

<style>
  .height-175px {
    height: 175px;
  }
  .radius-10px {
    border-radius: 10px;
  }

  .margin-block-end-0 {
    margin-block-end: 0px;
  }
</style>
