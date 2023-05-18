const menu = document.querySelector(".navbar-menu");
const sidenav = document.querySelector(".hero-sidenav");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

menu.addEventListener("click", () => {
    sidenav.classList.toggle("showSidenav")
    bar1.classList.toggle("rotateBar1");
    bar2.classList.toggle("fadeBar2");
    bar3.classList.toggle("rotateBar3");
})