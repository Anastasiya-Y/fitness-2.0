const swiperContainerTrainers = document.querySelector('.swiper-container');

const initSwiperTrainers = () => {
  const swiper = new Swiper(swiperContainerTrainers, {
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
    },
    grabCursor: true,
    loop: true,
    loopedSlides: 4,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1340: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

    },
  });
};

export {initSwiperTrainers};

