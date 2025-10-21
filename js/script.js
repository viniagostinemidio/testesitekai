document.addEventListener("DOMContentLoaded", () => {
    // Saudação
    const btn = document.getElementById("btnSaudacao");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Seja bem-vindo ao site do Kaikan!");
        });
    }

    // Menu hambúrguer
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const menuPrincipal = document.getElementById('menu-principal');

    if (menuHamburguer && menuPrincipal) {
        menuHamburguer.addEventListener('click', () => {
            menuPrincipal.classList.toggle('menu-aberto');
            menuHamburguer.classList.toggle('aberto'); // para animação do botão, opcional
        });

        // Fecha o menu ao clicar em um link
        const linksDoMenu = menuPrincipal.querySelectorAll('a');
        linksDoMenu.forEach(link => {
            link.addEventListener('click', () => {
                menuPrincipal.classList.remove('menu-aberto');
                menuHamburguer.classList.remove('aberto');
            });
        });
    }
});
