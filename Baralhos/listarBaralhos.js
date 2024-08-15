const baralhos = require('./baralhos');

function listarBaralhos() {
    for (let i = 0; i < baralhos.length; i++) {
        const baralho = baralhos[i];
        console.log(`
        Id: ${baralho.id}
        Título: ${baralho.titulo}
        `);
    }
}

module.exports = {listarBaralhos};