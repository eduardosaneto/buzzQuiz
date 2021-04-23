const voltar = document.querySelectorAll('.voltar');

function voltaPaginaPrincipal() {

    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.add("escondido");   
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.remove("escondido");

    obterQuizes();
}

voltar[0].addEventListener('click', voltaPaginaPrincipal);
voltar[3].addEventListener('click', voltaPaginaPrincipal);

function voltaEtapaInicial() {

    telaPerguntas.classList.add('escondido');
    telaDeInfosBasicas.classList.remove('escondido');    
}

voltar[1].addEventListener('click', voltaEtapaInicial);

function voltaEtapaPerguntas() {
    telaNiveis.classList.add('escondido');
    telaPerguntas.classList.remove('escondido');

}

voltar[2].addEventListener('click', voltaEtapaPerguntas);