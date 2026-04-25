document.documentElement.classList.add('js');

const portfolioData = {
  profile: {
    name: 'Sujal Kushwaha',
    status: 'Available for work',
    linkedin: 'https://www.linkedin.com/in/sujal-kushwaha-925089294/',
    socials: [
      {
        label: 'Email',
        href: 'mailto:sujalkushwaha633@gmail.com',
        icon: 'email',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sujal-kushwaha-925089294/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/sujalkushwaha747-coder',
        icon: 'github',
      },
    ],
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Portfolio Showcase / Full-Stack Developer',
    title: 'Sujal Kushwaha. Full-stack web developer.',
    intro:
      'Computer Science undergraduate focused on building modern web products with clean interfaces, strong backend structure, and practical problem solving. My work blends Java, DSA, React, Node.js, and AI-based features into projects that feel useful and polished.',
    actions: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'Contact Me', href: '#contact', variant: 'secondary' },
    ],
    pills: [
      'Java + DSA',
      'React + Vite',
      'Node + Express',
      'JWT + OAuth',
      'MySQL + Prisma',
    ],
    cardTitle: 'Focused on full-stack products, product-minded UI, and building projects that feel complete.',
    facts: [
      { label: 'Role', value: 'Full-Stack Developer' },
      { label: 'Education', value: 'B.Tech Computer Science' },
      { label: 'College', value: 'IMS Engineering College' },
      { label: 'Location', value: 'Ghaziabad, Uttar Pradesh' },
    ],
    quickLinks: [
      {
        label: 'Email',
        value: 'sujalkushwaha633@gmail.com',
        href: 'mailto:sujalkushwaha633@gmail.com',
        icon: 'email',
      },
      {
        label: 'LinkedIn',
        value: 'sujal-kushwaha-925089294',
        href: 'https://www.linkedin.com/in/sujal-kushwaha-925089294/',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        value: 'sujalkushwaha747-coder',
        href: 'https://github.com/sujalkushwaha747-coder',
        icon: 'github',
      },
    ],
  },
  projects: [
    {
      badge: 'Featured',
      title: 'Code Buddy',
      subtitle: 'AI Code Review Platform',
      meta: 'March 2026 - April 2026',
      tech: ['React', 'TypeScript', 'Express', 'Prisma', 'MySQL', 'JWT', 'GitHub OAuth'],
      bullets: [
        'Built a full-stack AI code review platform for analyzing pasted code and GitHub repository files.',
        'Integrated JWT authentication, GitHub OAuth, saved review history, and user-specific dashboards.',
        'Added LLM-based review generation, custom response parsing, and local code metrics insights.',
      ],
      link: 'https://github.com/sujalkushwaha747-coder/Code-Buddy',
      tone: 'primary',
    },
    {
      badge: 'Popular',
      title: 'Online Parking System',
      subtitle: 'Parking Management System',
      meta: 'December 2025 - January 2026',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Google Maps', 'GPS'],
      bullets: [
        'Developed a full-stack online parking system for search, reservation, and payment workflows.',
        'Implemented slot availability tracking with live updates to help prevent double-booking.',
        'Integrated Google Maps and GPS features for nearby parking discovery and navigation.',
      ],
      link: 'https://github.com/ManikantVerma/Parking',
      tone: 'accent',
    },
    {
      badge: '',
      title: 'Admin-Hub',
      subtitle: 'Admin Dashboard',
      meta: 'October 2025',
      tech: ['React', 'JavaScript', 'TypeScript', 'Charts', 'Responsive UI'],
      bullets: [
        'Created a SaaS-style admin dashboard with responsive layout and collapsible sidebar navigation.',
        'Built KPI cards, charts, searchable tables, sorting, pagination, and dynamic mock-data rendering.',
        'Focused on reusable components and modular code structure for scalability and maintainability.',
      ],
      link: 'https://github.com/sujalkushwaha747-coder/Admin-Hub',
      tone: 'neutral',
    },
  ],
  about: {
    title: 'About',
    text: [
      'I enjoy turning technical ideas into products that feel modern, useful, and clear to interact with. My strongest interests are full-stack web development, backend structure, and interfaces that look polished instead of generic.',
      'Alongside development, I keep strengthening my Java and DSA foundation so I can build with better logic, cleaner architecture, and stronger long-term problem solving.',
    ],
  },
  education: {
    title: 'Education',
    degree: 'B.Tech in Computer Science',
    institution: 'IMS Engineering College',
    duration: 'October 2023 - July 2027',
    gpa: '7.2 / 10',
    subjects: 'DSA, DBMS, OOPs, Operating Systems, Computer Networks',
  },
  certificates: [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle University',
      date: 'October 2025',
    },
    {
      title: 'Deloitte Cyber Job Simulation',
      issuer: 'Forage',
      date: 'August 2025',
    },
  ],
  skills: [
    {
      title: 'Programming Languages',
      text: 'Languages and problem-solving tools I use for logic, scripting, and structured development.',
      items: [
        {
          name: 'C',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          name: 'DSA',
          fallback: 'DSA',
        },
      ],
    },
    {
      title: 'Frontend',
      text: 'Frontend tools for building responsive interfaces, fast workflows, and polished user experiences.',
      items: [
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'Vite',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
        },
        {
          name: 'Tailwind CSS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
          name: 'HTML5',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          name: 'CSS3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          name: 'Monaco',
          icon: 'https://cdn.simpleicons.org/monacoeditor/white',
        },
      ],
    },
    {
      title: 'Backend',
      text: 'Backend technologies for APIs, request handling, routing, and full-stack application structure.',
      items: [
        {
          name: 'Node.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'Express',
          icon: 'https://cdn.simpleicons.org/express/white',
        },
        {
          name: 'REST APIs',
          fallback: 'API',
        },
      ],
    },
    {
      title: 'Databases',
      text: 'Database and ORM tools I use for data persistence, schema work, and application storage layers.',
      items: [
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'Prisma',
          icon: 'https://cdn.simpleicons.org/prisma/white',
        },
      ],
    },
    {
      title: 'Authentication',
      text: 'Auth technologies for secure sessions, protected workflows, and account-based product features.',
      items: [
        {
          name: 'JWT',
          fallback: 'JWT',
        },
        {
          name: 'GitHub OAuth',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        },
      ],
    },
    {
      title: 'Tools and Frameworks',
      text: 'Tools that support version control, debugging, testing, editing, and everyday development speed.',
      items: [
        {
          name: 'Git',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          name: 'GitHub',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        },
        {
          name: 'VS Code',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        {
          name: 'Postman',
          icon: 'https://cdn.simpleicons.org/postman/FF6C37',
        },
        {
          name: 'IntelliJ',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
        },
      ],
    },
  ],
  contact: {
    title: 'Let’s connect for internships, freelance projects, or opportunities to build useful products.',
    blurb:
      'I am looking for opportunities where I can contribute, keep improving, and work on meaningful products with strong design and engineering standards.',
    links: [
      {
        label: 'Phone',
        value: '+91-6387636745',
        href: 'tel:+916387636745',
        icon: 'phone',
      },
      {
        label: 'Email',
        value: 'sujalkushwaha633@gmail.com',
        href: 'mailto:sujalkushwaha633@gmail.com',
        icon: 'email',
      },
      {
        label: 'GitHub',
        value: 'github.com/sujalkushwaha747-coder',
        href: 'https://github.com/sujalkushwaha747-coder',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/sujal-kushwaha-925089294',
        href: 'https://www.linkedin.com/in/sujal-kushwaha-925089294/',
        icon: 'linkedin',
      },
    ],
  },
  footerText: 'Full-stack portfolio focused on product quality, practical systems, and modern UI.',
};

const profileName = document.getElementById('profile-name');
const profileStatus = document.getElementById('profile-status');
const topSocials = document.getElementById('top-socials');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');
const themeToggleLabel = document.getElementById('theme-toggle-label');
const navigation = document.getElementById('site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const heroEyebrow = document.getElementById('hero-eyebrow');
const heroTitle = document.getElementById('hero-title');
const heroIntro = document.getElementById('hero-intro');
const heroActions = document.getElementById('hero-actions');
const heroPills = document.getElementById('hero-pills');
const heroCardTitle = document.getElementById('hero-card-title');
const heroCardFacts = document.getElementById('hero-card-facts');
const heroCardLinks = document.getElementById('hero-card-links');
const projectsGrid = document.getElementById('projects-grid');
const aboutCard = document.getElementById('about-card');
const educationCard = document.getElementById('education-card');
const certificatesCard = document.getElementById('certificates-card');
const skillsGrid = document.getElementById('skills-grid');
const contactTitle = document.getElementById('contact-title');
const contactBlurb = document.getElementById('contact-blurb');
const contactLinks = document.getElementById('contact-links');
const footerYear = document.getElementById('footer-year');
const footerCopy = document.getElementById('footer-copy');
const themeStorageKey = 'self-portfolio-theme';

const iconMap = {
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
      />
      <path
        d="m5.2 7.3 6.07 5.03a1.15 1.15 0 0 0 1.46 0L18.8 7.3"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
      />
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.8 8.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm-1.2 2h2.4V18H5.6Zm4.3 0h2.3v1.04h.03c.32-.58 1.1-1.2 2.27-1.2 2.42 0 2.87 1.6 2.87 3.69V18h-2.4v-3.56c0-.85-.02-1.95-1.2-1.95-1.2 0-1.38.93-1.38 1.89V18H9.9Z"
        fill="currentColor"
      />
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-1.9c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.72 1.16 1.72 1.16 1 .1 1.95.78 2.38 1.92.9.15 1.8-.08 2.52-.64.07-.72.36-1.38.82-1.93-2.48-.28-5.08-1.24-5.08-5.54 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.12-2.98 0 0 .95-.3 3.12 1.16a10.9 10.9 0 0 1 5.68 0c2.16-1.46 3.1-1.16 3.1-1.16.64 1.55.25 2.7.13 2.98.72.78 1.16 1.78 1.16 3 0 4.31-2.6 5.25-5.09 5.53.4.35.76 1.05.76 2.13v3.15c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"
        fill="currentColor"
      />
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.14 4.5h2.12c.34 0 .64.24.72.57l.77 3.11a.75.75 0 0 1-.23.75l-1.44 1.22a12.6 12.6 0 0 0 4.78 4.78l1.22-1.44a.75.75 0 0 1 .75-.23l3.11.77c.33.08.57.38.57.72v2.12a1 1 0 0 1-1 1A14.86 14.86 0 0 1 6.14 5.5a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
      />
    </svg>
  `,
  sun: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8" />
      <path
        d="M12 2.8v2.1M12 19.1v2.1M21.2 12h-2.1M4.9 12H2.8M18.5 5.5 17 7M7 17l-1.5 1.5M18.5 18.5 17 17M7 7 5.5 5.5"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="1.8"
      />
    </svg>
  `,
  moon: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M19.2 14.9A7.7 7.7 0 0 1 9.1 4.8a8.7 8.7 0 1 0 10.1 10.1Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
      />
    </svg>
  `,
};

const getLinkAttributes = (href) =>
  href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : '';

const createIconMarkup = (icon, className) =>
  iconMap[icon] ? `<span class="${className}">${iconMap[icon]}</span>` : '';

const createHeroTitleMarkup = (text) =>
  text
    .split(' ')
    .map(
      (word, index) =>
        `<span class="hero-word" style="--word-index:${index}">${word}</span>`
    )
    .join('');

const renderHeader = () => {
  profileName.textContent = portfolioData.profile.name;
  profileStatus.textContent = portfolioData.profile.status;

  topSocials.innerHTML = portfolioData.profile.socials
    .map(
      ({ label, href, icon }) => `
        <a
          class="social-link"
          href="${href}"
          ${getLinkAttributes(href)}
          aria-label="${label}"
          title="${label}"
        >
          ${createIconMarkup(icon, 'social-link__icon')}
        </a>
      `
    )
    .join('');

  navigation.innerHTML = portfolioData.navigation
    .map(
      ({ label, href }) => `
        <a href="${href}" data-section-link>${label}</a>
      `
    )
    .join('');
};

const renderHero = () => {
  heroEyebrow.textContent = portfolioData.hero.eyebrow;
  heroTitle.innerHTML = createHeroTitleMarkup(portfolioData.hero.title);
  heroIntro.textContent = portfolioData.hero.intro;

  heroActions.innerHTML = portfolioData.hero.actions
    .map(
      ({ label, href, variant }) => `
        <a class="hero-button hero-button--${variant}" href="${href}">${label}</a>
      `
    )
    .join('');

  heroPills.innerHTML = portfolioData.hero.pills
    .map((item) => `<span class="hero-pill">${item}</span>`)
    .join('');

  heroCardTitle.textContent = portfolioData.hero.cardTitle;

  heroCardFacts.innerHTML = portfolioData.hero.facts
    .map(
      ({ label, value }) => `
        <article class="fact-card">
          <small>${label}</small>
          <strong>${value}</strong>
        </article>
      `
    )
    .join('');

  heroCardLinks.innerHTML = portfolioData.hero.quickLinks
    .map(
      ({ label, value, href, icon }) => `
        <a class="mini-link" href="${href}" ${getLinkAttributes(href)}>
          <span class="mini-link__row">
            ${createIconMarkup(icon, 'mini-link__icon')}
            <span class="mini-link__copy">
              <small>${label}</small>
              <strong>${value}</strong>
            </span>
          </span>
        </a>
      `
    )
    .join('');
};

const renderProjects = () => {
  projectsGrid.innerHTML = portfolioData.projects
    .map(
      ({ badge, title, subtitle, meta, tech, bullets, link, tone }) => `
        <article class="project-card project-card--${tone}" data-reveal>
          <div class="project-card__top">
            <div>
              <p class="project-subtitle">${subtitle}</p>
              <h3>${title}</h3>
            </div>
            ${badge ? `<span class="project-badge">${badge}</span>` : ''}
          </div>
          <p class="project-meta">${meta}</p>
          <ul class="project-bullets">
            ${bullets.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <div class="project-tech">
            ${tech.map((item) => `<span>${item}</span>`).join('')}
          </div>
          <a class="project-button" href="${link}" target="_blank" rel="noreferrer">View project</a>
        </article>
      `
    )
    .join('');
};

const renderStory = () => {
  aboutCard.innerHTML = `
    <p class="card-kicker">${portfolioData.about.title}</p>
    <h3>Building portfolio work around useful products, clean UI, and strong implementation.</h3>
    ${portfolioData.about.text.map((item) => `<p>${item}</p>`).join('')}
  `;

  educationCard.innerHTML = `
    <p class="card-kicker">${portfolioData.education.title}</p>
    <h3>${portfolioData.education.degree}</h3>
    <p>${portfolioData.education.institution}</p>
    <p>${portfolioData.education.duration}</p>
    <div class="education-stats">
      <span><strong>GPA</strong>${portfolioData.education.gpa}</span>
      <span><strong>Core</strong>${portfolioData.education.subjects}</span>
    </div>
  `;

  certificatesCard.innerHTML = `
    <p class="card-kicker">Certificates</p>
    <h3>Certifications that support my current technical direction.</h3>
    <div class="certificate-list">
      ${portfolioData.certificates
        .map(
          ({ title, issuer, date }) => `
            <article class="certificate-item">
              <strong>${title}</strong>
              <span>${issuer}</span>
              <small>${date}</small>
            </article>
          `
        )
        .join('')}
    </div>
  `;
};

const renderSkills = () => {
  skillsGrid.innerHTML = portfolioData.skills
    .map(
      ({ title, text, items }) => `
        <article class="skill-card" data-reveal>
          <h3>${title}</h3>
          <p>${text}</p>
          <div class="skill-icons">
            ${items
              .map(
                ({ name, icon, fallback }) => `
                  <div class="skill-chip">
                    ${
                      icon
                        ? `<span class="skill-chip__icon"><img src="${icon}" alt="${name} logo" loading="lazy" /></span>`
                        : `<span class="skill-chip__icon skill-chip__icon--fallback">${fallback || name.slice(0, 2)}</span>`
                    }
                    <span class="skill-chip__label">${name}</span>
                  </div>
                `
              )
              .join('')}
          </div>
        </article>
      `
    )
    .join('');
};

const renderContact = () => {
  contactTitle.textContent = portfolioData.contact.title;
  contactBlurb.textContent = portfolioData.contact.blurb;

  contactLinks.innerHTML = portfolioData.contact.links
    .map(
      ({ label, value, href, icon }) => `
        <a class="contact-link" href="${href}" ${getLinkAttributes(href)}>
          <span class="contact-link__row">
            ${createIconMarkup(icon, 'contact-link__icon')}
            <span class="contact-link__copy">
              <small>${label}</small>
              <strong>${value}</strong>
            </span>
          </span>
        </a>
      `
    )
    .join('');
};

const renderFooter = () => {
  footerYear.textContent = new Date().getFullYear();
  footerCopy.textContent = `${portfolioData.profile.name}. ${portfolioData.footerText}`;
};

const setupMobileMenu = () => {
  if (!menuToggle) {
    return;
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navigation.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
};

const setupReveal = () => {
  const revealables = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    revealables.forEach((element) => element.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -32px 0px',
    }
  );

  revealables.forEach((element) => observer.observe(element));
};

const setupActiveSection = () => {
  const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
  const sections = [...document.querySelectorAll('main section[id]')];

  if (!('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const targetId = `#${entry.target.id}`;
        sectionLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === targetId);
        });
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
};

const updateThemeToggle = (theme) => {
  if (!themeToggle || !themeToggleIcon || !themeToggleLabel) {
    return;
  }

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const nextLabel = nextTheme === 'light' ? 'Light Mode' : 'Dark Mode';

  themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  themeToggle.setAttribute('aria-label', `Switch to ${nextLabel}`);
  themeToggleIcon.innerHTML = iconMap[nextTheme === 'light' ? 'sun' : 'moon'];
  themeToggleLabel.textContent = nextLabel;
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  updateThemeToggle(theme);

  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch (error) {
    console.warn('Theme preference could not be saved.', error);
  }
};

const setupTheme = () => {
  if (!themeToggle) {
    return;
  }

  let savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem(themeStorageKey);
  } catch (error) {
    console.warn('Theme preference could not be read.', error);
  }

  const systemPrefersLight =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme =
    savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : systemPrefersLight
        ? 'light'
        : 'dark';

  setTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  });
};

renderHeader();
renderHero();
renderProjects();
renderStory();
renderSkills();
renderContact();
renderFooter();
setupMobileMenu();
setupReveal();
setupActiveSection();
setupTheme();
