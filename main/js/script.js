const slider = () => {
  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 4,
      autoplay: false,
      speed: 800,
      infinity: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
};

slider();

const labelRequired = () => {
  let inputForm = document.querySelectorAll(".input__form");
  let labelForm = document.querySelectorAll(".label__form");

  inputForm.forEach((elementInput) => {
    if (elementInput.hasAttribute("required")) {
      labelForm.forEach((elementLabel) => {
        if (
          elementInput.getAttribute("name") === elementLabel.getAttribute("for")
        ) {
          elementLabel.classList.add("input__required");
        }
      });
    }
  });
};
labelRequired();

const menu__open = () => {};
const menuBtn = document.querySelector(".header__mobile-btn");
const menuContent = document.querySelector(".header__mobile");
const phoneBodyScroll = document.querySelector("#phone__menu-id-body");

menuBtn.addEventListener("click", openMenu);

function openMenu() {
  if (menuBtn.classList.contains("active-menu")) {
    menuBtn.classList.remove("active-menu");
    menuContent.classList.remove("active-menu--content");
    phoneBodyScroll.style.overflow = "visible";
  } else {
    menuBtn.classList.add("active-menu");
    menuContent.classList.add("active-menu--content");
    phoneBodyScroll.style.overflow = "hidden";
  }
}

menu__open();

const btn__top = () => {
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -1000);
      setTimeout(backToTop, 0);
    }
  }

  goTopBtn = document.querySelector(".js-back__top");
  goTopBtn.addEventListener("click", backToTop);
};

btn__top();
