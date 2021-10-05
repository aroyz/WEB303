// WEB303 Assignment 3
// Abbey Roy

$(document).ready(function() {
	const dataProcessing = function(team) {
		$.each(team.teammembers, function(index, teamMember) {
			$("div#team").append(
				`<div id="member${index}">
					<h3>${teamMember.name}</h3>
					<h4>${teamMember.title}</h4>
					<p>${teamMember.bio}</p>
				</div>`
			);
		});
	}
	const jsonFunction = function() {
		$.getJSON("team.json", function(team) {
			dataProcessing(team);
		});
	}
	const ajaxFunction = function() {
		$.ajax({
			url: 'team.json',
			type: 'GET',
			dataType: 'json',
			beforeSend: function() {
				$("div#team").html(
					`<p>Loading...</p>`
				);
			},
			error: function(xhr) {
				$("div#team").html(
					`<p>Data failed to load.</p>`
				);
				alert(`An error ocured while retrieving data. Error code ${xhr.status}: ${xhr.statusText}`);
			},
			timeout: 5000,
			success: function(team) {
				$("div#team").empty();
				dataProcessing(team);
			}
		});
	}
	//jsonFunction();
	ajaxFunction();
});