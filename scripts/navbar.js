$(document).ready(function() {
	$("#btn-navbar-mobile").on('click', function() {
		var $navctrol = $("#navcontrol-mobile");
		if ($navctrol.hasClass('hidden')) { $("#navcontrol-mobile").removeClass('hidden') }
		else { $("#navcontrol-mobile").addClass('hidden'); }
	});
});