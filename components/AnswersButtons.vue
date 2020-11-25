<template>
  <div class="d-flex justify-content-between">
    <vs-button class="width-160 paragraph-color" transparent v-for="item in this.proposals" :key="item" @click="clickonanswer(item)">
      {{ item }}
    </vs-button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      proposals: {
        type: Array,
        required: true
      }
    },
    methods: {
      clickonanswer: function(answerSelected) {
        if (this.$store.state.step === 0) {
          this.$store.state.round1.useranswer = answerSelected
          if (answerSelected === this.$store.state.round1.goodanswer) {
            this.$store.commit('incrementscore');
          }
        }
        else if (this.$store.state.step === 1) {
          this.$store.state.round2.useranswer = answerSelected
          if (answerSelected === this.$store.state.round2.goodanswer) {
            this.$store.commit('incrementscore');
          }
        }
        else if (this.$store.state.step === 2) {
          this.$store.state.round3.useranswer = answerSelected
          if (answerSelected === this.$store.state.round3.goodanswer) {
            this.$store.commit('incrementscore');
          }
        }
        else if (this.$store.state.step === 3) {
          this.$store.state.round4.useranswer = answerSelected
          if (answerSelected === this.$store.state.round4.goodanswer) {
            this.$store.commit('incrementscore');
          }
        }
        else if (this.$store.state.step === 4) {
          this.$store.state.round5.useranswer = answerSelected
          if (answerSelected === this.$store.state.round5.goodanswer) {
            this.$store.commit('incrementscore');
          }
        }
        this.$store.commit('incrementstep');
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

