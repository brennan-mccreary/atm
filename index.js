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
function main() {
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
    } while (accFound === false)
}

function findAccount() {
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
        console.log("Invalid response.")
        return false;
    }
}

function num4Digits(input) { //validate 4 digit numeric inputs
    if(input.length === 4 && isNaN === false) {
        return true;
    }
    else {
        return false;
    }
}