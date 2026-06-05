/* ══ VIDEO STORIES ENGINE ══ */
var vsData = [
  {
    badge:  '🌍 Erasmus & Internazionale',
    title:  'Il semestre che cambia il CV — e la vita',
    desc:   'Il programma Erasmus riduce il rischio disoccupazione del 23%. Scopri come candidarti anche per periodi brevi e scambi estivi.',
    url:    'https://www.curriculumstrategico.it/erasmus-opportunita-curriculum/',
    cta:    'Scopri le opportunità Erasmus →',
    vid:    'https://videos.pexels.com/video-files/7683391/7683391-hd_1280_720_30fps.mp4',
    alt:    'https://videos.pexels.com/video-files/7683858/7683858-hd_1280_720_30fps.mp4',
    poster: 'https://images.pexels.com/videos/7683391/pexels-photo-7683391.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'
  },
  {
    badge:  '🏅 Certificazioni Gratuite',
    title:  'Una certificazione gratuita può cambiarti le carte',
    desc:   'Google, HubSpot, Microsoft: credenziali riconosciute da 150+ aziende. Si ottengono gratis, da casa, in poche settimane.',
    url:    'https://www.curriculumstrategico.it/corsi-gratuiti-certificati/',
    cta:    'Scopri le certificazioni →',
    vid:    'https://videos.pexels.com/video-files/5272272/5272272-hd_1280_720_25fps.mp4',
    alt:    'https://videos.pexels.com/video-files/8198517/8198517-hd_1280_720_25fps.mp4',
    poster: 'https://images.pexels.com/videos/5272272/black-man-home-study-laptop-remote-learning-5272272.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'
  },
  {
    badge:  '💼 Stage Virtuale con Forage',
    title:  'Lavora con le grandi aziende — da casa',
    desc:   'JPMorgan, BCG, Google, Deloitte: simulazioni di lavoro reali e gratuite che puoi aggiungere subito al CV, anche senza esperienza pregressa.',
    url:    'https://www.curriculumstrategico.it/corsi-forage-esperienza-cv/',
    cta:    'Scopri Forage →',
    vid:    'https://videos.pexels.com/video-files/5725953/5725953-hd_1280_720_30fps.mp4',
    alt:    'https://videos.pexels.com/video-files/6565661/6565661-hd_1280_720_25fps.mp4',
    poster: 'https://images.pexels.com/videos/5725953/adult-business-businessman-businesswoman-5725953.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'
  },
  {
    badge:  '🤝 Volontariato Strategico',
    title:  'Il volontariato che costruisce il tuo futuro',
    desc:   'Servizio Civile, Corpo Europeo di Solidarietà, CRI: esperienze concrete che sviluppano soft skill verificabili e valorizzabili in qualsiasi CV.',
    url:    'https://www.curriculumstrategico.it/volontariato-per-il-curriculum2026/',
    cta:    'Scopri il volontariato strategico →',
    vid:    'https://videos.pexels.com/video-files/6740283/6740283-hd_1280_720_25fps.mp4',
    alt:    'https://videos.pexels.com/video-files/6740283/6740283-hd_1280_720_25fps.mp4',
    poster: 'https://images.pexels.com/videos/6740283/pexels-photo-6740283.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'
  },
  {
    badge:  '💻 Hackathon & Coding',
    title:  '48 ore che valgono quanto uno stage',
    desc:   'Gli hackathon sono il modo più veloce per guadagnarsi una voce CV concreta, verificabile e capace di catturare l\'attenzione dei recruiter.',
    url:    'https://www.curriculumstrategico.it/hackathon-cv/',
    cta:    'Scopri gli hackathon →',
    vid:    'https://videos.pexels.com/video-files/6804109/6804109-hd_1280_720_25fps.mp4',
    alt:    'https://videos.pexels.com/video-files/6804109/6804109-hd_1280_720_30fps.mp4',
    poster: 'https://images.pexels.com/videos/6804109/pexels-photo-6804109.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'
  },
  {
    badge:  '☀️ Esperienze Estive',
    title:  "L'estate giusta può cambiare il tuo profilo",
    desc:   'Summer school, stage estivi e programmi internazionali: come trasformare 3 mesi in un asset professionale rilevante e misurabile.',
    url:    'https://www.curriculumstrategico.it/esperienze-formative-estive-studenti/',
    cta:    'Scopri le esperienze estive →',
    vid:    'https://videos.pexels.com/video-files/7683858/7683858-hd_1280_720_30fps.mp4',
    alt:    'https://videos.pexels.com/video-files/7683405/7683405-hd_1280_720_30fps.mp4',
    poster: 'https://images.pexels.com/videos/7683858/pexels-photo-7683858.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'
  }
];

var vsCur    = 0;
var vsTimer  = null;
var vsUseA   = true;

function vsInit(){
  var nav = document.getElementById('vs-nav');
  if(!nav) return;
  nav.innerHTML = '';
  vsData.forEach(function(s, i){
    var d = document.createElement('div');
    d.className = 'vs-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', s.badge);
    d.onclick = function(){ vsGo(i); };
    nav.appendChild(d);
  });
  vsLoadSlide(0);
}

function vsLoadSlide(n){
  var s    = vsData[n];
  var vidA = document.getElementById('vs-vid-a');
  var vidB = document.getElementById('vs-vid-b');
  var next = vsUseA ? vidB : vidA;
  var cur  = vsUseA ? vidA : vidB;

  /* update overlay text with animation */
  var c = document.getElementById('vs-content');
  document.getElementById('vs-badge').textContent = s.badge;
  document.getElementById('vs-title').textContent = s.title;
  document.getElementById('vs-desc').textContent  = s.desc;
  var btn = document.getElementById('vs-btn');
  btn.textContent = s.cta; btn.href = s.url;
  c.classList.remove('animate');
  void c.offsetWidth;
  c.classList.add('animate');

  /* load next video with crossfade (poster shows when video can't load) */
  next.poster = s.poster || '';
  next.src = s.vid;
  next.load();
  function tryPlay(){
    next.play().catch(function(){});
    next.classList.add('active');
    cur.classList.remove('active');
    vsUseA = !vsUseA;
    setTimeout(function(){ cur.pause(); cur.removeAttribute('src'); cur.load(); }, 1100);
  }
  next.oncanplay = tryPlay;
  next.onerror   = function(){
    if(next.src !== s.alt){ next.src = s.alt; next.load(); next.oncanplay = tryPlay; }
  };

  /* dots */
  document.querySelectorAll('.vs-dot').forEach(function(d,i){
    d.classList.toggle('active', i === n);
  });

  vsStartBar();
}

function vsStartBar(){
  clearTimeout(vsTimer);
  var bar = document.getElementById('vs-pbar');
  if(bar){ bar.style.transition='none'; bar.style.width='0%'; }
  setTimeout(function(){
    if(bar){ bar.style.transition='width 7s linear'; bar.style.width='100%'; }
  }, 60);
  vsTimer = setTimeout(function(){
    vsGo((vsCur + 1) % vsData.length);
  }, 7400);
}

function vsGo(n){ vsCur = n; vsLoadSlide(n); }
function vsNext(){ vsGo((vsCur + 1) % vsData.length); }
function vsPrev(){ vsGo((vsCur - 1 + vsData.length) % vsData.length); }

document.addEventListener('DOMContentLoaded', function(){
  /* init stories */
  vsInit();
  /* pause on hover */
  var wrap = document.getElementById('vs-wrap');
  if(wrap){
    wrap.addEventListener('mouseenter', function(){
      clearTimeout(vsTimer);
      var b = document.getElementById('vs-pbar');
      if(b){ b.style.transition = 'none'; }
    });
    wrap.addEventListener('mouseleave', function(){ vsStartBar(); });
  }
  /* touch/swipe support */
  var touchX = 0;
  if(wrap){
    wrap.addEventListener('touchstart', function(e){ touchX = e.changedTouches[0].clientX; }, {passive:true});
    wrap.addEventListener('touchend', function(e){
      var dx = e.changedTouches[0].clientX - touchX;
      if(Math.abs(dx) > 50){ dx < 0 ? vsNext() : vsPrev(); }
    }, {passive:true});
  }
});

/* ══ COUNTER ANIMATION ══ */
document.addEventListener('DOMContentLoaded', function(){
  var counters = document.querySelectorAll('.stat-num[data-target]');
  var ran = false;
  function runCounters(){
    if(ran) return; ran = true;
    counters.forEach(function(el){
      var target = parseInt(el.dataset.target, 10);
      var suffix = el.dataset.suffix || '';
      if(target === 0){ el.textContent = '0' + suffix; return; }
      var dur = target > 100 ? 1600 : 900;
      var start = 0, step = target / (dur / 16);
      var t = setInterval(function(){
        start += step;
        if(start >= target){ start = target; clearInterval(t); }
        el.textContent = Math.floor(start) + suffix;
      }, 16);
    });
  }
  if('IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting) runCounters(); });
    }, {threshold: .3});
    var row = document.querySelector('.stats-row');
    if(row) obs.observe(row);
  } else { runCounters(); }
});

/* ══ MOBILE NAVIGATION ══ */
function toggleNav(){
  var btn  = document.getElementById('cs-burger');
  var menu = document.getElementById('cs-mobile-menu');
  btn.classList.toggle('open');
  menu.classList.toggle('open');
}

/* ══ METHOD STEPPER ══ */
var curStep   = 0;
var totSteps  = 4;
var stepTimer = null;

function goStep(n){
  if(n < 0 || n >= totSteps) return;
  /* nascondi corrente */
  document.getElementById('step-' + curStep).classList.remove('active');
  document.getElementById('dot-'  + curStep).classList.remove('active');
  /* aggiorna done/line */
  for(var i = 0; i < totSteps; i++){
    var dot  = document.getElementById('dot-'  + i);
    var line = document.getElementById('line-' + i);
    if(i < n){ dot.classList.add('done'); if(line) line.classList.add('done'); }
    else { dot.classList.remove('done'); if(line) line.classList.remove('done'); }
  }
  curStep = n;
  document.getElementById('step-' + curStep).classList.add('active');
  document.getElementById('dot-'  + curStep).classList.add('active');
  startTimer();
}
function nextStep(){ if(curStep < totSteps - 1) goStep(curStep + 1); }
function prevStep(){ if(curStep > 0)            goStep(curStep - 1); }

function startTimer(){
  clearTimeout(stepTimer);
  var bar = document.getElementById('spb-' + curStep);
  if(bar){
    bar.style.transition = 'none';
    bar.style.width = '0%';
    setTimeout(function(){
      bar.style.transition = 'width 5s linear';
      bar.style.width = '100%';
    }, 60);
  }
  if(curStep < totSteps - 1){
    stepTimer = setTimeout(function(){ nextStep(); }, 5300);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  startTimer();
  var wrap = document.querySelector('.method-wrap');
  if(wrap){
    wrap.addEventListener('mouseenter', function(){ clearTimeout(stepTimer); });
    wrap.addEventListener('mouseleave', function(){ startTimer(); });
  }
});

/* ══ QUIZ ══ */
var quizData = {
  cert: {
    title: 'Corsi gratuiti certificati: le migliori piattaforme online (2026)',
    desc:  'Google, HubSpot, Microsoft e IBM. Come accedere gratis ai certificati più riconosciuti e inserirli nel CV con il massimo impatto.',
    url:   'https://www.curriculumstrategico.it/corsi-gratuiti-certificati/'
  },
  int: {
    title: 'Erasmus: le opportunità (anche brevi) per arricchire il curriculum',
    desc:  'Non solo semestri all\'estero. Traineeship, scambi brevi, ESC e programmi finanziati dall\'UE: la guida completa.',
    url:   'https://www.curriculumstrategico.it/erasmus-opportunita-curriculum/'
  },
  prat: {
    title: 'Corsi Forage: come ottenere esperienza gratis per il CV',
    desc:  'Simulazioni di lavoro reale da JPMorgan, BCG, Deloitte e 100+ aziende. Gratuiti, verificabili, progettati per talenti junior.',
    url:   'https://www.curriculumstrategico.it/corsi-forage-esperienza-cv/'
  },
  vol: {
    title: 'Volontariato per il curriculum: il tuo vantaggio competitivo',
    desc:  'Servizio Civile, Corpo Europeo di Solidarietà, CRI. Come scegliere il volontariato giusto e trasformarlo in un asset CV autorevole.',
    url:   'https://www.curriculumstrategico.it/volontariato-per-il-curriculum2026/'
  }
};
function quizSelect(el, key){
  document.querySelectorAll('.quiz-opt').forEach(function(o){ o.classList.remove('active'); });
  el.classList.add('active');
  var d = quizData[key];
  document.getElementById('qr-title').textContent = d.title;
  document.getElementById('qr-desc').textContent  = d.desc;
  document.getElementById('qr-link').href         = d.url;
  var res = document.getElementById('qr');
  res.classList.add('show');
  res.style.display = 'block';
}