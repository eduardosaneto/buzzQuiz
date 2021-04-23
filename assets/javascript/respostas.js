const respostas = [];

function respostasDoQuiz(){ //Retorna as respostas inseridas para o quiz

    containerPerguntas = document.querySelectorAll('.entrada-de-perguntas');
    
    for(let i = 0; i < dadosIniciais[2]; i++){

        const respostasParaCadaPergunta = [];

        const determinarPergunta = containerPerguntas[i].children[1];

        const caixaRespostaCorreta = determinarPergunta.children[2];
        const caixaRespostaIncorreta = determinarPergunta.children[4];

        const textoRespostaCorreta = caixaRespostaCorreta.children[0].value;
        const imagemRespostaCorreta = caixaRespostaCorreta.children[1].value;

        const respostaCorreta = 
        {
            text: textoRespostaCorreta,
            image: imagemRespostaCorreta,
            isCorrectAnswer: true
        };

        respostasParaCadaPergunta.push(respostaCorreta);

        for(let j = 0; j < 3; j++){

            const caixasRespostasIncorretas = caixaRespostaIncorreta.children[j];

            const textoRespostaIncorreta = caixasRespostasIncorretas.children[0].value;
            const imagemRespostaIncorreta = caixasRespostasIncorretas.children[1].value;

            if(textoRespostaIncorreta !== "" && imagemRespostaIncorreta !== ""){

                const respostaIncorreta = 
                {
                    text: textoRespostaIncorreta,
                    image: imagemRespostaIncorreta,
                    isCorrectAnswer: false
                };

                respostasParaCadaPergunta.push(respostaIncorreta);
            }

        }

        respostas.push(respostasParaCadaPergunta);
    }
    return respostas;
}