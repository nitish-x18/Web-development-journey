let arr = [1,2,3,4,5];
let newarr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
// }

// console.log(newarr);

//oneliner for this map function---->
let newarrr  = arr.map(element => {
    return element**2;
});

console.log(newarrr);

//filter func-->
const greaterthanfive = (e)=> {
    if( e > 2 ){
        return true;
    }
    return false;
}

console.log(arr.filter(greaterthanfive));


//reduce func-->
const red = (a ,b)=>{
    return a*b;
}
console.log(arr.reduce(red));