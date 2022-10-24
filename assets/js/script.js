// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


// When user searches for a city *clicks search btn*
// - store the user input into a variable
// - use the fetch api to get location and pass in coordinates to weather api
// - store that city into local storage
// - create a past city button
// - use data from fetch to populate current weather and 5 day forcast


// display the data 
// one day forcast, use css to create the UI around that.

// 5 day forcast and update the UI
// then Ill worry about searching and inputs 
//  Save past searches cities to local storage 



const apiKey = '5263d662f1f882f01bbcb8a4ee9c63ef';
let userCityEl = $('city-input');
let currentWeatherEl = $('#currentConditions');
var fiveDayEl = $('#fiveDayForcast');
let pastCitySearch = ('#past-searches');
let submitBtn = document.querySelector('form');

let userCity = ""

let currentCityEl = $('city');
let currentTempEl = $('temperature');
let currentWindSpeedEl = $('wind-speed');
let currentHumidityEl = $('humid');
var fiveDayEl = document.querySelector('.five-day');
let icon = $('weather-icon');




// Function to get the weather for city

function getWeather(event) {
    event.preventDefault()
    userCity = $('#city-input').val();


    // api call to get weather for city
    let citySearch = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`;
    fetch(citySearch)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


            var currentConditionsEl = $('#currentConditions');
            currentConditionsEl.addClass('border border-primary');

            var today = moment().format('MM/DD/YYYY');
            const icon = data.weather[0].icon;
            const temp = data.main.temp;
            const wind = data.wind.speed;
            const humidity = data.main.humidity;

            var h1 = document.createElement('h1');
            var img = document.createElement('img');
            var h3Temp = document.createElement('h3');
            var h3Wind = document.createElement('h3');
            var h3Hum = document.createElement('h3');


            // creates elements in the dom
            h1.textContent = userCity + '(' + today + ')';
            h3Temp.textContent = 'Temp: ' + temp + '°F';
            h3Wind.textContent = 'Wind: ' + wind + ' MPH ';
            h3Hum.textContent = "Humidity: " + humidity + "%";
            img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

            // appends elements to the dom
            currentWeatherEl.append(h1, img, h3Temp, h3Wind, h3Hum);


            fiveDayForcast(userCity)

        })
}

function fiveDayForcast(userCity) {
    userCity = $('#city-input').val();
    let fiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=${apiKey}`
    fetch(fiveDay)

        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            


            for (let i = 3; i <= data.list.length; i += 9) {
                const temp = data.list[i].main.temp;
                const wind = data.list[i].wind.speed;
                const humidity = data.list[i].main.humidity;

                var today = data.list[i].dt_txt.split(' ')
                var card = document.createElement('div')
                var todayEl = document.createElement('h2')
                var icon = document.createElement('img')
                var temperature = document.createElement('p')
                var windEl = document.createElement('p')
                var humidityEl = document.createElement('p')

                icon.src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png"

                todayEl.textContent = moment(today[0]).format('MM/DD/YYYY')
                temperature.textContent = temp + '°F'
                humidityEl.textContent = humidity + "%"
                windEl.textContent = wind + " MPH"

                card.appendChild(todayEl)
                card.appendChild(icon)
                card.appendChild(temperature)
                card.appendChild(windEl)
                card.appendChild(humidityEl)

                fiveDayEl.appendChild(card)

            }

        })
}


submitBtn.addEventListener('submit', getWeather);
submitBtn.addEventListener('submit', fiveDayForcast);

// let weatherMain = i * 8 + 3;


