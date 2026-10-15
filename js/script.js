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





document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.querySelectorAll('.error-text').forEach(error => error.remove());

    let isValid = true;

    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    const errorForms = (message, input) => {
        let errorEl = document.createElement('div');
        errorEl.className = 'error-text';
        errorEl.textContent = message;
        errorEl.style.color = 'red';
         errorEl.style.paddingTop = '10px'
        errorEl.style.fontSize = '14px';

       input.insertAdjacentElement('afterend', errorEl);
        isValid = false;
    };

    if (!name.value.trim()) {
        errorForms("Введіть своє ім'я", name);
    }

 if (!/^\+?[\d\s()-]{10,20}$/.test(phone.value.trim())) {
    errorForms('Введіть правильно свій номер телефону', phone);
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
    errorForms('Введіть правильно свою пошту', email);
}

    if (isValid) {
        alert('Дякуємо за заявку! Ми зателефонуємо вам найближчим часом.');
    }
});
