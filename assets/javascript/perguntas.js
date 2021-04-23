const perguntas = [];

function perguntasDoQuiz() {

    caixaPerguntas =  document.querySelectorAll('.caixa-perguntas');

    respostasDoQuiz()

    for(let i = 0; i < dadosIniciais[2]; i++){

        const tituloPergunta = caixaPerguntas[i].children[0].value;
        const corPergunta = caixaPerguntas[i].children[1].value;

        const pergunta = 
        {
            title: tituloPergunta,
            color: corPergunta,
            answers: respostas[i]
        };

        perguntas.push(pergunta);
    }

    return perguntas;    
}

