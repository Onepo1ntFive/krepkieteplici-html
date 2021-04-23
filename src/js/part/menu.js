(function () {
    //top menu
    let $menutopList,
        $menutopListWrap,
        $menutopListParent,
        menutopListHeight,
        menutopListParent,
        windowWidth;

    let hasChilds = document.querySelectorAll('.js-menutop-haschild');
    Array.prototype.forEach.call(hasChilds, function (hasChild, i) {
        hasChild.addEventListener('mouseenter', (event) => {
            if (windowWidth >= 768) {
                let thisChild = event.target;

                $menutopListWrap = thisChild.parentNode.parentNode;
                $menutopListParent = thisChild.parentNode;
                $menutopList = thisChild.querySelector('.js-menutop-child');

                menutopListParent = $menutopListParent.offsetHeight;
                menutopListHeight = $menutopList.offsetHeight;

                if (menutopListParent > menutopListHeight) {
                    $menutopListWrap.style.height = menutopListParent + 'px';
                } else {
                    $menutopListWrap.style.height = menutopListHeight + 'px';
                }

                $menutopListWrap.classList.add("menu__level-wrap--full");
            }
        });

        hasChild.addEventListener('mouseleave', (event) => {
            if (windowWidth >= 768) {
                let thisChild = event.target;

                $menutopListWrap = thisChild.parentNode.parentNode;
                $menutopListWrap.style.height = 'auto';

                $menutopListWrap.classList.remove("menu__level-wrap--full");
            }
        });
    });

    let menuOpen = document.querySelector('.js-menu-open');
    let menuBlock = document.querySelector('.js-menu');

    menuOpen.addEventListener('click', () => {
        if (menuBlock.classList.contains('active')) {
            menuBlock.classList.remove('active');
        } else {
            menuBlock.classList.add('active');
        }
    });

})();

