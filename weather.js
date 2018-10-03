class Weather  {
  constructor(cityName ,countryCode) {
    this.apikey = 'addd4d65b9169b611a2cebbc6de6f344';
    this.cityName = cityName;
    this.countryCode = countryCode;
  }

  //Fetch weather from APi
async getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName},${this.countryCode}&appid=${this.apikey}`)

  const responseData = await response.json();
  return responseData.list;

  }

  //Change weather loaction
  changeLocation(cityName, countryCode) {
    this.cityName = cityName;
    this.countryCode = countryCode;
  }

}

