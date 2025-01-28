// Exercise 1: Access a nested object property
// Given the object:
const user = {
    id: 1,
    profile: {
        name: "Alice",
        age: 30,
        address: {
            city: "New York",
            zip: "10001",
        },
    },
};
// Print the city where the user lives.

// console.log(user.profile.address.city)

// Exercise 2: Update a nested object property
// Given the object:
const book = {
    title: "1984",
    author: {
        firstName: "George",
        lastName: "Orwell",
    },
    details: {
        pages: 328,
        language: "English",
    },
};
// Update the language to "Spanish" and print the updated object.

book.details.language = "Spanish"
// console.log(book)

// Exercise 3: Access an array inside an object
// Given the object:
const library = {
    name: "City Library",
    books: ["Moby Dick", "Hamlet", "Pride and Prejudice"],
};
// Print the second book in the books array.

// console.log(library.books[1])

// Exercise 4: Add a new item to an array inside an object
// Given the object:
const shoppingCart = {
    user: "John",
    items: ["Milk", "Bread", "Cheese"],
};
// Add "Eggs" to the items array and print the updated object.

shoppingCart.items.push("Eggs")
// console.log(shoppingCart)

// Exercise 5: Access a deeply nested property
// Given the object:
const company = {
    name: "TechCorp",
    employees: [
        {
            id: 1,
            name: "Jane",
            role: {
                title: "Developer",
                level: "Senior",
            },
        },
        {
            id: 2,
            name: "John",
            role: {
                title: "Designer",
                level: "Junior",
            },
        },
    ],
};
// Print the role title of the first employee.

// console.log(company.employees[0].role.title)

// Exercise 6: Check if a nested key exists
// Given the object:
const settings = {
    theme: "dark",
    preferences: {
        notifications: true,
        autoSave: false,
    },
};
// Check if the key "autoSave" exists inside the preferences object and print the result.
 //console.log(settings.preferences.autoSave!=undefined)
//

