$(document).ready(function () {
	var $header = $('header');
	var $menuBtn = $('.menu__btn');
	var $menu = $('header .outer__header > ul');

	function syncHeaderState() {
		if ($(window).scrollTop() > 1) {
			$header.addClass('active');
		} else {
			$header.removeClass('active');
		}
	}

	syncHeaderState();
	$(window).on('scroll', syncHeaderState);

	$menuBtn.on('click', 'a', function (e) {
		e.preventDefault();
		$menuBtn.toggleClass('active');
		$menu.stop(true, true).slideToggle(300);
	});
});
