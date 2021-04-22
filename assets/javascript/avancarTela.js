const caixaDadosBasicos = document.querySelectorAll('.entrada-de-dados input');
let titulo;
let imagem;
let totalDePerguntas;
let totalDeNiveis;
const dadosIniciais = [];

const avancar = document.querySelectorAll('.avancar');
const telaDeCriacao = document.querySelectorAll('.etapa-de-criacao');
const telaDeInfosBasicas = telaDeCriacao[0];
const telaPerguntas = telaDeCriacao[1];
const telaNiveis = telaDeCriacao[2];
const telaSucesso = telaDeCriacao[3];

function etapaPerguntas() {

    titulo = caixaDadosBasicos[0].value;
    imagem = caixaDadosBasicos[1].value;
    totalDePerguntas = caixaDadosBasicos[2].value;
    totalDeNiveis = caixaDadosBasicos[3].value;

    dadosIniciais.push(titulo, imagem, totalDePerguntas, totalDeNiveis);

    telaDeInfosBasicas.classList.add('escondido');
    telaPerguntas.classList.remove('escondido');
    
    quantidadeDePerguntas();    

    return dadosIniciais;
}

avancar[0].addEventListener('click', etapaPerguntas);

function etapaNiveis() {
    telaPerguntas.classList.add('escondido');
    telaNiveis.classList.remove('escondido');

    perguntasDoQuiz();
    quantidadeDeNiveis();
}

avancar[1].addEventListener('click', etapaNiveis);

function etapaSucesso() {
    telaNiveis.classList.add('escondido');
    telaSucesso.classList.remove('escondido');

    niveisDoQuiz()
}

avancar[2].addEventListener('click', etapaSucesso);

