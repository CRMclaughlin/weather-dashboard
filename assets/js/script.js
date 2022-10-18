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



var apiKey = '5263d662f1f882f01bbcb8a4ee9c63ef';
var userCityEl = $('city-input');
var currentWeatherEl = $('#currentConditions');
var fiveDayEl = $('#fiveDayForcast');
var pastCitySearch = ('#past-searches');
var today = moment().format('MM/DD/YYYY');
var submitBtn = document.querySelector('form');

var userCity = ""




// Function to get the weather for city

function getWeather(event) {
    event.preventDefault()
    userCity = $('#city-input').val()
    console.log(userCity)

    // api call to get weather for city
    let citySearch = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${apiKey}`;
    fetch(citySearch)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
       // let temp = Math.floor(data.main);
        // console.log(data.wind.speed, Math.floor(data.main.temp));

        var currentConditionsEl= $('#currentConditions');
        currentConditionsEl.addClass('border border-primary');

        // var cityNameEl = $('<h2>')
        // cityNameEl.text('city-input');
        // currentConditionsEl.append(cityNameEl)
        // creates elements in the dom
        var h1 = document.createElement('h1');
        var h2 = document.createElement('h2');
        var img = document.createElement('img');
        var h3Temp = document.createElement('h3');
        var h3Wind = document.createElement('h3')
        var h3Hum = document.createElement('h3')
        var h4 = document.createElement('h4')

        h1.textContent = today
        h2.textContent = userCity
        h3Temp.textContent = data.main.temp;
        h3Wind.textContent = data.wind.speed;
        h3Hum.textContent = data.main.humidity;
        // img.src = data.weather[0].icon;

        // var icon = data.weather[0].icon;
        // var temp = data.main.temp;
        // var wind = data.wind.speed;
        // var humidity = data.main.humidity;
        // var date = new Date().toLocaleDateString;


        // appends elements to the dom
        currentWeatherEl.append(today,userCity, h3Temp, h3Wind, h3Hum, img);
        
        // currentWeatherEl.append(h3)
        // currentWeatherEl.append(img)
       
        
    })
}

submitBtn.addEventListener('submit', getWeather)



// function handleSubmit(event) {
//     event.preventDefault();
// }

