document.getElementById('agendamento-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const res = await fetch('/agendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      document.getElementById('mensagem').textContent = result.message || result.error;
      document.getElementById('mensagem').style.color = res.ok ? 'green' : 'red';
    } catch (err) {
      document.getElementById('mensagem').textContent = 'Erro ao enviar o formulário.';
      document.getElementById('mensagem').style.color = 'red';
    }
  });
  