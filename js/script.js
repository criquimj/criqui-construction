const excavationHtml = `<h3 class="heading-tertiary services__display-heading">
Excavation Services
</h3>
<p class="services__text-detail">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quaerat, dolorum voluptate quidem nam provident earum
laboriosam accusantium dolores perferendis quod modi ea?
</p>
<div class="services__list-container">
<ul class="services__list">
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Excavation, grading and slope work
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Basement & foundation excavation
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon
    >Land clearing
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Building pads & site preparation
  </li>
</ul>
<ul class="services__list">
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon
    >Road and highway construction
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon
    >Trench digging
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Storm sewer & drainage structures
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Septic systems & sewer lagoons
  </li>
</ul>
</div>`;

const demoHtml = `<h3 class="heading-tertiary services__display-heading">
Excavation Services
</h3>
<p class="services__text-detail">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quaerat, dolorum voluptate quidem nam provident earum
laboriosam accusantium dolores perferendis quod modi ea?
</p>
<div class="services__list-container">
<ul class="services__list">
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Excavation, grading and slope work
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Basement & foundation excavation
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon
    >Land clearing
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Building pads & site preparation
  </li>
</ul>
<ul class="services__list">
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon
    >Road and highway construction
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon
    >Trench digging
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Storm sewer & drainage structures
  </li>
  <li class="services__list-item">
    <ion-icon
      class="services__icon"
      name="chevron-forward-outline"
    ></ion-icon>
    Septic systems & sewer lagoons
  </li>
</ul>
</div>`;

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
const displayOverlay = document.querySelector(".services__display-overlay");

allServiceButtons.map((btn) =>
  btn.addEventListener("click", () => {
    let curBackgroundImage = `url(./img/${btn.id}.jpeg)`;
    servicesDisplay.style.backgroundImage = curBackgroundImage;

    let htmlContent = "";
    displayOverlay.innerHTML = htmlContent;

    if (btn.id === "exc-btn") {
      htmlContent = excavationHtml;
    }

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

    displayOverlay.insertAdjacentHTML("afterbegin", htmlContent);
  })
);
