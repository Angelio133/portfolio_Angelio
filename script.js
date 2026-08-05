const root = document.documentElement;
const header = document.querySelector('#siteHeader');
const themeButton = document.querySelector('#themeButton');
const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const year = document.querySelector('#year');

const savedTheme = localStorage.getItem('angelio-theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.dataset.theme = savedTheme;
}

function applyThemeColor() {
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute('content', root.dataset.theme === 'light' ? '#f4f6fb' : '#07080d');
}

function closeMenu() {
  menuButton?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  mobileMenu?.classList.remove('is-open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
}

themeButton?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('angelio-theme', root.dataset.theme);
  applyThemeColor();
});

menuButton?.addEventListener('click', () => {
  const open = !mobileMenu?.classList.contains('is-open');
  menuButton.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu?.classList.toggle('is-open', open);
  mobileMenu?.setAttribute('aria-hidden', String(!open));
});

mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 980) closeMenu(); });
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 18), { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
if (year) year.textContent = new Date().getFullYear();
applyThemeColor();
