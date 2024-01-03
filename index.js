import inquirer from "inquirer";
const todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([{
            type: "confirm",
            name: "TODO",
            message: "Enter your todo",
        }, {
            type: "input",
            name: "Addmore",
            message: " Do You want to Addmore todos?",
            default: false,
        },
    ]);
    const { TODO, Addmore } = answers;
    loop = Addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly Addmore Todos");
    }
}
if (todos.length > 0) {
    console.log(todos);
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("no todos found");
}
