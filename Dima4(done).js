// Exercise 6: Capitalize all words
// Given the array:
const words = ["hello", "world", "javascript", "rocks"];
// Use map to create a new array where each word starts with an uppercase letter and print it.
const firstUpperCase = words.map((value) => {
    const firstCharacter = value[0].toUpperCase()
    const restOfTheWord = value.slice(1)
    return firstCharacter + restOfTheWord
})
//console.log(firstUpperCase)



// Exercise 7: Filter names longer than 4 characters
// Given the array:
const names = ["Anna", "John", "Chris", "Mike", "Elizabeth"];
// Use filter to create a new array with names longer than 4 characters and print it.
const longerThanFour = names.filter((ele) => {
    return ele.length > 4
})
//console.log(longerThanFour)



// Exercise 8: Count the occurrences of a specific value
// Given the array:
const items = ["apple", "banana", "apple", "orange", "apple"];
// Use reduce to count how many times "apple" appears in the array and print the result.
const howManyApples = items.reduce((acc, curr) => {
    if (curr === "apple") {
        return acc + 1
    }
    return acc
}, 0)
// console.log(howManyApples)



// Exercise 9: Sort numbers in descending order
// Given the array:
const numbers = [10, 3, 8, 25, 7];
// Use sort to arrange the numbers in descending order and print the result.

numbers.sort((a, b) => b - a)
//console.log(numbers)


// Exercise 10: Combine multiple arrays
// Given the arrays:
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
// Use concat to combine all arrays into one and print the result.


let arr4 = arr1.concat(arr2.concat(arr3))
console.log(arr4)

