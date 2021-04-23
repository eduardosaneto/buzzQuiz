const caixaDadosBasicos = document.querySelectorAll('.entrada-de-dados input');
let titulo;
let imagem;
let totalDePerguntas;
let totalDeNiveis;
const condicaoURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
let regexURL = new RegExp(condicaoURL);

function camposBasicosVazios() {
    for(let i = 0; i < caixaDadosBasicos.length; i++){

        if(caixaDadosBasicos[i].value === "" || caixaDadosBasicos[i].value === null){
            return true;
        }
    }
}

function recebeTitulo() {
    titulo = caixaDadosBasicos[0].value;
    return titulo;
}

function validaTituloQuiz(){

    recebeTitulo();

    if(titulo.length < 20 || titulo.length > 65){
        titulo = "";
        return true;
    } 
}

function recebeQtgePerguntas(){
    totalDePerguntas = caixaDadosBasicos[2].value;
    return totalDePerguntas
}

function validaQtdePerguntasQuiz() {

    recebeQtgePerguntas();

    if(totalDePerguntas < 3){        
        titulo = "";
        return true;
    }    
}

function recebeQtdeNiveis(){
    totalDeNiveis = caixaDadosBasicos[3].value;
    return totalDeNiveis;
}

function validaQtdeNiveisQuiz() {

    recebeQtdeNiveis();

    if(totalDeNiveis < 2){        
        titulo = "";
        return true;
    }    
}

function recebeImagemBasica() {
    imagem = caixaDadosBasicos[1].value;
    return imagem;
}

function validaImagemBasica() {

    recebeImagemBasica()

    if (!imagem.match(regexURL)) {
        titulo = "";
        return true;
    } 
}