const caixaDadosBasicos = document.querySelectorAll('.entrada-de-dados input');
let titulo;
let imagem;
let totalDePerguntas;
let totalDeNiveis;
let dadosIniciais = [];
const camposBasicosParaValidar = camposBasicosVazios();

const condicaoURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
let regexURL = new RegExp(condicaoURL);

function camposBasicosVazios() {

    dadosIniciais = []

    titulo = caixaDadosBasicos[0].value;
    imagem = caixaDadosBasicos[1].value;
    totalDePerguntas = caixaDadosBasicos[2].value;
    totalDeNiveis = caixaDadosBasicos[3].value;

    dadosIniciais.push(titulo, imagem, totalDePerguntas, totalDeNiveis);

    for(let i = 0; i < caixaDadosBasicos.length; i++){

        if(caixaDadosBasicos[i].value === ""){
            return true;
        }        
    }

    return dadosIniciais;
}

function validaTituloQuiz(elemento){

    if(titulo.length < 20 || titulo.length > 65){
        alert("Seu texto deve ter entre 20 e 65 caracteres");
        dadosIniciais = []
        return true;
    } 
}

function validaQtdePerguntasQuiz() {

    if(totalDePerguntas < 3){ 
        alert("Por favor, escolha no mínimo 3 perguntas");       
        dadosIniciais = []
        return true;
    }    
}

function validaQtdeNiveisQuiz() {

    if(totalDeNiveis < 2){    
        alert("Por favor, escolha no mínimo 2 níveis");    
        dadosIniciais = []
        return true;
    }    
}

function validaImagemBasica() {

    if (!imagem.match(regexURL)) {
        alert("Por favor, entre com uma URL válida");
        dadosIniciais = []
        return true;
    } 
}