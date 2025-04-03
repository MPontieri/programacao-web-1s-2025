const express = require('express')
const estoque = require('./util/estoque.js')
const app = express()

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})

app.get('/', (req, res) => {
    res.send(`
        <h1>SEJA BEM VINDO AO ESTOQUE!</h1>
        <p>Para adicionar um produto digite na barra de pesquisa acima http://localhost:8080/adicionar/:id/:nome/:qtd</p>
        <p>Para listar digite na barra de pesquisa acima http://localhost:8080/listar</p>
        <p>Para remover digite na barra de pesquisa acima http://localhost:8080/remover/:id</p>
        <p>Para editar digite na barra de pesquisa acima http://localhost:8080/editar/:id/:qtd</p>
        `)
})

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const id = parseInt(req.params.id)
    const qtd = parseInt(req.params.qtd)
    const nome = req.params.nome

    if (isNaN(id) || isNaN(qtd)) {
        return res.status(400).send('Parametros invalidos, não são numeros')
    }
    const resultado = estoque.adicionar(id, nome, qtd)
    res.json(resultado)
})

app.get('/listar', (req, res) => {
    const resultado = estoque.listar()
    res.json(resultado)
})

app.get('/remover/:id', (req, res) => {
    const id = parseFloat(req.params.id)

    if (isNaN(id)) {
        return res.status(400).send('Parametros invalidos, não são numeros')
    }
    const resultado = estoque.remover(id)
    res.json(resultado)
})

app.get('/editar/:id/:qtd', (req, res) => {
    const id = parseFloat(req.params.id)
    const qtd = parseFloat(req.params.qtd)

    if (isNaN(id) || isNaN(qtd)) {
        return res.status(400).send('Parametros invalidos, não são numeros')
    } else if (qtd == 0){
        return res.status(400).send('Não há como colocar 0')
    }
    const resultado = estoque.editar(id, qtd)
    res.json(resultado)
})
