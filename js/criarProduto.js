import { conexaoApi } from "./conexao.js";

const form = document.querySelector("[data-form]");

const criaProduto = async e => {
  e.preventDefault()

  const image = document.querySelector("[data-image]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const preco = document.querySelector("[data-preco]").value;
  const descricao = document.querySelector("[data-descricao]").value;

  await conexaoApi.criaProduto(image, titulo, preco, descricao)

  // window.location.href = "../pages/envio-sucesso.html"
};

form.addEventListener("submit", e => criaProduto(e))
