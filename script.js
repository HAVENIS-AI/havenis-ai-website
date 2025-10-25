// Language Toggle
let currentLang = 'de';

function setLang(lang) {
    currentLang = lang;
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (lang === 'de') {
        document.getElementById('lang-de')?.classList.add('active');
    } else {
        document.getElementById('lang-en')?.classList.add('active');
    }

    const elements = document.querySelectorAll('[data-de][data-en]');
    elements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = el.getAttribute(`data-${lang}`) || '';
        } else {
            el.textContent = el.getAttribute(`data-${lang}`) || '';
        }
    });

    localStorage.setItem('language', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'de';
    setLang(savedLang);

    // Setup language buttons
    document.getElementById('lang-de')?.addEventListener('click', () => setLang('de'));
    document.getElementById('lang-en')?.addEventListener('click', () => setLang('en'));
});

// Contact Form Handler
function sendMessage() {
    const name = document.getElementById('name')?.value?.trim() || '';
    const email = document.getElementById('email')?.value?.trim() || '';
    const message = document.getElementById('message')?.value?.trim() || '';

    if (!name || !email || !message) {
        alert(currentLang === 'de' ? 'Bitte füllen Sie alle Felder aus!' : 'Please fill all fields!');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(currentLang === 'de' ? 'Bitte geben Sie eine gültige Email ein!' : 'Please enter a valid email!');
        return false;
    }

    const subject = currentLang === 'de' ? 'HAVENIS Website Nachricht' : 'HAVENIS Website Message';
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:kontakt@havenis-ai.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    return false;
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log('🚀 HAVENIS AI Website ready!');
