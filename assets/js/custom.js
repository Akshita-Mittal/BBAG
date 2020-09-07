$(document).ready(function () {
	$('.slideset').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 850,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}]
	});
});