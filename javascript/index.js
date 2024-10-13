function timeAndDateZone() {
  let madridDateElement = document.querySelector("#madrid .date");
  let madridTimeElement = document.querySelector("#madrid .time");
  if (madridDateElement && madridTimeElement) {
    let madridTime = moment().tz("Europe/Madrid");
    madridDateElement.innerHTML = madridTime.format("dddd, MMMM Do, YYYY");

    madridTimeElement.innerHTML = madridTime.format(
      "H.mm.ss [<small>]A[</small>]"
    );
  }
  let romeDateElement = document.querySelector("#rome .date");
  let romeTimeElement = document.querySelector("#rome .time");
  if (romeDateElement && romeTimeElement) {
    let romeTime = moment().tz("Europe/Rome");
    romeDateElement.innerHTML = romeTime.format("dddd, MMMM Do, YYYY");

    romeTimeElement.innerHTML = romeTime.format("H.mm.ss [<small>]A[</small>]");
  }
  let istanbulDateElement = document.querySelector("#istanbul .date");
  let istanbulTimeElement = document.querySelector("#istanbul .time");
  if (istanbulDateElement && istanbulTimeElement) {
    let istanbulTime = moment().tz("Europe/Istanbul");
    istanbulDateElement.innerHTML = istanbulTime.format("dddd, MMMM Do, YYYY");

    istanbulTimeElement.innerHTML = istanbulTime.format(
      "H.mm.ss [<small>]A[</small>]"
    );
  }
}

timeAndDateZone();
setInterval(timeAndDateZone, 1000);

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
    <div class="city">
   <div> 
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format(
          "dddd, MMMM Do, YYYY"
        )}</div> </div> 
        <div class="time">${cityTime.format(
          "H.mm.ss"
        )} <small>${cityTime.format("A")}</small>
        </div>
</div>
      
      <a href="index.html">All cities</a>
  `;
}

let cityDate = document.querySelector("#cities");
cityDate.addEventListener("change", changeCity);
