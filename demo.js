// console.log('best part of js');

// function  double(number) {
   
//     return number*2
// }
// console.log(double(9))

// function add(num1, num2) {
//     return num1+num2
// }

// console.log(add(3,4))
// ## The Reading List
var HarryPotter = {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K.Rowling',
    alreadyRead: true,
}


var LordOfTheRings = {
    title: 'Lord of the Rings: Return of the King',
    author: 'R.R. Tolkein',
    alreadyRead : false,
}

var Maths = {
    title: 'Fun with Maths',
    author: 'Stephen Hawking',
    alreadyRead : true,
}

var FamousFive = {
    title: 'Famous Five and the case of haunted House',
    author: 'Enid Blyton',
    alreadyRead : false,
}


var books = [HarryPotter, LordOfTheRings, Maths, FamousFive]

for (var i=0; i<books.length; i++) {
    console.log((i+1) + ". " + books[i].title + " by " + books[i].author);
    if (books[i].alreadyRead==true) {
        console.log("You already read "+ books[i].title)
    } else if (books[i].alreadyRead==false) 
    console.log("You still need to read " + books[i].title + " by " + books[i].author)

}
// ## The Reading List

// ## The Movie Database
var Movie = {
    title: 'Forrest Gump',
    duration: 3,
    stars : [' Tom Hanks', ' Robin Wright', ' Gary Sinise', ' Sally Field' ],
}

function Movieinfo() {
   return (Movie.title + " lasts for " + Movie.duration + " hours " + ", and stars:" + Movie.stars )
}
console.log(Movieinfo());

// ## The Movie Database

// # Which number's bigger?
//Ask dt for solution to this one. Is there any shorter way to do it without the if statements. Also the display at the end, Basically, get the whle solution if you can 

var number1 
var number2 
function greaterNum(number1,number2) {
    if (number1>number2) {
       return ("The greater number of " + number1 +  " and " + number2 + " is " + number1)
    } else if (number1<number2) {
        return ("The greater number of " + number1 +  " and " + number2 + " is " + number2)
    } else if (number1 = number2) {
        return (number1 + " and " + number2 + " are equal.")
    }
}

console.log(greaterNum(5,10))
console.log(greaterNum(6,5))

// # Which number's bigger?


// # The Age Calculator

var BirthYear 
var CurrentYear 

function calculateAge(BirthYear,CurrentYear) {
    return("You are either " + (CurrentYear-BirthYear) + " or " + (CurrentYear-BirthYear-1))
    
}

console.log (calculateAge(1990,2020))

// # The Age Calculator

// # The World Translator
var LanguageCode;
function helloWorld(LanguageCode) {
    if (LanguageCode=='es') {
        return ("Hola Mundo")
    } else if (LanguageCode=="de") {
        return ("Hallo Welt")
    } else

    return ("Hello World")
}

console.log(helloWorld('es'))
console.log(helloWorld('de'))
console.log(helloWorld('en'))
console.log(helloWorld('deasfgjhagsfhasghfgasf'))
// # The World Translator

// # The Grade Assigner

var NumberScore;

function assignGrade(NumberScore) {
    if (NumberScore>=85 & NumberScore<=100) {
        return ("A")
    } 
    if (NumberScore>=70 & NumberScore<85) {
        return ("B")
    } 
    if (NumberScore>=55 & NumberScore<70) {
        return ("C")
    } 
    if (NumberScore>=40 & NumberScore<55) {
        return ("D")
    } 
    if (NumberScore>=25 & NumberScore<40) {
        return ("E")
    } 
    if (NumberScore<25) {
        return ("F")
    } 
}
console.log(assignGrade(95));
console.log(assignGrade(85));
console.log(assignGrade(5));
console.log(assignGrade(60));

// # The Grade Assigner

// # The Pluralizer

var noun
var number

function pluralize(noun, number) {
    if (number != 1) {
        return (number + " " + noun + "s")
    } else
    return (number + " " + noun)
}

console.log(pluralize('bird', 1))
console.log(pluralize('bird', 2))
console.log(pluralize('bird', 3))
console.log(pluralize('bird', 1))


//# The Pluralizer