const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/agendar', (req, res) => {
  const data = req.body;
  const requiredFields = [
    'nome', 'sobrenome', 'cpf', 'nascimento', 'telefone',
    'cep', 'endereco', 'clinica', 'especialidade', 'data', 'hora'
  ];

  const isEmpty = requiredFields.some(field => !data[field]?.trim());
  if (isEmpty) {
    return res.status(400).send({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  const hoje = new Date();
  const dataAgendada = new Date(`${data.data}T${data.hora}`);

  if (dataAgendada <= hoje) {
    return res.status(400).send({ error: 'A data da consulta deve ser futura.' });
  }

  return res.status(200).send({ message: 'Consulta agendada com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
