const exampleArray = [10, 20, 30]

function elementCounter(arr) {
    // initializer
    let acc = 0

    for (let i = 0; i < arr.length; i++) {
        // curr
        const currentValue = arr[i]
        // function
        acc = acc + 1
        console.log(currentValue)
    }
    return acc
}

// console.log(elementCounter(exampleArray))






// return longest word

const words = ["short", "medium", "extraordinary", "tiny"];


// REDUCE WAY
const longestWord = words.reduce((acc, curr) => {
    if (curr.length > acc.length) {
        return curr
    }
    return acc
}, "")


// FOR LOOP WAY

const getLongestWord = (wordsArray) => {

    let returnWord = ""

    for (let i = 0; i < wordsArray.length; i++) {
        const currentWord = wordsArray[i]

        if (currentWord.length > returnWord.length) {
            returnWord = currentWord
        }
    }

    return returnWord
}

console.log(getLongestWord(words))