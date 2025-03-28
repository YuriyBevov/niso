import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const sliders = document.querySelectorAll(".base-cards-slider");

if (sliders.length) {
	sliders.forEach((slider) => {
		const topSlider = slider.classList.contains("top-side-slider");
		const pagination = slider.querySelector(".swiper-pagination");
		const btnNext = slider.querySelector(".swiper-button-next");
		const btnPrev = slider.querySelector(".swiper-button-prev");

		new Swiper(slider, {
			modules: [Navigation, Pagination, Autoplay, EffectFade],
			slidesPerView: 1,
			spaceBetween: 20,

			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			effect: topSlider ? "fade" : null,
			loop: topSlider ? true : false,

			breakpoints: !topSlider
				? {
						640: {
							slidesPerView: 2,
						},
						960: {
							slidesPerView: 3,
						},
				  }
				: null,

			navigation: {
				nextEl: btnNext ? btnNext : null,
				prevEl: btnPrev ? btnPrev : null,
			},

			pagination: {
				el: pagination ? pagination : null,
				dynamicBullets: true,
			},
		});
	});
}
