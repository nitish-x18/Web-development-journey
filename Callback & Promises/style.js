console.log("helloooo world!!!")
console.log("2nd line of code!!!")

setTimeout(() => {
    console.log("inside the timeout function")
}, 0); //if i also select 0 sec time but the function is run in the last of the code

console.log("The End...")

const callback = (arg)=>{
    console.log(arg)
}

const loadScript  = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("inside of the callback function...");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )