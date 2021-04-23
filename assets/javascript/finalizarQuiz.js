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
    let listaDeIDs = [];
        if (localStorage.getItem("dadosMeuQuizCriado") !== null){            
            listaDeIDs = (JSON.parse(localStorage.getItem("dadosMeuQuizCriado")));                      
       }    
    listaDeIDs.push(JSON.stringify(RespostaMeuQuiz.id))
    localStorage.setItem("dadosMeuQuizCriado", JSON.stringify(listaDeIDs));

    alert("você criou um lindo Quizz");

    imagemSucessoQuiz.innerHTML += `
                    <img src="${dadosIniciais[1]}" alt="">
                    <span class="titulo-imagem">${dadosIniciais[0]}</span>
                    `;

}

function retornaErro(error) {
    alert("Não foi possível criar o seu lindo Quizz. Por favor, revise seus dados.");
}

avancar[2].addEventListener('click', finalizarQuiz);