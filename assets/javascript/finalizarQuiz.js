let RespostaMeuQuiz = null;
let keyMeuQuiz = null;
let dadosSerializados = null;
let testando = 0;

function finalizarQuiz() {
    
    const dadosQuiz = 
    {
        title: dadosIniciais[0],
        image: dadosIniciais[1],
        questions: perguntas,
        levels: niveis
    };

    const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes", dadosQuiz);

    promessa.then(retornaSucesso);
    promessa.catch(retornaErro);
}   

function retornaSucesso(resposta) {

    RespostaMeuQuiz = resposta.data;       

    let listaDeIDs = [];
        if (localStorage.getItem("dadosMeuQuizCriado") !== null){            
            listaDeIDs = (JSON.parse(localStorage.getItem("dadosMeuQuizCriado")));                      
       }    
    listaDeIDs.push(JSON.stringify(RespostaMeuQuiz.id))
    localStorage.setItem("dadosMeuQuizCriado", JSON.stringify(listaDeIDs));

    alert("você criou um lindo Quizz");

    renderizaMeuUltimoQuiz(RespostaMeuQuiz);
    keyMeuQuiz = RespostaMeuQuiz.key;

    return RespostaMeuQuiz;

}

function retornaErro(error) {
    alert("Não foi possível criar o seu lindo Quizz. Por favor, revise seus dados.");
}

function renderizaMeuUltimoQuiz(elemento) {
    
    const idMeuNovoQuiz = elemento.id;
    const tituloMeuNovoQuiz = elemento.title;
    const imagemMeuNovoQuiz = elemento.image;

    telaSucesso.innerHTML += `
                        <span class="titulo-da-etapa">
                            Seu quizz está pronto!
                        </span>
                        <div id="${idMeuNovoQuiz}" class="imagem-quiz" onclick="abreTelaQuiz(); buscaQuizClicado(${idMeuNovoQuiz})">
                            <img src="${imagemMeuNovoQuiz}">
                            <span class="titulo-imagem">${tituloMeuNovoQuiz}</span> 
                        </div> 
                        <button id="${idMeuNovoQuiz}" class="avancar" onclick="abreTelaQuiz(); buscaQuizClicado(${idMeuNovoQuiz})">
                            Acessar Quizz
                        </button>
                        <button class="voltar" onclick="voltaPaginaPrincipal()">Voltar pra home</button>`;
}