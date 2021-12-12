"use strict";
//Imports
const {accList} = require("./account");
const ps = require("prompt-sync");

//Declarations
const promptSync = ps();
let accounts = accList();

//Functions
function getBalance(index) { //returns balance of user's account
    let balance = accounts[index].balance;

    console.log(formatBalance(balance));
    console.log("\n\n")
    return;
}

function withdraw(index) { //allows user to withdraw from accoun
    let amount = promptValid("How much would you like to withdraw: ", amountValid);
    
    amount = parseFloat(amount);
    amount *= 100.00;

    let balance = ((accounts[index].balance * 100.0) - amount);
    balance /= 100.00;

    accounts[index].balance = balance;
    console.log(`New balance: $${balance.fixedTo(2)}`);
}

function deposit(index) { //allows user to deposit to account
    let amount = promptValid("How much would you like to deposit: ", amountValid);
    
    amount = parseFloat(amount);
    amount *= 100.00;

    let balance = ((accounts[index].balance * 100.0) + amount);
    balance /= 100.00;

    accounts[index].balance = balance;
    console.log(`New balance: $${balance.fixedTo(2)}`);
}

function validatePin(index, pin) { //validates user's PIN
    let accounts = accList();

    if(Object.values(accounts[index]).includes(pin) === true) {
        return true;
    }
    else {
        return false;
    }
}

function formatBalance(balance) { //formats balance into a currency
    balance = balance.toString();
    balance = "$".concat(balance);
    return balance;
}

//validation measures
function promptValid(question, valid) { //prompts for user input and validates against specific measures
    do{
      var response = promptSync(question).trim();
    } while(!response || !valid(response));
    return response;
}

function amountValid(input) { //validates numeric values for withdrawls and deposits
    if(isNaN(input) == true || (input * 100) % 1 !== 0) {
        console.log("Invalid amount.");
        return false;
    }
    else {
        return true;
    }
}
//Export for index.js
module.exports = {
    withdraw : withdraw,
    deposit : deposit,
    balance : getBalance,
    validatePin : validatePin
}