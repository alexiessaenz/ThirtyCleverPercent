<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Counter v-bind:start='15'/> -->
  <Counter :start='100'/>
  <Counter title="Entraron"/>
  <Counter title="Salieron"/>
  <h1 class="md-typescale-display-medium">Hello Material!</h1>
  <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>

  <form>
    <p class="md-typescale-body-medium">Check out these controls in a form!</p>
    <md-checkbox></md-checkbox>
    <div>
      <md-radio name="group"></md-radio>
      <md-radio name="group"></md-radio>
      <md-radio name="group"></md-radio>
    </div>
    <md-outlined-text-field label="Favorite color" value="Purple"></md-outlined-text-field>
    <md-outlined-button type="reset">Reset</md-outlined-button>
  </form>

<md-outlined-text-field label="Favorite food">
</md-outlined-text-field>

<md-outlined-text-field placeholder="email@domain.com">
</md-outlined-text-field>

<div>First name</div>
<md-outlined-text-field aria-label="First name">
</md-outlined-text-field>
</template>

<script>
import '@material/web/all.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
imports: {
        "@material/web/"; "https://esm.run/@material/web/"
      }

import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter
  },
  methods: {
    sayHello() {
      alert('Hello!')
    }
  },

}
</script>

<style lang="scss">

@import "~bootstrap/scss/bootstrap";
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
</style>
