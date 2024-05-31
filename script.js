const apiKey = 'e594c0f6605fb12c2858c52ff9a523e2';

async function getWeather() {


    
    console.log('Get Weather button clicked');
    const city = document.getElementById('city').value;
    console.log('City:', city);
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Secunderabad&appid=e594c0f6605fb12c2858c52ff9a523e2&units=metric';
    


    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('API Response:', data);

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    console.log('Displaying Weather:', data);
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
