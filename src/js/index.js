function yearlyPrice() {
  document.getElementById('price-1').innerHTML = '$12';
  document.getElementById('price-2').innerHTML = '$36';
  document.getElementById('price-3').innerHTML = '$56';
  var current = document.getElementsByClassName('active');
  if (current.length > 0) {
    current[0].className = current[0].className.replace(' active', '  ');
  }
  this.className += ' active';
}
function monthlyPrice() {
  document.getElementById('price-1').innerHTML = '$19';
  document.getElementById('price-2').innerHTML = '$54';
  document.getElementById('price-3').innerHTML = '$89';
}
var btns = document.getElementsByClassName('btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '  ');
    }
    this.className += ' active';
  });
}
