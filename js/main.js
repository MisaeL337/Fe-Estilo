// Executa o código quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.main-header');
    const scrollTopButton = document.getElementById('scrollTopBtn');

    // --- EFEITO NO CABEÇALHO AO ROLAR ---
    // Adiciona uma classe ao cabeçalho quando a página é rolada para baixo
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    // --- BOTÃO "VOLTAR AO TOPO" ---
    // Mostra ou esconde o botão dependendo da posição da rolagem
    const handleScrollTopButton = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    };

    // Função para rolar suavemente para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Adiciona os event listeners de rolagem
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        handleScrollTopButton();
    });

    // Adiciona o event listener de clique no botão
    scrollTopButton.addEventListener('click', scrollToTop);

    // --- ANIMAÇÕES DE FADE-IN AO ROLAR ---
    // Usa a Intersection Observer API para animar elementos quando eles entram na tela
    const animatedSections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: para de observar o elemento depois que ele já foi animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

});