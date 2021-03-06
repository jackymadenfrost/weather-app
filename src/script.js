let apiKey = "2990c23f4412b5f3ddbd556efdc44410";
let city = "Gold Coast";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let temperatureDescription = document.querySelector(
    "#temperature-description"
  );
  let humidityElement = document.querySelector("#humidity");
  let humidity = Math.round(response.data.main.humidity);
  let windElement = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed) * 3.6;

  temperatureElement.innerHTML = `${temperature}`;
  temperatureDescription.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = `${humidity}`;
  windElement.innerHTML = `${wind}`;
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

let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
