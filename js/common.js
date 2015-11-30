/*
 * @project Tuneduc
 * @version 1.0
 * @author Thiago Aguiar - Tuneduc
 * @copyright 2015
 ==================== JS FUNCTIONS ==================== */

// função do plugin swiper para a elaboração dos slides de produtos
var swiper = new Swiper('.swiper-container', {
	spaceBetween: 0, // determina a margin direita entre um slide e outro
	autoplay: 3000, // tempo de transação entre um slide e outro
	loop: true, // navegação sem fim
	hashnav: true, // inserção de hash na url para pegar o slide selecionado
	keyboardControl: true, // navegação dos slides por setas do teclado
    nextButton: '.swiper-button-next', // link para próximo slide
    prevButton: '.swiper-button-prev' // link para slide anterior
});

// função de navegação do produto através do thumbnail
var _changeFeatureByThumbnail = {
	init: function() {
		var _thumbnail = $('body section.container ul.thumbnail li');
		var _index = '';

		_thumbnail.on({
			mouseenter: function() {
				_thumbnail.css({"display": 0.4, "-khtml-opacity": 0.4, "opacity": 0.4});
				$(this).css({"-moz-opacity": 1, "-khtml-opacity": 1, "opacity": 1});
			},
			mouseleave: function() {
				_thumbnail.css({"-moz-opacity": 1, "-khtml-opacity": 1, "opacity": 1});
			},
			click: function() {
				_index = $(this).find('a[data-slide]')
				swiper.slideTo(_index.data('slide'));
			}
		});
	}
}