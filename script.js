
const slider = document.querySelector('.cards-container');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    e.preventDefault();
    slider.scrollLeft = scrollLeft - (e.pageX - startX);
});


const slider = document.querySelector('.card-advantages-container');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    e.preventDefault();
    slider.scrollLeft = scrollLeft - (e.pageX - startX);
});



