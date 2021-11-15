function showForm() {
  let mountains = document.getElementById("mountains");
  document.getElementById("blur").style.display = 'flex';
  document.getElementById("text-label").innerHTML = 'Чудово, відправляємось в '+ mountains.value +' Але потрібно заповнити трошки інформації';
}
function back() {
  document.getElementById("blur").style.display = 'none';
}
function good() {
  alert("Віріанти відпочинку скоро надійдуть на ваш email");
}
