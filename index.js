function changeCity(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM Do YYYY h:m a");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}
// let tokyoMoment = moment()
// .tz("Asia/Tokyo")
//.format("dddd, MMMM Do YYYY h:m a");
//if (event.target.value === "tokyo") {
//alert(`It is ${tokyoMoment} in Asia/Tokyo`);
//}

//let sydneyMoment = moment()
//.tz("Australia/Sydney")
//.format("dddd, MMMM Do YYYY h:m a");
//if (event.target.value === "Sydney") {
//alert(`It is ${sydneyMoment} in  Australia / Sydney`);
//}
//}

let cityDate = document.querySelector("#cities");
cityDate.addEventListener("change", changeCity);
