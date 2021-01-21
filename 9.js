/// Задание 1 ///
function task1() {
	console.log("Задание №1");
    let weather = {
        city: 'Москва',
        temp: '+15',
		sky: 'облачно'
    };
	console.log("Свойства: ");
	for (key in weather) 
		{
		console.log(key);
		}
	console.log('В городе ', weather.city ,' сейчас ', weather.temp ,' по Цельсию. За окном ', weather.sky);
}
/// Задание 2 ///
function task2() {
	console.log("Задание №2");
	function cut(){
		let arr	= [1, 2, 3, 4, 5];
		let l = arr.length;
		for (let i = 0; i < l; i++) {
			if (arr.length == 1) {
				console.log(arr[0].toString());
				return;
			}
			let output = `${arr[arr.length - 1]}. Осталось: `;
			arr.pop();
			output = output + arr;
			console.log(output);
		}
	}
	cut()
}
/// Задание 3 ///
function task3() {
	console.log("Задание №3");
	let word = prompt('Введите какое-нибудь слово:');
    isPalindrome(word);
	function isPalindrome(str){
		
		let reverse_str = str.split("").reverse().join("");
		let check;
		if (str == reverse_str) {
			check = true;
			console.log(check, 'слово является палиндромом');
		} else {
			check = false;
			console.log(check, 'слово не является палиндромом');
		}
}
}
/// Задание 4 ///
function task4() {
	console.log("Задание №4");
	let multiply = prompt('Введите число, на которое нужно умножить массив');
	let matr = [[4, 1, 7],[1, 5, 0],[2, 2, 6]];
    function scalarMultiplication(num, arr){
		console.log('Исходный массив: ');
		orig_output = '';
		for(var i = 0;i < arr.length;i++)
		{	
			for(var j= 0;j <arr[i].length;j++){
				orig_output += (' ' + arr[i][j] + '    ');
			}
			orig_output += ('\n');
		}
		console.log(orig_output);
		console.log('Массив, умноженный на ваше число: ');
		new_output = '';
		for(var i = 0;i < arr.length;i++)
		{
			for(var j= 0;j <arr[i].length;j++)
			{
				arr[i][j] *= num;
				new_output += (' ' + arr[i][j] + '    ');
			}
			new_output += ('\n');
		}
		console.log(new_output);
	}
	scalarMultiplication(multiply, matr);
}