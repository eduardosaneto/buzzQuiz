let caixaNiveis;
let niveisDeEntrada = [];
let camposDeNiveisDeEntrada = [];
let camposDeNiveisParaValidar = camposNiveisVazios();

function camposNiveisVazios(){

    caixaNiveis =  document.querySelectorAll('.caixa-niveis');

    for(let i = 0; i < caixaNiveis.length; i++){

        camposDeNiveisDeEntrada = [];

        const tituloNivel = caixaNiveis[i].children[0].value;
        const porcentagemMinima = caixaNiveis[i].children[1].value;
        const imagemNivel = caixaNiveis[i].children[2].value;
        const descricaoNivel = caixaNiveis[i].children[3].value;

        if(tituloNivel === "" || porcentagemMinima === "" || imagemNivel === "" || descricaoNivel === ""){
            return true;
        }

        camposDeNiveisDeEntrada.push(tituloNivel, porcentagemMinima, imagemNivel, descricaoNivel);
        niveisDeEntrada.push(camposDeNiveisDeEntrada);

    }
    return niveisDeEntrada;
}

function validaTituloNivel(elemento){

    for(let i = 0; i < niveisDeEntrada.length; i++) {
        if(niveisDeEntrada[i][0].length < 10){
            alert("Por favor, insira títulos para os níveis que contenham pelo menos 10 caracteres");
            return true;
        } 
    }
}

function validaPorcentagemNivel(elemento) {
    for(let i = 1; i < niveisDeEntrada.length; i++) {
        if(niveisDeEntrada[0][1] !== "0"){
            alert("A porcentagem mínima do primeiro nível deve ser 0!");
            return true;
        } else if(niveisDeEntrada[i][1] <= niveisDeEntrada[i-1][1]) {
            alert("A porcentagem do próximo nível deve sempre ser maior que a do nível anterior");
            return true;
        } else if(niveisDeEntrada[i][1] < 0 && niveisDeEntrada[i][1] > 100){
            alert("Por favor, insira números entre 0 e 100");
            return true;
        } 
    }
}

function validaImagemNivel(elemento) {

    for(let i = 0; i < niveisDeEntrada.length; i++){
        if(!niveisDeEntrada[i][2].match(regexURL)){
            alert("Por favor, insira URLs validas para as imagens");
            return true;
        }
    }
}

function validaDescricaoNivel(elemento){

    for(let i = 0; i < niveisDeEntrada.length; i++) {
        if(niveisDeEntrada[i][3].length < 30){
            alert("Por favor, insira uma descrição para os níveis que contenham pelo menos 30 caracteres");
            return true;
        } 
    }
}

