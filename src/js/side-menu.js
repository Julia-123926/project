const burgerBtn = document.querySelector('.round-btn_burger')
const sideMenu = document.querySelector('.side-menu_hidden')
const page = document.getElementById('addOpacity')
const closeBtn = document.querySelector('.menu-header__btn.close-btn')
const mobile = window.matchMedia('(max-width: 767px)')

function closeByHover(e) {
  if (e.target.classList.contains('content-wrapper')) {
    console.log(e.target)
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
  sideMenu.style.position = 'fixed'
  sideMenu.style.width = '320px'
  sideMenu.style.height = '100vh'
  page.classList.add('main-container_transparent')
  document.addEventListener('click', closeByHover)
})

closeBtn.addEventListener('click', closeSideModal)
