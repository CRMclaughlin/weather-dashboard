

// When user searches for a city *clicks search btn*
// - store the user input into a variable
// - use the fetch api to get location and pass in coordinates to weather api
// - store that city into local storage
// - create a past city button
// - use data from fetch to populate current weather and 5 day forcast


var apiKey = '5263d662f1f882f01bbcb8a4ee9c63ef'
var weatherInfoUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
var geoCoordinates = 'https://api.openweathermap.org/data/2.5/onecall?lat='
var userFormEl = $('city-input')
var fiveDayEl = $('#fiveDayForcast')
var pastCitySearch = ('#past-searches')
var today = moment().format('MM/DD/YYYY')


// Function to get the weather for city

// Function to save to local storage
