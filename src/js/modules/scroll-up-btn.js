/* purgecss start ignore */
import { gsap } from "gsap";

window.addEventListener("load", () => {
	const btn = document.createElement("button");
	btn.classList.add("scroll-up-btn");
	btn.setAttribute("aria-label", "В начало страницы");

	gsap.set(btn, {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "fixed",
		bottom: "20px",
		right: "20px",
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		backgroundColor: "var(--secondary)",
		zIndex: 89,
		mixBlendMode: "multiply",
		padding: "5px",
		border: "none",
		transform: "translateY(150px)",
		backgroundImage: "url(/assets/img/icon-up.svg)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "12px",
		backgroundPosition: "center",
	});

	document.body.append(btn);

	let isActive = false;
	window.addEventListener("scroll", () => {
		const viewportHeight = document.documentElement.clientHeight;

		if (window.scrollY > viewportHeight * 1.3) {
			if (!isActive) {
				isActive = true;
				gsap.fromTo(
					btn,
					{
						y: "150px",
					},
					{
						y: "0",
						duration: 0.7,
						ease: "back",
					},
				);
			}
		} else {
			if (isActive) {
				isActive = false;
				gsap.fromTo(
					btn,
					{
						y: "0",
					},
					{
						y: "150px",
						duration: 0.5,
						ease: "linear",
					},
				);
			}
		}
	});

	btn.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
});
/* purgecss end ignore */
