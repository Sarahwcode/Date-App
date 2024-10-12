function changeCity(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM Do YYYY h:m a");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let cityDate = document.querySelector("#cities");
cityDate.addEventListener("change", changeCity);

function timeAndDateZone() {
  let londonDateElement = document.querySelector(".date");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd, MMMM Do, YYYY");
  let londonTimeElement = document.querySelector(".time");
  londonTimeElement.innerHTML = moment().format("H.mm.ss[<small>]A[</small>]");
  let parisDateElement = document.querySelector(".parisDate");
  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM Do, YYYY");
  let parisTimeElement = document.querySelector(".parisTime");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("H.mm.ss[<small>]A[</small>]");
  let mexicoDateElement = document.querySelector(".mexicoDate");
  mexicoDateElement.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("dddd, MMMM Do, YYYY");
  let mexicoTimeElement = document.querySelector(".mexicoTime");
  mexicoTimeElement.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("H.mm.ss[<small>]A[</small>]");
  let faroDateElement = document.querySelector(".faroDate");
  faroDateElement.innerHTML = moment()
    .tz("Europe/Faro")
    .format("dddd, MMMM Do, YYYY");
  let faroTimeElement = document.querySelector(".faroTime");
  faroTimeElement.innerHTML = moment()
    .tz("Europe/Faro")
    .format("H.mm.ss[<small>]A[</small>]");
}
timeAndDateZone();
setInterval(timeAndDateZone, 1);
