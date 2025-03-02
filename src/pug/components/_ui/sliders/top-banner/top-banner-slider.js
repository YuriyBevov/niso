import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slider = document.querySelector(".top-banner-slider");
console.log(slider);

if (slider) {
	const pagination = slider.querySelector(".swiper-pagination");
	const btnNext = slider.querySelector(".swiper-button-next");
	const btnPrev = slider.querySelector(".swiper-button-prev");

	new Swiper(slider, {
		modules: [Navigation, Pagination, Autoplay],
		slidesPerView: 1,
		spaceBetween: 20,
		// effect: "fade",
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false,
		// },

		// breakpoints: {
		// 	640: {
		// 		slidesPerView: 2,
		// 	},
		// 	960: {
		// 		slidesPerView: 3,
		// 	},
		// },

		navigation: {
			nextEl: btnNext ? btnNext : null,
			prevEl: btnPrev ? btnPrev : null,
		},

		// pagination: {
		// 	el: pagination ? pagination : null,
		// 	dynamicBullets: true,
		// },
	});
}
