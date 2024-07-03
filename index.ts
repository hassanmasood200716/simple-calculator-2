import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter the first number", type: "number", name: "firstnumber" },
  { message: "enter the second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator",
    type: "list",
    name:"operator",
    choices:["addition","multiplication","subraction","division"],
  },
]);

//conditional statement

if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else console.log("select correct operator");

console.log("the end");
