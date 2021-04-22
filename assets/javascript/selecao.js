function selecao(selecionado){

    const pai = selecionado.parentNode.parentNode;

    if(selecionado.classList.contains('visivel')) {
        selecionado.classList.remove('visivel');
        pai.children[1].classList.remove('escondido');
    }
    else {
        selecionado.classList.add('visivel'); 
        pai.children[1].classList.add('escondido');
    }
}
