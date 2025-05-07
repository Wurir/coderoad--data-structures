const names1 = ['Ala', 'Ola']
const names2 = ['Ela', 'Iza']
const names3 = ['Marta', 'Maja']

const allNames = (
    names1
        .concat(names2)
        .concat(names3)
)
console.log(allNames)

const allNamesReverted = (
    names3
        .concat(names2)
        .concat(names1)
)
console.log(allNamesReverted)

const allNamesRevertedSecondTime = (
    names3
        .concat(names2)
        .concat(names1)
)
console.log(allNamesReverted === allNamesRevertedSecondTime) // false

// const allNamesPlusOneMore = allNames.concat(['Agata'])
const allNamesPlusOneMore = allNames.concat('Agata')
console.log(allNamesPlusOneMore)