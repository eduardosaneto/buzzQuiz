// const voltar = document.querySelectorAll('.voltar');

function voltaPaginaPrincipal() {

    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.add("escondido");   
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.remove("escondido");

    obterQuizes();
}

// voltar[0].addEventListener('click', voltaPaginaPrincipal);
// voltar[1].addEventListener('click', voltaPaginaPrincipal);

