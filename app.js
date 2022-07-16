const container = document.querySelector(".container")
const enterButton = document.querySelector(".enter")
const inputValue = document.querySelector(".inputValue")
const cityName = document.querySelector(".cityName")
const temp = document.querySelector(".temp")
const desc = document.querySelector(".desc")
const backArrow = document.querySelector(".material-icons-outlined")

enterButton.addEventListener('click', function(){ 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=f580de753052bf1267e78e268fb51e63`)
.then(response => response.json())
.then(data  => {
    const nameData = data['name'];
    const tempData = Math.round(data['main']['temp']);
    const descData = data['weather'][0]['description'];
    //set DOM elements from the API
    //using the hexadecimal code \u2103 to include degree celsius symbol
    cityName.innerHTML = nameData;
    temp.innerHTML = tempData + "\u2103";
    desc.innerHTML = descData;

    container.classList.add("active");
})
.catch(err => alert("Something went wrong!"))
});

backArrow.addEventListener("click", () =>{
    container.classList.remove("active");
});

