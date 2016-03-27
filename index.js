

var count = 0;

setInterval(function(){
  count = count + 1;
  document.getElementById("count").innerHTML = count;
}, 1000)
