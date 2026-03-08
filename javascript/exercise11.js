console.log("calculating the factorial of number-->");

let a = 5;
let arr = [];

for (let index = 1; index <= a; index++) {
    //const element = array[index];
    console.log(index); 
    arr.push(index);
}

console.log(arr);
const facto = (a,b) => {
    return a * b;
}
console.log(arr.reduce(facto));