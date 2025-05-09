const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const sumOfArray = function (reduced, element, index, array) {
    return reduced + element
}

const sum = numbers.reduce(sumOfArray, 0)

const sum2 = numbers.reduce((acc, number)=> {
    return acc + number
}, 0)

console.log(sum)
console.log(sum2)


const myOwnReduce = function (array, callback, initialValue) {

    let reduced = initialValue

    for(let i = 0; i < array.length; i++){
        const element = array[i]
        const index = i


        reduced = callback(reduced, element, index, array)
    }

    return reduced

}

const sumByMyOwnReduce = myOwnReduce(numbers, sumOfArray, 0)

console.log(sumByMyOwnReduce)