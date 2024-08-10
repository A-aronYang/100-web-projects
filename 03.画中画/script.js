const videoEl = document.querySelector('#video')
const buttonEl = document.querySelector('#button')

async function selectMediaStream () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoEl.srcObject = mediaStream
    videoEl.onloadedmetadata = async () => {
      await videoEl.play()
      await videoEl.requestPictureInPicture()
    }
  } catch (error) {
    console.log('出错了：' + error)
  }
}

buttonEl.addEventListener('click', async () => {
  buttonEl.disabled = true
  selectMediaStream()
  buttonEl.disabled = false
})

