var APIkey = "5263d662f1f882f01bbcb8a4ee9c63ef"



    


function getWeather(data) {

    var requestTest = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=5263d662f1f882f01bbcb8a4ee9c63ef `
    console.log(requestTest)
}
getWeather()


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

