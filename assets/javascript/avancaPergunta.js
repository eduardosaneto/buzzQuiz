function avancaEtapaNiveis() {

    if(camposPerguntasVazios() === true){
        alert("Por favor, preencha os campos de pergunta, resposta correta e pelo menos um campo de resposta incorreta com o titulo e a imagem");
        perguntasRespostas = [];
        perguntasRespostasIndividuais = [];
        return;
    } else if(validaTituloPergunta(camposDePerguntasParaValidar) === true){
        perguntasRespostas = [];
        perguntasRespostasIndividuais = [];
        return;
    } else if(validaCorPerguntas(camposDePerguntasParaValidar) === true){
        perguntasRespostas = [];
        perguntasRespostasIndividuais = [];
        return;
    } else if(validaImagemPergunta(camposDePerguntasParaValidar) === true){
        perguntasRespostas = [];
        perguntasRespostasIndividuais = [];
        return;
    }

    telaPerguntas.classList.add('escondido');
    telaNiveis.classList.remove('escondido');

    perguntasDoQuiz();
    quantidadeDeNiveis();
}

avancar[1].addEventListener('click', avancaEtapaNiveis);

