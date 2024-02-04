// Problem 4: Resolve Path
// Problem Statement: Create a function resolvePath(relativePath) that takes a relative path as input and resolves it to an absolute path using the path module. The function should print the resolved path to the console.

const path = require('path')

function resolvePath(relativePath) {
    const absolutePath = path.resolve(__dirname, relativePath)
    console.log(`Resolved Path: ${absolutePath}`)
}

resolvePath('utils/twitter_msg_gen.py');
// Expected Output: Resolved Path: C:\Users\komno\OneDrive\Desktop\30-Days-Coding-Challenges\30 days of NodeJS\utils\twitter_msg_gen.py

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: C:\Users\komno\OneDrive\Desktop\30-Days-Coding-Challenges\30 days of NodeJS\nonexistent-folder\file.txt