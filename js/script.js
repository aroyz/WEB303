// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect").hide().slideDown(1000).css("height", "401px");
	});
	$("a#vconvert").click(function() {
		$("#solution").load("convert.html #vconvert").hide().slideDown(1000).css("height", "601px");
	});
	$("a#vretain").click(function() {
		$("#solution").load("retain.html #vretain").hide().slideDown(1000).css("height", "351px");
	});
});

