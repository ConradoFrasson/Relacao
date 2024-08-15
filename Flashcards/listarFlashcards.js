const Flashcards = require('./Flashcards');

function listarFlashcards() {
    for (let i = 0; i < Flashcards.length; i++) {
        const flashcard = Flashcards[i];
        console.log(`
        Id: ${flashcard.Id},
        Pergunta: ${flashcard.pergunta},
        Resposta: ${flashcard.resposta}
        `);
    }
}

module.exports = {listarFlashcards};