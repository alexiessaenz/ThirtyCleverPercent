let nombre = 'moises'
const apellido = "saenz"
console.log(nombre + apellido) //moises saenz

const nombreApellido = `${nombre} ${apellido}` //literal template
console.log(nombreApellido) //moises saenz

console.log(`${nombre}  ${apellido}`) //back sticking 
if (true) {
    let nombre = "alexi"
    console.log(nombre + apellido) // alexi saenz
}

console.log(nombre + apellido) //moises saenz


