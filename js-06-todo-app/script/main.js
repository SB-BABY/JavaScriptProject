// получаем наш input
const inputForm = document.querySelector('.form__input');

// получаем наш список
const toDoList = document.querySelector('.todo__list');

// получаем текст
const textToDo = document.querySelector('.todo__text');

// Получаем кнопку добавить
const addFormBtn = document.querySelector('.form__btn');

// функция для добавления списка
function addToDoItem(){
  // создаем новые элементы и добавляем им классы

  // Сам элемент li
  const newItem = document.createElement('li')
  newItem.className = "todo__item";
  // Текст внутри элемента
  const newInput = document.createElement('span')
  newInput.innerText = inputForm.value
  newItem.append(newInput)
  // Кнопка закрытия
  const newBtnClose = document.createElement('button')
  newBtnClose.className = "todo__close";
  newItem.append(newBtnClose)

  toDoList.append(newItem)

  // Очищаем поле ввода
  inputForm.value = ''

}

addFormBtn.addEventListener('click', ()=>{
  addToDoItem()
})

toDoList.addEventListener('click', (event) => {
  console.log(event.target);

  const classCheck = event.target.classList

  if (classCheck.contains('todo__text') || classCheck.contains('todo__item')){
    event.target.classList.toggle('delete')

  } else if (classCheck.contains('todo__close')){
    event.target.parentElement.remove();
  }
})