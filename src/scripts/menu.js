export default function menuToggle(nav, menu, link) {
  const $nav = document.querySelector(nav);
  // const $links = document.querySelectorAll(link);
  const $menu = document.querySelector(menu);

  $menu.addEventListener("click", (e) => {
    $nav.classList.toggle("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $nav.classList.contains("active")) {
      $menu.click();
    }
  });
}
