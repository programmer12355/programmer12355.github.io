// Toggle sidebar na mobilních zařízeních
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

// Zavření menu po kliknutí na odkaz (mobilní)
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('hidden');
        }
    });
});