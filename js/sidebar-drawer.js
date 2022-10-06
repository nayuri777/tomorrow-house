const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button')

function drawerMenuToggle() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
  drawerMenu.classList.toggle('is-active')
}

drawerMenuButtonList.forEach(function (button) {
  button.addEventListener('click', drawerMenuToggle)
})
