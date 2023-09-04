for (let i = 0; i < 10; i++){
    console.log("This is the " + i + " times hello world")
}   

const richard = [
    'Liu',
    'Richard',
    1998,
    'student',
    ['basketball', 'running'],
    true,
]

const types = [];

for (let i = 0; i < richard.length; i++){
    console.log(richard[i], typeof(richard[i]));

    // one way
    // types[i] = typeof richard[i];

    // another way - push
    types.push(typeof richard[i])
}

console.log(types)

const years = [2003, 2010, 2023, 2030];
const ages = [];
for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages)

//continue and break
// string
// skip current loop - will out typeof string below
for (let i = 0; i < richard.length; i++){
    if(typeof richard[i] !== 'string') {
        continue;
    }
    console.log(richard[i], typeof(richard[i]));
}

console.log("BREAK------")
for (let i = 0; i < richard.length; i++){
    if(typeof richard[i] === 'number') {
        break;
    }
    console.log(richard[i], typeof(richard[i]));
}

for(let i = richard.length - 1; i >= 0; i--){
    console.log(i, richard[i]);
}

// loop in loop
for (let test = 1; test < 4; test++){
    console.log(`Test --------- ${test}`);

    for (let res = 1; res < 6; res++){
        console.log(`Result ---------- ${res}`);
    }
}
