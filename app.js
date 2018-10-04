//Init Storage
const storage = new Storage();
//Get Stored location data
const weatherLocation = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city,weatherLocation.code);
//Init UI object
const ui = new UI();

//Get weather on Dom loaded
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const code = document.getElementById('state').value;
  
  //Change location
  weather.changeLocation(city, code);
  storage.setLocationData(city, code);

  //Get and display weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');

});


function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}