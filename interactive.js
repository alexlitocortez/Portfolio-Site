
const menu = document.getElementById('sidebar');
const toggle = document.getElementById('toggle-btn');
const transform = document.querySelector('span');
const mq = window.matchMedia( "(min-width: 300px)" );
const mz = window.matchMedia( "(max-width: 767px)" );

toggle.addEventListener('click', () => {
    if(mq.matches && mz.matches) {
        menu.classList.toggle('active');
    } else {
        menu.classList.add('noAnimation');
    }
})








// How to make toggle button stay an X only when the menu is out

// 1. initialize screen sizes with variables
// 2. use those variables to do if statements and use .remove for the .noAnimation class I made