export default function menuToggle(nav, menu, links) {
  const $nav = document.querySelector(nav);
  const $menu = document.querySelector(menu);

  const openMenu = () => {
    $nav.classList.add("active");
    $menu.setAttribute("aria-expanded", "true");
    $menu.setAttribute("aria-label", "Close menu");
  };

  const closeMenu = () => {
    $nav.classList.remove("active");
    $menu.setAttribute("aria-expanded", "false");
    $menu.setAttribute("aria-label", "Open menu");
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(menu)) {
      $nav.classList.contains("active") ? closeMenu() : openMenu();
    }

    if (
      (e.target.closest(links) && $nav.classList.contains("active")) ||
      (!e.target.closest(menu) && !e.target.closest(nav) && $nav.classList.contains("active"))
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $nav.classList.contains("active")) closeMenu();
  });
}
