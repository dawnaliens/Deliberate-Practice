const names = ["Tom", "Richard", "Alex", "Fiona", "Amy"]

// Add a new elements 
names.push("Tony")
console.log(names);

// Add a elements at the start of array
names.unshift("Jordan")
console.log(names)

// Delete the last element in an array
names.pop()
console.log(names)

// Delete the first element in an array
names.shift()
console.log(names);

// Return the index of element in array
const res = names.indexOf("Alex")
console.log(res)

// Judge if the element is in array
console.log(names.includes("Richard"))
console.log(names.includes("Fiona"))