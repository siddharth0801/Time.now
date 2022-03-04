const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

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
  var ampm = hour >= 12 ? 'PM' : 'AM';
  hour+=5;
  min+=30;
  if(min>=60){
      min =min%60;        
      hour+=1;
  }
      console.log("india");
hour = hour % 12;
hour = hour ? hour : 12; // the hour '0' should be '12'
hour = hour < 10 ? '0'+hour : hour;
min = min < 10 ? '0'+min : min;
sec = sec < 10 ? '0'+sec : sec;
  let time =
    hour + ":" + min + ":" + sec + " " + ampm;
  let datenow = cd.getDate()+","+days[cd.getDay()]+","+months[cd.getMonth()];
  time = datenow +", "+ time;
  document.getElementById("myclock").innerHTML = time;
}
