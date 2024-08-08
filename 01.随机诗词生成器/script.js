const quoteEl = document.querySelector('#quote')
const authorEl = document.querySelector('#author')
const originEl = document.querySelector('#origin')
const quoteBtn = document.querySelector('#new-quote')
const twitterBtn = document.querySelector('#twitter')
const loadingEl = document.querySelector('.loader')
const quoteContainerEl = document.querySelector('#quote-container')
function showLoadingSpinner () {
  loadingEl.hidden = false
  quoteContainerEl.hidden = true
}

function removeLoadingSpinner () {
  loadingEl.hidden = true
  quoteContainerEl.hidden = false
}

async function getQuote () {
  showLoadingSpinner()
  const response = await fetch('https://v1.jinrishici.com/all.json')
  const quoteData = await response.json()
  return quoteData
}

async function newQuote (retryCount = 3) {  // 设置重试次数限制
  try {
    const quoteData = await getQuote()
    removeLoadingSpinner()
    if (quoteData.content.length > 20) {
      quoteEl.classList.add('long-quote')
    } else {
      quoteEl.classList.remove('long-quote')
    }
    quoteEl.innerHTML = quoteData.content
    authorEl.innerHTML = quoteData.author
    originEl.innerHTML = `《${quoteData.origin}》`
    
  } catch (error) {
    if (retryCount > 0) {
      console.warn(`Retrying... attempts left: ${retryCount}`)
      await new Promise(resolve => setTimeout(resolve, 1000))  // 添加延迟
      newQuote(retryCount - 1)  // 减少重试次数并重试
    } else {
      removeLoadingSpinner()
      console.error('Failed to fetch quote after multiple attempts:', error)
      // 在这里可以显示一个友好的错误提示给用户
      quoteEl.innerHTML = '无法获取名言，请稍后再试。'
      authorEl.innerHTML = ''
      originEl.innerHTML = ''
    }
  }
}

quoteBtn.addEventListener('click', newQuote)

function tweetQuote () {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteEl.innerText} —— ${authorEl.innerText}${originEl.innerText}`
  window.open(twitterUrl, '_blank')
}

twitterBtn.addEventListener('click', tweetQuote)

newQuote()
