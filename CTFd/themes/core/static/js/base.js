var countDownDate = new Date("Oct 30, 2018 00:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = '<span class="text-white">'+ days + '</span>d<span class="text-white">' + hours + '</span>h<span class="text-white">'
  + minutes + '</span>m<span class="text-white">' + seconds + '</span>s';
  document.getElementById("regtype").innerHTML = '<p class="w-100 text-center"><div class="typewriter"><h5>Click <a href="register">here</a> to register </h5></div></p>';

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML='';
    document.getElementById("regtype").innerHTML = '';
    document.getElementById("notimer").innerHTML = ' <p class="w-100 text-center"><div class="typewriter"><h5>CLICK <a href="challenges">HERE</a> TO BEGIN</h5></div></p>';
  }
}, 1000);
