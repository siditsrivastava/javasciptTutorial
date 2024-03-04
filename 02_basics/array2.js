const name = ["sidit", "golu", "deeksha", "nichshay"];
const sunname = ["srivastava" , "singh", "verma", "sinha" ];


// CONCAT :- It is used to combine the two array but we used a new array to combine the two array
const all = name.concat(sunname);

// console.log(all);

// SPREAD :-  It is used to combine the two array but we used a new array to combine the two array
// Spread denoted by (...array_name);
// const newarr = [...name , ...sunname]




const arr = [1,2,3,[4,5,6],7,8,9,[10 , 11 , 12 ,[50 , 80]]];

const newarr = arr.lat(Infinity);

// console.log(newarr);

// console.log(Array.isArray(20));
// console.log(Array.from("50"));
// console.log(Array.from({name:"sidit"}));  // Interesting Question for the interview ..

const a = "sidit";
const b = "srivastava";
const c = ["Amisha" , "srivastava"];

console.log(Array.of(a,b,c));