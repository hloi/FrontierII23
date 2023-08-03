let nwsGetGrid = new NWSGetGrid();
let nwsGetForecast = new NWSGetForecast();

function button() {
    //alert("Getting the weather!");

    nwsGetGrid.request(getWeather);
}

function getWeather() {
    nwsGetForecast.gridId = nwsGetGrid.getGridId();
    nwsGetForecast.gridX = nwsGetGrid.getGridX();
    nwsGetForecast.gridY = nwsGetGrid.getGridY();

    nwsGetForecast.request(displayWeather);
}

function displayWeather() {
    const cond = document.getElementById("condition");
    cond.innerHTML = nwsGetForecast.getCurrentCondition();

    let highLow = nwsGetForecast.getHighLow();
    cond.innerHTML += `<br>${highLow.high}&deg;F / ${highLow.low}&deg;F`;

    // change color based on hot or cold
    cond.style.backgroundColor = "red";

    // tell the user if they need an umbrella
    // use an image or color
    let percip = nwsGetForecast.getPrecipitation();
    cond.innerHTML += `<br>${percip.chance}% chance of rain`;
}