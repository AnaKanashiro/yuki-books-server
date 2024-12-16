const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
//   [{id: 2, nome: "livro irado"}]
  return livroFiltrado;
}

function insereLivro(LivroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaDeLivros = [...livros, LivroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro
};
