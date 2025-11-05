console.log("hello in this we learn about the variables in the javascript")

var a = 5;
var b = 6;

console.log("the sum of a + b = " + (a + b));

var c = "nitish";
var d = 'a';
var e = 2.3;
var f = undefined;
var g = null;
var i = true;

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof i );

//var vs let-->
// both are vsariable but
// var -- global variable
// let -- local variable

// if we want to use variable in the local then we use let thier scope is lies on only in the braket


//objects-->
let o = {
    name: "nitish",
    "job role": "developer",
    id: 24011010282
}

console.log(o)
o.salary = "abhi kuch nhi milta";

console.log(o)