const container = document.querySelector(".container");
const errorText = document.querySelector(".error-text");
const submitForm = document.querySelector("form");
const inputValue = document.querySelector(".input-value");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const description = document.querySelector(".description");
const backArrow = document.querySelector(".material-icons-outlined");

submitForm.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=f580de753052bf1267e78e268fb51e63`
    )
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === "404") {
                errorText.classList.add("error");
                errorText.innerHTML = `${inputValue.value} is not a correct city name`;
            } else {
                const nameData = data.name;
                const { temp, humidity: hum } = data.main;
                const { description: desc } = data.weather[0];

                //set DOM elements from the API
                //using the hexadecimal code \u2103 to include degree celsius symbol
                cityName.innerHTML = nameData;
                temperature.innerHTML = Math.floor(temp) + "\u2103";
                humidity.innerHTML = `Humidity: ${hum}%`;
                description.innerHTML = `Description: ${desc}`;
                container.classList.add("active");
            }
        })
        .catch(() => alert("Something went wrong!"));
});

backArrow.addEventListener("click", () => {
    container.classList.remove("active");
});
