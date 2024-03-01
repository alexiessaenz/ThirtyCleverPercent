<template>
  <h2>Counter</h2>
  <p>{{ count }} <sup>2</sup> = {{ count * count }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredMethod() }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredComputed }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredMethod() }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredComputed }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredMethod() }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredComputed }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredMethod() }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredComputed }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredMethod() }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredComputed }}</p>
  <p>{{ count }} <sup>2</sup> = {{ getSquaredMethod() }}</p>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            count: 5
        }
    },
    methods: {
        getSquaredMethod() {
            console.log('getSquaredMethod() is called')
            return this.count * this.count
        }
    },
    computed: {
        getSquaredComputed() {
            console.log('getSquaredComputed() is called')
            return this.count * this.count
        }
    },
}
</script>

<style>

</style>

