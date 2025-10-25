let currentSlide = 1;
const slides = document.querySelectorAll('.slide');

function showSlide(n){
  slides.forEach(s => s.classList.remove('active'));
  slides[n-1].classList.add('active');
}

document.getElementById('next-btn').addEventListener('click', ()=>{
  currentSlide = currentSlide<slides.length ? currentSlide+1 : slides.length;
  showSlide(currentSlide);
});

document.getElementById('prev-btn').addEventListener('click', ()=>{
  currentSlide = currentSlide>1 ? currentSlide-1 : 1;
  showSlide(currentSlide);
});

showSlide(currentSlide);

// DE/EN Toggle
document.getElementById('de-btn').addEventListener('click', ()=> setLang('de'));
document.getElementById('en-btn').addEventListener('click', ()=> setLang('en'));

function setLang(lang){
  document.querySelectorAll('[data-de]').forEach(el=>{
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// PDF Export
document.getElementById('pdf-btn').addEventListener('click', ()=> window.print());

// Heatmap / Beamforming Canvas
const heatmapCanvas = document.getElementById('heatmap-canvas');
if(heatmapCanvas){
  const ctx = heatmapCanvas.getContext('2d');
  let t=0;
  function drawHeatmap(){
    ctx.clearRect(0,0,heatmapCanvas.width,heatmapCanvas.height);
    for(let i=0;i<10;i++){
      ctx.fillStyle = `rgba(0,255,255,${0.1+0.05*Math.sin(t+i)})`;
      ctx.fillRect(50*i,50*i,80,80);
    }
    t+=0.1;
    requestAnimationFrame(drawHeatmap);
  }
  drawHeatmap();
}

// Tech Architecture Canvas (optional animation)
const techCanvas = document.getElementById('tech-canvas');
if(techCanvas){
  const ctx2 = techCanvas.getContext('2d');
  function drawTech(){
    ctx2.clearRect(0,0,techCanvas.width,techCanvas.height);
    ctx2.fillStyle="#00ffff";
    ctx2.fillRect(50,50,100,100);
    ctx2.fillRect(300,50,100,100);
    ctx2.fillRect(550,50,100,100);
    ctx2.font="20px Inter";
    ctx2.fillText("Edge",80,110);
    ctx2.fillText("Cloud",330,110);
    ctx2.fillText("UI",580,110);
    requestAnimationFrame(drawTech);
  }
  drawTech();
}
