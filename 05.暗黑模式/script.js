const switchEl = document.querySelector('input[type="checkbox"]')
const navEl = document.querySelector('#nav')
const textBox = document.querySelector('#text-box')
const toggleIconEl = document.querySelector('#toggle-icon')
function imageMode (mode) {
  document.querySelector('#image1').src = `img/undraw_proud_coder_${mode}.svg`
  document.querySelector('#image2').src = `img/undraw_feeling_proud_${mode}.svg`
  document.querySelector(
    '#image3'
  ).src = `img/undraw_conceptual_idea_${mode}.svg`
}
function darkMode () {
  navEl.style.backgroundColor = 'rgba(0,0,0, 0.5)'
  textBox.style.backgroundColor = 'rgba(255,255,255, 0.5)'
  imageMode('dark')
  toggleIconEl.children[0].textContent = 'Dark Mode'
  toggleIconEl.children[1].classList.replace('fa-sun', 'fa-moon')
  localStorage.setItem('theme', 'dark')
}

function lightMode () {
  navEl.style.backgroundColor = 'rgba(255,255,255, 0.5)'
  textBox.style.backgroundColor = 'rgba(0,0,0, 0.5)'
  imageMode('light')
  toggleIconEl.children[0].textContent = 'Light Mode'
  toggleIconEl.children[1].classList.replace('fa-moon', 'fa-sun')
  localStorage.setItem('theme', 'light')
}

function changeTheme (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    lightMode()
  }
}

switchEl.addEventListener('change', changeTheme)

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark')
  darkMode()
  switchEl.checked = true
} else {
  document.documentElement.setAttribute('data-theme', 'light')
  switchEl.checked = false
  lightMode()
}
