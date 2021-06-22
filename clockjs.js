// var myVar = setInterval(myFunction, 1000);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var myVar;
function myStartFunction() {
  myVar = setInterval(myFunction, 1000);
  console.log("Clicked Blue");
}
function myFunction() {
  let cd = new Date();
  let hour = cd.getHours();
  let ampm = "AM";

  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    ampm = "AM";
  }
  let time =
    hour + ":" + cd.getMinutes() + ":" + cd.getSeconds() + " " + ampm;
  let datenow = days[cd.getDay()]+", "+cd.getDate()+" "+months[cd.getMonth()]+" "+cd.getFullYear()+" ";

  document.getElementById("myclock").innerHTML = time+" "+datenow;
}

function myStopFunction() {
  clearInterval(myVar);
  console.log("Clicked Red");
}