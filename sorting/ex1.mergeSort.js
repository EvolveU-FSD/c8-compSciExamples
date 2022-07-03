const numbers = [7,2,6,3,5,1,9,8]

function mergeSort(arrayOfNumbers) {
    if (arrayOfNumbers.length === 1)
        return arrayOfNumbers
    const splitPoint = Math.floor(arrayOfNumbers.length/2)
    const sortedFirst = mergeSort(arrayOfNumbers.slice(0,splitPoint))
    const sortedSecond = mergeSort(arrayOfNumbers.slice(splitPoint))

    const result = []
    while (sortedFirst.length > 0 || sortedSecond.length > 0){
        if ((sortedSecond.length === 0) ||
            (sortedFirst.length > 0 &&  sortedFirst[0] < sortedSecond[0]))
        {
            result.push(sortedFirst.shift())
        } else {
            result.push(sortedSecond.shift())
        }
    }
    return result
}

console.log(mergeSort(numbers))