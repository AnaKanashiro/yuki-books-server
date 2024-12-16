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

function modificaLivro(modificações, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificações}
    // livrosAtuais[indiceModificado] -> {id: "2", nome: "livro irado"}
    // modificações -> {nome: "livro mucho legal"}
    // se o campo nome já existir ele será alterado, se não ele será criado
    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json",JSON.stringify(livrosAtuais))
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro
};
