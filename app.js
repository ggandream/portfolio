const $menuBtn = document.querySelector(".menu-btn");
const $dropdown = document.querySelector(".dropdown");

console.log($menuBtn);
console.log($dropdown);

$menuBtn.addEventListener("click", () => {
  $dropdown.classList.toggle("hidden");
  $menuBtn.classList.toggle("menu-btn--close");

  const isHidden = $menuBtn.getAttribute("aria-hidden") === "true";
  $menuBtn.setAttribute("aria-hidden", !isHidden);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu-btn")) {
    $dropdown.classList.add("hidden");
    $menuBtn.classList.remove("menu-btn--close");

    $menuBtn.setAttribute("aria-hidden", String(true));
  }
});
