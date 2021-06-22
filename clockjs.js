// var myVar = setInterval(myFunction, 1000);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var country;
// function india() {
//   var country=1;
//   console.log("India");
// }
// function usa() {
//   var country=2;
//   console.log("USA");
// }
// function uk() {
//   var country=3;
//   console.log("UK");
// }
var myVar;
function myStartFunction() {
  myVar = setInterval(myFunction, 1000);
  console.log("Clicked Green");
}
function myFunction() {
  let cd = new Date();
  
            let hour = cd.getUTCHours();
            let min = cd.getUTCMinutes();
            let sec = cd.getUTCSeconds();
  let ampm = "AM";
  if(country==1){
      hour+=5;
      min+=30;
      if(min>60){
        min-=60;
        hour+=1
      }
      console.log("india");
  }
  else if(country==2){
    hour-=7;
    console.log("usa");
}
else if(country==3){
  hour+=1;
  console.log("uk");
}


  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    ampm = "AM";
  }
  let time =
    hour + ":" + min + ":" + sec + " " + ampm;
  // let datenow = days[cd.getDay()]+", "+cd.getDate()+" "+months[cd.getMonth()]+" "+cd.getFullYear()+" ";

  // document.getElementById("myclock").innerHTML = time+" "+datenow;
  document.getElementById("myclock").innerHTML = time;
}

function myStopFunction() {
  clearInterval(myVar);
  console.log("Clicked Red");
}