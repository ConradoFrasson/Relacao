const Flashcards = require('./Flashcards');

function atualizarFlashcard(index, novaPergunta, novaResposta) {
    if (index >= 0 && index < Flashcards.length) {
        Flashcards[index].pergunta = novaPergunta;
        Flashcards[index].resposta = novaResposta;
    } else {
        console.log('Índice não encontrado');
    }
}

module.exports = {atualizarFlashcard};