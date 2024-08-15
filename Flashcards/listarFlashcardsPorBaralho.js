const Flashcards = require('./Flashcards');

function listarFlashcardsPorBaralho() {
    const idBaralho = parseInt(prompt('Digite o ID do Baralho: '));
    const flashcardsPorBaralho = Flashcards.filter(flashcard => flashcard.idBaralho === idBaralho);

    if (flashcardsPorBaralho.length > 0) {
        flashcardsPorBaralho.forEach(flashcard => {
            console.log(`
            Id: ${flashcard.Id},
            Pergunta: ${flashcard.pergunta},
            Resposta: ${flashcard.resposta}
            `);
        });
    } else {
        console.log('Nenhum flashcard encontrado para este baralho.');
    }
}

module.exports = {listarFlashcardsPorBaralho};