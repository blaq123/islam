class Account{
    constructor(accountName, initialBalance, amountToBeWithdrawn) {
        this.accountName = accountName;
        this.initialBalance = initialBalance;
        this.amountToBeWithdrawn = amountToBeWithdrawn;
    }
}

let account = new Account("Tajudeen", 3000, 1000);

var name = account.accountName;
var initialBalance = account.initialBalance;
var amountToBeWithdrawn = account.amountToBeWithdrawn;
