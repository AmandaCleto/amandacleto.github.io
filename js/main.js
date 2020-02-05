// selecting DOM items
const menuBtn = document.querySelector('.menu_btn');
const mainMenu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu_nav');
const menuBranding = document.querySelector('.menu_branding');
const navItems = document.querySelectorAll('.nav_item');

// seeting the initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    console.log("aa");
    if (!showMenu) {
        menuBtn.classList.add('close');
        mainMenu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        //set menu state
        showMenu = true;
        console.log("bb");

    } else {
        menuBtn.classList.remove('close');
        mainMenu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        //set menu state
        showMenu = false;
    }
}
