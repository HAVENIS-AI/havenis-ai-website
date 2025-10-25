// Sprachen-Toggle
const deBtn = document.getElementById('lang-de');
const enBtn = document.getElementById('lang-en');
let currentLang = 'de';

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-de][data-en]');

    elements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = lang === 'de' ? el.getAttribute('data-de') : el.getAttribute('data-en');
        } else {
            el.textContent = lang === 'de' ? el.getAttribute('data-de') : el.getAttribute('data-en');
        }
    });

    // Button Status aktualisieren
    if (lang === 'de') {
        deBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        enBtn.classList.add('active');
        deBtn.classList.remove('active');
    }

    localStorage.setItem('language', lang);
}

deBtn.addEventListener('click', () => setLanguage('de'));
enBtn.addEventListener('click', () => setLanguage('en'));

// Sprache beim Laden wiederherstellen
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'de';
    setLanguage(savedLang);
});

// Smooth Scroll für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation Highlight beim Scrollen
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fade-in Animation beim Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.mission-card, .team-card, .feature-item, .tech-step').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Fade-in Animation Definition
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Contact Form
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert(currentLang === 'de' ? 'Bitte füllen Sie alle Felder aus' : 'Please fill all fields');
        return;
    }

    const subject = currentLang === 'de' ? 'Nachricht von HAVENIS Website' : 'Message from HAVENIS Website';
    const mailtoLink = `mailto:kontakt@havenis-ai.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(\`Name: \${name}\nEmail: \${email}\n\nNachricht:\n\${message}\`)}`;

    window.location.href = mailtoLink;

    // Clear Form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// PDF Export Funktion
function exportToPDF() {
    const content = document.body.innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HAVENIS AI Pitchdeck</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #00d4ff; }
                h2 { color: #1a1a1a; margin-top: 30px; }
                section { page-break-after: always; padding: 20px 0; }
                .btn { display: none; }
                .nav-container { display: none; }
                .footer { margin-top: 30px; text-align: center; font-size: 0.9em; }
            </style>
        </head>
        <body>
            <h1>🚀 HAVENIS AI</h1>
            <p><strong>Revolutionäre Wi-Fi Sensing Technologie für Vitalmonitoring</strong></p>

            <h2>Mission</h2>
            <p>Wir revolutionieren Wi-Fi Sensing für Vitalmonitoring mit Datenschutz an erster Stelle.</p>

            <h2>Technologie</h2>
            <p>
                <strong>Wie es funktioniert:</strong><br>
                1. Analyse von Wi-Fi Signalen<br>
                2. AI Processing mit ML-Algorithmen<br>
                3. Präzise Vital-Messungen
            </p>

            <h2>Features</h2>
            <ul>
                <li>Hochgenau: ±2% Messgenauigkeit</li>
                <li>Echtzeit: Live Vital Monitoring</li>
                <li>Skalierbar: Für 1-1000 Personen</li>
                <li>Sicher: End-to-End verschlüsselt</li>
            </ul>

            <h2>Team</h2>
            <p>
                Unser Team besteht aus Experten in:<br>
                • KI und Machine Learning<br>
                • Telekommunikation und Wi-Fi<br>
                • Healthcare und Medizin<br>
                • Datenschutz und Compliance<br>
                • Business Development
            </p>

            <h2>Kontakt</h2>
            <p>
                Email: kontakt@havenis-ai.de<br>
                Interessiert an einer Zusammenarbeit? Kontaktieren Sie uns!
            </p>

            <hr>
            <p style="text-align: center; margin-top: 40px;">
                © 2025 HAVENIS AI | Revolutionäre Wi-Fi Sensing Technologie
            </p>
        </body>
        </html>
    `);

    printWindow.document.close();

    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// Menu Toggle für Mobile
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }
    });
}

// Scroll zu Top Button
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        if (!btn) {
            const scrollBtn = document.createElement('button');
            scrollBtn.id = 'scroll-to-top';
            scrollBtn.innerHTML = '↑';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #00d4ff;
                color: #1a1a1a;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                font-size: 1.5em;
                cursor: pointer;
                z-index: 999;
                box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
                transition: all 0.3s;
            `;
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
            scrollBtn.addEventListener('mouseover', () => {
                scrollBtn.style.background = '#0088cc';
            });
            scrollBtn.addEventListener('mouseout', () => {
                scrollBtn.style.background = '#00d4ff';
            });
            document.body.appendChild(scrollBtn);
        }
    } else {
        const btn = document.getElementById('scroll-to-top');
        if (btn) btn.remove();
    }
});

// Analytics Log
console.log('🚀 HAVENIS AI Website loaded successfully!');
console.log('Current Language:', currentLang);
