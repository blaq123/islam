var name = "tajudeen";
var amountbalance = 3000;
var amounttobewithdraw = 5000;
var overdraftgranted  = true;
var notoverdraft = false;

if (amounttobewithdraw <= amountbalance) {
    console.log(amounttobewithdraw + "is not more twice the" + amountbalance);
}
else {
    console.log(overdraftgranted);
}

if (amounttobewithdraw <= amountbalance) {
    console.log(amounttobewithdraw + "is less than or equal to" + amountbalance);
}
else {
    console.log("request for an overdraft")
}
console.log(name + " your overdraft was succesful" )