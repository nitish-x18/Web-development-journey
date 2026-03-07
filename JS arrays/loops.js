console.log("loops in arrays in JS--->");

let a = [1,2,3,4,7,4];

for(let index=0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

a.forEach((value, index , a) => {
    console.log(value, index ,a);
});

let object = {
    a : 1,
    b : 2,
    c : 3
};

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(key , element);  
}

for (const element of a) {
    console.log(element);
}