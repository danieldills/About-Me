'use strict';

let userName = prompt('Hello, what is your name?');
alert ('Welcome ' + userName +'!')

// final score
let finalScore = 0
// Question 1
function myLocation(){
    let myLocation = prompt('Am I from Kent?');
    let lowerMyLocation = myLocation.toLowerCase();
    switch (lowerMyLocation) {
        case 'yes':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        case 'y':
            //console.log ('Great job!');
            alert ('Great job!')
            finalScore = finalScore +1
            break;
        case 'true':
            //console.log ('Great job!');
            alert ('Great job!!')
            finalScore = finalScore +1
            break;
        case 't':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        default:
            //console.log ('Wrong! Kent is my home of record =)')
            alert ('Wrong! Kent is my home of record =)')
    }
}

myLocation();
//Question 2
function myCollege() {
    let myCollege = prompt('Did I go to WSU?');
    let lowerMyCollege = myCollege.toLowerCase();
    
    switch (lowerMyCollege) {
        case 'no':
            //console.log ('Great job!');
            alert ('Great job!');
            break;
        case 'n':
            //console.log ('Great job!');
            alert ('Great job!');
            break;
        case 'false':
            //console.log ('Great job!');
            alert ('Great job!')
            break;
        case 'f':
            //console.log ('Great job!');
            alert ('Great');
            break;
        default:
            //console.log ('Wrong...Go Dawgs!')
            alert ('Wrong...Go Dawgs!');
    }
}

    myCollege();
// Question 3
function graduationYear() {
    let graduationYear = prompt('Did I graduate in 2012?');
    let lowerGraduationYear = graduationYear.toLowerCase();
    
    switch (lowerGraduationYear) {
        case 'yes':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        case 'y':
            //console.log ('Great job!');
            alert ('Great job!')
            finalScore = finalScore +1
            break;
        case 'true':
            //console.log ('Great job!');
            alert ('Great job!!')
            finalScore = finalScore +1
            break;
        case 't':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        default:
            //console.log ('Great job!');
            alert ('Wrong! I graduated in 2012');
    }
}

    graduationYear();
// Question 4
function employer() {
    let employer = prompt('Was I an Army Civilian?');
    let lowerEmployer = employer.toLowerCase();
    switch (lowerEmployer) {
        case 'yes':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        case 'y':
            //console.log ('Great job!');
            alert ('Great job!')
            finalScore = finalScore +1
            break;
        case 'true':
            //console.log ('Great job!');
            alert ('Great job!!')
            finalScore = finalScore +1
            break;
        case 't':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        default:
            //console.log ('Great job!');
            alert ('Wrong! I was an Army Civilian but Go Navy!');
    }
}

    employer();
// Question 5
function family() {
    let family = prompt('Do I have a family?');
    let lowerFamily = family.toLowerCase();
    
    switch (lowerFamily) {
        case 'yes':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        case 'y':
            //console.log ('Great job!');
            alert ('Great job!')
            finalScore = finalScore +1
            break;
        case 'true':
            //console.log ('Great job!');
            alert ('Great job!!')
            finalScore = finalScore +1
            break;
        case 't':
            //console.log ('Great job!');
            alert ('Great job!');
            finalScore = finalScore +1
            break;
        default:
            //console.log ('Great job!');
            alert ('Wrong! My family is everything!');
    }
}

    family();

alert ('I appreciate you learning more about me =) ' + userName)

// Question 6
function randomNumber() {
    let userAnswer = parseInt( prompt('Pick a number between 1 and 25'))
    let randomNumber = Math.floor(Math.random() * 25) + 1;
    let guessAmount = 4
    let correctAnswer = randomNumber
    console.log (correctAnswer);
    let answeredCorrectly = false
        for(let i = 0; i < guessAmount; i++) {
            if (userAnswer === randomNumber) {
                answeredCorrectly = true
                alert('Great job, you are correct!');
                finalScore = finalScore +1
                break;
            } else if (userAnswer < randomNumber) {
                alert('You are too low. Try again.');
            } else if (userAnswer > randomNumber){
                alert ('You are too high. Try again');
            }
    
            userAnswer = parseInt( prompt('Pick a number between 1 and 25'))
        } 
        if (answeredCorrectly === false) {
            alert('Bummer...no more guesses! The correct answer was ' + randomNumber);
        }
}

    randomNumber();

// QUESTION 7

function favoriteColor() {
    let favoriteColor = ['black', 'pink', 'green', 'purple', 'red']
    console.log('favorite colors', favoriteColor)
    let guess = 6;
    
    for (let i = 0; i < guess; i += 1) {
        let colorGuess = prompt('Guess my favorite colors')
        if (colorGuess === favoriteColor[0] || colorGuess === favoriteColor[1] || colorGuess === favoriteColor[2] || colorGuess === favoriteColor[3] || colorGuess === favoriteColor[4]) {
            console.log(colorGuess)
            alert('Bingo!')
            finalScore = finalScore +1
            break;
        }
        else {
            alert('Wrong!')
        }
    }
    alert('Great job! All my favorite colors: ' + favoriteColor)
}

    favoriteColor();

alert(finalScore + '/7 is your final score!')

alert ('Thanks for playing! ' + userName)