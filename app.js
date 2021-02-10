'use strict';

let userName = prompt('Hello, what is your name?');
alert ('Welcome ' + userName + '!')

let myLocation = prompt('Am I from Kent?');
let lowerMyLocation = myLocation.toLowerCase();

switch (lowerMyLocation) {
    case 'yes':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    case 'y':
        //console.log ('Great job!');
        alert ('Great job!')
        break;
    case 'true':
        //console.log ('Great job!');
        alert ('Great job!!')
        break;
    case 't':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    default:
        //console.log ('Wrong! Kent is my home of record =)')
        alert ('Wrong! Kent is my home of record =)')
}

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


let graduationYear = prompt('Did I graduate in 2012?');
let lowerGraduationYear = graduationYear.toLowerCase();

switch (lowerGraduationYear) {
    case 'yes':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    case 'y':
        //console.log ('Great job!');
        alert ('Great job!')
        break;
    case 'true':
        //console.log ('Great job!');
        alert ('Great job!!')
        break;
    case 't':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    default:
        //console.log ('Great job!');
        alert ('Wrong! I graduated in 2012');
}
    


let employer = prompt('Was I an Army Civilian?');
let lowerEmployer = employer.toLowerCase();
switch (lowerEmployer) {
    case 'yes':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    case 'y':
        //console.log ('Great job!');
        alert ('Great job!')
        break;
    case 'true':
        //console.log ('Great job!');
        alert ('Great job!!')
        break;
    case 't':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    default:
        //console.log ('Great job!');
        alert ('Wrong! I was an Army Civilian but Go Navy!');
}


let family = prompt('Do I have a family?');
let lowerFamily = family.toLowerCase();

switch (lowerFamily) {
    case 'yes':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    case 'y':
        //console.log ('Great job!');
        alert ('Great job!')
        break;
    case 'true':
        //console.log ('Great job!');
        alert ('Great job!!')
        break;
    case 't':
        //console.log ('Great job!');
        alert ('Great job!');
        break;
    default:
        //console.log ('Great job!');
        alert ('Wrong! My family is everything!');
}

alert ('I appreciate you learning more about me =) ' + userName)