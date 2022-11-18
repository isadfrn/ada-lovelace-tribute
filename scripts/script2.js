document.getElementById("send").addEventListener("click", validate);

function validate() {
  if(document.getElementById("name").value != "" && 
  document.getElementById("tele").value != "" && 
  document.getElementById("mail").value != ""){
    alert("Prontinho! Você receberá as novidades por email!");
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}