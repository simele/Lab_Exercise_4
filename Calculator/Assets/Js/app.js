(function() {

    var operation;
    let numbers= new Array();
    operation = prompt("Choose your operation:\n1.+\n2.-\n3.x\n4./");
    if (operation === "1") {
        n = prompt("Enter the number of values");
        for (let i = 0; i < parseInt(n); i++) {
            numbers[i] = prompt("Enter value ");
        }
        addition(numbers);
    
    } 
    else if(operation === "2") {
        firstNo = prompt("Enter first number:");
        secondNo = prompt("Enter Your number:");
        subtraction(firstNo,secondNo);
    } 
    else if(operation === "3") {
        n = prompt("Enter the number of values");
        for (let i = 0; i < parseInt(n); i++) {
            numbers[i] = prompt("Enter value ");
        }
        multiplication(numbers);
    } 
    else if(operation === "4") {
        firstNo = prompt("Enter first number:");
        secondNo = prompt("Enter second number:");
        if (secondNo==='0'){
            console.log("invalid input")
        }
        else{
            division(firstNo,secondNo);
        }
       
    }
})();


function addition(numbers)
{  
    result=0
    numbers.forEach(function(member) {
        result=result + parseInt(member)
    });
    console.log(result);
}
function subtraction(firstNo,secondNo)
{
    result=parseInt(firstNo) - parseInt(secondNo);
    console.log(result);

}
function multiplication(numbers)
{
    result=1
    numbers.forEach(function(member) {
        result=result * parseInt(member)
    });
    console.log(result);

}
function division(firstNo,secondNo)
{
    result=(parseInt(firstNo) / parseInt(secondNo));
    console.log(result);
}



