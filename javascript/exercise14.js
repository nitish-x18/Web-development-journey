const additem = async (item) => {
    await randomdelay();
    let div = document.createElement('div')
    div.innerHTML = item;
    document.body.append(div)
}

const randomdelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000)
    })
}

let text = ["Initilizing Hacking...", "Reading password...", "Password File Detect...", "Sending all personal file to the server...", "Cleaning up..."]

async function start() {
    for (const item of text) {
        await additem(item);
    }
}

start();