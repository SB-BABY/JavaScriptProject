// получаем наш input
const inputForm = document.querySelector(".form__input");

// получаем наш список
const toDoList = document.querySelector(".todo__list");
const toDoItem = document.querySelector(".todo__item");

// получаем текст
const textToDo = document.querySelector(".todo__text");

// Получаем кнопку добавить
const addFormBtn = document.querySelector(".form__btn");
const clearAllBtn = document.querySelector(".btn__clear-all");
const clearBtn = document.querySelector(".btn__clear");

// МОДАЛЬНОЕ ОКНО
// получаем модальное
const modal = document.querySelector(".modal");
// получаем оверлэй
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal__close");
const yesModalBtn = document.querySelector(".modal__btn-yes");
const noModalBtn = document.querySelector(".modal__btn-no");
const modalTextTask = document.querySelector(".modal__arr");

// функция для проверки задач
function udapteToDoTask() {
  const arrToDoItem = document.querySelectorAll(".todo__item");
  arrToDoItem.length >= 1
    ? clearAllBtn.classList.remove("hidden")
    : clearAllBtn.classList.add("hidden");
}

// функция для проверки выбранных задач
function chechToDoTask() {
  const arrToDoItem = document.querySelectorAll(".delete");
  console.log(arrToDoItem.length);
  arrToDoItem.length >= 1
    ? clearBtn.classList.remove("hidden")
    : clearBtn.classList.add("hidden");
}

// функция для добавления списка
function addToDoItem() {
  // создаем новые элементы и добавляем им классы

  // проверяем заполненность поля ввода
  if (inputForm.value !== "") {
    // Сам элемент li
    const newItem = document.createElement("li");
    newItem.className = "todo__item";
    // Текст внутри элемента
    const newInput = document.createElement("span");
    newInput.innerText = inputForm.value;
    newInput.className = "todo__text";
    newItem.append(newInput);
    // Кнопка закрытия
    const newBtnClose = document.createElement("button");
    newBtnClose.className = "todo__close";
    newItem.append(newBtnClose);

    toDoList.append(newItem);

    // Очищаем поле ввода
    inputForm.value = "";

    // Запускаем функцию для динамической появления кнопки
    udapteToDoTask();
  } else {
    inputForm.placeholder = "Ты ничего не вписал";
  }
}

// функция модалки
function modalToggle() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

// действия для добавление задания
addFormBtn.addEventListener("click", () => {
  addToDoItem();
});

// действия для удаления задания или пометки о его заверщенности
toDoList.addEventListener("click", (event) => {
  const classCheck = event.target.classList;

  if (classCheck.contains("todo__text") || classCheck.contains("todo__item")) {
    classCheck.toggle("delete");
    chechToDoTask();
  } else if (classCheck.contains("todo__close")) {
    event.target.parentElement.remove();
    // Запускаем функцию для динамической появления кнопки
    udapteToDoTask();
  }
});

// дейтсвие при удадление выбранных элементов
clearBtn.addEventListener("click", () => {
  const arrToDoItem = document.querySelectorAll(".delete");
  // делаем появление модального окна
  modalToggle();

  modalTextTask.innerText = `${arrToDoItem.length} задач`;

  yesModalBtn.addEventListener(
    "click",
    () => {
      modalToggle();
      arrToDoItem.forEach((item) => item.remove());
      chechToDoTask();
    },
    { once: true }
  ); // Обработчик сработает только один раз

  noModalBtn.addEventListener(
    "click",
    () => {
      modalToggle();
      chechToDoTask();
    },
    { once: true }
  ); // Обработчик сработает только один раз
});

modalClose.addEventListener("click", () => {
  modalToggle();
});

overlay.addEventListener("click", () => {
  modalToggle();
});

// закрытие модальки через клавишу
document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalToggle();
  }
});

// Запускаем функцию для динамической появления кнопки
udapteToDoTask();
