document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.clients-slider');
    const track = document.querySelector('.clients-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const logos = document.querySelectorAll('.client-logo');
    
    let currentIndex = 0;
    let slidesToShow = getSlidesToShow();
    
    // Function to determine slides to show based on screen width
    function getSlidesToShow() {
        if (window.innerWidth > 1200) return 5;
        if (window.innerWidth > 991) return 4;
        if (window.innerWidth > 768) return 3;
        if (window.innerWidth > 576) return 2;
        return 1;
    }
    
    // Update slider position
    function updateSlider() {
        const slideWidth = slider.clientWidth / slidesToShow;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    
    // Next slide
    function nextSlide() {
        const maxIndex = logos.length - slidesToShow;
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        const maxIndex = logos.length - slidesToShow;
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateSlider();
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        }
        if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    }
    
    // Responsive handling
    window.addEventListener('resize', () => {
        const newSlidesToShow = getSlidesToShow();
        if (newSlidesToShow !== slidesToShow) {
            slidesToShow = newSlidesToShow;
            currentIndex = 0;
            updateSlider();
        }
    });
    
    // Auto slide
    const autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    // Animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    logos.forEach(logo => observer.observe(logo));
    
    // Initial setup
    updateSlider();
});