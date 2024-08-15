const Flashcards = require('./Flashcards');


function buscarFlashcardsPorPergunta() {
    const pergunta = prompt('Digite a pergunta a ser buscada: ').toLowerCase();
    const resultados = Flashcards.filter(flashcard => flashcard.pergunta.toLowerCase().includes(pergunta));

    if (resultados.length > 0) {
        resultados.forEach(flashcard => {
            console.log(`
            Id: ${flashcard.Id},
            Pergunta: ${flashcard.pergunta},
            Resposta: ${flashcard.resposta}
            `);
        });
    } else {
        console.log('Nenhum flashcard encontrado com essa pergunta.');
    }
}

module.exports = {buscarFlashcardsPorPergunta};