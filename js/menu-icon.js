// Seleciona o checkbox do menu toggle
const menuToggle = document.getElementById('menu-toggle');

// Seleciona o ícone do menu
const menuIcon = document.querySelector('.menu-icon');

// Adiciona um evento de clique ao ícone do menu
menuIcon.addEventListener('click', function() {
    // Inverte o estado do checkbox ao clicar no ícone do menu
    menuToggle.checked = !menuToggle.checked;
});
