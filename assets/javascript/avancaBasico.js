const telaDeCriacao = document.querySelectorAll('.etapa-de-criacao');
const telaDeInfosBasicas = telaDeCriacao[0];
const telaPerguntas = telaDeCriacao[1];
const telaNiveis = telaDeCriacao[2];
const telaSucesso = telaDeCriacao[3];

const avancar = document.querySelectorAll('.avancar');

const dadosIniciais = [];

function avancaEtapaPerguntas() {

    if(camposBasicosVazios() === true){
        alert("Por favor, preencha todos os campos");
        return;
    } else if(validaTituloQuiz() === true){
        alert("Seu texto deve ter entre 20 e 65 caracteres");
        return;
    } else if(validaImagemBasica() === true){
        alert("Por favor, entre com uma URL válida");;
        return;
    } else if(validaQtdePerguntasQuiz()  === true){
        alert("Por favor, escolha no mínimo 3 perguntas");
        return;
    } else if(validaQtdeNiveisQuiz() === true){
        alert("Por favor, escolha no mínimo 2 níveis");;
        return;
    }

    dadosIniciais.push(titulo, imagem, totalDePerguntas, totalDeNiveis);

    telaDeInfosBasicas.classList.add('escondido');
    telaPerguntas.classList.remove('escondido');
    
    quantidadeDePerguntas();    

    console.log(dadosIniciais);

    return dadosIniciais;
}

avancar[0].addEventListener('click', avancaEtapaPerguntas);