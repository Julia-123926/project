
import Swiper from 'swiper'
import { Navigation, Pagination} from 'swiper/modules'
import 'swiper/modules/pagination.scss'

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
}

let swiper1 = null
let swiper2 = null
let swiper3 = null

const mobile = window.matchMedia('(max-width: 767px)')

function initSwipers() {
  swiper1 = new Swiper('.swiper__brands', swiperOptions)
  swiper2 = new Swiper('.swiper__devices', swiperOptions)
  swiper3 = new Swiper('.swiper__prices', swiperOptions)
}

function destroySwipers() {
  if (swiper1) {
    swiper1.destroy()
    swiper1 = null
  }
  if (swiper2) {
    swiper2.destroy()
    swiper2 = null
  }
  if (swiper3) {
    swiper3.destroy()
    swiper3 = null
  }
}

function swiperMode() {
  if (mobile.matches) {
    if (!swiper1 && !swiper2 && !swiper3) {
      initSwipers()
    }
  } else {
    destroySwipers()
  }
}

window.addEventListener('load', swiperMode)
window.addEventListener('resize', swiperMode)