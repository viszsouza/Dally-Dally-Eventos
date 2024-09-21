// HAMBURGUER
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list")

navlist.addEventListener("click", () => nav.classList.toggle("active"));
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// CARROSSEL
// Index do item do meio atual
let currentIndex = window.innerWidth <= 750 ? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
    // Se for o da esquerda diminui o valor, se não, aumenta
    if (window.innerWidth >= 751) {
        currentIndex += e.id === 'anterior' ? -3 : 3;
    } else {
        currentIndex += e.id === 'anterior' ? -1 : 1;
    }

    const listaDeCards = document.querySelectorAll('.depoimento');

    // Garantindo que o index não saia do range válido
    // OBS: Com telas maiores, sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
    if (window.innerWidth <= 750) {
        if (currentIndex < 0) {
            currentIndex = listaDeCards.length - 1;
        } else if (currentIndex > listaDeCards.length - 1) {
            currentIndex = 0;
        }
    } else {
        if (currentIndex < 1) {
            currentIndex = listaDeCards.length - 2;
        } else if (currentIndex > listaDeCards.length - 2) {
            currentIndex = 1;
        }
    }

    // Movendo os cards para que o card do index esteja no meio
    listaDeCards[currentIndex].scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth',
    });
}));

// Carrosel inicio
// Arrays de URLs das imagens de background para cada tamanho de tela
const desktopBackgrounds = [
    '/images/FotoInicioPC1.jpg',
    '/images/FotoInicioPC2.jpg',
    '/images/FotoInicioPC3.jpg'
];

const tabletBackgrounds = [
    '/images/FotoInicioTablet1.jpg',
    '/images/FotoInicioTablet2.png',
    '/images/FotoInicioTablet3.png'
];

const mobileBackgrounds = [
    '/images/FotoInicioSmart1.jpg',
    '/images/FotoInicioSmart2.png',
    '/images/FotoInicioSmart3.png'
];

let currentIndexInicio = 0;
const backgroundContainer = document.querySelector('.inicio');

// Função para verificar o tamanho da janela e escolher o conjunto de imagens correto
function getBackgroundImages() {
    const width = window.innerWidth;

    if (width > 1024) {
        return desktopBackgrounds; // Para telas maiores que 1024px (desktop)
    } else if (width >= 751 && width <= 1024) {
        return tabletBackgrounds;  // Para telas entre 768px e 1024px (tablet)
    } else {
        return mobileBackgrounds;  // Para telas menores que 768px (mobile)
    }
}

// Função para alterar o background-image a cada 3 segundos
function changeBackground() {
    const images = getBackgroundImages(); // Obtém o conjunto de imagens de acordo com o tamanho da tela

    currentIndexInicio = (currentIndexInicio + 1) % images.length; // Altera o índice e faz o loop

    // Atualiza o background-image do container
    backgroundContainer.style.backgroundImage = `url(${images[currentIndexInicio]})`;
}

// Define o intervalo para trocar o background a cada 3 segundos
setInterval(changeBackground, 3000);

// Inicializa com o primeiro background
changeBackground();