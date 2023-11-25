// script.js

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherDataElement = document.getElementById('weatherData');
  
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c4dec692834516b5df55d5c6ea56709&units=metric`)
      .then(response => response.json())
      .then(data => {
        const { name, sys, main, weather } = data;
        const weatherInfo = `
          <h2>${name}, ${sys.country}</h2>
          <p>Temperature: ${main.temp}°C</p>
          <p>Description: ${weather[0].description}</p>
          <p>Humidity: ${main.humidity}%</p>
          <!-- Display other weather data as needed -->
        `;
        weatherDataElement.innerHTML = weatherInfo;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        weatherDataElement.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
      });
  }
  