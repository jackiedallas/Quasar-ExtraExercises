const exampleString = "World";
const exampleChars = ['a', 'b', 'c', 'd', 'e', 'f', 'r', 'h'];
const randomChar = exampleChars[Math.ceil(Math.random() * 7)];
const randomPositiveNumber = Math.ceil(Math.random() * 1022);
const randomInteger = Math.ceil(Math.random() * 999);
const exampleNumbersArr = [-12, -45, 87, 9.35, 54, 999, 36.97];
const exampleArray = ['hello', 9, 43, 8, 'world', 'my', 4, 'watermelon'];

// Find the Smallest and Biggest Numbers
describe('minMax', function() {
    it('should be a defined function', function () {
        expect(typeof minMax).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(minMax(exampleNumbersArr))).toBe(true);
    });
    it('should return an array with 2 elements', function () {
        expect(minMax(exampleNumbersArr).length).toBe(2);
    });
    it('should return [1, 54] when passed in [14, 35, 6, 1, 34, 54]', function () {
        expect(minMax([14, 35, 6, 1, 34, 54])).toEqual([1, 54]);
    });
    it('should return [1.346, 1.8734] when passed in [1.346, 1.6532, 1.8734, 1.8723]', function () {
        expect(minMax([1.346, 1.6532, 1.8734, 1.8723])).toEqual([1.346, 1.8734]);
    });
    it('should return [0.2345, 0.984] when passed in [0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]', function () {
        expect(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])).toEqual([0.2345, 0.984]);
    });
    it('should return [13, 98] when passed in [13, 72, 98, 43, 24, 65, 31]', function () {
        expect(minMax([13, 72, 98, 43, 24, 65, 31])).toEqual([13, 98]);
    });
    it('should return [-54, -21] when passed in [-54, -23, -54, -21]', function () {
        expect(minMax([-54, -23, -54, -21])).toEqual([-54, -21]);
    });
    it('should return [-0.6834, 0.5632] when passed in [-0.473, -0.6834, -0.1287, 0.5632]', function () {
        expect(minMax([-0.473, -0.6834, -0.1287, 0.5632])).toEqual([-0.6834, 0.5632]);
    });
    it('should return [0, 0] when passed in [0, 0, 0, 0]', function () {
        expect(minMax([0, 0, 0, 0])).toEqual([0, 0]);
    });
});

// Filter out Strings from an Array
describe('filterArray', function () {
    it('should be a defined function', function () {
        expect(typeof filterArray).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(filterArray(exampleArray))).toBe(true);
    });
    it('should return [1, 2] when passed in [1, 2, "a", "b"]', function () {
        expect(filterArray([1, 2, "a", "b"])).toEqual([1, 2]);
    });
    it('should return [1, 0, 15] when passed in [1, "a", "b", 0, 15]', function () {
        expect(filterArray([1, "a", "b", 0, 15])).toEqual([1, 0, 15]);
    });
    it('should return [1, 2, 123] when passed in [1, 2, "aasf", "1", "123", 123]', function () {
        expect(filterArray([1, 2, "aasf", "1", "123", 123])).toEqual([1, 2, 123]);
    });
    it('should return [4, 6] when passed in ["jsyt", 4, "yt", 6]', function () {
        expect(filterArray(["jsyt", 4, "yt", 6])).toEqual([4, 6]);
    });
    it('should return [5, 8, 9] when passed in ["r", 5, "y", "e", 8, 9]', function () {
        expect(filterArray(["r", 5, "y", "e", 8, 9])).toEqual([5, 8, 9]);
    });
    it('should return an empty array when passed in ["a", "e", "i", "o", "u"]', function () {
        expect(filterArray(["a", "e", "i", "o", "u"])).toEqual([]);
    });
    it('should return [4, 5] when passed in [4, "z", "f", 5]', function () {
        expect(filterArray([4, "z", "f", 5])).toEqual([4, 5]);
    });
    it('should return [123] when passed in ["abc", 123]', function () {
        expect(filterArray(["abc", 123])).toEqual([123]);
    });
    it('should return [567] when passed in ["$%^", 567, "&&&"]', function () {
        expect(filterArray(["$%^", 567, "&&&"])).toEqual([567]);
    });
    it('should return [43, 76, 88] when passed in ["w", "r", "u", 43, "s", "a", 76, "d", 88]', function () {
        expect(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88])).toEqual([43, 76, 88]);
    });
});

// Is the Average of All Elements a Whole Number?
describe('isAvgWhole', function () {
    it('should be a defined function', function () {
        expect(typeof isAvgWhole).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof isAvgWhole(exampleNumbersArr)).toBe('boolean');
    });
    it('should return true when passed in [1, 1, 1, 1]', function () {
        expect(isAvgWhole([1, 1, 1, 1])).toBe(true);
    });
    it('should return true when passed in [1, 2, 3, 4, 5]', function () {
        expect(isAvgWhole([1, 2, 3, 4, 5])).toBe(true);
    });
    it('should return false when passed in [3, 5, 9]', function () {
        expect(isAvgWhole([3, 5, 9])).toBe(false);
    });
    it('should return false when passed in [5, 2, 4]', function () {
        expect(isAvgWhole([5, 2, 4])).toBe(false);
    });
    it('should return false when passed in [11, 22]', function () {
        expect(isAvgWhole([11, 22])).toBe(false);
    });
    it('should return false when passed in [4, 1, 7, 9, 2, 5, 7, 2, 4]', function () {
        expect(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4])).toBe(false);
    });
});

// Drink Sorting
const drinks1 = [
    {name: 'lemonade', price: 90},
    {name: 'lime', price: 432},
    {name: 'peach', price: 23}
];

const sorted1 = [
    {name: 'peach', price: 23},
    {name: 'lemonade', price: 90},
    {name: 'lime', price: 432}
];

const drinks2 = [
    {name: 'water', price: 120},
    {name: 'lime', price: 80},
    {name: 'peach', price: 90}
];

const sorted2 = [
    {name: 'lime', price: 80},
    {name: 'peach', price: 90},
    {name: 'water', price: 120}
];
describe('sortDrinkByPrice', function () {
    it('should be a defined function', function () {
        expect(typeof 'sortDrinkByPrice').toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(sortDrinkByPrice(drinks1))).toBe(true);
    });
    it('should return [{name: \'peach\', price: 23}, {name: \'lemonade\', price: 90}, {name: \'lime\', price: 432}] when passed in [{name: \'lemonade\', price: 90}, {name: \'lime\', price: 432}, {name: \'peach\', price: 23}]', function () {
        expect(sortDrinksByPrice(drinks1)).toEqual(sorted1);
    });
    it('should return [{name: \'lime\', price: 80}, {name: \'peach\', price: 90}, {name: \'water\', price: 120}] when passed in [{name: \'water\', price: 120}, {name: \'lime\', price: 80}, {name: \'peach\', price: 90}]', function () {
        expect(sortDrinksByPrice(drinks2)).toEqual(sorted2);
    });
});

// Scrabble Hand
describe('maximumScore', function () {
    it('should be a defined function', function () {
        expect(typeof maximumScore).toBe('function');
    });
    it('should return a number when executed', function () {
        expect(typeof maximumScore([
            { tile: "B", score: 2 },
            { tile: "V", score: 4 },
            { tile: "F", score: 4 },
            { tile: "U", score: 1 },
            { tile: "D", score: 2 },
            { tile: "O", score: 1 },
            { tile: "U", score: 1 }
        ])).toBe('number');
    });
    it('should return 28 when passed in [{tile: \'N\', score: 1}, {tile: \'K\', score: 5},  {tile: \'Z\', score: 10}, {tile: \'X\', score: 8}, {tile: \'D\', score: 2}, {tile: \'A\', score: 1}, {tile: \'E\', score: 1}]', function () {
        expect(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}])).toBe(28);
    });
    it('should return 15 when passed in [{tile: \'B\', score: 2}, {tile: \'V\', score: 4},  {tile: \'F\', score: 4}, {tile: \'U\', score: 1}, {tile: \'D\', score: 2}, {tile: \'O\', score: 1}, {tile: \'U\', score: 1}]', function () {
        expect(maximunScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}])).toBe(15);
    });
    it('should return 18 when passed in [{tile: \'M\', score: 3}, {tile: \'Q\', score: 10},  {tile: \'O\', score: 1}, {tile: \'E\', score: 1}, {tile: \'E\', score: 1}, {tile: \'I\', score: 1}, {tile: \'A\', score: 1}]', function () {
        expect(maximunScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toBe(18);
    });
    it('should return 7 when passed in [{tile: \'A\', score: 1}, {tile: \'E\', score: 1},  {tile: \'O\', score: 1}, {tile: \'E\', score: 1}, {tile: \'E\', score: 1}, {tile: \'I\', score: 1}, {tile: \'A\', score: 1}]', function () {
        expect(maximunScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toBe(7);
    });
});

// Converting Objects to Arrays
describe('toArray',  function () {
    it('should be a defined function', function () {
        expect(typeof toArray).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(toArray({}))).toBe(true);
    });
    it('should return [["a", 1], ["b", 2]] when passed in { a: 1, b: 2 }', function () {
        expect(toArray({ a: 1, b: 2 })).toEqual([["a", 1], ["b", 2]]);
    });
    it('should return [["foo", 33], ["bar", 45], ["baz", 67]] when passed in { foo: 33, bar: 45, baz: 67 }', function () {
        expect(toArray({ foo: 33, bar: 45, baz: 67 })).toEqual([["foo", 33], ["bar", 45], ["baz", 67]]);
    });
    it('should return [["shrimp", 15], ["tots", 12]] when passed in { shrimp: 15, tots: 12 }', function () {
        expect(toArray({ shrimp: 15, tots: 12 })).toEqual([["shrimp", 15], ["tots", 12]]);
    });
    it('should return an empty array when passed in an empty object', function () {
        expect(toArray({})).toEqual([]);
    });
});

// Array of Multiples
describe('arrayOfMultiples', function () {
    it('should be a defined function', function () {
        expect(typeof arrayOfMultiples).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(arrayOfMultiples(randomInteger, randomInteger))).toBe(true);
    });
    it('should return [7, 14, 21, 28, 35] when passed in 7 and 5', function () {
        expect(arrayOfMultiples(7, 5)).toEqual([7, 14, 21, 28, 35]);
    });
    it('should return [12, 24, 36, 48, 60, 72, 84, 96, 108, 120] when passed in 12 and 10', function () {
        expect(arrayOfMultiples(12, 10)).toEqual([12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
    });
    it('should return [17, 34, 51, 68, 85, 102, 119] when passed in 17 and 7', function () {
        expect(arrayOfMultiples(17, 7)).toEqual([17, 34, 51, 68, 85, 102, 119]);
    });
    it('should return [630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820] when passed in 630 and 14', function () {
        expect(arrayOfMultiples(630, 14)).toEqual([630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820]);
    });
    it('should return [140, 280, 420] when passed in 140 and 3', function () {
        expect(arrayOfMultiples(140, 3)).toEqual([140, 280, 420]);
    });
    it('should return [7, 14, 21, 28, 35, 42, 49, 56] when passed in 7 and 8', function () {
        expect(arrayOfMultiples(7, 8)).toEqual([7, 14, 21, 28, 35, 42, 49, 56]);
    });
    it('should return [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231] when passed in 11 and 21', function () {
        expect(arrayOfMultiples(11, 21)).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231]);
    });
});

// Get Sum of People's Budget
describe('getBudgets', function () {
    it('should be a defined function', function () {
        expect(typeof getBudgets).toBe('function');
    });
    it('should return a number when executed', function () {
        expect(typeof getBudgets([
            { name: "John",  age: 21, budget: 29000 },
            { name: "Steve",  age: 32, budget: 32000 },
            { name: "Martin",  age: 16, budget: 1600 }
        ])).toBe('number');
    });
    it('should return 65700 when passed in [{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]', function () {
        expect(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}])).toBe(65700);
    });
    it('should return 62600 when passed in [{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}]', function () {
        expect(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}])).toBe(62600);
    });
    it('should return 32926 when passed in [{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}]', function () {
        expect(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}])).toBe(32926);
    });
    it('should return 36923 when passed in [{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}]', function () {
        expect(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}])).toBe(36923);
    });
});

// Special Arrays
describe('isSpecialArray', function () {
    it('should be a defined function', function () {
        expect(typeof isSpecialArray).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof isSpecialArray(exampleNumbersArr)).toBe('boolean');
    });
    it('should return true when passed in [2, 7, 4, 9, 6, 1, 6, 3]', function () {
        expect(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])).toBe(true);
    });
    it('should return true when passed in [2, 1, 2, 1]', function () {
        expect(isSpecialArray([2, 1, 2, 1])).toBe(true);
    });
    it('should return true when passed in [4, 5, 6, 7]', function () {
        expect(isSpecialArray([4, 5, 6, 7])).toBe(true);
    });
    it('should return true when passed in [4, 5, 6, 7, 0, 5]', function () {
        expect(isSpecialArray([4, 5, 6, 7, 0, 5])).toBe(true);
    });
    it('should return false when passed in [2, 7, 9, 1, 6, 1, 6, 3]', function () {
        expect(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])).toBe(false);
    });
    it('should return false when passed in [2, 7, 8, 8, 6, 1, 6, 3]', function () {
        expect(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])).toBe(false);
    });
    it('should return false when passed in [1, 1, 1, 2]', function () {
        expect(isSpecialArray([1, 1, 1, 2])).toBe(false);
    });
    it('should return false when passed in [2, 2, 2, 2]', function () {
        expect(isSpecialArray([2, 2, 2, 2])).toBe(false);
    });
});

// Remove Duplicates from an Array
describe('removeDuplicates', function () {
    it('should be a defined function', function () {
        expect(typeof removeDuplicates).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(removeDuplicates(exampleArray))).toBe(true);
    });
    it('should return [\'John\', \'Taylor\'] when passed in [\'John\', \'Taylor\', \'John\']', function () {
        expect(removeDuplicates(['John', 'Taylor', 'John'])).toEqual(['John', 'Taylor']);
    });
    it('should return [\'John\', \'Taylor\', \'john\'] when passed in [\'John\', \'Taylor\', \'John\', \'john\']', function () {
        expect(removeDuplicates(['John', 'Taylor', 'John', 'john'])).toEqual(['John', 'Taylor', 'john']);
    });
    it('should return [\'javascript\', \'python\', \'ruby\', \'c\'] when passed in [\'javascript\', \'python\', \'python\', \'ruby\', \'javascript\', \'c\', \'ruby\']', function () {
        expect(removeDuplicates(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby'])).toEqual(['javascript', 'python', 'ruby', 'c']);
    });
    it('should return [1, 2, 3, 5, 6, 7] when passed in [1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]', function () {
        expect(removeDuplicates([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5])).toEqual([1, 2, 3, 5, 6, 7]);
    });
    it('should return [\'#\', \'%\', \'&\', \'$\'] when passed in [\'#\', \'#\', \'%\', \'&\', \'#\', \'$\', \'&\']', function () {
        expect(removeDuplicates(['#', '#', '%', '&', '#', '$', '&'])).toEqual(['#', '%', '&', '$']);
    });
    it('should return [3, \'Apple\', \'Orange\'] when passed in [3, \'Apple\', 3, \'Orange\', \'Apple\']', function () {
        expect(removeDuplicates([3, 'Apple', 3, 'Orange', 'Apple'])).toEqual([3, 'Apple', 'Orange']);
    });
});

// Lowercase and Uppercase Map
describe('mapping', function () {
    it('should be a defined function', function () {
        expect(typeof mapping).toBe('function');
    });
    it('should not return null when executed', function () {
        expect(mapping(exampleChars)).not.toEqual(null);
    });
    it('should return an object when executed', function () {
        expect(typeof mapping(exampleChars)).toBe('object');
    });
    it('should return { a: "A", b: "B", c: "C" } when passed in ["a", "b", "c"]', function () {
        expect(mapping(["a", "b", "c"])).toEqual({ a: "A", b: "B", c: "C" });
    });
    it('should return { p: "P", s: "S", t: "T" } when passed in ["p", "s", "t"]', function () {
        expect(mapping(["p", "s", "t"])).toEqual({ p: "P", s: "S", t: "T" });
    });
    it('should return { a: "A", v: "V", y: "Y", z: "Z" } when passed in ["a", "v", "y", "z"]', function () {
        expect(mapping(["a", "v", "y", "z"])).toEqual({ a: "A", v: "V", y: "Y", z: "Z" });
    });
});

// Can You Spare a Square?
describe('tpChecker', function () {
    it('should be a defined function', function () {
        expect(typeof tpChecker).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof tpChecker({people: randomPositiveNumber, tp: randomPositiveNumber})).toBe('string');
    });
    it('should return "Your TP will only last 2 days, buy more!" when passed in { people: 4, tp: 1 }', function () {
        expect(tpChecker({ people: 4, tp: 1 })).toBe("Your TP will only last 2 days, buy more!");
    });
    it('should return "Your TP will only last 11 days, buy more!" when passed in { people: 6, tp: 8 }', function () {
        expect(tpChecker({ people: 6, tp: 8 })).toBe("Your TP will only last 11 days, buy more!");
    });
    it('should return "Your TP will only last 8 days, buy more!" when passed in { people: 1, tp: 1 }', function () {
        expect(tpChecker({ people: 1, tp: 1 })).toBe("Your TP will only last 8 days, buy more!");
    });
    it('should return "Your TP will last 17 days, no need to panic!" when passed in { people: 2, tp: 4 }', function () {
        expect(tpChecker({ people: 2, tp: 4 })).toBe("Your TP will last 17 days, no need to panic!");
    });
    it('should return "Your TP will last 58 days, no need to panic!" when passed in { people: 3, tp: 20 }', function () {
        expect(tpChecker({ people: 3, tp: 20 })).toBe("Your TP will last 58 days, no need to panic!");
    });
    it('should return "Your TP will last 26 days, no need to panic!" when passed in { people: 4, tp: 12 }', function () {
        expect(tpChecker({ people: 4, tp: 12 })).toBe("Your TP will last 26 days, no need to panic!");
    });
});

// Get Student Top Notes
describe('getStudentTopNotes', function () {
    it('should be a defined function', function () {
        expect(typeof getStudentTopNotes).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(getStudentTopNotes([{id: 3, name: 'Eva', notes: []}]))).toBe(true);
    });
    it('should return [0] when passed in [{id: 3, name: \'Eva\', notes: []}]', function () {
        expect(getStudentTopNotes([{id: 3, name: 'Eva', notes: []}])).toEqual([0]);
    });
    it('should return [5, 5, 4] when passed in [{id: 1, name: "Jacek", notes: [5, 4, 3]}, {id: 2, name: "Ewa", notes: [5]}, {id: 3, name: "Zygmunt", notes: [4]}]', function () {
        expect(getStudentTopNotes([
            {id: 1, name: "Jacek", notes: [5, 4, 3]},
            {id: 2, name: "Ewa", notes: [5]},
            {id: 3, name: "Zygmunt", notes: [4]}
        ])).toEqual([5, 5, 4]);
    });
    it('should return [3, 1, 0] when passed in [{id: 1, name: "Jacek", notes: [1, 2, 3]}, {id: 2, name: "Ewa", notes: [1, 1, 1]}, {id: 3, name: "Zygmunt", notes: []}]', function () {
        expect(getStudentTopNotes([
            {id: 1, name: "Jacek", notes: [1, 2, 3]},
            {id: 2, name: "Ewa", notes: [1, 1, 1]},
            {id: 3, name: "Zygmunt", notes: []}
        ])).toEqual([3, 1, 0]);
    });
    it('should return [0, 0] when passed in [{id: 2, name: "Ewa", notes: []}, {id: 3, name: "Zygmunt", notes: []}]', function () {
        expect(getStudentTopNotes([
            {id: 2, name: "Ewa", notes: []},
            {id: 3, name: "Zygmunt", notes: []}
        ])).toEqual([0, 0]);
    });
});

// The Frugal Gentleman
describe("chosenWine", function () {
    it("should be a defined function", function () {
        expect(typeof chosenWine).toBe("function");
    });
    it("should return null when passed in an empty array", function () {
        expect(chosenWine([])).toEqual(null);
    });
    it("should return 'Wine 9' when passed in [{name: \"Wine A\", price: 8.99}, {name: \"Wine 32\", price: 13.99}, {name: \"Wine 9\", price: 10.99}]", function () {
        expect(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 32", price: 13.99}, {name: "Wine 9", price: 10.99}])).toBe("Wine 9");
    });
    it("should return 'Wine B' when passed in [{name: \"Wine A\", price: 8.99}, {name: \"Wine B\", price: 9.99}]", function () {
        expect(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine B", price: 9.99}])).toBe("Wine B");
    });
    it("should return 'Wine A' when passed in [{name: \"Wine A\", price: 8.99}]", function () {
        expect(chosenWine([{name: "Wine A", price: 8.99}])).toBe("Wine A");
    });
    it("should return 'Wine 72' when passed in [{name: \"Wine A\", price: 8.99}, {name: \"Wine 389\", price: 109.99}, {name: \"Wine 44\", price: 38.44}, {name: \"Wine 72\", price: 22.77}]", function () {
        expect(chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 389", price: 109.99}, {name: "Wine 44", price: 38.44}, {name: "Wine 72", price: 22.77}])).toBe("Wine 72");
    });
});