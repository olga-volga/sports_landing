$(document).ready(function(){
	$('.users-slider').slick({
		dots: true,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 375,
				settings: {
					centerMode: false,
					variableWidth: false
				}
			}
		]
	});
});