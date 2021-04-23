function quantidadeDePerguntas() {

    for (let i = 0; i < (dadosIniciais[2] - 2); i++){

        telaPerguntas.children[0].innerHTML += `
                    <div class="entrada-de-perguntas">
                        <span>
                            Pergunta ${i+3}
                            <ion-icon class="expandir-pergunta visivel" name="open-outline" onclick="selecao(this)"></ion-icon>
                        </span>
                        <div class="escondido">
                            <div class="caixa-perguntas">
                                <input type="text" required minlength="20" placeholder="Texto da pergunta">
                                <input type="text" required pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" placeholder="Cor de fundo da pergunta"/>
                            </div>
                            <span>
                                Resposta correta
                            </span>
                            <div class="resposta-correta">
                                <input type="text" placeholder="Resposta correta">
                                <input type="text" placeholder="URL da imagem">
                            </div>
                            <span>
                                Respostas incorretas
                            </span>
                            <div class="caixa-respostas-incorretas">
                                <div class="respostas-incorretas">
                                    <input type="text" placeholder="Resposta incorreta 1">
                                    <input type="text" placeholder="URL da imagem 1">
                                </div>
                                <div class="respostas-incorretas">
                                    <input type="text" placeholder="Resposta incorreta 2">
                                    <input type="text" placeholder="URL da imagem 2">
                                </div>
                                <div class="respostas-incorretas">
                                    <input type="text" placeholder="Resposta incorreta 3">
                                    <input type="text" placeholder="URL da imagem 3">
                                </div>
                            </div>
                        </div>                    
                    </div>`;

                    
    }
}