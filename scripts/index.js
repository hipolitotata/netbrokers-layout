var indexCarousel = 1;
function slideGoTo(number) {
	$(`[id="cellphone-${number - 1}"]`).attr('class', 'fa-regular fa-circle')
	if (number > 3) { number = 1; }
	$(`[id="cellphone-${number}"]`).attr('class', 'fa-solid fa-circle');
	$('[id="carousel"]').css({
		"translate": `calc((-208px - 104px - 52px)*${number-1})`
	});
}
setInterval(() => {
	slideGoTo(indexCarousel);
	if (indexCarousel > 3) { indexCarousel = 1}
	else { indexCarousel += 1; }
}, 2000);


$(document).ready(function(){
	$('#sendEmailForm').on('submit', function(event) {
		event.preventDefault(); // prevent reload
		var inputs = [
			"name",
			"business_name",
			"email",
			"phone_number",
			"technology",
			"employees_number"
		];

		var formData = new FormData($('#sendEmailForm')[0]);
		formData.append('service_id', 'service_1nwjbqr');
		formData.append('template_id', 'template_ra5554q');
		formData.append('user_id', 'U56wW5cdWlENUO9zC');
		
		inputs.forEach(input => {
			var value = $('#'+input)[0].value
			formData.append(input, value);
		});
	
		$.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
			type: 'POST',
			data: formData,
			contentType: false, // auto-detection
			processData: false // no need to parse formData to string
		}).done(function() {
			inputs.slice(0,4).forEach(input => {
				$('#'+input).val('');
			});
			inputs.slice(4,6).forEach(input => {
				$(`#${input} option:first`).attr('selected', true);
			});
			$("#tooltipEmail").css({ top: '2.5rem' });
			setTimeout(() => {
				$("#tooltipEmail").css({ top: '-5rem' });
			}, 1000);
		});
	});

	$("#IWantAnAssessment").on('click', function() {
		$("#sendEmailCard")[0].scrollIntoView({
			behavior: 'smooth' 
		});
	});
});