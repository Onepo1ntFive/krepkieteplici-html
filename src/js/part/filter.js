(function () {

    //range
    let sliderSelector = document.querySelector('.js-range')
    let sliderSlider = sliderSelector.querySelector('.js-range-slider');
    let sliderSliderMinInput = sliderSelector.querySelector('.js-range-min');
    let sliderSliderMsxInput = sliderSelector.querySelector('.js-range-max');

    noUiSlider.create(sliderSlider, {
        start: [15000, 55999],
        step: 100,
        connect: true,
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [0],
            'max': [100000]
        }
    });

    const snapValues = [
        sliderSliderMinInput,
        sliderSliderMsxInput
    ];
    sliderSlider.noUiSlider.on('update', function (values, handle) {
        snapValues[handle].value = values[handle];
    });

    sliderSliderMinInput.addEventListener('change', function () {
        sliderSlider.noUiSlider.set([this.value, null]);
    });
    sliderSliderMsxInput.addEventListener('change', function () {
        sliderSlider.noUiSlider.set([null, this.value]);
    });


    // collapse
    let collapseTitle = document.querySelectorAll('.js-collapse-title');
    Array.prototype.forEach.call(collapseTitle, function (el, i) {
        let collapseContent = el.nextElementSibling;
        el.addEventListener('click', () => {
            el.classList.toggle('inactive');
            slideToggle(collapseContent, 300)
        });

    });

    //show filter on mobile
    const bodyBlock = document.querySelector('body');
    const filterBtnShow = document.querySelector('.js-filter-show');
    const filterBtnHide = document.querySelectorAll('.js-filter-close');
    const filterBtnBg = document.querySelector('.js-filter-bg');
    const filterBtnBlock = document.querySelector('.js-filter-block');

    // show
    filterBtnShow.addEventListener('click', () => {
        bodyBlock.classList.add('ov-h');
        filterBtnBg.classList.add('active');
        filterBtnBlock.classList.add('active');
    })
    // hide
    Array.prototype.forEach.call(filterBtnHide, function (el, i) {
        el.addEventListener('click', () => {
            bodyBlock.classList.remove('ov-h');
            filterBtnBg.classList.remove('active');
            filterBtnBlock.classList.remove('active');
        })
    });


})();