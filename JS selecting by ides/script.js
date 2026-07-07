console.log("hello...")

document.title = "hellooooo"

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[3].style.backgroundColor = "red"

let box = document.getElementById("red")
box.style.backgroundColor = "green"

//in one line---> document.getElementById("red").style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor = "pink"

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "pink"
});

let name = document.getElementsByTagName("div")
console.log(name)

console.log(boxes[2].matches("#red"))

console.log(document.querySelector(".container").contains(boxes[2]))