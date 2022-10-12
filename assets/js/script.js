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
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
var coordinatesUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var userCityEl = $('city-input');
var currentWeatherEl = $('#currentConditions');
var fiveDayEl = $('#fiveDayForcast');
var pastCitySearch = ('#past-searches');
var today = moment().format('MM/DD/YYYY');
var submitBtn = document.querySelector('form');





// Function to get the weather for city

function getWeather(event) {
    event.preventDefault()
    const cityName = $('#city-input').val();
    console.log(cityName)

    // var citySearch = weatherUrl + 'milwaukee' + '&appid=' + apiKey + '&units=standard';
    // var milwaukee = "milwaukee";
    let citySearch = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
    fetch(citySearch)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
       // let temp = Math.floor(data.main);
        console.log(data.wind.speed, Math.floor(data.main.temp));
        
        var h1 = document.createElement('h1');
        var h2 = document.createElement('h2');
        var img = document.createElement('img');
        var h3 = document.createElement('h3');
        

        h1.textContent = new Date().toLocaleDateString;
        h2.textContent = data.main.temp;
        h3.textContent = data.wind.speed;
        h3.textContent = data.main.humidty;
        img.src = data.weather[0].icon;

        // var icon = data.weather[0].icon;
        // var temp = data.main.temp;
        // var wind = data.wind.speed;
        // var humidity = data.main.humidity;
        // var date = new Date().toLocaleDateString;

        currentWeatherEl.append(h2);
        
        // currentWeatherEl.append(h3)
        // currentWeatherEl.append(img)
       
        
    })
}

submitBtn.addEventListener('submit', getWeather)



// function handleSubmit(event) {
//     event.preventDefault();
// }

