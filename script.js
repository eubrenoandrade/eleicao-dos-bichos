function enviarVoto() {
  const nome = document.getElementById('nome').value.trim();
  const candidato = document.querySelector('input[name="candidato"]:checked');
  const som = document.getElementById('som');
  const botao = document.getElementById('btn-enviar');

  if (!nome) {
    alert('Por favor, preencha seu nome!');
    return;
  }

  if (!candidato) {
    alert('Por favor, selecione um candidato!');
    return;
  }

  const escolhido = candidato.value;

  botao.disabled = true;
  botao.textContent = 'Enviando...';

  fetch("https://script.google.com/macros/s/AKfycbwsaCscdTPbW46OCj7Yo5Zy3b24ioRgrdUqzw7Gr3h9QTnjL5G-9SUl0k5R4CWVdr0K/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, candidato: escolhido })
  })
  .then(() => {
    som.pause();
    som.currentTime = 0;
    som.play();

    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';

    document.getElementById('nome').value = '';
    candidato.checked = false;
  })
  .catch(() => {
    alert("Erro ao enviar voto. Tente novamente.");
  })
  .finally(() => {
    botao.disabled = false;
    botao.textContent = 'Enviar Voto!';
  });
}
