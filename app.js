const inputBox = document.querySelector('.location-box');
const enterBtn = document.querySelector('.enter-btn');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');

const errorPopup = document.getElementById('error-popup');
const locationError = document.querySelector('.location-error');
const weatherBody = document.querySelector('.weather-body');

async function getWeatherData(city) {
    const api_key = "f580de753052bf1267e78e268fb51e63";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());

    if (weatherData.cod === `404`) {
        locationError.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error");
        return;
    }

    locationError.style.display = "none";
    weatherBody.style.display = "flex";

    temperature.innerHTML = `${Math.round(weatherData.main.temp)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed} km/h`;

    switch (weatherData.weather[0].main) {
        case 'Clear':
            weatherIcon.src = "/assets/clear.png";
            break;
        case 'Clouds':
            weatherIcon.src = "/assets/clouds.png";
            break;
        case 'Rains':
            weatherIcon.src = "/assets/rain.png";
            break;
        case 'Mist':
            weatherIcon.src = "/assets/mist.png"
            break;
        case 'Snow':
            weatherIcon.src = "/assets/snow.png";
            break;
    }

}
function handleWeatherData() {
    const inputValue = inputBox.value.trim(); // Removes any leading or trailing white spaces
    if (inputValue) {
        getWeatherData(inputValue);
        errorPopup.style.display = 'none';  // Hide error popup if there is input
    } else {
        errorPopup.style.display = 'block';
        setTimeout(() => {  // Hide error popup after 1 seconds
            errorPopup.style.display = 'none';
        }, 1000);
    }
};

inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleWeatherData();
    }
});

enterBtn.addEventListener('click', handleWeatherData);
