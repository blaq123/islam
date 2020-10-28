var name = "Tajudeen";
var initialBalance = 3000;
//var amounttobewithdraw = 1000;
var amountToBeWithdraw = 5000;
//var overdraftgranted  = true;
var overdraftGranted = false;
//var notoverdraft = false;
var availableBalance = initialBalance - amountToBeWithdraw;
var overdraftBalance = amountToBeWithdraw - initialBalance;

if (amountToBeWithdraw <= initialBalance) {
    // console.log(amounttobewithdraw + "is not more twice the" + amountbalance);
    console.log(`${name} you have successfully withdrawn ${amountToBeWithdraw}, your balance is: ${availableBalance}`);
} else if (amountToBeWithdraw > initialBalance && overdraftGranted == true) {
    //console.log(overdraftgranted);
    console.log(`${name} you have successfully withdrawn ${amountToBeWithdraw}, your balance is: ${availableBalance}. You have an outstanding of ${overdraftBalance}`);
} else {
    console.log(`Insufficient balance!`);
}

// if (amounttobewithdraw <= amountbalance) {
//     console.log(amounttobewithdraw + "is less than or equal to" + amountbalance);
// }
// else {
//     console.log("request for an overdraft")
// }
// console.log(name + " your overdraft was succesful");