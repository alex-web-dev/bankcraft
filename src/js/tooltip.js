import { computePosition, flip, shift, offset } from "@floating-ui/dom";

const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
  const tooltipBtn = tooltip.querySelector(".tooltip__btn");
  const tooltipMain = tooltip.querySelector(".tooltip__main");

  tooltip.classList.add("tooltip--show");

  tooltipBtn.addEventListener("mouseenter", function () {
    tooltip.classList.add("tooltip--active");

    computePosition(tooltip, tooltipMain, {
      placement: "bottom-start",
      middleware: [offset(8), flip({ fallbackPlacements: ["top-start", "right-start", "left-start"] }), shift({ padding: 8 })],
    }).then(({ x, y }) => {
      const tooltipData = {
        top: `${y}px`,
        [tooltip.dataset.tooltipRight !== undefined ? "right" : "left"]: `${x}px`,
      };

      Object.assign(tooltipMain.style, tooltipData);
    });
  });

  tooltipBtn.addEventListener("mouseleave", function () {
    tooltip.classList.remove("tooltip--active");
  });

  tooltipMain.addEventListener("mouseleave", function () {
    tooltip.classList.remove("tooltip--active");
  });
});
