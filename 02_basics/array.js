const arr = [1, 4, 5, 5, 4, 8]; // way to decleare the array in the code 

const arrs = new Array(1, 3, 4, 56, 7, 8); //

//  PUSH : - Interest a element in last in the Array
// arr.push(21);

// POP : - It is used to remove the last element from the array
// arr.pop();
// UNSHIFT :- It is used to interest the element in the top if the element.
// arr.unshift(100);
// SHIFT : - It is used to remove the first element of the Array ..

// SLICE : - It is used the get the value between  the given parameter , it not get the end element of the parameter

// console.log(arr.slice(0,4));

// SPLICE : - It is used the get the value between  the given parameter , it getting the end element of the parameter but it is manupluate the original Array .

console.log(arr.splice(0,3));
console.log(arr);
