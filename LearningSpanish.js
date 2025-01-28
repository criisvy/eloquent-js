// what reduce is

const exampleArray = [10, 15, 20, 25] // summed = 70




const peopleInRoom = [
    {
        name: 'cristina',
        age: 67
    },
    {
        name: 'dima',
        age: 40
    },
    {
        name: 'antonio',
        age: 58
    }
]

const ageOfTheRoom = peopleInRoom.reduce((acc, curr) => {
    return acc + curr.age
}, 0)

// console.log(ageOfTheRoom)


// accessing an object in two ways

const exampleObject = {
    name: 'jesus',
    age: 33,
    "number-of-kids": 5,
    "3-best-actors": ['johnny depp', 'philip morris', 'dima']
}

// way 1
// console.log(exampleObject.name)

// // way 2
// console.log(exampleObject["number-of-kids"])

// way 3
const keyToAccess = "name"

// console.log(exampleObject[keyToAccess])



// map 

const mapArray = [10000, 25000, 34000, 40000] // miliseconds of Dima´s pushing records
// convert miliseconds in seconds
console.log(mapArray.map(
    (value, index, array) => {
        return {
            miliseconds: value,
            valueInSeconds: value / 1000,
            valueInMinutes: value / 60000,
        }
    }
))
// Four ways to loop
// - map returns an array with the same amount of values as the original array
// - forEach just executes a function for every value of the original array
// - for is the for
// - reduce returns only one value from calculating with the orginal array