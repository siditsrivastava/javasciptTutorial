const s = 500; // gobal scope

if (true) {
  var a = 10;
  let b = 20; // local Scope
  const c = 50;
}

// console.log(a);
// console.log(b);
// console.log(a);

// we get the from gobal to local but we don't the data from local to gobal

addone(6) // It is executed beacuse here ! Hosting Work .
function addone(num){
    return num +1;
}

// addTwo(5) it is not work because it a varibale and expression , it is not a function

const addTwo = function(num){
    return num +2;
}

addTwo(7);