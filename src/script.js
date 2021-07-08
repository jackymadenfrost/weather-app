let apiKey = "2990c23f4412b5f3ddbd556efdc44410";
let city = "Gold Coast";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  console.log(city);
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  temperatureElement.innerHTML = `${temperature}°C`;
  description.innerHTML = response.data.weather[0].description;
}

function citySearch(event) {
  event.preventDefault();
  city = searchInput.value;
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  h1.innerHTML = city;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let searchButton = document.querySelector("#search-button");
let searchInput = document.querySelector("#search-input");

searchButton.addEventListener("click", citySearch);

let h1 = document.querySelector("#city");
h1.innerHTML = city;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
