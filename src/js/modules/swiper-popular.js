// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'
// import styles bundle
import 'swiper/css/bundle'
function swiperFunc() {
	const swiper = new Swiper('#popular', {
		slidesPerView: 4,
		spaceBetween: 32,
		navigation: {
			nextEl: '#sliderNext',
			prevEl: '#sliderPrev',
		},
	})
}
export default swiperFunc
