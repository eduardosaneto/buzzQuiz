let RespostaMeuQuiz = null;
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

    console.log(dadosQuiz);

    const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes", dadosQuiz);

    promessa.then(retornaSucesso);
    promessa.catch(retornaErro);
}   

function retornaSucesso(resposta) {

    const imagemSucessoQuiz = document.querySelector('.container-imagem-sucesso');

    RespostaMeuQuiz = resposta.data;       

    console.log(RespostaMeuQuiz);

    let listaDeIDs = [];
        if (localStorage.getItem("dadosMeuQuizCriado") !== null){            
            listaDeIDs = (JSON.parse(localStorage.getItem("dadosMeuQuizCriado")));                      
       }    
    listaDeIDs.push(JSON.stringify(RespostaMeuQuiz.id))
    localStorage.setItem("dadosMeuQuizCriado", JSON.stringify(listaDeIDs));

    alert("você criou um lindo Quizz");

    const idMeuNovoQuiz = RespostaMeuQuiz.id;
    const tituloMeuNovoQuiz = RespostaMeuQuiz.title;
    const imagemMeuNovoQuiz = RespostaMeuQuiz.image;

    imagemSucessoQuiz.innerHTML += `
                        <div class="imagem-quiz" onclick="abreTelaQuiz(); buscaQuizClicado(${idMeuNovoQuiz})>
                            <img src="${imagemMeuNovoQuiz}" alt="">
                            <span class="titulo-imagem">${tituloMeuNovoQuiz}</span> 
                        </div> `;

}

// function renderizaUltimoQuiz(resposta){

//     const imagemSucessoQuiz = document.querySelector('.container-imagem-sucesso');

//     const dadosSerializados = localStorage.getItem("dadosMeuQuizCriado")
//     const dadosDeserializados = JSON.parse(dadosSerializados);
//     console.log(dadosDeserializados);

//     const quizes = resposta.data;       
    
//     console.log(dadosDeserializados.length)
       

//     for (let i = 0; i < idQuizesRenderizados.length; i++){        
//         const titulo = quizes[i].title;
//         const imagem = quizes[i].image;
       
//         for (let j = 0; j < dadosDeserializados.length; j++){                                 
//             if (idQuizesRenderizados[i] == dadosDeserializados[j]){
//                 let listaTodosQuizes = document.querySelector(".primeira-lista");
//                 let quizASerRemovido = document.getElementById(dadosDeserializados[j]);

//                 listaTodosQuizes.removeChild(quizASerRemovido);

//                 console.log("entrei") 
//                 imagemSucessoQuiz.innerHTML += `
//                             <img src="${imagem}" alt="" onclick="abreTelaQuiz(); buscaQuizClicado(${idQuizesRenderizados[i]})>
//                             <span class="titulo-imagem">${titulo}</span>`;
//             }
//         } 
        
//     }
// }

function retornaErro(error) {
    alert("Não foi possível criar o seu lindo Quizz. Por favor, revise seus dados.");
}