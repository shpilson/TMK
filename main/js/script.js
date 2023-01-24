//preloader
window.onload = function () {
  let preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
};

//lazy load
const lazyLoadImage = () => {
  const images = document.querySelectorAll("img");
  const optionsLazyLoad = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function handleImg(myImg, observerLazyLoad) {
    myImg.forEach((myImgSingle) => {
      // console.log(myImgSingle.intersectionRatio);
      if (myImgSingle.intersectionRatio > 0) {
        loadImage(myImgSingle.target);
      }
    });
  }

  function loadImage(image) {
    image.src = image.getAttribute("data");
  }

  const observerLazyLoad = new IntersectionObserver(handleImg, optionsLazyLoad);

  images.forEach((img) => {
    observerLazyLoad.observe(img);
  });
};
lazyLoadImage();

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

const menu = () => {
  const menuBtn = document.querySelectorAll(".header__mobile-btn");
  const menuContent = document.querySelector(".header__mobile");
  const phoneBodyScroll = document.querySelector("#phone__menu-id-body");

  menuBtn.forEach((element) => {
    element.addEventListener("click", openMenu);
  });

  function openMenu() {
    menuBtn.forEach((element) => {
      element.classList.add("active-menu");
    });

    menuContent.classList.add("active-menu--content");
    phoneBodyScroll.style.overflow = "hidden";
  }

  const menuBtnClose = document.querySelectorAll(".menu__close");

  menuBtnClose.forEach((element) => {
    element.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    menuBtn.forEach((element) => {
      element.classList.remove("active-menu");
    });

    menuContent.classList.remove("active-menu--content");
    phoneBodyScroll.style.overflow = "visible";
  }
};
menu();

const menuScrolled = () => {
  if (window.scrollY > 100) {
    document.querySelector("#header").classList.add("header-scrolled");
  } else {
    document.querySelector("#header").classList.remove("header-scrolled");
  }
};
window.addEventListener("scroll", menuScrolled);

const animation = () => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".start__block-animation");
  let aboutBlockTitle = document.querySelectorAll(".title-animation");
  let aboutBlockParagraphLeft = document.querySelectorAll(
    ".about__paragraph-animation-left"
  );
  let aboutBlockParagraphRight = document.querySelectorAll(
    ".about__paragraph-animation-right"
  );
  let aboutCardOne = document.querySelectorAll(".about__card-animation--1");
  let aboutCardTwo = document.querySelectorAll(".about__card-animation--2");
  let aboutCardThree = document.querySelectorAll(".about__card-animation--3");
  let conditionsCardOne = document.querySelectorAll(".card-animation-1");
  let conditionsCardTwo = document.querySelectorAll(".card-animation-2");
  let conditionsCardThree = document.querySelectorAll(".card-animation-3");
  let conditionsCardFour = document.querySelectorAll(".card-animation-4");
  let conditionsCardFive = document.querySelectorAll(".card-animation-5");
  let conditionsCardSix = document.querySelectorAll(".card-animation-6");
  let sliderOne = document.querySelectorAll(".slider-animation-1");
  let sliderTwo = document.querySelectorAll(".slider-animation-2");
  let sliderThree = document.querySelectorAll(".slider-animation-3");
  let sliderFour = document.querySelectorAll(".slider-animation-4");

  for (let elm of elements) {
    observer.observe(elm);
  }

  for (let elm of aboutBlockTitle) {
    observer.observe(elm);
  }
  for (let elm of aboutBlockParagraphLeft) {
    observer.observe(elm);
  }
  for (let elm of aboutBlockParagraphRight) {
    observer.observe(elm);
  }
  for (let elm of aboutCardOne) {
    observer.observe(elm);
  }
  for (let elm of aboutCardTwo) {
    observer.observe(elm);
  }
  for (let elm of aboutCardThree) {
    observer.observe(elm);
  }
  for (let elm of conditionsCardOne) {
    observer.observe(elm);
  }
  for (let elm of conditionsCardTwo) {
    observer.observe(elm);
  }
  for (let elm of conditionsCardThree) {
    observer.observe(elm);
  }
  for (let elm of conditionsCardFour) {
    observer.observe(elm);
  }
  for (let elm of conditionsCardFive) {
    observer.observe(elm);
  }
  for (let elm of conditionsCardSix) {
    observer.observe(elm);
  }
  for (let elm of sliderOne) {
    observer.observe(elm);
  }
  for (let elm of sliderTwo) {
    observer.observe(elm);
  }
  for (let elm of sliderThree) {
    observer.observe(elm);
  }
  for (let elm of sliderFour) {
    observer.observe(elm);
  }
};
animation();

$(function () {
  document.getElementById("ajax-contact-form").addEventListener(
    "submit",
    function (evt) {
      var http = new XMLHttpRequest(),
        f = this;
      var th = $(this);
      evt.preventDefault();
      http.open("POST", "contact.php", true);
      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
          if (http.responseText.indexOf(f.nameFF.value) == 0) {
            // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
            th.trigger("reset");
          }
        }
      };
      http.onerror = function () {
        alert("Ошибка, попробуйте еще раз");
      };
      http.send(new FormData(f));
    },
    false
  );
});
