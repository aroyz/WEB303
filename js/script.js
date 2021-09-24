// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {

	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect", function() {
			$(this).hide().css("height", "401px").slideDown(400);
		});
	});

	$("a#vconvert").click(function() {
		$("#solution").load("convert.html #vconvert", function() {
			$(this).hide().css("height", "601px").slideDown(400);
		});
	});

	$("a#vretain").click(function() {
		$("#solution").load("retain.html #vretain", function() {
			$(this).hide().css("height", "351px").slideDown(400);
		});
	});
	
});

