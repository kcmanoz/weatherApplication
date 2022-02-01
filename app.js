const enterButton = document.querySelector('.enter')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.cityName')
const temo = document.querySelector('.temp')
const desc = document.querySelector('.desc')

//const apiKey = "f580de753052bf1267e78e268fb51e63";

enterButton.addEventListener('click', function(){ 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=f580de753052bf1267e78e268fb51e63`)
.then(response => response.json())
.then(data  => console.log(data))

.catch(err => alert("Something went wrong!"))
});