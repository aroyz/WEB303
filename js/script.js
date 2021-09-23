// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect");
		$("#solution #vretain").hide().slideDown(1000);
	});
	$("a#vconvert").click(function() {
		$("#solution").load("convert.html #vconvert");
		$("#solution #vconvert").hide().slideDown(1000);
	});
	$("a#vretain").click(function() {
		$("#solution").load("retain.html #vretain");
		$("#solution #vprospect").hide().slideDown(1000);
	});
});

