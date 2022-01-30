const stickyNav = () => {
  const headerSection = document.querySelector(".header");
  const observer = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      const navBar = document.querySelector(".nav");

      !ent.isIntersecting
        ? navBar.classList.add("nav--scrolling")
        : navBar.classList.remove("nav--scrolling");
    },
    { root: null, threshold: 0, rootMargin: "500px" }
  );
  observer.observe(headerSection);
};
stickyNav();

// SERVICES SECTION

const excButton = document.querySelector("#exc-btn");
const demButton = document.querySelector("#dem-btn");
const envButton = document.querySelector("#env-btn");
const railButton = document.querySelector("#rail-btn");

const allServiceButtons = [excButton, demButton, envButton, railButton];
const servicesDisplay = document.querySelector(".services__display");
const gradient =
  "linear-gradient(rgba($color-black, 0.7),rgba($color-black, 0.7))";
// const displayBackground = servicesDisplay.style.backgroundImage;
console.log(window.getComputedStyle(servicesDisplay, false));

// servicesDisplay.style.backgroundImage = `linear-gradient(
//   to left top,
//   rgba($color-black, 0.7),
//   rgba($color-black, 0.7)
// ),
// url(./img/dem-btn.jpeg)`;

allServiceButtons.map((btn) =>
  btn.addEventListener("click", () => {
    let backgroundImage = `url(./img/${btn.id}.jpeg)`;
    servicesDisplay.style.backgroundImage = backgroundImage;

    const selectedButton = document.querySelector(`#${btn.id}`);

    const nonSelectedButtons = allServiceButtons.filter(
      (btn) => btn.id !== selectedButton.id
    );

    if (!selectedButton.classList.contains("services__btn--active")) {
      selectedButton.classList.toggle("services__btn--active");

      nonSelectedButtons.map((nonBtn) =>
        nonBtn.classList.remove("services__btn--active")
      );
    }
  })
);
