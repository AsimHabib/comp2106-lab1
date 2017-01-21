
// prompt the user to enter the choice and save it in the variable
var userChoice = prompt("Do you choose rock, paper or scissors?");

// declare the varibale to hold the value of the computer choice
var computerChoice ;

// generate the random number and assign it to the variable
var rNum = Math.random();

if(rNum <= 0.33){
    computerChoice = "rock";
}
else if(rNum >= 0.34 && rNum <= 0.66){
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}

// function to determine winner or loser
function compare(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie";
    }
    
    // if the user choice is "rock"
    else if (choice1 === "rock"){
        if(choice2 === "scissors"){
                return "rock wins";
            }
        else {
            return "paper wins";
            }    
        } // end of "rock" else if
    
    // if the user choice is "paper"
    else if(choice1 === "paper"){
            if(choice2 ==="rock"){
                return "paper wins";
                }
            else{
                return "scissors wins";
                }         
        } // end of "paper" else if  
  
  // if the user choice is "scissors"
    else if(choice1 === "scissors"){
            if(choice2 ==="rock"){
                return "rock wins";
                }
            else{
                return "scissors wins";
                }         
        } // end of "scissorsr" else if 
  // if user try to enter other then rock, paper or scissors 
  else{
    return "Please enter rock, paper or scissors in the given field"
  }
} // end of compare function

// pass the choices values to the function as arguments and assign the result to variable
var result = compare(userChoice, computerChoice);
console.log(result);

// print the variable values just to test if its working fine
console.log('Generated Randum Number: '+ rNum);
console.log('User Choice: ' + userChoice);
console.log('Computer Choice: ' + computerChoice);




