const apikey = 'gNZMXwXrFYkcf3bbB6657kEd0DBzmPQj'
const url = 'https://api.giphy.com/v1/gifs/random?api_key=' + apikey

fetch(url)
    .then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn)