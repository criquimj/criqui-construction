// MOBILE NAV OPEN/CLOSE
const mobileNavButton = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
mobileNavButton.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// STICKY NAVIGATION

// const stickyNav = () => {
//   const heroSection = document.querySelector(".hero");
//   const observer = new IntersectionObserver(
//     (entries) => {
//       const ent = entries[0];
//       const navBar = document.querySelector(".header");

//       !ent.isIntersecting
//         ? navBar.classList.add("header--scrolling")
//         : navBar.classList.remove("header--scrolling");
//     },
//     { root: null, threshold: 0, rootMargin: "500px" }
//   );
//   observer.observe(heroSection);
// };
// stickyNav();

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

empButton.addEventListener("click", () => {
  popup.classList.add("visible");
  popupContent.classList.add("visible");
});

popupCloseBtn.addEventListener("click", () => {
  popup.classList.remove("visible");
  popupContent.classList.remove("visible");
});

popupButton.addEventListener("click", () => {
  popup.classList.remove("visible");
  popupContent.classList.remove("visible");
});
