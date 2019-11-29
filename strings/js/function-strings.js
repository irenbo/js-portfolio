(function () {
'use strict'

// Задание 1. Написать функцию поиска в строке указанной подстроки и замены ее на новую. 
//Строку, ее подстроку для замены и новую подстроку вводит пользователь.

function replace(stringName) {
    let userSubstring = prompt("Введите подстроку");
    //let checkStr = userString.includes(userSubstring);
    let checkStr = stringName.includes(userSubstring);
    if (!checkStr) {
   console.log("Совпадений не найдено");
}

    if (checkStr) {

        let userNewSubstring = prompt("Введите замену подстроки");
        let userSubstringLength = userSubstring.length;
        console.log(userSubstringLength);
        let firstIndex = stringName.indexOf(userSubstring);
        console.log(firstIndex);

        let lastIndex = firstIndex + userSubstringLength;
        console.log(lastIndex);

        let userNewString1 = stringName.slice(0, firstIndex);
        console.log(userNewString1);
        let userNewString2 = userNewString1 + userNewSubstring;
        console.log(userNewString2);
           
        let userNewString = userNewString2 + stringName.slice(lastIndex);
        console.log(userNewString);
        alert(userNewString);
    }
    
    return;
}

let userString = prompt("Введите строку");
replace(userString);

// Задание 2. Вводится строка, содержащая буквы, целые неотрицательные числа 
//и иные символы. Написать функцию, которая реализует следующий функционал: требуется 
//все числа, которые встречаются в строке, поместить в отдельный целочисленный массив.
// Например, если дана строка "дом 48, корпус 9, парадная 7, этаж 4", то 
//в массиве должны оказаться числа 48, 9, 7 и 4

function arrNum(userData) {

	let arrUserData = userData.split(" ");
	let arrDataNum = [];

	for (let i = 0; i < userData.length; i++) {

    	let dataNum = parseInt(arrUserData[i]);
		console.log(dataNum);

	 		if (!(isNaN(dataNum))) {
   				console.log('Посмотрим что получилось');
   				arrDataNum[i] = dataNum;   
		}
	}
	
	console.log(arrDataNum);
	cleanArray(arrDataNum);

function cleanArray(actual) {
  let newArray = new Array();
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  console.log(newArray);
  alert(newArray);
  return newArray;
}
return;
}

let dataFromUser = prompt("Введите адрес:");
arrNum(dataFromUser);

// Задание 3. Допустим, пользователь вводит названия городов через пробел. 
//Вы их присваиваете переменной. Переставьте названия так, 
//чтобы они были упорядочены по алфавиту.

function sortNames(names) {
	let arrCities = names.split(" ", 7);
	console.log(arrCities);
	arrCities.sort();
	console.log("Отсортировано по алфавиту: " + arrCities);
	alert(`Отсортировано по алфавиту: ${arrCities}`);
	return;
}

let cityName = prompt("Введите названия городов (не более 7) через пробел:");
sortNames(cityName);

} ());