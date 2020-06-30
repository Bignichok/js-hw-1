const ADMIN_PASSWORD = "qwerty";
let message = "Отменено пользователем!";

const password = prompt("пароль");

if (password === null) {
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
