// Exercise 11: Flatten a nested array
// Given the array:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
// Use flat to create a new array with all elements in a single level and print it.

//console.log(nestedArray.flat())



// Exercise 12: Find the longest word
// Given the array:
const words = ["short", "medium", "extraordinary", "tiny"];
// Use reduce to find and print the longest word in the array.
const longestWord = words.reduce((acc, curr) => {
    if (curr.length > acc.length) {
        return curr
    }
    return acc
}, "")

//console.log(longestWord)



// Exercise 13: Group numbers by even and odd
// Given the array:
const nums = [1, 2, 3, 4, 5, 6];
// Use reduce to create an object with two properties: "even" and "odd", containing arrays of even and odd numbers respectively. Print the result.




const evenAndOdd = nums.reduce((acc, curr) => {

    if (curr % 2 === 0) {
        acc.even.push(curr)
    }
    else acc.odd.push(curr)
    return acc;
}, {
    even: [],
    odd: []
})
//console.log(evenAndOdd)



// Exercise 14: Remove duplicates from an array
// Given the array:
const items = [1, 2, 2, 3, 4, 4, 5];
// Use a combination of methods (e.g., filter and indexOf) to create a new array without duplicates and print it.

function withoutDuplicates(items) {
    let newArray = []
    items.forEach((number) => {
        if (!newArray.includes(number)) {
            newArray.push(number)
        }
    })
    return newArray
}

//console.log(withoutDuplicates(items))
// expected output: [1,2,3,4,5]


// Exercise 15: Chain multiple methods
// Given the array:
const numbers = [5, 10, 15, 20, 25];
// Use map to double each number, then filter to keep only numbers greater than 20, and print the final array.

const doubleTheNumbers = numbers.map((curr) => {
    return curr * 2
}).filter((number) => {
    return number > 20
})
//console.log(doubleTheNumbers)