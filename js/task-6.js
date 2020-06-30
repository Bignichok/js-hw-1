let total = 0;

do {
  let input = prompt("введите число");

  if (input === null) {
    console.log("отменено пользователем");
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log("Было введено не число");
    continue;
  }

  total += input;
} while (true);

alert(`Общая сумма ${total}`);

// while (true) {
//   let input = prompt("введите число");

//   if (input === null) {
//     console.log("отменено пользователем");
//     break;
//   }

//   input = Number(input);

//   const notANumber = Number.isNaN(input);

//   if (notANumber) {
//     console.log("Было введено не число");
//     continue;
//   }

//   total += input;
// }

// alert(`Общая сумма ${total}`);
