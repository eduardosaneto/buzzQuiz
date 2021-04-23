function renderizaUltimoQuiz(resposta){

    const imagemSucessoQuiz = document.querySelector('.container-imagem-sucesso');

    const dadosSerializados = localStorage.getItem("dadosMeuQuizCriado")
    const dadosDeserializados = JSON.parse(dadosSerializados);
    console.log(dadosDeserializados);

    const quizes = resposta.data;       
    
    console.log(dadosDeserializados.length)
       

    for (let i = 0; i < idQuizesRenderizados.length; i++){        
        const titulo = quizes[i].title;
        const imagem = quizes[i].image;
       
        for (let j = 0; j < dadosDeserializados.length; j++){                                 
            if (idQuizesRenderizados[i] == dadosDeserializados[j]){
                let listaTodosQuizes = document.querySelector(".primeira-lista");
                let quizASerRemovido = document.getElementById(dadosDeserializados[j]);

                listaTodosQuizes.removeChild(quizASerRemovido);

                console.log("entrei") 
                imagemSucessoQuiz.innerHTML += `
                            <img src="${imagem}" alt="" onclick="abreTelaQuiz(); buscaQuizClicado(${idQuizesRenderizados[i]})>
                            <span class="titulo-imagem">${titulo}</span>`;
            }
        } 
        
    }
}

