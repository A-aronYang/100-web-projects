const quoteEl = document.querySelector('#quote')
const authorEl = document.querySelector('#author')
const originEl = document.querySelector('#origin')
const quoteBtn = document.querySelector('#new-quote')
const twitterBtn = document.querySelector('#twitter')
const loadingEl = document.querySelector('.loader')
const quoteContainerEl = document.querySelector('#quote-container')
function loading() {
  loadingEl.hidden = false
  quoteContainerEl.hidden = true
}

function complete() {
  loadingEl.hidden = true
  quoteContainerEl.hidden = false
}

async function getQuote () {
  loading()
  try {
    const response = await fetch('https://v1.jinrishici.com/all.json')
    const quoteData = await response.json()
    return quoteData
  } catch (error) {}
}

async function newQuote() {
  const quoteData = await getQuote()
  complete()
  if (quoteData.content.length > 20 ) {
    quoteEl.classList.add('long-quote')
  } else {
    quoteEl.classList.remove('long-quote')
  }
  quoteEl.innerHTML = quoteData.content
  authorEl.innerHTML = quoteData.author
  originEl.innerHTML = `《${quoteData.origin}》`
}

quoteBtn.addEventListener('click', newQuote)

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteEl.innerText} —— ${authorEl.innerText}${originEl.innerText}`
  window.open(twitterUrl, '_blank')
}

twitterBtn.addEventListener('click', tweetQuote)

newQuote()