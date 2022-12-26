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
          breakpoint: 480,
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

let newsCard = document.querySelectorAll(".news__card");

for (let i = 0; i < newsCard.length; i++) {
  if (i >= 3) {
    newsCard[i].classList.add("card-none");
  }
}

// Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
// const mediaQuery = window.matchMedia("(min-width: 780px)");
// if (mediaQuery.matches) {
//   for (let i = 0; i < newsCard.length; i++) {
//     if (i >= 1) {
//       newsCard[i].classList.add("card-none");
//     }
//   }
// }

let countCard = 0;

newsCard.forEach((element) => {
  if (!element.classList.contains("card-none")) {
    countCard++;
  }
});

function loadMore() {
  let newsBtn = document.querySelector(".news__btn-more");

  if (countCard >= 3) {
    newsCard.forEach((element) => {
      element.classList.remove("card-none");
      countCard = 0;
    });
    newsBtn.innerHTML = "Меньше";
  } else {
    for (let i = 0; i < newsCard.length; i++) {
      if (i >= 3) {
        newsCard[i].classList.add("card-none");
      }
    }

    newsCard.forEach((element) => {
      if (!element.classList.contains("card-none")) {
        countCard++;
      }
    });
    newsBtn.innerHTML = "Больше";
  }
}
