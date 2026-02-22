const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.search-btn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');

async function checkWeather(city){
    const api_key  = "7d43fc1a8fb2b710541af666983db6cb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
    description.innerHTML = weather_data.weather[0].description;
    humidity.innerHTML = weather_data.main.humidity;
    windSpeed.innerHTML = weather_data.wind.speed;

    switch(weather_data.weather[0].main){
    case 'Clouds' :
        weatherImg.src = "cloud.png";
        break;
    case 'Rain' :
        weatherImg.src = "rain.png";
        break;
    case 'Clear' :
        weatherImg.src = "clear.png";
        break;
    case 'Mist' :
        weatherImg.src = "mist.png";
        break;
    case 'Snow' :
        weatherImg.src = "snow.png";
        break;
}
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(inputBox.value);
})


