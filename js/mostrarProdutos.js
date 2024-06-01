import { conexaoApi } from "./conexao.js";

const produto = document.querySelector("[data-produto]");

const cardProduto = ( image, titulo, preco, descricao) => {
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

  return lista;
};


const listaProdutos = async () => {
  const listaApi = await conexaoApi.listaProdutos();
  listaApi.forEach((element) =>
    produto.appendChild(
      cardProduto(
        element.image,
        element.titulo,
        element.preco,
        element.descricao
      )
    )
  );
};

listaProdutos();
