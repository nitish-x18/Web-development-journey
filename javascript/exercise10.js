console.log("this is exercise 10-->");

let first, second, third;

let random = Math.random();
if(random<0.33){
    first = "hello";
}
else if(random < 0.66 && random >= 0.33){
    first = "namaste";
}
else{
    first = "parnam";
}

random = Math.random();
if(random<0.33){
    second = "kaise";
}
else if(random < 0.66 && random>= 0.33){
    second = "kha";
}
else{
    second = "kyu";
}

random = Math.random();
if(random<0.33){
    third = "ho";
}
else if(random < 0.66 && random >= 0.33){
    third = "aaye";
}
else{
    third = "aur kyu";
}

console.log(first + " " + second + " " + third);