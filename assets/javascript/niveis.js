const niveis = [];

function niveisDoQuiz() {
        
    caixaNiveis =  document.querySelectorAll('.caixa-niveis');

    for(let i = 0; i < dadosIniciais[3]; i++){

        const tituloNivel = caixaNiveis[i].children[0].value;
        const porcentagemMinima = caixaNiveis[i].children[1].value;
        const imagemNivel = caixaNiveis[i].children[2].value;
        const descricaoNivel = caixaNiveis[i].children[3].value;

        const nivel = 
        {
            title: tituloNivel,
            image: imagemNivel,
            text: descricaoNivel,
            minValue: porcentagemMinima
        };

        niveis.push(nivel);
    }

    return niveis;
}