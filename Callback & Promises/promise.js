console.log('Hello from promise');

let prom1 = new Promise((resolve, reject) => {
    let n = Math.random()
    if (n < 0.5) {
        console.log('not random number is supportins you...');

    }
    else {
        setTimeout(() => {
            console.log('yes this is Done');
            resolve("Namaste!!!")
        }, 1000)
    }
})

prom1.then((a)=>{
    console.log('a');
}).catch((err) => {
    console.log('err');
})