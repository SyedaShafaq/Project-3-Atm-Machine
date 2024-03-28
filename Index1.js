#! /usr/bin/env node
//Atm Machine
//Start with importing Inquirer
import inquirer from "inquirer";
import Inquirer from "inquirer";
//Make a variable to store balance
let myBalance = 50000;
//Store Pin Code
let myPin = 45123;
//Process For Pin Code
let pinCode = await Inquirer.prompt([
    {
        name: `pin`,
        type: `number`,
        message: `Enter your pin number`,
    }
]);
//If & Else condition 
if (pinCode.pin === myPin) {
    console.log(`Your pin code is correct`);
    let myOperation = await Inquirer.prompt([
        {
            name: `action`,
            message: `Choose an option below`,
            type: `list`,
            choices: [`Cash Withdrawal`, `Check Balance`, `Fast Cash`],
        }
    ]);
    if (myOperation.action === `Cash Withdrawal`) {
        let amountAns = await inquirer.prompt([
            {
                name: `amount`,
                type: `number`,
                message: `Enter your amount`
            },
        ]);
        //For amount deduction
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        //when you write amount more than your actual balance
        else if (amountAns.amount > myBalance) {
            console.log(`Sorry you have insufficient balance`);
        }
    }
    if (myOperation.action === `Check Balance`) {
        console.log(`Your current balance is ${myBalance}`);
    }
    if (myOperation.action === `Fast Cash`) {
        let fastCash = await inquirer.prompt([{
                name: `cash`,
                type: `list`,
                choices: [`1000`, `10000`, `20000`, `35000`, `65000`, `100000`],
                message: `Choose your amount`,
            }
        ]);
        console.log(`Thanks for using our service`);
    }
}
else {
    console.log(`Your pin code is uncorrect`);
}
