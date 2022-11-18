document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario() {
  if(document.getElementById("nomeUsuario").value != "" && 
  document.getElementById("emailUsuario").value != "" && 
  document.getElementById("telefoneUsuario").value != ""){
    alert("Prontinho! Você receberá as novidades por email!");
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}