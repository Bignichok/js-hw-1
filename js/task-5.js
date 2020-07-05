const chinaDelivery = 100;
const chileDelivery = 250;
const australiaDelivery = 170;
const indiaDelivery = 80;
const jamaicaDelivery = 120;

let country = prompt("введите страну для доставки");
let lowerCaseCounty;
let priceForDelivery;
let message;
let result;

if (country === null) {
  alert("Отменено пользователем!");
} else {
  lowerCaseCounty = country.toLowerCase();
  switch (lowerCaseCounty) {
    case "китай":
      priceForDelivery = chinaDelivery;
      break;

    case "чили":
      priceForDelivery = chileDelivery;
      break;

    case "австралия":
      priceForDelivery = australiaDelivery;
      break;

    case "индия":
      priceForDelivery = indiaDelivery;
      break;

    case "ямайка":
      priceForDelivery = jamaicaDelivery;
      break;

    default:
      priceForDelivery = "not available";
  }

  message =
    priceForDelivery !== "not available"
      ? `Доставка в ${country} будет стоить ${priceForDelivery} кредитов`
      : "Мы не доставляем товар в вашу страну";
  alert(message);
}
