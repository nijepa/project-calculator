const operatorTypes = ['+', '-', '*', '/'];
let num1 = [];
let num2 = [];
let result = 0;
let operatorSelected = false;
let operatorType = [];
let entered = [];

function pressDigit() {
	let digit = document.querySelectorAll('.digit');
	let digits = [].slice.call(digit);

	digits.forEach(function (item, idx) {
		item.addEventListener('click', function () {
				operatorSelected ? displayDigit(item, true) : displayDigit(item, false);
		});
	});
}

function pressClear() {
	let clear = document.getElementById('clear');
	clear.addEventListener('click', clearDisplay)
}

function pressOperator() {
	let operator = document.querySelectorAll('.operator');
	let operators = [].slice.call(operator);
	
	operators.forEach(function (item, idx) {
		item.addEventListener('click', function () {
				displayOperator(item);
		});
	});
}

function pressBack() {
	let back = document.getElementById('back');
	back.addEventListener('click', clearLast)
}

function pressEqual(num1, ope) {
	let equal = document.getElementById('equal');
	equal.addEventListener('click', operate);
}

pressDigit()
pressClear()
pressOperator()
pressBack()
pressEqual()

function operate() {
	let ope1 = num1.join('');
	num2.push(ope1.replace(/,/, ''))

	console.log(operatorType[0])
	for (let i = 0; i <= operatorType.length; i++) {
		switch (operatorType[i]) {
			case '+':
				result = add(num2[i], num2[i + 1]);
			break;
			case '-':
				result = subtract(num2[i], num2[i + 1]);
			break;
			case '*':
				result = multiply(num2);
			break;
			case '/':
				result = devide(num2);
			break;
		}
	}

	clearDisplay(true);
	let disp = document.getElementById('first');
	disp.textContent = result;

}

function displayDigit(digit, next) {
	if (next) {
		let disp2 = document.getElementById('second');
		let stringFromArr = entered.join('')
		disp2.textContent = stringFromArr.replace(/,/, '')
		stringFromArr = num1.join('')
		num2.push(stringFromArr.replace(/,/, ''))

		clearDisplay(false);
		operatorSelected = false;
	}

	if (result != 0) { result = 0; }
	let disp = document.getElementById('first');
	if (num1.length <= 13) {
		num1.push(digit.textContent);
		let stringFromArr = num1.join('')
		disp.textContent = stringFromArr.replace(/,/, '') 
		entered.push(digit.textContent);
	}
}

function displayOperator(operator) {

	if (!operatorSelected) {
		let disp = document.getElementById('first');
		disp.textContent = ' ' + operator.textContent + ' ';
		entered.push(disp.textContent);
		operatorSelected = true;
		operatorType.push(operator.textContent);

		if (result != 0) {
			num1.push(result);
			let disp2 = document.getElementById('second');
			disp2.textContent = result + ' ' + operator.textContent + ' ';
			disp.textContent = '';
			result = 0;
		}
		
		//return;
	}
}

function clearDisplay(all) {

	num1 = [];

	document.getElementById('first').textContent = '';

	if (all) {
		num2 = [];
		entered = [];
		operatorType = [];
		document.getElementById('second').textContent = '';
	} 
}

function clearLast() {

	let arr = entered[entered.length - 1];

	if (arr) {
		operatorTypes.some(r => arr.indexOf(r) >= 0) === 'number' ? operatorType.pop() : num1.pop();

		entered.pop();

		let display1 = document.getElementById('first');
		let display2 = document.getElementById('second');
		
		let stringFromArr = entered.join('')

		if (display1.textContent == display2.textContent) {
			display2.textContent = stringFromArr.replace(/,/, '')
		}

		display1.textContent = stringFromArr.replace(/,/, '')
	}
}

function add (num1, num2) {
	let res = parseFloat(num1) + parseFloat(num2);
	if (res == undefined) {
		return res = 0;
	}
	return res;
}

function subtract (num1, num2) {
	let res = parseFloat(num1) - parseFloat(num2);
	if (res == undefined) {
		return res = 0;
	}
	return res;
}

function sum (arr) {
	let res = arr.reduce(function(a, b){
		return a + b;
		}, 0);
		return res;
}

function multiply (arr) {
	let res = arr.reduce(function(a, b){
		return a * b});
		return res;
}

function devide(arr) {
	let res = arr.reduce(function(a, b){
		return a / b});
		return res;
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(n) {
	return n ? n * factorial(n - 1) : 1;
}