window.onload = function() {
  ("use strict");
  document.addEventListener("click", navbarToggleListener);
  document.addEventListener("click", navbarHideListener);
  document.addEventListener("click", accordionToggleListener);
};

function navbarToggleListener(event) {
  const nav = document.querySelector("#global-navbar");
  const body = document.querySelector("body");

  const element = event.target;
  if (element.classList.contains("navbar-menu-icon")) {
    nav.classList.toggle("show");
    body.classList.toggle("navbar-show");
  }
}

function navbarHideListener(event) {
  const nav = document.querySelector("#global-navbar");
  const body = document.querySelector("body");

  const element = event.target;
  if (element.classList.contains("navbar-link")) {
    nav.classList.toggle("show");
    body.classList.toggle("navbar-show");
  }
}

function accordionToggleListener(event) {
  const element = event.target;
  if (element.classList.contains("accordion-item") && element.id) {
    const accordion = document.querySelector(
      `#${element.id}.accordion-content`
      );
      accordion.classList.toggle("accordion-show");
  }
}