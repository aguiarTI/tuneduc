/*
 * @project Tuneduc
 * @version 1.0
 * @author Thiago Aguiar - Tuneduc
 * @copyright 2015
 ==================== JS FUNCTIONS ==================== */

var swiper = new Swiper('.swiper-container', {
	spaceBetween: 20,
	autoplay: 3000,
	hashnav: true,
	keyboardControl: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});

var _changeFeature = {
	init: function() {
		var _thumbnail = $('a[data-slide]');
		_thumbnail.on({
			click: function() {
				swiper.slideTo($(this).data('slide'));
			}
		});
	}
}