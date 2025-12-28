function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    let losAngelesTime = moment().tz("America/Los_Angeles").format("h:mm:ss");

    losAngelesTimeElement.innerHTML = `${losAngelesTime} <small>${moment().format(
      "A"
    )}</small>`;
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do YYYY");
    let parisTime = moment().tz("Europe/Paris").format("h:mm:ss");
    parisTimeElement.innerHTML = `${parisTime} <small>${moment().format(
      "A"
    )}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone).format("h:mm:ss");
  cityElement = document.querySelector("#cities");
  cityElement.innerHTML = ` <div class="city">
          <div class="flex-grid">
            <h2>${cityName}</h2>
            <div class="date">${moment()
              .tz(cityTimeZone)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime} <small>${moment().format(
    "A"
  )}</small></div>
        </div>`;
}

setInterval(updateTime, 1000);
updateTime();

citiesElement = document.querySelector("#city");
citiesElement.addEventListener("change", updateCity);
