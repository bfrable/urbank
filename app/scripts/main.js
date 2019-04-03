(function() {
    const helpers = {
        nav: () => {
            const toggle = document.querySelector('.navigation-toggle');
            const nav    = document.querySelector('.nav');
            let navHidden = nav.currentStyle ? nav.currentStyle.display : getComputedStyle(nav, null).display;

            toggle.addEventListener('click', e => {
                e.preventDefault();

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
        tabs: () => {
            /* Consider JS hooks instead of these long class names */
            const tabs = document.querySelectorAll('.tabs a');
            const panels = document.querySelectorAll('.tabs__panel');

            for (let tab of tabs) {
                tab.addEventListener('click', e => {
                    e.preventDefault();

                    document.querySelector('.tabs li.active').classList.remove('active');
                    document.querySelector('.tabs__panel--active').classList.remove('tabs__panel--active');

                    const parentItem = tab.parentElement;
                    parentItem.classList.add('active');

                    const index = [...parentItem.parentElement.children].indexOf(parentItem);
                    const panel = [...panels].filter(el => el.getAttribute('data-index') == index);

                    panel[0].classList.add('tabs__panel--active');
                });
            }
        },
        modal: (el) => {
            const btn = document.querySelectorAll('[data-button="' + el + '"]');
            const modal = document.querySelectorAll('[data-modal="' + el + '"]');

            // TODO: Refactor this
            btn[0].addEventListener('click', e => {
                e.preventDefault();

                modal[0].classList.toggle('modal--open');
            });

            btn[1].addEventListener('click', e => {
                e.preventDefault();

                modal[0].classList.toggle('modal--open');
            });
        },
        init: () => {
            helpers.nav();
            helpers.tabs();
            helpers.modal('login-modal');
        }
    };

    helpers.init();
})();
