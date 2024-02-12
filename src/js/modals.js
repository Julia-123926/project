//modals
const callBtns = document.querySelectorAll('.btn_call')
const feedbackBtns = document.querySelectorAll('.btn_chat')
const hiddenModalCall = document.querySelector('.modal_hidden.modal-call')
const hiddenModalFeedback = document.querySelector(
  '.modal_hidden.modal-feedback'
)
const page = document.getElementById('addOpacity')
const closeModalBtns = document.querySelectorAll('.modal .close-btn')

function closeByHover(e) {
  if (e.target.classList.contains('content-wrapper')) {
    hiddenModalCall.style.display = 'none'
    page.classList.remove('main-container_transparent')
  }
}

callBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    hiddenModalCall.style.display = 'block'
    page.classList.add('main-container_transparent')
    document.addEventListener('click', closeByHover)
  })
})

feedbackBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    hiddenModalCall.style.display = 'block'
    page.classList.add('main-container_transparent')
    document.addEventListener('click', closeByHover)
  })
})

closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    hiddenModalCall.style.display = 'none'
    page.classList.remove('main-container_transparent')
    document.removeEventListener('click', closeByHover)
  })
})
