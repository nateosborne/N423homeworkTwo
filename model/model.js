const apiKey = "a11e14afdd5845d4ab801331242309";

export function getInfo() {
  let weatherURL =
    "https://api.weatherapi.com/v1/current.json?key=a11e14afdd5845d4ab801331242309&q=Indianapolis&aqi=no";

  $.getJSON(weatherURL, (data) => {
    console.log(data);
    console.log(`${data.location.name}`);
  }).fail((error) => {
    console.log("error", error.message);
  });
}

export function getWeather(location, forecast, callback) {
  let locationURL = `https://api.weatherapi.com/v1/forecast.json?key=a11e14afdd5845d4ab801331242309&q=${location}&days=${forecast}&aqi=no&alerts=no`;

  $.getJSON(locationURL, (data) => {
    $(".weatherHolder").html("");
    $(".weatherHolder").append(`
       <div class="weather" id="${data.location.name}">
       <h1>${data.location.name}</h1>
        <p>${data.location.region}, ${data.location.country}</p>
        <p>${data.location.localtime}</p>
       </div>
       <div class="weatherInfoHolder">
       <div class="weatherInfo">
        <div class="currentWeather">
            <p>Temperature: ${data.current.temp_f} F</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Wind: ${data.current.wind_mph} mph ${data.current.wind_dir}</p>
            <p>Precipitation: ${data.current.precip_in} in</p>
            <p>Humidity: ${data.current.humidity}</p>
            <p>Clouds: ${data.current.cloud}</p>
        </div>
        
        <div class="currentWeather">
            <p>Feels Like: ${data.current.feelslike_f} F</p>
            <p>Wind Chill: ${data.current.windchill_f} F</p>
            <p>Heat Index: ${data.current.heatindex_f}</p>
            <p>Dew Point: ${data.current.dewpoint_f}</p>
            <p>Visibility: ${data.current.vis_miles} mi</p>
            <p>UV: ${data.current.uv}</p>
            <p>Gust: ${data.current.gust_mph} mph</p>
        </div>
       </div>
       </div>
       `);
    $.each(data.forecast.forecastday, (idx, date) => {
      console.log(date);
      $(".forecastHolder").append(`
        <div class="">
        <h1>${date.date}</h1>
        <p>High: ${date.day.maxtemp_f} F</p>
        <p>Low: ${date.day.mintemp_f} F</p>
        <p>Average: ${date.day.avgtemp_f} F</p>
        <p>Max Wind: ${date.day.maxwind_mph} mph</p>
        <p>Precipitation: ${date.day.totalprecip_in} in</p>
        <p>Snow: ${date.day.totalsnow_cm} cm</p>
        <p>Average Visibility: ${date.day.avgvis_miles} mi</p>
        <p>Average Humidity: ${date.day.avghumidity} F</p>
        <p>Chance of Rain: ${date.day.daily_chance_of_rain}%</p>
        <p>Chance of Snow: ${date.day.daily_chance_of_snow}%</p>
        <p>UV: ${date.day.uv}</p>
        </div>
        `);
    });

    callback();
  }).fail((error) => {
    console.log("error", error.message);
  });
}
