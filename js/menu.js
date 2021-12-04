// Находим нужные узлы
const popupButton = document.querySelector('.popup-menu__button');
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

// Выполняем функцию когда юзер кликает по кнопке
popupButton.addEventListener('click', handleMenu);

// Функция, которая показывает и скрывает попап
function handleMenu() {
	popupMenu.classList.toggle('hide-popup');
}

// Выполняем функцию когда юзер кликает в любом месте
document.addEventListener('click', hidePopup);

function hidePopup(el) {
	// Проверяем, есть ли внутри того по чему кликнули попап меню и кнопка
	let targetInside = popupWrapper.contains(el.target);
	// Если нет, то прячем меню
	if (!targetInside) {
		popupMenu.classList.add('hide-popup');
	}	
	else {
		return;
	}
}