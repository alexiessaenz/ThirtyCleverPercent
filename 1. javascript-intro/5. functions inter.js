const getUser1 = () => {
    return {uid: 'ABC123', username: 'El_Papi1502'}
 }
 
 const getUser2 = () => ({uid: 'ABC123', username: 'El_Papi1502'})
 console.log(getUser1())
 console.log(getUser2())
 
 // Tarea
 const heroes = () =>[{id: 1, name: 'Batman'     },
                      {id: 2, name: 'Superman'   },
                      {id: 3, name: 'WonderWoman'}]
 
 const existe = heroes().some(heroe => heroe.id === 1)
 const heroefound = heroes().find(heroe => heroe.id === 1)
 
 console.log(existe)
 console.log(heroefound)