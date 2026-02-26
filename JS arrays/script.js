console.log("arrays in the javaScript----->");

let arr = [1,2,3,4,5];
let a1 = [1,3,2];
let a2 = [6,7,8];
let a3 = [9,10,11];

console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[2]);

console.log(arr.toString());
console.log(arr.join(" And "));

arr.push(10);

arr.pop();

arr.push("kuchbhiaddkarsktehai");

arr.shift();
arr.unshift("RCb");

delete arr[1];

console.log(a1.concat(a2,a3));

a1.sort();
console.log(a1);