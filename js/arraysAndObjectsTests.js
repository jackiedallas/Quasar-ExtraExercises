const exampleString = "World";
const exampleChars = ['a', 'b', 'c', 'd', 'e', 'f', 'r', 'h'];
const randomPositiveNumber = Math.ceil(Math.random() * 1022);
const randomInteger = Math.ceil(Math.random() * 999);
const exampleArray = ['hello', 9, 43, 8, 'world', 'my', 4, 'watermelon'];
const randomNumber = Math.floor(Math.random() * 10);
const exampleNumbersArr = [-12, -45, 87, 9.35, 54, 999, 36.97, -12, 9.35];
const exampleNames = ['MUBASHIR', 'MATT', 'PAKISTAN', 'AIRFORCE', 'ROBBY', 'BILL GATES', 'YOU', 'JAMES', 'KENNETH', 'DOUGLAS'];

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
        expect(typeof sortDrinkByPrice).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(sortDrinkByPrice(drinks1))).toBe(true);
    });
    it('should return [{name: \'peach\', price: 23}, {name: \'lemonade\', price: 90}, {name: \'lime\', price: 432}] when passed in [{name: \'lemonade\', price: 90}, {name: \'lime\', price: 432}, {name: \'peach\', price: 23}]', function () {
        expect(sortDrinkByPrice(drinks1)).toEqual(sorted1);
    });
    it('should return [{name: \'lime\', price: 80}, {name: \'peach\', price: 90}, {name: \'water\', price: 120}] when passed in [{name: \'water\', price: 120}, {name: \'lime\', price: 80}, {name: \'peach\', price: 90}]', function () {
        expect(sortDrinkByPrice(drinks2)).toEqual(sorted2);
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
        expect(maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}])).toBe(15);
    });
    it('should return 18 when passed in [{tile: \'M\', score: 3}, {tile: \'Q\', score: 10},  {tile: \'O\', score: 1}, {tile: \'E\', score: 1}, {tile: \'E\', score: 1}, {tile: \'I\', score: 1}, {tile: \'A\', score: 1}]', function () {
        expect(maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toBe(18);
    });
    it('should return 7 when passed in [{tile: \'A\', score: 1}, {tile: \'E\', score: 1},  {tile: \'O\', score: 1}, {tile: \'E\', score: 1}, {tile: \'E\', score: 1}, {tile: \'I\', score: 1}, {tile: \'A\', score: 1}]', function () {
        expect(maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toBe(7);
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

// Hashes and Pluses
describe('hashPlusCount', function () {
    it('should be a defined function', function () {
        expect(typeof hashPlusCount).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(hashPlusCount(""))).toBe(true);
    });
    it('should return [4, 0] when passed in "####"', function () {
        expect(hashPlusCount("####")).toEqual([4, 0]);
    });
    it('should return [1, 0] when passed in "#"', function () {
        expect(hashPlusCount("#")).toEqual([1, 0]);
    });
    it('should return [0, 7] when passed in "+++++++"', function () {
        expect(hashPlusCount("+++++++")).toEqual([0, 7]);
    });
    it('should return [0, 2] when passed in "++"', function () {
        expect(hashPlusCount("++")).toEqual([0, 2]);
    });
    it('should return [2, 2] when passed in "#+#+"', function () {
        expect(hashPlusCount("#+#+")).toEqual([2, 2]);
    });
    it('should return [3, 1] when passed in "###+"', function () {
        expect(hashPlusCount("###+")).toEqual([3, 1]);
    });
    it('should return [3, 3] when passed in "##+++#"', function () {
        expect(hashPlusCount("##+++#")).toEqual([3, 3]);
    });
    it('should return [4, 6] when passed in "#+++#+#++#"', function () {
        expect(hashPlusCount("#+++#+#++#")).toEqual([4, 6]);
    });
    it('should return [0, 0] when passed in ""', function () {
        expect(hashPlusCount("")).toEqual([0, 0]);
    });
});

// Amplify the Multiples of Four
describe('amplify', function () {
    it('should be a defined function', function () {
        expect(typeof amplify).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(amplify(randomInteger))).toBe(true);
    });
    it('should return [1] when passed in 1', function () {
        expect(amplify(1)).toEqual([1]);
    });
    it('should return [1, 2, 3, 40] when passed in 4', function () {
        expect(amplify(4)).toEqual([1, 2, 3, 40]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25] when passed in 25', function () {
        expect(amplify(25)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000] when passed in 100', function () {
        expect(amplify(100)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333] when passed in 333', function () {
        expect(amplify(333)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333]);
    });
    it('should return [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333, 334, 335, 3360, 337, 338, 339, 3400, 341, 342, 343, 3440, 345, 346, 347, 3480, 349, 350, 351, 3520, 353, 354, 355, 3560, 357, 358, 359, 3600, 361, 362, 363, 3640, 365, 366, 367, 3680, 369, 370, 371, 3720, 373, 374, 375, 3760, 377, 378, 379, 3800, 381, 382, 383, 3840, 385, 386, 387, 3880, 389, 390, 391, 3920, 393, 394, 395, 3960, 397, 398, 399, 4000, 401, 402, 403, 4040, 405, 406, 407, 4080, 409, 410, 411, 4120, 413, 414, 415, 4160, 417, 418, 419, 4200, 421, 422, 423, 4240, 425, 426, 427, 4280, 429, 430, 431, 4320, 433, 434, 435, 4360, 437, 438, 439, 4400, 441, 442, 443, 4440, 445, 446, 447, 4480, 449, 450, 451, 4520, 453, 454, 455, 4560, 457, 458, 459, 4600, 461, 462, 463, 4640, 465, 466, 467, 4680, 469, 470, 471, 4720, 473, 474, 475, 4760, 477, 478, 479, 4800, 481, 482, 483, 4840, 485, 486, 487, 4880, 489, 490, 491, 4920, 493, 494, 495, 4960, 497, 498, 499, 5000] when passed in 500', function () {
        expect(amplify(500)).toEqual([1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25, 26, 27, 280, 29, 30, 31, 320, 33, 34, 35, 360, 37, 38, 39, 400, 41, 42, 43, 440, 45, 46, 47, 480, 49, 50, 51, 520, 53, 54, 55, 560, 57, 58, 59, 600, 61, 62, 63, 640, 65, 66, 67, 680, 69, 70, 71, 720, 73, 74, 75, 760,77, 78, 79, 800, 81, 82, 83, 840, 85, 86, 87, 880, 89, 90, 91,920, 93, 94, 95, 960, 97, 98, 99, 1000, 101, 102, 103, 1040, 105, 106, 107, 1080, 109, 110, 111, 1120, 113, 114, 115, 1160, 117, 118, 119, 1200, 121, 122, 123, 1240, 125, 126, 127, 1280, 129, 130, 131, 1320, 133, 134, 135, 1360, 137, 138, 139, 1400, 141, 142, 143, 1440, 145, 146, 147, 1480, 149, 150, 151, 1520, 153, 154, 155, 1560, 157, 158, 159, 1600, 161, 162, 163, 1640, 165, 166, 167, 1680, 169, 170, 171, 1720, 173, 174, 175, 1760, 177, 178, 179, 1800, 181, 182, 183, 1840, 185, 186, 187, 1880, 189, 190, 191, 1920, 193, 194, 195, 1960, 197, 198, 199, 2000, 201, 202, 203, 2040, 205, 206, 207, 2080, 209, 210, 211, 2120, 213, 214, 215, 2160, 217, 218, 219, 2200, 221, 222, 223, 2240, 225, 226, 227, 2280, 229, 230, 231, 2320, 233, 234, 235, 2360, 237, 238, 239, 2400, 241, 242, 243, 2440, 245, 246, 247, 2480, 249, 250, 251, 2520, 253, 254, 255, 2560, 257, 258, 259, 2600, 261, 262, 263, 2640, 265, 266, 267, 2680, 269, 270, 271, 2720, 273, 274, 275, 2760, 277, 278, 279, 2800, 281, 282, 283, 2840, 285, 286, 287, 2880, 289, 290, 291, 2920, 293, 294, 295, 2960, 297, 298, 299, 3000, 301, 302, 303, 3040, 305, 306, 307, 3080, 309, 310, 311, 3120, 313, 314, 315, 3160, 317, 318, 319, 3200, 321, 322, 323, 3240, 325, 326, 327, 3280, 329, 330, 331, 3320, 333, 334, 335, 3360, 337, 338, 339, 3400, 341, 342, 343, 3440, 345, 346, 347, 3480, 349, 350, 351, 3520, 353, 354, 355, 3560, 357, 358, 359, 3600, 361, 362, 363, 3640, 365, 366, 367, 3680, 369, 370, 371, 3720, 373, 374, 375, 3760, 377, 378, 379, 3800, 381, 382, 383, 3840, 385, 386, 387, 3880, 389, 390, 391, 3920, 393, 394, 395, 3960, 397, 398, 399, 4000, 401, 402, 403, 4040, 405, 406, 407, 4080, 409, 410, 411, 4120, 413, 414, 415, 4160, 417, 418, 419, 4200, 421, 422, 423, 4240, 425, 426, 427, 4280, 429, 430, 431, 4320, 433, 434, 435, 4360, 437, 438, 439, 4400, 441, 442, 443, 4440, 445, 446, 447, 4480, 449, 450, 451, 4520, 453, 454, 455, 4560, 457, 458, 459, 4600, 461, 462, 463, 4640, 465, 466, 467, 4680, 469, 470, 471, 4720, 473, 474, 475, 4760, 477, 478, 479, 4800, 481, 482, 483, 4840, 485, 486, 487, 4880, 489, 490, 491, 4920, 493, 494, 495, 4960, 497, 498, 499, 5000]);
    });
});

// Record Temperatures
describe('recordTemps', function () {
    it('should be a defined function', function () {
        expect(typeof recordTemps).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(recordTemps(
            [
                [34, 82],
                [24, 82],
                [20, 89],
                [5, 88],
                [9, 88],
                [26, 89],
                [27, 83]
            ],
            [
                [44, 72],
                [19, 70],
                [40, 69],
                [39, 68],
                [33, 64],
                [36, 70],
                [38, 69]
            ]))).toBe(true);
    });
    it('should return [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]] when passed in [[34, 82], [24, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]], [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]]', function () {
        expect(recordTemps([
                [34, 82],
                [24, 82],
                [20, 89],
                [5, 88],
                [9, 88],
                [26, 89],
                [27, 83]
            ],
            [
                [44, 72],
                [19, 70],
                [40, 69],
                [39, 68],
                [33, 64],
                [36, 70],
                [38, 69]
            ])).toEqual([[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]);
    });
    it('should return [[25, 80], [27, 88], [19, 88], [23, 85], [21, 89], [23, 78], [17, 79]] when passed in [[25, 80], [27, 88], [19, 88], [23, 85], [21, 89], [23, 78], [17, 79]], [[40, 70], [41, 68], [45, 68], [39, 65], [44, 72], [43, 69], [37, 68]]', function () {
        expect(recordTemps([
                [25, 80],
                [27, 88],
                [19, 88],
                [23, 85],
                [21, 89],
                [23, 78],
                [17, 79],
            ],
            [
                [40, 70],
                [41, 68],
                [45, 68],
                [39, 65],
                [44, 72],
                [43, 69],
                [37, 68],
            ])).toEqual([[25, 80], [27, 88], [19, 88], [23, 85], [21, 89], [23, 78], [17, 79]]);
    });
    it('should return [[19, 78], [21, 79], [22, 90], [20, 79], [25, 86], [25, 82], [19, 80]] when passed in [[19, 78], [21, 79], [22, 90], [21, 79], [30, 86], [25, 82], [19, 80]], [[29, 68], [24, 69], [28, 63], [20, 50], [25, 65], [28, 56], [30, 61]]', function () {
        expect(recordTemps([
                [19, 78],
                [21, 79],
                [22, 90],
                [21, 79],
                [30, 86],
                [25, 82],
                [19, 80],
            ],
            [
                [29, 68],
                [24, 69],
                [28, 63],
                [20, 50],
                [25, 65],
                [28, 56],
                [30, 61],
            ])).toEqual([[19, 78], [21, 79], [22, 90], [20, 79], [25, 86], [25, 82], [19, 80]]);
    });
    it('should return [[29, 90], [19, 78], [26, 91], [20, 86], [29, 79], [16, 84], [24, 83]] when passed in [[29, 90], [19, 78], [26, 91], [20, 86], [29, 79], [16, 84], [24, 83]], [[33, 68], [38, 58], [36, 59], [40, 56], [37, 69], [39, 70], [41, 69]]', function () {
        expect(recordTemps([
                [29, 90],
                [19, 78],
                [26, 91],
                [20, 86],
                [29, 79],
                [16, 84],
                [24, 83],
            ],
            [
                [33, 68],
                [38, 58],
                [36, 59],
                [40, 56],
                [37, 69],
                [39, 70],
                [41, 69],
            ])).toEqual([[29, 90], [19, 78], [26, 91], [20, 86], [29, 79], [16, 84], [24, 83]]);
    });
    it('should return [[17, 84], [17, 90], [28, 85], [15, 89], [21, 80], [6, 86], [25, 87]] when passed in [[17, 84],[17, 90],[28, 85],[15, 89],[21, 80],[6, 86],[28, 87]], [[27, 64],[31, 60],[33, 59],[35, 63],[32, 60],[35, 66],[25, 53]]', function () {
        expect(recordTemps([
                [17, 84],
                [17, 90],
                [28, 85],
                [15, 89],
                [21, 80],
                [6, 86],
                [28, 87],
            ],
            [
                [27, 64],
                [31, 60],
                [33, 59],
                [35, 63],
                [32, 60],
                [35, 66],
                [25, 53],
            ])).toEqual([[17, 84], [17, 90], [28, 85], [15, 89], [21, 80], [6, 86], [25, 87]]);
    });
    it('should return [[30, 88], [19, 89], [17, 79], [26, 93], [24, 84], [28, 90], [17, 90]] when passed in [[30, 88],[19, 89],[17, 79],[26, 93],[24, 84],[30, 90],[17, 90]], [[33, 60],[29, 69],[34, 58],[36, 55],[30, 53],[28, 60],[29, 62]]', function () {
        expect(recordTemps([
                [30, 88],
                [19, 89],
                [17, 79],
                [26, 93],
                [24, 84],
                [30, 90],
                [17, 90],
            ],
            [
                [33, 60],
                [29, 69],
                [34, 58],
                [36, 55],
                [30, 53],
                [28, 60],
                [29, 62],
            ])).toEqual([[30, 88], [19, 89], [17, 79], [26, 93], [24, 84], [28, 90], [17, 90]]);
    });
    it('should return [[22, 91], [13, 79], [11, 80], [30, 91], [18, 77], [19, 85], [7, 87]] when passed in [[22, 91],[13, 79],[11, 80],[30, 91],[18, 77],[19, 85],[7, 87]], [[32, 61],[23, 69],[31, 70],[31, 66],[28, 59],[27, 55],[23, 51]]', function () {
        expect(recordTemps([
                [22, 91],
                [13, 79],
                [11, 80],
                [30, 91],
                [18, 77],
                [19, 85],
                [7, 87],
            ],
            [
                [32, 61],
                [23, 69],
                [31, 70],
                [31, 66],
                [28, 59],
                [27, 55],
                [23, 51],
            ])).toEqual([[22, 91], [13, 79], [11, 80], [30, 91], [18, 77], [19, 85], [7, 87]]);
    });
    it('should return [[39, 103], [38, 99], [38, 104], [31, 99], [34, 103], [36, 101], [35, 99]] when passed in [[39, 103], [38, 99], [38, 104], [31, 99], [34, 103], [36, 101], [35, 99]],[[53, 93], [58, 91], [49, 94], [51, 95], [54, 95], [56, 98], [60, 99]]', function () {
        expect(recordTemps([
                [39, 103],
                [38, 99],
                [38, 104],
                [31, 99],
                [34, 103],
                [36, 101],
                [35, 99],
            ],
            [
                [53, 93],
                [58, 91],
                [49, 94],
                [51, 95],
                [54, 95],
                [56, 98],
                [60, 99],
            ])).toEqual([[39, 103], [38, 99], [38, 104], [31, 99], [34, 103], [36, 101], [35, 99]]);
    });
    it('should return [[42, 106], [37, 97], [31, 101], [30, 100], [38, 101], [29, 100], [27, 99]] when passed in [[42, 106], [37, 97], [31, 101], [30, 100], [38, 101], [29, 98], [27, 99]], [[52, 93], [61, 91], [60, 95], [60, 97], [68, 93], [70, 100], [57, 96]]', function () {
        expect(recordTemps([
                [42, 106],
                [37, 97],
                [31, 101],
                [30, 100],
                [38, 101],
                [29, 98],
                [27, 99],
            ],
            [
                [52, 93],
                [61, 91],
                [60, 95],
                [60, 97],
                [68, 93],
                [70, 100],
                [57, 96],
            ])).toEqual([[42, 106], [37, 97], [31, 101], [30, 100], [38, 101], [29, 100], [27, 99]]);
    });
    it('should return [[40, 98], [30, 100], [35, 100], [29, 105], [33, 101], [27, 96], [29, 100]] when passed in [[40, 98], [30, 100], [35, 100], [29, 105], [33, 100], [27, 96], [29, 97]], [[60, 97], [57, 99], [65, 98], [59, 97], [63, 101], [57, 93], [69, 100]]', function () {
        expect(recordTemps([
                [40, 98],
                [30, 100],
                [35, 100],
                [29, 105],
                [33, 100],
                [27, 96],
                [29, 97],
            ],
            [
                [60, 97],
                [57, 99],
                [65, 98],
                [59, 97],
                [63, 101],
                [57, 93],
                [69, 100],
            ])).toEqual([[40, 98], [30, 100], [35, 100], [29, 105], [33, 101], [27, 96], [29, 100]]);
    });
    it('should return [[45, 99], [32, 99], [32, 102], [28, 103], [31, 99], [34, 104], [32, 100]] when passed in [[45, 99], [32, 99], [32, 102], [28, 103], [31, 99], [34, 104], [32, 100]], [[65, 94], [62, 94], [72, 100], [68, 100], [71, 96], [69, 100], [72, 99]]', function () {
        expect(recordTemps([
                [45, 99],
                [32, 99],
                [32, 102],
                [28, 103],
                [31, 99],
                [34, 104],
                [32, 100],
            ],
            [
                [65, 94],
                [62, 94],
                [72, 100],
                [68, 100],
                [71, 96],
                [69, 100],
                [72, 99],
            ])).toEqual([[45, 99], [32, 99], [32, 102], [28, 103], [31, 99], [34, 104], [32, 100]]);
    });
    it('should return [[39, 101], [35, 98], [30, 97], [33, 103], [29, 99], [36, 100], [30, 103]] when passed in [[39, 101], [35, 98], [30, 97], [33, 103], [29, 98], [36, 97], [30, 103]], [[69, 100],[65, 97],[70, 95],[73, 100],[75, 99],[73, 100],[70, 100]]', function () {
        expect(recordTemps([
                [39, 101],
                [35, 98],
                [30, 97],
                [33, 103],
                [29, 98],
                [36, 97],
                [30, 103],
            ],
            [
                [69, 100],
                [65, 97],
                [70, 95],
                [73, 100],
                [75, 99],
                [73, 100],
                [70, 100],
            ])).toEqual([[39, 101], [35, 98], [30, 97], [33, 103], [29, 99], [36, 100], [30, 103]]);
    });
    it('should return [[50, 105], [40, 101], [24, 99], [29, 99], [38, 100], [31, 103], [33, 102]] when passed in [[50, 105], [40, 100], [24, 99], [29, 99], [38, 100], [31, 100], [33, 100]], [[70, 102], [70, 101], [69, 97], [68, 98], [71, 100], [72, 103], [73, 102]]', function () {
        expect(recordTemps([
                [50, 105],
                [40, 100],
                [24, 99],
                [29, 99],
                [38, 100],
                [31, 100],
                [33, 100],
            ],
            [
                [70, 102],
                [70, 101],
                [69, 97],
                [68, 98],
                [71, 100],
                [72, 103],
                [73, 102],
            ])).toEqual([[50, 105], [40, 101], [24, 99], [29, 99], [38, 100], [31, 103], [33, 102]]);
    });
    it('should return [[37, 100], [31, 104], [38, 102], [30, 99], [40, 107], [29, 99], [28, 101]] when passed in [[37, 100], [31, 104], [38, 102], [30, 97], [40, 107], [29, 99], [28, 101]], [[71, 98], [71, 100], [72, 101], [70, 99], [68, 99], [69, 97], [69, 99]]', function () {
        expect(recordTemps([
                [37, 100],
                [31, 104],
                [38, 102],
                [30, 97],
                [40, 107],
                [29, 99],
                [28, 101],
            ],
            [
                [71, 98],
                [71, 100],
                [72, 101],
                [70, 99],
                [68, 99],
                [69, 97],
                [69, 99],
            ])).toEqual([[37, 100], [31, 104], [38, 102], [30, 99], [40, 107], [29, 99], [28, 101]]);
    });
    it('should return [[32, 99], [40, 99], [25, 101], [34, 97], [19, 103], [35, 100], [36, 102]] when passed in [[32, 99], [40, 97], [25, 101], [34, 97], [19, 103], [35, 98], [36, 102]], [[72, 96], [70, 99], [65, 100], [71, 97], [73, 99], [65, 100], [66, 100]]', function () {
        expect(recordTemps([
                [32, 99],
                [40, 97],
                [25, 101],
                [34, 97],
                [19, 103],
                [35, 98],
                [36, 102],
            ],
            [
                [72, 96],
                [70, 99],
                [65, 100],
                [71, 97],
                [73, 99],
                [65, 100],
                [66, 100],
            ])).toEqual([[32, 99], [40, 99], [25, 101], [34, 97], [19, 103], [35, 100], [36, 102]]);
    });
    it('should return [[42, 98], [35, 105], [29, 98], [33, 104], [29, 104], [30, 102], [32, 98]] when passed in [[42, 98], [35, 105], [29, 98], [33, 104], [29, 104], [30, 102], [32, 98]], [[62, 98], [69, 101], [68, 96], [73, 100], [69, 100], [70, 99], [72, 97]]', function () {
        expect(recordTemps([
                [42, 98],
                [35, 105],
                [29, 98],
                [33, 104],
                [29, 104],
                [30, 102],
                [32, 98],
            ],
            [
                [62, 98],
                [69, 101],
                [68, 96],
                [73, 100],
                [69, 100],
                [70, 99],
                [72, 97],
            ])).toEqual([[42, 98], [35, 105], [29, 98], [33, 104], [29, 104], [30, 102], [32, 98]]);
    });
});

// Index Shuffle
describe('indexShuffle', function () {
    it('should be a defined function', function () {
        expect(typeof indexShuffle).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof indexShuffle(exampleString)).toBe('string');
    });
    it('should return "acebdf" when passed in "abcdef"', function () {
        expect(indexShuffle("abcdef")).toBe("acebdf");
    });
    it('should return "aaaabbbb" when passed in "abababab"', function () {
        expect(indexShuffle("abababab")).toBe("aaaabbbb");
    });
    it('should return "i a  euiu atwsabatfldy" when passed in "it was a beautiful day"', function () {
        expect(indexShuffle("it was a beautiful day")).toBe("i a  euiu atwsabatfldy");
    });
    it('should return "myeab" when passed in "maybe"', function () {
        expect(indexShuffle("maybe")).toBe("myeab");
    });
    it('should return "hldyoia" when passed in "holiday"', function () {
        expect(indexShuffle("holiday")).toBe("hldyoia");
    });
});

// Instant JAZZ
describe('jazzify', function () {
    it('should be a defined function', function () {
        expect(typeof jazzify).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(jazzify([]))).toBe(true);
    });
    it('should return [\'G7\', \'F7\', \'C7\'] when passed in [\'G\', \'F\', \'C\']', function () {
        expect(jazzify(['G', 'F', 'C'])).toEqual(['G7', 'F7', 'C7']);
    });
    it('should return [\'Dm7\', \'G7\', \'E7\', \'A7\'] when passed in [\'Dm\', \'G\', \'E\', \'A\']', function () {
        expect(jazzify(['Dm', 'G', 'E', 'A'])).toEqual(['Dm7', 'G7', 'E7', 'A7']);
    });
    it('should return [\'F7\', \'E7\', \'A7\', \'Ab7\', \'Gm7\', \'C7\'] when passed in [\'F7\', \'E7\', \'A7\', \'Ab7\', \'Gm7\', \'C7\']', function () {
        expect(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])).toEqual(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']);
    });
    it('should return [\'G7\', \'C7\'] when passed in [\'G\', \'C7\']', function () {
        expect(jazzify(['G', 'C7'])).toEqual(['G7', 'C7']);
    });
    it('should return [] when passed in []', function () {
        expect(jazzify([])).toEqual([]);
    });
});

// Purge and Organize
describe('uniqueSort', function () {
    it('should be a defined function', function () {
        expect(typeof uniqueSort).toBe('function');
    });
    it('should return an array when executed', function () {
        expect(Array.isArray(uniqueSort(exampleNumbersArr))).toBe(true);
    });
    it('should return [1, 2, 3, 4, 5, 8, 10] when passed in [1, 5, 8, 2, 3, 4, 4, 4, 10]', function () {
        expect(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10])).toEqual([1, 2, 3, 4, 5, 8, 10]);
    });
    it('should return [1, 2, 4, 5, 7] when passed in [1, 2, 5, 4, 7, 7, 7]', function () {
        expect(uniqueSort([1, 2, 5, 4, 7, 7, 7])).toEqual([1, 2, 4, 5, 7]);
    });
    it('should return [0, 1, 2, 3, 4, 5, 6, 7] when passed in [7, 6, 5, 4, 3, 2, 1, 0, 1]', function () {
        expect(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1])).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });
    it('should return [1, 3, 4, 5, 6, 27, 100] when passed in [3, 6, 5, 4, 3, 27, 1, 100, 1]', function () {
        expect(uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1])).toEqual([1, 3, 4, 5, 6, 27, 100]);
    });
    it('should return [-87, -9, -4.323827, -3.1415, -3.1414, 8] when passed in [-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]', function () {
        expect(uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415])).toEqual([-87, -9, -4.323827, -3.1415, -3.1414, 8]);
    });
});

// Capitalize the First Letter of Each Word
describe("makeTitle", function() {
    it("should be a defined function", function() {
        expect(typeof makeTitle).toBe("function");
    });
    it("should return a string when executed", function() {
        expect(typeof makeTitle("")).toBe("string");
    });
    it("should return 'I Am A Title' when passed in 'I am a title'", function() {
        expect(makeTitle("I am a title")).toBe("I Am A Title");
    });
    it("should return 'I AM A TITLE' when passed in 'I AM A TITLE'", function() {
        expect(makeTitle("I AM A TITLE")).toBe("I AM A TITLE");
    });
    it("should return 'I AM A TITLE' when passed in 'i aM a tITLE'", function() {
        expect(makeTitle("i aM a tITLE")).toBe("I AM A TITLE");
    });
    it("should return 'The First Letter Of Every Word Is Capitalized' when passed in 'the first letter of every word is capitalized'", function() {
        expect(makeTitle("the first letter of every word is capitalized")).toBe("The First Letter Of Every Word Is Capitalized");
    });
    it("should return 'I LIke Pizza' when passed in 'I Like Pizza'", function() {
        expect(makeTitle("I Like Pizza")).toBe("I Like Pizza");
    });
    it("should return 'Don't Count Your ChiCKens BeFore They HatCh' when passed in 'Don't count your ChiCKens BeFore They HatCh'", function() {
        expect(makeTitle("Don't count your ChiCKens BeFore They HatCh")).toBe("Don't Count Your ChiCKens BeFore They HatCh");
    });
    it("should return 'All Generalizations Are False, Including This One' when passed in 'All generalizations are false, including this one'", function() {
        expect(makeTitle("All generalizations are false, including this one")).toBe("All Generalizations Are False, Including This One");
    });
    it("should return 'Me And My Wife Lived Happily For Twenty Years And Then We Met.' when passed in 'Me and my wife lived happily for twenty years and then we met.'", function() {
        expect(makeTitle("Me and my wife lived happily for twenty years and then we met.")).toBe("Me And My Wife Lived Happily For Twenty Years And Then We Met.");
    });
    it("should return 'There Are No Stupid Questions, Just Stupid People.' when passed in 'There are no stupid questions, just stupid people.'", function() {
        expect(makeTitle("There are no stupid questions, just stupid people.")).toBe("There Are No Stupid Questions, Just Stupid People.");
    });
    it("should return '1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d' when passed in '1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d'", function() {
        expect(makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d")).toBe("1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d");
    });
    it("should return 'PIZZA PIZZA PIZZA' when passed 'PIZZA PIZZA PIZZA'", function() {
        expect(makeTitle("PIZZA PIZZA PIZZA")).toBe("PIZZA PIZZA PIZZA");
    });
});

// Online Shopping
describe('freeShipping', function () {
    it('should be a defined function', function () {
        expect(typeof freeShipping).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 })).toBe('boolean');
    });
    it('should return true when passed in {Flatscreen_TV: 399.99}', function () {
        expect(freeShipping({Flatscreen_TV: 399.99})).toBe(true);
    });
    it('should return true when passed in {Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99}', function () {
        expect(freeShipping({Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99})).toBe(true);
    });
    it('should return true when passed in {Elephant_Plushie: 40.55, Octopus_Plushie: 20.33, Spongebob_Plushie: 20.00}', function () {
        expect(freeShipping({Elephant_Plushie: 40.55, Octopus_Plushie: 20.33, Spongebob_Plushie: 20.00})).toBe(true);
    });
    it('should return false when passed in {Shampoo: 5.99, Rubber_Ducks: 15.99}', function () {
        expect(freeShipping({Shampoo: 5.99, Rubber_Ducks: 15.99})).toBe(false);
    });
    it('should return false when passed in {Scrabble: 12.32, Jenga: 5.55, Clue: 20.00}', function () {
        expect(freeShipping({Scrabble: 12.32, Jenga: 5.55, Clue: 20.00})).toBe(false);
    });
});

// How Good is Your Name?
describe('nameScore', function () {
    it('should be a defined function', function () {
        expect(typeof nameScore).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof nameScore(exampleNames[randomNumber])).toBe('string');
    });
    it('should return "THE BEST" when passed in "MUBASHIR"', function () {
        expect(nameScore('MUBASHIR')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "MATT"', function () {
        expect(nameScore('MATT')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "PAKISTAN"', function () {
        expect(nameScore('PAKISTAN')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "AIRFORCE"', function () {
        expect(nameScore('AIRFORCE')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "ROBBY"', function () {
        expect(nameScore('ROBBY')).toBe("THE BEST");
    });
    it('should return "THE BEST" when passed in "BILL GATES"', function () {
        expect(nameScore('BILL GATES')).toBe("THE BEST");
    });
    it('should return "VERY GOOD" when passed in "FABIO"', function () {
        expect(nameScore('FABIO')).toBe("VERY GOOD");
    });
    it('should return "VERY GOOD" when passed in "YOU"', function () {
        expect(nameScore('YOU')).toBe("VERY GOOD");
    });
    it('should return "PRETTY GOOD" when passed in "JLJ"', function () {
        expect(nameScore('JLJ')).toBe("PRETTY GOOD");
    });
    it('should return "PRETTY GOOD" when passed in "BOB"', function () {
        expect(nameScore('BOB')).toBe("PRETTY GOOD");
    });
    it('should return "PRETTY GOOD" when passed in "ME"', function () {
        expect(nameScore('ME')).toBe("PRETTY GOOD");
    });
    it('should return "NOT TOO GOOD" when passed in "PUBG"', function () {
        expect(nameScore('PUBG')).toBe("NOT TOO GOOD");
    });
    it('should return "NOT TOO GOOD" when passed in "GUV"', function () {
        expect(nameScore('GUV')).toBe("NOT TOO GOOD");
    });
});


// Burglary Series (06): Convert to Number
describe('convertToNumber', function () {
    it('should be a defined function', function () {
        expect(typeof convertToNumber).toBe('function');
    });
    it('should not return an array when executed', function () {
        expect(Array.isArray(convertToNumber({piano: "200", tv: "100", stereo: "400" }))).not.toBe(true);
    });
    it('should not return null when executed', function () {
        expect(convertToNumber({piano: "200", tv: "100", stereo: "400" })).not.toBeNull();
    });
    it('should return an object when executed', function () {
        expect(typeof convertToNumber({piano: "200", tv: "100", stereo: "400" })).toBe('object');
    });
    it('should return { piano: 200, tv: 100, stereo: 400 } when passed in { piano: "200", tv: "100", stereo: "400" }', function () {
        expect(convertToNumer({piano: "200", tv: "100", stereo: "400" })).toEqual({ piano: 200, tv: 100, stereo: 400 });
    });
    it('should return {piano: 200, tv: 300, stereo: 400} when passed in {piano: "200", tv: "300", stereo: "400" }', function () {
        expect(convertToNumer({piano: "200", tv: "300", stereo: "400" })).toEqual({piano: 200, tv: 300, stereo: 400});
    });
    it('should return {piano: 200, tv: 300 } when passed in {piano: "200", tv: "300" }', function () {
        expect(convertToNumer({piano: "200", tv: "300" })).toEqual({piano: 200, tv: 300 });
    });
    it('should return {piano: 200} when passed in {piano: "200"}', function () {
        expect(convertToNumber({piano: "200"})).toEqual({piano: 200});
    });
});

// Frequency Distribution
describe('getFrequencies', function () {
    it('should be a defined function', function () {
        expect(typeof getFrequencies).toEqual('function');
    });
    it('should not return an array when executed', function () {
        expect(Array.isArray(getFrequencies(['A', 'A']))).not.toBe(true)
    });
    it('should not return null when executed', function () {
        expect(getFrequencies(['A', 'A'])).not.toBeNull();
    });
    it('should return an object when executed', function () {
        expect(typeof getFrequencies(['A', 'A'])).toBe('object');
    });
    it('should return {A: 2} when passed in [\'A\', \'A\']', function () {
        expect(getFrequencies(['A', 'A'])).toEqual({A: 2});
    });
    it('should return {A: 4, B: 1} when passed in [\'A\', \'B\', \'A\', \'A\', \'A\']', function () {
        expect(getFrequencies(['A', 'B', 'A', 'A', 'A'])).toEqual({A: 4, B: 1});
    });
    it('should return {A: 3, B: 1, C: 1} when passed in [\'A\', \'B\', \'C\', \'A\', \'A\']', function () {
        expect(getFrequencies(['A', 'B', 'C', 'A', 'A'])).toEqual({A: 3, B: 1, C: 1});
    });
    it('should return {true: 2, false: 3} when passed in [true, false, true, false, false]', function () {
        expect(getFrequencies([true, false, true, false, false])).toEqual({true: 2, false: 3});
    });
    it('should return {1: 1, 2: 2, 3: 2} when passed in [1, 2, 3, 3, 2]', function () {
        expect(getFrequencies([1, 2, 3, 3, 2])).toEqual({1: 1, 2: 2, 3: 2});
    });
    it('should return {} when passed in []', function () {
        expect(getFrequencies([])).toEqual({});
    });
});