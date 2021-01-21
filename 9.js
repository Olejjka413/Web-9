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