const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumbers = numbers
console.log(numbers === newNumbers) // true because of reference

const copyNumbers = numbers.slice()
console.log(numbers === copyNumbers) // false because of new reference

const person1 = { name: 'Ola', age: 21 }
const person2 = { name: 'Ala', age: 21 }

const people = [person1, person2]

const newPeople = people
console.log(people === newPeople) // true because of reference

const copyOfPeople = people.slice()

console.log(people === copyOfPeople) // false because of new reference

console.log(copyOfPeople[0] === people[0]) // true, object reference is the same

const copyOfPeopleSimulated = [person1, person2]

const firstThreeNumbers = numbers.slice(0, 3)
console.log(firstThreeNumbers)

const lastThreeNumbers = numbers.slice(-3) // ujemny index liczy od konca i zwroci tak jak tutaj 3 ostatnie el
console.log(lastThreeNumbers)

const removeElement = function(array, indexToRemove){
    const head = array.slice(0, indexToRemove)
    const tail = array.slice(indexToRemove + 1)

    return head.concat(tail)  
}

const numbersWithout4 = removeElement(numbers, 4)
console.log(numbersWithout4)

const numbersWithout6 = removeElement(numbers, 6)
console.log(numbersWithout6)

const numbersWithout0 = removeElement(numbers, 0)
console.log(numbersWithout0)

const numbersWithout9 = removeElement(numbers, 9)
console.log(numbersWithout9)