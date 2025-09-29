const currencyTab = document.getElementById('currency-tab');
const unitsTab = document.getElementById('units-tab');
const currencySection = document.getElementById('currency-section');
const unitsSection = document.getElementById('units-section');


currencyTab.addEventListener('click', () => {
currencyTab.classList.add('active');
unitsTab.classList.remove('active');
currencySection.classList.add('active');
unitsSection.classList.remove('active');
});


unitsTab.addEventListener('click', () => {
unitsTab.classList.add('active');
currencyTab.classList.remove('active');
unitsSection.classList.add('active');
currencySection.classList.remove('active');
});


const rates = {
USD: { UAH: 41.48, EUR: 0.86, GBP: 0.75, CAD: 1.39, USD: 1 },
EUR: { UAH: 48.48, USD: 1.17, GBP: 0.88, CAD: 1.63, EUR: 1 },
GBP: { UAH: 55.38, USD: 1.34, EUR: 1.14, CAD: 1.86, GBP: 1 },
CAD: { UAH: 29.74, USD: 0.71, EUR: 0.61, GBP: 0.53, CAD: 1 },
UAH: { USD: 0.025, EUR: 0.023, GBP: 0.02, CAD: 0.034, UAH: 1 }
};


function convertCurrency() {
const amount = parseFloat(document.getElementById('amount').value);
const from = document.getElementById('fromCurrency').value;
const to = document.getElementById('toCurrency').value;
if (isNaN(amount)) return;
const result = amount * rates[from][to];
document.getElementById('currencyResult').textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}


const unitFactors = { m: 1, km: 1000, cm: 0.01, mi: 1609.34, kg: 1, g: 0.001 };


function convertUnits() {
const value = parseFloat(document.getElementById('value').value);
const from = document.getElementById('fromUnit').value;
const to = document.getElementById('toUnit').value;
if (isNaN(value)) return;
const isLength = ['m','km','cm','mi'].includes(from) && ['m','km','cm','mi'].includes(to);
const isWeight = ['kg','g'].includes(from) && ['kg','g'].includes(to);
if (!isLength && !isWeight) {
document.getElementById('unitResult').textContent = 'Конвертація між різними типами не підтримується';
return;
}
const result = value * unitFactors[from] / unitFactors[to];
document.getElementById('unitResult').textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
}