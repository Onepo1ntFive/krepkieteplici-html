(function () {

    // const tinySliderNav = tns({
    //     container: '.js-tiny-nav',
    //     nav: false,
    //     controls: false,
    //     axis: 'vertical',
    //     items: 5,
    //     slideBy: 1,
    //     mouseDrag: true,
    //     loop: true,
    //     center: true,
    //     onInit: (info) => {
    //         // console.log(info);
    //         info.slideItems[info.index].classList.add('tns-item-current');
    //     }
    // });
    // const tinySliderMain = tns({
    //     container: '.js-tiny-main',
    //     nav: false,
    //     controls: false,
    //     axis: 'vertical',
    //     slideBy: 1,
    //     mouseDrag: false,
    //     loop: true,
    //     touch: false,
    //     center: true,
    //     onInit: (info) => {
    //         console.log(info);
    //         info.slideItems[info.index].classList.add('tns-item-current');
    //     }
    // });

    // tinySliderNav.events.on('indexChanged', (info) => {
    //     console.log(tinySliderNav.getInfo(), tinySliderMain.getInfo())
    // });

    // tinySliderNav.events.on("transitionEnd", function (info) {
    //     info.slideItems[info.indexCached].classList.remove('tns-item-current');
    //     info.slideItems[info.index].classList.add('tns-item-current');
    // });
    // tinySliderMain.events.on("transitionEnd", function (info) {
    //     info.slideItems[info.indexCached].classList.remove('tns-item-current');
    //     info.slideItems[info.index].classList.add('tns-item-current');
    // });

})();