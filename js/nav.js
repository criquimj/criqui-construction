"use strict";

// MOBILE NAV OPEN/CLOSE
const mobileNavButton = document.querySelector(".btn-mobile-nav");
const headMainNav = document.querySelector(".header__main-nav");
const headerEl = document.querySelector(".header");
mobileNavButton.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    headMainNav.addEventListener("click", () => {
      headerEl.classList.remove("nav-open");
    });
  }
});

// STICKY NAVIGATION

const stickyNav = () => {
  const heroSection = document.querySelector(".hero");
  const observer = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      const bodyEl = document.querySelector("body");

      !ent.isIntersecting
        ? bodyEl.classList.add("sticky")
        : bodyEl.classList.remove("sticky");
    },
    { root: null, threshold: 0, rootMargin: "-80px" }
  );
  observer.observe(heroSection);
};
stickyNav();

// SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("header__main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  })
);

const empButton = document.querySelector("#emp");
const popup = document.querySelector("#popup");
const popupContent = document.querySelector(".popup__content");
const popupCloseBtn = document.querySelector(".popup__close");
const popupButton = document.querySelector(".popup__button");

const openModal = () => {
  popup.classList.add("visible");
  popupContent.classList.add("visible");

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") closeModal();
  });
};
const closeModal = () => {
  popup.classList.remove("visible");
  popupContent.classList.remove("visible");
};

empButton.addEventListener("click", () => {
  openModal();
});

popup.addEventListener("click", () => {
  closeModal();
});

popupCloseBtn.addEventListener("click", () => {
  closeModal();
});

popupButton.addEventListener("click", () => {
  closeModal();
});
