// Exercise 1: Use map to create a new array
// Given the array:
const numbers = [1, 2, 3, 4, 5];
// Create a new array where each number is multiplied by 2 and print the result.

let newArrayOfNumbers = numbers.map((curr) => {
    return curr * 2
})
//console.log(newArrayOfNumbers)


// Exercise 2: Use filter to find specific elements
// Given the array:
const ages = [12, 17, 22, 30, 15, 19];
// Create a new array with only the ages 18 or older and print the result.

const grownUps = ages.filter((age) => {
    return age >= 18
})
//console.log(grownUps)


// Exercise 3: Use reduce to calculate the sum of an array
// Given the array:
const expenses = [50, 100, 25, 75];
// Calculate the total sum of the expenses and print the result.

const sumOfAnExpense = expenses.reduce((acc, curr) => {
    return acc + curr
})
//console.log(sumOfAnExpense)



// Exercise 4: Use forEach to print each element
// Given the array:
const fruits = ["apple", "banana", "cherry", "date"];
// Print each fruit in the array using forEach.

fruits.forEach((fruit) => {
    //console.log(fruit)
})




// Exercise 5: Use find to locate an element
// Given the array:
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
// Find the person whose name is "Bob" and print the object.

const findingNames = people.find((person) => {
    return person.name === "Bob"
})
//console.log(findingNames)



// Exercise 6: Use some to check a condition
// Given the array:
const scores = [45, 78, 88, 92, 60];
// Check if any score is greater than 90 and print the result (true/false).
const greater = scores.some((el) => {
    return el > 90
})
//console.log(greater)



// Exercise 7: Use every to check a condition
// Given the array:
const temperatures = [22, 25, 19, 24, 21];
// Check if all temperatures are above 18 and print the result (true/false).
const weatherReport = temperatures.every((el) => {
    return el > 18
})
//console.log(weatherReport)



// Exercise 8: Use sort to order elements
// Given the array:
const words = ["banana", "apple", "cherry", "date"];
// Sort the array alphabetically and print the result.
words.sort()
    / console.log(words)




// Exercise 9: Use slice to extract a portion of an array
// Given the array:
const letters = ["a", "b", "c", "d", "e"];
// Create a new array with only the elements "b", "c", and "d" and print the result.
let newArray = letters.slice(1, -1)
//console.log(newArray)





// Exercise 10: Use concat to combine arrays
// Given the arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// Combine both arrays into one and print the result.
const array3 = array1.concat(array2)
//console.log(array3)
