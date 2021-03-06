// WHEN I search for a city// THEN I get current future conditions, that city is added to the search history
var apiKey='16d579fb98020ce8daf7d5ea4ad1f4c3';
var cityInpt=$('#city');
var submitBtn = $('#submit');
var searchedCityList=$('#searched-cities');
var factList=$('#current-facts');
var citiesSearched=JSON.parse(localStorage.getItem(('citiesSrchdStore'))) || [];
var weatherData;
var data;
var forecastData;
var uvData;
var fixedTime ="07:00:00";
var cityTag=$('#city-tag');

// load recent Cities to page
for (item of citiesSearched) {searchedCityList.append(('<li>'+ item + '</li>'))};

//identify most recent city
 citiesSearched[citiesSearched.length-1]

//set event listener

submitBtn.click(function(){
    event.preventDefault();
    processData();
  });

//process data - start of function for both fetches
function processData(){
  citiesSearched.push(cityInpt.val()); // add to array
  if ((citiesSearched.length)> 10) {citiesSearched.splice(0,1)}; //if too many cities, chop oldest off
  localStorage.setItem('citiesSrchdStore', JSON.stringify(citiesSearched));
  searchedCityList.append('<li>'+ cityInpt.val() + '</li>'); //populate list of recently searched cities
  getWeather(cityInpt.val()); 
  // getForecast(cityInpt.val()); 
};

//fetch for current
function getWeather(cityName){
  var nowWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
  // var weatherData= new Object;
       
    fetch(nowWeatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          factList=$('#current-facts');
          if (factList) {factList.remove};
          cityTag.after('<ul id="current-facts"></ul>');
          factList=$('#current-facts');
          factList.append('<li>'+ + ((parseFloat(data.main.temp) -273.15) *1.8 + 32 ).toFixed(2)+ ' F </li>'); //populate temperature, list of facts ///(0K − 273.15) × 9/5 + 32 = -459.7°F
          factList.append('<li>'+ data.main.humidity + '</li>'); //populate humidity - 
          factList.append('<li>'+ data.weather[0].main + '</li>'); //basic weather - cloudly, clear    
          return data;
        });
      // weatherData=data;

      // console.log(weatherData);
      // factList=$('#current-facts');
      // if (factList) {factList.remove};
      // cityTag.after('<ul id="current-facts"></ul>');
      // factList=$('#current-facts');
      // factList.append('<li>'+ + ((parseFloat(weatherData.main.temp) -273.15) *1.8 + 32 ).toFixed(2)+ ' F </li>'); //populate temperature, list of facts ///(0K − 273.15) × 9/5 + 32 = -459.7°F
      // factList.append('<li>'+ data.main.humidity + '</li>'); //populate humidity - 
      // factList.append('<li>'+ data.weather[0].main + '</li>'); //basic weather - cloudly, clear
    }


//fetch for forecast
function getForecast(cityName){
  var nowForecastUrl='https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + "'";
  var forecastData=fetchProcess(nowForecastUrl);
  forecastData.list.main.temp
}

//actual fetch

function fetchWthr(url) {   //actual fetch
 fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
  }


// function fetchProcess(requestUrl){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     return data;
//     console.log(data) //change action to purpose
//     }
//   )};

  // fetch('http://example.com/movies.json')
  // .then(response => response.json())
  // .then(data => console.log(data));

// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
  
    //--ul display of search history built
    //Working API Call 1 - https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=16d579fb98020ce8daf7d5ea4ad1f4c3
    //Working API Call 2 - https://api.openweathermap.org/data/2.5/forecast?q=Charlotte&appid=16d579fb98020ce8daf7d5ea4ad1f4c3
    //Working API Call 3 - https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=16d579fb98020ce8daf7d5ea4ad1f4c3

// WHEN I view current city weather// THEN I get city name, the date, an icon rep of weather conditions, temperature, humidity, wind speed, UV index
// WHEN I view the UV indexTHEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city// THEN a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, humidity
// WHEN I click on a city in the search history// THEN I am again presented with current and future conditions for that city
