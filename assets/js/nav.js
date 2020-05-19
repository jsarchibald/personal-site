let toggle_mobile_menu = () => {
    let menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("show");
};

let mobile_menu = () => {
    let menu_toggle = document.querySelector(".mobile-menu-toggle");
    menu_toggle.addEventListener("click", toggle_mobile_menu);

    let menu_closer = document.querySelectorAll(".mobile-menu li");
    menu_closer.forEach((menu_close) => {
        menu_close.addEventListener("click", toggle_mobile_menu);
    });
};

document.addEventListener("DOMContentLoaded", mobile_menu);