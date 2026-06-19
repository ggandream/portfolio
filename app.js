// iOS Safari's viewport units (vh/dvh/svh) don't always fill the screen,
// leaving a gap at the bottom. window.innerHeight gives the true visible
// height, so expose it as --app-height and update it when the size changes.
const setAppHeight = () => {
  document.documentElement.style.setProperty(
    "--app-height",
    `${window.innerHeight}px`
  );
};
setAppHeight();
window.addEventListener("resize", setAppHeight);
window.addEventListener("orientationchange", setAppHeight);

const $menuBtn = document.querySelector(".menu-btn");
const $dropdown = document.querySelector(".dropdown");

console.log($menuBtn);
console.log($dropdown);

$menuBtn.addEventListener("click", () => {
  $dropdown.classList.toggle("hidden");
  $menuBtn.classList.toggle("menu-btn--close");

  const isExpanded = $menuBtn.getAttribute("aria-expanded") === "true";
  $menuBtn.setAttribute("aria-expanded", !isExpanded);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu-btn")) {
    $dropdown.classList.add("hidden");
    $menuBtn.classList.remove("menu-btn--close");

    $menuBtn.setAttribute("aria-expanded", String(true));
  }
});
