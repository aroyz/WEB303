// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect");
	});
	$("a#vconvert").click(function() {
		$("#solution").load("convert.html #vconvert");
	});
	$("a#vretain").click(function() {
		$("#solution").load("retain.html #vretain");
	});
});

