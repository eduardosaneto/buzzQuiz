function avancaEtapaNiveis() {

    if(camposPerguntasVazios() === true){
        alert("Por favor, preencha os campos de pergunta, resposta correta e pelo menos um campo de resposta incorreta com o titulo e a imagem");
        perguntasRespostas = [];
        perguntasRespostasIndividuais = [];
        return;
    } else if(validaTituloPergunta(camposParaValidar) === true){
        alert("Por favor, insira títulos para as perguntas que contenham pelo menos 20 caracteres");
        perguntasRespostas = [];
        perguntasRespostasIndividuais = [];
        return;
    } else if(validaCorPerguntas(camposParaValidar) === true){
        alert("Por favor, insira uma cor válida no formato hexadecimal (ex: #ffffff = Branco)");
        perguntasRespostas = [];
        perguntasRespostasIndividuais = [];
        return;
    } else if(validaImagemPergunta(camposParaValidar) === true){
        alert("Por favor, insira URLs validas para as imagens");
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

