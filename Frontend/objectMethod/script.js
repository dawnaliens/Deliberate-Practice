const richard = {
    firstName: "Liu",
    lastName: "Richard",
    birthYear: 1998,
    job: "student",
    hobby: ["basketball", "running"],
    hasGirlFriend: false,
    calAge: function(birthYear){
        return 2023 - birthYear
    },

    // anotherAge: function() {
    //    //  console.log(this)
    //     return 2023 - this.birthYear;
    // }
    anotherAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} ${this.lastName} is a ${this.anotherAge()} years old ${this.job}, he has ${this.hasGirlFriend ? 'a' : 'no'} driver's license.`;
    }
};


console.log(richard.calAge(1998));
console.log(richard['calAge'](1998));

console.log(richard.anotherAge())
console.log(richard.getSummary())

