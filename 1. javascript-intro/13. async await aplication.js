import giphyapi from "./bases/11. axios"

const getimage = async () => {
    try {
        const { data } = (await giphyapi.get('/random')).data
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
        
    } catch (err) {
        throw err
    }

}