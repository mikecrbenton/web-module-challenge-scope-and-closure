// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////
//================================================================================
/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *      1 uses a closure and returns a function
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *      1, because it accesses count even after countermaker is not being called
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *       Keep track of a variable, without having it in global scope - like creating a new "main()" function
 *       A "static" variable that exists inside it's own context
 *       - possibly uses less memory than global variables in closure
*/
//================================================================================
// STEPS CREATING A CLOSURE
// 1) Create a function that returns another function
// 2) Store/save your "returned" function into a new variable
// 3) When you call that new function/variable, you have access to the
//    variable(s) within the larger "enclosing" function

// counter1 code
function counterMaker() {

  //THIS IS THE "ENCLOSED" VARIABLE
  let count = 0;

  //RETURN YOUR INNER FUNCTION
  return function counter() {
   return count++;
  }

}
//RETURN A "FUNCTION" TO THIS NEW VARIABLE
const counter1 = counterMaker();

//WHEN YOU CALL THE NEW FUNCTION, IT STILL HAS
//ACCESS TO THE SCOPE OF THE VARIABLES IN THE
//ENCLOSING FUNCTION

// console.log( counter1() ); // 0
// console.log( counter1() ); // 1
// console.log( counter1() ); // 2
// console.log( counter1() ); // 3
// console.log( counter1() ); // 4

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

//================================================================================
/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
//================================================================================

function inning(){

  //DEBUGGING
  //console.log( Math.round(Math.random() * 2 ) );

  return Math.round(Math.random() * 2);
}




//================================================================================
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) 
and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 
//================================================================================


function finalScore( inning, num ){

  let gameScore = 0;

  for( let i=0 ; i < num ; i++ ){
    gameScore += inning();
  }
  //DEBUGGING
  //console.log( "the score is " + gameScore );

  return {
    final_score: gameScore
  }

}



//================================================================================
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

// Final Score: awayTeam - homeTeam */
//================================================================================


function scoreboard( inning, num) {
  
   //EDGE CASE - TOO MANY INNINGS
   if(num > 9){
      console.log(`${num} is too many innings - baseball only has 9 innings`);
   }

  //CLOSURE VARIABLES IN MAIN FUNCTION
  let awayTeam = 0;
  let homeTeam = 0;
  //START IN 1ST INNING
  let inningCounter = 1;

  

  //CLOSURE FUNCTION THAT ACCESSES THE OUTER VARIABLES
  return function getInningScore(){
     
    //EDGE CASES

    // 1) RETURN FINAL SCORE IF ONE PAST THE NUMBER OF INNINGS
    if( inningCounter ===  ( num + 1 ) ){
          console.log(`Final Score: ${awayTeam} - ${homeTeam}`);
          inningCounter++;//increment once more to end - if called again
          return;
    }
    // 2) IF NUMBER IS PAST THE INNINGS PLAYED - FUNCTION WILL END
    if(inningCounter > num ){      
      return;
    }

    //DETERMINE WHICH TEAM TO GIVE THE POINTS TO
    let teamThatScoredInTheInning = Math.round(Math.random() * 1);

    //AWAY OR HOME GETS THE POINTS
    if(teamThatScoredInTheInning === 0){
          awayTeam += inning();
    }else if(teamThatScoredInTheInning === 1){
          homeTeam += inning();

    }

    //AFFIX THE RIGHT INNING "ST","ND","RD","TH"
    let inningAppend = returnAppend( inningCounter);

    //RETURN THE STRING FOR THE NEW INNING AND **INCREMENT THE COUNTER**
      console.log(`${inningCounter++}${inningAppend} inning: ${awayTeam} - ${homeTeam}`);

  }//END OF INNER "CLOSURE" FUNCTION


}//END OF SCOREBOARD FUNCTION



let myReturnedClosureFunction;

myReturnedClosureFunction = scoreboard( inning, 11);
myReturnedClosureFunction = scoreboard( inning, 9);

//PURPOSELY CALL FUNCTION TOO MANY INNINGS ( PAST 9 INNINGS )
for(let i=0 ; i < 15 ; i++){
   myReturnedClosureFunction(); 
}

//HELPER FUNCTION
function returnAppend( counter ){

  let numAppend;

  if( counter === 1 ){ 
    numAppend = "st"; 
  }else if( counter === 2 ){ 
    numAppend = "nd"; 
  }else if( counter === 3 ){ 
    numAppend = "rd"; 
  }else{
    numAppend = "th";
  }
  return numAppend;
}


