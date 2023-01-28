let globalWidth = window.innerWidth;

if (globalWidth <= 768) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
