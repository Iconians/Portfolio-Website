const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
saasPlaceholder = document.querySelector('.saas-img-placeholder');

const saasContent = [
  {img: '/assets/SaaS top page.png', alt: 'portfolio picture', p: 'this is the top portion of the page which has icons that glide up into position'},
  {img: '/assets/key benefits.png', alt: 'portfolio picture', p: 'the key benefits section lists their services and when you move your arrow over a card it enlarges a little'},
  {img: '/assets/saas get started.png', alt: 'portfolio picture', p: 'this section shows a page and a button that directs you to a contact form'},
  {img: '/assets/SaaS why section.png', alt: 'portfolio picture', p: 'this section contains a video link and some key features of their service'},
  {img: '/assets/saas testimonal.png', alt: 'portfolio picture', p: 'this section contains a testimonial and the picture they have is actually a 2 part picture, the main picture is placed over the dotted background picture'},
  {img: '/assets/saas price section.png', alt: 'portfolio picture', p: 'this section is the pricing section and the different services it covers'},
];

const createSaasContent = (imgContent) => {
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
  saasPlaceholder.innerHTML = cards;
};

createSaasContent(saasContent)

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