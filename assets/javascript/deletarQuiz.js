// let ids = [];
// let keys = [];
let keyCorreta;

function deletarQuiz(id) {

    const novoId = id;

    const dadosSerializados = localStorage.getItem("minhasChavesEIDsDoQuiz")
    const dadosDeserializados = JSON.parse(dadosSerializados);

        for (let j = 0; j < dadosDeserializados.length; j++){ 
            
            // ids.push(dadosDeserializados[2*j]);
            // keys.push(dadosDeserializados[(2*j+1)]);    
            
            if(dadosDeserializados[2*j] === novoId){
                
                keyCorreta = dadosDeserializados[2*j+1];                
            }

        }    

 

    const header = {
        Secret-Key: keyCorreta;
    }

    const promessa = axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/${novoId}", header);

    promessa.then(confirmarDeletar);    
}

function confirmarDeletar(resposta) {

    var mensagem;
    var retorno = confirm("Clique em um dos botões!");
    if (retorno == true)
    {
    mensagem = "Operação confirmada";
    }
    else
    {
    mensagem = "Você cancelou a operação";
    }
    document.write(mensagem);
}

function pararDePropagar(event) {
    if (document.getElementsByTagName("li").checked) {
      event.stopPropagation();
    }
  }
  