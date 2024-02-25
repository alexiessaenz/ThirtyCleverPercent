console.log('app.js')
console.log( Vue )

const app = Vue.createApp({ //declarative programming
    template: //html
    `
        <h1>Hola Mundo</h1>
        <p>{{[1,2,3,4,5,6]}}</p>
        <p>{{ {a:1, b:2} }}</p>
        <p>
            {{ 
                [
                    { a:1, b:2 },
                    { c:3, d:4 }
                ] 
            }}
        </p>
        <p>{{ 1 + 2 }}</p> 
        <p>{{ 1 + '2' }}</p> 
        <p>{{ 1 + Number('2') }}</p>
        <p>{{ 1 + parseInt('2') }}</p>
        <p>{{ 1 + parseFloat('2.5') }}</p>
        <p>{{ true? 'activo' : 'inactivo' }}</p>

    `
})

app.mount('#myApp')