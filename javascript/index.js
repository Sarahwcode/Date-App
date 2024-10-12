function changeCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city");
  citiesElement.innerHTML = `
    <div class="city">
    <h2>
        <div>${cityName}</div>
        <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
        <div class="time">${cityTime.format(
          "H.mm.ss[<small>]A[</small>]"
        )}</div>
        </h2>
      </div>
  `;
}

let cityDate = document.querySelector("#cities");
cityDate.addEventListener("change", changeCity);

//function timeAndDateZone() {

// let londonDateElement = document.querySelector(".date");
// londonDateElement.innerHTML = moment()
// .tz("Europe/London")
//.format("dddd, MMMM Do, YYYY");
//let londonTimeElement = document.querySelector(".time");
//londonTimeElement.innerHTML = moment().format("H.mm.ss[<small>]A[</small>]");
//let parisDateElement = document.querySelector(".parisDate");
//parisDateElement.innerHTML = moment()
//.tz("Europe/Paris")
//.format("dddd, MMMM Do, YYYY");
//let parisTimeElement = document.querySelector(".parisTime");
//parisTimeElement.innerHTML = moment()
//.tz("Europe/Paris")
//.format("H.mm.ss[<small>]A[</small>]");
//let mexicoDateElement = document.querySelector(".mexicoDate");
//mexicoDateElement.innerHTML = moment()
//.tz("America/Mexico_City")
//.format("dddd, MMMM Do, YYYY");
//let mexicoTimeElement = document.querySelector(".mexicoTime");
//mexicoTimeElement.innerHTML = moment()
//.tz("America/Mexico_City")
//.format("H.mm.ss[<small>]A[</small>]");
//}
