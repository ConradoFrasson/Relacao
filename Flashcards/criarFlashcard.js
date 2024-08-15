const Flashcards = require('./Flashcards');

function adicionarFlashcard(flashcard) {
    flashcard.Id = Flashcards.length > 0 ? Flashcards[Flashcards.length - 1].Id + 1 : 1;
    Flashcards.push(flashcard);
}

module.exports = {adicionarFlashcard};