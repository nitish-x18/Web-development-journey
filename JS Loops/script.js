console.log("i am a tutorial of loop...");

//for loop-->
// let a = 1;

// for (let i = 0; i < 10; i++) {
//     console.log(a + i);
// }

//while loop-->
// let b = 1;
// while(b<10){
//     console.log(b);
//     b++;
// }

//do-while loop-->
// let c = 0;
// do{
//     console.log(c + ". sorry");
//     c++;
// }while(c<=10);


//for in loop---->
let obj = {
    name: "nitish",
    roll_number: 24011010282,
    class: "btech (CSE)",
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
}

//for of loop---->
for (const character of "nitish") {
    console.log(character);
}