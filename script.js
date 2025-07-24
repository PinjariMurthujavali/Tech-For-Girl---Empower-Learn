// ========== Dark / Light Mode Toggle ==========
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle('dark-mode');

  // Change icon
  if (isDarkMode) {
    toggleButton.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
  } else {
    toggleButton.innerHTML = '<i class="bi bi-brightness-high"></i>';
  }
});

// ========== Join Form Handling ==========
const joinForm = document.getElementById('join-form');

joinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = joinForm.querySelector('input[type="text"]').value;
  const email = joinForm.querySelector('input[type="email"]').value;

  if (name && email) {
    alert(`Welcome ${name}! 🎉\nYou've successfully joined TechForGirl.`);
    joinForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// ========== Scroll Animation (Reveal on View) ==========
const sections = document.querySelectorAll('section');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach(section => {
  section.classList.add('invisible'); // Initial hidden state
  revealOnScroll.observe(section);
});

// CSS classes for scroll reveal
// Add this to your CSS file (if not already):
/*
.invisible {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
*/

// ========== Optional: Smooth Scroll Polyfill for older browsers ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
