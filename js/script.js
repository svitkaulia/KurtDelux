window.addEventListener('DOMContentLoaded', () => {
	const menu_1 = document.querySelector('.menu_1')
	const second_menu_1 = document.querySelector('.second_menu_1'),
	menuItem = document.querySelectorAll('.menu_item_1'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu_1.classList.toggle('menu_1_active');
		second_menu_1.classList.toggle('second_menu_1_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu_1.classList.toggle('menu_1_active');
			second_menu_1.classList.toggle('second_menu_1_active');
		})
	})
})