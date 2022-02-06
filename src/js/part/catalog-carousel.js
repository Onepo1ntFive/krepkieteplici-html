(function () {
    const swiperCatalogCarousel = new Swiper('.swiper-container--catalog', {
        loop: true,
        watchSlidesVisibility: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
})();