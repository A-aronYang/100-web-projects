async function getQuote() {
  // https://cors-anywhere.herokuapp.com/ 需要打开解锁一下
  const proxyUrl = `https://cors-anywhere.herokuapp.com/`
  const apiUrl = `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`
  try {
    const response = await fetch(proxyUrl + apiUrl)
    const data = await response.json()
  } catch (error) {
    getQuote
    console.log('whoops,no quote', error);
  }
}

getQuote()