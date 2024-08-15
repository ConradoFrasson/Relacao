const baralhos = require('./baralhos');

function atualizarBaralho(index, novoTitulo) { 
    if (index >= 0 && index < baralhos.length) {
        baralhos[index].titulo = novoTitulo;
    } else {
        console.log('Índice não encontrado');
    }
}

module.exports = {atualizarBaralho};