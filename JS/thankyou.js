const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);


// Modal/full site modal "open buttons"
for (const elm of openModal) {
  elm.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
};

for (const elm of closeModal) {
  elm.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove(isVisible);
  })
};

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modals.is-visible').classList.remove(isVisible);
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modals.is-visible').classList.remove(isVisible);
  }
});

const navbutton = document.querySelector('button[aria-expanded');

function toggleNav ({target}) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navbutton.setAttribute('aria-expanded', !expanded);
}

navbutton.addEventListener('click', toggleNav);