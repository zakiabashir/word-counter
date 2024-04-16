#! /usr/bin/env node
// this line is called shebang
import inquirer from "inquirer"
import chalk from "chalk"
// declear a const 'answer'and assign it to the result of inquirer.prompt functio
const answer:{
    sentence: string
} = await inquirer.prompt([{
    name:"sentence",
    type: "input",
    message: "enter your sentence to count the word:"
}])

const words = answer.sentence.trim().split(" ") 
// print the arrayof words to the console
console.log(words) 
// print the word count of the sentence to the console
console.log(`your sentence  words  to count is ${words.length}`)