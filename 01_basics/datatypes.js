"use strict"; // treate all JS Code as newer version

// alert(3 +3)  we using a node js , not a browser

// code readable is so High in javascript

// STRING
let name = "sidit";

//  NUMBER
let phoneNumber = 1256434;

// BIGINT
let totalMemeber = 1425536516n;

// BOOLEAN
let checkBox = true; //  true = 1 ; false = 2;

// NULL
let middleName = null; // It means the value is decleare and null is a standalone value . null and Null is Different

// UNDERFINED
let emailId; //  It means that value is defined but value is not decleared.

// ARRAY
let userHobby = ["Cricket , Hockey , Chess"]; // Arrayv Store a multiple value like String and number , It is changeable

// SYMBOL
// let symbol = uniqueness
const id = Symbol("123");

// OBJECTS
let empolyeeData = [
  {
    name: "Sidit",
    phoneNumbver: 4564565,
    totalMemeber: 4664435116464n,
    middleName: null,
  },

  {
    name: "Sidit Srivastava",
    phoneNumbver: 64565,
    totalMemeber: 465116464n,
    middleName: null,
  },
];

// HOW TO KNOW THE DATATYPE OF THE EMPLOYEEDATA

// console.log(typeof empolyeeData)

// PRIMITIVE DATATYPES
// NUMBER , BOOLEAN , BIGINT , STRING , SYMBOL , NULL , UNDEFINED

// NON - PRIMITIVE TYPES ( REFRENCE )
// ARRAY , OBJECT

// THERE ARE TWO TYPE OF MEMORY
// STACK (PRIMTIVE DATATYPES) HEAP (NON-PRIMITIVE DATATYPES)
// STACK :- copy krta ha variable ko bas memory mein.
let fullName = "sidit";
let updatedName = fullName;
updatedName = "sidit srivastava";
console.log(updatedName);
console.log(fullName);

// HEAP :- 

let users = {
  name : "sidit srivastava",
  mobile : 9450297114,
  emailId : "siditsrivastava84@gmail.com"
}

let useUpdateData = users;

useUpdateData.emailId = "deeksha84@gmail.com"

console.log(users)