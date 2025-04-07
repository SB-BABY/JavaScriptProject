// переменная для рандомного числа
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// Получаем кнопку "Угадать"
const guessBtn = document.querySelector(".btn__enter");
// получаем кнопку сбросить
const resetBtn = document.querySelector(".btn__reset");
// получаем текст
const textInfo = document.querySelector(".random__text");
// получаем "секретный" текст
const guessText = document.querySelector(".random__secret");
// Переменные результат и лучший результат
let attempt = 20;
let bestResult = 0;
// Присваем переменные в наш текст
const randomAttemp = document.querySelector(".random__attempt");
randomAttemp.textContent = attempt;
const randomResult = document.querySelector(".random__result");
randomResult.textContent = bestResult;

// Функция для изменения текста в сообщение
function textRedaktor(block, message) {
  block.textContent = `${message}`;
}

// действие для кнопки "угадать"
guessBtn.addEventListener("click", () => {
  // значения из input для ввода числа
  const inputValue = Number(document.querySelector(".random__input").value);
  //   Проверяем ввел ли пользователь число
  if (!inputValue) {
    textRedaktor(textInfo, "Вы ввели не число!");
    // Проверяем число, если оно совпало
  } else if (inputValue === randomNumber) {
    textRedaktor(textInfo, "Вы угадали");
    textRedaktor(guessText, randomNumber);

    if (attempt > bestResult) {
      bestResult = attempt;
      textRedaktor(randomResult, bestResult);
    }
  } else if (inputValue !== randomNumber) {
    if (attempt > 1) {
      if (inputValue < randomNumber) {
        textRedaktor(textInfo, "Число меньше загаданного");
        attempt--;
        textRedaktor(randomAttemp, attempt);
      } else if (inputValue > randomNumber) {
        textRedaktor(textInfo, "Число больше загаданного");
        attempt--;
        textRedaktor(randomAttemp, attempt);
      }
    } else {
      textRedaktor(textInfo, "Вы проиграли");
      textRedaktor(randomAttemp, 0);
    }
  }
});

resetBtn.addEventListener("click", () => {
  textRedaktor(textInfo, "Начните угадывать");
  textRedaktor(guessText, "?");
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  attempt = 20;
  textRedaktor(randomAttemp, attempt);

});
