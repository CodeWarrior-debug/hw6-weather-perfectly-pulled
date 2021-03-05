// WHEN I search for a city// THEN I get current future conditions, that city is added to the search history
var apiKey='16d579fb98020ce8daf7d5ea4ad1f4c3';
var cityInpt=$('#city');
var submitBtn = $('#submit');
var searchedCityList=$('#searched-cities');
var citiesSearched=JSON.parse(localStorage.getItem(('citiesSrchdStore'))) || [];

// load recent Cities to page
for (item of citiesSearched) {searchedCityList.append(('<li>'+ item + '</li>'))};

//set event listener

submitBtn.click(function(){
    event.preventDefault();
    citiesSearched.push(cityInpt.val());
    if ((citiesSearched.length)> 10) {citiesSearched.splice(0,1)};
    localStorage.setItem('citiesSrchdStore', JSON.stringify(citiesSearched));
    $("ul").append('<li>'+ cityInpt.val() + '</li>');
    getWeather(cityInpt.val());
  });

function getWeather(cityName){
  var nowWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
  fetchProcess(nowWeatherUrl)};

function getForecast(){
  var nowWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
  fetchProcess(nowWeatherUrl)};


function fetchProcess(requestUrl){
  fetch(requestUrl)
  .then(function (response) {
    return response.json();})
  .then(function (data) {
    console.log(data) //change action to purpose
    }
  )};

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
