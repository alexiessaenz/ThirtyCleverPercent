const characters = ['Mario', 'Luigi', 'Toad', 'Peach'];

const mario = characters[0];
const luigi = characters[1];

console.log(mario, luigi);

const [mario2,, toad, bowser = 'No existe'] = characters;

console.log(mario2, toad);

const returnArray1 = () => {
    return ['ABC', 123];
}
const array1 = returnArray1();
console.log(array1[0], array1[1]);

const returnArray2 = (array) => {
    return [array[0], array[1]];
}

const [letters, numbers] = returnArray1(['ABC', 123]);
const [letters2, numbers2] = returnArray2(['ABC', 123]);

console.log(letters, numbers);
console.log(letters2, numbers2);


const returnArray3 = ([letters, numbers]) => {
    return [letters, numbers];
}
const [letters3, numbers3] = returnArray3(['XYZ', 789]);
console.log(letters3, numbers3);