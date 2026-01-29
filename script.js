document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Mobile Menu --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Toggle Hamburger Animation
            const bars = document.querySelectorAll('.bar');
            if (hamburger.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.click(); // Trigger close
            }
        });
    });

    /* --- Cross-Fade Carousel Logic --- */
    const track = document.querySelector('.carousel-track');
    
    if (track) {
        const slides = Array.from(track.querySelectorAll('.carousel-slide'));
        let currentIndex = 0;

        const nextSlide = () => {
            // Remove active class from current
            slides[currentIndex].classList.remove('active');
            
            // Calculate next index
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            
            // Add active class to next
            slides[currentIndex].classList.add('active');
        };

        // Auto Play every 3 seconds
        setInterval(nextSlide, 3000);
    }
});