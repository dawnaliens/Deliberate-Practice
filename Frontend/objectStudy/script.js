let person = {name: "Richard", age: 25}
console.log(person)

let date = Date()
console.log(date)

const richard = {
    firstName: "Liu",
    lastName: "Richard",
    age: 25,
    job: "student",
    hobby: ["basketball", "running"]
}

console.log(richard);

// dot notation
console.log(richard.firstName);

//bracket notation
console.log(richard['hobby']);

const another = "Name";
console.log(richard['first'+ another]);
console.log(richard["last" + another]);

const interestedIn = prompt('What do you want to know about Richard? Choose' + 
'between firstName, lastName, age, job, hobby')
console.log(richard[interestedIn]);

if(richard[interestedIn]){
    console.log(richard[interestedIn]);
}else{
    console.log('Wrong request. Choose between firstName, lastName, age, job, hobby')
}

richard.location = 'Shenzhen';
richard['ins'] = 'Richard'
console.log(richard)