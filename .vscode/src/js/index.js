const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {
        removeSelecionarBotao();
        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        removeSelecionarPersonagem(personagemSelecionado, indice);

        
    }) 
});

function removeSelecionarPersonagem(personagemSelecionado, indice) {
    personagemSelecionado.classList.remove("selecionado");
    personagens[indice].classList.add("selecionado");
}

function removeSelecionarBotao() {
    const botaoSeleciodo = document.querySelector(".botao.selecionado");
    botaoSeleciodo.classList.remove("selecionado");
}