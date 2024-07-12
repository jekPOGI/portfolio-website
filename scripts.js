const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    function smoothScrollToTarget(targetId) {
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, 
                behavior: 'smooth'
            });

            navLinks.forEach(link => link.classList.remove('active'));

            document.querySelector(`nav ul li a[href="#${targetId}"]`).classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollToTarget(targetId);
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav')) {
            document.getElementById('nav-toggle').checked = false;
        }
    });

    window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 50;

        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});


document.querySelector('.toggle-button').addEventListener('click', function() {
    document.querySelector('.navbar-links').classList.toggle('active');
});

document.querySelectorAll('.navbar-links a').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.navbar-links').classList.remove('active');
    });
});
