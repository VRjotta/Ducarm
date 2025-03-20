let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adiciona um produto ao carrinho
function adicionarAoCarrinho(nome, preco, cor, tamanho) {
    let item = { nome, preco, cor, tamanho };
    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Atualiza a exibição do carrinho
function atualizarCarrinho() {
    let carrinhoContainer = document.querySelector(".carrinho-itens");
    carrinhoContainer.innerHTML = "";
    
    carrinho.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("carrinho-item");
        div.innerHTML = `
            <p>${item.nome} - ${item.cor} - ${item.tamanho} - R$${item.preco.toFixed(2)}</p>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoContainer.appendChild(div);
    });
}

// Remove um item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Evento de adicionar ao carrinho nos botões
document.querySelectorAll(".btn-add-carrinho").forEach(botao => {
    botao.addEventListener("click", function() {
        let nome = this.getAttribute("data-nome");
        let preco = parseFloat(this.getAttribute("data-preco"));
        let cor = document.querySelector("#selecao-cor").value;
        let tamanho = document.querySelector("#selecao-tamanho").value;
        adicionarAoCarrinho(nome, preco, cor, tamanho);
    });
});

// Carregar carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarCarrinho);

// Rolagem suave para o topo
document.querySelector(".topo").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
