/**
 * Compares first with second: if the arguments are objects it will loop trought all the keys 
 * and compare each value of each key (by calling itself), otherwise it will do a simple equality check.
 */
function deepEqual(first, second) {
    if (typeof first == 'object' && typeof second == 'object' && first != null && second != null) {
        const firstObjectKeys = Object.keys(first)
        const secondObjectKeys = Object.keys(second)

        if (firstObjectKeys.length == secondObjectKeys.length) {


            for (let i = 0; i < firstObjectKeys.length; i++) {
                const keyOfTheFirstObject = firstObjectKeys[i] // "name"
                const valueOfTheFirstObject = first[keyOfTheFirstObject] // --> "cristina"
                const valueOfTheSecondObject = second[keyOfTheFirstObject] // --> "cristina"
                // the values might be objects so we cannot do a simple equality check
                if (!deepEqual(valueOfTheFirstObject, valueOfTheSecondObject)) {
                    return false
                }
            }
            return true
        }
        return false
    } else {
        return first == second
    }
}
console.log(deepEqual({ a: { b: 0 } }))
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

