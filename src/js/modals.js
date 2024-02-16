//modals
const callBtns = document.querySelectorAll('.round-btn_call')
const feedbackBtns = document.querySelectorAll('.round-btn_chat')
const hiddenModalCall = document.querySelector('.modal_hidden.modal-call')
const hiddenModalFeedback = document.querySelector(
  '.modal_hidden.modal-feedback'
)
const page = document.getElementById('addOpacity')
const closeModalBtns = document.querySelectorAll('.modal .close-btn')

const sideMenu = document.querySelector('.side-menu_hidden')
const tab = window.matchMedia('(max-width: 1119px)')

function closeByHover(e) {
  if (e.target.classList.contains('content-wrapper')) {
    hiddenModalCall.style.display = 'none'
    hiddenModalFeedback.style.display = 'none'
    page.classList.remove('main-container_transparent')
  }
}

callBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    hiddenModalCall.style.display = 'block'
    hiddenModalFeedback.style.display = 'none'
    page.classList.add('main-container_transparent')
    if (tab.matches) {
      sideMenu.style.display = 'none'
    }
    document.addEventListener('click', closeByHover)
  })
})

feedbackBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    hiddenModalFeedback.style.display = 'block'
    hiddenModalCall.style.display = 'none'
    page.classList.add('main-container_transparent')
    if (tab.matches) {
      sideMenu.style.display = 'none'
    }
    document.addEventListener('click', closeByHover)
  })
})

closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    hiddenModalCall.style.display = 'none'
    hiddenModalFeedback.style.display = 'none'
    page.classList.remove('main-container_transparent')
    document.removeEventListener('click', closeByHover)
  })
})
