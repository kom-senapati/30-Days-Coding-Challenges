// Problem 3: Execute Command
// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.

const cp = require('child_process');

function executeCommand(command) {
    cp.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(stdout);
        if (stderr) console.log(stderr);
    })
}

executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');
