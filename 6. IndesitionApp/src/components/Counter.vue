<template>
  <!-- <h2>{{ title || 'Counter' }}</h2> -->
  <h2>{{ customTitle }} {{ start }}</h2>
  <p>{{ count }} <sup>2</sup> = {{ square() }}</p>
  <button type="button" @click="oneLess">-1</button>
  <button type="button" v-on:click="onePlus">1+</button>
</template>

<script>
export default {
    // props: ['title','start'],
    // props: {
        // title: String,
        // start: Number
        // }
    props: {
        title: {
            type: String,
            default: 'Counter'
        },
        start: {
            type: Number,
            default: 0,
            required: true,
            validator(value) {
                return value >= 100
            }
        }
    },

    // name: 'Counter',
    data() {
        return {
            count: this.start || 0
        }
    },
    methods: {
        square() {
            return this.count * this.count
        },
        onePlus() {
            return this.count++
        },
        oneLess() {
            this.count--
        }
    },
    computed: {
        squareComp() {
            console.error('squareComp')
            return this.count * this.count
        },
        customTitle() {
            // return this.title ? this.title : 'Counter'
            return this.title || 'Counter'
        }
    },
}
</script>

<style>
button{
    /* border-color: black; */
    /* border: 0 1px 2px 0; */
    background-color: #64b687;
    border: 1px solid white;
    border-bottom: 1px solid black;
    border-radius: 5px;
    border-right: 1px solid black;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}
button:hover{
    background-color: #5aa67b;
    border: 1px solid white;
    border-left: 1px solid gray;
    border-top: 1px solid gray;
    transition: 0.3s ease-in-out;
}
button:active{
    background-color: #4f9a6f;
    border: 1px solid white;
    border-left: 1px solid black;
    border-top: 1px solid black;
    transition: 0.3s ease-in-out;
}

</style>

