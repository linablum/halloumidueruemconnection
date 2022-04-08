let countDownDate = new Date("Apr 8, 2022 21:10:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Jetzt!";
  }
}, 1000);

const delay = document.getElementById("delay");

function myMessage() {
  delay.innerHTML = "* Falls mal Lina pünktlich ist &#128556;";
}
setTimeout(myMessage, 5000);

//"Vielleicht bald wieder &#128521;"
