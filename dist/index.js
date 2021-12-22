//navigation menu

const navLinks = document.querySelector('.landing__nav__menu__links'),
      hamburgerMenu = document.querySelector('.landing__nav__menu__hamburger');

hamburgerMenu.addEventListener('click', () => {
    const visibility = navLinks.getAttribute('data-visible');

    if (visibility === 'false') {
        navLinks.setAttribute('data-visible', true);

        hamburgerMenu.setAttribute('aria-expanded', true);
    } else {
        navLinks.setAttribute('data-visible', false);

        hamburgerMenu.setAttribute('aria-expanded', false);
    }
});

// /navigation menu

// review slider

const items = document.getElementsByClassName('reviews__items__card'),
      pick = document.getElementsByClassName('reviews__picker__pick');

let currentReview = 0;

pick[0].addEventListener('click', () => {
    if (currentReview != 0) {
        items[0].classList.add('active-review');
        pick[0].classList.add('active-input');

        items[currentReview].classList.remove('active-review');
        pick[currentReview].classList.remove('active-input');
    }

    currentReview = 0;
});

pick[1].addEventListener('click', () => {
    if (currentReview != 1) {
        items[1].classList.add('active-review');
        pick[1].classList.add('active-input');

        items[currentReview].classList.remove('active-review');
        pick[currentReview].classList.remove('active-input');
    }

    currentReview = 1;
});

pick[2].addEventListener('click', () => {
    if (currentReview != 2) {
        items[2].classList.add('active-review');
        pick[2].classList.add('active-input');

        items[currentReview].classList.remove('active-review');
        pick[currentReview].classList.remove('active-input');
    }

    currentReview = 2;
});

pick[3].addEventListener('click', () => {
    if (currentReview != 3) {
        items[3].classList.add('active-review');
        pick[3].classList.add('active-input');

        items[currentReview].classList.remove('active-review');
        pick[currentReview].classList.remove('active-input');
    }

    currentReview = 3;
});

// /review slider