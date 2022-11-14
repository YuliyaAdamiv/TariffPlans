function changePrice() {
  document.getElementById('price-1').innerHTML = '$12';
  document.getElementById('price-2').innerHTML = '$36';
  document.getElementById('price-3').innerHTML = '$56';
  document.getElementById('yearly').style.backgroundColor = '#bb6bd9';
  document.getElementById('yearly').style.color = '#fff';
  document.getElementById('monthly').style.backgroundColor = '#fff';
  document.getElementById('monthly').style.color = '#3b3472';
  document.getElementById('title-btn').style.backgroundColor = '#fff';
  document.getElementById('monthly').style.boxShadow = 'none';
}
function cleanPrice() {
  document.getElementById('price-1').innerHTML = '$19';
  document.getElementById('price-2').innerHTML = '$54';
  document.getElementById('price-3').innerHTML = '$89';
  document.getElementById('monthly').style.backgroundColor = '#bb6bd9';
  document.getElementById('monthly').style.color = '#fff';
  document.getElementById('yearly').style.color = '#3b3472';
  document.getElementById('yearly').style.backgroundColor = '#fff';
  document.getElementById('title-btn').style.backgroundColor = '#fff';
  document.getElementById('yearly').style.boxShadow = 'rgba(82, 67, 194, 0.16)';
}
