"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Slider

	const arrowPrev = document.querySelector('.arrow--prev'),
		  arrowNext = document.querySelector('.arrow--next'),
		  sliderWrapper = document.querySelector('.users-slider'),// обертка слайдера
		  slidesField = document.querySelector('.users-slider__inner'),// полоса со всеми слайдами
		  sliderItem = document.querySelectorAll('.slider__item'),// слайд
		  slidesShownWidth = window.getComputedStyle(sliderWrapper).width,// ширина видимой части со слайдами для показа
		  dots = document.querySelectorAll('.dot');

	let slideWidth,// ширина одного слайда
		slideIndex = 1,
		offset = 0;// величина смещения слайда

	slidesField.style.width = 100 * sliderItem.length + '%';// задаем ширину полосы со всеми слайдами

	if (document.documentElement.clientWidth > 768) {
		slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2) / 6;
	} else if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 426) {
		slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2) / 2.5;
	} else {
		slideWidth = +slidesShownWidth.slice(0, slidesShownWidth.length - 2);
	}

	sliderItem.forEach(item => {
		item.style.width = slideWidth;
	});

	function removeDotActive() {
		dots.forEach(item => {
			item.classList.remove('dot--active');
		});
	}
	
	function makeDotActive(i) {
		if (i > sliderItem.length) {
			slideIndex = 1;
		}
		if (i < 1) {
			slideIndex = sliderItem.length;
		}
		removeDotActive();
		dots[slideIndex - 1].classList.toggle('dot--active');
	}

	makeDotActive(slideIndex);

	function nextDot(n) {
		makeDotActive(slideIndex += n);
	}

	arrowNext.addEventListener('click', (e) => {
		if (offset == slideWidth * (sliderItem.length - 1)) {
			offset = 0;
		} else {
			offset += slideWidth;
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
		nextDot(1);
	});

	arrowPrev.addEventListener('click', (e) => {
		if (offset == 0) {
			offset = slideWidth * (sliderItem.length - 1);
		} else {
			offset -= slideWidth;
		}
		slidesField.style.transform = `translateX(-${offset}px)`;
		nextDot(-1);
	});

});