const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

codeRadPlaceholder = document.querySelector('.coderad-img-placeholder');

const codeRadContent = [
  {img: '/assets/codeRad-top-page.avif', alt: 'portfolio picture', p: 'this is the top of the page which has a background image'},
  {img: '/assets/codeRad-card-grid.avif', alt: 'portfolio picture', p: 'this section includes 6 cards, that display what services they offer'},
  {img: '/assets/codeRad-video-link.avif', alt: 'portfolio picture', p: 'this section has a background image with a video link that will tell their story'},
  {img: '/assets/codeRad-pricing.avif', alt: 'portfolio picture', p: 'this is the pricing section, as you see they have 3 option tiers with the middle one highlighted with a faint blue background'},
  {img: '/assets/codeRad-testimonials.avif', alt: 'portfolio picture', p: 'this section contains testimonials, then you notice the blue arrow, that will take you back to the top of the page'},
];

const createCodeRadContent = (imgContent) => {
  const cards = imgContent.map(({img, alt, p}) => {
    
    return (`
    <div class="img-content-wrapper">
      <div class="img-container">
        <img src="${img}" alt="${alt}">
      </div>
      <div class="img-p">
        <p>${p}</p>
      </div>
    </div>
    `)
    
  }).join('')
  codeRadPlaceholder.innerHTML = cards;
};

createCodeRadContent(codeRadContent)

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