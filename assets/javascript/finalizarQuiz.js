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
    alert("você criou um quizz");

    const imagemSucessoQuiz = document.querySelector('.container-imagem-sucesso');

    imagemSucessoQuiz.innerHTML += `
                    <img src="${dadosIniciais[1]}" alt="">
                    <span class="titulo-imagem">${dadosIniciais[0]}</span>
                    `;
}

function retornaErro(error) {
    alert("Não foi possível criar o Quizz. Por favor, revise seus dados.");
}

avancar[2].addEventListener('click', finalizarQuiz);