let containerPerguntas;
let caixaPerguntas;
let perguntasRespostas = [];
let perguntasRespostasIndividuais = [];
let camposParaValidar = camposPerguntasVazios();

const ehHex = /#[0-9A-F]{6}$/gi;
let regexHex = new RegExp(ehHex);

function camposPerguntasVazios() {

    containerPerguntas = document.querySelectorAll('.entrada-de-perguntas');
    caixaPerguntas =  document.querySelectorAll('.caixa-perguntas');
    
    for(let i = 0; i < caixaPerguntas.length; i++){
        
        perguntasRespostasIndividuais = [];

        const tituloPergunta = caixaPerguntas[i].children[0].value;
        const corPergunta = caixaPerguntas[i].children[1].value;

        const determinarPergunta = containerPerguntas[i].children[1];

        const caixaRespostaCorreta = determinarPergunta.children[2];
        
        const textoRespostaCorreta = caixaRespostaCorreta.children[0].value;
        const imagemRespostaCorreta = caixaRespostaCorreta.children[1].value;

        if(tituloPergunta === "" || corPergunta === "" || textoRespostaCorreta === "" || imagemRespostaCorreta === ""){
            return true;
        }

        const caixaRespostaIncorreta = determinarPergunta.children[4];
        const textoPrimeiraRespostaIncorreta = caixaRespostaIncorreta.children[0].children[0].value;
        const imagemPrimeiraRespostaIncorreta = caixaRespostaIncorreta.children[0].children[1].value;

        if(textoPrimeiraRespostaIncorreta === "" || imagemPrimeiraRespostaIncorreta === ""){
            return true;
        }

        perguntasRespostasIndividuais.push(tituloPergunta, corPergunta, imagemRespostaCorreta);

        for(let j = 1; j < 3; j++){

            const caixasRespostasIncorretas = caixaRespostaIncorreta.children[j];

            const textoRespostaIncorreta = caixasRespostasIncorretas.children[0].value;
            const imagemRespostaIncorreta = caixasRespostasIncorretas.children[1].value;

            if(textoRespostaIncorreta === "" && imagemRespostaIncorreta !== ""){
                return true;
            } else if (textoRespostaIncorreta !== "" && imagemRespostaIncorreta === ""){
                return true;
            }

            perguntasRespostasIndividuais.push(imagemRespostaIncorreta);
        }

        perguntasRespostas.push(perguntasRespostasIndividuais);
    }
    
    return perguntasRespostas;
}

function validaTituloPergunta(elemento){

    for(let i = 0; i < perguntasRespostas.length; i++) {
        if(perguntasRespostas[i][0].length < 20){
            return true;
        } 
    }
}

function validaCorPerguntas(elemento) {

    for(let i = 0; i < perguntasRespostas.length; i++) {
        if(!perguntasRespostas[i][1].match(regexHex)){
            return true;
        } 
    }
}


function validaImagemPergunta(elemento) {

    for(let i = 0; i < perguntasRespostas.length; i++){
        if(!perguntasRespostas[i][2].match(regexURL)){
            return true;
        } else if(perguntasRespostas[i][3] !== "" && !perguntasRespostas[i][4].match(regexURL)){
            return true;
        }         
    }
}