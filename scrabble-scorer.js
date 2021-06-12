// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

//console.log(oldScrabbleScorer('pineapple'))

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
   //Part A
   console.log("Let's play some scrabble!" +'\n')
   let userWord = input.question('Please enter a word: ')
  // let userWord = input.question("Let's play some scrabble!" +'\n' + "Please enter a word: ")
   //console.log(oldScrabbleScorer(userWord))
   //no need to return, just print to console
   //do we even need to do that?!
   //return oldScrabbleScorer(userWord);
   //return userWord;
};

//let chosenUserWord = initialPrompt()
//console.log(oldScrabbleScorer(userWord));

function simpleScore(word) {
  //1 point for every letter
  let score = word.toLowerCase().length;
  return score;
}

//test here
//console.log(simpleScore('lemmy'));

function vowelBonusScore(word) {
  //1 point for consonants
  //3 points for vowels
  let score = 0;
  let vowels = 'aeiou'
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      score += 3
    } else {
      score += 1
      //score++
    }
  }
  return score;
}

//test here
//console.log(vowelBonusScore('lemmy'));

let scrabbleScore;

const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scorerFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scorerFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scorerFunction: oldScrabbleScorer
  }
];

//check to see if we can access name and function, etc
//console.log(scoringAlgorithms[2].scorerFunction('lemmy'))

function scorerPrompt() {
  console.log('Which scoring algorithm would you like to use?' + '\n');
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    let scoringOptions = scoringAlgorithms[i];
    console.log(`${i} - ${scoringOptions.name}: ${scoringOptions.description}`)
  }
  let selectedScoringAlgorithm = Number(input.question('Enter 0, 1, or 2: '));
  //console.log(selectedScoringAlgorithm);
  console.log(scoringAlgorithms[selectedScoringAlgorithm].scorerFunction(//how do I get the user word in here??????));
  // console.log(`Score for ${chosenUserWord}: ${scoringAlgorithms[selectedScoringAlgorithm].scorerFunction(initialPrompt)}`);
  //return selectedScoringAlgorithm;
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   //console.log()
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

