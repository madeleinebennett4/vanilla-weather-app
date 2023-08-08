function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes} `;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-temp");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector(".humidity");
  let detailsElement = document.querySelector(".cloudiness");
  let windElement = document.querySelector(".wind");
  let dateElement = document.querySelector(".current-date");
  let iconElement = document.querySelector("#icon");

  celciusTemp = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  detailsElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "4cd9acb8c28909bac787b5e975b439ef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function showFarenheitTemp(event) {
  event.preventDefault();
  let fahreneitTemp = (celciusTemp * 9) / 5 + 32;
  let temperatureElement = document.querySelector(".current-temp");
  temperatureElement.innerHTML = Math.round(fahreneitTemp);
}

function showCelciusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".current-temp");
  temperatureElement.innerHTML = Math.round(celciusTemp);
}

let celciusTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", showFarenheitTemp);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showCelciusTemp);

search("London");
