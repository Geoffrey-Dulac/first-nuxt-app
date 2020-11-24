<template>
  <div class="d-flex justify-content-between">
    <vs-button class="width-160 paragraph-color" @click="clickround1" transparent v-for="item in this.proposals" :key="item">
      {{ item }}
    </vs-button>
  </div>
</template>

<script>
  export default {
    props: {
      proposals: {
        type: Array,
        required: true
      }
    },
    methods: {
      clickround1: function() {
        console.log(this);
      }
    }
  }
</script>

<style>
.width-160 {
  width: 160px;
}
.paragraph-color {
  color: #687783;
}
</style>

