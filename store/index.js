export const state = () => ({
  step: 0,
  score: 0,
  round1: {
    question: "J'invite un tanche et ...",
    proposals: ["je viole Cendrillon.", "je suis fan de Jean-Luc Lahaye.", "je doigte un bonhomme de neige."],
    goodanswer: "je doigte un bonhomme de neige.",
    useranswer: ""
  },
  round2: {
    question: "Vous êtes marié? ...",
    proposals: ["non, Philippe et Nicole.", "Non, j'ai un paillasson welcome.", "Non, pas d'enfants, pas de nains."],
    goodanswer: "Non, j'ai un paillasson welcome.",
    useranswer: ""
  },
  round3: {
    question: "Je caresse un pompier et ...",
    proposals: ["je dépouille Francis Lalanne.", "je tutoie David Charvet.", "je pue du pull."],
    goodanswer: "je pue du pull.",
    useranswer: ""
  },
  round4: {
    question: "Je démonte une poule et ...",
    proposals: ["j'envoie un fax à Noël Mamère.", "je roule en Safrane.", "je m'auto-suce."],
    goodanswer: "j'envoie un fax à Noël Mamère.",
    useranswer: ""
  },
  round5: {
    question: "Virginie, sac en papier ou Vis ma vie ? ...",
    proposals: [" je mange des glaces sans sucre.", "Je tente la toupie manouche.", "Non, je conduis avec des gants."],
    goodanswer: "Je tente la toupie manouche.",
    useranswer: ""
  }
})

export const mutations = {
  incrementstep(state) {
    state.step++
  },
  decrementstep(state) {
    state.step = 0
  },
  incrementscore(state) {
    state.score++
  },
  decrementscore(state) {
    state.score = 0
  }
}