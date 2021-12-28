const hamburger = document.querySelector(".hamburger");
  const navLink = document.querySelectorAll(".navigation__item");

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change");
    for (let i = 0, length = navLink.length; i < length; i++) {
      navLink[i].classList.toggle("active");
    }
  });