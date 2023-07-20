const inputBox = document.querySelector('.location-box');
const enterBtn = document.querySelector('.enter-btn');
const weatherIcons = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');

async function getWeatherData(city) {
    const api_key = "f580de753052bf1267e78e268fb51e63";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weatherData.main.temp)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}`;
}

enterBtn.addEventListener('click', () => {
    getWeatherData(inputBox.value);
});