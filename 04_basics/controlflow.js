// IF STATEMENT

if (true) {
  // console.log("Hello!!");
}

// IF ELSE STATEMENT

// < , > , == , === , >= , <= , != , ! OPERATOR EXPRESSION

let key = 5;

if (key == 2) {
  // console.log("Hello SIDIT");
} else {
  // console.log("no match")
}

// ELSE IF CONDITION

let a = 400;
if ((a = 400)) {
  // console.log("400")
} else if ((a = 600)) {
  // console.log("600")
} else if ((a = 500)) {
  // console.log("500");
} else {
  // console.log("No data Match !!");
}

//  ARITHMATIC OPERATOR

//  AND :- &&  all conditon will be true .
// OR :- || min one condition will be true
// NOT :- ! no conditon will true.

// SWITCH CONDITION

const month = 6;
switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("no Match");
    break;
}

// TERNIARY OPERATOR

// CONDITION ? TRUE : FALSE

const i = 5;

i == 5 ? console.log("true") : console.log("False");

// nullish coalsecing operator

//  a = 5 ?? 40

let va1;
va1 = 10 ?? 50;
console.log(va1);

// it is only made for the null and undefined Operator.
// It make a output correctly and safelty.
