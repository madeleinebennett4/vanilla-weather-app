function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector(".current-temp");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector(".humidity");
  let detailsElement = document.querySelector(".cloudiness");
  let windElement = document.querySelector(".wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  detailsElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "4cd9acb8c28909bac787b5e975b439ef";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
