#! usr/bin/env node
import inquirer from "inquirer";
const bankBalance = 10000000;
// dollars
let myPin = 7869;
const ans = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin:"
    }
]);
// printed message
if (myPin === ans.pin) {
    console.log("Welcome :)");
}
else {
    console.log("Your pin is incorrect.");
}
;
const ans1 = await inquirer.prompt({
    name: "ques",
    type: "list",
    message: "What you want to do?",
    choices: ["Withdraw", "Check Balance"]
});
if (ans1.ques === "Withdraw") {
    let withD = await inquirer.prompt({
        name: "amount",
        type: "number",
        message: "Enter your amount:"
    });
    console.log("Your remaining amount is ", withD.amount - bankBalance);
}
else if (ans1.ques === "Check Balance") {
    console.log(`Your balance is ${bankBalance}`);
}
else {
    console.log("Error");
    console.log("Please enter an operation.");
}
;
console.log("Please come again.");
