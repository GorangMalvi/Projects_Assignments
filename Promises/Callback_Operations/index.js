//Creating Calculate fn. 
function calculate(num1,num2){
     // Define the operation function inside calculate
    function operation(num1,num2,callback){
         // Call the callback function and pass num1 and num2 as arguments
        return callback(num1,num2)
    }

  // Define addition callback function
function addition(num1,num2){
    return num1+num2
}
 // Define multiplication callback function
 function multiplication(num1,num2){
    return num1*num2
 }
// Calling  operation function twice one with addition  function and one with multiplication function
const additionResult = operation(num1,num2,addition)
const multiplicationResult = operation(num1,num2,multiplication)

//showing result
console.log(`Addition Result: ${additionResult}`);
console.log(`Multiplication Result: ${multiplicationResult}`);
}
calculate(18,8)
calculate(15,55)