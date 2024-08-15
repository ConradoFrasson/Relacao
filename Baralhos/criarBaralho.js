const baralhos = require('./baralhos');

function adicionarBaralho(baralho) {
    
    baralho.id = baralhos.length > 0 ? baralhos[baralhos.length - 1].id + 1 : 1;
    baralhos.push(baralho);
}

module.exports = {adicionarBaralho};