const hourHand =  document.querySelector(".hr-hand");
const minHand =  document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

function setTime(){
  const showNow = new Date();
  const hours = showNow.getHours();
  const mins = showNow.getMinutes();
  const secs = showNow.getSeconds();
//degrees
  const hourDeg = hours / 12*360 +90;
  const minDeg = mins /  60*360+90;
  const secDeg = secs / 60*360+90;
//rotate

  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
secHand.style.transform = `rotate(${secDeg}deg)`;
}
setInterval(setTime,1000);