export default function themeToggle(toggle) {
  const $toggle = document.querySelectorAll(toggle);

  function applyTheme(theme) {
    if (!["light", "dark"].includes(theme)) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    $toggle.forEach((toggle) => {
      toggle.dataset.theme = theme;

      toggle.querySelectorAll("[data-theme]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.theme === theme);
      });
    });
  }

  applyTheme(localStorage.getItem("theme") || "light");

  $toggle.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-theme]");
      if (!btn) return;

      applyTheme(btn.dataset.theme);
    });
  });
}
