function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector(".current-temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let detailsElement = document.querySelector(".cloudiness");
  detailsElement.innerHTML.toUpperCase = response.data.weather[0].description;
}

let apiKey = "4cd9acb8c28909bac787b5e975b439ef";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
