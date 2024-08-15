const baralhos = require('./baralhos');

function removerBaralho(index) {
    if (index >= 0 && index < baralhos.length) {
        baralhos.splice(index, 1);
    } else {
        console.log('Índice não encontrado');
    }
}
  
  module.exports = {removerBaralho};