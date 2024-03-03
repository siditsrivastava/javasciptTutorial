// 
function addNumber(num1 , num2) {
    return num1 + num2;
}

const result = addNumber(5,"8");
// console.log("Result:-", result);



function loginUserMessage(email){
    if(email){
        return `Hello my name is Sidit Srivastava and email is ${email}`;
    }else {
        return 'Please provide the email Id'
    }
}

const mail = loginUserMessage();

console.log("Mail :-" ,mail);


// OBJECT IN FUNCTION
// const user = {
//     name : "sidit sriavstava",
//     mobileNo : 6392580612
// }


// ARRAY IN FUNCTION
const user = [100 , 5000]

function handleData(item){
  return item[1]
}
console.log(handleData(user));