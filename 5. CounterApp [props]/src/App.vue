<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <Counter v-bind:start='15'/> -->
  <Counter :start='100'/>
  <Counter title="Entraron"/>
  <Counter title="Salieron"/>
</template>

<script>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
