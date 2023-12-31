$(document).ready(function() {
  $('.nav__link').click(function() {
    $('.nav__link').removeClass('active-link');  
    $(this).addClass('active-link');
  });
});

// Dark Theme Trigger

$(document).ready(function() {
  const themeButton = $('#theme-button');
  const lightTheme = 'light-theme';
  const iconTheme = 'bx-sun';

  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () => $('body').hasClass(lightTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.hasClass(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    $('body').toggleClass(lightTheme, selectedTheme === 'dark');
    themeButton.toggleClass(iconTheme, selectedIcon === 'bx bx-moon');
  }

  // Activate / deactivate the theme manually with the button
  themeButton.on('click', function() {
    // Add or remove the dark / icon theme
    $('body').toggleClass(lightTheme);
    themeButton.toggleClass(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
});

// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal('.home__data');
sr.reveal('.home__handle', {delay: 700});
sr.reveal('.home__social, .home_scroll', {delay:900, origin: 'bottom'});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach(mc => {
  mc.addEventListener('click', () => {
    modalViews.forEach(mv => {
      mv.classList.remove('active-modal')
    })
  })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
})

/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48
    }
  }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
