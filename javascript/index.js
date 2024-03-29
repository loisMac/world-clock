function updateTime() {

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]"
);

let melbourneElement = document.querySelector("#melbourne");
let melbourneDateElement = melbourneElement.querySelector(".date");
let melbourneTimeElement = melbourneElement.querySelector(".time");
let melbourneTime = moment().tz("Australia/Melbourne");
melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
melbourneTimeElement.innerHTML = melbourneTime.format("h:mm:ss [<small>]A[</small>]"
);
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
        
    }
    let cityName = cityTimeZone.replace('_', " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("h:mm:ss")}
        <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
