/*
	WEB 303
	Starting file for Assignment 1 
	{Your Name Here}
*/

$(document).ready(function() {
	let salaryField = document.querySelector('#salary');
	let percentField = document.querySelector('#percent');
	let spanElement = document.querySelector('span#spend');
	
	const changeFunction = function() {
		let salaryValue = parseInt($(salaryField).val());
		let percentValue = parseInt($(percentField).val());
		if (!isNaN(salaryValue) && !isNaN(percentValue)) {
			spanElement.textContent = "$" + (salaryValue * percentValue / 100).toFixed(2);
		}
	};
	
	salaryField.addEventListener('change', changeFunction);
	percentField.addEventListener('change', changeFunction);
});