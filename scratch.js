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
  
  /* Task 1: `counterMaker`
   * Study the code for counter1 and counter2. Answer the questions below.
   * 
   * 1. What is the difference between counter1 and counter2?
   *    - 
   * 
   * 2. Which of the two uses a closure? How can you tell?
   * 
   * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
   *
  */
  
  // counter1 code
  function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }
  
  const counter1 = counterMaker();
  
  // counter2 code
  let count = 0;
  
  function counter2() {
    return count++;
  }
  
  
  /* Task 2: inning() 
  
  Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
  
  function inning(){
  
    //DEBUGGING
    //console.log( Math.round(Math.random() * 2 ) );
  
    return Math.round(Math.random() * 2);
  }
  
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
  
//   function getInningScore( func ){
  
//     return func();
    
//   }
  
  
  function scoreboard( inning, num) {
  
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
            inningCounter++;//increment once more to end
            return;
      }
      // 2) IF NUMBER IS PAST THE INNINGS PLAYED - FUNCTION WILL END
      if(inningCounter > num ){      
        return;
      }

      //DETERMINE WHICH TEAM TO GIVE THE POINTS TO==================

      let teamThatScoredInTheInning = Math.round(Math.random() * 1);
  
      //AWAY OR HOME GETS THE POINTS
      if(teamThatScoredInTheInning === 0){
            awayTeam += inning();
      }else if(teamThatScoredInTheInning === 1){
            homeTeam += inning();

      }//===========================================================
  
      //AFFIX THE RIGHT INNING "ST","ND","RD","TH"
      let inningAppend = returnAffix( inningCounter);
  
      //RETURN THE STRING FOR THE NEW INNING AND **INCREMENT THE COUNTER**
        console.log(`${inningCounter++}${inningAppend} inning: ${awayTeam} - ${homeTeam}`);
  

    }//END OF INNER "CLOSURE" FUNCTION
  

  }//END OF SCOREBOARD FUNCTION
  
  let myReturnedClosureFunction = scoreboard( inning, 9);

  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();
  myReturnedClosureFunction();

  //HELPER FUNCTION
  function returnAffix( counter ){
  
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
  
  
  