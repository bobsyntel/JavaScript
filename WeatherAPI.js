

$(document).ready(()=>{
	console.log("Sanity check")
	$('#weather-form').submit((event)=>{
		event.preventDefault();
			console.log("Form submitted")

			const userCity = $('#city').val()

			console.log(userCity);

			const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`
			console.log(weatherUrl);
			$.getJSON(weatherUrl,(weatherData)=>{
				console.log(weatherData);
				const currTemp = weatherData.main.temp;
				const icon = weatherData.weather[0].icon;
				const high = weatherData.main.temp_max;
				const weatherHTML = `
					<div>
							<img src="http://openweathermap.org/img/w/${icon}.png"/>
							<div class = "col-sm-3">The temp in ${weatherData.name} is ${currTemp}</div>
							<div class = "col-sm-3">The high is forecasted at ${high}</div>
					</div>
				`
				$(`#weather-info`).html(weatherHTML);
			})
	});
})
