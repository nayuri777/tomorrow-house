const myMenu = document.querySelector('.my-menu')
const myMenuButton = myMenu.querySelector('.my-menu-button')
const myMenuContent = myMenu.querySelector('.my-menu-content')

function closeMyMenuOnClickingOutside(e) {
  console.log('window')
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

function toggleMyMenu() {
  console.log('???')
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)

// const myMenu = document.querySelector('.my-menu')
// const myMenuButton = document.querySelector('.my-menu-button')

// function closeMyMenuOnClickingOutside(e) {
//   console.log('window')
//   if (!myMenu.contains(e.target)) {
//     myMenu.classList.remove('is-active')
//     window.removeEventListener('click', closeMyMenuOnClickingOutside)
//   }
// }

// function toggleMyMenu() {
//   if (!myMenu.classList.contains('is-active')) {
//     window.addEventListener('click', closeMyMenuOnClickingOutside)
//   }
//   myMenu.classList.toggle('is-active')
// }

// myMenuButton.addEventListener('click', toggleMyMenu)
