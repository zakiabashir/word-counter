#! /usr/bin/env node
import inquirer from "inquirer";
// declear a const 'answer'and assign it to the result of inquirer.prompt functio
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word:"
    }]);
const words = answer.sentence.trim().split(" ");
// print the arrayof words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`your sentence  words  to count is ${words.length}`);
