var myAccount = 0;
var otherAccount = 200 ;
var deposited = [];
var choose;

while(choose != "q"){
choose = prompt("1.Deposit   2.Withdraw   3.Balance   4.Transfer   q.quit")
if(choose == 1){
    deposit();
}else if(choose == 2){
    withdraw();
}else if(choose == 3){
    balance();
}else if(choose == 4){
    transfer();
}
}
console.log("program terminated");



function deposit(){
    console.log("Account Balance before deposit: " + myAccount);
    deposited = prompt("Deposit Amount: ");
    deposited = Number(deposited);
    if (deposited == 0){
        console.log("nothing deposited");
    }else{

       myAccount += deposited;
       console.log("Deposit Sucessful");
       console.log("Current balance: " + myAccount);
    }

}




function withdraw(){
    console.log("Account Balance before withdrawal: " + myAccount);
    withdrawal  = prompt("withdrawal amount: ");
    withdrawal = Number(withdrawal);
    if (withdrawal > myAccount){
        console.log("not enough balance");
    }
    else if(myAccount < 60000){
        console.log("Balance is less than 60000, can not withdraw")
    }else{
        myAccount -= withdrawal;
        console.log("Withdrawal Successful");
        console.log("Current balance: " + myAccount);
    }


}



function balance(){

    console.log("Your current balance: " + myAccount);
}



function transfer(){
    console.log("Account balance before transfer: " + myAccount);
    transferred = prompt("Enter the amount to be transferred: ");
    transferred = parseInt(transferred);
    console.log(transferred);
    if (transferred > myAccount){
        console.log("not enough balance");
    } else if(transferred == 0){
        console.log("can not transfer zero balance");
    }else{
        myAccount -= transferred;
        otherAccount += transferred;
        console.log("Transfer successful");
        console.log("Current Balance: " + myAccount);
    }
}

