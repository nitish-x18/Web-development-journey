// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["abhay", "shaksham", "rupali", "jhanvi", "taruness", "vishal", "vanshika", "rishi", "mayank", "piyush", "abcmhnjiuouthjgyu"]

let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffindor")
    } else if (student.length < 8) {
        houses.push("Hufflepuff")
    } else if (student.length < 12) {
        houses.push("Ravenclaw")
    } else {
        houses.push("Slytherin")
    }
}

console.log(houses)

// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
let element = [1, 2, 3, 4, 5, 5, 6, 7]

function double(element) {
    for (let i = 0; i < element.length; i++) {
        if (element[i] === element[i + 1]) {
            // Only double one of them
            element[i] *= 2;
        }
    }
    console.log(element)
}

double(element);

// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = "Hello"
let mirror = "";

mirror = str.split("").reverse().join("");

console.log(mirror);

// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let pass = "Abc&12>*&he";

function pass_validator(pass) {
    
    if (pass.length < 8) {
        console.log("Password must be at least 8 characters.");
    }

    if (!/[A-Z]/.test(pass)) {
        console.log("Must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(pass)) {
        console.log("Must contain a lowercase letter.");
    }

    if (!/[0-9]/.test(pass)){
        console.log("Must contain a number.");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
        console.log("Must contain a special character.");
    }

    else {
        console.log("valid password!!!")
    }
}

pass_validator(pass);

// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let ar = [-1,3,4,5,3,-1,2]

function sumuntilnegative(ar){
    let sum = 0
    for(let i = 0; i < ar.length; i++){
        if(ar[i] < 0){
            break;
        }
        sum += ar[i]
    }
    return sum
}

console.log(sumuntilnegative(ar));

// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
 let value = "abcDEfg"

 function countvowels(value){
    let count = 0;
    for (const element of value) {
        if(/[aeiouAEIOU]/.test(element)){
            count += 1;
        }
    }
    return count;
 }

 console.log(countvowels(value));

//  7. The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// function saveNoteToLocalStorage(note){
//     localStorage.setItem("note", note);
// }

// let note = localStorage.getItem("note");
// if(note){
//     document.querySelector(".note").innerHTML = note;
// }

// document.querySelector("button").addEventListener("click", () => {
//     let note = prompt("enter your note: ")
//     saveNoteToLocalStorage(note)
//     document.querySelector(".note").innerHTML = note;
// })