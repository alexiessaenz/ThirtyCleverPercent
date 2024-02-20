import { owners } from "./data/heroes"

//console.log(owners)

import heros from "./data/heroes"
//console.log(heros)

import { heroes } from "./data/heroes"
//console.log(heroes)

export const getHeroById = (id) => heroes.find( hero => hero.id === id )
//console.log(getHeroById(2));

export const getHeroByFilter = (owner) => heroes.filter( hero => hero.owner === owner)
//console.log(getHeroByFilter('Marvel'));
