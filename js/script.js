// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {

	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect", function() {
			$(this).css("height", "401px");
		});
	});

	$("a#vconvert").click(function() {
		$("#solution").load("convert.html #vconvert", function() {
			$(this).css("height", "601px");
		});
	});

	$("a#vretain").click(function() {
		$("#solution").load("retain.html #vretain", function() {
			$(this).css("height", "351px");
		});
	});
	
});

