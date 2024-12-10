// Replace with your actual OpenWeatherMap API key
const api = `https://api.openweathermap.org/data/2.5`;
const key = 'apikey';

function getWeatherIcon(description) {
    const icons = {
        'clear sky': 'fas fa-sun',
        'few clouds': 'fas fa-cloud-sun',
        'scattered clouds': 'fas fa-cloud-sun',
        'broken clouds': 'fas fa-cloud',
        'overcast clouds': 'fas fa-cloud',
        'rain': 'fas fa-cloud-rain',
        'thunderstorm': 'fas fa-bolt',
        'snow': 'fas fa-snowflake'
    };
    return icons[description.toLowerCase()] || 'fas fa-cloud';
}

function search() {
    let searchInput = document.getElementById("search");
    let url = `${api}/weather?q=${searchInput.value}&appid=${key}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.querySelector(".w-info").textContent = `
                         City not found. Please try again.
                     `;
                return;
            }

            const { main, wind, weather } = data;
            const temperature = main.temp;
            const windSpeed = wind.speed;
            const humidity = main.humidity;
            const description = weather[0].description;
            const weatherIcon = getWeatherIcon(description);

            // Generate HTML for weather card
            const weatherInfo = `
                 <div class="city-name">${data.name}, ${data.sys.country}</div>
                 <div class="weather-icon"><i class="${weatherIcon}"></i></div>
                 <div class="result">
                    <div class="weather-detail">  
                        <p><i class="fas fa-thermometer-half"></i>Temperature: ${temperature.toFixed(1)} &deg;C</p>  
                    </div>
                    <div class="weather-detail">
                        <p><i class="fas fa-tint"></i>Humidity: ${humidity}%</p>
                    </div>
                    <div class="weather-detail"> 
                        <p><i class="fas fa-wind"></i>Wind Speed: ${windSpeed.toFixed(1)} m/s</p>
                    </div>
                    <div class="weather-detail">
                        <p><i class="fas fa-cloud"></i>Description: ${description}</p>
                    </div>
                 </div>
                 `;

            document.querySelector(".w-info").innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.querySelector(".w-info").innerHTML = `
                     Something went wrong. Please try again later.
                 `;
        });
}