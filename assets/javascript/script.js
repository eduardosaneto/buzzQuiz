function obterQuizes() {
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes");
    console.log(promessa)
    promessa.then(renderizaQuizes);
}


function renderizaQuizes(resposta) {
    const quizes = resposta.data;        
    const primeiraLista = document.querySelector(".primeira-lista");  

    for (let i = 0; i < quizes.length; i++){
        const identificador = quizes[i].id;
        const titulo = quizes[i].title;
        const imagem = quizes[i].image;       
        primeiraLista.innerHTML+= `
        <li onclick="abreTelaQuiz(this)">
            <img src="${imagem}" alt="">
            <span class="titulo-imagem">${titulo}</span>
        </li>`        
    }
}

function abreTelaQuiz (elementoClicado){
    const bannerQuiz = document.querySelector(".banner-quiz");
    bannerQuiz.classList.remove("escondido")
    const inserirQuiz = document.querySelector(".inserir-quiz");
    inserirQuiz.classList.add("escondido");
    const todosQuizes = document.querySelector(".todos-quizes");
    todosQuizes.classList.add("escondido");
    const quizPergunta = document.querySelector(".quiz-pergunta");
    quizPergunta.classList.remove("escondido");
    const quizAcerto = document.querySelector(".quiz-acerto");
    quizAcerto.classList.remove("escondido");
}

function criaQuiz() {  
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.add("escondido");
    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.remove("escondido");      
}

obterQuizes();


