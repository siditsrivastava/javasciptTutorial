const newobject = new Object(); // singleton
console.log(newobject)
const data = { // non - singleton
    name : "sidit srivastava",
    age :24,
    email :"siditsrivastava84@gmail.com",
    user :true,
}

// console.log(data.name);

// console.log(data["name"]);

// console.log( typeof data[sym]);

data.greeting = function(){
    console.log(`hello everyone ${this.email}`);
}

// console.log(data.greeting());