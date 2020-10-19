/**
 * Application entry point
 */

import 'scss/_index.scss';
const menu = document.getElementById("user-menu");
const menuButton = document.getElementById("user-menu-button");

const showUserMenu = () => { menu.classList.add('active') }
const hideUserMenu = () => { menu.classList.remove('active') }

menuButton.addEventListener("click", showUserMenu);
menu.addEventListener('click', hideUserMenu)

