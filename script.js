const slider = document.querySelector('.cards-container,.card-advantages-container');
let startX = 0;
let scrollLeft = 0;
let isDown = false;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseup', () => isDown = false);
slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mousemove', (e) => {
    if (isDown) {
        slider.scrollLeft = scrollLeft - (e.pageX - startX);
    }
});



const burger = document.querySelector('.burger');
const navLink = document.querySelector('nav');

burger.addEventListener('click', openMenu);

function openMenu() {
    burger.classList.toggle('active');
    navLink.classList.toggle('active');
}



