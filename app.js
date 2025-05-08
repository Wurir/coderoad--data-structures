const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let numbersMultiplied = []

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const numberMultiplied = number * 2

    numbersMultiplied = numbersMultiplied.concat(numberMultiplied)
}

console.log(numbersMultiplied)

const numbersMultipliedByMap = numbers.map(function (number) {
    return number * 2
})

console.log(numbersMultipliedByMap)

const myOwnMap = function (array, callback) {

    let arrayMapped = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const index = i

        const result = callback(element, index, array)

        arrayMapped = arrayMapped.concat(result)
    }

    return arrayMapped

}

const numbersMultipliedByMyOwnMap = myOwnMap(numbers, function (number) {
    return number * 2
})

console.log(numbersMultipliedByMyOwnMap)
