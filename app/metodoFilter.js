const bannerCategorias = document.getElementById('nav-categorias');

bannerCategorias.addEventListener('click', filtrarLivros)

function filtrarLivros(evento) {
    console.log(evento.target.value);
    let livrosFiltrados = livros.filter(livro => {
        return livro.categoria == evento.target.value;
    })
    exibirOsLivrosNaTela(livrosFiltrados);
}