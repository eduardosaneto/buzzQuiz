function quantidadeDeNiveis() {

    for (let i = 0; i < (dadosIniciais[3] - 2); i++){
        telaNiveis.children[0].innerHTML += `
            <div class="entrada-de-niveis">
                <span>
                    Nivel ${i+3}
                    <ion-icon class="expandir-nivel visivel" name="open-outline" onclick="selecao(this)"></ion-icon>
                </span>
                <div class="caixa-niveis escondido">
                    <input type="text" placeholder="Título do nível">
                    <input type="text" placeholder="% de acerto mínima">
                    <input type="text" placeholder="URL da imagem do nível">
                    <input type="text" placeholder="Descrição do nível">
                </div>
            </div>`;
    }
}