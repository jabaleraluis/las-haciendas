export default function themeToggle(toggle, icons) {
  const $toggle = document.querySelector(toggle);
  const $icons = document.querySelectorAll(icons);

  function setTheme(theme) {
    if (!["light", "dark"].includes(theme)) return;

    document.documentElement.classList.toggle("dark", theme === "dark");

    $toggle.dataset.theme = theme;

    $icons.forEach((icon) => {
      icon.classList.toggle("active", icon.dataset.theme === theme);
    });

    localStorage.setItem("theme", theme);
  }

  setTheme(localStorage.getItem("theme") || "light");

  $icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      setTheme(icon.dataset.theme);
    });
  });
}
