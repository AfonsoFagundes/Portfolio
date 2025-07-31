const toggleLang = document.getElementById("toggleLang");
let languageSwitcher = true; // true = pt, false = en

toggleLang.addEventListener("click", () => {
  languageSwitcher = !languageSwitcher;

  const elements = document.querySelectorAll("[data-pt][data-en]");

  elements.forEach((el) => {
    el.innerHTML = languageSwitcher ? el.dataset.pt : el.dataset.en;
  });

  toggleLang.innerHTML = languageSwitcher ? "EN" : "PT";
});
