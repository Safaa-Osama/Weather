
var baseUrl = "http://api.weatherapi.com/v1/";
var APIKey = "7814b0fab99046d586e135005252406";
// var cWeather= [];
var findBtn = document.getElementById("findBtn");
var searchLocation = '';

async function getCurrentWeather(endPoint,city) {
    var response = await fetch(`${baseUrl}${endPoint}?key=${APIKey}&q=${city}&days=3`);
    var cWeather = await response.json();
    console.log(cWeather);
    displayWeather(cWeather);
}

getCurrentWeather('forecast.json','london');

function displayWeather(curentWeather){
  
var lastUpdated = new Date(curentWeather['current'].last_updated);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var todayName = days[lastUpdated.getDay()];

var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayOfMonth = lastUpdated.getDate();
var monthName = months[lastUpdated.getMonth()];


var weather = ``;
        weather = ` <div class="col-md-12 col-lg-4 bg-dark p-2">

        <div class="header d-flex justify-content-between bg-black" id="">
          <span>${todayName}</span>
          <span>${dayOfMonth}${monthName}</span>
        </div>
        <div id="location">
          <h5 class="my-3">${curentWeather['location'].name}</h5>
        </div>
        <div class="d-flex flex-column justify-content-center" id="tempreture">
          <h1 class="my-3">${curentWeather['current'].temp_c}C</h1>
          <img src="${curentWeather.current.condition.icon}" class="sunny" alt="condition">

          <span>${curentWeather['current'].condition.text}</span>
          <div class="icons mt-5">

            <img src="./img/icon-umberella.png" alt="umbrella">
            <span>20%</span>
            <img src="./img/icon-wind.png" alt="wind">
            <span>${curentWeather['current'].wind_kph}+kph</span>
            <img src="./img/icon-compass.png" alt="compass">
            <span>East</span>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-4 bg-black ">
        <div class="header text-center bg-dark" id="">
          <span>Sunday</span>
        </div>
        <div class="d-flex flex-column justify-content-between my-5 align-items-center">
          <h3>32.5</h3>
          <span>24</span> <span>sunny</span>
        </div>
      </div>

        <div class="col-md-12 col-lg-4 bg-dark ">
        <div class="header text-center bg-black" id="">
          <span>Tuesday</span>
        </div>
        <div class="d-flex flex-column justify-content-between my-5 align-items-center">
          <h3>32.5</h3>
          <span>24</span> <span>sunny</span>
        </div>
      </div>`
    document.getElementById('rowData').innerHTML = weather;
}

function search(term){

}
