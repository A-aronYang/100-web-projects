const menuBarsEl = document.querySelector('.menu-bars')
const overlayEl = document.querySelector('.overlay')
const homeEl = document.querySelector('#nav-1')
const aboutEl = document.querySelector('#nav-2')
const skillsEl = document.querySelector('#nav-3')
const projectsEl = document.querySelector('#nav-4')
const contactEl = document.querySelector('#nav-5')
const navList = [homeEl, aboutEl, skillsEl, projectsEl, contactEl]

// let isActive = false
function navAnimation(direction1, direction2) {
  navList.forEach((el,index) => {
    el.classList.replace(`slide-${direction1}-${index + 1}`, `slide-${direction2}-${index + 1}`)
  })
}

function toggleNav() {
  menuBarsEl.classList.toggle('change')
  menuBarsEl.classList.toggle('overlay-active')
  if (menuBarsEl.classList.contains('overlay-active')) {
    // isActive = true
    // overlayEl.classList.add('overlay-slide-right')
    // overlayEl.classList.remove('overlay-slide-left')
    overlayEl.classList.replace('overlay-slide-left', 'overlay-slide-right')
    // navList.forEach((el,index) => {
    //   el.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`)
    // })
    navAnimation('out', 'in')
    // homeEl.classList.add('slide-in-1')
    // aboutEl.classList.add('slide-in-2')
    // skillsEl.classList.add('slide-in-3')
    // projectsEl.classList.add('slide-in-4')
    // contactEl.classList.add('slide-in-5')
    // homeEl.classList.remove('slide-out-1')
    // aboutEl.classList.remove('slide-out-2')
    // skillsEl.classList.remove('slide-out-3')
    // projectsEl.classList.remove('slide-out-4')
    // contactEl.classList.remove('slide-out-5')
  } else {
    // isActive = false
    // overlayEl.classList.remove('overlay-slide-right')
    // overlayEl.classList.add('overlay-slide-left')
    overlayEl.classList.replace('overlay-slide-right', 'overlay-slide-left')
    // homeEl.classList.add('slide-out-1')
    // aboutEl.classList.add('slide-out-2')
    // skillsEl.classList.add('slide-out-3')
    // projectsEl.classList.add('slide-out-4')
    // contactEl.classList.add('slide-out-5')
    // homeEl.classList.remove('slide-in-1')
    // aboutEl.classList.remove('slide-in-2')
    // skillsEl.classList.remove('slide-in-3')
    // projectsEl.classList.remove('slide-in-4')
    // contactEl.classList.remove('slide-in-5')
    // navList.forEach((el,index) => {
    //   el.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`)
    // })
    navAnimation('in', 'out')
  }
}

menuBarsEl.addEventListener('click', toggleNav)
navList.forEach((el) => {
  el.addEventListener('click', toggleNav)
})