// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER WITH VALIDATION
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while (isNaN(investment) || investment <= 0) {
    investment = parseFloat(prompt('Invalid input. Enter investment amount as xxxx.xx'));
}

rate = parseFloat(prompt('Enter interest rate as xx.x'));
while (isNaN(rate) || rate <= 0 || rate > 6) {
    rate = parseFloat(prompt('Invalid input. Enter interest rate as xx.x (between 0 and 6)'));
}

years = parseInt(prompt('Enter the number of years you want to invest for'));
while (isNaN(years) || years < 1 || years > 30) {
    years = parseInt(prompt('Invalid input. Enter the number of years (between 1 and 30)'));
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
