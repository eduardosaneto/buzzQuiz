function avancaEtapaSucesso() {

    if(camposNiveisVazios() === true){
        alert("Por favor, preencha todos os campos");
        niveisDeEntrada = [];
        camposDeNiveisDeEntrada = [];
        return;
    } else if(validaTituloNivel(camposDeNiveisParaValidar) === true){
        niveisDeEntrada = [];
        camposDeNiveisDeEntrada = [];
        return;
    } else if(validaPorcentagemNivel(camposDeNiveisParaValidar) === true){
        niveisDeEntrada = [];
        camposDeNiveisDeEntrada = [];
        return;
    } else if(validaImagemNivel(camposDeNiveisParaValidar) === true){
        niveisDeEntrada = [];
        camposDeNiveisDeEntrada = [];
        return;
    } else if(validaDescricaoNivel(camposDeNiveisParaValidar) === true){
        niveisDeEntrada = [];
        camposDeNiveisDeEntrada = [];
        return;
    }
    
    telaNiveis.classList.add('escondido');
    telaSucesso.classList.remove('escondido');

    niveisDoQuiz()
    finalizarQuiz()
}

avancar[2].addEventListener('click', avancaEtapaSucesso);