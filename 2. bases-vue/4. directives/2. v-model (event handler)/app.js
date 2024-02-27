// import 'bootstrap/dist/css/bootstrap.min.css';
let character = 'Batman'
let author = 'Bruce Wayne'
console.log(author)
const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]
console.log(quotes)

console.log('app.js')
//console.log( Vue )

const app = Vue.createApp({ //declarative programming
    // template: //html
    // `

    // `
    data() {
        return {
            // frases: quotes
            // quotes: quotes
            character,
            author,
            quotes,
            newQuote: 'Hola mundo'
        }
    },
    methods: {
        changeQuote() {
            console.log('changeQuote')
            this.character = "Ironman"
            this.author = "Tony Stark"

            this.capitalize()
        },
        capitalize() {
            console.log('capitalize')
            this.character = this.character.toUpperCase()
        },
        addQuote( event ) {
            console.log(event)
            //console.log(this.newQuote)
            //console.log("aaaautor: ",this.author)
            this.newQuote === '' ? alert('Escribe una frase'):
            this.quotes.unshift({
                quote: this.newQuote,
                author: this.author
            })
        }
    }
})

app.mount('#myApp')