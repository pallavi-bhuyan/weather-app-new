const inputbox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const Temperature = document.querySelector('.Temperature');
const Description = document.querySelector('.Description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
// const location_not_found = document.querySelector('.weather-body');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(City){
    const api_key = "8e08e3abd44d6afa8f7fbce1ea6b9c50"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
    
    if(weather_data.cod === 404){
        location_not_found.Style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    console.log("run");
    // location_not_found.style.display="none";
    
    Temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}℃`;
    Description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;
    switch(weather_data.weather[0].main){
     case 'cloudy':
     weather_img. src="/images/cloudy.jpg";
     break;
     
     case 'Rain':
        weather_img. src="/images/Rain.jpg";
        break;
        case 'Snowy':
            weather_img. src="/images/Snowy.jpg";
            break;
            case 'sunny':
                weather_img. src="/images/sunny.jpg";
                break;
                case 'thunder':
                    weather_img. src="/images/thunder.jpg";
                    break;
    
    }
    console.log(weather_data);

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});