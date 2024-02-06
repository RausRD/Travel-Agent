// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'
// import styles bundle
import 'swiper/css/bundle'
function swiperFunc() {
	const swiper = new Swiper('#testimonials-col-1', {
		direction: 'vertical',
		slidesPerView: 2,
		spaceBetween: 32,
		grabCursor: true,
		ally: false,
		freeMode: true,
		speed: 4000,
		loop: true,
		autoplay: {
			delay: 0.0,
			disableOnInteraction: false
		}
	})
	const swiper2 = new Swiper('#testimonials-col-2', {
		direction: 'vertical',
		slidesPerView: 2,
		spaceBetween: 32,
		grabCursor: true,
		ally: false,
		freeMode: true,
		speed: 4000,
		loop: true,
		autoplay: {
			delay: 0.0,
			disableOnInteraction: false
		}
	})
	const swiper3 = new Swiper('#testimonials-col-3', {
		direction: 'vertical',
		slidesPerView: 2,
		spaceBetween: 32,
		grabCursor: true,
		ally: false,
		freeMode: true,
		speed: 4000,
		loop: true,
		autoplay: {
			delay: 0.0,
			disableOnInteraction: false
		}
	})
}
export default swiperFunc
