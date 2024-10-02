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
