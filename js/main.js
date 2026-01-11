// ============================================
// MAIN JAVASCRIPT - SRI SHAKTI ERECTORS
// Core functionality for the website
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // HERO BACKGROUND CAROUSEL
  // ============================================
  const heroSlides = document.querySelectorAll('.hero-bg-slide');
  const heroNextBtn = document.querySelector('.hero-carousel-next');
  let currentSlide = 0;
  let autoRotateInterval;

  if (heroSlides.length > 0) {
    // Function to show specific slide
    const showSlide = (index) => {
      heroSlides.forEach(slide => slide.classList.remove('active'));
      heroSlides[index].classList.add('active');
    };

    // Function to go to next slide
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      showSlide(currentSlide);
    };

    // Auto-rotate every 5 seconds
    const startAutoRotate = () => {
      autoRotateInterval = setInterval(nextSlide, 5000);
    };

    // Reset auto-rotate timer
    const resetAutoRotate = () => {
      clearInterval(autoRotateInterval);
      startAutoRotate();
    };

    // Next button click handler
    if (heroNextBtn) {
      heroNextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoRotate();
      });
    }

    // Start auto-rotation
    startAutoRotate();
  }

  // ============================================
  // MOBILE NAVIGATION TOGGLE
  // ============================================
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ============================================
  // ACTIVE NAVIGATION HIGHLIGHTING
  // ============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navMenuLinks = document.querySelectorAll('.nav-menu a');

  navMenuLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ============================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // ============================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#"
      if (targetId === '#') {
        e.preventDefault();
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================
  const backToTopButton = document.querySelector('.back-to-top');

  if (backToTopButton) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    backToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.card, .service-card, .stat-item, .client-logo');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
  });

  // ============================================
  // STATS COUNTER ANIMATION
  // ============================================
  const statNumbers = document.querySelectorAll('.stat-number');

  if (statNumbers.length > 0) {
    const animateCounter = (element) => {
      const targetText = element.getAttribute('data-target');
      const hasPlus = targetText.includes('+');
      const target = parseInt(targetText);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target + (hasPlus ? '+' : '');
        }
      };

      updateCounter();
    };

    const statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
      statsObserver.observe(stat);
    });
  }

  // ============================================
  // LAZY LOADING IMAGES
  // ============================================
  const lazyImages = document.querySelectorAll('img[data-src]');

  if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // TESTIMONIALS CAROUSEL
  // ============================================
  const testimonialsCarousel = document.querySelector('.testimonials-carousel');

  if (testimonialsCarousel) {
    const track = testimonialsCarousel.querySelector('.testimonials-track');
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const prevButton = testimonialsCarousel.querySelector('.carousel-prev');
    const nextButton = testimonialsCarousel.querySelector('.carousel-next');

    let currentIndex = 0;

    const showTestimonial = (index) => {
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    };

    const nextTestimonial = () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showTestimonial(currentIndex);
    };

    const prevTestimonial = () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showTestimonial(currentIndex);
    };

    if (nextButton) {
      nextButton.addEventListener('click', nextTestimonial);
    }

    if (prevButton) {
      prevButton.addEventListener('click', prevTestimonial);
    }

    // Initialize first testimonial
    showTestimonial(currentIndex);
  }

  // ============================================
  // PREVENT EMPTY LINK CLICKS
  // ============================================
  const emptyLinks = document.querySelectorAll('a[href="#"]');
  emptyLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  // ============================================
  // PROJECT PAGINATION
  // ============================================
  const projectCards = document.querySelectorAll('.project-card');
  const loadMoreBtn = document.getElementById('load-more-btn');

  if (projectCards.length > 0 && loadMoreBtn) {
    const projectsPerPage = 6;
    let currentlyShown = 6;

    // Function to show more projects
    const showMoreProjects = () => {
      const hiddenProjects = Array.from(projectCards).filter(card => {
        return card.style.display === 'none';
      });

      // Show next batch of projects
      for (let i = 0; i < projectsPerPage && i < hiddenProjects.length; i++) {
        hiddenProjects[i].style.display = '';
        // Add fade-in animation
        hiddenProjects[i].style.opacity = '0';
        setTimeout(() => {
          hiddenProjects[i].classList.add('fade-in');
        }, i * 100);
      }

      currentlyShown += projectsPerPage;

      // Hide button if all projects are shown
      if (currentlyShown >= projectCards.length) {
        loadMoreBtn.style.display = 'none';
      }
    };

    // Load more button click handler
    loadMoreBtn.addEventListener('click', showMoreProjects);

    // Hide button initially if all projects fit in first page
    if (projectCards.length <= projectsPerPage) {
      loadMoreBtn.style.display = 'none';
    }
  }

});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
