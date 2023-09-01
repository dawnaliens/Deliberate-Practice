let array = []
console.log(array);

array.push(23)
array.push(100)
array.push(200)
console.log(array);

const name1 = "Richard";
const name2 = "Tom";
array.push(name1);
array.push(name2);
console.log(array)

const age = new Array(23, 24, 25, 40, 50);
console.log(age[0])
console.log(age.length);

// print the last element in array
console.log(age[age.length - 1])

// modify element
array[4] = "Fiona";
console.log(array)

age.push(array);
console.log(age)

array.unshift("Richard");
console.log(array)

delete array[0];
console.log(array)