import * as MODEL from "../model/model.js";

// MODEL.getInfo();

function initListeners() {
  $("#search").on("click", (e) => {
    let location = $("#search-input").val();
    let forecast = $("#forecast").val();
    if (location != "" && forecast != "") {
      MODEL.getWeather(location, forecast, addWeatherListener);
    } else {
      alert("Please enter a location and forecast");
    }
  });
}

function addWeatherListener() {
  //   $(".weather").on("click", (e) => {
  //     let weatherID = e.currentTarget.id;
  //   });
}

$(document).ready(function () {
  initListeners();
});
