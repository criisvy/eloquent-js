
function countChar(string, ch) {
    let counter = 0
    for (let i = 0; i < string.length; i++) {
        let currentCharacter = string[i]
        if (currentCharacter === ch) {
            counter++
        }
    } 
    return counter
}
console.log(countChar("Bobby is as round as a square", "r")) //2