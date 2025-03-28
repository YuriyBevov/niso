import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const tagsSliders = document.querySelectorAll(".tags");

console.log("tags");

if (tagsSliders.length) {
	tagsSliders.forEach((slider) => {
		new Swiper(slider, {
			slidesPerView: "auto",
			spaceBetween: 15,
		});
	});
}
