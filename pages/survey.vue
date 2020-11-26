<template>
  <div class="text-center">
    <div v-if="this.$store.state.step === 0">
      <h1>question 1</h1>
      <h3 class="mt-3">{{ $store.state.round1.question }}</h3>
      <AnswersButtons :proposals="$store.state.round1.proposals"/>
    </div>
    <div v-if="this.$store.state.step === 1">
      <h1 v-if="this.$store.state.round1.useranswer == this.$store.state.round1.goodanswer" class="green-good-answer">Bonne réponse</h1>
      <h1 v-else class="red-bad-answer">Mauvaise réponse</h1>
      <h1>question 2</h1>
      <h3 class="mt-3">{{ $store.state.round2.question }}</h3>
      <AnswersButtons :proposals="$store.state.round2.proposals"/>
    </div>
    <div v-if="this.$store.state.step === 2">
      <h1 v-if="this.$store.state.round2.useranswer == this.$store.state.round2.goodanswer" class="green-good-answer">Bonne réponse</h1>
      <h1 v-else class="red-bad-answer">Mauvaise réponse</h1>
      <h1>question 3</h1>
      <h3 class="mt-3">{{ $store.state.round3.question }}</h3>
      <AnswersButtons :proposals="$store.state.round3.proposals"/>
    </div>
    <div v-if="this.$store.state.step === 3">
      <h1 v-if="this.$store.state.round3.useranswer == this.$store.state.round3.goodanswer" class="green-good-answer">Bonne réponse</h1>
      <h1 v-else class="red-bad-answer">Mauvaise réponse</h1>
      <h1>question 4</h1>
      <h3 class="mt-3">{{ $store.state.round4.question }}</h3>
      <AnswersButtons :proposals="$store.state.round4.proposals"/>
    </div>
    <div v-if="this.$store.state.step === 4">
      <h1 v-if="this.$store.state.round4.useranswer == this.$store.state.round4.goodanswer" class="green-good-answer">Bonne réponse</h1>
      <h1 v-else class="red-bad-answer">Mauvaise réponse</h1>
      <h1>question 5</h1>
      <h3 class="mt-3">{{ $store.state.round5.question }}</h3>
      <AnswersButtons :proposals="$store.state.round5.proposals"/>
    </div>
    <div v-if="this.$store.state.step === 5">
      <h1 v-if="this.$store.state.round5.useranswer == this.$store.state.round5.goodanswer" class="green-good-answer">Bonne réponse</h1>
      <h1 v-else class="red-bad-answer">Mauvaise réponse</h1>
      <NuxtLink to="/" class="text-decoration-none">
      <h3>Ton score : {{ this.$store.state.score }}/5</h3>
      <p v-if="this.$store.state.score <= 2">C'est pas top, retournes devant ta télé !</p>
      <p v-else-if="this.$store.state.score <= 4 && this.$store.state.score > 2">Pas mal, on voit que Kamoulox t'as bercé...</p>
      <p v-else>Ok, t'es une vrai machine du Kamoulox !</p>
        <button-homepage class="mx-auto">
          <p class="margin-block-end-0" @click="backStepAndScoreTo0()" >Homepage</p>
        </button-homepage>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import AnswersButtons from '../components/AnswersButtons'
  import ButtonHomepage from '../components/ButtonHomepage'
  export default {
    components: {
      AnswersButtons,
      ButtonHomepage
    },
    methods: {
      backStepAndScoreTo0: function() {
        this.$store.commit('decrementstep');
        this.$store.commit('decrementscore');
      }
    }
  }
</script>

<style>
  .margin-block-end-0 {
    margin-block-end: 0px;
  }
  .green-good-answer {
    color: rgb(38 151 70);
  }
  .red-bad-answer {
    color: rgb(207 39 40);
  }
</style>