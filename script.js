// WEB303 Assignment 3
// Abbey Roy

$(document).ready(function() {
	const jsonFunction = function() {
		$.getJSON("team.json", function(team) {
			$.each(team.teammembers, function(index, teamMember) {
				$("div#team").append(
					`<div id="member${index}">
						<h3>${teamMember.name}</h3>
						<h4>${teamMember.title}</h4>
						<p>${teamMember.bio}</p>
					</div>`
				);
			});
		});
	}
	const ajaxFunction = function() {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "team.json", true);
		xhr.onreadystatechange = function() {
			let team = JSON.parse(xhr.responseText);
			console.log(team);
		}
		xhr.send();
	}
	ajaxFunction();
});