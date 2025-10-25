// HAVENIS AI Pitchdeck - Interactive JavaScript

let currentSlide = 1;
const totalSlides = 14;
let currentLanguage = 'de';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  showSlide(1);
  setupEventListeners();
  drawTechArchitecture();
  drawHeatmap();
  setLanguage('de');
  addSlideCounter();
});

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById('prev-btn').addEventListener('click', prevSlide);
  document.getElementById('next-btn').addEventListener('click', nextSlide);
  document.getElementById('pdf-btn').addEventListener('click', exportPDF);
  document.getElementById('de-btn').addEventListener('click', () => setLanguage('de'));
  document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));

  // Keyboard Navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
}

// Show Slide
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');

  if (n > totalSlides) currentSlide = 1;
  if (n < 1) currentSlide = totalSlides;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide - 1].classList.add('active');

  updateSlideCounter();
}

// Next Slide
function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) currentSlide = 1;
  showSlide(currentSlide);
}

// Previous Slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 1) currentSlide = totalSlides;
  showSlide(currentSlide);
}

// Set Language
function setLanguage(lang) {
  currentLanguage = lang;

  // Update button states
  document.getElementById('de-btn').classList.toggle('active', lang === 'de');
  document.getElementById('en-btn').classList.toggle('active', lang === 'en');

  // Update all text elements
  document.querySelectorAll('[data-de][data-en]').forEach(element => {
    if (element.tagName === 'LI' || element.tagName === 'P') {
      element.textContent = element.getAttribute('data-' + lang);
    }
  });

  document.querySelectorAll('[data-de][data-en]').forEach(element => {
    if (element.tagName === 'H1' || element.tagName === 'H2') {
      element.textContent = element.getAttribute('data-' + lang);
    }
  });

  // Redraw canvas elements with language
  drawTechArchitecture();
  drawHeatmap();
}

// Draw Tech Architecture
function drawTechArchitecture() {
  const canvas = document.getElementById('tech-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Style
  ctx.strokeStyle = '#00d4ff';
  ctx.fillStyle = '#667eea';
  ctx.lineWidth = 2;
  ctx.font = 'bold 14px Arial';
  ctx.fillStyle = '#fff';

  // Edge Device
  ctx.strokeStyle = '#00d4ff';
  ctx.strokeRect(50, 80, 120, 80);
  ctx.fillText('Edge Device', 60, 125);

  // Arrow 1
  ctx.strokeStyle = '#00d4ff';
  ctx.beginPath();
  ctx.moveTo(170, 120);
  ctx.lineTo(210, 120);
  ctx.stroke();
  ctx.fillText('→', 185, 110);

  // Local AI
  ctx.strokeStyle = '#00d4ff';
  ctx.strokeRect(210, 80, 120, 80);
  ctx.fillText('Edge-KI', 230, 125);

  // Arrow 2
  ctx.beginPath();
  ctx.moveTo(330, 120);
  ctx.lineTo(370, 120);
  ctx.stroke();

  // Cloud
  ctx.strokeStyle = '#00d4ff';
  ctx.strokeRect(370, 80, 120, 80);
  ctx.fillText('Cloud', 400, 125);

  // Arrow 3
  ctx.beginPath();
  ctx.moveTo(490, 120);
  ctx.lineTo(530, 120);
  ctx.stroke();

  // Analytics
  ctx.strokeStyle = '#00d4ff';
  ctx.strokeRect(530, 80, 120, 80);
  ctx.fillText('Analytics', 550, 125);

  // Bottom layer - Data flow
  ctx.fillStyle = 'rgba(0, 212, 255, 0.3)';
  ctx.fillRect(50, 200, 600, 150);

  ctx.fillStyle = '#fff';
  ctx.font = 'bold 12px Arial';
  const flowText = currentLanguage === 'de' 
    ? 'Datenfluss: Wi-Fi Rohdaten → Signal Processing → KI-Inference → Cloud-Speicher'
    : 'Data Flow: Wi-Fi Raw Data → Signal Processing → AI Inference → Cloud Storage';
  ctx.fillText(flowText, 60, 280);

  // Legend
  ctx.fillStyle = 'rgba(102, 126, 234, 0.5)';
  ctx.fillRect(50, 320, 600, 40);
  ctx.fillStyle = '#00d4ff';
  ctx.font = 'bold 11px Arial';
  const langLabel = currentLanguage === 'de' ? 'Lokal:' : 'Local:';
  ctx.fillText(langLabel + ' Echtzeit-Verarbeitung | ' + (currentLanguage === 'de' ? 'Cloud:' : 'Cloud:') + ' Speicher & Analyse', 60, 345);
}

// Draw Heatmap / Data Visualization
function drawHeatmap() {
  const canvas = document.getElementById('heatmap-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = 'rgba(102, 126, 234, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Title
  ctx.fillStyle = '#00d4ff';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Wi-Fi Signal Heatmap - Vital Detection', 20, 30);

  // Draw heatmap grid
  const gridSize = 50;
  const colors = ['#002e7a', '#0056b3', '#00d4ff', '#ff6b6b', '#ff0000'];

  for (let x = 0; x < canvas.width; x += gridSize) {
    for (let y = 50; y < canvas.height - 50; y += gridSize) {
      const intensity = Math.random();
      const colorIndex = Math.floor(intensity * (colors.length - 1));
      ctx.fillStyle = colors[colorIndex];
      ctx.globalAlpha = 0.7;
      ctx.fillRect(x, y, gridSize, gridSize);
      ctx.globalAlpha = 1;
    }
  }

  // Border
  ctx.strokeStyle = '#00d4ff';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 50, canvas.width, canvas.height - 100);

  // Stats
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 12px Arial';
  const statsText = currentLanguage === 'de'
    ? ['Herz: 72 BPM (±2%)', 'Atmung: 16 Züge/Min (±3%)', 'Signal: -45 dBm']
    : ['Heart: 72 BPM (±2%)', 'Respiration: 16 breaths/min (±3%)', 'Signal: -45 dBm'];

  statsText.forEach((stat, i) => {
    ctx.fillText(stat, 20, canvas.height - 20 - (i * 25));
  });
}

// Export PDF
function exportPDF() {
  alert(currentLanguage === 'de'
    ? 'PDF-Export wird vorbereitet...\nBitte verwende deinen Browser-PDF-Export (Strg+P).'
    : 'PDF export is being prepared...\nPlease use your browser PDF export (Ctrl+P).');

  // Trigger browser print dialog
  window.print();
}

// Add Slide Counter
function addSlideCounter() {
  const counter = document.createElement('div');
  counter.className = 'slide-counter';
  counter.id = 'slide-counter';
  document.body.appendChild(counter);
}

// Update Slide Counter
function updateSlideCounter() {
  const counter = document.getElementById('slide-counter');
  if (counter) {
    counter.textContent = 'Slide ' + currentSlide + ' / ' + totalSlides;
  }
}

// Add smooth scroll to all sections
document.addEventListener('wheel', function(e) {
  if (Math.abs(e.deltaY) > 50) {
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}, { passive: true });
