function deepEqual(first, second) {
    if (typeof first == 'object' && typeof second == 'object' && first != null && second != null) {
        const firstObjectKeys = Object.keys(first)
        const secondObjectKeys = Object.keys(second)

        if (firstObjectKeys.length == secondObjectKeys.length) {
          

            for (let i = 0; i < firstObjectKeys.length; i++) {
                const keyOfTheFirstObject = firstObjectKeys[i] // "name"
                const valueOfTheFirstObject = first[keyOfTheFirstObject] // --> "cristina"
                const valueOfTheSecondObject = second[keyOfTheFirstObject] // --> "cristina"
                if (!second[keyOfTheFirstObject] || valueOfTheFirstObject != valueOfTheSecondObject) {
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


