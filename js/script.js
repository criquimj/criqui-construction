console.log("testing connection");

const headerSection = document.querySelector(".header");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    const navBar = document.querySelector(".nav");

    !ent.isIntersecting
      ? navBar.classList.add("nav--scrolling")
      : navBar.classList.remove("nav--scrolling");
  },
  { root: null, threshold: 0, rootMargin: "-200px" }
);

obs.observe(headerSection);
