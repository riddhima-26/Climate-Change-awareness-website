// Counter Animation
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Initialize counters when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const pledgesCount = document.getElementById('pledges-count');
            const treesCount = document.getElementById('trees-count');
            const carbonCount = document.getElementById('carbon-count');
            
            animateCounter(pledgesCount, 1500, 2000); // 1,500 pledges
            animateCounter(treesCount, 10000, 2000); // 10,000 trees
            animateCounter(carbonCount, 5000, 2000); // 5,000 tons
            
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.counter-section'));

// Pledge Form Handling
const pledgeForm = document.getElementById('pledge-form');
pledgeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(pledgeForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const commitment = formData.get('commitment');
    
    // Show success message
    alert('Thank you for taking the pledge! Together we can make a difference.');
    pledgeForm.reset();
    
    // Update pledge counter
    const pledgesCount = document.getElementById('pledges-count');
    pledgesCount.textContent = parseInt(pledgesCount.textContent) + 1;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Handling
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.impact-card, .action-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    const navItems = document.querySelector('.nav-items');
    navItems.style.display = navItems.style.display === 'flex' ? 'none' : 'flex';
});

// Add dynamic background images to impact cards
const impactCards = document.querySelectorAll('.impact-card');
impactCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
