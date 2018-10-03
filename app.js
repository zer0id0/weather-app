//Init weather object

const weather = new Weather('london','uk');

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('abuja', 'ng');

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
}