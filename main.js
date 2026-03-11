/* ─── THEME ─── */
const saved = localStorage.getItem('vs-theme') || 'light';
document.documentElement.setAttribute('data-theme', saved);

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('vs-theme', next);
}

/* ─── HAMBURGER ─── */
function toggleMenu() {
  const menu = document.getElementById("menu");
  const ham = document.getElementById("hamburger");
  menu.classList.toggle("active");
  ham.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
}
function closeMenu() {
  const menu = document.getElementById("menu");
  document.getElementById("hamburger").innerHTML = "☰";
  menu.classList.remove("active");
}
document.addEventListener("click", (e) => {
  const menu = document.getElementById("menu");
  const ham = document.getElementById("hamburger");
  if (!menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove("active");
    ham.innerHTML = "☰";
  }
});

/* ─── SCROLL FADE IN ─── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 75);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* ─── COUNTER ANIMATION ─── */
function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 1400;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(eased * target);
    el.innerHTML = val + '<span>' + suffix + '</span>';
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num[data-target]').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target, '+');
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsRow = document.querySelector('.stats-row');
if (statsRow) statsObserver.observe(statsRow);

/* ─── NAVBAR ACTIVE LINK ─── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a:not(.btn-dept)");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute("id");
  });
  navLinks.forEach(link => {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.style.color = isActive ? 'var(--teal)' : '';
    link.style.background = isActive ? 'var(--chip-bg)' : '';
  });
});
