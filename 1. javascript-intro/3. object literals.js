const persona = {
    nombre : 'Moises',
    apellido : 'Saenz',
    edad : 25,
    direccion : {
        ciudad : 'Santa Tecla',
        zip : 12345
    }
}

console.log(`persona : ${persona}}`)
console.log('persona :' + JSON.stringify(persona))
console.log(persona)

// const persona2 = persona //copying rerefence on  memory
// const persona2 = {persona} // object inside another object {    }
// persona2.persona.nombre = 'alexis'
const persona2 = {...persona}  //spread operator to walk through [    ]
console.log(persona)
console.log('persona2: ')
persona2.nombre = 'alexi'
console.log(persona2)

//+++++++++++++++++++++

const arreglo = [1,2,3,4]
arreglo.push(5)

const arreglo2 = [...arreglo] //spread operator to walk through [    ]
arreglo2.push(6)

console.log(arreglo)
console.log(arreglo2)

