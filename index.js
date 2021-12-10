"use strict";
//Imports
const atm = require("./atm");
const ps = require("prompt-sync");
const {accList} = require("./account")

//Declarations
const promptSync = ps();

//Start call
main();

//User menu for interacting with ATM
function main() { //distributes calls and handles user experience
    //find account index
    let accIndex;
    do {
        accIndex = findAccount();
        var accFound = false;

        if(accIndex !== undefined) {
            console.log("Account found.");
            accFound = true;
        }
        else {
            console.log("No account found.");
            accFound = false;
        }
    } while(accFound === false)

    //validate pin for account
    do{
        var pin = promptValid("Enter your 4 digit PIN:  ", num4Digits);
        var validPin = atm.validatePin(accIndex, pin);
    } while(validPin === false)
    

    //Loop until exit code in inputted
    do {
        //prompt user for action
        var action = promptValid("Enter\n'Withdraw' to make a withdraw\n'Deposit' to make a deposit\n'Balance' to check your balance\n'Exit' to end session\n", actionValid);
        
        switch(action.toLowerCase()) {
            case "withdraw": atm.withdraw(accIndex); break;
            case "deposit": atm.deposit(accIndex); break;
            case "balance": atm.balance(accIndex); break;
            default: console.log("Session ended."); return;
        }
    } while (action !== "exit")
}

function findAccount() { //finds user account based on 9 digit account number
    let accNum = promptValid("Enter your 9 digit account number:  ", num9Digits);
    let accIndex;
    let accounts = accList();

    for(let i = 0; i < accounts.length; i++ ) {
        if(Object.values(accounts[i]).includes(accNum) === true) {
            accIndex = i;
            i = accounts.length;
        }
    }

    return accIndex;
}

//Input validation measures
function promptValid(question, valid) { //prompts for user input and validates against specific measures
    do{
      var response = promptSync(question).trim();
    } while(!response || !valid(response));
    return response;
  }

function num9Digits(input) { //validate 9 digit numeric inputs
    if(input.length === 9 && isNaN(input) === false) {
        return true;
    }
    else {
        console.log("Invalid input.")
        return false;
    }
}

function num4Digits(input) { //validate 4 digit numeric inputs
    if(input.length === 4 && isNaN(input) === false) {
        return true;
    }
    else {
        console.log("Invalid input.");
        return false;
    }
}

function actionValid(input) { //validates responses for action requests
    switch(input.toLowerCase()) {
        case "withdraw": return true;
        case "deposit": return true;
        case "balance": return true;
        case "exit": return true;
        default: console.log("Invalid input."); return false;
    }
}