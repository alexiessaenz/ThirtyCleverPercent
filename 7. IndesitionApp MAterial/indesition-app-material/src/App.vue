<template>
  <Indesition />
  <div class="container py-4 px-3 mx-auto">
    <h1>Hello, Bootstrap and Vite!</h1>
    <button class="btn btn-primary">Primary button</button>

  </div>
    <p>
      -------------------------------------------------
    </p>
    <label>
      Material 3
      <md-checkbox checked></md-checkbox>
    </label>

    <md-outlined-button>Back</md-outlined-button>
    <md-filled-button >Next</md-filled-button>
    <!-- Browser elements -->
<form>
  <label>
    Email
    <input type="email" name="email" required>
  </label>
  <label>
    Subscribe
    <input type="checkbox" name="subscribe">
  </label>

  <button type="reset">Reset</button>
  <button>Submit</button>
</form>

<!-- Material elements -->
<form>
  <md-outlined-text-field label="Email" type="email"
      name="email" required></md-outlined-text-field>
  <label>
    Subscribe
    <md-checkbox name="subscribe"></md-checkbox>
  </label>

  <md-text-button type="reset">Reset</md-text-button>
  <md-outlined-button>Submit</md-outlined-button>
</form>
<p>----------------------------</p>
<!-- <script type="module" src="./index.js"></script> -->

<label>
  Material 3
  <md-checkbox checked></md-checkbox>
</label>

<md-outlined-button>Back</md-outlined-button>
<md-filled-button>Next</md-filled-button>
</template>
<!-- <script src="./components/Form/index.js"></script> -->
<!-- <script src="../bundle.js"></script> -->
<!-- <script  src="../bundle.js"> -->
<script  >
import Indesition from './components/Indesition/Indesition.vue'

export default {
  name: 'App',
  components: {
    Indesition
  }
}
</script>

<style lang="scss">
//import bootstrap
//@import "~bootstrap/scss/bootstrap";
//@import url('https://fonts.googleapis.com/css2?family=Open%20Sans:wght@400;500;700&display=swap');
:root {
        --md-ref-typeface-brand: 'Roboto Flex', sans-serif;
        --md-ref-typeface-plain: 'Roboto Flex', sans-serif;
    }
// :root {
//   --md-ref-typeface-brand: 'Open Sans';
//   --md-ref-typeface-plain: system-ui;
// }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
