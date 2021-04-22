let idQuizesRenderizados = [];

function obterQuizes() {
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes");
    console.log(promessa)
    promessa.then(renderizaQuizes);
}

function renderizaQuizes(resposta) {
    const quizes = resposta.data;        
    const primeiraLista = document.querySelector(".primeira-lista");  

    for (let i = 0; i < quizes.length; i++){
        idQuizesRenderizados.push(quizes[i].id);        
        const titulo = quizes[i].title;
        const imagem = quizes[i].image;       
        primeiraLista.innerHTML+= `
        <li onclick="abreTelaQuiz(); buscaQuizClicado(${idQuizesRenderizados[i]})">
            <img src="${imagem}" alt="">
            <span class="titulo-imagem">${titulo}</span>
        </li>`              
    }    
}

function abreTelaQuiz () {
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.add("escondido");
    const paginaQuiz = document.querySelector(".pagina-quiz");
    paginaQuiz.classList.remove("escondido");    
}


function buscaQuizClicado (idQuizClicado) {       
    const promessa = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/${idQuizClicado}`);
    console.log(idQuizClicado)
    promessa.then(renderizaQuizClicado) 
}

function renderizaQuizClicado (resposta){    
    const dados = resposta.data;        
    const identificador = dados.id;   
    const imagemQuiz = dados.image;    
    const tituloQuiz = dados.title;
    let questoes = dados.questions;    
    // respostas = questoes[0].answers;    
               
    const paginaQuiz = document.querySelector(".pagina-quiz")    
    paginaQuiz.innerHTML = "";  
          
        let resultadoFinal = `
            <div class="banner-quiz">
                <span class="banner-titulo">${tituloQuiz}</span>
                <img src="${imagemQuiz}" alt="banner-quiz">
            </div>             
            `;

        for (let i = 0; i < questoes.length; i++) {          
                        
            
            resultadoFinal +=             
            ` <div class="quiz-pergunta">
                <div style="background: ${questoes[i].color}" class="header-pergunta">
                <span>${questoes[i].title}</span> 
                </div>                                     
            ` 
            let opcoes = "<div class='opcoes'>" 

            const listaRespostas = questoes[i].answers;
            console.log(listaRespostas)
            listaRespostas.sort(embaralha);

            for (let j = 0; j < questoes[i].answers.length; j++) {    
                                                                           
                opcoes += `                                
                    <div class="opcao ${questoes[i].answers[j].isCorrectAnswer}" onclick="cliqueNaOpcao(this)">
                        <img src="${questoes[i].answers[j].image}" alt="gato">
                        <span>${questoes[i].answers[j].text}</span>
                    </div>                                                                                                                                                
                    `     
            } 
           
            resultadoFinal += opcoes; 
            resultadoFinal += "</div> </div>"
            paginaQuiz.innerHTML = resultadoFinal;                                                
        } 
          
}

function embaralha(){
    return Math.random() - 0.5;  
}

function cliqueNaOpcao (opcaoClicada){          
    const aplicaEsbranquicadoOpcoes = opcaoClicada.parentNode; 
    const listaOpcoes = aplicaEsbranquicadoOpcoes.children;    

    for (let i = 0; i < listaOpcoes.length; i++){
        listaOpcoes[i].classList.add("esbranquiçado");
        listaOpcoes[i].setAttribute("onclick", "");        
        
        if (listaOpcoes[i].classList.contains('true')) {
            const span = listaOpcoes[i].querySelector("span");
            span.classList.add('certa')
        } else {
            const span = listaOpcoes[i].querySelector("span");
            span.classList.add('errada')
        }
    }

    opcaoClicada.classList.remove("esbranquiçado") 
    
    setTimeout(proximaPergunta, 2000)
}

function proximaPergunta () {
    const quizes = document.querySelector(".quiz-pergunta");
    const todosOsQuizes = quizes.parentNode;
    console.log(todosOsQuizes)

    for (let i = 0; i < todosOsQuizes.length; i++){
        console.log("entrei no for")
        quizes[i].scrollIntoView();
    }
    // const elementoQueQueroQueApareca = document.querySelector('.quiz-pergunta');
    // todosOsQuizes.scrollIntoView();
}

     

function criaQuiz() {  
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.add("escondido");
    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.remove("escondido");      
}

obterQuizes();