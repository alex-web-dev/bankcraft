const $backdrop = document.querySelector(".backdrop");
const $hasChildrenItems = document.querySelectorAll(".menu__item--has-children");
$hasChildrenItems.forEach(($item) => {
  const $link = $item.querySelector(".menu__link");

  $link.addEventListener("click", () => {
    if ($item.classList.contains("menu__item--active")) {
      $backdrop?.classList.remove("backdrop--active");
      $item.classList.remove("menu__item--active");
    } else {
      $backdrop?.classList.add("backdrop--active");
      $item.classList.add("menu__item--active");
    }
  });
});

window.addEventListener("load", () => $backdrop?.classList.add("backdrop--show"));

window.addEventListener("click", (e) => {
  const $activeItem = document.querySelector(".menu__item--active");
  const isInner = e.target.closest(".menu__item") && !e.target.classList.contains("menu__item");
  const isOpenPopupBtn = e.target.closest(".js-open-popup");

  if (!isOpenPopupBtn && (!$activeItem || isInner)) {
    return;
  }

  $backdrop?.classList.remove("backdrop--active");
  $activeItem?.classList.remove("menu__item--active");
});
