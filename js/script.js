// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").empty().load("prospect.html #vprospect");
	});
	$("a#vconvert").click(function() {
		$("#solution").empty().load("convert.html #vconvert");
	});
	$("a#vretain").click(function() {
		$("#solution").empty().load("retain.html #vretain");
	});
});

