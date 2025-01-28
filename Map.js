function multiplyByTwo(numberValue) {
    return numberValue * 2
}

const multiplyByThree = (numberValue) => {
    return numberValue * 3
}

const multiplyByFour = () => numberValue * 4


//console.log(multiplyByTwo(8)) // 16

// MAP array method

const exampleArray = [1, 2, 3, 4, 5]

const arrayWithNumbersMultipliedByTwo = exampleArray.map((currentItem, currentIndex) => {
    return 'ciccio' + currentItem
})


const exampleArrayWithNames = ['cristina', 'dima', 'antonio']

// create a new array using map() containing objects with only one key "name" and the value of the old array as the value of the key "name"

// const names = exampleArrayWithNames.map((currIt, currIn) => {
//     return { name: currIt }
// })
// console.log(names)


// from this array of objects create an array of only the surnames using map()

const arrayOfObjects = [
    {
        name: 'Cristina',
        surname: 'Vicario Yuste',
        age: 24
    }, {
        name: 'Dima',
        surname: 'Hayduchyk',
        age: 88
    },
    {
        name: 'adam',
        surname: 'Di Mario',
        age: 83
    },
    {
        name: 'John',
        surname: 'Spielberg',
        age: 12
    }
]

const surnames = arrayOfObjects.map((currIt, currIn) => { 
    return currIt.surname
})
console.log(surnames)