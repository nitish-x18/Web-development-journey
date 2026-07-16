let button = document.getElementById("buttton")

// button = addEventListener("click", ()=>{
//     alert("you clicked the button, yaahhhhhhhh!!!")
// })

button = addEventListener("dblclick", ()=>{
    document.querySelector(".tittle").innerHTML = "<b>wooooahhh again double clicked,</b> enjoy!!!"
})

document.addEventListener("contextmenu", ()=>{
    alert("dont right clicked!!!")
})

document.addEventListener("keydown", (e)=>{
    console.log(`you pressed ${e.key} key and key code is ${e.keyCode}`)
})

document.addEventListener("keydown", (e)=>{
    console.log(e)
})