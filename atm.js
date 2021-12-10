"use strict";
//Imports
const {accList} = require("./account");

//Functions
function getBalance(index) { //returns balance of user's account
    let accounts = accList();
    let balance = accounts[index].balance;

    console.log(formatBalance(balance));
    console.log("\n\n")
    return 
}

function withdraw(index) { //allows user to withdraw from account
    let accounts = accList();
}

function deposit(index) { //allows user to deposit to account
    let accounts = accList();
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

//Export for index.js
module.exports = {
    withdraw : withdraw,
    deposit : deposit,
    balance : getBalance,
    validatePin : validatePin
}