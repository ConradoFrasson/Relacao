const Flashcards = require('./Flashcards');

function removerFlashcard(index) {
    if (index >= 0 && index < Flashcards.length) {
        Flashcards.splice(index, 1);
    } else {
        console.log('Índice não encontrado');
    }
}

module.exports = {removerFlashcard};