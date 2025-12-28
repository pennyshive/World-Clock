function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  let losAngelesTime = moment().tz("America/Los_Angeles").format("h:mm:ss");
  let timeConversion = moment().format("A");
  losAngelesTimeElement.innerHTML = `${losAngelesTime} <small>${timeConversion}</small>`;

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");
  let parisTime = moment().tz("Europe/Paris").format("h:mm:ss");
  parisTimeElement.innerHTML = `${parisTime} <small>${timeConversion}</small>`;
}
setInterval(updateTime, 1000);
updateTime();
