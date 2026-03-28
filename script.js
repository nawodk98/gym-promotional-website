// Dark Mode / Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.textContent = '☀️';
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '🌙';
    }
});

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitBtn = document.querySelector('.submit_btn');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Please fill out all fields before submitting.');
            return;
        }

        alert('Form submitted successfully!');

        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent! ✓';
        submitBtn.style.backgroundColor = '#4CAF50';
        submitBtn.style.color = 'white';

        contactForm.reset();

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
        }, 3000);
    });
}