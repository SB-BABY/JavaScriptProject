// получаем наши часы, минуты, секунды
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


// создаем функцию установки даты
function setDate(){
	// устанавливаем мировое время время
	const now = new Date();

	// создаем переменные для часов, минут и секунд
	const seconds = now.getSeconds()
	// в данной переменной мы храним угол секундной стрелкт
	// +90 мы добавляем так как у нас в стилях стоит 90deg
	const secondsDegrees = (seconds / 60) * 360 + 90
	// назначаем сек стрелке стиль для ее отображения
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`

	const mins = now.getMinutes()
	const minsDegrees = (mins / 60) * 360 + 90
	minHand.style.transform = `rotate(${minsDegrees}deg)`

	const hours = now.getMinutes()
	const hoursDegrees = (mins / 12) * 360 + 90
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`

	console.log(seconds)
}

setInterval(setDate, 1000)