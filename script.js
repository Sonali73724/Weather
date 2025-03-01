const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetail = document.querySelector('.weather-details');

let city = document.querySelector('.search-box input');
city.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        fetchWeather();
    }
    else{
        fetchcity();
    }
});
search.addEventListener('click',fetchWeather);

function fetchcity(){
    console.log("fetchting")
}

function fetchWeather(){
    const APIKey = '39181d7cc832e9b79a5781fe659ff3c1';
    city=document.querySelector('.search-box input').value
    document.querySelector('.searchbtn').classList.add('dnone');
    document.querySelector('.crossbtn').classList.remove('dnone');
    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        console.log(json);

        let temp=json.main.temp;
        console.log('The current temperature is: '+temp);
        document.getElementById('temperature').innerHTML=temp;

        let hum=json.main.humidity;
        document.getElementById('humidity').innerHTML=hum;

        let windd=json.wind.speed;
        document.getElementById('wind').innerHTML=windd;

        let desid=json.weather[0].description;
        document.getElementById('des').innerHTML=desid;

        const image = document.querySelector('.weather-box img');
        const tempature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/cloud (2).png';
                break;

            case ' Mist':
                image.src = 'images/mist.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;
            default:
                image.src = 'images/cloud (2).png';
        }




    });

} 
function initMap(){
    inputbox=document.getElementById('inputbox')
    const autocomplete = new google.maps.places.Autocomplete(inputbox);

}
function clearbox(){
    document.getElementById('inputbox').value='';
    document.querySelector('.searchbtn').classList.remove('dnone');
    document.querySelector('.crossbtn').classList.add('dnone');
}