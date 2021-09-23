// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect").hide().css("height", "401px").slideDown(1000);
	});
	$("a#vconvert").click(function() {
		$("#solution").load("convert.html #vconvert").hide().css("height", "601px").slideDown(1000);
	});
	$("a#vretain").click(function() {
		$("#solution").load("retain.html #vretain").hide().css("height", "351px").slideDown(1000);
	});
});

