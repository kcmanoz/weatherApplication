const enterButton = document.querySelector('.enter')
const inputValue = document.querySelector('.inputValue')
const cityName = document.querySelector('.cityName')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')

enterButton.addEventListener('click', function(){ 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=f580de753052bf1267e78e268fb51e63`)
.then(response => response.json())
.then(data  => {
    const nameData = data['name'];
    const tempData = Math.round(data['main']['temp']);
    const descData = data['weather'][0]['description'];
    //set DOM elements from the API
    //using the hexadecimal code \u2103 to include degree celcius symbol
    cityName.innerHTML = nameData;
    temp.innerHTML = tempData + "\u2103";
    desc.innerHTML = descData;
})
.catch(err => alert("Something went wrong!"))
});

