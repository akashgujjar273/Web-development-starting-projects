// const year = new Date().getFullYear();
// const fourthOfJuly = new Date(year, 6, 4).getTime();
// const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
// const month = new Date().getMonth();

// // countdown
// let timer = setInterval(function () {
//   // get today's date
//   const today = new Date().getTime();

//   // get the difference
//   let diff;
//   if (month > 6) {
//     diff = fourthOfJulyNextYear - today;
//   } else {
//     diff = fourthOfJuly - today;
//   }

//   // math
//   let days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((diff % (1000 * 60)) / 1000);
let timer = setInterval(function () {
    currentdate = new Date()
  
    // Get today's date and time

    // let enteralarm = document.getElementById("enterdate").value
    let daysleft = new Date(2021, 02, 28)
    // Find the distance between now and the count down date
    var distance = daysleft - currentdate;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    '<div class="days"> \
  <div class="numbers">' +
    days +
    '</div>days</div> \
<div class="hours"> \
  <div class="numbers">' +
    hours +
    '</div>hours</div> \
<div class="minutes"> \
  <div class="numbers">' +
    minutes +
    '</div>minutes</div> \
<div class="seconds"> \
  <div class="numbers">' +
    seconds +
    "</div>seconds</div> \
</div>";
// let show=document.getElementsByClassName("happy")
if(days==3){
  document.getElementById("show1").style.display="block"
  document.getElementById("show2").style.display="none"
  document.getElementById("show3").style.display="none"
  document.getElementById("show4").style.display="none"
}
if(days==2){
  document.getElementById("show1").style.display="none"
  document.getElementById("show2").style.display="block"
  document.getElementById("show3").style.display="none"
  document.getElementById("show4").style.display="none"
}
if(days==1 || days==0 ){
  document.getElementById("show1").style.display="none"
  document.getElementById("show2").style.display="none"
  document.getElementById("show3").style.display="block"
  document.getElementById("show4").style.display="none"
}
if(days==0 && hours==0 && minutes==0 && seconds==0){
  document.getElementById("show1").style.display="none"
  document.getElementById("show2").style.display="none"
  document.getElementById("show3").style.display="none"
  document.getElementById("show4").style.display="block"
}
if(days==0 && hours==0 && minutes==0 && seconds==0){
  document.getElementById("advance").style.display="none"

}
}, 1000);
