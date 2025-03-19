// получаем коллекцию инпутов из нашего html
const inputs = document.querySelectorAll('.controls input'); 

// функция для 
function handleUpdate(){
	// console.log(this.value)
	// так как у нас есть реальнаеы размеры, то мы обращаемся к sizing, а на color мы используем  ковычки
	const suffix = this.dataset.sizing || '';

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(
	input => input.addEventListener('change', handleUpdate)
)