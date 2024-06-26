import { url } from "./url.js";

const listaProdutos = async () => {
  const conexao = await fetch(url);
  const apiConvertido = await conexao.json();

  return apiConvertido;
};

// Função Para cria novos produtos
const criaProduto = async (image, titulo, preco, descricao) => {
  const conexaoCriaProduto = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      titulo: titulo,
      preco: preco,
      descricao: descricao,
    }),
  });

  const conexaoCriaProdutoConvertida = await conexaoCriaProduto.json();

  return conexaoCriaProdutoConvertida;
};


export const conexaoApi = {
  listaProdutos,
  criaProduto,
  // deletarProduto,
};
