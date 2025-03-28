document.addEventListener("DOMContentLoaded", () => {
	const items = document.querySelectorAll(".sidemenu li");

	if (items.length) {
		items.forEach((item) => {
			item.addEventListener("click", (evt) => {
				if (item.querySelector("ul")) {
					item.classList.toggle("expanded");
				}
			});
		});
	}
});
