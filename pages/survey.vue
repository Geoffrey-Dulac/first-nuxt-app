<template>
  <div class="text-center">
    <div :v-if="$store.state.step === 0">
        <h1>question 1</h1>
        <h3>{{ $store.state.round1.question }}</h3>
        <AnswersButtons :proposals="$store.state.round1.proposals"/>
    </div>
  </div>
</template>

<script>
  import AnswersButtons from '../components/AnswersButtons'
  export default {
    components: {
      AnswersButtons
    },
  }
</script>