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

  console.log(`Enviando voto: Nome=${nome}, Candidato=${escolhido}`);

  document.getElementById('som').play();

  // Mostrar popup e overlay
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup-overlay').style.display = 'block';

  // Limpar inputs depois de mostrar popup
  document.getElementById('nome').value = '';
  candidato.checked = false;
}

// Fechar popup ao clicar no overlay
document.getElementById('popup-overlay').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-overlay').style.display = 'none';
});
