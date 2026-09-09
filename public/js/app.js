/**
 * LA BIBLIA EN ACCIÓN - APLICACIÓN WEB INTERACTIVA
 * Escuela Dominical - Iglesia Asambleas de Dios Olivos
 * Lógica del cliente, modales pedagógicos, trivia interactiva y soporte táctil móvil
 */

// Datos pedagógicos detallados de cada estación bíblica
const STATIONS_DATA = {
  parvulos: {
    title: "La Creación y la Vida de José",
    group: "Párvulos (3 a 5 años)",
    teachers: "Annet & Damaris",
    image: "IMAGES/PARVULOS.png",
    verse: "«En el principio creó Dios los cielos y la tierra.» — Génesis 1:1",
    objective: "Que los niños descubran a Dios como Creador amoroso que cuida de ellos día a día, y que a través de José comprendan que Dios siempre tiene un plan de bendición.",
    materials: "Láminas ilustradas de animalitos kawaii (leoncito, pececitos, aves), flores y árboles de fieltro, y la túnica de muchos colores de José para dinámicas sensoriales.",
    quote: "Los más pequeños experimentan el amor de Dios jugando y reconociendo sus maravillas en la naturaleza."
  },
  principiantes: {
    title: "¿Qué es la Biblia? Conociendo la Palabra",
    group: "Principiantes (6 a 7 años)",
    teachers: "Rebeca & Fernanda",
    image: "IMAGES/PRINCIPIANTES.png",
    verse: "«Lámpara es a mis pies tu palabra, y lumbrera a mi camino.» — Salmo 119:105",
    objective: "Enseñar el origen divino de las Sagradas Escrituras, cómo se formó a través de profetas y apóstoles, y por qué es nuestro mapa seguro en la vida diaria.",
    materials: "Réplicas de rollos antiguos con cordeles dorados, maquetas de libros del Antiguo y Nuevo Testamento, mapas bíblicos y separadores de páginas con versículos.",
    quote: "Queremos que cada niño atesore la Biblia en su corazón como el regalo más valioso de Dios."
  },
  primarios: {
    title: "Moisés y la Travesía del Pueblo de Israel",
    group: "Primarios (8 a 9 años)",
    teachers: "Carmen & Benjamín",
    image: "IMAGES/PRIMARIOS.png",
    verse: "«Jehová peleará por vosotros, y vosotros estaréis tranquilos.» — Éxodo 14:14",
    objective: "Aprender a confiar y obedecer a Dios en todo momento, reconociendo Sus milagros de liberación en el desierto y la guía fiel de Su presencia.",
    materials: "Impresionante maqueta tridimensional con arena del desierto, tiendas del pueblo hebreo, el monte Sinaí, tablas de la Ley y la división milagrosa del Mar Rojo.",
    quote: "Los niños no solo recuerdan una historia, sino que viven el poder de un Dios que abre caminos donde no los hay."
  },
  intermedios: {
    title: "La Vida, Milagros y Misión de Jesús",
    group: "Intermedios (10 a 11 años)",
    teachers: "Miriam & Lía",
    image: "IMAGES/INTERMEDIOS.png",
    verse: "«Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.» — Juan 14:6",
    objective: "Conocer de forma cronológica el ministerio de Jesús: Su bautismo, milagros de sanidad, amor por los niños, Su sacrificio en la cruz y Su gloriosa resurrección.",
    materials: "Mesa interactiva con cartas coleccionables de relatos bíblicos, mapa de Palestina en tiempos de Jesús, rotafolio con preguntas de desafío y réplica de la barca en Galilea.",
    quote: "Jesús es nuestro Salvador y el mejor amigo que un niño puede tener en cada etapa de su vida."
  },
  preadolescentes: {
    title: "Compartiendo el Evangelio – La Gran Comisión",
    group: "Preadolescentes (12 a 14 años)",
    teachers: "Zulma",
    image: "IMAGES/PREADOLESCENTES.png",
    verse: "«Id por todo el mundo y predicad el evangelio a toda criatura.» — Marcos 16:15",
    objective: "Empoderar a los preadolescentes para que no se avergüencen de su fe y aprendan a testificar con amor y sabiduría en sus colegios, barrios y redes.",
    materials: "Dípticos evangelísticos diseñados por los alumnos, mural con el mapa de las naciones y dinámicas prácticas de evangelismo personal cara a cara.",
    quote: "Nuestra generación está lista para levantar la bandera de Cristo con convicción y valentía."
  },
  adolescentes: {
    title: "El Fruto del Espíritu en la Juventud",
    group: "Adolescentes y Jóvenes (15 a 18 años)",
    teachers: "Dámaso",
    image: "IMAGES/ADOLESCENTES.png",
    verse: "«Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.» — Gálatas 5:22-23",
    objective: "Inspirar a los jóvenes a buscar la dirección del Espíritu Santo para cultivar un carácter íntegro frente a las modas y tentaciones del mundo moderno.",
    materials: "Set interactivo con tarjetas de dilemas morales cotidianos y las 9 virtudes del Fruto, dinámicas de debate y devocionales juveniles de bolsillo.",
    quote: "El fruto espiritual no es una teoría, es el estilo de vida que nos distingue como verdaderos discípulos."
  }
};

// Preguntas para la Minitrivia del Pingüino
const TRIVIA_QUESTIONS = [
  {
    question: "¿Qué nos enseña la historia de José en la estación de Párvulos?",
    options: [
      { text: "Que Dios siempre tiene un plan bueno para nosotros", correct: true },
      { text: "Que no debemos viajar al desierto", correct: false },
      { text: "Que los sueños nunca se cumplen", correct: false },
      { text: "Que solo debemos dibujar animales", correct: false }
    ],
    explanation: "¡Exacto! Aunque José pasó por momentos difíciles, Dios tornó todo para bien y cuidó de su familia."
  },
  {
    question: "Según el Salmo 119:105, ¿qué es la Palabra de Dios para nuestras vidas?",
    options: [
      { text: "Un libro de cuentos antiguos", correct: false },
      { text: "Lámpara a nuestros pies y lumbrera a nuestro camino", correct: true },
      { text: "Una regla difícil de cumplir", correct: false },
      { text: "Una canción para el coro", correct: false }
    ],
    explanation: "¡Excelente! La Palabra nos alumbra en los momentos oscuros y nos guía por sendas de paz."
  },
  {
    question: "¿Qué gran milagro de Dios representaron los niños de Primarios en su maqueta?",
    options: [
      { text: "La construcción del Arca de Noé", correct: false },
      { text: "La apertura milagrosa del Mar Rojo", correct: true },
      { text: "El viaje del apóstol Pablo a Roma", correct: false },
      { text: "La muralla de Jericó", correct: false }
    ],
    explanation: "¡Maravilloso! Dios abrió el mar para que Su pueblo cruzara en seco guiados por Moisés."
  },
  {
    question: "¿Cuál de las siguientes virtudes es parte del Fruto del Espíritu (Gálatas 5:22)?",
    options: [
      { text: "El orgullo y la vanidad", correct: false },
      { text: "El amor, el gozo, la paz y la paciencia", correct: true },
      { text: "La impaciencia y la queja", correct: false },
      { text: "El individualismo", correct: false }
    ],
    explanation: "¡Brillante! El Espíritu Santo produce en nosotros amor, gozo, paz y paciencia para con todos."
  }
];

let currentTriviaIndex = 0;
let triviaScore = 0;

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initMobileMenu();
  loadReactions();
  setupEventListeners();
  loadTriviaQuestion();
});

// ==========================================================================
// CONTADOR REGRESIVO AL 27 DE OCTUBRE
// ==========================================================================
function initCountdown() {
  const eventDate = new Date('2026-10-27T09:00:00').getTime();

  function update() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.getElementById('countDays').textContent = '00';
      document.getElementById('countHours').textContent = '00';
      document.getElementById('countMinutes').textContent = '00';
      document.getElementById('countSeconds').textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countDays').textContent = String(days).padStart(2, '0');
    document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countSeconds').textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// MENÚ RESPONSIVO PARA MÓVILES
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Cerrar si se hace clic fuera
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
}

// Valores base por defecto
const DEFAULT_REACTIONS = {
  parvulos: 30,
  principiantes: 24,
  primarios: 36,
  intermedios: 31,
  preadolescentes: 27,
  adolescentes: 34
};

// ==========================================================================
// CARGAR REACCIONES DESDE LA API O LOCALSTORAGE (COMPATIBLE CON RENDER STATIC)
// ==========================================================================
async function loadReactions() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error('Modo estático sin API');
    const data = await res.json();

    if (data.estacionesReacciones) {
      applyReactions(data.estacionesReacciones);
      return;
    }
  } catch (error) {
    // Fallback a localStorage para hosting estático puro en Render
    const stored = JSON.parse(localStorage.getItem('estacionesReacciones') || 'null') || DEFAULT_REACTIONS;
    applyReactions(stored);
  }
}

function applyReactions(reactions) {
  Object.keys(reactions).forEach(stationKey => {
    const countSpan = document.getElementById(`reactCount-${stationKey}`);
    if (countSpan) {
      countSpan.textContent = reactions[stationKey];
    }
  });
}

// ==========================================================================
// EVENTOS Y MODALES
// ==========================================================================
function setupEventListeners() {
  // Botones de estaciones
  document.querySelectorAll('[data-station-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const stationId = btn.getAttribute('data-station-id');
      openStationModal(stationId);
    });
  });

  // Reacciones a estaciones
  document.querySelectorAll('.btn-react').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const stationKey = btn.getAttribute('data-react-key');
      await handleReaction(stationKey, btn);
    });
  });

  // Cerrar modal
  const modalBackdrop = document.getElementById('stationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Tecla Escape para cerrar modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Manejar reacción (like) a estación con soporte para Node.js y Render Static Site
async function handleReaction(stationKey, buttonEl) {
  try {
    const res = await fetch('/api/react', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stationId: stationKey })
    });
    if (res.ok) {
      const result = await res.json();
      if (result.success) {
        const countSpan = document.getElementById(`reactCount-${stationKey}`);
        if (countSpan) countSpan.textContent = result.newCount;
        showToast('¡Gracias por apoyar esta estación bíblica! ❤️');
        buttonEl.style.transform = 'scale(1.15)';
        setTimeout(() => buttonEl.style.transform = '', 300);
        return;
      }
    }
  } catch (err) {
    // Modo estático puro
  }

  // Fallback con localStorage si no hay servidor backend
  const stored = JSON.parse(localStorage.getItem('estacionesReacciones') || 'null') || { ...DEFAULT_REACTIONS };
  stored[stationKey] = (stored[stationKey] || 0) + 1;
  localStorage.setItem('estacionesReacciones', JSON.stringify(stored));
  const countSpan = document.getElementById(`reactCount-${stationKey}`);
  if (countSpan) countSpan.textContent = stored[stationKey];
  showToast('¡Gracias por apoyar esta estación bíblica! ❤️');
  buttonEl.style.transform = 'scale(1.15)';
  setTimeout(() => buttonEl.style.transform = '', 300);
}

// Abrir modal con los datos pedagógicos completos
function openStationModal(stationId) {
  const data = STATIONS_DATA[stationId];
  if (!data) return;

  const modal = document.getElementById('stationModal');
  document.getElementById('modalImage').src = data.image;
  document.getElementById('modalImage').alt = data.title;
  document.getElementById('modalGroup').textContent = data.group;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalTeachers').textContent = `Maestros: ${data.teachers}`;
  document.getElementById('modalVerse').textContent = data.verse;
  document.getElementById('modalObjective').textContent = data.objective;
  document.getElementById('modalMaterials').textContent = data.materials;
  document.getElementById('modalQuote').textContent = `"${data.quote}"`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('stationModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Toast de notificación
function showToast(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==========================================================================
// MINIJUEGO INTERACTIVO: EL DESAFÍO BÍBLICO DEL PINGÜINO
// ==========================================================================
function loadTriviaQuestion() {
  const q = TRIVIA_QUESTIONS[currentTriviaIndex];
  const qText = document.getElementById('triviaQuestion');
  const optionsGrid = document.getElementById('triviaOptions');
  const feedbackEl = document.getElementById('triviaFeedback');
  const progressText = document.getElementById('triviaProgress');

  if (!qText || !optionsGrid) return;

  qText.textContent = q.question;
  feedbackEl.textContent = '';
  optionsGrid.innerHTML = '';
  progressText.textContent = `Pregunta ${currentTriviaIndex + 1} de ${TRIVIA_QUESTIONS.length}`;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'trivia-btn';
    btn.innerHTML = `<span style="opacity: 0.7; font-weight: 800;">${String.fromCharCode(65 + idx)}.</span> <span>${opt.text}</span>`;
    btn.addEventListener('click', () => handleTriviaAnswer(opt, btn, q.explanation));
    optionsGrid.appendChild(btn);
  });
}

function handleTriviaAnswer(option, btnElement, explanation) {
  const allBtns = document.querySelectorAll('.trivia-btn');
  allBtns.forEach(b => b.disabled = true);

  const feedbackEl = document.getElementById('triviaFeedback');

  if (option.correct) {
    triviaScore++;
    btnElement.classList.add('correct');
    feedbackEl.innerHTML = `<span style="color: #27AE60;">¡Correcto! 🌟</span> ${explanation}`;
    triggerConfetti();
  } else {
    btnElement.classList.add('wrong');
    feedbackEl.innerHTML = `<span style="color: #E74C3C;">¡Casi! 😊</span> ${explanation}`;
  }

  setTimeout(() => {
    currentTriviaIndex++;
    if (currentTriviaIndex < TRIVIA_QUESTIONS.length) {
      loadTriviaQuestion();
    } else {
      showTriviaResults();
    }
  }, 2200);
}

function showTriviaResults() {
  const box = document.getElementById('triviaBox');
  if (!box) return;

  box.innerHTML = `
    <div style="padding: 1rem 0;">
      <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🎉🐧</div>
      <h3 style="color: var(--color-guinda); font-size: clamp(1.4rem, 4vw, 1.8rem); margin-bottom: 0.5rem;">
        ¡Completaste el Desafío Bíblico!
      </h3>
      <p style="font-size: 1.1rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
        Obtuviste <strong>${triviaScore}</strong> de <strong>${TRIVIA_QUESTIONS.length}</strong> respuestas correctas.
        ${triviaScore >= 3 ? '¡Eres un gran explorador de las Sagradas Escrituras!' : '¡Excelente esfuerzo aprendiendo de la Palabra!'}
      </p>
      <button class="btn btn-primary" onclick="restartTrivia()">
        <span>Jugar de nuevo</span>
      </button>
    </div>
  `;
  triggerConfetti();
}

window.restartTrivia = function() {
  currentTriviaIndex = 0;
  triviaScore = 0;
  const box = document.getElementById('triviaBox');
  if (!box) return;

  box.innerHTML = `
    <div class="trivia-header">
      <div id="triviaProgress" class="badge-tag pastel">Pregunta 1 de 4</div>
      <h3 style="color: var(--color-guinda); margin-top: 0.5rem; font-size: clamp(1.2rem, 3vw, 1.5rem);">¿Cuánto conoces de las estaciones?</h3>
    </div>
    <div class="trivia-question-box">
      <div id="triviaQuestion" class="trivia-question-text"></div>
    </div>
    <div id="triviaOptions" class="trivia-options-grid"></div>
    <div id="triviaFeedback" class="trivia-feedback"></div>
  `;
  loadTriviaQuestion();
};

// ==========================================================================
// MOTOR DE CONFETI LIVIANO
// ==========================================================================
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#FFB3C6', '#BFA2DB', '#7AC0E2', '#FFA07A', '#8B0033', '#FFD166'];

  for (let i = 0; i < 60; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10
    });
  }

  let animationFrame;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.vRot;

      if (p.y < canvas.height) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  draw();
}
