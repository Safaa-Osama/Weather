var baseUrl = "http://api.weatherapi.com/v1/forecast.json";
var APIKey = "7814b0fab99046d586e135005252406";
var findInput = document.querySelector("#findInput");
var findBtn = document.getElementById("findBtn");

async function getCurrentWeather(city) {
  var response = await fetch(
    `${baseUrl}?key=${APIKey}&q=${city}&days=3`
  );
  var cWeather = await response.json();
  console.log(cWeather);
  displayWeather(cWeather);
}

getCurrentWeather("alexandria");

function displayWeather(curentWeather) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var today = new Date(curentWeather.current.last_updated);
  var todayName = days[today.getDay()];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayOfMonth = today.getDate();
  var monthName = months[today.getMonth()];
  var forecast = curentWeather.forecast.forecastday;

  var weather = ``;

  weather += `
    <div class="col-md-12 col-lg-4 bg-dark p-2">
      <div class="header d-flex justify-content-between bg-black">
        <span>${todayName}</span>
        <span>${dayOfMonth} ${monthName}</span>
      </div>
      <div id="location">
        <h5 class="my-3">${curentWeather.location.name}</h5>
      </div>
      <div class="d-flex flex-column justify-content-center" id="tempreture">
        <h1 class="my-3">${curentWeather.current.temp_c} °C</h1>
        <img src="${curentWeather.current.condition.icon}" class="sunny" alt="condition">
        <span>${curentWeather.current.condition.text}</span>
        <div class="icons mt-5">
          <img src="./img/icon-umberella.png" alt="umbrella">
          <span>${curentWeather.current.humidity}%</span>
          <img src="./img/icon-wind.png" alt="wind">
          <span>${curentWeather.current.wind_kph} kph</span>
          <img src="./img/icon-compass.png" alt="compass">
          <span>${curentWeather.current.wind_dir}</span>
        </div>
      </div>
    </div>`;

  
  for (var i = 1; i < 3; i++) {
    var date = new Date(forecast[i].date);
    var nameOfDay = days[date.getDay()];

    weather += `
      <div class="col-md-12 col-lg-4 ${i==1?'bg-black':'bg-dark'} text-center">
        <div class="header ${i==1?'bg-dark':'bg-black'}">
          <span>${nameOfDay}</span>
        </div>
        <div class="d-flex flex-column justify-content-between my-5 align-items-center">
          <img src="${forecast[i].day.condition.icon}" alt="icon">
          <h3>${forecast[i].day.maxtemp_c} °C</h3>
          <span>${forecast[i].day.mintemp_c} °C</span>
          <span>${forecast[i].day.condition.text}</span>
        </div>
      </div>`;
  }

  document.getElementById("rowData").innerHTML = weather;
}

findInput.addEventListener('input', function(e){
    if (findInput.value) {
        getCurrentWeather(findInput.value);
    }
});
//OR
findBtn.addEventListener('click', function(e) {
    if (findInput.value) {
        getCurrentWeather(findInput.value);
    }
});
