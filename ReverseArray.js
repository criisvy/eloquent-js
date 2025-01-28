// arr = [_1_,2,3,4,5,6]
// arr.length = 6
function reverseArray(arr) { 
    // create a new empty array
    let newArray = []
    // cycle all the elements of the old array
    for (let i = 0; i < arr.length; i++) {
        // push in the new array   
        newArray[i] = arr[arr.length - (i + 1)]
    }
    return newArray
}
console.log(reverseArray(['a','b','c','d']))