import { getBodyLockedBy, lockBody, unlockBody } from "./helpers";

const $openBtns = document.querySelectorAll(".js-open-popup");
$openBtns.forEach(($btn) => {
  $btn.addEventListener("click", () => {
    const name = $btn.dataset.popupName;
    const $popup = document.querySelector(`.popup[data-popup-name="${name}"`);
    if (!name || !$popup || $popup.classList.contains("popup--active")) {
      return;
    }

    openPopup($popup);
  });
});

const $popups = document.querySelectorAll(".popup");
window.addEventListener("load", () => {
  $popups.forEach(($popup) => $popup.classList.add("popup--show"));
});

$popups.forEach(($popup) => {
  const $closeBtns = $popup.querySelectorAll(".js-close-popup");
  $closeBtns.forEach(($closeBtn) => {
    $closeBtn?.addEventListener("click", () => closePopup($popup));
  });

  const $backdrop = $popup.querySelector(".popup__backdrop");
  $backdrop?.addEventListener("click", () => closePopup($popup));

  const $dialog = $popup.querySelector(".popup__dialog");
  $dialog?.addEventListener("click", (e) => {
    if (e.target === $dialog) {
      closePopup($popup);
    }
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-open-popup") || e.target.closest(".js-open-popup")) {
    return;
  }

  const $activePopup = document.querySelector(".popup--active");
  const isInner = e.target.closest(".popup") && !e.target.classList.contains("popup");
  if (!$activePopup || isInner) {
    return;
  }

  closePopup($activePopup);
});

function closePopup($popup) {
  $popup.classList.remove("popup--active");
  $popup.addEventListener(
    "transitionend",
    () => {
      if (getBodyLockedBy() === `popup-${$popup.dataset.popupName}`) {
        unlockBody();
      }
    },
    { once: true }
  );
}

function openPopup($popup) {
  $popup.classList.add("popup--active");
  if ($popup.dataset.popupLock === "no" || ($popup.dataset.popupLock === "mobile" && window.innerWidth >= 768)) {
    return;
  }

  if (!getBodyLockedBy() && $popup.dataset.popupScrollable === undefined) {
    lockBody(`popup-${$popup.dataset.popupName}`);
  }
}
