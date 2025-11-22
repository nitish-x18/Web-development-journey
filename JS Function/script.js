function hello(name, uni){
    console.log("hii my name is " + name);
    console.log("i am currently study in " + uni);
}

hello("nitish", "RBU");
hello("vansh", "RBU");

function sum(a, b){
    return a + b;
}

let result = sum(2, 3);
console.log("sum:", result);

//arrow function-->

const var_name = (a)=>{
    console.log("i am an arrow function...", a);
}

var_name(10);