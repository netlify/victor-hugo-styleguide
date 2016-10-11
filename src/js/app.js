// JS Goes here - ES6 supported
Array.from(document.querySelectorAll(".styleguide-example-toggle")).forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    el.parentElement.classList.toggle("styleguide-example-collapsed");
  }, false);
});
