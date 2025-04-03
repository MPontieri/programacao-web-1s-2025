let estoque = []

function adicionar (id, nome,qtd) {
    estoque.push({id, nome, qtd})
    return {mensagem: 'Produto adicionado com sucesso! ', produto: {id, nome, qtd}}
}

function listar () {
    return {estoque}
}

function remover (id) {
    const index = estoque.findIndex(produto => produto.id === id)

    if (index === -1) {
        return { erro: 'produto não encontrado'}  
    }

    const produtoRemovido = estoque.splice(index, 1)
    return {mensagem: 'Produto removido com sucesso!', produto: produtoRemovido[0]}
}

function editar (id, qtd) {
    const index = estoque.findIndex(produto => produto.id === id)

    if (index === -1) {
        return { erro: 'produto não encontrado'}  
    }

    estoque[index].qtd = qtd
    return {mensagem: 'Produto editado com sucesso!', produto: estoque[index]}
}

module.exports = {adicionar, listar, remover, editar}
