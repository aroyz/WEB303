// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").empty().load("prospect.html #vprospect");
	});
	$("#vconvert").click(function() {
		$("#solution").empty().load("convert.html #vprospect");
	});
	$("#vretain").click(function() {
		$("#solution").empty().load("retain.html #vprospect");
	});
});

