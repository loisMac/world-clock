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
updateTime();
setInterval(updateTime, 1000);