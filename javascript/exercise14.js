// const additem = async (item) => {
//     await randomdelay();
//     let div = document.createElement('div')
//     div.innerHTML = item;
//     document.body.append(div)
// }

const additem = async (item) => {
    await randomdelay();

    let div = document.createElement("div");
    div.innerHTML = item;

    document.querySelector(".box").append(div);
}

const randomdelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000)
    })
}

let text = ["Initilizing Hacking", "Reading password", "Password File Detect", "Sending all personal file to the server", "Cleaning up"]

async function start() {

    setInterval(()=>{
        // let last = document.body.lastElementChild;
        let last = document.querySelector(".box").lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        } else{
            last.innerHTML = last.innerHTML + "."
        }
    }, 1000)

    for (const item of text) {
        await additem(item);
    }
}

start();