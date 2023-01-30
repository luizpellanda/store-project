function somaPrecoLivrosDisponiveis(livros) {
    return livros.reduce((soma, livro) => {
        return soma + livro.preco;
    }, 0)
}