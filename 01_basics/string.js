const name = "sidit Srivastava";
const courses = "M.C.A"


const fullDetails = `Hey my is ${name}, and I am studying in ${courses}`; 

// console.log(fullDetails);

const names = new String("sidit srivastava");

// console.log(names.length);
// console.log(names[0]);

// ///////////////////////////////// Methods ///////////////////////

// ChatAt :- It is use to find which letter is present in which index value

console.log(names.charAt(6));

// indexOf :- It is used to find the index value is present in which letter 

console.log(names.indexOf('d'));

// substring : - it is used to get the value betwwen then 

console.log(names.substring(0 , 5));

// slice : - It is allmost similar to the substring but in slice we provide the -ve so , that the counting started from reverse;

console.log(names.slice(2,4));

// trim :-  it is used the remove the unwanted space from the string

 console.log(names.trim());

//  replace :- it is used to replace the value from the old vlaue to new value ;

console.log(names.replace('sidit' , "deeksha"));
