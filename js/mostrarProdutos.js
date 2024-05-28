import { conexaoApi } from "./conexao.js";

const produto = document.querySelector("[data-produto]");

const cardProduto = (id, image, titulo, preco, descricao) => {
  const lista = document.createElement("li");
  lista.className = "produto__item";
  lista.innerHTML = `
    <img src="${image}" alt="" />
    <div class="produto__info">
      <h2 class="produto__titulo">${titulo}</h2>
      <div class="produto__close__info">
        <span class="produto__preco">${preco}</span>
        <span class="produto__close"></span>
      </div>
      <p class="produto__descricao">
      ${descricao}
      </p>
    </div>
    <button class="produto__btn">Deletar</button>
  `;
  const deletar = lista.querySelector(".produto__btn");
  deletar.addEventListener("click", () => conexaoApi.deletarProduto(id));

  return lista;
};

const deleta = async () => {
  const productsListApi = await conexaoApi.listaProdutos();
  produto.innerHTML='';
  productsListApi.forEach(element => produto.appendChild(cardProduto(element.id, element.image, element.titulo, element.preco)))
}

deleta()

const listaProdutos = async () => {
  const listaApi = await conexaoApi.listaProdutos();
  listaApi.forEach((element) =>
    produto.appendChild(
      cardProduto(
        element.id,
        element.image,
        element.titulo,
        element.preco,
        element.descricao
      )
    )
  );
};

listaProdutos();
