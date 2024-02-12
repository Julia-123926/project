
const burgerBtn = document.querySelector('.menu__btn_burger')
const sideMenu = document.querySelector('.side-menu_hidden')
const page = document.getElementById('addOpacity')
const closeBtn = document.querySelector('.menu-header__btn.close-btn')

function closeByHover(e) {
  if (e.target.classList.contains('content-wrapper')) {
    closeSideModal()
  }
}

function closeSideModal() {
  sideMenu.style.display = 'none'
  page.classList.remove('main-container_transparent')
  document.removeEventListener('click', closeByHover)
}

burgerBtn.addEventListener('click', function () {
  sideMenu.style.display = 'block'
  page.classList.add('main-container_transparent')
  sideMenu.style.height = '1850px'
  document.addEventListener('click', closeByHover)
})

closeBtn.addEventListener('click', closeSideModal)


