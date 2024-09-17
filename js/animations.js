// Coletando o observador da página
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting === true){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

// Selecionando os elementos com a classe ".hidden"
const elements = document.querySelectorAll('.hidden')

// Selecionando 1 arquivos por vez da classe ".hidden"
elements.forEach( (element) => myObserver.observe(element))