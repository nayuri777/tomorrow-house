const myMenu = document.querySelector('.my-menu');
const myMenuButton = myMenu.querySelector('.my-menu-button')

function myMenuClickingOutSide(e){
  if(!myMenu.contains(e.target)){
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', myMenuClickingOutSide)
  }
}

function toggleMyMenu(){

  if(!myMenu.classList.contains('is-active')){
    window.addEventListener('click', myMenuClickingOutSide)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)
