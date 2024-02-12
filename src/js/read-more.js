const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)')
const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)')
const desktop = window.matchMedia('(min-width: 1120px)')

// for brends
const brandsCards = document.querySelectorAll('.brands__item')
const brandsHideBtn = document.querySelector('.brands__btn_hidden')
const brandsOpenBtn = document.querySelector('.brands__btn_show-all')
const middleScreenHiddenBrands = document.querySelectorAll(
  '.brands__item:nth-last-child(-n + 5)'
)
const bigScreenHiddenBrands = document.querySelectorAll(
  '.brands__item:nth-last-child(-n + 3)'
)

brandsOpenBtn.addEventListener('click', function () {
  for (const card of brandsCards) {
    card.style.display = 'flex'
  }
  brandsOpenBtn.style.display = 'none'
  brandsHideBtn.style.display = 'block'
})

brandsHideBtn.addEventListener('click', function () {
  if (tablet.matches) {
    for (const card of middleScreenHiddenBrands) {
      card.style.display = 'none'
    }
  } else {
    for (const card of bigScreenHiddenBrands) {
      card.style.display = 'none'
    }
  }
  brandsOpenBtn.style.display = 'block'
  brandsHideBtn.style.display = 'none'
})

// for devices

const devicesCards = document.querySelectorAll('.devices__item')
const devicesHideBtn = document.querySelector('.devices__btn_hidden')
const devicesOpenBtn = document.querySelector('.devices__btn_show-all')
const middleScreenHiddenDevices = document.querySelectorAll(
  '.devices__item:nth-last-child(-n + 6)'
)
const bigScreenHiddenDevices = document.querySelectorAll(
  '.devices__item:nth-last-child(-n + 5)'
)

devicesOpenBtn.addEventListener('click', function () {
  for (const card of devicesCards) {
    card.style.display = 'flex'
  }
  devicesOpenBtn.style.display = 'none'
  devicesHideBtn.style.display = 'block'
})

devicesHideBtn.addEventListener('click', function () {
  if (tablet.matches) {
    for (const card of middleScreenHiddenDevices) {
      card.style.display = 'none'
    }
  } else {
    for (const card of bigScreenHiddenDevices) {
      card.style.display = 'none'
    }
  }
  devicesOpenBtn.style.display = 'block'
  devicesHideBtn.style.display = 'none'
})

//text

const btnReadMore = document.querySelector('.description__btn')
const btnHide = document.querySelector('.description__btn_hidden')
const extraText = document.querySelector('.text__par')
const addClass = document.getElementById('extraText')

btnReadMore.addEventListener('click', function () {
  extraText.classList.remove('text__par')
  btnReadMore.style.display = 'none'
  btnHide.style.display = 'block'
})

btnHide.addEventListener('click', function () {
  addClass.classList.add('text__par')
  btnReadMore.style.display = 'block'
  btnHide.style.display = 'none'
})
