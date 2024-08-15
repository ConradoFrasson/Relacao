const prompt = require('prompt-sync')();
const listarBaralhos = require('./listar');
const listarFlashcards = require('./listar');
const {adicionarBaralho} = require('./adicionar');
const {adicionarFlashcard} = require('./adicionar');
const {atualizarBaralho} = require('./atualizar');
const {atualizarFlashcard} = require('./atualizar');
const {removerBaralho} = require('./remover');
const {removerFlashcard} = require('./remover');
let Baralhos = require ('./data')

function mainMenu() {
  console.log(`
    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    11. Buscar Flashcards por Baralho
    0. Sair
    
    Escolha uma opção:
  `); 

  const opcao = prompt('Escolha uma opção: ');
  let index;

  switch (opcao) {
    case '1':
    	const titulo = prompt('Título: ');
            let id = baralhos[baralhos.length - 1].id + 1
            adicionarBaralho({ id: id, titulo: titulo})
                console.log('Baralho adicionado com sucesso!')
    	mainMenu();
    	break;
    case '2':
        const pergunta = prompt('Pergunta: ');
        const resposta = prompt('Resposta: ');
        let Id = Flashcards.length > 0 ? Flashcards[Flashcards.length - 1].Id + 1 : 1;
        adicionarFlashcard({ Id: Id, pergunta: pergunta, resposta: resposta });
        console.log('FlashCard adicionado com sucesso!');
    	mainMenu();
    	break;
    case '3':
        listarBaralhos();
    	mainMenu();
    	break;
    case '4':
		listarFlashcards();
    	mainMenu();
    	break;
        case '5':
        listarFlashcardsPorBaralho();
        break;
        case '6':
            listarBaralhos();
            index = parseInt(prompt('Número do Baralho a atualizar: '));
            posicao = Baralhos.findIndex(Baralhos => Baralhos.id == index)
            if (posicao < 0 || posicao >= Baralhos.length) {
                console.log('Id não Encontrado, ou não Existente')
                mainMenu()
            } else {
                const novoTitulo = prompt('Título: ');
                atualizarBaralho( index, {id: Baralhos[index].id, titulo: novoTitulo})
                    console.log('Baralho Editado com Sucesso')
            }
            mainMenu();
        case '7':
            listarFlashcards();
            index = parseInt(prompt('Digite o ID que deseja editar: ')) - 1;
            posicao = Flashcards.findIndex(flashcard => flashcard.Id === index + 1);
            if (posicao < 0) {
                console.log('ID não Encontrado, ou não Existente');
            } else {
                const novaPergunta = prompt('Nova Pergunta: ');
                const novaResposta = prompt('Nova Resposta: ');
                atualizarFlashcard(posicao, novaPergunta, novaResposta);
                console.log('FlashCard Editado com Sucesso');
            }
            mainMenu();
        case '8':
        listarBaralhos();
    	index = parseInt(prompt('Número do Baralho a remover: ')) - 1;
        posicao = Baralhos.findIndex(Baralhos => Baralhos.id == index)
        if (posicao < 0 || posicao >= Baralhos.length) {
            console.log('Id não Encontrado, ou não Existente')
            mainMenu()
        } else {
            removerBaralho(Baralhos, posicao)
        }
    	console.log('Baralho removido com sucesso!');
    	mainMenu();
    	break;
        case '9':
            listarFlashcards();
            index = parseInt(prompt('Digite o ID que deseja remover: ')) - 1;
            posicao = Flashcards.findIndex(flashcard => flashcard.Id === index + 1);
            if (posicao < 0) {
                console.log('ID não Encontrado, ou não Existente');
            } else {
                removerFlashcard(posicao);
                console.log('FlashCard removido com sucesso!');
            }
            mainMenu();
            break;
        case '10':
        buscarFlashcardsPorPergunta();
        case '11':
        buscarFlashcardsPorBaralho();
        break;    
        case '0':
    	break;
    default:
    	console.log('Opção inválida!');
    	mainMenu();
	}
}

mainMenu();