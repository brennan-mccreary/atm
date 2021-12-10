"use strict";
//Accounts export function
function accountExport() {
    let accounts = [
        {
            accountNum: "123456789",
            PIN: "1234",
            balance: 100.67,
        },
        {
            accountNum: "987654321",
            PIN: "4321",
            balance: 1000.67,
        },
    ];
    return accounts;
}

//Export for atm.js
module.exports = {
    accList: accountExport
}