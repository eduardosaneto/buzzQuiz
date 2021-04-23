function avancaEtapaSucesso() {
    
    telaNiveis.classList.add('escondido');
    telaSucesso.classList.remove('escondido');

    niveisDoQuiz()
}

avancar[2].addEventListener('click', avancaEtapaSucesso);

function avancaQuizCriado() {
    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.add("escondido");
    const paginaQuiz = document.querySelector(".pagina-quiz");
    paginaQuiz.classList.remove("escondido"); 

}

avancar[3].addEventListener('click', avancaQuizCriado);