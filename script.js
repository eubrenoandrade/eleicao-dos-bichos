
function enviarVoto() {
  const nome = document.getElementById('nome').value.trim();
  const candidato = document.querySelector('input[name="candidato"]:checked');

  if (!nome) {
    alert('Por favor, preencha seu nome!');
    return;
  }

  if (!candidato) {
    alert('Por favor, selecione um candidato!');
    return;
  }

  const escolhido = candidato.value;

  // Envio para Google Sheets será adicionado aqui futuramente
  console.log(`Enviando voto: Nome=${nome}, Candidato=${escolhido}`);

  // Reproduz som e mostra popup
  document.getElementById('som').play();
  document.getElementById('popup').style.display = 'block';

  // Fecha popup depois de 3 segundos
  setTimeout(() => {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('nome').value = '';
    candidato.checked = false;
  }, 3000);
}
