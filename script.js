// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== NAVIGATION BAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        nav.style.background = 'rgba(250, 250, 250, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(74, 144, 164, 0.1)';
    } else {
        nav.style.background = 'rgba(250, 250, 250, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .education-item, .certification-item, .ai-tool');
    
    animateElements.forEach(element => {
        element.classList.add('scroll-animate');
        observer.observe(element);
    });
});

// ===== LANGUAGE PROGRESS BARS ANIMATION =====
const animateProgressBars = function() {
    const progressBars = document.querySelectorAll('.language-progress');
    const languagesSection = document.querySelector('.languages');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 300);
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (languagesSection) {
        observer.observe(languagesSection);
    }
};

// ===== TYPING EFFECT FOR HERO TITLE =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== PARALLAX EFFECT FOR HERO SECTION =====
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== SMOOTH REVEAL ANIMATIONS =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-animate');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

// ===== CONTACT FORM HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        method.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== SKILL CARDS INTERACTION =====
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-category');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = '0 20px 40px rgba(74, 144, 164, 0.3)';
            
            // Slightly rotate the icon
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// ===== TIMELINE ANIMATION =====
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(item);
    });
}

// ===== SCROLL TO TOP FUNCTIONALITY =====
function addScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4A90A4 0%, #7BA7BC 100%);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(74, 144, 164, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// ===== PERFORMANCE OPTIMIZATION =====
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

// ===== INITIALIZE ALL FUNCTIONS =====
document.addEventListener('DOMContentLoaded', function() {
    animateProgressBars();
    animateTimeline();
    addScrollToTop();
    animateAITools();
    animateCounters();
    
    // Add scroll event listener with debouncing
    window.addEventListener('scroll', debounce(revealOnScroll, 10));
    
    // Preload images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imageLoader = new Image();
        imageLoader.src = img.src;
    });
    
    // Add loading class to body for initial animations
    document.body.classList.add('loaded');
});

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (!navToggle) return;
    
    // Toggle functionality
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('mobile-open');
        this.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('mobile-open');
            navToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('mobile-open');
            navToggle.classList.remove('active');
        }
    });
}

// ===== COPY EMAIL FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = this.getAttribute('href').replace('mailto:', '');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email copied to clipboard!');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('Email copied to clipboard!');
            }
        });
    });
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #4A90A4 0%, #7BA7BC 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(74, 144, 164, 0.3);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== AI TOOLS ANIMATION =====
function animateAITools() {
    const aiTools = document.querySelectorAll('.ai-tool');
    const aiSection = document.querySelector('.ai-highlight');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aiTools.forEach((tool, index) => {
                    setTimeout(() => {
                        tool.style.opacity = '1';
                        tool.style.transform = 'translateY(0) scale(1)';
                    }, index * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (aiSection) {
        // Set initial state
        aiTools.forEach(tool => {
            tool.style.opacity = '0';
            tool.style.transform = 'translateY(20px) scale(0.8)';
            tool.style.transition = 'all 0.6s ease';
        });
        
        observer.observe(aiSection);
    }
}

// ===== STATS COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const start = 0;
                    const increment = target / (duration / 16);
                    let current = start;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current).toLocaleString();
                    }, 16);
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ===== ENHANCED LOADING ANIMATIONS =====
window.addEventListener('load', function() {
    // Add staggered animation to hero elements
    const heroElements = document.querySelectorAll('.fade-in-up');
    
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Trigger language progress bars animation after page load
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.language-progress');
        progressBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }, 1000);
});

// Initialize mobile menu
initMobileMenu(); 