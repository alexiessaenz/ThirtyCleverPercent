<template>
    <div>
        <h1>Indecision</h1>

    </div>
    <img v-if="image" :src='image' alt="bg">
    <div class="bg-dark"></div>  
    <div class="indecision-container">
        <input
          v-model="question" 
          type="text" 
          placeholder="Hazme una pregunta">
        <p>Recuerda terminar con un signo de interrogacion (?)</p>
        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IndesitionS',
  props: {
    msg: String
  },
  data() {
    return {
      question: null,
      answer: null,
      image: null,
      isValidQuestion: false
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...';
      // this.image  = null
      var { answer, image } =  await fetch('https://yesno.wtf/api').then( res => res.json() )
      // this.answer = answer
      this.image  = image
      this.answer = answer === 'yes'? 'si' : 'no'
       
    }
  },
  watch: {
    question(value) {
      // if(!value.includes('?')) return
      this.isValidQuestion = false
      if(!value.endsWith('?')) return
      this.isValidQuestion = true
      this.getAnswer()
    }
  }
}
</script>

//#region style
<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>
//#endregion style
