const chinaDelivery = 100;
const chileDelivery = 250;
const australiaDelivery = 170;
const indiaDelivery = 80;
const jamaicaDelivery = 120;

let country = prompt("введите страну для доставки");
let lowerCaseCounty = country.toLowerCase();
let priceForDelivery;
let message;
let result;

switch (lowerCaseCounty) {
  case "китай":
    priceForDelivery = chinaDelivery;
    alert(message);
    break;

  case "чили":
    priceForDelivery = chileDelivery;
    alert(message);
    break;

  case "австралия":
    priceForDelivery = australiaDelivery;
    alert(message);
    break;

  case "индия":
    priceForDelivery = indiaDelivery;
    alert(message);
    break;

  case "ямайка":
    priceForDelivery = jamaicaDelivery;
    alert(message);
    break;

  default:
    result = `Мы не осуществляем доставку в эту страну`;
    alert(result);
}

message = `Доставка в ${country} будет стоить ${priceForDelivery} кредитов`;

// прописал алерт в каждом кейсе, потому-что вылазит дважды при отмене, елси прописывать его единожды в конце
