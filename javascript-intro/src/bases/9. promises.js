

console.log('Start')

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 10)
        if (num % 2 === 0)  
            resolve('This is my resolved data') // resolve
        reject('This is my rejected data') // reject
        }
        , 2000) // timeout for setTimeout
    }
)
// .then(data => console.log(data))
.then(console.log)
// .catch(err => console.warn(err))
.catch(console.warn)

console.log('End')

//+++++++++++++++

import { getHeroById } from "./bases/8. imports & exports/8.0 imports & exports"


const getHeroByIdAsinc = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if (hero)
                resolve(hero) // resolve
            reject('Hero not found') // reject
        },2000)
    })
}

getHeroByIdAsinc(1)
    // .then(console.log)
    //.then(hero => console.log(`Hero: ${hero.name}, found`))
    .then(hero => console.log('Hero:', hero.name, ', found'))
    .catch(console.warn)