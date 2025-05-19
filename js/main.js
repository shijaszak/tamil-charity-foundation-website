document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('nav button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            mobileMenu?.classList.toggle('active');
        });
    }

    // Tamil Symbols Animation
    const symbolsContainer = document.querySelector('.tamil-symbols');
    if (symbolsContainer) {
        const tamilSymbols = ['௧', '௨', '௩', '௪', '௫'];
        
        // Create floating symbols
        tamilSymbols.forEach((symbol, index) => {
            const symbolElement = document.createElement('div');
            symbolElement.className = 'symbol';
            symbolElement.textContent = symbol;
            symbolElement.style.top = `${Math.random() * 80 + 10}%`;
            symbolElement.style.left = `${Math.random() * 80 + 10}%`;
            symbolElement.style.animationDelay = `${index * 0.5}s`;
            symbolsContainer.appendChild(symbolElement);
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Hero Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Initialize slider
    if (slides.length > 0) {
        showSlide(0);
        setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    }

    // WhatsApp Button Animation
    const whatsappBtn = document.querySelector('.whatsapp-bounce');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/918004258622', '_blank');
        });
    }

    // Language switcher
    const tamilBtn = document.querySelector('button.text-tamil-gold');
    const englishBtn = document.querySelector('button.hover\\:text-tamil-turmeric');
    
    if (tamilBtn && englishBtn) {
        [tamilBtn, englishBtn].forEach(btn => {
            btn.addEventListener('click', function() {
                tamilBtn.classList.toggle('text-tamil-gold');
                englishBtn.classList.toggle('text-tamil-gold');
                // Add language switching logic here
            });
        });
    }

    // Add loading spinner when clicking on action buttons
    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<div class="loading-spinner"></div>';
            
            // Simulate loading (remove in production and replace with actual action)
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    });
});
