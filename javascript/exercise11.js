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

//this is my logic--->

function fact(numb){
    let fac = 1;
    for(let i=1;i<=numb;i++){
        fac = fac * i;
    }
    return fac;
}

console.log(fact(2));