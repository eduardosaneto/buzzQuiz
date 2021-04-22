function criaQuiz() {
    
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
}

function retornaErro(error) {
    alert("Você não criou um quizz");
}

avancar[2].addEventListener('click', criaQuiz);