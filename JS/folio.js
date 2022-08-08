const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

folioPlaceholder = document.querySelector('.folio-img-placeholder');

const folioContent = [
  {img: '/assets/folio-top-page.avif', alt: 'portfolio picture', p: 'this is the top of the page which has a very slight background image, if you look for the faint lines, those are actually a background image'},
  {img: '/assets/folio-card-picture.avif', alt: 'portfolio picture', p: 'these picture cards in the image are all clickable and will pull up more information then you can filter the card by category or by using the search bar'},
  {img: '/assets/folio-dark-theme.avif', alt: 'portfolio picture', p: 'this is the same card section but now the dark theme has been applied'},
  {img: '/assets/folio-card-section2.avif', alt: 'portfolio picture', p: 'this is the same card section but now the category is web development instead of all work'},
  {img: '/assets/folio-testimonial.avif', alt: 'portfolio picture', p: 'this is the testimonial section which is a carousel set up so you can click on the arrows and go from one to another'},
];

const createFolioContent = (imgContent) => {
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
  folioPlaceholder.innerHTML = cards;
};

createFolioContent(folioContent)

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