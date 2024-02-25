const person = { name: 'Tony Stark',
                 age: 30,
                 codeName: 'Ironman' }

const { name,
        age, 
        codeName,
        power = 'No tiene poder' } = person

console.log(name)
console.log(age)
console.log(codeName)
console.log(power)

const createHero1 = (person) => {
    const { name, age, codeName, power } = person
    return {
        id: 123,
        name : name,
        age : age,
        codeName : codeName,
        power : power
    }
}

const createHero2 = ({name, age, codeName, power}) => {
    return {
        id: 123,
        name,
        age,
        codeName,
        power
    }
}

const createHero3 = ({name, age, codeName, power}) => ({ id: 123,
                                                          name,
                                                           age,
                                                            codeName,
                                                             power })

console.log( createHero1(person) )
console.log( createHero2(person) )
console.log( createHero3(person) )