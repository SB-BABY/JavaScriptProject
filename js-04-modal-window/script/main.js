// получаем кнопки 
const btnModal = document.querySelectorAll('.show-modal')

// получаем кнопку закрытие 
const btnClose = document.querySelector('.close-modal')

// получаем модальное
const modal = document.querySelector('.modal')

// получаем оверлэй 
const overlay = document.querySelector('.overlay')

for(let item of btnModal){
  item.addEventListener('click', ()=>{
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
  })
}

btnClose.addEventListener('click', ()=>{
  modal.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
})

overlay.addEventListener('click', ()=>{
  modal.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
})

// закрытие модальки через клавишу
//! e или event ( как угодно можно писать) - это объект события, который мы исползьуем 
// второе условие нам нужно, так как если мы будем нажимать на кнопку, то будет открывать и модальнео окно
document.addEventListener('keydown', (e)=>{
  console.log(e);
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    modal.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
  }
})