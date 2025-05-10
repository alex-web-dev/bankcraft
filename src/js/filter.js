import { closeDropdown } from "./dropdown";

const $catalogFilters = document.querySelectorAll(".filter");
$catalogFilters.forEach(($catalogFilter) => {
  const $btn = $catalogFilter.querySelector(".filter__btn");
  const $btnValue = $btn.querySelector(".filter__btn-value");
  const $checkboxesInputs = $catalogFilter.querySelectorAll(".filter-menu__item-input");
  const $dropdown = $catalogFilter.closest(".dropdown");

  const closeWhenSelected = $catalogFilter.dataset.selectCloseDropdown !== undefined;

  $checkboxesInputs.forEach(($checkboxInput) => {
    $checkboxInput.addEventListener("change", () => {
      if (closeWhenSelected) closeDropdown($dropdown);
      if ($checkboxInput.dataset.label) $btnValue.innerHTML = $checkboxInput.dataset.label;
    });
  });
});
