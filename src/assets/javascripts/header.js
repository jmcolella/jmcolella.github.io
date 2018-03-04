export default () => {
  const navLinkNodes = document.getElementsByClassName('nav-link');
  const navLinks = Array.prototype.slice.apply(navLinkNodes);
  const SCROLL_OFFSET = 100;
  const SCROLL_DURATION = 750;

  const scrollToDestination = (dest) => {
    $('html, body').animate({
      scrollTop: dest.offset().top - SCROLL_OFFSET,
    }, SCROLL_DURATION);
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const destId = e.target.attributes.href.value;
      const destNode = $(destId);

      scrollToDestination(destNode);
    });
  });
};

