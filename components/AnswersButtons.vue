<template>
  <div class="d-flex justify-content-between">
    <vs-button class="width-160" transparent :active="active == 1" @click="active = 1" v-for="item in this.proposals" :key="item">
      {{ item }}
    </vs-button>
  </div>
</template>

<script>
  export default {
    data:() => ({
      active: 0
    }),
    props: {
      proposals: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>

</style>

