import themeToggle from "./themeToggle";
import menuToggle from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  themeToggle(".theme__toggle");
  menuToggle(".navbar", ".navbar__togle-btn", "navbar__links .link a");
});
