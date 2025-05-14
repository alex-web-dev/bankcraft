const $anchors = document.querySelectorAll('a[href*="#"]');
$anchors.forEach($anchor => {
  $anchor.addEventListener('click', e => {
    const id = $anchor.getAttribute('href');
    if (id[0] === '#') {
      e.preventDefault();
    }

    if (id === '#') {
      return;
    }

    const $elem = document.querySelector(id);
    if ($elem) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const additionOffset = 12;
      const offsetTop = $elem.getBoundingClientRect().top - headerHeight - additionOffset;
      window.scrollBy({ top: (offsetTop), left: 0, behavior: 'smooth' });
    }
  });
});