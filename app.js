const array = [] // literal tablicy
console.log(array[0]); // undefined
array[0] = 1
array[1] = 2
array[2] = 3
console.log(array); // [1, 2, 3]
console.log(array.length) // 3, po array.length = 0 console pokaze aktualna wartosc wiec 0
array.length = 0 // tak mozna wyczyscic tablice
console.log(array); // []