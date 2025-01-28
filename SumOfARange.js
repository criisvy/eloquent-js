function range(start, end, step = 1) {
    let result = []
    if (step > 0) {
        for (let i = start; i <= end; i = i + step) {
            result.push(i)
        }
    }
    if (step < 0) {
        for (let i = start; i >= end; i = i + step) {
            result.push(i)
        }
    }
    return result
}




function sum(range) {
    let result = 0
    for (let i = 0; i < range.length; i++) {
        result = result + range[i]
    }
    return result
}
console.log(range(5, 2, -1))
