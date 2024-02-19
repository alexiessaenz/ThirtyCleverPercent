function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

const saludar1 = function ( nombre ) {
    return `Hola, ${nombre}!`
}
const saludar2 = (nombre) => {
    return `Hola, ${nombre}!`
}
const saludar3 = (nombre='Pedro') => 
    `Hola, ${nombre}!`

const saludar4 = nombre => `Hola, ${nombre}!`

// const saludar = true
const nombre = 'Moises'

console.log( saludar (nombre) );
console.log( saludar1(nombre) );
console.log( saludar2(nombre) );
console.log( saludar3(nombre) );
console.log( saludar3() );
console.log( saludar4(nombre) );