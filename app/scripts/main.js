(function() {
    const helpers = {
        nav: () => {
            const toggle = document.querySelector('.navigation-toggle');
            const nav    = document.querySelector('.nav');
            let navHidden = nav.currentStyle ? nav.currentStyle.display : getComputedStyle(nav, null).display;

            toggle.addEventListener('click', () => {
                if (navHidden === 'none') {
                    toggle.classList.add('navigation-toggle--open')
                    nav.style.display = 'block';
                    navHidden = 'block';
                } else {
                    toggle.classList.remove('navigation-toggle--open')
                    nav.style.display = 'none';
                    navHidden = 'none';
                }
            });
        },
        init: () => {
            helpers.nav();
        }
    };

    helpers.init();
})();
