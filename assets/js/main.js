// Optional: Add this if you want animated counting
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
});


// In your main.js file
// layout-loader.js
// layout-loader.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Load Header
//     fetch('layouts/header.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.text();
//         })
//         .then(data => {
//             document.getElementById('header-placeholder').innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Error loading header:', error);
//             document.getElementById('header-placeholder').innerHTML = '<p>Error loading header</p>';
//         });

//     // Load Footer
//     fetch('layouts/footer.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.text();
//         })
//         .then(data => {
//             document.getElementById('footer-placeholder').innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Error loading footer:', error);
//             document.getElementById('footer-placeholder').innerHTML = '<p>Error loading footer</p>';
//         });
// });

document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('header');
    const nav = document.querySelector('header nav');
    if (header && nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.85)';
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href === '#') return; // Skip empty hash links
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Services grid layout functionality
    const serviceCards = document.querySelectorAll('.service-card');
    function updateServiceCardLayout() {
        const windowWidth = window.innerWidth;
        serviceCards.forEach(card => {
            if (windowWidth > 1200) {
                card.style.flex = '0 0 calc(25% - 25px)';
            } else if (windowWidth > 768) {
                card.style.flex = '0 0 calc(33.333% - 25px)';
            } else if (windowWidth > 576) {
                card.style.flex = '0 0 calc(50% - 25px)';
            } else {
                card.style.flex = '0 0 100%';
            }
        });
    }

    // Initial layout setup
    updateServiceCardLayout();

    // Update layout on window resize
    window.addEventListener('resize', updateServiceCardLayout);
});