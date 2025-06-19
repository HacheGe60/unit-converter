const quantityInputEl = document.querySelector('#quantity-input');
const convertBtnEl = document.querySelector('#convert-btn');
const lengthEl = document.querySelector('#length');
const volumeEl = document.querySelector('#volume');
const massEl = document.querySelector('#mass');
const dayNightEl = document.querySelector('#dayNight');
const resultEl = document.querySelector('#result');
const measureEl = document.querySelectorAll('.measure');
let quantity = '';

function convert() {
    quantity = parseFloat(quantityInputEl.value);
    if (isNaN(quantity) || quantity <= 0) {
        quantity = 1;
    }
    const lengthFeet = (quantity * 3.281).toFixed(3);
    const lengthMeters = (quantity / 3.281).toFixed(3);
    const volumeGallons = (quantity * 0.264).toFixed(3);
    const volumeLiters = (quantity / 0.264).toFixed(3);
    const massPounds = (quantity * 2.204).toFixed(3);
    const massKilos = (quantity / 2.204).toFixed(3);

    lengthEl.textContent = `${quantity} meters = ${lengthFeet} feet | ${quantity} feet = ${lengthMeters} meters`;
    volumeEl.textContent = `${quantity} liters = ${volumeGallons} gallons | ${quantity} gallons = ${volumeLiters} liters`;
    massEl.textContent = `${quantity} kilos = ${massPounds} pounds | ${quantity} pounds = ${massKilos} kilos`;
}

convertBtnEl.addEventListener('click', convert);

quantityInputEl.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        convert();
    }
});

function dayNight() {
    if (dayNightEl.classList.contains('fa-moon')) {
        dayNightEl.classList.remove('fa-moon');
        dayNightEl.classList.add('fa-sun');
        resultEl.style.backgroundColor = '#1f2937';
        measureEl.forEach(measure => {
            measure.style.backgroundColor = '#273549';
            measure.style.color = '#ccc1ff';
        });
        lengthEl.style.color = '#f5f5f5';
        volumeEl.style.color = '#f5f5f5';
        massEl.style.color = '#f5f5f5';
    } else {
        dayNightEl.classList.remove('fa-sun');
        dayNightEl.classList.add('fa-moon');
        resultEl.style.backgroundColor = '#f5f5f5';
        measureEl.forEach(measure => {
            measure.style.backgroundColor = '#ffffff';
            measure.style.color = '#5a537b';
        });
        lengthEl.style.color = '#353535';
        volumeEl.style.color = '#353535';
        massEl.style.color = '#353535';
    }
}

dayNightEl.addEventListener('click', dayNight);