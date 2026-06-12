const $menuBtn = document.querySelector(".menu-btn");
const $dropdown = document.querySelector(".dropdown");

console.log($menuBtn);
console.log($dropdown);

$menuBtn.addEventListener("click", () => {
  $dropdown.classList.toggle("hidden");
  $menuBtn.classList.toggle("menu-btn--close");
});
