const numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
const names = ['Ala', 'Ola', 'Ola', "Ela"]

const forEachResult = names.forEach(function (element, index, array) {
    console.log(element)
})

console.log(forEachResult)

const reduceForEachResult = names.reduce(
    function (reduced, element, index, array) {
        console.log(element)
    },
    ''
)

console.log(reduceForEachResult)

const mapResult = numbers.map(function (element, index, array) {
    return element * 2
})

console.log(mapResult)

const reduceMapResult = numbers.reduce(
    function (reduced, element, index, array) {
        const newElement = element * 2

        return reduced.concat(newElement)
    },
    []
)

console.log(reduceMapResult)

const filterResult = numbers.filter(function (element, index, array) {
    return element % 2 === 0
})

console.log(filterResult)

const reduceFilterResult = numbers.reduce(
    function (reduced, element, index, array) {
        if (element % 2 === 0) {
            return reduced.concat(element)
        }
        return reduced
    },
    []
)

console.log(reduceFilterResult)

const findResult = names.find(function (element, index, array) {
    return element === 'Ola'
})

console.log(findResult)

const reduceFindResult = names.reduce(
    function (reduced, element, index, array) {
        if (reduced) return reduced
        
        if (element === 'Ola') {
            return element
        }

        return reduced
    },
    undefined
)

console.log(reduceFindResult)
