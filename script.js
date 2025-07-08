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

  // Desativa botão e muda texto
  botao.disabled = true;
  botao.textContent = 'Enviando...';

  fetch("https://script.google.com/macros/s/AKfycbx-76rXyYwAD8MkOmPgk3dW9e079Hru2-2bOVBIcITcCvwW3r9aJ-6M4dcOZRyqwvTfJg/exec", {
    method: "POST",
    body: JSON.stringify({
      nome: nome,
      candidato: escolhido
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("Voto enviado!", data);

      som.pause();
      som.currentTime = 0;
      som.play();

      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup-overlay').style.display = 'block';

      document.getElementById('nome').value = '';
      candidato.checked = false;
    })
    .catch(error => {
      console.error("Erro ao enviar voto:", error);
      alert("Erro ao enviar voto. Tente novamente.");
    })
    .finally(() => {
      // Reativa botão e volta texto original
      botao.disabled = false;
      botao.textContent = 'Enviar Voto!';
    });
}
