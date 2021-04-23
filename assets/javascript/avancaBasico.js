const telaDeCriacao = document.querySelectorAll('.etapa-de-criacao');
const telaDeInfosBasicas = telaDeCriacao[0];
const telaPerguntas = telaDeCriacao[1];
const telaNiveis = telaDeCriacao[2];
const telaSucesso = telaDeCriacao[3];

const avancar = document.querySelectorAll('.avancar');

function avancaEtapaPerguntas() {

    if(camposBasicosVazios() === true){

        alert("Por favor, preencha todos os campos");
        return;
    } else if(validaTituloQuiz(camposBasicosParaValidar) === true){

        return;
    } else if(validaImagemBasica(camposBasicosParaValidar) === true){

        return;
    } else if(validaQtdePerguntasQuiz(camposBasicosParaValidar)  === true){
        
        return;
    } else if(validaQtdeNiveisQuiz(camposBasicosParaValidar) === true){

        return;
    }

    telaDeInfosBasicas.classList.add('escondido');
    telaPerguntas.classList.remove('escondido');
    
    quantidadeDePerguntas();    

    return dadosIniciais;
}

avancar[0].addEventListener('click', avancaEtapaPerguntas);