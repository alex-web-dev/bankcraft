const $header = document.querySelector(".header");
if ($header) {
  window.addEventListener("load", () => {
    scrollHandler($header);
    window.addEventListener("scroll", () => scrollHandler($header));
  });
}

function scrollHandler($header) {
  if (window.scrollY >= 10 && !$header.classList.contains("header--scroll")) {
    $header.classList.add("header--scroll");
  } else if (window.scrollY < 10 && $header.classList.contains("header--scroll")) {
    $header.classList.remove("header--scroll");
  }
}
