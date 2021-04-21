(function () {
    const swiperCategoryCarousel = new Swiper('.swiper-container--category', {
        loop: true,
        watchSlidesVisibility: true,
        loopAdditionalSlides: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            500: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    });
})();