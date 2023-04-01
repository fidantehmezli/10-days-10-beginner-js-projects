const apiKey = "b55589bed90f352fa48ef3aea7c11144";

function getWeather() {
	const city = document.getElementById("city").value;

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
		.then(response => response.json())
		.then(data => {
			const weather = document.getElementById("weather");
			weather.innerHTML = `
				<p>Weather in ${data.name}: ${data.weather[0].description}</p>
				<p>Temperature: ${Math.round(data.main.temp - 273.15)} &deg;C</p>
				<p>Humidity: ${data.main.humidity}%</p>
				<p>Wind Speed: ${data.wind.speed} m/s</p>
			`;
			weather.style.display = "block";
		})
		.catch(error => console.log(error));
}
