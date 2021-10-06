/**
 * Hashes and Pluses
 * Create a function named hashPlusCount that returns the number of hashes and pluses in a string.
 *
 * Examples
 *
 * hashPlusCount("###+") ➞ [3, 1]
 * hashPlusCount("##+++#") ➞ [3, 3]
 * hashPlusCount("#+++#+#++#") ➞ [4, 6]
 * hashPlusCount("") ➞ [0, 0]
 *
 * Notes
 * Return [0, 0] for an empty string.
 * Return in the order of [hashes, pluses].
 */
// validate that input is a string
// validate that inputs are hashes and pluses
// separate into two different arrays and return the length of each array
// join output into a new array
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

console.log(hashPlusCount(""));
console.log(hashPlusCount("#+++#+#++#"));

/**
 * Amplify the Multiples of Four
 * In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).
 *
 * Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).
 *
 * Given a higher bound num, create a function named amplify that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
 *
 * Examples
 *
 * amplify(4) ➞ [1, 2, 3, 40]
 * // Create a sequence from 1 to 4
 * // 4 is exactly divisible by 4, so it will be 4*10 = 40
 *
 * amplify(3) ➞ [1, 2, 3]
 * // Create a sequence from 1 to 3
 * // There are no numbers that can be exactly divided by 4
 *
 * amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
 * // Create a sequence from 1 to 25
 * // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
 *
 * Notes
 * The given parameter num will always be equal to or greater than 1.
 * Remember to include the num as the higher bound of the sequence (see the Examples) above.
 * A number a amplified by a factor b can also be read as: a * b.
 * A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
 */

// write code to create an array of numbers up to the argument
// write code to loop through the array and find numbers divisible
// write code to multiply the numbers divisible by 4 times 10
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

// console.log(amplify(20));


/**
 * Record Temperatures
 * You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.
 *
 * The records array contains the all-time record low/high temperatures for that day of the week.
 *
 *   [[record low, record high], ...]
 *
 * The current week array contains the daily low/high temperatures for each day of the current week.
 *
 *   [[daily low, daily high], ...]
 *
 * A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.
 *
 * Create a function named recordTemps to compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.
 *
 *    There may be multiple record temperatures in a week.
 *    If there are no broken records return the original records array.
 *
 * Examples
 *
 * //             sun       mon      tues       wed      thur      fri       sat
 * recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
 *             [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])
 *
 * ➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]
 *
 * The previous record low for Monday was 24. The current week's low for Monday was 19. So 19 replaces 24 as Monday's new record low.
 *
 * Notes
 * There won't be a record high and record low set on the same day.
 * Index 0 will always be the low and index 1 will always be the high [low, high].
 * For reference these temps are °F but you do not need to convert any temperatures.
 */


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
	console.log(result);
	return result
}

// recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
//           [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])


/**
 * Index Shuffle
 * Write a function named indexShuffle that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
 *
 * To illustrate:
 *
 * indexShuffle("abcd") ➞ "acbd"
 * // "ac" (even-indexed) + "bd" (odd-indexed)
 *
 * Examples
 *
 * indexShuffle("abcdefg") ➞ "acegbdf"
 * indexShuffle("holiday") ➞ "hldyoia"
 * indexShuffle("maybe") ➞ "myeab"
 */

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

// indexShuffle("abcdefg")
// indexShuffle("holiday")
// indexShuffle("maybe")
/**
 * Instant JAZZ
 * Create a function named jazzify which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.
 *
 * Examples
 *
 * jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
 * jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
 * jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
 * jazzify([]) ➞ []
 *
 * Notes
 * Return an empty array if the given array is empty.
 */

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
// jazzify(["G7", "F", "C"])
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])



/**
 * Purge and Organize
 * Given an array of numbers, write a function named uniqueSort that returns an array that...
 *   1. Has all duplicate elements removed.
 *   2. Is sorted from least to greatest value.
 *
 * Examples
 *
 * uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
 * uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
 * uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
 */

function uniqueSort(array) {
	// create a set so that it can remove duplicate elements
	var result = new Set()
	var sortedArray = array.sort();
	for (var i = 0; i < sortedArray.length; i++) {
		result.add(sortedArray[i]);
	}
	uniqueArray = Array.from(result)
	console.log(uniqueArray)
	return uniqueArray
}
uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])
uniqueSort([6, 7, 3, 2, 1])

/**
 * Capitalize the First Letter of Each Word
 * Create a function named makeTitle that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
 *
 * Examples
 *
 * makeTitle("This is a title") ➞ "This Is A Title"
 * makeTitle("capitalize every word") ➞ "Capitalize Every Word"
 * makeTitle("I Like Pizza") ➞ "I Like Pizza"
 * makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
 *
 * Notes
 * Some words may contain more than one uppercase letter (see example #4).
 */

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
// makeTitle("This is a title");
// makeTitle("Create a function named freeShipping that determines whether a shopping order is eligible for free shipping.");

/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 * Notes
 * Ignore tax or additional fees when calculating the total order cost.
 */

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

// freeShipping({Shampoo: 5.99, Rubber_Ducks: 15.99});
// freeShipping({ Flatscreen_TV: 399.99 });
// freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 });
/**
 * How Good is Your Name?
 * Create a function named nameScore that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available below. Add up the letters of your name to get the total score.
 *
  const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
  "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
  "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
  "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
 *
 * Return your result as per the following rules:
 *
 * score <= 60:   "NOT TOO GOOD"
 * 61 <= score <= 300:  "PRETTY GOOD"
 * 301 <= score <= 599:  "VERY GOOD"
 * score >= 600:  "THE BEST"
 *
 * Examples
 *
 * nameScore("MUBASHIR") ➞ "THE BEST"
 * nameScore("YOU") ➞ "VERY GOOD"
 * nameScore("MATT") ➞ "THE BEST"
 * nameScore("PUBG") ➞ "NOT TOO GOOD"
 *
 * Notes
 * All names will be uppercase
 */
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
	"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
	"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
	"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

function nameScore(name) {
	// split name into array
	var nameArr = name.split('');
	// console.log(nameArr)
	var score = 0;
	for (let i = 0; i < nameArr.length; i++) {
		if (nameArr.map(key, value)) {
			if (nameArr[i] === scores.key) {
				score += scores.value;
			}
		}
	}
	console.log(score);
}
// nameScore("MUBASHIR")

// function getKeyByValue(object, value) {
// 	return Object.keys(object).find(key => object[key] === value);
// }
//
//
// const map = {"first" : "1", "second" : "2"};
// console.log(getKeyByValue(map,"2"));
/**
 * Burglary Series (06): Convert to Number
 * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
 * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
 *
 * Examples
 *
 * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
 * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
 * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
 */
function convertToNumber(input) {
	console.log(Object.values(input));
	
	// var newObj = []
	// for (let i = 0; i < input.length; i++) {
	// 	newObj.push(parseInt(Object.values(input[i])));
	// }
	// console.log(newObj)
	// Object.entries coverts object argument to an array
	// var inputObj = Object.entries(input)
	// console.log(inputObj)
	// var newObj = [];
	// for (let i = 0; i < input.length; i++) {
	// 	console.log(Object.values(input[i]));
	//
	// }
	// console.log(newObj)
}

convertToNumber({ piano: "200" })
convertToNumber({ piano: "200", tv: "300", stereo: "400" })

/**
 * Frequency Distribution
 *
 * Create a function named getFrequencies that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
 *
 * Examples
 *
 * getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
 * getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
 * getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
 * getFrequencies([]) ➞ {}
 *
 * Notes
 * If given an empty array, return an empty object (see example #4).
 * The object should be in the same order as in the input array.
 */

