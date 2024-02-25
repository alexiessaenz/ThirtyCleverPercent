console.log('app.js')
//console.log( Vue )

const app = Vue.createApp({ //declarative programming
    // template: //html
    // `

    // `
    data() {
        return {
            quote: "i'm Batman",
            autor: "Bruce Wayne",
        }
    },
    methods: {
        changeQuote() {
            console.log('changeQuote')
            this.quote = "I'm Ironman"
            this.autor = "Tony Stark"

            this.capitalize()
        },
        capitalize() {
            console.log('capitalize')
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')