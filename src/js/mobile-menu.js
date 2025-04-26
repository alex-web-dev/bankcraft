import { lockBody, unlockBody } from "./helpers";

const $menu = document.querySelector(".mobile-menu");
const delay = 600;

if ($menu) {
  const $menuToggleBtns = document.querySelectorAll(".js-toggle-menu");
  $menuToggleBtns.forEach(($menuToggle) => {
    $menuToggle.addEventListener("click", () => {
      if (!$menu.classList.contains("mobile-menu--active")) {
        open($menu, $menuToggleBtns);
      } else {
        close($menu, $menuToggleBtns);
      }

      if ($menu.classList.contains("mobile-menu--show")) {
        $menu.classList.remove("mobile-menu--show");
      } else {
        setTimeout(() => $menu.classList.add("mobile-menu--show"), delay);
      }
    });
  });

  const $closeMenuBtns = document.querySelectorAll(".js-close-menu");
  $closeMenuBtns.forEach(($closeBtn) => {
    $closeBtn.addEventListener("click", () => close($menu, $menuToggleBtns));
  });
}

function open($menu, $menuToggleBtns) {
  $menu?.classList.add("mobile-menu--active");
  $menuToggleBtns.forEach(($menuToggle) => $menuToggle.classList.add("menu-toggle--active"));
  lockBody("mobile-menu");
}

function close($menu, $menuToggleBtns) {
  $menu?.classList.remove("mobile-menu--active");
  $menuToggleBtns.forEach(($menuToggle) => $menuToggle.classList.remove("menu-toggle--active"));
  unlockBody();
}
