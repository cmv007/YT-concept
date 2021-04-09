const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
     1900: {
       slidesPerView: 6
     },
     1600: {
       slidesPerView: 5
     },
   
     1300: {
       slidesPerView: 4
     },
     1124: {
       slidesPerView: 3
     },
     800: {
       slidesPerView: 2
     },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#my-channel-1-prev',
    prevEl: '#my-channel-1-next',
  }
});

const swipers = new Swiper('.rec-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600:{
      slidesPerView: 3
    },
    1100:{
      slidesPerView: 2
    },
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.rec-channel-button-next',
    prevEl: '.rec-channel-button-prev',
  },
})

const swiperfood = new Swiper('.food-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
     1900: {
       slidesPerView: 6
     },
     1600: {
       slidesPerView: 5
     },
   
     1300: {
       slidesPerView: 4
     },
     1124: {
       slidesPerView: 3
     },
     800: {
       slidesPerView: 2
     },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.food-channel-button-next',
    prevEl: '.food-channel-button-prev',
  },
});
const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swipers.destroy();
  swiperfood.destroy();
}