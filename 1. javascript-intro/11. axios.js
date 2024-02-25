import axios from 'axios'

const apikey = 'gNZMXwXrFYkcf3bbB6657kEd0DBzmPQj'
const urlt = 'https://api.giphy.com/v1/gifs/random?api_key=' + apikey

const giphyapi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey
    }
})

export default giphyapi

giphyapi.get('/random')
    .then(resp => resp.data)
    .then(({data}) => {
        console.log(data)
        //const {data} = resp.data
        const {url} = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch(console.warn)
