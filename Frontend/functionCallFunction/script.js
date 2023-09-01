function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}

console.log(fruitProcessor(2, 3));

function displayName(name){
    return "Hello " + name;
}

function displayAge(age){
    return "He/She is " + age + " years old."
}

function displayWhole(anotherName, age){
    const namePart = displayName('Richard');
    const agePart = displayAge(25);

    const result = `The name with ${namePart} has the result with ${agePart}`
    return result;
}

var res1 = displayWhole('Richard', 25);
console.log(res1)