const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados);
    
    if (categoria == 'disponivel') {
        var valorTotal = somaPrecoLivrosDisponiveis(livrosFiltrados).toFixed(2);
        exibirValorTotalDosLivrosNaTela(valorTotal);
        console.log(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
    valorTotalDosLivrosDisponiveis.innerHTML = 
        `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
            </div>
        `
}