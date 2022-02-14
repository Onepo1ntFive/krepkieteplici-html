(function () {

    if (document.querySelector('.js-popup-show')) {


        const popupButtons = document.querySelectorAll('.js-popup-show');
        const popupBlocks = document.querySelectorAll('.js-popup');
        const popupClose = document.querySelectorAll('.js-popup-close');
        const popupBg = document.querySelector('.js-popup-bg');

        Array.prototype.forEach.call(popupButtons, function (popupButton, i) {
            popupButton.addEventListener('click', (event) => {
                event.preventDefault();

                let popupId = popupButton.dataset.popup;
                let popupTarget = document.querySelector(popupId);

                if (popupTarget) {
                    popupBg.classList.add('active');
                    popupTarget.classList.add('active')
                }

            })
        });

        Array.prototype.forEach.call(popupClose, function (popupCloseBtn, i) {
            popupCloseBtn.addEventListener('click', () => {
                popupBg.classList.remove('active');
                Array.prototype.forEach.call(popupBlocks, function (popupBlock, i) {
                    popupBlock.classList.remove('active');
                });
            })
        });
       

    }

})();