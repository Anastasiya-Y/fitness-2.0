const swiperContainerTrainers = document.querySelector('.trainers__container');

const initSwiperTrainers = () => {
  const swiper = new Swiper(swiperContainerTrainers, {
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
    },
    grabCursor: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 3,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 3,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export {initSwiperTrainers};

