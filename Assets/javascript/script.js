// WHEN I search for a city// THEN I get current future conditions, that city is added to the search history
var apiKey='16d579fb98020ce8daf7d5ea4ad1f4c3';
var cityInpt=$('#city');
var submitBtn = $('#submit');
var searchedCityList=$('#searched-cities');
var factList=$('#current-facts');
var citiesSearched=JSON.parse(localStorage.getItem(('citiesSrchdStore'))) || [];
var cityTag=$('#city-tag');
var today = moment();

// load recent Cities to page
for (item of citiesSearched) {searchedCityList.append(('<li>'+ item + '</li>'))};

//identify most recent city, then pull data for it

processData(citiesSearched[citiesSearched.length-1]);

//set event listener

submitBtn.click(function(){
    event.preventDefault();
    processData(cityInpt.val());
  });

//process data - start of function for both fetches

function processData(srchCity){
  citiesSearched.push(srchCity); // add to array
  if ((citiesSearched.length)> 10) {citiesSearched.splice(0,1)}; //if too many cities, chop oldest off
  localStorage.setItem('citiesSrchdStore', JSON.stringify(citiesSearched));
  searchedCityList.append('<li>'+ cityInpt.val() + '</li>'); //populate list of recently searched cities
  getWeather(srchCity); 
  getForecast(srchCity); 
};

//fetch for current
function getWeather(cityName){
  var nowWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
  cityTag.val(cityName)
       
    fetch(nowWeatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          factList=$('#current-facts');
          if (factList) {factList.remove};
          cityTag.after('<ul id="current-facts"></ul>');
          factList=$('#current-facts');
          factList.append('<li>'+ cityName + '</li>'); //populate humidity - 
          factList.append('<li>'+ + ((parseFloat(data.main.temp) -273.15) *1.8 + 32 ).toFixed(2)+ ' F </li>'); //populate temperature, list of facts ///(0K − 273.15) × 9/5 + 32 = -459.7°F
          factList.append('<li>'+ data.main.humidity + '</li>'); //populate humidity - 
          factList.append('<li>'+ data.weather[0].main + '</li>'); //basic weather - cloudly, clear    
          return data;
        });
    }

//fetch for forecast
function getForecast(cityName){
  var nowForecastUrl='https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey;
  fetch(nowForecastUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    //fact list pattern -https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
    $("#0-1").text((today.add(.5, "d").format('YYYY-MM-DD')));
    $("#0-2").attr('src', "http://openweathermap.org/img/w/"+ data.list[0].weather[0].icon +".png")
    $("#0-3").text("Humidity: " + data.list[0].main.humidity +'%');
    $("#0-4").text(((parseFloat((data.list[0].main.temp)) -273.15) *1.8 + 32 ).toFixed(2)+ ' F');

    $("#0-5").text(today.add(1, "d").format('YYYY-MM-DD'));
    $("#0-6").attr('src', "http://openweathermap.org/img/w/"+ data.list[7].weather[0].icon +".png")
    $("#0-7").text("Humidity: " + data.list[7].main.humidity +'%');
    $("#0-8").text(((parseFloat((data.list[7].main.temp)) -273.15) *1.8 + 32 ).toFixed(2)+ ' F');
    
    $("#0-9").text(today.add(1.1, "d").format('YYYY-MM-DD'));
    $("#0-10").attr('src', "http://openweathermap.org/img/w/"+ data.list[15].weather[0].icon +".png")
    $("#0-11").text("Humidity: " + data.list[15].main.humidity +'%');
    $("#0-12").text(((parseFloat((data.list[15].main.temp)) -273.15) *1.8 + 32 ).toFixed(2)+ ' F');

    $("#0-13").text(today.add(1.2, "d").format('YYYY-MM-DD'));
    $("#0-14").attr('src', "http://openweathermap.org/img/w/"+ data.list[23].weather[0].icon +".png")
    $("#0-15").text("Humidity: " + data.list[23].main.humidity +'%');
    $("#0-16").text(((parseFloat((data.list[23].main.temp)) -273.15) *1.8 + 32 ).toFixed(2)+ ' F');

    $("#0-17").text(today.add(1.3, "d").format('YYYY-MM-DD'));
    $("#0-18").attr('src', "http://openweathermap.org/img/w/"+ data.list[31].weather[0].icon +".png")
    $("#0-19").text("Humidity: " + data.list[31].main.humidity +'%');
    $("#0-20").text(((parseFloat((data.list[31].main.temp)) -273.15) *1.8 + 32 ).toFixed(2)+ ' F');

    return;
  });
}
  