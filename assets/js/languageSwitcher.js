document.addEventListener('DOMContentLoaded', function () {
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.visibility = 'visible';
                console.log('Element visible:', entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '50px' });

    // Apply stagger effect with different timing
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        animateOnScroll.observe(card);
    });

    document.querySelectorAll('.department').forEach((dept, index) => {
        dept.style.opacity = '1';
        dept.style.transform = 'translateY(0) scale(1)';
        dept.style.transitionDelay = `${index * 0.1}s`;
        if (animateOnScroll) {
            animateOnScroll.observe(dept);
        }
        console.log('Department card initialized:', dept);
    });
});