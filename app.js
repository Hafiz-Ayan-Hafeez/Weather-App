const input = document.querySelector ("#input");
const btn = document.querySelector ("#btn");
const weather = document.querySelector ("#weather");


btn.addEventListener ("click" , () => {
    fetch (`https://api.weatherapi.com/v1/current.json?key=671f1130a9d74bc1854171818241811&q=${input.value}&aqi=no`)

    .then (res => res.json())

    .then (res => {

        console.log (res);
        weather.innerHTML += `

        <img class="image" src="https:${res.current.condition.icon}">

        <div class="parent">
            <div class="location">
                <h1 class="head-weather">Location</h1>
                <p><b>Country:</b> ${res.location.country}</p>
                <p><b>Name:</b> ${res.location.name}</p>
                <p><b>Region:</b> ${res.location.region}</p>
                <p><b>Local Time:</b> ${res.location.localtime}</p>
            </div>
            
            <div class="current">
                <h1 class="head-weather">Current</h1>
                <p><b>Temperature in C:</b> ${res.current.temp_c}<b><sup>o</sup></b>C</p>
                <p><b>Temperature in F:</b> ${res.current.temp_f}<b><sup>o</sup></b>F</p>
                <p><b>Wind:</b> ${res.current.wind_degree}Km/h</p>
                <p><b>Humidity:</b> ${res.current.humidity}%</p>
            </div>
        </div>`;
    })

    .catch (() => {
        weather.innerHTML += `<div class="error"> No City Or Country Found? </div>`
    });

    input.value = "";
    weather.innerHTML = "";
});