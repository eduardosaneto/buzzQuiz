function voltaPaginaPrincipal() {

    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.add("escondido");   
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.remove("escondido");

    obterQuizes();
}