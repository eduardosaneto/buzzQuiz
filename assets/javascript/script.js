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
    console.log(dados)    
    const identificador = dados.id;
    console.log(identificador)
    const imagemQuiz = dados.image;    
    const tituloQuiz = dados.title;
    let questoes = dados.questions;
    console.log(questoes)  
    respostas = questoes[0].answers;    
    console.log(respostas) 
    const quizPergunta = document.querySelector(".quiz-pergunta");            
    const paginaQuiz = document.querySelector(".pagina-quiz")    
    paginaQuiz.innerHTML = "";
    // paginaQuiz.innerHTML = 
          
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

            for (let j = 0; j < questoes[i].answers.length; j++) {   
                                             
                opcoes += `                                
                            <div class="opcao">
                                <img src="${questoes[i].answers[j].image}" alt="gato">
                                <span>${questoes[i].answers[j].text}</span>
                            </div>
                                                                                                                                                
                        `    
                
            } 
           
            resultadoFinal += opcoes; 
            resultadoFinal += "</div> </div>"
            paginaQuiz.innerHTML = resultadoFinal;
            console.log(resultadoFinal)
                          
        }     
        
        
       

        // if (respostas.length === 3){
        //     const quizPergunta = document.querySelector(".quiz-pergunta");
        //     quizPergunta.innerHTML +=
        //     `
        //     <div class="opcoes">
        //             <div class="opcao">
        //                 <img src="${questoes[i].answers[i].image}" alt="gato">
        //                 <span>${questoes[i].answers[i].text}</span>
        //             </div>    
        //             <div class="opcao">
        //                 <img src="${questoes[i].answers[i+1].image}" alt="gato">
        //                 <span>${questoes[i].answers[i+1].text}</span>
        //             </div>    
        //             <div class="opcao">
        //                 <img src="${questoes[i].answers[i+2].image}" alt="gato">
        //                 <span>${questoes[i].answers[i+2].text}</span>
        //             </div>                                         
        //     </div> 

        //     `
        // }

        // if (respostas.length === 4){
        //     const quizPergunta = document.querySelector(".quiz-pergunta");
        //     quizPergunta.innerHTML +=                 
        //     `
        //     <div class="opcoes">
        //             <div class="opcao">
        //                 <img src="${questoes[i].answers[i].image}" alt="gato">
        //                 <span>${questoes[i].answers[i].text}</span>
        //             </div>    
        //             <div class="opcao">
        //                 <img src="${questoes[i].answers[i+1].image}" alt="gato">
        //                 <span>${questoes[i].answers[i+1].text}</span>
        //             </div>    
        //             <div class="opcao">
        //                 <img src="${questoes[i].answers[i+2].image}" alt="gato">
        //                 <span>${questoes[i].answers[i+2].text}</span>
        //             </div> 
        //             <div class="opcao">
        //                 <img src="${questoes[i].answers[i+3].image}" alt="gato">
        //                 <span>${questoes[i].answers[i+3].text}</span>
        //             </div>                                        
        //     </div> 

        //     `
        // }
    // }        
    
    // const niveis = dados.levels;    
    //     for (let i = 0; i < niveis.length; i++) {
    //         if(niveis[i].minValue === 0) {  
    //             paginaQuiz.innerHTML += `
    //             <div class="quiz-acerto">
    //                 <div class="header-pergunta">
    //                     <span>${niveis[i].title}</span>
    //                 </div>
    //                 <div class="opcoes">
    //                     <div class="opcao">
    //                         <img src="${niveis[i].image}" alt="dumbledore">                        
    //                     </div>    
    //                     <div class="opcao">                        
    //                         <span>${niveis[i].text}</span>
    //                     </div>                    
    //                 </div>      
    //             </div> 
    //             <button class="reiniciar-quiz">Reiniciar quizz</button> 
    //             <button class="voltar-home">Voltar para home</button> 
    //             `                  
    //         }

    //         if(niveis[i].minValue > 0 && niveis[i].minValue < 60) {  
    //         }
    //     }

}


function criaQuiz() {  
    const paginaPrincipal = document.querySelector(".pagina-principal");
    paginaPrincipal.classList.add("escondido");
    const paginaCriacaoQuiz = document.querySelector(".criacao-quiz");
    paginaCriacaoQuiz.classList.remove("escondido");      
}

obterQuizes();