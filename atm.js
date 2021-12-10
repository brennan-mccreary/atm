"use strict";
//Imports
const {accList} = require("./account");

//Functions
function getBalance() { //returns balance of user's account

}

function withdraw() { //allows user to withdraw from account

}

function deposit() { //allows user to deposit to account

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


//Export for index.js
module.exports = {
    withdraw : withdraw,
    deposit : deposit,
    balance : getBalance,
    validatePin : validatePin
}