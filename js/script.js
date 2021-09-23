// WEB303 Assignment 2
// Abbey Roy

$(document).ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html #vprospect").hide();
		$("#solution #vretain").slideDown(1000);
	});
	$("a#vconvert").click(function() {
		$("#solution").load("convert.html #vconvert").hide();
		$("#solution #vconvert").slideDown(1000);
	});
	$("a#vretain").click(function() {
		$("#solution").load("retain.html #vretain").hide();
		$("#solution #vprospect").slideDown(1000);
	});
});

