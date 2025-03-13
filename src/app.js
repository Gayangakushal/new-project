// carosel top home start
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
// carosel top home end

// trending institute start
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
});
// trending institute end
