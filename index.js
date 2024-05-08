import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter frist number", type: "number", name: "fristnumber" },
    { message: "enter second number ", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addittion", "subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addittion") {
    console.log(answer.fristnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.fristnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.fristnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.fristnumber / answer.secondnumber);
}
else {
    console.log("please select valid number");
}
