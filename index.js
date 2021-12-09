"use strict";
//Imports
const atm = require("./atm");
const promptSync = require("prompt-sync");
//User menu for interacting with ATM
function main() {

}

function findAccount() {

}

//Input validation measures
function promptValid(question, valid) { //prompts for user input and validates against specific measures
    do{
      var response = promptSync(question).trim();
    } while(!response || !valid(response));
    return response;
  }

function num9Digits(input) { //validate 9 digit numeric inputs
    if(input.length === 9 && isNaN === false) {
        return true;
    }
    else {
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