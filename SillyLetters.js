let text1= "Americans: I need healthcare because I have cancer and Im dying Republicans:"
let text2 = "i need healthcare because i have cancer and im dying"
let output = ""

for (let i = 0; i < text2.length; i++) {
    const currentCharacter = text2[i]
    if (i % 2 === 0) {
        output = output + currentCharacter.toLowerCase()
    } else {
        output = output + currentCharacter.toUpperCase()
    }
}
console.log(text1,output)
