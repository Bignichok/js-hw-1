let message = "Отменено пользователем!";
let credits = 23580;
let droidAmount;
let totalPrice;
const pricePerDroid = 3000;

const droidAmountPrompt = prompt("Количество дроидов");

droidAmount = droidAmountPrompt;

if (droidAmountPrompt === null) {
  console.log(message);
} else if (droidAmount >= 1) {
  totalPrice = droidAmount * pricePerDroid;
}

if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  credits = credits - totalPrice;
  message = `Вы купили ${droidAmount} дроидов на сумму ${totalPrice}, на счету осталось ${credits}`;
}
alert(message);
