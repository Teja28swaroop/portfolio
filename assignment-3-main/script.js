function toggleMenu(icon) {
    const nav = icon.nextElementSibling.querySelector('ul');
    nav.classList.toggle('showing');
    icon.classList.toggle('change');
}

// Add animation to menu icon (optional)
document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('change');
});
