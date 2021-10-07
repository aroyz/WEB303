/*
    Assignment 4
    {Abbey Roy}
*/

$(document).ready(function(){
    // your code here
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				$("#youarehere").html(
					`<div id="current-location">
						<p>Your current location is:</br>
						Latitude: ${position.coords.latitude}</br>
						Longitude: ${position.coords.longitude}</p>
					</div>`
				);
				if (window.localStorage) {
					if (localStorage.getItem('latitude')) {
						$("#youarehere").append(
							`<div id="last-location">
								<p>Your last stored location was:</br>
								Latitude: ${localStorage.getItem('latitude')}</br>
								Longitude: ${localStorage.getItem('longitude')}</p>
								<p>You have traveled ${calcDistance(localStorage.getItem('latitude'), localStorage.getItem('longitude'), position.coords.latitude, position.coords.longitude)} metres</p>
							</div>`
						);
					}
					else {
						$("#youarehere").append(
							`<p>Welcome! This is the first time you've visited this page.</p>`
						);
					}
					localStorage.setItem('latitude', `${position.coords.latitude}`);
					localStorage.setItem('longitude', `${position.coords.longitude}`);
				}
				else {
					$("#youarehere").html(
						`<p>Can't retrieve last location because local storage is not available. Please try again.</p>`
					);
				}
			},
			function() {
				$("#youarehere").html(
					`<p>Unable to retrieve geolocation. Please try again.</p>`
				);
			}
		);
	}
	else {
		$("#youarehere").html(
			`<p>Geolocation is not available. Please try again.</p>`
		);
	}

    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


