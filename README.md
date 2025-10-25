# 🚀 HAVENIS AI - Professional Landing Page

Eine moderne, responsive Landing Page für HAVENIS AI mit High-Tech Design und vollständiger Interaktivität.

## 📋 Features

### ✨ Frontend Features
- **Responsive Design** - Funktioniert auf allen Geräten (Desktop, Tablet, Mobil)
- **Multilingual** - Unterstützung für Deutsch und English mit lokalem Speicher
- **High-Tech Styling** - Cyan/Graphit/Weiß Color Scheme mit Gradients und Animationen
- **Smooth Scroll** - Elegante Navigation zwischen Sektionen
- **Fade-in Animationen** - Elemente erscheinen beim Scrollen
- **PDF Export** - Pitchdeck als PDF exportierbar

### 🎯 Sektionen
1. **Hero Section** - Hauptwerbung mit Call-to-Action Buttons
2. **Mission** - Kernwerte (Gesundheit, Datenschutz, Innovation)
3. **Technologie** - 3-Schritte Prozess: Signale → AI → Messungen
4. **Team** - 6 Teamkarten mit Rollen und Beschreibungen
5. **Kontakt** - Kontaktformular mit Email-Integration
6. **Footer** - Copyright und Informationen

### 🔧 Technische Features
- Sticky Navigation mit aktivem Link-Highlighting
- Scroll-to-Top Button
- Mobile-responsive Navigation Toggle
- Language Toggle mit localStorage
- Smooth Scrolling
- Intersection Observer für Lazy Loading von Animationen
- Vercel-ready Deployment Configuration

## 📁 Dateistruktur

```
HAVENIS-AI-Pitch-Landing-Page/
├── index.html          # Hauptseite mit allen Sektionen
├── style.css           # High-Tech Design Stylesheet
├── script.js           # Interaktivität & Animationen
├── vercel.json         # Vercel Deployment Config
├── .gitignore          # Git Ignore File
└── README.md           # Diese Datei
```

### index.html
Vollständige HTML-Struktur mit:
- Semantic HTML5 Tags
- Meta Tags für SEO
- Multilingual Datenattribute (data-de/data-en)
- Alle Sektionen mit BEM-Klassen

### style.css
Professional CSS mit:
- CSS Variables für Farben und Übergänge
- Mobile-first Responsive Design
- Smooth Transitions und Animationen
- Flexbox und CSS Grid Layouts
- Cyan (#00d4ff) Primary Color
- Graphit (#1a1a1a) Secondary Color

### script.js
Interaktives JavaScript mit:
- Sprachen-Toggle (DE/EN) mit localStorage
- Smooth Scrolling Navigation
- Fade-in Animationen beim Scroll
- PDF Export Funktion
- Email Integration im Kontaktformular
- Mobile Menu Toggle
- Scroll-to-Top Button

### vercel.json
Vercel Deployment Configuration mit:
- Static File Serving
- Caching Headers
- Security Headers (X-Frame-Options, etc.)
- Environment Variables

## 🚀 Quick Start

### Lokal testen
```bash
# Repository klonen
git clone https://github.com/HAVENIS-AI/havenis-ai-website.git
cd havenis-ai-website

# Mit Live Server öffnen
# Option 1: VS Code Live Server Extension
# Option 2: Python
python -m http.server 8000

# Öffnen in Browser
http://localhost:8000
```

### GitHub Pages
Die Website wird automatisch unter folgender URL gehostet:
https://havenis-ai.github.io/havenis-ai-website/

### Vercel Deployment
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

## 🎨 Design System

### Farben
- **Primary**: #00d4ff (Cyan)
- **Secondary**: #1a1a1a (Graphit)
- **Light**: #f5f5f5
- **Text**: #333333
- **Border**: #e0e0e0

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Headings: Bold (800, 700)
- Body: Regular (400)

### Animations
- Smooth transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Fade-in-up: 0.6s ease-out
- Float animation: 6s ease-in-out infinite

## 🌍 Mehrsprachigkeit

Die Website unterstützt Deutsch und English. Die Sprache kann umgeschaltet werden mit den Buttons in der oberen rechten Ecke.

Die Sprache wird automatisch in localStorage gespeichert und beim nächsten Besuch wiederhergestellt.

Neue Inhalte hinzufügen:
```html
<element data-de="Deutscher Text" data-en="English Text">
  Deutscher Text (Default)
</element>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

## 🔐 Security Features

Implemented Headers in vercel.json:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Cache-Control für Performance

## 📊 Performance

- Keine externen Dependencies (nur vanilla JS)
- Optimierte CSS mit CSS Variables
- Lazy Loading von Animationen mit Intersection Observer
- Browser Caching mit Vercel Headers

## 🛠️ Customization

### Logo/Texte ändern
Editiere `index.html` und ersetze:
- "HAVENIS AI" mit deiner Brand
- Sektionsinhalte nach Bedarf

### Farben ändern
Editiere die CSS Variables in `style.css`:
```css
:root {
    --primary: #00d4ff;      /* Cyan */
    --secondary: #1a1a1a;    /* Graphit */
    --light: #f5f5f5;
    --white: #ffffff;
    --text: #333333;
}
```

### Team-Mitglieder hinzufügen
Dupliziere `.team-card` Blöcke in `index.html`

## 📞 Support

Bei Fragen oder Problemen:
- Email: kontakt@havenis-ai.de
- GitHub Issues: https://github.com/HAVENIS-AI/havenis-ai-website/issues

## 📄 Lizenz

MIT License - Frei nutzbar und modifizierbar

## 🎯 Next Steps

- [ ] Bilder in `/images` Ordner hinzufügen (Logo, Team, Diagramme)
- [ ] Google Analytics Integration
- [ ] Newsletter Anmeldung
- [ ] Blog/News Section
- [ ] Dark Mode Toggle
- [ ] SEO Optimization (Meta Tags, Structured Data)

---

Made with ❤️ by HAVENIS AI Team | 2025
