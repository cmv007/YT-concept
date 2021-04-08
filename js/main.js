const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
})

const swipers = new Swiper('.rec-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.rec-channel-button-next',
    prevEl: '.rec-channel-button-prev',
  },
})

const swiperfood = new Swiper('.food-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.food-channel-button-next',
    prevEl: '.food-channel-button-prev',
  },
});
