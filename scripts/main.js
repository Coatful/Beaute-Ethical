document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Cart dropdown functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.querySelector('.cart-dropdown');

    if (cartIcon && cartDropdown) {
        cartIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            cartDropdown.classList.toggle('active');

            // Add animation effect
            if (cartDropdown.classList.contains('active')) {
                const icon = cartIcon.querySelector('svg');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(-10deg)';
                    setTimeout(() => {
                        icon.style.transform = 'scale(1)';
                    }, 300);
                }
            }
        });

        // Close cart dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
                cartDropdown.classList.remove('active');
            }
        });

        // Prevent event bubbling
        cartDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // Close mobile nav if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        document.body.classList.remove('no-scroll');
                    }
                }
            }
        });
    });

    // Navbar shadow on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');

        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        }
    });

    // Collapsible product lines on mobile
    const lineTitles = document.querySelectorAll('.line-title');

    lineTitles.forEach(title => {
        title.addEventListener('click', function() {
            const productGrid = this.nextElementSibling;

            if (window.innerWidth < 768 && productGrid.classList.contains('product-grid')) {
                if (productGrid.style.maxHeight) {
                    productGrid.style.maxHeight = null;
                    this.classList.remove('collapsed');
                } else {
                    productGrid.style.maxHeight = productGrid.scrollHeight + 'px';
                    this.classList.add('collapsed');
                }
            }
        });
    });

    // Carousel arrows & scroll wheel support
    const carouselTrack = document.getElementById('carousel-track');
    const btnPrev = document.querySelector('.carousel-btn.prev');
    const btnNext = document.querySelector('.carousel-btn.next');

    if (carouselTrack) {
        // Arrow click: scroll faster
        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                carouselTrack.scrollBy({ left: -600, behavior: 'smooth' });
            });
        }

        if (btnNext) {
            btnNext.addEventListener('click', () => {
                carouselTrack.scrollBy({ left: 600, behavior: 'smooth' });
            });
        }

        // Scroll with mouse wheel (horizontal)
        carouselTrack.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                carouselTrack.scrollBy({
                    left: e.deltaY * 2, // Adjust multiplier for speed
                    behavior: 'smooth'
                });
            }
        }, { passive: false });
    }

    // Optional: auto image labeling logic (disabled by default)
    /*
    function applyImageLabels() {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            let node = el.previousSibling;
            while (node && node.nodeType !== 8) {
                node = node.previousSibling;
            }
            if (node && node.nodeType === 8 && node.textContent.includes('IMAGE:')) {
                const imageName = node.textContent.split('IMAGE:')[1].trim();
                console.log(`Found image label: ${imageName} for element:`, el);
            }
        });
    }
    // applyImageLabels();
    */
});
