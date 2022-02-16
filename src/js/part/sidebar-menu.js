(function () {

    let windowWidth = window.innerWidth

    function setHeight(el, val) {
        if (typeof val === "function") val = val();
        if (typeof val === "string") el.style.height = val;
        else el.style.height = val + "px";
    }

    const mainLevel = document.querySelector('.js-menu-main');
    const menuAchors = document.querySelectorAll('.js-menu-item ins');
    const secondLevel = document.querySelectorAll('.js-menu-next');
    const backBtn = document.querySelector('.js-menu-back');
    let nextLevel = null;
    let mainLevelHeight = mainLevel.offsetHeight;
    let nextLevelHeight = null;

    setHeight(mainLevel, mainLevelHeight);

    Array.prototype.forEach.call(menuAchors, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            nextLevel = el.parentNode.nextElementSibling;

            secondLevel.forEach(function (item, i) {
                item.classList.remove('active');
            });

            nextLevel.classList.add('active');
            mainLevel.classList.add('active');

            backBtn.classList.add('active');

            nextLevelHeight = nextLevel.offsetHeight;

            setHeight(mainLevel, nextLevelHeight);

        });
    });

    backBtn.addEventListener('click', (event) => {
        event.preventDefault();

        backBtn.classList.remove('active');
        mainLevel.classList.remove('active');

        secondLevel.forEach(function (item, i) {
            item.classList.remove('active');
        });

        setHeight(mainLevel, mainLevelHeight);
    });

    const showSidebarBtns = document.querySelectorAll('.js-sidebar-show');
    const hideSidebarBtns = document.querySelectorAll('.js-sidebar-hide');
    const body = document.querySelector('body');
    let clickedEl = null;

    Array.prototype.forEach.call(showSidebarBtns, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            clickedEl = el;
            showSidebar();
        });
    });
    Array.prototype.forEach.call(hideSidebarBtns, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            hideSidebar();
        });
    });

    const sidebar = document.querySelector('.js-sidebar');
    const sidebarBg = document.querySelector('.js-sidebar-bg');

    function showSidebar() {
        windowWidth = window.innerWidth
        if (windowWidth < 1200) {
            sidebar.classList.add('active');
            sidebarBg.classList.add('active');
            clickedEl.classList.add('active');
            body.classList.add('ov-h')
        }
    }
    function hideSidebar() {
        sidebar.classList.remove('active');
        sidebarBg.classList.remove('active');
        clickedEl.classList.remove('active');
        body.classList.remove('ov-h')
    }

    if (document.querySelector('.js-menu-collapse')) {
        let menuCollapseBtns = document.querySelectorAll('.js-menu-collapse ins');
        let menuCollapseContent = null;

        Array.prototype.forEach.call(menuCollapseBtns, function (menuCollapseBtn, i) {
            menuCollapseContent = menuCollapseBtn.parentNode.parentNode.querySelector('.js-menu-collapse-item')
            console.log(menuCollapseContent)
            menuCollapseBtn.addEventListener('click', () => {
                menuCollapseBtn.parentNode.parentNode.classList.toggle('active')
                slideToggle(menuCollapseContent);
            })
        });
    }

})();