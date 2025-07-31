const contatoDropdown = document.querySelector(".dropdown > a");
const dropdownParent = contatoDropdown?.parentElement;

contatoDropdown?.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdownParent.classList.toggle("show");
  }
});
