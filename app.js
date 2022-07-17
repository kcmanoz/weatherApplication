const container = document.querySelector(".container")
const errorText = document.querySelector(".error-text")
const enterButton = document.querySelector(".enter")
const inputValue = document.querySelector(".inputValue")
const cityName = document.querySelector(".cityName")
const temperature = document.querySelector(".temperature")
const humid = document.querySelector(".humid")
const desc = document.querySelector(".desc")
const backArrow = document.querySelector(".material-icons-outlined")

enterButton.addEventListener('click', function(){ 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=f580de753052bf1267e78e268fb51e63`)
.then(response => response.json())
.then(data  => weatherInfo(data))
.catch(err => alert("Something went wrong!"))
});

function weatherInfo(data) {
    if(data.cod == "404"){
        errorText.innerHTML = `${inputValue.value} is not a correct city name`;
    }else{
        const nameData = data.name;
        const {temp, humidity} = data.main
        const {description, id} = data.weather[0];
        //set DOM elements from the API
        //using the hexadecimal code \u2103 to include degree celsius symbol
        cityName.innerHTML = nameData;
        temperature.innerHTML = Math.floor(temp) + "\u2103";
        humid.innerHTML = humidity + "%" ;
        desc.innerHTML = description;
        container.classList.add("active");
    }
}

backArrow.addEventListener("click", () =>{
    container.classList.remove("active");
});

