// Nav menu
const navBtn = document.querySelector(".js-nav-btn");
const navMenu = document.querySelector(".js-nav-menu");
const navLinks = document.querySelectorAll(".header__link");
const body = document.querySelector("body");

const toggleNav = () => {
  if (navBtn.classList.contains("active")) {
    navBtn.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("lock");
  } else {
    navBtn.classList.add("active");
    navMenu.classList.add("active");
    body.classList.add("lock");
  }
};

navBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleNav();
});

for (let i = 0; i < navLinks.length; ++i) {
  navLinks[i].addEventListener("click", () => {
    toggleNav();
  });
}

document.addEventListener("click", (e) => {
  const target = e.target;
  const itsNavMenu = target == navMenu || navMenu.contains(target);
  const itsNavBtn = target == navBtn;
  const menuIsActive = navMenu.classList.contains("active");

  if (!itsNavMenu && !itsNavBtn && menuIsActive) {
    toggleNav();
  }
});

const setActiveLink = () => {
  const currentPath = window.location.pathname.split("/")[1];

  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute("href").indexOf(currentPath) !== -1) {
      navLinks[i].classList.toggle("active");
    }
  }
};

window.addEventListener("load", setActiveLink);

export { toggleNav, setActiveLink };
