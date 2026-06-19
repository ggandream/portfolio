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
    $dropdown.classList.add("expanded");
    $menuBtn.classList.remove("menu-btn--close");

    $menuBtn.setAttribute("aria-expanded", String(true));
  }
});
