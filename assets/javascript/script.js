let idQuizesRenderizados = [];
let questoes = null;
let guardaAcertos = 0;
let leveis = null;
let tituloLevel = null;
let textoLevel = null;
let imagemLevel = null;
let respostaComIdQuizClicado = null;

obterQuizes();

function carregamento(){
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.add("escondido");
    const carregamento = document.querySelector(".carregamento");
    carregamento.classList.remove("escondido")
}

function desfazCarregamento(){
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.remove("escondido");
    const carregamento = document.querySelector(".carregamento");
    carregamento.classList.add("escondido")
}

function carregamento2(){
    const paginaPrincipal = document.querySelector(".pagina-quiz");
    paginaPrincipal.classList.add("escondido");
    const carregamento = document.querySelector(".carregamento");
    carregamento.classList.remove("escondido")
}

function desfazCarregamento2(){
    const paginaPrincipal = document.querySelector(".pagina-quiz");
    paginaPrincipal.classList.remove("escondido");
    const carregamento = document.querySelector(".carregamento");
    carregamento.classList.add("escondido")
}

function carregamento3(){
    const carregamento = document.querySelector(".carregamento");
    carregamento.classList.remove("escondido")
    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.add("escondido")
    setTimeout(desfazCarregamento3, 1000)
}

function desfazCarregamento3(){
    const paginaPrincipal = document.querySelector(".criacao-quiz");
    paginaPrincipal.classList.remove("escondido");
    const carregamento = document.querySelector(".carregamento");
    carregamento.classList.add("escondido")
}

function obterQuizes() {
    carregamento()    
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes");            
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
        <li id="${quizes[i].id}" onclick="abreTelaQuiz(); buscaQuizClicado(${idQuizesRenderizados[i]})">
            <img src="${imagem}" alt="">
            <span class="titulo-imagem">${titulo}</span>
        </li>`              
    }  

    const dadosSerializados = localStorage.getItem("dadosMeuQuizCriado")
    const dadosDeserializados = JSON.parse(dadosSerializados);

    if(dadosDeserializados !== null){
        renderizaSeusQuizes(resposta);
    }

    desfazCarregamento() 
}

function renderizaSeusQuizes(resposta){    
    const dadosSerializados = localStorage.getItem("dadosMeuQuizCriado")
    const dadosDeserializados = JSON.parse(dadosSerializados);

    const quizes = resposta.data;       
    const listaSeusQuizes = document.querySelector("ul")   
    listaSeusQuizes.innerHTML = "";  

    for (let i = 0; i < idQuizesRenderizados.length; i++){        
        const titulo = quizes[i].title;
        const imagem = quizes[i].image;
       
        for (let j = 0; j < dadosDeserializados.length; j++){                                 
            if (idQuizesRenderizados[i] == dadosDeserializados[j]){
                const inserirQuiz = document.querySelector(".inserir-quiz");
                inserirQuiz.classList.add('escondido');
                const seusQuizes = document.querySelector(".seus-quizes");
                seusQuizes.classList.remove('escondido');
                let listaTodosQuizes = document.querySelector(".primeira-lista");
                let quizASerRemovido = document.getElementById(dadosDeserializados[j]);
                listaTodosQuizes.removeChild(quizASerRemovido);                
                listaSeusQuizes.innerHTML+= `
                        <li onclick="abreTelaQuiz(); buscaQuizClicado(${idQuizesRenderizados[i]})">
                            <img src="${imagem}" alt="">
                            <span class="titulo-imagem">${titulo}</span>
                            <div class="editar-excluir">
                                <ion-icon id="${idQuizesRenderizados[i]}" class="editar" name="create-outline" onclick="deletarQuiz(${idQuizesRenderizados[i]})"></ion-icon>
                                <ion-icon id="${idQuizesRenderizados[i]}" class="excluir" name="trash-outline" onclick="deletarQuiz(${idQuizesRenderizados[i]})></ion-icon>
                            </div>
                        </li>
                    `
            } 
        } 
        
    }
}


function abreTelaQuiz () {
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.add("escondido");
    const paginaQuiz = document.querySelector(".pagina-quiz");
    paginaQuiz.classList.remove("escondido");  
    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.add("escondido");
}


function buscaQuizClicado (idQuizClicado) {     
    const promessa = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/${idQuizClicado}`);    
    promessa.then(renderizaQuizClicado) 
    carregamento2()
}

function renderizaQuizClicado (resposta){       
    respostaComIdQuizClicado = resposta;  
    const dados = resposta.data;        
    const identificador = dados.id;   
    const imagemQuiz = dados.image;    
    const tituloQuiz = dados.title;
    questoes = dados.questions;
    leveis = dados.levels;
    
    const banner = document.querySelector(".banner-quiz")
    banner.scrollIntoView();                
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
            ` <div id="${i}" class="quiz-pergunta">
                <div style="background: ${questoes[i].color}" class="header-pergunta">
                <span>${questoes[i].title}</span> 
                </div>                                     
            ` 
            let opcoes = "<div class='opcoes'>" 

            const listaRespostas = questoes[i].answers;            
            listaRespostas.sort(embaralha);

            for (let j = 0; j < questoes[i].answers.length; j++) {    
                                                                           
                opcoes += `                                
                    <div class="opcao ${questoes[i].answers[j].isCorrectAnswer}" onclick="cliqueNaOpcao(this); verificaAcertos(this)">
                        <img src="${questoes[i].answers[j].image}" alt="gato">
                        <span>${questoes[i].answers[j].text}</span>
                    </div>                                                                                                                                                
                    `     
            } 
           
            resultadoFinal += opcoes; 
            resultadoFinal += "</div> </div>"
            paginaQuiz.innerHTML = resultadoFinal;                                                           
        } 
    
    setTimeout(desfazCarregamento2,2000)        
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
    
    opcaoClicada.classList.remove("esbranquiçado");          
    setTimeout(levaPraProximaPergunta, 2000, opcaoClicada);   
     
}

function verificaAcertos (opcaoClicada){      
    if (opcaoClicada.classList.contains("true")){ 
        guardaAcertos++           
    }
}

function levaPraProximaPergunta(opcaoClicada) {
    const idDaPergunta = opcaoClicada.parentNode.parentNode.id;    
    const idDaProximaPergunta = (parseInt(idDaPergunta) + 1).toString();
    const calculoAcerto = Math.floor((guardaAcertos/questoes.length)*100); 


    if (parseInt(idDaProximaPergunta) === questoes.length) {
        const paginaQuiz = document.querySelector(".pagina-quiz")    
            paginaQuiz.innerHTML += ` 
            <div class="quiz-acerto">
                <div class="header-pergunta">
                    <span>${calculoAcerto}% de acerto: ${tituloLevel}</span>
                </div>
                <div class="opcoes">
                    <div class="opcao">
                        <img src="${imagemLevel}" alt="dumbledore">                        
                    </div>    
                    <div class="opcao">                        
                        <span>${textoLevel}</span>
                    </div>                    
                </div>      
            </div> 
            <button class="reiniciar-quiz" onclick="reiniciaQuiz()">Reiniciar quizz</button> 
            <button class="voltar-home" onclick="voltaParaHome()">Voltar para home</button>
            `             
        document.querySelector(".quiz-acerto").scrollIntoView({behavior:"smooth"});        
    }

    else {
        document.getElementById(idDaProximaPergunta).scrollIntoView({behavior:"smooth"});
    }

    for (let i = 0; i < leveis.length; i++){
        if (calculoAcerto >= leveis[i].minValue){
           textoLevel = leveis[i].text;
           tituloLevel = leveis[i].title;
           imagemLevel = leveis[i].image;
        }
    }
}

function reiniciaQuiz () {
    const elementoQueQueroQueApareca = document.querySelector('.banner-quiz');
    elementoQueQueroQueApareca.scrollIntoView();
    renderizaQuizClicado(respostaComIdQuizClicado);
}

function voltaParaHome () {
    window.location.reload();
}

function criaQuiz() {  
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.add("escondido");
    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.remove("escondido");      
}

