let inputBox = document.getElementById('input');

function input(num) {
	inputBox.value += num;
}

function clearInput() {
	inputBox.value = '';
}

function calculate() {
	try {
		inputBox.value = eval(inputBox.value);
	} catch (error) {
		alert('Invalid calculation');
	}
}
