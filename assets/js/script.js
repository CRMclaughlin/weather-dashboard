var apiKey = "5263d662f1f882f01bbcb8a4ee9c63ef"

searchBtn = document.querySelector('form')
console.log(searchBtn)

var nameInput = document.getElementById('city-input')

function searchCity(event) {
    event.preventDefault()
    
    var currentCity = nameInput.value   

    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + currentCity + '&limit=5&appid=' + apiKey)
    .then(function(response) {
        if (response.status === 200) {
            return response.json()
        } else if (respone.status === 404) {

        }
    })
    .then(function(data) {
        console.log(data)
    })
}

searchBtn.addEventListener('click', searchCity)



// searchBtn.addEventListner('click', getWeather)

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// function getWeather(){
//     var requestUrl = 
    
//     fetch(requestUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)

//         for (var i = 0; i < data.length; i++) {
//             var currentCity = document.createElement('h3')

//             currentCity.textContent = data[i].??
//         }
//     })
// }

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city   