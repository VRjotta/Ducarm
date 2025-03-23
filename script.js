let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adiciona um produto ao carrinho
function adicionarAoCarrinhoProduto(nome, preco, cor, tamanho) {
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
        adicionarAoCarrinhoProduto(nome, preco, cor, tamanho);
    });
});

// Carregar carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarCarrinho);

// Rolagem suave para o topo
document.querySelector(".topo").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Função de adicionar ao carrinho (alerta)
function adicionarAoCarrinhoAlerta() {
    let cor = document.getElementById("cor").value;
    let tamanho = document.getElementById("tamanho").value;

    alert(`Produto adicionado ao carrinho:\nCamiseta UFO\nCor: ${cor}\nTamanho: ${tamanho}`);
}

document.addEventListener("DOMContentLoaded", function () {
    const selectCor = document.getElementById("cor");
    const imgProduto = document.getElementById("produto-img");

    // Mapeamento de cores para imagens correspondentes
    const imagens = {
        "bege": "img/produto_bege.png",
        "off-white": "img/produto_off-white.png",
        "preto": "img/produto_preto.png",
        "verde-musgo": "img/produto_verde-musgo.png"
    };

    selectCor.addEventListener("change", function () {
        const corSelecionada = selectCor.value;
        imgProduto.src = imagens[corSelecionada] || "img/produto_bege.png"; // Imagem padrão se não encontrar
    });
});
