//clock
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var a = today.getHours() >= 12 ? "PM" : "AM";
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + " " + a;
    setTimeout(function () {
        startTime()
    }, 500);
}
startTime();


// Countdown timer 
/*document.getElementById('countdown').innerHTML =
  2 + ":" + 35; //set time here



function startCountdown() {
  var presentTime = document.getElementById('countdown').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  

document.getElementById('countdown').innerHTML =
    m + ":" + s

  setTimeout(startCountdown, 1000);
  
}
//end countdown */

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}