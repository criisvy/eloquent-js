// Exercise 1: Extract unique values from an array of objects
// Given the array:
const products = [
    {
        id: 1,
        category: "electronics"
    },
    {
        id: 2,
        category: "clothing"
    },
    {
        id: 3,
        category: "electronics"
    },
    {
        id: 4,
        category: "books"
    },
];
// Create a new array with only unique categories and print it.
function uniqueCategories(products) {
    let newArray = []
    products.forEach((product) => {
        if (!newArray.includes(product.category)) {
            newArray.push(product.category)
        }
    })
    return newArray.map((category, index) => {
        return { id: index + 1, category }
    })
}
//console.log(uniqueCategories(products))



// Exercise 2: Count occurrences of each value in an array
// Given the array:
const votes = ["yes", "no", "yes", "abstain", "no", "yes"];
// Use reduce to count how many times each value appears and print an object like { yes: 3, no: 2, abstain: 1 }.
const howManyTimes = votes.reduce((acc, curr) => {
    let newObject = []
    if (newObject.includes(curr)) {
        acc + 1
    }
    return newObject.map((acc) => {
        return { acc: acc }
    })
})
console.log(howManyTimes)



// Exercise 3: Sort an array of objects by a key
// Given the array:
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 87 },
];
// Sort the students by grade indescending order and print the result.

// Exercise 4: Flatten and sort a nested array
// Given the array:
const nestedNumbers = [[5, 2], [9, 1], [8, 3]];
// Flatten the array into a single level and sort all numbers in ascending order. Print the result.

// Exercise 5: Find the most expensive product
// Given the array:
const items = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 700 },
    { name: "Tablet", price: 400 },
];
// Use reduce to find the product with the highest price and print it.

// Exercise 6: Group objects by a property
// Given the array:
const people = [
    { name: "Alice", role: "developer" },
    { name: "Bob", role: "designer" },
    { name: "Charlie", role: "developer" },
];
// Use reduce to group people by their role and print an object like:
// { developer: [{ name: "Alice", role: "developer" }, { name: "Charlie", role: "developer" }], designer: [{ name: "Bob", role: "designer" }] }

// Exercise 7: Find the second largest number
// Given the array:
const nums = [10, 20, 30, 40, 50];
// Use a combination of methods to find and print the second largest number.

// Exercise 8: Create a lookup object from an array
// Given the array:
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
// Use reduce to create an object where the keys are user IDs and the values are user names. Print the result, e.g., { 1: "Alice", 2: "Bob", 3: "Charlie" }.

// Exercise 9: Remove falsy values from an array
// Given the array:
const mixedValues = [0, "hello", false, 42, "", null, "world"];
// Use filter to create a new array with only truthy values and print it.

// Exercise 10: Combine and transform arrays
// Given the arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
// Combine all arrays into one, square each number, and then filter out numbers greater than 20. Print the final array.

