class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    // this.feelsLike = document.getElementById('w-feels-like');
    // this.dewPoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    this.population = document.getElementById('w-population');
  }

  paint(weather) {
    this.location.textContent = weather.city.name;
    this.string.textContent = `${weather.list[1].main.temp} F`;
    this.desc.textContent = weather.list[1].weather[0].description;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.list[1].weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.list[1].main.humidity}% `;
    this.wind.textContent = `Wind: ${weather.list[1].wind.speed} MPH `;
    this.population.textContent = `population: ${weather.city.population}`;
  }
}