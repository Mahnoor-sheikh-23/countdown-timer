#! /usr/bin/env node
import inquirer  from "inquirer";
import chalk from "chalk";
import {differenceInSeconds} from "date-fns"

console.log(chalk.bold.rgb(255, 105, 180).italic("\n\t\t\t----------------------------------------------------\n \t\t\t       WELCOMING TO THIS COUNT DOWN TIMER\n\t\t\t----------------------------------------------------\n"));
// taking input rom the user 
let user_input = await inquirer.prompt([{
    name : "num",
    type : "number",
    message : chalk.italic.rgb(189,252,201)("Type the duration of seconds... : "),
    
}])
let input = user_input.num
// creating function 
function time(value:number){
    // set time 
    const setTime = new Date().setSeconds(new Date().getSeconds() + value )
    
    const intervalTime = new Date(setTime)
    setInterval(()=>{
        let  current = new Date() 
        const  diffTime = differenceInSeconds(intervalTime,current)
        if(diffTime <= 0){
            // console.log(chalk.italic.rgb(255,204,153)('\nTIME HAS EXPIRED '));
            console.log(chalk.italic.rgb(173, 255, 47).underline('\n\t\t ***** TIME HAS EXPIRED ***** \n'));
            console.log(chalk.italic.bold.rgb(255, 105, 180)(`\n\t\t        --------------------------------------------------------------\n \t\t\t <-----------> THANK YOU FOR USING THIS TIMER <-----------> \n\t\t\t--------------------------------------------------------------\n`));
            process.exit()
            
        }
        const minutes = Math.floor((diffTime % (3600 * 24) ) / 3600)
        const seconds = Math.floor(diffTime % 60)
        const hours = Math.floor(diffTime / 3600)
        console.log(chalk.rgb(0, 128, 0).underline(`\n ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`));
        
    },1000)
    
}
if(Number.isNaN(user_input.num)){
    console.log(chalk.italic.bold.rgb(290,0,0)( ' \n\t\t ERROR !!  Please enter the number \n'));
   
    
}else{
// call the function
    time(input)
}


