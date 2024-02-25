const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Promesa resuelta')
            reject('No promesa resuelta')
        }, 2000)
    
    })
}

const medirTiempoAsync = async () => {
    try {
        console.time('medirTiempoAsync')
        console.log('inicio')
         await miPromesa()       // on async context
         .then(console.log)     // on async context
         .catch(console.warn)  // on async context
        console.log('fin') 
        console.timeEnd('medirTiempoAsync')
        return wa
    } catch (err) {
        throw new Error(err)
    }
}

medirTiempoAsync()
