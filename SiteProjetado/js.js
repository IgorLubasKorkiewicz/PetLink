const form = document.getElementById('caixa');
const inputData = document.getElementById('data');

function data_invalida() {
  console.log("erro: data inválida");
  alert("Por favor, escolha uma data igual ou posterior a hoje.");
}

form.addEventListener('submit', function(event) {
  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');

  const dataAtualFormatada = `${ano}-${mes}-${dia}`;
  const dataEscolhida = inputData.value; 
  if (dataEscolhida < dataAtualFormatada) {
    event.preventDefault();
    data_invalida();
  }
});
