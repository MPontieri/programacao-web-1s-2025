// instalar o express: npm install express@4.18.2

const calc = require ('./calculadora');
const express = require ('express');
const app = express();
const PORT = 8080;

app.get('/', (requisicao,resposta)=>{
    let html = '<h1>App Calculadora</h1>';
    html += '<h3>Rotas do aplicativo:</h3>'
    html += '<p>somar :a/:b</p>'
    html += '<p>subtrair :a/:b</p>'
    html += '<p>multiplicar :a/:b</p>'
    html += '<p>dividir :a/:b</p>'
    
    resposta.send();
})

app.get('/somar/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);
    let b = Number(requisicao.params.b);

    resposta.send(`${a} + ${b} = ${calc.somar(a,b)}`);
})

app.get('/subtrair/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);
    let b = Number(requisicao.params.b);

    resposta.send(`${a} - ${b} = ${calc.subtrair(a,b)}`);
})

app.get('/multiplicar/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);
    let b = Number(requisicao.params.b);

    resposta.send(`${a} * ${b} = ${calc.multiplicar(a,b)}`);
})

app.get('/subtrair/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);
    let b = Number(requisicao.params.b);

    resposta.send(`${a} / ${b} = ${calc.dividir(a,b)}`);
})

app.listen(PORT, ()=>{
    console.log('app rodando na porta:'+PORT);
});