console.log("Hello this file is all about strings in the javascript...");

let a = "Nitish";
let name = "yadav";

console.log(a.length);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

console.log("my name is " + a + " and surname is " + name );
console.log(`my name is ${a} and surmane is ${name}.`);  //tempet litrals

let b = `Roha"n`;
console.log(b);

console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(1,4));
console.log(a.slice(1));

console.log(a.replace("sh", "x18"));
console.log(a.endsWith("sh"));
console.log(a.startsWith("R"));

let c = "     hello";
console.log(c.trim());