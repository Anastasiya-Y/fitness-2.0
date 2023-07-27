const swiperContainerTrainers = document.querySelector('.trainers__container');
const swiperContainerFeedback = document.querySelector('.feedback__container');

const initSwiper = () => {
  const swiperTrainers = new Swiper(swiperContainerTrainers, {
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

  const swiperFeedback = new Swiper(swiperContainerFeedback, {
    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },
    grabCursor: true,
    spaceBetween: 10,
    autoHeight: true,
  });
};

export {initSwiper};
