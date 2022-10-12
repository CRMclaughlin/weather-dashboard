

// When user searches for a city *clicks search btn*
// - store the user input into a variable
// - use the fetch api to get location and pass in coordinates to weather api
// - store that city into local storage
// - create a past city button
// - use data from fetch to populate current weather and 5 day forcast


var apiKey = '5263d662f1f882f01bbcb8a4ee9c63ef'
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
var coordinatesUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='
var userCityEl = $('city-input')
var fiveDayEl = $('#fiveDayForcast')
var pastCitySearch = ('#past-searches')
var today = moment().format('MM/DD/YYYY')
var submitBtn = $('form')






// Function to get the weather for city

function getWeather() {
    
    var citySearch = weatherUrl + 'milwaukee' + '&appid=' + apiKey;
    
    fetch(citySearch)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
        
    })
}

getWeather()



function handleSubmit(event) {
    event.preventDefault();
}






// Function to save to local storage


// Function to create past city search buttons

// var apiKey = "5263d662f1f882f01bbcb8a4ee9c63ef"

// searchBtn = document.querySelector('form')
// console.log(searchBtn)

// var nameInput = document.getElementById('city-input')

// function searchCity(event) {
//     event.preventDefault()

//     var currentCity = nameInput.value   

//     fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + currentCity + '&limit=5&appid=' + apiKey)
//     .then(function(response) {
//         if (response.status === 200) {
//             return response.json()
//         } else if (respone.status === 404) {

//         }
//     })
//     .then(function(data) {
//         console.log(data)
//     })
// }

// searchBtn.addEventListener('click', searchCity)

