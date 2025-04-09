
// получаем массив элементов
const arrayAlp = document.querySelectorAll(".boxes__box");
// новый массив для записи результат
let newArrayAlp;

// получаем кнопку закрытие модального окна
const closeModal = document.querySelector('.modal__close')
// получаем модальное окно и оверлжй
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// функция, которая убирает класс hidden при выигрыше
function openModalWindow(){
  modalWindow.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
}
// вешаем событие, которое позволит закрыть модальное окно на кнопку, overlay и клавишу esc
closeModal.addEventListener('click', ()=>{
  modalWindow.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
})

overlay.addEventListener("click", () => {
  modalWindow.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

document.addEventListener('keydown', (event)=>{
  console.log(event);
  // делаем проверку на нажатую кнопку
  // делаем проверку, чтобы была проверка класса, иначе будет появляться при нажатии на кнопку
  if (event.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    modalWindow.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
})


const test = document.querySelector('.content__title')

for (let item of arrayAlp) {
  item.addEventListener("click", () => {
    let prevItem = item.previousElementSibling;
    if (prevItem !== null) {
      prevItem.before(item);
      newArrayAlp = document.querySelectorAll(".boxes__box");
      console.log(newArrayAlp);
    }

    if (
      newArrayAlp[0].classList.contains('box__a') &&
      newArrayAlp[1].classList.contains('box__b') &&
      newArrayAlp[2].classList.contains('box__c') &&
      newArrayAlp[3].classList.contains('box__d') &&
      newArrayAlp[4].classList.contains('box__e') &&
      newArrayAlp[5].classList.contains('box__f')
    ){
      // test.textContent = 'Вы победили'
      // Вызываем функцию
      openModalWindow()
      document.querySelector('.boxes__btn').classList.toggle('hidden')
    }
  });
}

// ! костыль - функция перезагрузки страницы
function reloadSite() {
  window.location.reload();
}