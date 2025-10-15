let userInput = prompt('Enter amount. eg. $49.99');
let currency = userInput.slice(0, 1);
let amount = userInput.slice(1);
let amountFloat = parseFloat(amount);

let discount = amountFloat - amountFloat * 0.1;

console.log(`Your new price is ${currency}${discount}`);
