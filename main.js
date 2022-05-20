const account = {
    Balance : 100,
    accountName : "Maya Hristova",
    getbalance: function () {
        alert("Balance in the account is  " + account.Balance);
    },
 
    deposit: function () {
        let cashdeposit = prompt("How much you wanna deposit?");
        if (account.Balance += cashdeposit );
        this.getbalance () ;
 
    },
 
    withdrawal: function ()  {
        let cashwithdrawal = prompt("How much money do you wanna withdraw?");
 
        if (cashwithdrawal >= 100) {
               alert("You dont have enough money");
           }
           else if (account.Balance -= cashwithdrawal)          
           { alert ("Balance is now " + account.Balance); }
    },
 
     getaccountName: function () {
         alert("Owner of account : " + account.accountName);
    },
 
    exit: function () {
        alert("Bye see you soon  " + account.accountName);
   },
}
 
 
function atm () {
let chooseanoption = prompt ("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.)  Get you account name 5  Exit");
 
if (chooseanoption == 1) {
    account.getbalance();
 }
 
 else if (chooseanoption == 2){
 account.deposit ();
}
else if (chooseanoption == 3) {
 account.withdrawal();
}
else if (chooseanoption == 4) {
  account.getaccountName ();
}
else if (chooseanoption == 5) {
   account.exit ();
}
}
 
atm ();
