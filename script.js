function enviarVoto() {
  const nome = document.getElementById('nome').value.trim();
  const candidato = document.querySelector('input[name="candidato"]:checked');
  const som = document.getElementById('som');

  if (!nome) {
    alert('Por favor, preencha seu nome!');
    return;
  }

  if (!candidato) {
    alert('Por favor, selecione um candidato!');
    return;
  }

  const escolhido = candidato.value;

  // Mostra loading (você pode estilizar isso no CSS)
  document.getElementById('loading').style.display = 'block';

  // Envia os dados para sua planilha do Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbyiIxCxGxZSwOFMLZiiziyTTWHj-IkZ6iZ5Gh8G_Slw4vF9h7nwqYzfx9Uj_wrHA3dUcw/exec", {
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
    console.log("Voto registrado com sucesso!", data);

    som.pause();
    som.currentTime = 0;
    som.play();

    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('loading').style.display = 'none';

    document.getElementById('nome').value = '';
    candidato.checked = false;
  })
  .catch(error => {
    console.error("Erro ao enviar voto:", error);
    alert("Erro ao enviar voto. Tente novamente.");
    document.getElementById('loading').style.display = 'none';
  });
}

// Fecha popup ao clicar fora
document.getElementById('popup-overlay').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-overlay').style.display = 'none';
});
