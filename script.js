document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});

window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('theme') === 'dark-mode') {
        document.body.classList.add('dark-mode');
    }
});
AOS.init();

