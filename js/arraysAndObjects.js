/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

function minMax(array){
	// used the .apply method to refer to numbers inside the array input
	var minMaxArr = [];
	minMaxArr.push(Math.min.apply(null, array));
	minMaxArr.push(Math.max.apply(null, array));
	// console.log(minMaxArr)
	return minMaxArr;
}
minMax([37, 3, 56, 4, 754, 92, 29])
minMax([1, 2, 3, 4, 5])
/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */
function filterArray(input) {
	var result = new Set();
	if (Array.isArray(input)){
		input.forEach(element => {
			if (!isNaN(element) && typeof element !== 'string') {
				result.add(element);
			}
		})
	}
	return Array.from(result);
}

console.log(filterArray(['dog', 2, 'toy', 1, 45]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123, 0, 1]));

/**
 * Is the Average of All Elements a Whole Number?
 * Create a function named isAvgWhole that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
 *
 * Examples
 *
 * >> isAvgWhole([1, 3]) ➞ true
 * >> isAvgWhole([1, 2, 3, 4]) ➞ false
 * >> isAvgWhole([1, 5, 6]) ➞ true
 * >> isAvgWhole([1, 1, 1]) ➞ true
 * >> isAvgWhole([9, 2, 2, 5]) ➞ false
 */
function isAvgWhole(input){
	if(Array.isArray(input)){
		var sum = 0;
		input.forEach(element => {sum += element})
		var average = sum / input.length;
		return Number.isInteger(average);
	}
}

console.log(isAvgWhole([1, 2, 3, 4]));
isAvgWhole([1, 5, 6])
/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
drinks = [
	{name: "lemonade", price: 50},
    {name: "lime", price: 10},
	{name: "cherry", price: 35}
]

function sortDrinkByPrice(input) {
	if(Array.isArray(input)) {
		// drinks = [
		// 	{name: "lemonade", price: 50},
		// 	{name: "lime", price: 10}
		// ]
		// var sorted = input.sort((a, b) => (a.price > b.price) ? 1 : -1);
		// console.log(sorted)
		return input.sort(function (a, b) {
			return a.price - b.price
		});
	}
}
sortDrinkByPrice(drinks);

/**
 * Scrabble Hand
 * Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
 *
 * Here's an example hand:
 *
 * [
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 * ]
 *
 * The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
 *
 * Examples
 *
 * >> maximumScore([
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 *    ]) ➞ 28
 *
 * >> maximumScore([
 *      { tile: "B", score: 2 },
 *      { tile: "V", score: 4 },
 *      { tile: "F", score: 4 },
 *      { tile: "U", score: 1 },
 *      { tile: "D", score: 2 },
 *      { tile: "O", score: 1 },
 *      { tile: "U", score: 1 }
 *    ]) ➞ 15
 *
 * Notes
 * Each tile is represented as an object with two keys: tile and score.
 */
var hand = [
      { tile: "N", score: 1 },
      { tile: "K", score: 5 },
      { tile: "Z", score: 10 },
      { tile: "X", score: 8 },
      { tile: "D", score: 2 },
      { tile: "A", score: 1 },
      { tile: "E", score: 1 }
 ]
var hand2 = [
	{ tile: "B", score: 2 },
	{ tile: "V", score: 4 },
	{ tile: "F", score: 4 },
	{ tile: "U", score: 1 },
	{ tile: "D", score: 2 },
	{ tile: "O", score: 1 },
	{ tile: "U", score: 1 }
]

function maximumScore(input) {
	if (Array.isArray(input)) {
		var totalscore = 0;
		for (let i = 0; i < input.length; i++) {
			totalscore += input[i].score;
		}
		return totalscore;
	}
}

// console.log(maximumScore(hand));
// console.log(maximumScore(hand2));
/**
 * Converting Objects to Arrays
 * Write a function named toArray that converts an object into an array, where each element represents a key-value pair in the form of an array.
 *
 * Examples
 *
 * >> toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 * >> toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
 * >> toArray({}) ➞ []
 *
 * Notes
 * Return an empty array if the object is empty.
 */

function toArray(object) {
	//Object method has 3 ways to do this, 'Object.keys', 'Object.entries', 'Object.values'
	return Object.entries(object)
	// console.log(objArray);
}

// console.log(toArray({a: 1, b: 2}));
// console.log(toArray({}));
// console.log(toArray({shrimp: 15, tots: 12}));

/**
 * Array of Multiples
 * Create a function named arrayOfMultiples that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 *
 * Examples
 *
 * >> arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 * >> arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 * >> arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 *
 * Notes
 * Notice that num is also included in the returned array.
 */

function arrayOfMultiples(num, length) {
	// var i = 0;
	var array = [];
	for (var i = 0; i <= length; i++) {
		array.push(i)
	}
	// while(i <= length) {
	// 	array.push(i += num);
	// }
	// console.log(array);
	return array;
	
	// still figuring out how to push multiples to the array
	// console.log(array);
}
arrayOfMultiples(7, 5)
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */
budget1 = [
	{ name: "John", age: 21, budget: 23000 },
	{ name: "Steve",  age: 32, budget: 40000 },
	{ name: "Martin",  age: 16, budget: 2700 }
]

budget2 = [
		{ name: "John",  age: 21, budget: 29000 },
		{ name: "Steve",  age: 32, budget: 32000 },
        { name: "Martin",  age: 16, budget: 1600 }
]



function getBudgets(array) {
	var totalBudget = 0;
	for (let i = 0; i < array.length; i++) {
		totalBudget += array[i].budget;
	}
	console.log(totalBudget);
	return totalBudget;
}
// getBudgets(budget1);
// getBudgets(budget2);

/**
 * Special Arrays
 * An array is special if every even index contains an even number and every odd index contains an odd number.
 * Create a function named isSpecialArray that returns true if an array is special, and false otherwise.
 *
 * Examples
 *
 * >> isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
 *    // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
 * >> isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
 *    // Index 2 has an odd number 9.
 * >> isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
 *    // Index 3 has an even number 8.
 */
// var evenIndices = [];
// var oddIndices = [];
function isSpecialArray(array) {
	for (var i = 0; i < array.length; i++) {
		// var evenIndices = [];
		// var oddIndices = [];
		//	Even index with even element
		if((i % 2 === 0 && array[i] % 2 !== 0) || (i % 2 !== 0 && array[i] % 2 === 0)) {
			return false;
		}
	}
	return true;
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));

/**
 * Remove Duplicates from an Array
 * Create a function named removeDuplicates that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
 *
 * Examples
 * >> removeDuplicates([1, 0, 1, 0]) ➞ [1, 0]
 * >> removeDuplicates(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
 * >> removeDuplicates(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
 *
 * Notes
 * Tests contain arrays with both strings and numbers.
 * Tests are case sensitive.
 * Each array item is unique.
 */

function removeDuplicates(array) {
	var result = new Set();
	if(Array.isArray(array)) {
		array.forEach(function (element) {
			result.add(element);
		});
	}
	return Array.from(result);
	// return newArray;
}

// console.log(removeDuplicates([1, 0, 1, 0]));
// console.log(removeDuplicates(["The", "big", "cat"]));
// console.log(removeDuplicates(["John", "Taylor", "John"]));

/**
 * Lowercase and Uppercase Map
 * Create a function named mapping that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
 *
 * Examples
 *
 * >> mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
 * >> mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
 * >> mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
 *
 * Notes
 * All of the letters in the input list will always be lowercase.
 */

function mapping(array) {
	if (Array.isArray(array)) {
		var newArray = {};
			array.forEach(function (low){
			newArray = Object.assign(array[low]);
			})
		
	}
	// console.log(newArray);
	// return array.map(element.toUpperCase);
	
	//--While loop attempt below
	// var key, keys = Object.keys(array);
	// var i = keys.length;
	// var newArray = {};
	// while(i--){
	// 	key = keys[i];
	// 	newArray[key.toUpperCase()] = array[key];
	// }
	// return newArray;
	//--For Each Attempt below
	// array.forEach(function (element){
	// 	console.log(`array.${element} = ${array[element].toUpperCase()}`)
	// })
}

// mapping(["p", "s"]);

// mapping(["a", "b", "c"]);
/**
 * Can You Spare a Square?
 * Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
 *
 * Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
 *
 * Create a function named tpChecker that will receive an object with two key/values:
 *
 *   people — Number of people in the household.
 *   tp — Number of rolls.
 *
 * Return a statement telling the user if they need to buy more TP!
 *
 * Examples
 *
 * >> tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"
 * >> tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"
 * >> tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
 */

function tpChecker(object) {

}


/**
 * Get Student Top Notes
 * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
 * If the student does not have notes then let's assume their top note is equal to 0.
 *
 * Examples
 *
 * >> getStudentTopNotes([
 *      {
 *         id: 1,
 *         name: "Jacek",
 *         notes: [5, 3, 4, 2, 5, 5]
 *       },
 *      {
 *         id: 2,
 *         name: "Ewa",
 *         notes: [2, 3, 3, 3, 2, 5]
 *       },
 *      {
 *         id: 3,
 *         name: "Zygmunt",
 *         notes: [2, 2, 4, 4, 3, 3]
 *       }
 *    ]) ➞ [5, 5, 4]
 */


/**
 * The Frugal Gentleman
 * Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
 *
 * Given an array of wine objects, write a function named chosenWine that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
 *
 * Examples
 *
 * >> chosenWine([
 *        { name: "Wine A", price: 8.99 },
 *        { name: "Wine 32", price: 13.99 },
 *        { name: "Wine 9", price: 10.99 }
 *    ]) ➞ "Wine 9"
 * >> chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
 * >> chosenWine([]) ➞ null
 *
 * Notes
 * All wines will be different prices, so there is no confusion in the ordering.
 */


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */
function convertAddressToObject(string) {
	result = {};
	var streetNum = [];
	var streetName = [];
	var strArr = string.split(' ');
	
	
	for (let i = 0; i < strArr.length; i++) {
		if (!isNaN(strArr[i])) {
			streetNum.push(strArr[i]);
		} else {
			streetName.push(strArr[i]);
		}
	}
	
	var newStreetNum = streetNum.join('')
	var newStreetName = streetName.join(' ');
	
	
	result.streetNumber = newStreetNum;
	result.streetName = newStreetName;
	console.log(result)
	return result;
	
}
// convertAddressToObject('5408 Villa Nueva')
// convertAddressToObject('8626 Sunny Oaks')

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

function totalPets(array) {
	sumPets = 0;
	for (let i = 0; i < array.length; i++) {
		sumPets += array[i].pets;
	}
	console.log(sumPets)
	return sumPets;
}
// totalPets([
// 	{name: 'Fernando Mendoza', pets: 1},
// 	{name: 'Douglas Hirsh', pets: 8},
// 	{name: 'Kenneth Howell', pets: 2}
// ])

// Hash Plus Count
function hashPlusCount(string) {
	if(typeof string !== 'string'){
		return false;
	}
	var strArr = string.split('');
	var hashArr = [];
	var plusArr = [];
	for (var i = 0; i < strArr.length; i++) {
		if(strArr[i] === '#') {
			hashArr.push(strArr[i]);
		} else if (strArr[i] === '+') {
			plusArr.push(strArr[i]);
		}
	}
	return [hashArr.length, plusArr.length];
}




// Record Temps
function recordTemps(array1, array2) {
	function minMax(array){
		// used the .apply method to refer to numbers inside the array input
		var result = [];
		var min = Math.min.apply(null, array);
		var max = Math.max.apply(null, array);
		result.push(min, max);
		return result;
	}
	
	var result = [];
	// created an empty array for each day of the week
	var sun = [];
	var mon = [];
	var tues = [];
	var wed = [];
	var thur = [];
	var fri = [];
	var sat = [];
	
	// push values into respective day of the week arrays
	sun.push(array1[0], array2[0]);
	mon.push(array1[1], array2[1]);
	tues.push(array1[2], array2[2]);
	wed.push(array1[3], array2[3]);
	thur.push(array1[4], array2[4]);
	fri.push(array1[5], array2[5]);
	sat.push(array1[6], array2[6]);
	
	// join and split into a single array and take min and max of each
	var tempSun = sun.join(',').split(',');
	result.push(minMax(tempSun));
	
	var tempMon = mon.join(',').split(',');
	result.push(minMax(tempMon));
	
	var tempTues = tues.join(',').split(',');
	result.push(minMax(tempTues));
	
	var tempWed = wed.join(',').split(',');
	result.push(minMax(tempWed));
	
	var tempThur = thur.join(',').split(',');
	result.push(minMax(tempThur));
	
	var tempFri = fri.join(',').split(',');
	result.push(minMax(tempFri));
	
	var tempSat = sat.join(',').split(',');
	result.push(minMax(tempSat));
	
	// return result;
	// console.log(result);
	return result
}

// Make Temp
function makeTitle(string) {
	var stringArr = string.split(' ')
	for (var i = 0; i < stringArr.length; i++) {
		// slicing at the 1 index and capitalizing at the 0 index then concat them back together
		stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
	}
	// joining array back as a string with a space separator
	var newString = stringArr.join(" ")
	console.log(newString)
	return newString;
}

// Free Shipping
function freeShipping(input){
	var values = Object.values(input);
	// console.log(totals);
	var totals = 0;
	for (var i = 0; i < values.length; i++) {
		totals += values[i];
	}
	// console.log(totals);
	if(totals > 50) {
		console.log("Free Shipping")
		return true;
	} else {
		console.log("No Free Shipping");
		return false;
	}
}

// Unique Sort
function uniqueSort(array) {
	// create a set so that it can remove duplicate elements
	var result = new Set()
	var sortedArray = array.sort();
	for (var i = 0; i < sortedArray.length; i++) {
		result.add(parseFloat(sortedArray[i]));
	}
	uniqueArray = Array.from(result)
	console.log(uniqueArray)
	return uniqueArray
}

// Jazzify
function jazzify(array) {
	// create for loop that adds 7 to every chord
	result = [];
	for (var i = 0; i < array.length; i++) {
		if(array[i].includes('7')){
			result.push(array[i])
		} else {
			result.push(array[i] + '7');
		}
	}
	console.log(result)
	return result;
}

// Index Shuffle
function indexShuffle(string) {
	result = [];
	var stringArray = string.split('');
	var evenCh =[];
	var oddCh = [];
	for (var i = 0; i < stringArray.length; i++) {
		if(i % 2 === 0){
			evenCh.push(stringArray[i]);
		} else if(i % 2 !== 0){
			oddCh.push(stringArray[i]);
		}
	}
	result.push(evenCh.join(''));
	result.push(oddCh.join(''));
	result.join("");
	
	var newResult = result.join('')
	console.log(newResult);
	return newResult
}

// Amplify
function amplify(num) {
	var numArray = [];
	for (var i = 0; i <= num; i++) {
		numArray.push(i);
	}
	var ampedArray = [];
	// numArray.forEach(function (number) {
	// 	if (number % 4 !== 0){
	// 		ampedArray.push(numArray[number])
	// 	} else if (number % 4 === 0){
	// 		ampedArray.push(numArray[number] * 10)
	// 	}
	// })
	for (var j = 1; j < numArray.length ; j++) {
		// var ampedArray = [];
		if(numArray[j] % 4 === 0){
			ampedArray.push(numArray[j] * 10)
		} else {
			ampedArray.push(numArray[j])
		}
	}
	return ampedArray;
}