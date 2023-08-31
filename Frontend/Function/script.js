function logger(){
    console.log("Hello World");
}

for(let i = 0; i < 10; i++){
    logger();
};

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

function displayName(name, age){
    const person = `My name is ${name} and I am ${age} years old`;
    return person;
}

var result = fruitProcessor(5, 0);
console.log(result);

console.log(fruitProcessor(100, 200));
console.log(displayName("John", 20));