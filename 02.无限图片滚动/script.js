const imgsContainer = document.querySelector('.imgs-container')
const loadingEl = document.querySelector('.loading-container')
const apiKey = 'VMKOmTxee5cCXlIvWVSqovG3xtaQxIfk0jeivYLrM1o'

let count = 5
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

let imgsNum = 0
let ready = false
let initialLoad = true
function setAttributes (element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

function imgLoaded () {
  imgsNum++
  if (imgsNum === count) {
    loadingEl.hidden = true
    imgsNum = 0
    ready = true
    count = 10
    if (initialLoad) {
      count = 10
      initialLoad = false
      apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
    }
  }
}

function dispalyPhotos (photosArray) {
  photosArray.forEach(item => {
    const aEl = document.createElement('a')
    // aEl.setAttribute('href', item.links.html)
    setAttributes(aEl, {
      target: '_blank',
      href: item.links.html
    })
    const imgEl = document.createElement('img')
    // imgEl.setAttribute('alt', item.alt_description)
    // imgEl.setAttribute('title', item.alt_description)
    // imgEl.setAttribute('src', item.urls.regular)
    setAttributes(imgEl, {
      alt: item.alt_description,
      title: item.alt_description,
      src: item.urls.regular
    })
    imgEl.addEventListener('load', imgLoaded)
    aEl.appendChild(imgEl)
    imgsContainer.appendChild(aEl)
  })
}

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    if (ready) {
      ready = false
      getPhotos()
    }
  }
})

async function getPhotos () {
  try {
    const response = await fetch(apiUrl)
    const photosArray = await response.json()
    dispalyPhotos(photosArray)
  } catch (error) {
    console.log(error)
  }
}

getPhotos()
