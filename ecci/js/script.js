document.addEventListener('DOMContentLoaded', () => {

  // Diccionario centralizado de traducciones
  const translations = {
    es: {
      "nav-about": "Sobre los Eventos",
      "nav-gallery": "Galería",
      "nav-reflection": "Reflexión",
      "hero-date-1": "Moda ECCI · Bogotá",
      "hero-date-2": "Bogotá · Mayo 2026",
      "hero-desc-tech": "Tecnología, gaming y soberanía digital. El evento tech más importante del país reunido en Corferias.",
      "hero-desc-moda": "Una conferencia magistral sobre Teoría del Color, Pantone y Semiótica Visual. Aprende cómo el color cuenta historias, construye identidades y habla más alto que las palabras.",
      "btn-explore": "Explorar →",
      "hero-badge": "Dos mundos · Un viaje",
      "intro-eyebrow": "Mi experiencia",
      "intro-heading": "Dos eventos que<br>amplían la visión",
      "intro-p1": "Sara Viloria (1991) es Licenciada en Artes Visuales, diplomada en Ilustración y Arte en su expresión territorial. Es Colorista Certificada por Leatrice Eiseman, Directora Ejecutiva del Pantone Institute — una de las credenciales más reconocidas en el mundo del color.",
      "intro-p2": "Ha trabajado como Coordinadora de Educación del Museo de Artes Visuales MAVI de Santiago, Mediadora Cultural para el Departamento de Pueblos Originarios y Curadora de Arte. Es pintora, poeta, escritora y ganadora de la Beca Fundación Neruda (2021) y el premio Lily Peter Fellowship (USA).",
      "fact-events": "Eventos",
      "fact-conferences": "Colorista Certificada · Pantone Institute",
      "fact-attendees": "Asistentes",
      "fact-city": "Ciudad: Bogotá",
      "tech-eyebrow": "Evento 01 · Tecnología",
      "tech-sub": "Acceso, Soberanía y Productividad Digital",
      "tech-desc": "Certificación otorgada por Leatrice Eiseman, directora ejecutiva del Pantone Color Institute.",
      "card1-title": "Mejores decisiones, mejores experiences, mejores juegos",
      "card1-text": "Andrés demostró que el UX design en imágenes, jerarquías y estructuras de diseño no es solo estética, sino una herramienta estratégica esencial para optimizar la usabilidad del producto digital.",
      "card2-title": "Experiencia Tech — Zona Gammer en vivo",
      "card2-text": "Un espacio inmersivo donde cientos de estudiantes y gamers experimentaron en vivo torneos de Fortnite y LoL. La zona dejó claro que el gaming colombiano tiene talento, público y estructura para competir a nivel latinoamericano.",
      "moda-eyebrow": "Evento 02 · Moda & Diseño",
      "moda-sub": "El color que define cada época",
      "moda-desc": "Educación y mediación cultural en artes visuales.",
      "video-title": "Video · Createx 2026",
      "video-footer": "Escenario principal Createx 2026 · Corferias Bogotá",
      "card3-title": "Desfiles Createx — La moda colombiana en escena",
      "card3-text": "Los desfiles del escenario principal de Createx reunieron a cientos de personas en torno a colecciones que fusionan identidad colombiana, diseño sostenible y tendencias internacionales. Un recordatorio de que la moda es cultura materializada.",
      "gallery-eyebrow": "Registro fotográfico",
      "filter-all": "Todos",
      "filter-timeline": "Línea del tiempo",
      "cap-1": "Línea del tiempo Colombia 5.0",
      "cap-2": "Línea del tiempo Colombia 5.0",
      "cap-3": "Desfile Createx 2026",
      "cap-4": "Torneo Gaming en vivo",
      "cap-5": "Escenario principal Createx",
      "cap-6": "Conferencia Colombia 5.0",
      "ref-eyebrow": "Lo que esta conferencia me dejó",
      "ref-quote": "\"El color no es decoración.<br>El color es <em>lenguaje, historia y psicología</em><br>aplicados a todo lo que diseñamos.\"",
      "ref-p1": "<p>Como estudiante de ADSO en el SENA, estos eventos conﬁrmaron algo que intuía: el software que construimos impacta culturas, comunidades e industrias reales. El color que elige Sara Viloria para una colección tiene las mismas reglas semióticas que el color que yo elijo para un botón de conﬁrmación en una app.</p>",
      "ref-p2": "Andrés Pisso y la Zona Gammer me mostraron que el diseño de experiencias no es un proceso separado del desarrollo — es parte esencial de él. Y la conferencia de IA me recordó que el código que escribimos tiene consecuencias humanas reales.",
      "rc-1": "El diseño centrado en el usuario transforma la industria: mejores decisiones = mejores experiencias.",
      "rc-t2": "🎨 Teoría del Color",
      "rc-2": "Calidez, confort, autenticidad. En tiempos de aceleración digital, el mundo busca lo terrenal, lo táctil y lo genuino. Un tono que abraza.",
      "rc-3": "La IA generativa amplifica al desarrollador consciente. La responsabilidad ética no es opcional.",
      "rc-t4": "Moda Sostenible",
      "rc-4": "Createx mostró que innovar en textiles y en software comparte el mismo principio: menos desperdicio, más valor.",
      "rc-t5": "Filolao y el \"Fuego Central\"",
      "rc-5": "El filósofo pitagórico Filolao fue la primera persona conocida en postular que la Tierra gira alrededor de un \"fuego central\". Esta visión circular del cosmos influyó en cómo los pensadores posteriores organizaron el conocimiento — incluido el del color — en formas circulares y cíclicas.",
      "footer-text": "Documentación académica · SENA ADSO · Bogotá 2026",
      "footer-sub": "Hecho con atención e inspiración 🇨🇴"
    },
    en: {
      "nav-about": "About the Events",
      "nav-gallery": "Gallery",
      "nav-reflection": "Reflection",
      "hero-date-1": "Moda ECCI · Bogota",
      "hero-date-2": "Bogota · May 2026",
      "hero-desc-tech": "Technology, gaming, and digital sovereignty. The most important tech event in the country gathered at Corferias.",
      "hero-desc-moda": "A masterclass on Color Theory, Pantone, and Visual Semiotics. Learn how color tells stories, builds identities, and speaks louder than words.",
      "btn-explore": "Explore →",
      "hero-badge": "Two Worlds · One Journey",
      "intro-eyebrow": "My Experience",
      "intro-heading": "Two Events That<br>Broaden the Vision",
      "intro-p1": "Sara Viloria (1991) holds a Bachelor's degree in Visual Arts, with a diploma in Illustration and Art in its territorial expression. She is a Certified Colorist by Leatrice Eiseman, Executive Director of the Pantone Institute — one of the most recognized credentials in the world of color.",
      "intro-p2": "She has worked as Education Coordinator at the MAVI Visual Arts Museum in Santiago, Cultural Mediator for the Department of First Nations, and Art Curator. She is a painter, poet, writer, and winner of the Fundación Neruda Scholarship (2021) and the Lily Peter Fellowship award (USA).",
      "fact-events": "Events",
      "fact-conferences": "Certified Colorist · Pantone Institute",
      "fact-attendees": "Attendees",
      "fact-city": "City: Bogota",
      "tech-eyebrow": "Event 01 · Technology",
      "tech-sub": "The color that defines each era",
      "tech-desc": "Certification awarded by Leatrice Eiseman, executive director of the Pantone Color Institute.",
      "card1-title": "Better Decisions, Better Experiences, Better Games",
      "card1-text": "Andrés demonstrated that UX design in images, hierarchies, and design structures is not just aesthetics, but an essential strategic tool to optimize digital product usability.",
      "card2-title": "Tech Experience — Live Gamer Zone",
      "card2-text": "An immersive space where hundreds of students and gamers experienced live Fortnite and LoL tournaments. The zone made it clear that Colombian gaming has the talent, audience, and structure to compete at a Latin American level.",
      "moda-eyebrow": "Event 02 · Fashion & Design",
      "moda-sub": "The color that defines each era",
      "moda-desc": "Education and cultural mediation in visual arts.",
      "video-title": "Video · Createx 2026",
      "video-footer": "Main Stage Createx 2026 · Corferias Bogota",
      "card3-title": "Createx Runways — Colombian Fashion on Stage",
      "card3-text": "The runways on the main stage of Createx brought hundreds of people together around collections blending Colombian identity, sustainable design, and international trends. A reminder that fashion is materialized culture.",
      "gallery-eyebrow": "Photo Record",
      "filter-all": "All",
      "filter-timeline": "Timeline",
      "cap-1": "Colombia 5.0 Timeline",
      "cap-2": "Colombia 5.0 Timeline",
      "cap-3": "Createx 2026 Runway",
      "cap-4": "Live Gaming Tournament",
      "cap-5": "Main Stage Createx",
      "cap-6": "Colombia 5.0 Conference",
      "ref-eyebrow": "What this conference left me",
      "ref-quote": "\"Color is not decoration.<br>Color is <em>language, history, and psychology</em><br>applied to everything we design.\"",
      "ref-p1": "<p>As an ADSO student at SENA, these events confirmed something I suspected: the software we build impacts real cultures, communities, and industries. The color Sara Viloria chooses for a collection follows the same semiotic rules as the color I choose for a confirmation button in an app.</p>",
      "ref-p2": "Andrés Pisso and the Gamer Zone showed me that experience design is not a separate process from development — it is an essential part of it. And the AI lecture reminded me that the code we write has real human consequences.",
      "rc-1": "User-centered design transforms the industry: better decisions = better experiences.",
      "rc-t2": "🎨 Color Theory",
      "rc-2": "Warmth, comfort, authenticity. In times of digital acceleration, the world seeks the earthly, the tactile, and the genuine. A tone that embraces.",
      "rc-3": "Generative AI amplifies the conscious developer. Ethical responsibility is not optional.",
      "rc-t4": "Sustainable Fashion",
      "rc-4": "Createx showed that innovating in textiles and in software shares the same principle: less waste, more value.",
      "rc-t5": "Philolaus and the \"Central Fire\"",
      "rc-5": "The Pythagorean philosopher Philolaus was the first known person to postulate that the Earth revolves around a \"central fire\". This circular vision of the cosmos influenced how later thinkers organized knowledge — including color — into circular and cyclical forms.",
      "footer-text": "Academic Documentation · SENA ADSO · Bogota 2026",
      "footer-sub": "Made with attention and inspiration 🇨🇴"
    }
  };

  let currentLang = 'es';
  const langToggle = document.getElementById('langToggle');

  // Lógica de traducción por Claves
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
      document.documentElement.lang = currentLang;

      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
          element.innerHTML = translations[currentLang][key];
        }
      });
    });
  }

  // Navbar background al hacer scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Animaciones de scroll (Reveal)
  const reveals = document.querySelectorAll('.reveal');
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('in'); 
        revObs.unobserve(e.target); 
      } 
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => revObs.observe(el));

  // Filtros dinámicos de la Galería
  const gfilters = document.querySelectorAll('.gfilter');
  const gitems   = document.querySelectorAll('.g-item');

  gfilters.forEach(btn => {
    btn.addEventListener('click', () => {
      gfilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const f = btn.dataset.f;
      gitems.forEach(item => {
        const show = f === 'all' || item.dataset.f === f;
        
        item.style.transition = 'opacity .3s, transform .3s';
        item.style.opacity = show ? '1' : '0';
        item.style.transform = show ? '' : 'scale(.95)';
        item.style.pointerEvents = show ? '' : 'none';
        
        setTimeout(() => { 
          item.style.display = show ? '' : 'none'; 
        }, show ? 0 : 300);
        
        if (show) {
          setTimeout(() => { 
            item.style.opacity = '1'; 
            item.style.transform = ''; 
          }, 10);
        }
      });
    });
  });

  // Lightbox Modal para las imágenes (.g-item)
  const modal      = document.getElementById('imgModal');
  const modalImg   = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.g-item').forEach(item => {
    item.addEventListener('click', () => {
      const imgElement = item.querySelector('img');
      if (imgElement) {
        modalImg.src = imgElement.src;
        modalImg.alt = imgElement.alt;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});