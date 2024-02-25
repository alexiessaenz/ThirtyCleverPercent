let firstname
let lastname 

console.log(`${firstname || 'No name'} ${lastname || 'No lastname'}`)

const isActive = true

const message = (isActive) ? 'Active' : 'Inactive'

// if (isActive) 
//     message = 'Active'
// else 
//     message = 'Inactive'    

console.log(message)