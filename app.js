//Init weather object

const weather = new Weather('london','uk');
//Init UI object
const ui = new UI();

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('abuja', 'ng');

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}