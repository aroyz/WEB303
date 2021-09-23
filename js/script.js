// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect");
	});
	$("#vconvert").click(function() {
		$("#solution").load("convert.html #vprospect");
	});
	$("#vretain").click(function() {
		$("#solution").load("retain.html #vprospect");
	});
});

