/* ===== GET ELEMENTS ===== */
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const darkBtn = document.getElementById('darkBtn');
const scrollBtn = document.getElementById('scrollUp');
const typedEl = document.getElementById('typedText');
const contactForm = document.getElementById('contactForm');

/* ===== MOBILE MENU TOGGLE ===== */
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

/* close menu when a link is clicked */
navMenu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

/* ===== DARK MODE TOGGLE ===== */
/* check localStorage for saved theme on page load */
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

darkBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');

  /* change icon based on mode */
  if (isDark) {
    darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }

  /* save preference */
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

/* ===== SCROLL TO TOP ===== */
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== TYPING TEXT ANIMATION ===== */
const words = ['Frontend Developer', 'Web Design Enthusiast', 'Problem Solver'];
let wordIdx = 0;
let charIdx = 0;
let deleting = false;

function typeEffect() {
  const current = words[wordIdx];

  if (!deleting) {
    /* typing forward */
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
    setTimeout(typeEffect, 90);
  } else {
    /* deleting backward */
    typedEl.textContent = current.substring(0, charIdx);
    charIdx--;
    if (charIdx < 0) {
      deleting = false;
      charIdx = 0;
      wordIdx = (wordIdx + 1) % words.length;
      setTimeout(typeEffect, 400);
      return;
    }
    setTimeout(typeEffect, 40);
  }
}

/* start the typing animation */
typeEffect();

/* ===== CONTACT FORM ===== */
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Thanks ' + name + '! Your message was sent successfully.');
    contactForm.reset();
  }
});