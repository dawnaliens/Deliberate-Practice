const calAge = function (birthYear){
    return 2023 - birthYear;
}

//Arrow function
const calAge2 = birthYear => 2023 - birthYear;
const age2 = calAge2(2003);
console.log(age2);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

const displayName = (name, age) =>{
    return `The name is ${name} and he/she is ${age} years old.`
}

const displayMessage = () =>{
    console.log("Hello World!")
}

var res = displayName('Richard', 25);
console.log(res)

displayMessage();