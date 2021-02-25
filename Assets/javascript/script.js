// WHEN I search for a city// THEN I get current future conditions, that city is added to the search history
var cityInpt=$('#city');
var submitBtn = $('#submit');
var citiesSearched=[];
var apiKey='16d579fb98020ce8daf7d5ea4ad1f4c3';
var cityName='Charlotte';
var nowWeatherUrl='api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;


//(JSON.parse(localStorage.getItem(citiesSearched)

submitBtn.click(function(){
    event.preventDefault();
    var printCity= cityInpt.val();
    console.log(printCity.toString());
    citiesSearched.push(printCity);
    localStorage.setItem('citiesSearched', JSON.stringify(citiesSearched));
    $("ul").append('<li>'+ printCity+ '</li>');
  });

// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
  
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data)
//         //Loop over the data to generate a table, each table row will have a link to the repo url
//         for (var i = 0; i < data.length; i++) {
//           // Creating elements, tablerow, tabledata, and anchor
//           var createTableRow = document.createElement('tr');
//           var tableData = document.createElement('td');
//           var link = document.createElement('a');
  
//           // Setting the text of link and the href of the link
//           link.textContent = data[i].html_url;
//           link.href = data[i].html_url;
  
//           // Appending the link to the tabledata and then appending the tabledata to the tablerow
//           // The tablerow then gets appended to the tablebody
//           tableData.appendChild(link);
//           createTableRow.appendChild(tableData);
//           tableBody.appendChild(createTableRow);
//         }
//       });
//   }

    //--ul display of search history built
    //Working API Call 1 - api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=16d579fb98020ce8daf7d5ea4ad1f4c3
    //Working API Call 2 - api.openweathermap.org/data/2.5/forecast?q=Charlotte&appid=16d579fb98020ce8daf7d5ea4ad1f4c3
    //Working API Call 3 - https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=16d579fb98020ce8daf7d5ea4ad1f4c3

// WHEN I view current city weather// THEN I get city name, the date, an icon rep of weather conditions, temperature, humidity, wind speed, UV index
// WHEN I view the UV indexTHEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city// THEN a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, humidity
// WHEN I click on a city in the search history// THEN I am again presented with current and future conditions for that city
